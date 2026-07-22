import { NextRequest, NextResponse } from "next/server";
import { getValue2Options } from "@/lib/db/inventory";

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get("product");
  const value1 = req.nextUrl.searchParams.get("value1");
  if (!product || !value1) {
    return NextResponse.json({ error: "product and value1 required" }, { status: 400 });
  }
  return NextResponse.json(await getValue2Options(product, value1));
}