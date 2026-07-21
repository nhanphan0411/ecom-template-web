export interface Collection {
  id: number;
  collection_name: string;
  collection_slug: string;
  description: string;
  status: "Active" | "Disabled";
}

export function validateCollections(
  rows: Record<string, string>[]
): Collection[] {
  return rows.map((row) => ({
    id: Number(row.ID),
    collection_name: row.Collection_Name,
    collection_slug: row.Collection_Slug.toLowerCase(),
    description: row.Description,
    status: row.Status as "Active" | "Disabled",
  }));
}