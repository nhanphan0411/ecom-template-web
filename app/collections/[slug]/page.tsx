import { getProductsByCollection } from "@/lib/products";
import { getInventory } from "@/lib/inventory";
import { getAllImagesForProduct } from "@/lib/images";
import ProductCard from "@/components/ProductCard";

export default async function CollectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const products: any[] = getProductsByCollection(slug);

    const cards = products.map((product) => ({
        product,
        variants: getInventory(product.product_slug),
        images: getAllImagesForProduct(product.product_slug),
    }));

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