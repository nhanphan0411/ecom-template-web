"use client";

import { useEffect, useState } from "react";

type StagedImage =
  | { kind: "existing"; id: number; url: string }
  | { kind: "new"; tempId: string; file: File; previewUrl: string };

export default function InventoryPage() {
  // ---- shared pickers ----
  const [collections, setCollections] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [collectionSlug, setCollectionSlug] = useState("");
  const [productSlug, setProductSlug] = useState("");

  // ---- inventory (variants) ----
  const [variants, setVariants] = useState<any[]>([]);

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

  // ---- image manager ----
  const [value1Options, setValue1Options] = useState<any[]>([]);
  const [value2Options, setValue2Options] = useState<any[]>([]);
  const [imgValue1, setImgValue1] = useState("");
  const [imgValue2, setImgValue2] = useState("");

  const [staged, setStaged] = useState<StagedImage[]>([]);
  const [originalIds, setOriginalIds] = useState<number[]>([]);
  const [syncing, setSyncing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // ---------------- shared pickers ----------------

  useEffect(() => {
    fetch("/api/admin/collections")
      .then((res) => res.json())
      .then((data) => setCollections(data as any[]));
  }, []);

  useEffect(() => {
    setProducts([]);
    setProductSlug("");
    setVariants([]);
    setForm(emptyForm);
    setValue1Options([]);
    setImgValue1("");
    setValue2Options([]);
    setImgValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!collectionSlug) return;

    fetch(`/api/admin/products?collection=${collectionSlug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data as any[]));
  }, [collectionSlug]);

  useEffect(() => {
    setVariants([]);
    setForm(emptyForm);
    setValue1Options([]);
    setImgValue1("");
    setValue2Options([]);
    setImgValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!productSlug) return;

    loadVariants();

    fetch(`/api/admin/value1?product=${productSlug}`)
      .then((res) => res.json())
      .then((data) => setValue1Options(data as any[]));
  }, [productSlug]);

  // ---------------- inventory logic ----------------

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

  // ---------------- image manager logic ----------------

  useEffect(() => {
    setValue2Options([]);
    setImgValue2("");
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!productSlug || !imgValue1) return;

    fetch(`/api/admin/value2?product=${productSlug}&value1=${imgValue1}`)
      .then((res) => res.json())
      .then((data) => setValue2Options(data as any[]));
  }, [productSlug, imgValue1]);

  const needsValue2 = value2Options.length > 0;
  const readyToShowImages = imgValue1 && (!needsValue2 || imgValue2);

  useEffect(() => {
    setStaged([]);
    setOriginalIds([]);
    setDirty(false);

    if (!readyToShowImages) return;

    const params = new URLSearchParams({
      product_slug: productSlug,
      value1: imgValue1,
    });

    if (imgValue2) params.set("value2", imgValue2);

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
  }, [readyToShowImages, productSlug, imgValue1, imgValue2]);

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
    formData.append("value1", imgValue1);

    if (imgValue2) formData.append("value2", imgValue2);

    formData.append("deleteIds", JSON.stringify(deleteIds));
    formData.append("order", JSON.stringify(order));

    for (const f of newFiles) {
      formData.append("file", f.file);
    }

    const res = await fetch("/api/admin/images/sync", {
      method: "POST",
      body: formData,
    });

    const data = (await res.json()) as {
      images?: any[];
      failures?: string[];
      error?: string;
    };

    if (!res.ok) {
      alert(data.error || "Image sync failed");
      setSyncing(false);
      return;
    }

    if (data.failures?.length) {
      alert(`Some changes couldn't be completed:\n${data.failures.join("\n")}`);
    }

    const images = data.images ?? [];

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

  const selectClass =
    "rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-400";

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  const labelClass = "block text-xs font-medium text-gray-500 mb-1";

  const selectedProductName = products.find(
    (p) => p.product_slug === productSlug
  )?.product_name;

  const selectedCollectionName = collections.find(
    (c) => c.collection_slug === collectionSlug
  )?.collection_name;

  // ---------------- render ----------------

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Inventory</h1>

      {/* Picker bar */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 mb-8 shadow-sm">
        <div className="flex flex-col">
          <label className={labelClass}>Collection</label>
          <select
            className={selectClass}
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
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>Product</label>
          <select
            className={selectClass}
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
          <div className="ml-auto text-sm text-gray-400">
            {selectedCollectionName}{" "}
            <span className="mx-1 text-gray-300">/</span>{" "}
            <span className="font-medium text-gray-700">
              {selectedProductName}
            </span>
          </div>
        )}
      </div>

      {!productSlug && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-500">
          Select a collection and product above to manage its variants and
          images.
        </div>
      )}

      {productSlug && (
        <>
          {/* ============ VARIANTS ============ */}

          <section className="rounded-xl border border-gray-200 bg-white shadow-sm mb-8 overflow-hidden">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Variants
              </h2>
            </div>

            {variants.length === 0 ? (
              <div className="p-8 text-center text-sm text-gray-400">
                No variants yet — add one below.
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="p-3">Variant 1</th>
                    <th className="p-3">Variant 2</th>
                    <th className="p-3">Variant 3</th>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Price VND</th>
                    <th className="p-3">Status</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v: any) => (
                    <tr
                      key={v.id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="p-3">
                        {v.variant1 ? (
                          <>
                            <span className="text-gray-400">
                              {v.variant1}:
                            </span>{" "}
                            {v.value1}
                          </>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        {v.variant2 ? (
                          <>
                            <span className="text-gray-400">
                              {v.variant2}:
                            </span>{" "}
                            {v.value2}
                          </>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        {v.variant3 ? (
                          <>
                            <span className="text-gray-400">
                              {v.variant3}:
                            </span>{" "}
                            {v.value3}
                          </>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        <span
                          className={
                            v.stock === 0
                              ? "text-red-500 font-medium"
                              : "text-gray-700"
                          }
                        >
                          {v.stock}
                        </span>
                      </td>
                      <td className="p-3 text-gray-700">
                        {v.priceVND?.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            v.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {v.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => editVariant(v)}
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteVariantRow(v.id)}
                            className="text-sm text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>

          <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              {form.id ? "Edit Variant" : "New Variant"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {([1, 2, 3] as const).map((n) => (
                <div
                  key={n}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                >
                  <p className="text-xs font-semibold text-gray-400 mb-2">
                    Variant {n}
                    {n > 1 && (
                      <span className="font-normal"> · optional</span>
                    )}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        className={inputClass}
                        placeholder={
                          n === 1 ? "Color" : n === 2 ? "Size" : "Material"
                        }
                        value={(form as any)[`variant${n}`]}
                        onChange={(e) =>
                          setForm({ ...form, [`variant${n}`]: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Value</label>
                      <input
                        className={inputClass}
                        placeholder={
                          n === 1 ? "Red" : n === 2 ? "M" : "Cotton"
                        }
                        value={(form as any)[`value${n}`]}
                        onChange={(e) =>
                          setForm({ ...form, [`value${n}`]: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className={labelClass}>Stock (quantity)</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="0"
                  value={form.stock}
                  onChange={(e) =>
                    setForm({ ...form, stock: Number(e.target.value) })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Price (VND)</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="0"
                  value={form.priceVND}
                  onChange={(e) =>
                    setForm({ ...form, priceVND: Number(e.target.value) })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Price (USD)</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="0"
                  value={form.priceUSD}
                  onChange={(e) =>
                    setForm({ ...form, priceUSD: Number(e.target.value) })
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Status</label>
                <select
                  className={selectClass + " w-full"}
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option>Active</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={saveVariant}
                className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                {form.id ? "Update Variant" : "Create Variant"}
              </button>
            </div>
          </section>

          {/* ============ IMAGES ============ */}

          <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <h2 className="text-lg font-semibold text-gray-900">Images</h2>

              <div className="flex gap-3">
                <select
                  className={selectClass}
                  value={imgValue1}
                  onChange={(e) => setImgValue1(e.target.value)}
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
                    className={selectClass}
                    value={imgValue2}
                    onChange={(e) => setImgValue2(e.target.value)}
                    disabled={!imgValue1}
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
            </div>

            {!readyToShowImages ? (
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-400">
                Select the variant option{needsValue2 ? "s" : ""} above to
                manage images for that combination.
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <label className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
                    Choose files
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </label>

                  <button
                    onClick={handleSync}
                    disabled={!dirty || syncing}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 transition"
                  >
                    {syncing ? "Syncing…" : "Sync changes"}
                  </button>

                  {dirty && !syncing && (
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      Unsaved changes
                    </span>
                  )}
                </div>

                {staged.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-400">
                    No images yet for this combination — choose files above.
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {staged.map((img, index) => (
                      <div
                        key={img.kind === "existing" ? img.id : img.tempId}
                        draggable
                        onDragStart={() => setDraggedIndex(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                        className="group relative w-28 h-28 rounded-lg overflow-hidden border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing"
                      >
                        <img
                          src={
                            img.kind === "existing"
                              ? img.url
                              : img.previewUrl
                          }
                          alt=""
                          className={`w-full h-full object-cover ${
                            img.kind === "new" ? "opacity-70" : ""
                          }`}
                        />

                        {img.kind === "new" && (
                          <span className="absolute bottom-1 left-1 rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                            NEW
                          </span>
                        )}

                        <button
                          onClick={() => handleRemove(index)}
                          className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white text-xs opacity-0 group-hover:opacity-100 transition"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {staged.length > 1 && (
                  <p className="mt-3 text-xs text-gray-400">
                    Drag images to reorder them.
                  </p>
                )}
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
}