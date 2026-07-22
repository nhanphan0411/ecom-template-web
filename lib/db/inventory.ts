import { getDB } from "@/lib/d1";

export async function getInventory(product: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM inventory WHERE product_slug = ? AND status = 'Active' ORDER BY id`)
    .bind(product)
    .all();
  return results;
}

export async function getVariantById(id: number) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM inventory WHERE id = ? AND status = 'Active' LIMIT 1`)
    .bind(id)
    .first();
}

export async function getValue1Options(productSlug: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT DISTINCT value1 FROM inventory WHERE product_slug = ? ORDER BY value1`)
    .bind(productSlug)
    .all();
  return results;
}

export async function getValue2Options(productSlug: string, value1: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`
      SELECT DISTINCT value2 FROM inventory
      WHERE product_slug = ? AND value1 = ? AND value2 IS NOT NULL AND value2 != ''
      ORDER BY value2
    `)
    .bind(productSlug, value1)
    .all();
  return results;
}

export async function saveInventory(inventory: any[]) {
  const db = await getDB();
  await db.prepare(`DELETE FROM inventory`).run();

  const stmt = db.prepare(`
    INSERT INTO inventory (
      id, collection_slug, product_slug,
      variant1, value1, variant2, value2, variant3, value3,
      stock, priceVND, priceUSD, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const batch = inventory.map((item) =>
    stmt.bind(
      item.id, item.collection_slug, item.product_slug,
      item.variant1, item.value1, item.variant2, item.value2, item.variant3, item.value3,
      item.stock, item.priceVND, item.priceUSD, item.status
    )
  );

  if (batch.length > 0) await db.batch(batch);
}