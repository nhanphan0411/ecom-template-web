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

        const items = await response.json();

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