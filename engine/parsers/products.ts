export interface Product {
  id: number;
  collection_slug: string;
  product_name: string;
  product_slug: string;
  category: string;
  status: "Active" | "Disabled";
  description: string;
  shipping: string;
  sizeGuide: string;
  notes: string;
}

export function validateProducts(rows: Record<string, string>[]): Product[] {
  return rows.map((row) => ({
    id: Number(row.ID),
    collection_slug: row.Collection_Slug,
    product_name: row.Product_Name,
    product_slug: row.Product_Slug.toLowerCase(),
    category: row.Category,
    status: row.Status as "Active" | "Disabled",
    description: row.Description,
    shipping: row.Shipping,
    sizeGuide: row.Size_Guide,
    notes: row.Notes,
  }));
}