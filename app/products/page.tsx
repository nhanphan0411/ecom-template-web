import { getAllProducts } from "@/lib/products";
import { getInventory } from "@/lib/inventory";
import { buildProductOptions } from "@/lib/productOptions";
import ProductOptions from "@/components/ProductOptions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: any = getAllProducts();
  const inventory: any[] = getInventory(slug);
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
        />

      </div>

    </main>
  );
}