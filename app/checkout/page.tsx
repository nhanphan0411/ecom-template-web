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