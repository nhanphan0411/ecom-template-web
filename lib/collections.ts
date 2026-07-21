import { db } from "./db";

export function getCollections() {
  return db
    .prepare(`
      SELECT *
      FROM collections
      WHERE status = 'Active'
      ORDER BY id
    `)
    .all();
}