import { getDB } from "@/lib/d1";
import {
  Order,
  OrderDetail,
  Inventory,
  CartItem,
  NewOrder,
} from "@/types/db";
import { getVariantById } from "./inventory";

export async function createOrderWithDetails(
  order: NewOrder,
  cart: CartItem[]
): Promise<number> {
  const db = await getDB();

  // Prevent duplicate submissions
  if (order.idempotency_key) {
    const existing = (await db
      .prepare(`SELECT id FROM orders WHERE idempotency_key = ?`)
      .bind(order.idempotency_key)
      .first()) as Pick<Order, "id"> | null;

    if (existing) return existing.id;
  }

  let subtotal = 0;

  const lines: Omit<OrderDetail, "id" | "order_id">[] = [];

  for (const item of cart) {
    const variant = (await getVariantById(
      item.variant_id
    )) as Inventory | null;

    if (!variant || variant.status !== "Active") {
      throw new Error(`Variant ${item.variant_id} is not available`);
    }

    if ((variant.stock ?? 0) < item.quantity) {
      throw new Error(`Not enough stock for variant ${item.variant_id}`);
    }

    subtotal += (variant.priceVND ?? 0) * item.quantity;

    lines.push({
      variant_id: item.variant_id,
      quantity: item.quantity,
      unit_price: variant.priceVND ?? 0,
      total_price: (variant.priceVND ?? 0) * item.quantity,
    });
  }

  const result = await db
    .prepare(`
      INSERT INTO orders (
        created_at,
        payment_status,
        payment_method,
        customer_name,
        email,
        phone,
        address,
        notes,
        subtotal,
        currency,
        idempotency_key
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      order.created_at,
      order.payment_status,
      order.payment_method,
      order.customer_name,
      order.email,
      order.phone,
      order.address,
      order.notes,
      subtotal,
      order.currency,
      order.idempotency_key ?? null
    )
    .run();

  const orderId = Number(result.meta.last_row_id);

  if (lines.length > 0) {
    const stmt = db.prepare(`
      INSERT INTO order_details
      (order_id, variant_id, quantity, unit_price, total_price)
      VALUES (?, ?, ?, ?, ?)
    `);

    await db.batch(
      lines.map((line) =>
        stmt.bind(
          orderId,
          line.variant_id,
          line.quantity,
          line.unit_price,
          line.total_price
        )
      )
    );
  }

  return orderId;
}

export async function getOrder(id: number): Promise<Order | null> {
  const db = await getDB();

  return (await db
    .prepare(`SELECT * FROM orders WHERE id = ?`)
    .bind(id)
    .first()) as Order | null;
}

export async function getOrderDetails(
  orderId: number
): Promise<OrderDetail[]> {
  const db = await getDB();

  const { results } = await db
    .prepare(`
      SELECT *
      FROM order_details
      WHERE order_id = ?
      ORDER BY id
    `)
    .bind(orderId)
    .all();

  return results as unknown as OrderDetail[];
}