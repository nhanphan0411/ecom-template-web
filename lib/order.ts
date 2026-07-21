import { db } from "./db";

export function createOrderWithDetails(order: any, items: any[]) {
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

  const runTransaction = db.transaction((order: any, items: any[]) => {
    const result = insertOrder.run(
      order.created_at,
      order.payment_status,
      order.payment_method,
      order.customer_name,
      order.email,
      order.phone,
      order.address,
      order.notes,
      order.subtotal,
      order.currency
    );

    const orderId = Number(result.lastInsertRowid);

    for (const item of items) {
      insertDetail.run(
        orderId,
        item.variant_id,
        item.quantity,
        item.unit_price,
        item.total_price
      );
    }

    return orderId;
  });

  return runTransaction(order, items);
}