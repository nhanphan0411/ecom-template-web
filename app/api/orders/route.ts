import { NextRequest, NextResponse } from "next/server";
import { createOrder, createOrderDetail } from "@/lib/order";
import { getVariantById } from "@/lib/inventory";

export async function POST(req: NextRequest) {

  const body = await req.json();

  let subtotal = 0;

  for (const item of body.cart) {

    const variant: any = getVariantById(item.variant_id);

    subtotal += variant.priceVND * item.quantity;

  }

  const orderId = createOrder({

    created_at: new Date().toISOString(),

    payment_status: "Pending",
    payment_method: body.paymentMethod,

    customer_name: body.customerName,
    email: body.email,
    phone: body.phone,
    address: body.address,
    notes: body.notes,

    subtotal,
    currency: "VND",

  });

  for (const item of body.cart) {

    const variant: any = getVariantById(item.variant_id);

    createOrderDetail({

      order_id: orderId,

      variant_id: item.variant_id,

      quantity: item.quantity,

      unit_price: variant.priceVND,

      total_price: variant.priceVND * item.quantity,

    });

  }

  return NextResponse.json({
    success: true,
    orderId,
  });

}