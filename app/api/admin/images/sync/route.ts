import { NextRequest, NextResponse } from "next/server";
import {
  getImages,
  insertImage,
  getImageById,
  deleteImageRow,
  updateSortOrders,
} from "@/lib/db/images";
import { uploadImage } from "@/engine/cloudfare/r2";
import { validateImageFile } from "@/lib/imageValidation";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const productSlug = formData.get("product_slug") as string;
  const value1 = formData.get("value1") as string;
  const value2 = (formData.get("value2") as string | null) || null;
  const deleteIds: number[] = JSON.parse(formData.get("deleteIds") as string);
  const order: any[] = JSON.parse(formData.get("order") as string);
  const files = formData.getAll("file") as File[];

  if (!productSlug || !value1) {
    return NextResponse.json(
      { error: "product_slug and value1 required" },
      { status: 400 }
    );
  }

  // Validate every new file up front — reject the whole batch if any
  // file is bad, rather than partially uploading and leaving the admin
  // guessing which one failed.
  const validationErrors: string[] = [];
  for (const file of files) {
    const result = validateImageFile(file);
    if (!result.valid) validationErrors.push(result.error!);
  }

  if (validationErrors.length > 0) {
    return NextResponse.json({ error: validationErrors.join(" ") }, { status: 400 });
  }

  const failures: string[] = [];

  // 1. Deletes — deleteImageRow removes the DB row first, then
  // best-effort removes the R2 object, so a storage hiccup can never
  // leave a dangling DB reference to a missing file.
  for (const id of deleteIds) {
    try {
      const image = await getImageById(id);
      if (image) await deleteImageRow(id);
    } catch (err) {
      console.error(`Failed to delete image ${id}:`, err);
      failures.push(`Could not delete image #${id}`);
    }
  }

  // 2. Uploads — map fileIndex -> new id
  const fileIndexToId: Record<number, number> = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    try {
      const { ext } = validateImageFile(file);
      const buffer = Buffer.from(await file.arrayBuffer());
      const keyPath = value2
        ? `Products/${productSlug}/${value1}/${value2}`
        : `Products/${productSlug}/${value1}`;
      const r2Key = `${keyPath}/${crypto.randomUUID()}.${ext}`;

      const url = await uploadImage(r2Key, buffer, file.type);
      const id = await insertImage(productSlug, value1, value2, r2Key, url);

      fileIndexToId[i] = id;
    } catch (err) {
      console.error(`Failed to upload "${file.name}":`, err);
      failures.push(`Could not upload "${file.name}"`);
    }
  }

  // 3. Final sort order — skip any entry whose upload failed, since it
  // has no id to reference.
  const finalOrder = order
    .map((entry, index) => ({
      id: entry.type === "existing" ? entry.id : fileIndexToId[entry.fileIndex],
      sort_order: index,
    }))
    .filter((entry) => entry.id !== undefined);

  await updateSortOrders(finalOrder);

  const images = await getImages(productSlug, value1, value2 ?? undefined);

  return NextResponse.json({
    images,
    failures: failures.length > 0 ? failures : undefined,
  });
}