import "./env";

import { createTables } from "./schema";
import { saveCollections } from "./saveCollection";
import { saveProducts } from "./saveProducts";

async function main() {

  const { readSheet } = await import("./google/sheets");
  const { parseRows } = await import("./parsers/parser");
  const { validateCollections } = await import("./parsers/collections");

  createTables();

  const rows = await readSheet("Collection");

  const collections = validateCollections(
    parseRows(rows)
  );

  saveCollections(collections);

  console.log("Collections saved.");

  const { validateProducts } = await import("./parsers/products");
  const { saveProducts } = await import("./saveProducts");

  const productRows = await readSheet("Product");

  const products = validateProducts(
    parseRows(productRows)
  );

  saveProducts(products);
  console.log("Products saved.");

  const { validateInventory } = await import("./parsers/inventory");
  const { saveInventory } = await import("./saveInventory");

  const inventoryRows = await readSheet("Inventory");

  const inventory = validateInventory(
    parseRows(inventoryRows)
  );

  saveInventory(inventory);
  console.log("Inventories saved.");
}

main();