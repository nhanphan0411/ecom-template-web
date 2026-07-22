import { getDB } from "@/lib/d1";

export async function getImages(productSlug: string, value1: string, value2?: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`
      SELECT * FROM images
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
      ORDER BY sort_order ASC, id ASC
    `)
    .bind(productSlug, value1, value2 ?? null)
    .all();
  return results;
}

export async function insertImage(
  productSlug: string,
  value1: string,
  value2: string | null,
  r2Key: string,
  url: string
) {
  const db = await getDB();

  const maxOrder: any = await db
    .prepare(`
      SELECT COALESCE(MAX(sort_order), 0) as max FROM images
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
    `)
    .bind(productSlug, value1, value2 ?? null)
    .first();

  const result = await db
    .prepare(`
      INSERT INTO images (product_slug, value1, value2, r2_key, url, sort_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    .bind(productSlug, value1, value2 ?? null, r2Key, url, (maxOrder?.max ?? 0) + 1)
    .run();

  return result.meta.last_row_id;
}

export async function getImageById(id: number): Promise<any> {
  const db = await getDB();
  return db.prepare(`SELECT * FROM images WHERE id = ?`).bind(id).first();
}

export async function deleteImageRow(id: number) {
  const db = await getDB();
  await db.prepare(`DELETE FROM images WHERE id = ?`).bind(id).run();
}

export async function updateSortOrders(order: { id: number; sort_order: number }[]) {
  const db = await getDB();
  const stmt = db.prepare(`UPDATE images SET sort_order = ? WHERE id = ?`);
  const batch = order.map((item) => stmt.bind(item.sort_order, item.id));
  if (batch.length > 0) await db.batch(batch);
}

export async function getAllImagesForProduct(productSlug: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM images WHERE product_slug = ? ORDER BY sort_order ASC, id ASC`)
    .bind(productSlug)
    .all();
  return results;
}