import { NextRequest, NextResponse } from "next/server";
import { updateSortOrders } from "@/lib/images";

export async function PATCH(req: NextRequest) {
  const { order } = await req.json();

  if (!Array.isArray(order)) {
    return NextResponse.json({ error: "order array required" }, { status: 400 });
  }

  updateSortOrders(order);
  return NextResponse.json({ success: true });
}