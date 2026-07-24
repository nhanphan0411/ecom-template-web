import { NextRequest, NextResponse } from "next/server";
import { createOrderWithDetails } from "@/lib/db/orders";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as any;
  try {
    const publicId = await createOrderWithDetails(
      {
        created_at: new Date().toISOString(),
        payment_status: "Pending",
        payment_method: body.paymentMethod,
        customer_name: body.customerName,
        email: body.email,
        phone: body.phone,
        address: body.address,
        notes: body.notes,
        currency: body.currency ?? "VND",   // was hardcoded "VND"
        idempotency_key: body.idempotencyKey ?? null,
      },
      body.cart
    );
    return NextResponse.json({ success: true, publicId });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}