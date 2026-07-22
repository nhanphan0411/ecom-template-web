import { NextRequest, NextResponse } from "next/server";
import { getImageById, deleteImageRow } from "@/lib/db/images";
import { deleteImage } from "@/engine/cloudfare/r2";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const image: any = await getImageById(Number(id));

  if (!image) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  await deleteImage(image.r2_key);
  await deleteImageRow(Number(id));

  return NextResponse.json({ success: true });
}