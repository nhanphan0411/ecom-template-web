import { getDB } from "@/lib/d1";
import { getVariantById } from "./inventory";

export async function createOrderWithDetails(order: any, cart: any[]) {
  const db = await getDB();

  // Duplicate submission check
  if (order.idempotency_key) {
    const existing: any = await db
      .prepare(`SELECT id FROM orders WHERE idempotency_key = ?`)
      .bind(order.idempotency_key)
      .first();
    if (existing) return existing.id;
  }

  // Validate stock and build order lines
  let subtotal = 0;
  const lines: any[] = [];

  for (const item of cart) {
    const variant: any = await getVariantById(item.variant_id);

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

  // Insert order
  const result = await db
    .prepare(`
      INSERT INTO orders (
        created_at, payment_status, payment_method,
        customer_name, email, phone, address, notes,
        subtotal, currency, idempotency_key
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      order.created_at, order.payment_status, order.payment_method,
      order.customer_name, order.email, order.phone, order.address, order.notes,
      subtotal, order.currency, order.idempotency_key ?? null
    )
    .run();

  const orderId = Number(result.meta.last_row_id);

  // Insert details (batched together, atomic as a group)
  if (lines.length > 0) {
    const insertDetail = db.prepare(`
      INSERT INTO order_details (order_id, variant_id, quantity, unit_price, total_price)
      VALUES (?, ?, ?, ?, ?)
    `);

    await db.batch(
      lines.map((line) =>
        insertDetail.bind(orderId, line.variant_id, line.quantity, line.unit_price, line.total_price)
      )
    );
  }

  // NOTE: stock decrement was already commented out in the original code.
  // If you want it, do it here as its own db.batch() of UPDATE statements.
  // Just know D1 can't roll back the order insert above if this step fails —
  // same caveat that existed before with the commented-out block.

  return orderId;
}

export async function getOrder(id: number) {
  const db = await getDB();
  return db.prepare(`SELECT * FROM orders WHERE id = ?`).bind(id).first();
}

export async function getOrderDetails(orderId: number) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM order_details WHERE order_id = ? ORDER BY id`)
    .bind(orderId)
    .all();
  return results;
}