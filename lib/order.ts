import { db } from "./db";

export function createOrder(order: any) {
  const result = db
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
        currency

      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .run(
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

  return Number(result.lastInsertRowid);
}

export function createOrderDetail(item: any) {
  db.prepare(`
    INSERT INTO order_details (

      order_id,
      variant_id,
      quantity,
      unit_price,
      total_price

    )
    VALUES (?, ?, ?, ?, ?)
  `).run(
    item.order_id,
    item.variant_id,
    item.quantity,
    item.unit_price,
    item.total_price
  );
}