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
): Promise<string> {
  const db = await getDB();
  const publicId = crypto.randomUUID();

  // Prevent duplicate submissions
  if (order.idempotency_key) {
    const existing = await db
  .prepare(`SELECT public_id FROM orders WHERE idempotency_key = ?`)
  .bind(order.idempotency_key)
  .first<{ public_id: string }>();

if (existing) return existing.public_id;
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
        public_id,
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
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      publicId,
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

  return publicId;
}

export async function getOrder(id: number): Promise<Order | null> {
  const db = await getDB();

  return (await db
    .prepare(`SELECT * FROM orders WHERE public_id = ?`)
    .bind(id)
    .first()) as Order | null;
}

export async function getOrderWithItems(publicId: string) {
  const db = await getDB();

  const order = await db
    .prepare(`SELECT * FROM orders WHERE public_id = ?`)
    .bind(publicId)
    .first<Order>();

  if (!order) return null;

  const { results } = await db
    .prepare(`
SELECT
  od.id,
  od.quantity,
  od.unit_price,
  od.total_price,

  i.id                AS variant_id,
  i.variant1,
  i.value1,
  i.variant2,
  i.value2,
  i.variant3,
  i.value3,
  i.stock,
  i.priceVND,
  i.priceUSD,
  i.status,

  p.id                AS product_id,
  p.product_name,
  p.product_slug,
  p.description,
  p.shipping,
  p.sizeGuide,
  p.notes,

  (
    SELECT url_thumb
    FROM images img
    WHERE img.product_slug = i.product_slug
      AND (
        img.value1 IS NULL
        OR img.value1 = i.value1
      )
      AND (
        img.value2 IS NULL
        OR img.value2 = i.value2
      )
    ORDER BY sort_order
    LIMIT 1
  ) AS image

FROM order_details od

JOIN inventory i
ON od.variant_id = i.id

JOIN products p
ON p.product_slug = i.product_slug

WHERE od.order_id = ?

ORDER BY od.id
`)
    .bind(order.id)
    .all();

  const items = (results as any[]).map((row) => ({
    available: true,

    quantity: row.quantity,
    unit_price: row.unit_price,
    total_price: row.total_price,

    image: row.image,

    product: {
      id: row.product_id,
      product_name: row.product_name,
      product_slug: row.product_slug,
      description: row.description,
      shipping: row.shipping,
      sizeGuide: row.sizeGuide,
      notes: row.notes,
    },

    variant: {
      id: row.variant_id,
      variant1: row.variant1,
      value1: row.value1,
      variant2: row.variant2,
      value2: row.value2,
      variant3: row.variant3,
      value3: row.value3,
      stock: row.stock,
      priceVND: row.priceVND,
      priceUSD: row.priceUSD,
      status: row.status,
    },
  }));

  return {
    ...order,
    items,
  };
}

export async function getAllOrdersAdmin(): Promise<Order[]> {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM orders ORDER BY id DESC`)
    .all();
  return results as unknown as Order[];
}