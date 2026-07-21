import { getProductsByCollection } from "@/lib/products";
import Link from "next/link";

export default async function CollectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const products = getProductsByCollection(slug);

    return (
        <main className="max-w-5xl mx-auto p-10">

            <h1 className="text-3xl font-bold mb-8">
                {slug}
            </h1>

            <div className="space-y-4">

                {products.map((product: any) => (

                    <Link
                        href={`/products/${product.product_slug}`}
                        key={product.id}
                        className="block border rounded p-5"
                    >
                        <h2>{product.product_name}</h2>

                        <p>{product.product_slug}</p>
                    </Link>

                ))}

            </div>

        </main>
    );
}