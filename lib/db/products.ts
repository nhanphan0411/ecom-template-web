import { getDB } from "@/lib/d1";

export async function getProductsByCollection(collection: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE collection_slug = ? AND status = 'Active' ORDER BY id`)
    .bind(collection)
    .all();
  return results;
}

export async function getProduct(slug: string) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM products WHERE product_slug = ?`)
    .bind(slug)
    .first();
}

export async function getProductBySlug(slug: string) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM products WHERE product_slug = ? LIMIT 1`)
    .bind(slug)
    .first();
}

export async function getAllProducts() {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE status = 'Active' ORDER BY id`)
    .all();
  return results;
}

export async function getProductsByCollectionAdmin(collection: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE collection_slug = ? ORDER BY id`)
    .bind(collection)
    .all();
  return results;
}

export async function saveProducts(products: any[]) {
  const db = await getDB();
  await db.prepare(`DELETE FROM products`).run();

  const stmt = db.prepare(`
    INSERT INTO products (
      id, collection_slug, product_name, product_slug,
      category, status, description, shipping, sizeGuide, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const batch = products.map((p) =>
    stmt.bind(
      p.id, p.collection_slug, p.product_name, p.product_slug,
      p.category, p.status, p.description, p.shipping, p.sizeGuide, p.notes
    )
  );

  if (batch.length > 0) await db.batch(batch);
}