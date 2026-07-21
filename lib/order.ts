import { db } from "./db";
import { getVariantById } from "./inventory";

export function createOrderWithDetails(order: any, cart: any[]) {

  const insertOrder = db.prepare(`
    INSERT INTO orders (
      created_at, payment_status, payment_method,
      customer_name, email, phone, address, notes,
      subtotal, currency, idempotency_key
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertDetail = db.prepare(`
    INSERT INTO order_details (
      order_id, variant_id, quantity, unit_price, total_price
    ) VALUES (?, ?, ?, ?, ?)
  `);

  const decrementStock = db.prepare(`
    UPDATE inventory SET stock = stock - ? WHERE id = ? AND stock >= ?
  `);

  const checkExisting = db.prepare(`
    SELECT id FROM orders WHERE idempotency_key = ?
  `);

  const runTransaction = db.transaction((order: any, cart: any[]) => {

    // Duplicate submission check
    if (order.idempotency_key) {
      const existing = checkExisting.get(order.idempotency_key) as { id: number } | undefined;
      if (existing) {
        return existing.id;
      }
    }

    // Validate stock and build order lines
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

    // Insert order
    const result = insertOrder.run(
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
    );

    const orderId = Number(result.lastInsertRowid);

    // Insert details + decrement stock
    for (const line of lines) {
      insertDetail.run(orderId, line.variant_id, line.quantity, line.unit_price, line.total_price);

      // const res = decrementStock.run(line.quantity, line.variant_id, line.quantity);
      // if (res.changes === 0) {
      //   // stock changed between check and write (race condition) — abort everything
      //   throw new Error(`Stock ran out for variant ${line.variant_id}`);
      // }
    }

    return orderId;
  });

  return runTransaction(order, cart);
}

export function getOrder(id: number) {
  return db
    .prepare(`
      SELECT *
      FROM orders
      WHERE id = ?
    `)
    .get(id);
}

export function getOrderDetails(orderId: number) {
  return db
    .prepare(`
      SELECT *
      FROM order_details
      WHERE order_id = ?
      ORDER BY id
    `)
    .all(orderId);
}