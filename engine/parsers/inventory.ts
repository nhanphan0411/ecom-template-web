export interface Inventory {
  id: number;

  collection_slug: string;
  product_slug: string;

  variant1: string;
  value1: string;

  variant2: string;
  value2: string;

  variant3: string;
  value3: string;

  stock: number;

  priceVND: number;
  priceUSD: number;

  status: string;
}

export function validateInventory(
  rows: Record<string, string>[]
): Inventory[] {

  return rows.map((row) => ({

    id: Number(row.ID),

    collection_slug: row.Collection_Slug,
    product_slug: row.Product_Slug,

    variant1: row.Variant_1,
    value1: row.Value_1,

    variant2: row.Variant_2,
    value2: row.Value_2,

    variant3: row.Variant_3,
    value3: row.Value_3,

    stock: Number(row.Stock),

    priceVND: Number(
      row.Price_VND.replace(/,/g, "")
    ),

    priceUSD: Number(
      row.Price_USD.replace(/,/g, "")
    ),

    status: row.Status,

  }));

}