import { db } from "./db";

export function saveImages(images: any[]) {

    const stmt = db.prepare(`
  INSERT INTO images (
  variant_id,
  drive_file_id,
  filename,
  r2_key,
  url
)
VALUES (?, ?, ?, ?, ?)
ON CONFLICT(drive_file_id)
DO UPDATE SET
  variant_id = excluded.variant_id,
  filename = excluded.filename,
  r2_key = excluded.r2_key;
`);

    for (const image of images) {
        stmt.run(
            image.variant_id,
            image.drive_file_id,
            image.filename,
            image.r2_key ?? null,
            image.url ?? null
        );
    }

}