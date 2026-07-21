import { db } from "./db";

export function getInventory(product: string) {
  return db
    .prepare(
      `
      SELECT *
      FROM inventory
      WHERE product_slug = ?
      AND status = 'Active'
      ORDER BY id
    `
    )
    .all(product);
}

export function getVariantById(id: number) {
  return db
    .prepare(`
      SELECT *
      FROM inventory
      WHERE id = ?
      LIMIT 1
    `)
    .get(id);
}