import { db } from "./db";

export function saveCollections(collections: any[]) {

  db.exec("DELETE FROM collections");

  const stmt = db.prepare(`
    INSERT INTO collections (
      id,
      collection_name,
      collection_slug,
      description,
      status
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const c of collections) {
    stmt.run(
      c.id,
      c.collection_name,
      c.collection_slug,
      c.description,
      c.status
    );
  }

}