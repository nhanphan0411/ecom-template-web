import { getDB, queryAll, queryFirst } from "@/lib/d1";
import { deleteImageSafe, deleteImagesSafe } from "@/engine/cloudfare/r2";
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
        product_slug, value1, value2, r2_key, url, sort_order
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

export async function getImageById(id: number): Promise<Image | null> {
  const db = await getDB();

  return queryFirst<Image>(
    db.prepare(`SELECT * FROM images WHERE id = ?`).bind(id)
  );
}

/**
 * Deletes the DB row first, then best-effort deletes the R2 object.
 * DB-first means a failed R2 delete only ever leaves a harmless orphaned
 * object in the bucket — never a broken image reference in the app.
 */
export async function deleteImageRow(id: number): Promise<void> {
  const db = await getDB();

  const image = await getImageById(id);
  if (!image) return;

  await db.prepare(`DELETE FROM images WHERE id = ?`).bind(id).run();

  await deleteImageSafe(image.r2_key);
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

  const batch = order.map((item) => stmt.bind(item.sort_order, item.id));

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

/**
 * Deletes every image row + R2 object for a product. Used when a whole
 * product is deleted — safe because nothing can reference these images
 * afterward.
 */
export async function deleteImagesForProduct(productSlug: string): Promise<void> {
  const db = await getDB();

  const images = await getAllImagesForProduct(productSlug);
  if (images.length === 0) return;

  await db
    .prepare(`DELETE FROM images WHERE product_slug = ?`)
    .bind(productSlug)
    .run();

  await deleteImagesSafe(images.map((img) => img.r2_key));
}

/**
 * Deletes every image row + R2 object for one value1/value2 combination
 * under a product. Used when the last variant referencing that
 * combination is deleted, so its images don't become permanent orphans.
 */
export async function deleteImagesForVariantGroup(
  productSlug: string,
  value1: string,
  value2: string | null
): Promise<void> {
  const images = await getImages(productSlug, value1, value2 ?? undefined);
  if (images.length === 0) return;

  const db = await getDB();

  await db
    .prepare(`
      DELETE FROM images
      WHERE product_slug = ?
        AND value1 = ?
        AND IFNULL(value2,'') = IFNULL(?, '')
    `)
    .bind(productSlug, value1, value2 ?? null)
    .run();

  await deleteImagesSafe(images.map((img) => img.r2_key));
}

/**
 * Re-points every image row for a product to a new product_slug. Used
 * when a product's slug is renamed. The R2 object itself never needs to
 * move — everything is looked up through this DB row, not by
 * re-deriving a path from the slug.
 */
export async function repointImagesToSlug(
  oldProductSlug: string,
  newProductSlug: string
): Promise<void> {
  if (oldProductSlug === newProductSlug) return;

  const db = await getDB();

  await db
    .prepare(`UPDATE images SET product_slug = ? WHERE product_slug = ?`)
    .bind(newProductSlug, oldProductSlug)
    .run();
}