import { NextResponse } from "next/server";
import { getAllCollectionsAdmin } from "@/lib/db/collections";

export async function GET() {
  const collections = await getAllCollectionsAdmin();
  return NextResponse.json(collections);
}