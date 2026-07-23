"use client";

import { useEffect, useState } from "react";
import {
    getCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "@/lib/cart";
import OrderItems from "@/components/orders/OrderItems";


export default function CartPage() {
    const [items, setItems] = useState<any[]>([]);
    const currency = "VND";

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
        if (!item.available) return total;
        return total + item.variant.priceVND * item.quantity;
    }, 0);

    return (
        <main className="max-w-5xl mx-auto p-10">

            <h1 className="text-4xl font-bold mb-8">
                Cart
            </h1>

            <OrderItems
                items={items}
                editable
                subtotal={subtotal}
                currency={currency}
                showCheckout
                onIncrease={(id) => {
                    increaseQuantity(id);
                    loadCart();
                }}
                onDecrease={(id) => {
                    decreaseQuantity(id);
                    loadCart();
                }}
                onRemove={(id) => {
                    removeFromCart(id);
                    loadCart();
                }}
            />

        </main>
    );
}