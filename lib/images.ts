import { db } from "./db";

export function getImages(productSlug: string, value1: string, value2?: string) {
  return db.prepare(`
    SELECT * FROM images
    WHERE product_slug = ?
    AND value1 = ?
    AND IFNULL(value2,'') = IFNULL(?, '')
    ORDER BY sort_order ASC, id ASC
  `).all(productSlug, value1, value2 ?? null);
}

export function insertImage(
  productSlug: string,
  value1: string,
  value2: string | null,
  r2Key: string,
  url: string
) {
  const maxOrder: any = db.prepare(`
    SELECT COALESCE(MAX(sort_order), 0) as max FROM images
    WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
  `).get(productSlug, value1, value2 ?? null);

  const stmt = db.prepare(`
    INSERT INTO images (product_slug, value1, value2, r2_key, url, sort_order)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(productSlug, value1, value2 ?? null, r2Key, url, maxOrder.max + 1);
  return result.lastInsertRowid;
}

export function getImageById(id: number): any {
  return db.prepare(`SELECT * FROM images WHERE id = ?`).get(id);
}

export function deleteImageRow(id: number) {
  db.prepare(`DELETE FROM images WHERE id = ?`).run(id);
}

export function updateSortOrders(order: { id: number; sort_order: number }[]) {
  const stmt = db.prepare(`UPDATE images SET sort_order = ? WHERE id = ?`);
  const tx = db.transaction((items: { id: number; sort_order: number }[]) => {
    for (const item of items) {
      stmt.run(item.sort_order, item.id);
    }
  });
  tx(order);
}

export function getAllImagesForProduct(productSlug: string) {
  return db.prepare(`
    SELECT * FROM images
    WHERE product_slug = ?
    ORDER BY sort_order ASC, id ASC
  `).all(productSlug);
}