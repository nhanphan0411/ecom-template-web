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
      AND status = 'Active'
      LIMIT 1
    `)
    .get(id);
}

export function getValue1Options(productSlug: string) {
  return db.prepare(`
    SELECT DISTINCT value1
    FROM inventory
    WHERE product_slug = ?
    ORDER BY value1
  `).all(productSlug);
}

export function getValue2Options(productSlug: string, value1: string) {
  return db.prepare(`
    SELECT DISTINCT value2
    FROM inventory
    WHERE product_slug = ? AND value1 = ? AND value2 IS NOT NULL AND value2 != ''
    ORDER BY value2
  `).all(productSlug, value1);
}