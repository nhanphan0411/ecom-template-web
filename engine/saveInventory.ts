import { db } from "./db";

export function saveInventory(inventory: any[]) {

  db.exec("DELETE FROM inventory");

  const stmt = db.prepare(`
    INSERT INTO inventory (
      id,
      collection_slug,
      product_slug,

      variant1,
      value1,

      variant2,
      value2,

      variant3,
      value3,

      stock,

      priceVND,
      priceUSD,

      status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const item of inventory) {

    stmt.run(
      item.id,

      item.collection_slug,
      item.product_slug,

      item.variant1,
      item.value1,

      item.variant2,
      item.value2,

      item.variant3,
      item.value3,

      item.stock,

      item.priceVND,
      item.priceUSD,

      item.status
    );

  }

}