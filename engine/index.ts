import "./env";
import { db } from "./db";

import { createTables } from "./schema";
import { saveCollections } from "./saveCollection";
import { saveProducts } from "./saveProducts";
import { scanAllCollections } from "./google/drive";
import { saveImages } from "./saveImages";

async function main() {
  const { readSheet } = await import("./google/sheets");
  const { parseRows } = await import("./parsers/parser");
  const { validateCollections } = await import("./parsers/collections");
  const { validateProducts } = await import("./parsers/products");
  const { validateInventory } = await import("./parsers/inventory");
  const { saveInventory } = await import("./saveInventory");


  createTables();


  const rows = await readSheet("Collection");
  const collections = validateCollections(
    parseRows(rows)
  );
  saveCollections(collections);
  console.log("Collections saved.");


  const productRows = await readSheet("Product");
  const products = validateProducts(
    parseRows(productRows)
  );
  saveProducts(products);
  console.log("Products saved.");


  const inventoryRows = await readSheet("Inventory");
  const inventory = validateInventory(
    parseRows(inventoryRows)
  );
  saveInventory(inventory);
  console.log("Inventories saved.");


  const images = await scanAllCollections(process.env.GOOGLE_PRODUCT_FOLDER_ID!);
  saveImages(images);

  console.log("Images saved.");
}

main();