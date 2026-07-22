import { NextRequest, NextResponse } from "next/server";
import { getValue1Options } from "@/lib/db/inventory";

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get("product");
  if (!product) {
    return NextResponse.json({ error: "product required" }, { status: 400 });
  }
  return NextResponse.json(await getValue1Options(product));
}