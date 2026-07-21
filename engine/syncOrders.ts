import { db } from "./db";
import { writeSheet } from "./google/sheets";

export async function syncOrders() {

  const orders = db.prepare(`
    SELECT *
    FROM orders
    ORDER BY id
  `).all();

  const details = db.prepare(`
    SELECT *
    FROM order_details
    ORDER BY id
  `).all();

  await writeSheet("ORDER", orders);
  await writeSheet("ORDER DETAIL", details);

}