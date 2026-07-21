import { db } from "./db";

export function saveProducts(products: any[]) {

  db.exec("DELETE FROM products");

  const stmt = db.prepare(`
    INSERT INTO products (
      id,
      collection_slug,
      product_name,
      product_slug,
      category,
      status,
      description,
      shipping,
      sizeGuide,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const p of products) {
    stmt.run(
      p.id,
      p.collection_slug,
      p.product_name,
      p.product_slug,
      p.category,
      p.status,
      p.description,
      p.shipping,
      p.sizeGuide,
      p.notes
    );
  }
}