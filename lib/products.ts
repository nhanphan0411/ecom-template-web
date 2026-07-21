import { db } from "./db";

export function getProductsByCollection(collection: string) {
  return db
    .prepare(
      `
      SELECT *
      FROM products
      WHERE collection_slug = ?
      AND status = 'Active'
      ORDER BY id
    `
    )
    .all(collection);
}

export function getProduct(slug: string) {
  return db
    .prepare(
      `
      SELECT *
      FROM products
      WHERE product_slug = ?
    `
    )
    .get(slug);
}

export function getProductBySlug(slug: string) {
  return db
    .prepare(
      `
      SELECT *
      FROM products
      WHERE product_slug = ?
      LIMIT 1
    `
    )
    .get(slug);
}