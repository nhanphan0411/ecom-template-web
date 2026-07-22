import { getDB, queryAll, queryFirst } from "@/lib/d1";
import type { Image } from "@/types/db";

export async function getImages(
  productSlug: string,
  value1: string,
  value2?: string
): Promise<Image[]> {
  const db = await getDB();

  return queryAll<Image>(
    db
      .prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
        ORDER BY sort_order ASC, id ASC
      `)
      .bind(productSlug, value1, value2 ?? null)
  );
}

export async function insertImage(
  productSlug: string,
  value1: string,
  value2: string | null,
  r2Key: string,
  url: string
): Promise<number> {
  const db = await getDB();

  const maxOrder = await queryFirst<{ max: number }>(
    db
      .prepare(`
        SELECT COALESCE(MAX(sort_order), 0) AS max
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
      `)
      .bind(productSlug, value1, value2 ?? null)
  );

  const result = await db
    .prepare(`
      INSERT INTO images (
        product_slug,
        value1,
        value2,
        r2_key,
        url,
        sort_order
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    .bind(
      productSlug,
      value1,
      value2 ?? null,
      r2Key,
      url,
      (maxOrder?.max ?? 0) + 1
    )
    .run();

  return Number(result.meta.last_row_id);
}

export async function getImageById(
  id: number
): Promise<Image | null> {
  const db = await getDB();

  return queryFirst<Image>(
    db.prepare(`
      SELECT *
      FROM images
      WHERE id = ?
    `).bind(id)
  );
}

export async function deleteImageRow(
  id: number
): Promise<void> {
  const db = await getDB();

  await db
    .prepare(`
      DELETE FROM images
      WHERE id = ?
    `)
    .bind(id)
    .run();
}

export async function updateSortOrders(
  order: { id: number; sort_order: number }[]
): Promise<void> {
  const db = await getDB();

  const stmt = db.prepare(`
    UPDATE images
    SET sort_order = ?
    WHERE id = ?
  `);

  const batch = order.map((item) =>
    stmt.bind(item.sort_order, item.id)
  );

  if (batch.length > 0) {
    await db.batch(batch);
  }
}

export async function getAllImagesForProduct(
  productSlug: string
): Promise<Image[]> {
  const db = await getDB();

  return queryAll<Image>(
    db
      .prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
        ORDER BY sort_order ASC, id ASC
      `)
      .bind(productSlug)
  );
}