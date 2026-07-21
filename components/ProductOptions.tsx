"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

export default function ProductOptions({
    options,
    variants,
}: {
    options: {
        name: string;
        values: string[];
    }[];
    variants: any[];
}) {
    const [selected, setSelected] = useState<Record<string, string>>(() => {

        const first = variants[0];

        const initial: Record<string, string> = {};

        if (first.variant1) initial[first.variant1] = first.value1;
        if (first.variant2) initial[first.variant2] = first.value2;
        if (first.variant3) initial[first.variant3] = first.value3;

        return initial;

    });
    const selectedVariant = variants.find((variant) => {

        return Object.entries(selected).every(([name, value]) => {

            return (
                (variant.variant1 === name && variant.value1 === value) ||
                (variant.variant2 === name && variant.value2 === value) ||
                (variant.variant3 === name && variant.value3 === value)
            );

        });

    });

    return (
        <div className="space-y-6">
            {options.map((option) => (
                <div key={option.name}>
                    <h2 className="font-bold mb-2">{option.name}</h2>

                    <div className="flex gap-2 flex-wrap">
                        {option.values.map((value) => {
                            const active = selected[option.name] === value;

                            return (
                                <button
                                    key={value}
                                    onClick={() =>
                                        setSelected({
                                            ...selected,
                                            [option.name]: value,
                                        })
                                    }
                                    className={`border rounded px-4 py-2 ${active ? "bg-black text-white" : ""
                                        }`}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div className="border rounded p-4">

                <h2 className="font-bold mb-4">
                    Selected Variant
                </h2>

                {selectedVariant ? (
                    <>
                        <p>Stock: {selectedVariant.stock}</p>
                        <p>Price: {selectedVariant.priceVND.toLocaleString()} VND</p>

                        <button
                            className="mt-6 border rounded px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={selectedVariant.stock === 0}
                            onClick={() => {
                                if (!selectedVariant) return;
                                addToCart(selectedVariant.id);
                                alert("Added to cart");
                            }}
                        >
                            {selectedVariant.stock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </>
                ) : (
                    <p>Please select all options.</p>
                )}

            </div>
        </div>
    );
}