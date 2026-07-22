import { db } from "./db";

export function deleteRemovedImages(scannedImages: any[]) {

  const existing: any[] = db.prepare(`
    SELECT id, drive_file_id, r2_key
    FROM images
  `).all();

  const scannedIds = new Set(
    scannedImages.map(img => img.drive_file_id)
  );

  const removed = existing.filter(
    img => !scannedIds.has(img.drive_file_id)
  );

  console.log("Removed images:", removed.length);

  return removed;
}