import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getVariantById } from "@/lib/inventory";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const insertOrder = db.prepare(`
    INSERT INTO orders (
      created_at, payment_status, payment_method,
      customer_name, email, phone, address, notes,
      subtotal, currency
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertDetail = db.prepare(`
    INSERT INTO order_details (
      order_id, variant_id, quantity, unit_price, total_price
    ) VALUES (?, ?, ?, ?, ?)
  `);

  const decrementStock = db.prepare(`
    UPDATE inventory SET stock = stock - ? WHERE id = ? AND stock >= ?
  `);

  const placeOrder = db.transaction((cart: any[]) => {
    let subtotal = 0;
    const lines: any[] = [];

    for (const item of cart) {
      const variant: any = getVariantById(item.variant_id);

      if (!variant || variant.status !== "Active") {
        throw new Error(`Variant ${item.variant_id} is not available`);
      }
      if (variant.stock < item.quantity) {
        throw new Error(`Not enough stock for variant ${item.variant_id}`);
      }

      subtotal += variant.priceVND * item.quantity;
      lines.push({
        variant_id: item.variant_id,
        quantity: item.quantity,
        unit_price: variant.priceVND,
        total_price: variant.priceVND * item.quantity,
      });
    }

    if (body.idempotencyKey) {
      const existing = db.prepare(`SELECT id FROM orders WHERE idempotency_key = ?`).get(body.idempotencyKey);
      if (existing) return (existing as any).id; // already placed, return same order id
    }

    const result = insertOrder.run(
      new Date().toISOString(),
      "Pending",
      body.paymentMethod,
      body.customerName,
      body.email,
      body.phone,
      body.address,
      body.notes,
      subtotal,
      "VND"
    );

    const orderId = Number(result.lastInsertRowid);

    for (const line of lines) {
      insertDetail.run(orderId, line.variant_id, line.quantity, line.unit_price, line.total_price);

      const res = decrementStock.run(line.quantity, line.variant_id, line.quantity);
      if (res.changes === 0) {
        // stock changed between check and write (race condition) — abort everything
        throw new Error(`Stock ran out for variant ${line.variant_id}`);
      }
    }

    return orderId;
  });

  try {
    const orderId = placeOrder(body.cart);
    return NextResponse.json({ success: true, orderId });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}