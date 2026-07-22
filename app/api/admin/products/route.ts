import { NextRequest, NextResponse } from "next/server";
import { getProductsByCollectionAdmin } from "@/lib/db/products";

export async function GET(req: NextRequest) {
  const collection = req.nextUrl.searchParams.get("collection");
  if (!collection) {
    return NextResponse.json({ error: "collection required" }, { status: 400 });
  }
  const products = await getProductsByCollectionAdmin(collection);
  return NextResponse.json(products);
}