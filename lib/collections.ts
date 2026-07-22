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

export function getAllCollectionsAdmin() {
  return db
    .prepare(`
      SELECT *
      FROM collections
      ORDER BY id
    `)
    .all();
}