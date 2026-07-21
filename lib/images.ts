import { db } from "./db";

export function getVariantId(
  productSlug: string,
  value1: string,
  value2?: string
) {
  return db
    .prepare(`
      SELECT id
      FROM inventory
      WHERE product_slug = ?
      AND value1 = ?
      AND IFNULL(value2,'') = IFNULL(?, '')
      LIMIT 1
    `)
    .get(productSlug, value1, value2 ?? "");
}