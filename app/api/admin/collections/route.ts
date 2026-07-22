import { NextResponse } from "next/server";
import { getAllCollectionsAdmin } from "@/lib/collections";

export async function GET() {
  const collections = getAllCollectionsAdmin();
  return NextResponse.json(collections);
}