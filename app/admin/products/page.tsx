"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [collections, setCollections] = useState<any[]>([]);

  const emptyForm = {
    id: undefined as number | undefined,
    collection_slug: "",
    product_name: "",
    product_slug: "",
    category: "",
    status: "Active",
    description: "",
    shipping: "",
    sizeGuide: "",
    notes: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    loadProducts();
    loadCollections();
  }, []);

  async function loadProducts() {
    const res = await fetch("/api/admin/products");
    const data = (await res.json()) as any;
    setProducts(data);
  }

  async function loadCollections() {
    const res = await fetch("/api/admin/collections");
    const data = (await res.json()) as any;
    setCollections(data);
  }

  function editProduct(product: any) {
    setForm(product);
  }

  function newProduct() {
    setForm(emptyForm);
  }

  async function saveProduct() {
    const method = form.id ? "PUT" : "POST";

    await fetch("/api/admin/products", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    await loadProducts();
    setForm(emptyForm);
  }

  async function deleteProduct(id: number) {
    if (!confirm("Delete this product?")) return;

    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    await loadProducts();

    if (form.id === id) {
      setForm(emptyForm);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Products</h1>

          <button
            onClick={newProduct}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            New
          </button>
        </div>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Slug</th>
            <th className="p-3 text-left">Collection</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p: any) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.product_name}</td>
              <td className="p-3">{p.product_slug}</td>
              <td className="p-3">{p.collection_slug}</td>
              <td className="p-3">{p.status}</td>
              <td className="p-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => editProduct(p)}
                    className="rounded border px-3 py-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(p.id)}
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

      <div className="mt-10 rounded border p-6">
        <h2 className="mb-6 text-xl font-bold">
          {form.id ? "Edit Product" : "New Product"}
        </h2>

        <div className="space-y-4">
          <select
            className="w-full rounded border p-2"
            value={form.collection_slug}
            onChange={(e) =>
              setForm({ ...form, collection_slug: e.target.value })
            }
          >
            <option value="">Select collection</option>
            {collections.map((c: any) => (
              <option key={c.collection_slug} value={c.collection_slug}>
                {c.collection_name}
              </option>
            ))}
          </select>

          <input
            className="w-full rounded border p-2"
            placeholder="Product Name"
            value={form.product_name}
            onChange={(e) =>
              setForm({ ...form, product_name: e.target.value })
            }
          />

          <input
            className="w-full rounded border p-2"
            placeholder="Slug"
            value={form.product_slug}
            onChange={(e) =>
              setForm({ ...form, product_slug: e.target.value })
            }
          />

          <input
            className="w-full rounded border p-2"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <textarea
            className="w-full rounded border p-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <textarea
            className="w-full rounded border p-2"
            placeholder="Shipping info"
            value={form.shipping}
            onChange={(e) => setForm({ ...form, shipping: e.target.value })}
          />

          <textarea
            className="w-full rounded border p-2"
            placeholder="Size guide"
            value={form.sizeGuide}
            onChange={(e) => setForm({ ...form, sizeGuide: e.target.value })}
          />

          <textarea
            className="w-full rounded border p-2"
            placeholder="Notes"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />

          <select
            className="rounded border p-2"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Active</option>
            <option>Draft</option>
          </select>

          <button
            onClick={saveProduct}
            className="rounded bg-green-600 px-6 py-2 text-white"
          >
            {form.id ? "Update Product" : "Create Product"}
          </button>
        </div>
      </div>
    </div>
  );
}