"use client";

import { useEffect, useState } from "react";

export default function InventoryPage() {
  const [collections, setCollections] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [variants, setVariants] = useState<any[]>([]);

  const [collectionSlug, setCollectionSlug] = useState("");
  const [productSlug, setProductSlug] = useState("");

  const emptyForm = {
    id: undefined as number | undefined,
    collection_slug: "",
    product_slug: "",
    variant1: "",
    value1: "",
    variant2: "",
    value2: "",
    variant3: "",
    value3: "",
    stock: 0,
    priceVND: 0,
    priceUSD: 0,
    status: "Active",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    fetch("/api/admin/collections")
      .then((res) => (res.json()) as any)
      .then(setCollections);
  }, []);

  useEffect(() => {
    setProducts([]);
    setProductSlug("");
    setVariants([]);
    setForm(emptyForm);

    if (!collectionSlug) return;

    fetch(`/api/admin/products?collection=${collectionSlug}`)
      .then((res) => (res.json()) as any)
      .then(setProducts);
  }, [collectionSlug]);

  useEffect(() => {
    setVariants([]);
    setForm(emptyForm);

    if (!productSlug) return;

    loadVariants();
  }, [productSlug]);

  async function loadVariants() {
    const res = await fetch(`/api/admin/inventory?product=${productSlug}`);
    const data = await (res.json()) as any;
    setVariants(data);
  }

  function editVariant(v: any) {
    setForm(v);
  }

  function newVariant() {
    setForm({
      ...emptyForm,
      collection_slug: collectionSlug,
      product_slug: productSlug,
    });
  }

  async function saveVariant() {
    const method = form.id ? "PUT" : "POST";

    await fetch("/api/admin/inventory", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        collection_slug: collectionSlug,
        product_slug: productSlug,
      }),
    });

    await loadVariants();
    newVariant();
  }

  async function deleteVariantRow(id: number) {
    if (!confirm("Delete this variant?")) return;

    await fetch("/api/admin/inventory", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    await loadVariants();

    if (form.id === id) {
      newVariant();
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Inventory</h1>

      <div className="flex gap-4 mb-8">
        <select
          className="rounded border p-2"
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
          className="rounded border p-2"
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
      </div>

      {productSlug && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Variants</h2>
            <button
              onClick={newVariant}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              New Variant
            </button>
          </div>

          <table className="w-full border mb-10">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-3 text-left">Variant 1</th>
                <th className="p-3 text-left">Variant 2</th>
                <th className="p-3 text-left">Variant 3</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Price VND</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v: any) => (
                <tr key={v.id} className="border-b">
                  <td className="p-3">
                    {v.variant1 ? `${v.variant1}: ${v.value1}` : "-"}
                  </td>
                  <td className="p-3">
                    {v.variant2 ? `${v.variant2}: ${v.value2}` : "-"}
                  </td>
                  <td className="p-3">
                    {v.variant3 ? `${v.variant3}: ${v.value3}` : "-"}
                  </td>
                  <td className="p-3">{v.stock}</td>
                  <td className="p-3">{v.priceVND?.toLocaleString()}</td>
                  <td className="p-3">{v.status}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => editVariant(v)}
                        className="rounded border px-3 py-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteVariantRow(v.id)}
                        className="rounded border border-red-400 px-3 py-1 text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="rounded border p-6">
            <h2 className="mb-6 text-xl font-bold">
              {form.id ? "Edit Variant" : "New Variant"}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                className="rounded border p-2"
                placeholder="Variant 1 name (e.g. Color)"
                value={form.variant1}
                onChange={(e) => setForm({ ...form, variant1: e.target.value })}
              />
              <input
                className="rounded border p-2"
                placeholder="Value 1 (e.g. Red)"
                value={form.value1}
                onChange={(e) => setForm({ ...form, value1: e.target.value })}
              />

              <input
                className="rounded border p-2"
                placeholder="Variant 2 name (e.g. Size)"
                value={form.variant2}
                onChange={(e) => setForm({ ...form, variant2: e.target.value })}
              />
              <input
                className="rounded border p-2"
                placeholder="Value 2 (e.g. M)"
                value={form.value2}
                onChange={(e) => setForm({ ...form, value2: e.target.value })}
              />

              <input
                className="rounded border p-2"
                placeholder="Variant 3 name (optional)"
                value={form.variant3}
                onChange={(e) => setForm({ ...form, variant3: e.target.value })}
              />
              <input
                className="rounded border p-2"
                placeholder="Value 3 (optional)"
                value={form.value3}
                onChange={(e) => setForm({ ...form, value3: e.target.value })}
              />

              <input
                type="number"
                className="rounded border p-2"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: Number(e.target.value) })
                }
              />

              <input
                type="number"
                className="rounded border p-2"
                placeholder="Price (VND)"
                value={form.priceVND}
                onChange={(e) =>
                  setForm({ ...form, priceVND: Number(e.target.value) })
                }
              />

              <input
                type="number"
                className="rounded border p-2"
                placeholder="Price (USD)"
                value={form.priceUSD}
                onChange={(e) =>
                  setForm({ ...form, priceUSD: Number(e.target.value) })
                }
              />

              <select
                className="rounded border p-2"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>

            <button
              onClick={saveVariant}
              className="mt-6 rounded bg-green-600 px-6 py-2 text-white"
            >
              {form.id ? "Update Variant" : "Create Variant"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}