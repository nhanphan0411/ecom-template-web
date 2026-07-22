import { NextRequest, NextResponse } from "next/server";
import { getImages, insertImage, getImageById, deleteImageRow, updateSortOrders } from "@/lib/db/images";
import { uploadImage, deleteImage } from "@/engine/cloudfare/r2";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const productSlug = formData.get("product_slug") as string;
  const value1 = formData.get("value1") as string;
  const value2 = (formData.get("value2") as string | null) || null;
  const deleteIds: number[] = JSON.parse(formData.get("deleteIds") as string);
  const order: any[] = JSON.parse(formData.get("order") as string);
  const files = formData.getAll("file") as File[];

  if (!productSlug || !value1) {
    return NextResponse.json({ error: "product_slug and value1 required" }, { status: 400 });
  }

  // 1. Deletes
  for (const id of deleteIds) {
    const image: any = await getImageById(id);
    if (image) {
      await deleteImage(image.r2_key);
      await deleteImageRow(id);
    }
  }

  // 2. Uploads — map fileIndex -> new id
  const fileIndexToId: Record<number, number> = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop();
    const keyPath = value2
      ? `Products/${productSlug}/${value1}/${value2}`
      : `Products/${productSlug}/${value1}`;
    const r2Key = `${keyPath}/${crypto.randomUUID()}.${ext}`;

    const url = await uploadImage(r2Key, buffer, file.type || "image/png");
    const id = await insertImage(productSlug, value1, value2, r2Key, url) as number;

    fileIndexToId[i] = id;
  }

  // 3. Final sort order
  const finalOrder = order.map((entry, index) => ({
    id: entry.type === "existing" ? entry.id : fileIndexToId[entry.fileIndex],
    sort_order: index,
  }));

  await updateSortOrders(finalOrder);

  const images = await getImages(productSlug, value1, value2 ?? undefined);
  return NextResponse.json(images);
}