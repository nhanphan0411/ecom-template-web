import { getDB } from "@/lib/d1";

export async function getCollections() {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM collections WHERE status = 'Active' ORDER BY id`)
    .all();
  return results;
}

export async function getAllCollectionsAdmin() {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM collections ORDER BY id`)
    .all();
  return results;
}

export async function saveCollections(collections: any[]) {
  const db = await getDB();
  await db.prepare(`DELETE FROM collections`).run();

  const stmt = db.prepare(`
    INSERT INTO collections (id, collection_name, collection_slug, description, status)
    VALUES (?, ?, ?, ?, ?)
  `);

  const batch = collections.map((c) =>
    stmt.bind(c.id, c.collection_name, c.collection_slug, c.description, c.status)
  );

  if (batch.length > 0) await db.batch(batch);
}