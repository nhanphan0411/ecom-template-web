# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `ecom-template-web`
- **Generated On**: 2026-07-22 17:46:24 (Asia/Saigon / GMT+07:00)
- **Total Files Processed**: 52
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 app/
│   ├── 📁 admin/
│   │   └── 📄 page.tsx (9.14 KB)
│   ├── 📁 api/
│   │   ├── 📁 admin/
│   │   │   ├── 📁 collections/
│   │   │   │   └── 📄 route.ts (234 B)
│   │   │   ├── 📁 images/
│   │   │   │   ├── 📁 [id]/
│   │   │   │   │   └── 📄 route.ts (576 B)
│   │   │   │   ├── 📁 reorder/
│   │   │   │   │   └── 📄 route.ts (405 B)
│   │   │   │   ├── 📁 sync/
│   │   │   │   │   └── 📄 route.ts (1.97 KB)
│   │   │   │   └── 📄 route.ts (1.68 KB)
│   │   │   ├── 📁 products/
│   │   │   │   └── 📄 route.ts (447 B)
│   │   │   ├── 📁 value1/
│   │   │   │   └── 📄 route.ts (380 B)
│   │   │   └── 📁 value2/
│   │   │       └── 📄 route.ts (467 B)
│   │   ├── 📁 cart/
│   │   │   └── 📄 route.ts (564 B)
│   │   └── 📁 orders/
│   │       └── 📄 route.ts (834 B)
│   ├── 📁 cart/
│   │   └── 📄 page.tsx (3.83 KB)
│   ├── 📁 checkout/
│   │   └── 📄 page.tsx (3.03 KB)
│   ├── 📁 collections/
│   │   ├── 📁 [slug]/
│   │   │   └── 📄 page.tsx (1.26 KB)
│   │   └── 📄 page.tsx (848 B)
│   ├── 📁 order/
│   │   └── 📁 [id]/
│   │       └── 📄 page.tsx (1.11 KB)
│   ├── 📁 products/
│   │   ├── 📁 [slug]/
│   │   │   └── 📄 page.tsx (1.06 KB)
│   │   └── 📄 page.tsx (1 KB)
│   ├── 📄 favicon.ico (25.32 KB)
│   ├── 📄 globals.css (488 B)
│   ├── 📄 layout.tsx (719 B)
│   └── 📄 page.tsx (834 B)
├── 📁 components/
│   ├── 📄 ProductCard.tsx (4.8 KB)
│   └── 📄 ProductOptions.tsx (5.53 KB)
├── 📁 database/
│   └── 📄 0001_init_sql.sql (1.72 KB)
├── 📁 engine/
│   └── 📁 cloudfare/
│       └── 📄 r2.ts (1.13 KB)
├── 📁 lib/
│   ├── 📁 db/
│   │   ├── 📄 collections.ts (909 B)
│   │   ├── 📄 images.ts (2.01 KB)
│   │   ├── 📄 inventory.ts (1.82 KB)
│   │   ├── 📄 orders.ts (2.76 KB)
│   │   └── 📄 products.ts (1.74 KB)
│   ├── 📄 cart.ts (1.57 KB)
│   ├── 📄 d1.ts (206 B)
│   └── 📄 productOptions.ts (651 B)
├── 📁 public/
│   ├── 📄 file.svg (391 B)
│   ├── 📄 globe.svg (1.01 KB)
│   ├── 📄 next.svg (1.34 KB)
│   ├── 📄 vercel.svg (128 B)
│   └── 📄 window.svg (385 B)
├── 📄 AGENTS.md (327 B)
├── 📄 CLAUDE.md (11 B)
├── 📄 eslint.config.mjs (465 B)
├── 📄 next-env.d.ts (247 B)
├── 📄 next.config.ts (213 B)
├── 📄 open-next.config.ts (106 B)
├── 📄 package-lock.json (395.77 KB)
├── 📄 package.json (820 B)
├── 📄 postcss.config.mjs (94 B)
├── 📄 README.md (1.42 KB)
├── 📄 tsconfig.json (666 B)
├── 📄 worker-configuration.d.ts (538.65 KB)
└── 📄 wrangler.jsonc (649 B)
```

## 📑 Table of Contents

**Project Files:**

- [📄 app/admin/page.tsx](#📄-app-admin-page-tsx)
- [📄 app/api/admin/collections/route.ts](#📄-app-api-admin-collections-route-ts)
- [📄 app/api/admin/images/[id]/route.ts](#📄-app-api-admin-images-id-route-ts)
- [📄 app/api/admin/images/reorder/route.ts](#📄-app-api-admin-images-reorder-route-ts)
- [📄 app/api/admin/images/sync/route.ts](#📄-app-api-admin-images-sync-route-ts)
- [📄 app/api/admin/images/route.ts](#📄-app-api-admin-images-route-ts)
- [📄 app/api/admin/products/route.ts](#📄-app-api-admin-products-route-ts)
- [📄 app/api/admin/value1/route.ts](#📄-app-api-admin-value1-route-ts)
- [📄 app/api/admin/value2/route.ts](#📄-app-api-admin-value2-route-ts)
- [📄 app/api/cart/route.ts](#📄-app-api-cart-route-ts)
- [📄 app/api/orders/route.ts](#📄-app-api-orders-route-ts)
- [📄 app/cart/page.tsx](#📄-app-cart-page-tsx)
- [📄 app/checkout/page.tsx](#📄-app-checkout-page-tsx)
- [📄 app/collections/[slug]/page.tsx](#📄-app-collections-slug-page-tsx)
- [📄 app/collections/page.tsx](#📄-app-collections-page-tsx)
- [📄 app/order/[id]/page.tsx](#📄-app-order-id-page-tsx)
- [📄 app/products/[slug]/page.tsx](#📄-app-products-slug-page-tsx)
- [📄 app/products/page.tsx](#📄-app-products-page-tsx)
- [📄 app/globals.css](#📄-app-globals-css)
- [📄 app/layout.tsx](#📄-app-layout-tsx)
- [📄 app/page.tsx](#📄-app-page-tsx)
- [📄 components/ProductCard.tsx](#📄-components-productcard-tsx)
- [📄 components/ProductOptions.tsx](#📄-components-productoptions-tsx)
- [📄 database/0001_init_sql.sql](#📄-database-0001-init-sql-sql)
- [📄 engine/cloudfare/r2.ts](#📄-engine-cloudfare-r2-ts)
- [📄 lib/db/collections.ts](#📄-lib-db-collections-ts)
- [📄 lib/db/images.ts](#📄-lib-db-images-ts)
- [📄 lib/db/inventory.ts](#📄-lib-db-inventory-ts)
- [📄 lib/db/orders.ts](#📄-lib-db-orders-ts)
- [📄 lib/db/products.ts](#📄-lib-db-products-ts)
- [📄 lib/cart.ts](#📄-lib-cart-ts)
- [📄 lib/d1.ts](#📄-lib-d1-ts)
- [📄 lib/productOptions.ts](#📄-lib-productoptions-ts)
- [📄 AGENTS.md](#📄-agents-md)
- [📄 CLAUDE.md](#📄-claude-md)
- [📄 next-env.d.ts](#📄-next-env-d-ts)
- [📄 next.config.ts](#📄-next-config-ts)
- [📄 open-next.config.ts](#📄-open-next-config-ts)
- [📄 package-lock.json](#📄-package-lock-json)
- [📄 package.json](#📄-package-json)
- [📄 README.md](#📄-readme-md)
- [📄 tsconfig.json](#📄-tsconfig-json)
- [📄 worker-configuration.d.ts](#📄-worker-configuration-d-ts)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 52 |
| Total Directories | 29 |
| Text Files | 43 |
| Binary Files | 9 |
| Total Size | 1023.42 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.ts` | 23 |
| `.tsx` | 12 |
| `.svg` | 5 |
| `.md` | 3 |
| `.json` | 3 |
| `.mjs` | 2 |
| `.ico` | 1 |
| `.css` | 1 |
| `.sql` | 1 |
| `.jsonc` | 1 |

## 💻 File Code Contents

### <a id="📄-app-admin-page-tsx"></a>📄 `app/admin/page.tsx`

**File Info:**
- **Size**: 9.14 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/admin/page.tsx`
- **Relative Path**: `app/admin`
- **Created**: 2026-07-22 08:57:26 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:30:00 (Asia/Saigon / GMT+07:00)
- **MD5**: `fb3362dfd3c1bf8c72b6fdc0980b664d`
- **SHA256**: `aa32bf152687f81fdbfa07cf62a6a50c007d611b13dc13661aeb2bf74aae0345`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { useEffect, useState } from "react";

type StagedImage =
  | { kind: "existing"; id: number; url: string }
  | { kind: "new"; tempId: string; file: File; previewUrl: string };

export default function AdminPage() {
  const [collections, setCollections] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [value1Options, setValue1Options] = useState<any[]>([]);
  const [value2Options, setValue2Options] = useState<any[]>([]);

  const [collectionSlug, setCollectionSlug] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [staged, setStaged] = useState<StagedImage[]>([]);
  const [originalIds, setOriginalIds] = useState<number[]>([]);
  const [syncing, setSyncing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/collections")
      .then((res) => res.json())
      .then((data) => setCollections(data as any[]));
  }, []);

  useEffect(() => {
    setProducts([]);
    setProductSlug("");
    setValue1Options([]);
    setValue1("");
    setValue2Options([]);
    setValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!collectionSlug) return;

    fetch(`/api/admin/products?collection=${collectionSlug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data as any[]));
  }, [collectionSlug]);

  useEffect(() => {
    setValue1Options([]);
    setValue1("");
    setValue2Options([]);
    setValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!productSlug) return;

    fetch(`/api/admin/value1?product=${productSlug}`)
      .then((res) => res.json())
      .then((data) => setValue1Options(data as any[]));
  }, [productSlug]);

  useEffect(() => {
    setValue2Options([]);
    setValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!productSlug || !value1) return;

    fetch(`/api/admin/value2?product=${productSlug}&value1=${value1}`)
      .then((res) => res.json())
      .then((data) => setValue2Options(data as any[]));
  }, [productSlug, value1]);

  const needsValue2 = value2Options.length > 0;
  const readyToShowImages = productSlug && value1 && (!needsValue2 || value2);

  useEffect(() => {
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!readyToShowImages) return;

    const params = new URLSearchParams({
      product_slug: productSlug,
      value1,
    });

    if (value2) params.set("value2", value2);

    fetch(`/api/admin/images?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        const imgs = data as any[];

        setStaged(
          imgs.map((img) => ({
            kind: "existing" as const,
            id: img.id,
            url: img.url,
          }))
        );

        setOriginalIds(imgs.map((img) => img.id));
      });
  }, [readyToShowImages, productSlug, value1, value2]);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newItems: StagedImage[] = Array.from(files).map((file) => ({
      kind: "new",
      tempId: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setStaged((prev) => [...prev, ...newItems]);
    setDirty(true);
    e.target.value = "";
  }

  function handleRemove(index: number) {
    setStaged((prev) => prev.filter((_, i) => i !== index));
    setDirty(true);
  }

  function handleDrop(targetIndex: number) {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    setStaged((prev) => {
      const reordered = [...prev];
      const [moved] = reordered.splice(draggedIndex, 1);
      reordered.splice(targetIndex, 0, moved);
      return reordered;
    });

    setDirty(true);
    setDraggedIndex(null);
  }

  async function handleSync() {
    setSyncing(true);

    const stagedExistingIds = staged
      .filter(
        (s): s is Extract<StagedImage, { kind: "existing" }> =>
          s.kind === "existing"
      )
      .map((s) => s.id);

    const deleteIds = originalIds.filter(
      (id) => !stagedExistingIds.includes(id)
    );

    const newFiles = staged.filter(
      (s): s is Extract<StagedImage, { kind: "new" }> => s.kind === "new"
    );

    const order = staged.map((s) =>
      s.kind === "existing"
        ? { type: "existing", id: s.id }
        : {
          type: "new",
          fileIndex: newFiles.findIndex((f) => f.tempId === s.tempId),
        }
    );

    const formData = new FormData();

    formData.append("product_slug", productSlug);
    formData.append("value1", value1);

    if (value2) formData.append("value2", value2);

    formData.append("deleteIds", JSON.stringify(deleteIds));
    formData.append("order", JSON.stringify(order));

    for (const f of newFiles) {
      formData.append("file", f.file);
    }

    const res = await fetch("/api/admin/images/sync", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Image sync failed");
    }

    const images = (await res.json()) as any[];


    setStaged(
      images.map((img) => ({
        kind: "existing",
        id: img.id,
        url: img.url,
      }))
    );

    setOriginalIds(images.map((img) => img.id));

    setDirty(false);
    setSyncing(false);
  }

  return (
    <div style={{ padding: 32, maxWidth: 800, margin: "0 auto" }}>
      <h1>Image Manager</h1>

      <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
        <select
          value={collectionSlug}
          onChange={(e) => setCollectionSlug(e.target.value)}
        >
          <option value="">Select collection</option>

          {collections.map((c: any) => (
            <option key={c.collection_slug} value={c.collection_slug}>
              {c.collection_name}
            </option>
          ))}
        </select>

        <select
          value={productSlug}
          onChange={(e) => setProductSlug(e.target.value)}
          disabled={!collectionSlug}
        >
          <option value="">Select product</option>

          {products.map((p: any) => (
            <option key={p.product_slug} value={p.product_slug}>
              {p.product_name}
            </option>
          ))}
        </select>

        <select
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          disabled={!productSlug}
        >
          <option value="">Select variant 1</option>

          {value1Options.map((v: any) => (
            <option key={v.value1} value={v.value1}>
              {v.value1}
            </option>
          ))}
        </select>

        {needsValue2 && (
          <select
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            disabled={!value1}
          >
            <option value="">Select variant 2</option>

            {value2Options.map((v: any) => (
              <option key={v.value2} value={v.value2}>
                {v.value2}
              </option>
            ))}
          </select>
        )}
      </div>

      {readyToShowImages && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
            />

            <button onClick={handleSync} disabled={!dirty || syncing}>
              {syncing ? "Syncing..." : "Sync"}
            </button>

            {dirty && !syncing && (
              <span style={{ color: "orange" }}>Unsaved changes</span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 16,
            }}
          >
            {staged.map((img, index) => (
              <div
                key={img.kind === "existing" ? img.id : img.tempId}
                draggable
                onDragStart={() => setDraggedIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                style={{ position: "relative", cursor: "grab" }}
              >
                <img
                  src={img.kind === "existing" ? img.url : img.previewUrl}
                  alt=""
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    opacity: img.kind === "new" ? 0.6 : 1,
                    border:
                      img.kind === "new"
                        ? "2px dashed orange"
                        : "none",
                  }}
                />

                <button
                  onClick={() => handleRemove(index)}
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

---

### <a id="📄-app-api-admin-collections-route-ts"></a>📄 `app/api/admin/collections/route.ts`

**File Info:**
- **Size**: 234 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/collections/route.ts`
- **Relative Path**: `app/api/admin/collections`
- **Created**: 2026-07-22 08:54:25 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:29:04 (Asia/Saigon / GMT+07:00)
- **MD5**: `62efea8ec3ee16509ad6c1b45519445b`
- **SHA256**: `c54b009b53fabe185e057ac82c0d64b63f044b45407f50fb6f6d136c6d904b9f`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextResponse } from "next/server";
import { getAllCollectionsAdmin } from "@/lib/db/collections";

export async function GET() {
  const collections = await getAllCollectionsAdmin();
  return NextResponse.json(collections);
}
```

---

### <a id="📄-app-api-admin-images-id-route-ts"></a>📄 `app/api/admin/images/[id]/route.ts`

**File Info:**
- **Size**: 576 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/images/[id]/route.ts`
- **Relative Path**: `app/api/admin/images/[id]`
- **Created**: 2026-07-22 08:56:24 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:29:27 (Asia/Saigon / GMT+07:00)
- **MD5**: `926fc83705a3b15f2ac415e99ac4ce30`
- **SHA256**: `f83cd2ce01aaf367f3e382a56294d3fc0e5524c436eb4eb895ed365086525e8d`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getImageById, deleteImageRow } from "@/lib/db/images";
import { deleteImage } from "@/engine/cloudfare/r2";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const image: any = await getImageById(Number(id));

  if (!image) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  await deleteImage(image.r2_key);
  await deleteImageRow(Number(id));

  return NextResponse.json({ success: true });
}
```

---

### <a id="📄-app-api-admin-images-reorder-route-ts"></a>📄 `app/api/admin/images/reorder/route.ts`

**File Info:**
- **Size**: 405 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/images/reorder/route.ts`
- **Relative Path**: `app/api/admin/images/reorder`
- **Created**: 2026-07-22 09:36:00 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:32:51 (Asia/Saigon / GMT+07:00)
- **MD5**: `eaf70c8dfeb5446ef93ba5e4cfed6d58`
- **SHA256**: `03a56c538362faf0c967e3c1a8c2a4852a109a3e49b584dbc578cfeb083707d1`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { updateSortOrders } from "@/lib/db/images";

export async function PATCH(req: NextRequest) {
  const { order } = (await req.json()) as any;

  if (!Array.isArray(order)) {
    return NextResponse.json({ error: "order array required" }, { status: 400 });
  }

  await updateSortOrders(order);
  return NextResponse.json({ success: true });
}
```

---

### <a id="📄-app-api-admin-images-sync-route-ts"></a>📄 `app/api/admin/images/sync/route.ts`

**File Info:**
- **Size**: 1.97 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/images/sync/route.ts`
- **Relative Path**: `app/api/admin/images/sync`
- **Created**: 2026-07-22 09:44:01 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:30:26 (Asia/Saigon / GMT+07:00)
- **MD5**: `39cda48c058678eebeb13151d5dea127`
- **SHA256**: `cbaa9e50fd3999c756d25e4be444a25ffe9997f37eeeb8f862b0c665129b694e`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getImages, insertImage, getImageById, deleteImageRow, updateSortOrders } from "@/lib/db/images";
import { uploadImage, deleteImage } from "@/engine/cloudfare/r2";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const productSlug = formData.get("product_slug") as string;
  const value1 = formData.get("value1") as string;
  const value2 = (formData.get("value2") as string | null) || null;
  const deleteIds: number[] = JSON.parse(formData.get("deleteIds") as string);
  const order: any[] = JSON.parse(formData.get("order") as string);
  const files = formData.getAll("file") as File[];

  if (!productSlug || !value1) {
    return NextResponse.json({ error: "product_slug and value1 required" }, { status: 400 });
  }

  // 1. Deletes
  for (const id of deleteIds) {
    const image: any = await getImageById(id);
    if (image) {
      await deleteImage(image.r2_key);
      await deleteImageRow(id);
    }
  }

  // 2. Uploads — map fileIndex -> new id
  const fileIndexToId: Record<number, number> = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop();
    const keyPath = value2
      ? `Products/${productSlug}/${value1}/${value2}`
      : `Products/${productSlug}/${value1}`;
    const r2Key = `${keyPath}/${crypto.randomUUID()}.${ext}`;

    const url = await uploadImage(r2Key, buffer, file.type || "image/png");
    const id = await insertImage(productSlug, value1, value2, r2Key, url) as number;

    fileIndexToId[i] = id;
  }

  // 3. Final sort order
  const finalOrder = order.map((entry, index) => ({
    id: entry.type === "existing" ? entry.id : fileIndexToId[entry.fileIndex],
    sort_order: index,
  }));

  await updateSortOrders(finalOrder);

  const images = await getImages(productSlug, value1, value2 ?? undefined);
  return NextResponse.json(images);
}
```

---

### <a id="📄-app-api-admin-images-route-ts"></a>📄 `app/api/admin/images/route.ts`

**File Info:**
- **Size**: 1.68 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/images/route.ts`
- **Relative Path**: `app/api/admin/images`
- **Created**: 2026-07-22 08:56:02 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 16:56:27 (Asia/Saigon / GMT+07:00)
- **MD5**: `093e224172ffe88644a8253317a1af43`
- **SHA256**: `997ccd04662a27c8c11063abe134352baf01195cc1dc7e05a4352f619844fdf7`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getImages, insertImage } from "@/lib/db/images";
import { uploadImage } from "@/engine/cloudfare/r2";

export async function GET(req: NextRequest) {
  const productSlug = req.nextUrl.searchParams.get("product_slug");
  const value1 = req.nextUrl.searchParams.get("value1");
  const value2 = req.nextUrl.searchParams.get("value2") || undefined;

  if (!productSlug || !value1) {
    return NextResponse.json({ error: "product_slug and value1 required" }, { status: 400 });
  }

  return NextResponse.json(await getImages(productSlug, value1, value2)); // ← missing await
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("file") as File[];
  const productSlug = formData.get("product_slug") as string | null;
  const value1 = formData.get("value1") as string | null;
  const value2 = (formData.get("value2") as string | null) || null;

  if (files.length === 0 || !productSlug || !value1) {
    return NextResponse.json({ error: "file(s), product_slug, value1 required" }, { status: 400 });
  }

  const uploaded = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop();
    const keyPath = value2
      ? `Products/${productSlug}/${value1}/${value2}`
      : `Products/${productSlug}/${value1}`;
    const r2Key = `${keyPath}/${crypto.randomUUID()}.${ext}`;

    const url = await uploadImage(r2Key, buffer, file.type || "image/png");
    const id = await insertImage(productSlug, value1, value2, r2Key, url); 

    uploaded.push({ id, url, r2_key: r2Key });
  }

  return NextResponse.json(uploaded);
}
```

---

### <a id="📄-app-api-admin-products-route-ts"></a>📄 `app/api/admin/products/route.ts`

**File Info:**
- **Size**: 447 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/products/route.ts`
- **Relative Path**: `app/api/admin/products`
- **Created**: 2026-07-22 08:54:46 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:30:48 (Asia/Saigon / GMT+07:00)
- **MD5**: `ee6d3516c4c67a307c5f92e4a213f2aa`
- **SHA256**: `76e191828d09d3766889b8cf9be1e5507757578b7b0ff5b64abf334ab08def0b`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getProductsByCollectionAdmin } from "@/lib/db/products";

export async function GET(req: NextRequest) {
  const collection = req.nextUrl.searchParams.get("collection");
  if (!collection) {
    return NextResponse.json({ error: "collection required" }, { status: 400 });
  }
  const products = await getProductsByCollectionAdmin(collection);
  return NextResponse.json(products);
}
```

---

### <a id="📄-app-api-admin-value1-route-ts"></a>📄 `app/api/admin/value1/route.ts`

**File Info:**
- **Size**: 380 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/value1/route.ts`
- **Relative Path**: `app/api/admin/value1`
- **Created**: 2026-07-22 09:05:01 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:30:58 (Asia/Saigon / GMT+07:00)
- **MD5**: `bed8d6a8b7857268160a0bad4b57a51d`
- **SHA256**: `5bedfbbc1bb9e9cdeeab6bae3eea723d17ddc87e1f27b2dc694f2051b6e50381`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getValue1Options } from "@/lib/db/inventory";

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get("product");
  if (!product) {
    return NextResponse.json({ error: "product required" }, { status: 400 });
  }
  return NextResponse.json(await getValue1Options(product));
}
```

---

### <a id="📄-app-api-admin-value2-route-ts"></a>📄 `app/api/admin/value2/route.ts`

**File Info:**
- **Size**: 467 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/admin/value2/route.ts`
- **Relative Path**: `app/api/admin/value2`
- **Created**: 2026-07-22 09:05:20 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 15:31:05 (Asia/Saigon / GMT+07:00)
- **MD5**: `b0ad9b74da8ea67c0c2b67bf4ac260eb`
- **SHA256**: `db96f9f301a6fe20d50adaf6b5119ff587b245a9decb4472f71621c21599891c`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getValue2Options } from "@/lib/db/inventory";

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get("product");
  const value1 = req.nextUrl.searchParams.get("value1");
  if (!product || !value1) {
    return NextResponse.json({ error: "product and value1 required" }, { status: 400 });
  }
  return NextResponse.json(await getValue2Options(product, value1));
}
```

---

### <a id="📄-app-api-cart-route-ts"></a>📄 `app/api/cart/route.ts`

**File Info:**
- **Size**: 564 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/cart/route.ts`
- **Relative Path**: `app/api/cart`
- **Created**: 2026-07-21 14:41:58 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:33:28 (Asia/Saigon / GMT+07:00)
- **MD5**: `d7c0abe2b98fefb58c3644a42bcb13db`
- **SHA256**: `53481789e41fdd1d63c6a2442566911b4a2d899a0289cd98d6e8a0e5259e4e27`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";

import { getVariantById } from "@/lib/db/inventory";
import { getProduct } from "@/lib/db/products";

export async function POST(req: NextRequest) {

  const { cart } = (await req.json()) as any;

  const items = await Promise.all(cart.map(async (item: any) => {

    const variant: any = await getVariantById(item.variant_id);

    const product: any = await getProduct(variant.product_slug);

    return {
      ...item,
      variant,
      product,
    };

  }));

  return NextResponse.json(items);

}
```

---

### <a id="📄-app-api-orders-route-ts"></a>📄 `app/api/orders/route.ts`

**File Info:**
- **Size**: 834 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/orders/route.ts`
- **Relative Path**: `app/api/orders`
- **Created**: 2026-07-21 15:42:27 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:33:43 (Asia/Saigon / GMT+07:00)
- **MD5**: `30560ac3dbf3284f84d06db66f9046ed`
- **SHA256**: `e1247f4dd55d5fbabe6536e207718c03fc14b2e9036d16f0424c28391225da53`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { createOrderWithDetails } from "@/lib/db/orders";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as any;
  try {
    const orderId = await createOrderWithDetails(
      {
        created_at: new Date().toISOString(),
        payment_status: "Pending",
        payment_method: body.paymentMethod,
        customer_name: body.customerName,
        email: body.email,
        phone: body.phone,
        address: body.address,
        notes: body.notes,
        currency: "VND",
        idempotency_key: body.idempotencyKey ?? null,
      },
      body.cart
    );
    return NextResponse.json({ success: true, orderId });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
```

---

### <a id="📄-app-cart-page-tsx"></a>📄 `app/cart/page.tsx`

**File Info:**
- **Size**: 3.83 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/cart/page.tsx`
- **Relative Path**: `app/cart`
- **Created**: 2026-07-21 14:39:42 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:34:58 (Asia/Saigon / GMT+07:00)
- **MD5**: `885343aae1a7df64542fe365186a6460`
- **SHA256**: `a6de57229e484f49d4962c4a47a71de01fb6eab590d0c8e66499460b26591055`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { useEffect, useState } from "react";
import {
    getCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "@/lib/cart";
import Link from "next/link";


export default function CartPage() {
    const [items, setItems] = useState<any[]>([]);

    async function loadCart() {
        const cart = getCart();

        const response = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart }),
        });

        const items = (await response.json()) as any;

        setItems(items);
    }

    useEffect(() => {
        loadCart();
    }, []);

    const subtotal = items.reduce((total, item) => {
        return total + item.variant.priceVND * item.quantity;
    }, 0);

    return (
        <main className="max-w-5xl mx-auto p-10">

            <h1 className="text-4xl font-bold mb-8">
                Cart
            </h1>

            {items.map((item) => (

                <div
                    key={item.variant_id}
                    className="border rounded p-5 mb-4"
                >

                    <h2 className="text-xl font-bold">
                        {item.product.product_name}
                    </h2>

                    {item.variant.variant1 && (
                        <p>
                            {item.variant.variant1}: {item.variant.value1}
                        </p>
                    )}

                    {item.variant.variant2 && (
                        <p>
                            {item.variant.variant2}: {item.variant.value2}
                        </p>
                    )}

                    {item.variant.variant3 && (
                        <p>
                            {item.variant.variant3}: {item.variant.value3}
                        </p>
                    )}

                    <p className="mt-2">
                        Quantity: {item.quantity}
                    </p>

                    <p>
                        {item.variant.priceVND.toLocaleString()} VND
                    </p>

                    <div className="flex gap-2 mt-4">

                        <button
                            onClick={() => {
                                decreaseQuantity(item.variant_id);
                                loadCart();
                            }}
                        >
                            -
                        </button>

                        <button
                            disabled={item.quantity >= item.variant.stock}
                            className={item.quantity >= item.variant.stock ? "opacity-30 cursor-not-allowed" : ""}
                            onClick={() => {
                                increaseQuantity(item.variant_id);
                                loadCart();
                            }}
                        >
                            +
                        </button>

                        <button
                            onClick={() => {
                                removeFromCart(item.variant_id);
                                loadCart();
                            }}
                        >
                            Remove
                        </button>

                    </div>

                </div>

            ))}

            <div className="mt-10 border-t pt-6">

                <h2 className="text-2xl font-bold">
                    Total
                </h2>

                <p className="text-xl mt-2">
                    {subtotal.toLocaleString()} VND
                </p>
                <Link
                    href="/checkout"
                    className="inline-block mt-8 border px-6 py-3"
                >
                    Checkout
                </Link>

            </div>

        </main>
    );
}
```

---

### <a id="📄-app-checkout-page-tsx"></a>📄 `app/checkout/page.tsx`

**File Info:**
- **Size**: 3.03 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/checkout/page.tsx`
- **Relative Path**: `app/checkout`
- **Created**: 2026-07-21 15:40:43 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:36:03 (Asia/Saigon / GMT+07:00)
- **MD5**: `929afe01b275cf110d10150b7cd0f401`
- **SHA256**: `95757a0933905a7b966281a2220f88517e2e9e7ab239afafa8888302ec543f64`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { useState } from "react";


export default function CheckoutPage() {
    const [idempotencyKey] = useState(() => crypto.randomUUID());
    return (
        <main className="max-w-3xl mx-auto p-10">

            <h1 className="text-4xl font-bold mb-8">
                Checkout
            </h1>

            <form
                className="space-y-4"
                onSubmit={async (e) => {

                    e.preventDefault();

                    const form = e.currentTarget;

                    const formData = new FormData(form);

                    const cart = JSON.parse(
                        localStorage.getItem("cart") || "[]"
                    );

                    const res = await fetch("/api/orders", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({

                            customerName: formData.get("customerName"),
                            email: formData.get("email"),
                            phone: formData.get("phone"),
                            address: formData.get("address"),
                            notes: formData.get("notes"),
                            paymentMethod: formData.get("paymentMethod"),

                            cart,
                            idempotencyKey,

                        }),
                    });

                    const result = await (res.json()) as any;

                    localStorage.removeItem("cart");
                    window.location.href = `/order/${result.orderId}`;

                }}
            >

                <input
                    name="customerName"
                    placeholder="Customer Name"
                    className="border p-2 w-full"
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="border p-2 w-full"
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    className="border p-2 w-full"
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    className="border p-2 w-full"
                />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    className="border p-2 w-full"
                />

                <select
                    name="paymentMethod"
                    className="border p-2 w-full"
                    defaultValue="Card Payment"
                >
                    <option>Card Payment</option>
                    <option>Bank Transfer</option>
                </select>

                <button
                    type="submit"
                    className="border px-5 py-2"
                >
                    Place Order
                </button>

            </form>

        </main>
    );
}
```

---

### <a id="📄-app-collections-slug-page-tsx"></a>📄 `app/collections/[slug]/page.tsx`

**File Info:**
- **Size**: 1.26 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/collections/[slug]/page.tsx`
- **Relative Path**: `app/collections/[slug]`
- **Created**: 2026-07-21 12:33:40 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:37:52 (Asia/Saigon / GMT+07:00)
- **MD5**: `a0148c89b66d66f2c3126cf3386daff5`
- **SHA256**: `795a9bbcee2af8229d4ad525393b8aff28dff1d01b2543be25cbf6804f55a17d`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getProductsByCollection } from "@/lib/db/products";
import { getInventory } from "@/lib/db/inventory";
import { getAllImagesForProduct } from "@/lib/db/images";
import ProductCard from "@/components/ProductCard";

export default async function CollectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const products: any[] = await getProductsByCollection(slug);

    const cards = await Promise.all(
        products.map(async (product) => ({
            product,
            variants: await getInventory(product.product_slug),
            images: await getAllImagesForProduct(product.product_slug),
        }))
    );

    return (
        <main className="max-w-5xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-8">{slug}</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map(({ product, variants, images }) => (
                    <ProductCard
                        key={product.product_slug}
                        product={product}
                        variants={variants}
                        images={images}
                    />
                ))}
            </div>
        </main>
    );
}
```

---

### <a id="📄-app-collections-page-tsx"></a>📄 `app/collections/page.tsx`

**File Info:**
- **Size**: 848 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/collections/page.tsx`
- **Relative Path**: `app/collections`
- **Created**: 2026-07-21 16:57:02 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:37:43 (Asia/Saigon / GMT+07:00)
- **MD5**: `b1dfdc3a52acd53ce9fc4cfd74ed28d2`
- **SHA256**: `a0a28ff063ce7e604cedf536981567d718112ecccadeeff35d5cdeb80b8d4a33`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getCollections } from "@/lib/db/collections";
import Link from "next/link";

export default async function AllCollectionsPage() {

  const collections = await getCollections();

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Collections
      </h1>

      <div className="space-y-4">

        {collections.map((collection: any) => (

          <Link
            href={`/collections/${collection.collection_slug}`}
            className="block border rounded-lg p-5"
            key={collection.id}
          >
            <h2 className="font-bold text-xl">
              {collection.collection_name}
            </h2>

            <p>{collection.collection_slug}</p>
          </Link>

        ))}

      </div>

    </main>
  );

}
```

---

### <a id="📄-app-order-id-page-tsx"></a>📄 `app/order/[id]/page.tsx`

**File Info:**
- **Size**: 1.11 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/order/[id]/page.tsx`
- **Relative Path**: `app/order/[id]`
- **Created**: 2026-07-21 17:48:38 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:38:20 (Asia/Saigon / GMT+07:00)
- **MD5**: `15fb595a30085479949c1cd722ca3ca8`
- **SHA256**: `59394cdca428d5eb59f38bdc320a2593a34496f259e6430efa02ff3003da2371`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getOrder, getOrderDetails } from "@/lib/db/orders";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const order: any = await getOrder(Number(id));
  const details: any[] = await getOrderDetails(Number(id));

  return (
    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Thank you!
      </h1>

      <p className="mt-4">
        Order #{order.id}
      </p>

      <p>{order.customer_name}</p>

      <p>{order.email}</p>

      <p>{order.payment_method}</p>

      <div className="mt-8 space-y-4">

        {details.map((item) => (

          <div
            key={item.id}
            className="border p-4 rounded"
          >

            <p>Variant ID: {item.variant_id}</p>

            <p>Qty: {item.quantity}</p>

            <p>{item.unit_price.toLocaleString()} VND</p>

          </div>

        ))}

      </div>

      <h2 className="text-2xl font-bold mt-8">
        Total: {order.subtotal.toLocaleString()} VND
      </h2>

    </main>
  );
}
```

---

### <a id="📄-app-products-slug-page-tsx"></a>📄 `app/products/[slug]/page.tsx`

**File Info:**
- **Size**: 1.06 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/products/[slug]/page.tsx`
- **Relative Path**: `app/products/[slug]`
- **Created**: 2026-07-21 12:36:49 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:38:12 (Asia/Saigon / GMT+07:00)
- **MD5**: `d22d0e58a15a9750cdbdf7c97df60567`
- **SHA256**: `a878ecf2df0b1e16e06269f27b9c25798ddc57ded457c195157880fea139790e`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getProductBySlug } from "@/lib/db/products";
import { getInventory } from "@/lib/db/inventory";
import { getAllImagesForProduct } from "@/lib/db/images";
import { buildProductOptions } from "@/lib/productOptions";
import ProductOptions from "@/components/ProductOptions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: any = await getProductBySlug(slug);
  const inventory: any[] = await getInventory(slug);
  const images: any[] = await getAllImagesForProduct(slug);
  const options = buildProductOptions(inventory);

  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        {product.product_name}
      </h1>

      <p className="mt-2 text-gray-500">
        {product.category}
      </p>

      <div className="mt-10">

        <ProductOptions
          options={options}
          variants={inventory}
          images={images}
        />

      </div>

    </main>
  );
}
```

---

### <a id="📄-app-products-page-tsx"></a>📄 `app/products/page.tsx`

**File Info:**
- **Size**: 1 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/products/page.tsx`
- **Relative Path**: `app/products`
- **Created**: 2026-07-21 17:01:28 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:38:04 (Asia/Saigon / GMT+07:00)
- **MD5**: `ad032294ea8bf87445dc19870cb50e75`
- **SHA256**: `88dcf02f019e97399922ca19237edf14f8310398bf012e7a76317d7924c3c5f9`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getAllProducts } from "@/lib/db/products";
import { getInventory } from "@/lib/db/inventory";
import { getAllImagesForProduct } from "@/lib/db/images";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products: any[] = await getAllProducts();

  const cards = await Promise.all(
    products.map(async (product) => ({
      product,
      variants: await getInventory(product.product_slug),
      images: await getAllImagesForProduct(product.product_slug),
    }))
  );

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map(({ product, variants, images }) => (
          <ProductCard
            key={product.product_slug}
            product={product}
            variants={variants}
            images={images}
          />
        ))}
      </div>
    </main>
  );
}
```

---

### <a id="📄-app-globals-css"></a>📄 `app/globals.css`

**File Info:**
- **Size**: 488 B
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `app/globals.css`
- **Relative Path**: `app`
- **Created**: 2026-07-18 15:58:53 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-20 18:22:31 (Asia/Saigon / GMT+07:00)
- **MD5**: `20552b4b0f91d72bbf19051b78b2aff5`
- **SHA256**: `769edf77bd0d101a2d26e6c5656defba8cd885ff37d92279fa293a2756fe5651`
- **Encoding**: ASCII

**File code content:**

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

```

---

### <a id="📄-app-layout-tsx"></a>📄 `app/layout.tsx`

**File Info:**
- **Size**: 719 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/layout.tsx`
- **Relative Path**: `app`
- **Created**: 2026-07-18 15:58:53 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 10:33:23 (Asia/Saigon / GMT+07:00)
- **MD5**: `94c34ef68b3949a75807a0211ec2273c`
- **SHA256**: `b98a24027c5c78385b127baf3c2f4f29b18c2c8c19c0beed8c74bb57bd98e4ef`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

```

---

### <a id="📄-app-page-tsx"></a>📄 `app/page.tsx`

**File Info:**
- **Size**: 834 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/page.tsx`
- **Relative Path**: `app`
- **Created**: 2026-07-18 15:58:53 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:37:28 (Asia/Saigon / GMT+07:00)
- **MD5**: `64d31b13a0f3b23680bb672c53e651eb`
- **SHA256**: `9706994b2dd863d974d2e058f40064c754dbe572400103390e51b8fc8c6adbde`
- **Encoding**: ASCII

**File code content:**

```typescript
export const dynamic = "force-dynamic";

import { getCollections } from "@/lib/db/collections";
import Link from "next/link";

export default async function Home() {

  const collections = await getCollections();

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Collections
      </h1>

      <div className="space-y-4">

        {collections.map((collection: any) => (

          <Link
            href={`/collections/${collection.collection_slug}`}
            className="block border rounded-lg p-5"
            key={collection.id}
          >
            <h2 className="font-bold text-xl">
              {collection.collection_name}
            </h2>

            <p>{collection.collection_slug}</p>
          </Link>

        ))}

      </div>

    </main>
  );

}
```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `app/favicon.ico`

### <a id="📄-components-productcard-tsx"></a>📄 `components/ProductCard.tsx`

**File Info:**
- **Size**: 4.8 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/ProductCard.tsx`
- **Relative Path**: `components`
- **Created**: 2026-07-22 09:54:33 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 10:12:50 (Asia/Saigon / GMT+07:00)
- **MD5**: `8eb9e81b9188d94bbee71454adfd286f`
- **SHA256**: `4378656f9214c5686e9bbc9ced3cc791b17e7c46b94bc59540c056bf41d51661`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/lib/cart";
import { buildProductOptions } from "@/lib/productOptions";

export default function ProductCard({
  product,
  variants,
  images,
}: {
  product: any;
  variants: any[];
  images: any[];
}) {
  if (variants.length === 0) {
    return (
      <div className="border rounded overflow-hidden p-3">
        <p className="font-medium">{product.product_name}</p>
        <p className="text-xs text-gray-400 mt-1">No variants configured</p>
      </div>
    );
  }

  const options = buildProductOptions(variants);

  const [selected, setSelected] = useState<Record<string, string>>(() => {
    const first = variants[0];
    const initial: Record<string, string> = {};
    if (first.variant1) initial[first.variant1] = first.value1;
    if (first.variant2) initial[first.variant2] = first.value2;
    if (first.variant3) initial[first.variant3] = first.value3;
    return initial;
  });

  const [imgIndex, setImgIndex] = useState(0);

  const selectedVariant = variants.find((variant) =>
    Object.entries(selected).every(([name, value]) =>
      (variant.variant1 === name && variant.value1 === value) ||
      (variant.variant2 === name && variant.value2 === value) ||
      (variant.variant3 === name && variant.value3 === value)
    )
  );

  // Images are keyed by value1 (+ value2) — figure out which values are active
  const activeValue1 = variants[0]?.variant1 ? selected[variants[0].variant1] : undefined;
  const activeValue2 = variants[0]?.variant2 ? selected[variants[0].variant2] : undefined;

  const galleryImages = images.filter((img) => {
    if (img.value1 !== activeValue1) return false;
    if (img.value2 && img.value2 !== activeValue2) return false;
    return true;
  });

  const currentImage = galleryImages[imgIndex] ?? galleryImages[0];

  function selectOption(name: string, value: string) {
    setSelected((prev) => ({ ...prev, [name]: value }));
    setImgIndex(0);
  }

  function nextImage(e: React.MouseEvent) {
    e.preventDefault();
    if (galleryImages.length === 0) return;
    setImgIndex((i) => (i + 1) % galleryImages.length);
  }

  function prevImage(e: React.MouseEvent) {
    e.preventDefault();
    if (galleryImages.length === 0) return;
    setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }

  return (
    <div className="border rounded overflow-hidden">
      <div className="aspect-square bg-gray-100 relative">
        {currentImage ? (
          <Image
            src={currentImage.url}
            alt={product.product_name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No image
          </div>
        )}

        {galleryImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-7 h-7"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-7 h-7"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="p-3 space-y-2">
        <Link href={`/products/${product.product_slug}`}>
          <h2 className="font-medium hover:underline">{product.product_name}</h2>
        </Link>

        {options.map((option) => (
          <div key={option.name} className="flex gap-1 flex-wrap">
            {option.values.map((value) => {
              const active = selected[option.name] === value;
              return (
                <button
                  key={value}
                  onClick={() => selectOption(option.name, value)}
                  className={`text-xs border rounded px-2 py-1 ${
                    active ? "bg-black text-white" : ""
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        ))}

        {selectedVariant ? (
          <>
            <p className="text-sm">{selectedVariant.priceVND?.toLocaleString()} VND</p>
            <button
              className="w-full border rounded px-3 py-2 text-sm disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={selectedVariant.stock === 0}
              onClick={() => {
                addToCart(selectedVariant.id);
                alert("Added to cart");
              }}
            >
              {selectedVariant.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </>
        ) : (
          <p className="text-xs text-gray-400">Select options</p>
        )}
      </div>
    </div>
  );
}
```

---

### <a id="📄-components-productoptions-tsx"></a>📄 `components/ProductOptions.tsx`

**File Info:**
- **Size**: 5.53 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/ProductOptions.tsx`
- **Relative Path**: `components`
- **Created**: 2026-07-21 13:37:20 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 10:06:29 (Asia/Saigon / GMT+07:00)
- **MD5**: `a3751883e74cb12d17fb38ef440dc7bd`
- **SHA256**: `2326bec29c09fc0e9a5e0ede412abc229870baff002979fe3dc3bdf70f7eb073`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";
import Image from "next/image";

export default function ProductOptions({
    options,
    variants,
    images,
}: {
    options: {
        name: string;
        values: string[];
    }[];
    variants: any[];
    images: any[];
}) {
    const [selected, setSelected] = useState<Record<string, string>>(() => {

        const first = variants[0];

        const initial: Record<string, string> = {};

        if (first.variant1) initial[first.variant1] = first.value1;
        if (first.variant2) initial[first.variant2] = first.value2;
        if (first.variant3) initial[first.variant3] = first.value3;

        return initial;

    });

    const [imgIndex, setImgIndex] = useState(0);

    const selectedVariant = variants.find((variant) => {

        return Object.entries(selected).every(([name, value]) => {

            return (
                (variant.variant1 === name && variant.value1 === value) ||
                (variant.variant2 === name && variant.value2 === value) ||
                (variant.variant3 === name && variant.value3 === value)
            );

        });

    });

    const activeValue1 = variants[0]?.variant1 ? selected[variants[0].variant1] : undefined;
    const activeValue2 = variants[0]?.variant2 ? selected[variants[0].variant2] : undefined;

    const galleryImages = images.filter((img) => {
        if (img.value1 !== activeValue1) return false;
        if (img.value2 && img.value2 !== activeValue2) return false;
        return true;
    });

    const currentImage = galleryImages[imgIndex] ?? galleryImages[0];

    return (
        <div className="space-y-6">
            <div className="aspect-square bg-gray-100 relative mb-6">
                {currentImage ? (
                    <Image
                        src={currentImage.url}
                        alt=""
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                        No image
                    </div>
                )}

                {galleryImages.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8"
                        >
                            ‹
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setImgIndex((i) => (i + 1) % galleryImages.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {options.map((option) => (
                <div key={option.name}>
                    <h2 className="font-bold mb-2">{option.name}</h2>

                    <div className="flex gap-2 flex-wrap">
                        {option.values.map((value) => {
                            const active = selected[option.name] === value;

                            return (
                                <button
                                    key={value}
                                    onClick={() => {
                                        setSelected({
                                            ...selected,
                                            [option.name]: value,
                                        });
                                        setImgIndex(0);
                                    }}
                                    className={`border rounded px-4 py-2 ${active ? "bg-black text-white" : ""
                                        }`}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div className="border rounded p-4">

                <h2 className="font-bold mb-4">
                    Selected Variant
                </h2>

                {selectedVariant ? (
                    <>
                        <p>Stock: {selectedVariant.stock}</p>
                        <p>Price: {selectedVariant.priceVND.toLocaleString()} VND</p>

                        <button
                            className="mt-6 border rounded px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={selectedVariant.stock === 0}
                            onClick={() => {
                                if (!selectedVariant) return;
                                addToCart(selectedVariant.id);
                                alert("Added to cart");
                            }}
                        >
                            {selectedVariant.stock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </>
                ) : (
                    <p>Please select all options.</p>
                )}

            </div>
        </div>
    );
}
```

---

### <a id="📄-database-0001-init-sql-sql"></a>📄 `database/0001_init_sql.sql`

**File Info:**
- **Size**: 1.72 KB
- **Extension**: `.sql`
- **Language**: `sql`
- **Location**: `database/0001_init_sql.sql`
- **Relative Path**: `database`
- **Created**: 2026-07-22 10:56:57 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 10:59:45 (Asia/Saigon / GMT+07:00)
- **MD5**: `8c14fb95eddacf628052fa8a174a103f`
- **SHA256**: `79eeaf140417dce2d4c138f6400ffc0f105ee13b8f81c1029f3b70304eed1cb0`
- **Encoding**: ASCII

**File code content:**

```sql
DROP TABLE IF EXISTS order_details;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS collections;

CREATE TABLE collections (
  id INTEGER PRIMARY KEY,
  collection_name TEXT NOT NULL,
  collection_slug TEXT NOT NULL UNIQUE,
  description TEXT,
  status TEXT NOT NULL
);

CREATE TABLE products (
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

CREATE TABLE inventory (
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

CREATE TABLE orders (
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
  currency TEXT NOT NULL,
  idempotency_key TEXT UNIQUE
);

CREATE TABLE order_details (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  variant_id INTEGER NOT NULL REFERENCES inventory(id),
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL
);

CREATE TABLE images (
  id INTEGER PRIMARY KEY,
  product_slug TEXT NOT NULL,
  value1 TEXT NOT NULL,
  value2 TEXT,
  r2_key TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

---

### <a id="📄-engine-cloudfare-r2-ts"></a>📄 `engine/cloudfare/r2.ts`

**File Info:**
- **Size**: 1.13 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `engine/cloudfare/r2.ts`
- **Relative Path**: `engine/cloudfare`
- **Created**: 2026-07-22 07:25:25 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 08:23:13 (Asia/Saigon / GMT+07:00)
- **MD5**: `06ab49d1d67e0325f91271c0eac1b139`
- **SHA256**: `af10a901e804be79a193624f3a135a4aa5f45d66634a38fd2eb1805904c8d074`
- **Encoding**: ASCII

**File code content:**

```typescript
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function uploadImage(
  key: string,
  body: Buffer,
  contentType: string
) {
  await r2.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );

  return `${process.env.R2_PUBLIC_URL}/${key}`;
}

export async function deleteImage(key: string) {
  await r2.send(
    new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      Key: key,
    })
  );
}

export async function renameImage(oldKey: string, newKey: string) {
  await r2.send(
    new CopyObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      CopySource: `${process.env.R2_BUCKET}/${oldKey}`,
      Key: newKey,
    })
  );

  await deleteImage(oldKey);

  return `${process.env.R2_PUBLIC_URL}/${newKey}`;
}
```

---

### <a id="📄-lib-db-collections-ts"></a>📄 `lib/db/collections.ts`

**File Info:**
- **Size**: 909 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/db/collections.ts`
- **Relative Path**: `lib/db`
- **Created**: 2026-07-21 12:30:29 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:40:10 (Asia/Saigon / GMT+07:00)
- **MD5**: `bff893abd16169f6d600c7ebcb7aa19d`
- **SHA256**: `e9457e01444e543931748df328617db89d40c30638b0ef31667cd0eadf040250`
- **Encoding**: ASCII

**File code content:**

```typescript
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
```

---

### <a id="📄-lib-db-images-ts"></a>📄 `lib/db/images.ts`

**File Info:**
- **Size**: 2.01 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/db/images.ts`
- **Relative Path**: `lib/db`
- **Created**: 2026-07-21 18:23:34 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:40:42 (Asia/Saigon / GMT+07:00)
- **MD5**: `b348e9358d3d87c7169741c7ba7d7b7d`
- **SHA256**: `4d43488f58237eb864c8333e821803150e7c669a7d865b550fa0d408df0b6f4d`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getDB } from "@/lib/d1";

export async function getImages(productSlug: string, value1: string, value2?: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`
      SELECT * FROM images
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
      ORDER BY sort_order ASC, id ASC
    `)
    .bind(productSlug, value1, value2 ?? null)
    .all();
  return results;
}

export async function insertImage(
  productSlug: string,
  value1: string,
  value2: string | null,
  r2Key: string,
  url: string
) {
  const db = await getDB();

  const maxOrder: any = await db
    .prepare(`
      SELECT COALESCE(MAX(sort_order), 0) as max FROM images
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
    `)
    .bind(productSlug, value1, value2 ?? null)
    .first();

  const result = await db
    .prepare(`
      INSERT INTO images (product_slug, value1, value2, r2_key, url, sort_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    .bind(productSlug, value1, value2 ?? null, r2Key, url, (maxOrder?.max ?? 0) + 1)
    .run();

  return result.meta.last_row_id;
}

export async function getImageById(id: number): Promise<any> {
  const db = await getDB();
  return db.prepare(`SELECT * FROM images WHERE id = ?`).bind(id).first();
}

export async function deleteImageRow(id: number) {
  const db = await getDB();
  await db.prepare(`DELETE FROM images WHERE id = ?`).bind(id).run();
}

export async function updateSortOrders(order: { id: number; sort_order: number }[]) {
  const db = await getDB();
  const stmt = db.prepare(`UPDATE images SET sort_order = ? WHERE id = ?`);
  const batch = order.map((item) => stmt.bind(item.sort_order, item.id));
  if (batch.length > 0) await db.batch(batch);
}

export async function getAllImagesForProduct(productSlug: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM images WHERE product_slug = ? ORDER BY sort_order ASC, id ASC`)
    .bind(productSlug)
    .all();
  return results;
}
```

---

### <a id="📄-lib-db-inventory-ts"></a>📄 `lib/db/inventory.ts`

**File Info:**
- **Size**: 1.82 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/db/inventory.ts`
- **Relative Path**: `lib/db`
- **Created**: 2026-07-21 12:36:22 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:41:04 (Asia/Saigon / GMT+07:00)
- **MD5**: `0154678359aa385da21d04456481122f`
- **SHA256**: `d173947a3c39608ba89d3536b3e97cdf9e97de1150c65ebc0939bdf84f119ca5`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getDB } from "@/lib/d1";

export async function getInventory(product: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM inventory WHERE product_slug = ? AND status = 'Active' ORDER BY id`)
    .bind(product)
    .all();
  return results;
}

export async function getVariantById(id: number) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM inventory WHERE id = ? AND status = 'Active' LIMIT 1`)
    .bind(id)
    .first();
}

export async function getValue1Options(productSlug: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT DISTINCT value1 FROM inventory WHERE product_slug = ? ORDER BY value1`)
    .bind(productSlug)
    .all();
  return results;
}

export async function getValue2Options(productSlug: string, value1: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`
      SELECT DISTINCT value2 FROM inventory
      WHERE product_slug = ? AND value1 = ? AND value2 IS NOT NULL AND value2 != ''
      ORDER BY value2
    `)
    .bind(productSlug, value1)
    .all();
  return results;
}

export async function saveInventory(inventory: any[]) {
  const db = await getDB();
  await db.prepare(`DELETE FROM inventory`).run();

  const stmt = db.prepare(`
    INSERT INTO inventory (
      id, collection_slug, product_slug,
      variant1, value1, variant2, value2, variant3, value3,
      stock, priceVND, priceUSD, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const batch = inventory.map((item) =>
    stmt.bind(
      item.id, item.collection_slug, item.product_slug,
      item.variant1, item.value1, item.variant2, item.value2, item.variant3, item.value3,
      item.stock, item.priceVND, item.priceUSD, item.status
    )
  );

  if (batch.length > 0) await db.batch(batch);
}
```

---

### <a id="📄-lib-db-orders-ts"></a>📄 `lib/db/orders.ts`

**File Info:**
- **Size**: 2.76 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/db/orders.ts`
- **Relative Path**: `lib/db`
- **Created**: 2026-07-21 15:45:57 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:41:27 (Asia/Saigon / GMT+07:00)
- **MD5**: `a4dfd8dcd541feda7288c15dce0dfa65`
- **SHA256**: `0c54254647c1c0e91edb3611815c45abb22a13c388f6cc3f380e81de2a226d35`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getDB } from "@/lib/d1";
import { getVariantById } from "./inventory";

export async function createOrderWithDetails(order: any, cart: any[]) {
  const db = await getDB();

  // Duplicate submission check
  if (order.idempotency_key) {
    const existing: any = await db
      .prepare(`SELECT id FROM orders WHERE idempotency_key = ?`)
      .bind(order.idempotency_key)
      .first();
    if (existing) return existing.id;
  }

  // Validate stock and build order lines
  let subtotal = 0;
  const lines: any[] = [];

  for (const item of cart) {
    const variant: any = await getVariantById(item.variant_id);

    if (!variant || variant.status !== "Active") {
      throw new Error(`Variant ${item.variant_id} is not available`);
    }
    if (variant.stock < item.quantity) {
      throw new Error(`Not enough stock for variant ${item.variant_id}`);
    }

    subtotal += variant.priceVND * item.quantity;
    lines.push({
      variant_id: item.variant_id,
      quantity: item.quantity,
      unit_price: variant.priceVND,
      total_price: variant.priceVND * item.quantity,
    });
  }

  // Insert order
  const result = await db
    .prepare(`
      INSERT INTO orders (
        created_at, payment_status, payment_method,
        customer_name, email, phone, address, notes,
        subtotal, currency, idempotency_key
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      order.created_at, order.payment_status, order.payment_method,
      order.customer_name, order.email, order.phone, order.address, order.notes,
      subtotal, order.currency, order.idempotency_key ?? null
    )
    .run();

  const orderId = Number(result.meta.last_row_id);

  // Insert details (batched together, atomic as a group)
  if (lines.length > 0) {
    const insertDetail = db.prepare(`
      INSERT INTO order_details (order_id, variant_id, quantity, unit_price, total_price)
      VALUES (?, ?, ?, ?, ?)
    `);

    await db.batch(
      lines.map((line) =>
        insertDetail.bind(orderId, line.variant_id, line.quantity, line.unit_price, line.total_price)
      )
    );
  }

  // NOTE: stock decrement was already commented out in the original code.
  // If you want it, do it here as its own db.batch() of UPDATE statements.
  // Just know D1 can't roll back the order insert above if this step fails —
  // same caveat that existed before with the commented-out block.

  return orderId;
}

export async function getOrder(id: number) {
  const db = await getDB();
  return db.prepare(`SELECT * FROM orders WHERE id = ?`).bind(id).first();
}

export async function getOrderDetails(orderId: number) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM order_details WHERE order_id = ? ORDER BY id`)
    .bind(orderId)
    .all();
  return results;
}
```

---

### <a id="📄-lib-db-products-ts"></a>📄 `lib/db/products.ts`

**File Info:**
- **Size**: 1.74 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/db/products.ts`
- **Relative Path**: `lib/db`
- **Created**: 2026-07-21 12:32:37 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:46:23 (Asia/Saigon / GMT+07:00)
- **MD5**: `15a40712809b5992014ba9fbefa198b6`
- **SHA256**: `47c74ecb89849bc1990810900e7ac068bc55bf83b60a355aa915da1d041f25db`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getDB } from "@/lib/d1";

export async function getProductsByCollection(collection: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE collection_slug = ? AND status = 'Active' ORDER BY id`)
    .bind(collection)
    .all();
  return results;
}

export async function getProduct(slug: string) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM products WHERE product_slug = ?`)
    .bind(slug)
    .first();
}

export async function getProductBySlug(slug: string) {
  const db = await getDB();
  return db
    .prepare(`SELECT * FROM products WHERE product_slug = ? LIMIT 1`)
    .bind(slug)
    .first();
}

export async function getAllProducts() {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE status = 'Active' ORDER BY id`)
    .all();
  return results;
}

export async function getProductsByCollectionAdmin(collection: string) {
  const db = await getDB();
  const { results } = await db
    .prepare(`SELECT * FROM products WHERE collection_slug = ? ORDER BY id`)
    .bind(collection)
    .all();
  return results;
}

export async function saveProducts(products: any[]) {
  const db = await getDB();
  await db.prepare(`DELETE FROM products`).run();

  const stmt = db.prepare(`
    INSERT INTO products (
      id, collection_slug, product_name, product_slug,
      category, status, description, shipping, sizeGuide, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const batch = products.map((p) =>
    stmt.bind(
      p.id, p.collection_slug, p.product_name, p.product_slug,
      p.category, p.status, p.description, p.shipping, p.sizeGuide, p.notes
    )
  );

  if (batch.length > 0) await db.batch(batch);
}
```

---

### <a id="📄-lib-cart-ts"></a>📄 `lib/cart.ts`

**File Info:**
- **Size**: 1.57 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/cart.ts`
- **Relative Path**: `lib`
- **Created**: 2026-07-21 14:35:00 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-21 14:43:42 (Asia/Saigon / GMT+07:00)
- **MD5**: `edb98a595890be5c09b3bf2fcc94f97d`
- **SHA256**: `4f426a1c4ab4db4781d24dab5e169ddb6da4bed7aa1a8998783bbcce9d97bbfa`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface CartItem {
  variant_id: number;
  quantity: number;
}

const CART_KEY = "cart";

export function getCart(): CartItem[] {
  const cart = localStorage.getItem(CART_KEY);

  if (!cart) {
    return [];
  }

  return JSON.parse(cart);
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(variantId: number) {
  const cart = getCart();

  const item = cart.find((item) => item.variant_id === variantId);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      variant_id: variantId,
      quantity: 1,
    });
  }

  saveCart(cart);
}



export function updateQuantity(
  variantId: number,
  quantity: number
) {
  const cart = getCart();

  const item = cart.find((item) => item.variant_id === variantId);

  if (!item) return;

  item.quantity = quantity;

  saveCart(cart);
}

export function removeFromCart(variantId: number) {
  const cart = getCart().filter(
    (item) => item.variant_id !== variantId
  );

  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}


export function increaseQuantity(variantId: number) {
  const cart = getCart();

  const item = cart.find((item) => item.variant_id === variantId);

  if (!item) return;

  item.quantity++;

  saveCart(cart);
}

export function decreaseQuantity(variantId: number) {
  const cart = getCart();

  const item = cart.find((item) => item.variant_id === variantId);

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    removeFromCart(variantId);
    return;
  }

  saveCart(cart);
}
```

---

### <a id="📄-lib-d1-ts"></a>📄 `lib/d1.ts`

**File Info:**
- **Size**: 206 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/d1.ts`
- **Relative Path**: `lib`
- **Created**: 2026-07-22 15:18:31 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:39:47 (Asia/Saigon / GMT+07:00)
- **MD5**: `0b9f12b109816479e863c08170112542`
- **SHA256**: `7ecb9c178c5c50bd3e3f8613aa1c28614b5bf2cb2fc3fc5ec1b73f9fc117b9f2`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getDB(): Promise<D1Database> {
  const { env } = await getCloudflareContext({
    async: true,
  });

  return env.DB;
}
```

---

### <a id="📄-lib-productoptions-ts"></a>📄 `lib/productOptions.ts`

**File Info:**
- **Size**: 651 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/productOptions.ts`
- **Relative Path**: `lib`
- **Created**: 2026-07-21 13:33:01 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-21 13:33:07 (Asia/Saigon / GMT+07:00)
- **MD5**: `f81653f8f7ada20890c5d6c9dce1893a`
- **SHA256**: `c5ca140f8be0be6ce110128e896fc9be31fe151a01c57739ca65e286d32fde0c`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface ProductOption {
  name: string;
  values: string[];
}

export function buildProductOptions(variants: any[]): ProductOption[] {

  const map = new Map<string, Set<string>>();

  for (const variant of variants) {

    [
      [variant.variant1, variant.value1],
      [variant.variant2, variant.value2],
      [variant.variant3, variant.value3],
    ].forEach(([name, value]) => {

      if (!name || !value) return;

      if (!map.has(name)) {
        map.set(name, new Set());
      }

      map.get(name)!.add(value);

    });

  }

  return [...map.entries()].map(([name, values]) => ({
    name,
    values: [...values],
  }));

}
```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

### <a id="📄-agents-md"></a>📄 `AGENTS.md`

**File Info:**
- **Size**: 327 B
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `AGENTS.md`
- **Relative Path**: `root`
- **Created**: 2026-07-20 18:23:03 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-20 18:23:03 (Asia/Saigon / GMT+07:00)
- **MD5**: `9e09241799026ac05be315a2f0b50055`
- **SHA256**: `e3447d84251880fb34cfae09131cb4c57471529bbfe60976a3245793cf621627`
- **Encoding**: UTF-8

**File code content:**

````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

````

---

### <a id="📄-claude-md"></a>📄 `CLAUDE.md`

**File Info:**
- **Size**: 11 B
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `CLAUDE.md`
- **Relative Path**: `root`
- **Created**: 2026-07-20 18:23:03 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-20 18:23:03 (Asia/Saigon / GMT+07:00)
- **MD5**: `5c27369b226fcf2be8a6cfe52224e767`
- **SHA256**: `336cc4fbf19beaada7ccf9986414fa91851a8d7a07dfb3ccbe800a69eed0ab49`
- **Encoding**: ASCII

**File code content:**

````markdown
@AGENTS.md

````

---

### <a id="📄-next-env-d-ts"></a>📄 `next-env.d.ts`

**File Info:**
- **Size**: 247 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `next-env.d.ts`
- **Relative Path**: `root`
- **Created**: 2026-07-18 15:58:53 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 11:08:40 (Asia/Saigon / GMT+07:00)
- **MD5**: `2a74d3909800ca5467fa83b0ab4a4890`
- **SHA256**: `7b550dda9686c16f36a17bf9051d5dbf31e98555b30d114ac49fc49a1e712651`
- **Encoding**: ASCII

**File code content:**

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---

### <a id="📄-next-config-ts"></a>📄 `next.config.ts`

**File Info:**
- **Size**: 213 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `next.config.ts`
- **Relative Path**: `root`
- **Created**: 2026-07-18 15:58:53 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 11:08:09 (Asia/Saigon / GMT+07:00)
- **MD5**: `d765f0ee76c02dcbe5124348a04f884b`
- **SHA256**: `ecae854fd70bbfea7639e4e0742a754b50c8b7fa8a7594142989486ae2ea9564`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`https://${process.env.R2_PUBLIC_HOSTNAME}/**`),
    ],
  },
};

export default nextConfig;
```

---

### <a id="📄-open-next-config-ts"></a>📄 `open-next.config.ts`

**File Info:**
- **Size**: 106 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `open-next.config.ts`
- **Relative Path**: `root`
- **Created**: 2026-07-22 11:05:56 (Asia/Saigon / GMT+07:00)
- **Modified**: 2026-07-22 17:18:53 (Asia/Saigon / GMT+07:00)
- **MD5**: `ed6517ec46d9acd2ab107c3f4a060177`
- **SHA256**: `448fbb4c733fb9da2c90a9de41485ada2472b9429bf473b62e068e456b841235`
- **Encoding**: ASCII

**File code content:**

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

---
