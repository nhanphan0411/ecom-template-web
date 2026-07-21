import { db } from "./db";

export function createTables() {
  
  db.exec(`
    CREATE TABLE IF NOT EXISTS collections (
      id INTEGER PRIMARY KEY,
      collection_name TEXT NOT NULL,
      collection_slug TEXT NOT NULL UNIQUE,
      description TEXT,
      status TEXT NOT NULL
    );
  `);

  db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    collection_slug TEXT NOT NULL,
    product_name TEXT NOT NULL,
    product_slug TEXT NOT NULL UNIQUE,
    category TEXT,
    status TEXT NOT NULL,
    description TEXT,
    shipping TEXT,
    sizeGuide TEXT,
    notes TEXT
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY,
    collection_slug TEXT NOT NULL,
    product_slug TEXT NOT NULL,

    variant1 TEXT,
    value1 TEXT,

    variant2 TEXT,
    value2 TEXT,

    variant3 TEXT,
    value3 TEXT,

    stock INTEGER,
    priceVND INTEGER,
    priceUSD REAL,

    status TEXT NOT NULL
  );
`);

db.exec(`
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,

  created_at TEXT NOT NULL,

  payment_status TEXT NOT NULL,
  payment_method TEXT NOT NULL,

  customer_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  notes TEXT,

  subtotal INTEGER NOT NULL,
  currency TEXT NOT NULL
);
`);

db.exec(`
CREATE TABLE IF NOT EXISTS order_details (
  id INTEGER PRIMARY KEY,

  order_id INTEGER NOT NULL,
  variant_id INTEGER NOT NULL,

  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL
);
`);
}