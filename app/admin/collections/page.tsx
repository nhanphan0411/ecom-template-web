"use client";

import { useEffect, useState } from "react";

export default function CollectionsPage() {

  const [collections, setCollections] = useState<any[]>([]);

  const emptyForm = {
    id: null as number | null,
    collection_name: "",
    collection_slug: "",
    description: "",
    status: "Active",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    loadCollections();
  }, []);

  async function loadCollections() {
    const res = await fetch("/api/admin/collections");
    const data = await (res.json()) as any;
    setCollections(data);
  }

  function editCollection(collection: any) {
    setForm(collection);
  }

  function newCollection() {
    setForm(emptyForm);
  }

  async function saveCollection() {
    const method = form.id ? "PUT" : "POST";

    await fetch("/api/admin/collections", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    await loadCollections();

    setForm(emptyForm);
  }

  async function deleteCollection(id: number) {
    if (!confirm("Delete this collection?")) return;

    await fetch("/api/admin/collections", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    await loadCollections();

    if (form.id === id) {
      setForm(emptyForm);
    }
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-4">

          <h1 className="text-3xl font-bold">
            Collections
          </h1>

          <button
            onClick={newCollection}
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
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {collections.map((c: any) => (
            <tr
              key={c.id}
              className="border-b"
            >

              <td className="p-3">{c.id}</td>

              <td className="p-3">
                {c.collection_name}
              </td>

              <td className="p-3">
                {c.collection_slug}
              </td>

              <td className="p-3">
                {c.status}
              </td>

              <td className="p-3">

                <div className="flex gap-2">

                  <button
                    onClick={() => editCollection(c)}
                    className="rounded border px-3 py-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCollection(c.id)}
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
          {form.id ? "Edit Collection" : "New Collection"}
        </h2>

        <div className="space-y-4">

          <input
            className="w-full rounded border p-2"
            placeholder="Collection Name"
            value={form.collection_name}
            onChange={(e) =>
              setForm({
                ...form,
                collection_name: e.target.value,
              })
            }
          />

          <input
            className="w-full rounded border p-2"
            placeholder="Slug"
            value={form.collection_slug}
            onChange={(e) =>
              setForm({
                ...form,
                collection_slug: e.target.value,
              })
            }
          />

          <textarea
            className="w-full rounded border p-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <select
            className="rounded border p-2"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option>Active</option>
            <option>Draft</option>
          </select>

          <button
            onClick={saveCollection}
            className="rounded bg-green-600 px-6 py-2 text-white"
          >
            {form.id ? "Update Collection" : "Create Collection"}
          </button>

        </div>

      </div>

    </div>
  );

}