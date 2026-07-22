import { db } from "./db";
import { downloadFile } from "./google/drive";
import { uploadImage } from "./cloudfare/r2";

export async function uploadImages() {

  const images: any[] = db.prepare(`
    SELECT *
    FROM images
    WHERE url IS NULL
  `).all();

  const update = db.prepare(`
    UPDATE images
    SET url = ?
    WHERE id = ?
  `);

  for (const image of images) {

    const buffer = await downloadFile(image.drive_file_id);

    const url = await uploadImage(
      image.r2_key,
      buffer,
      "image/png"
    );

    update.run(url, image.id);

    console.log("Uploaded:", image.r2_key);
  }

}