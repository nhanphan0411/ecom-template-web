import { db } from "./db";

export function saveImages(images: any[]) {

  db.exec("DELETE FROM images");

  const stmt = db.prepare(`
    INSERT INTO images (
      variant_id,
      drive_file_id,
      filename,
      url,
      sort_order
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const image of images) {
    stmt.run(
      image.variant_id,
      image.drive_file_id,
      image.filename,
      image.url ?? null,
      image.sort_order
    );
  }

}