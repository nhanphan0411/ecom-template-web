"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";
import Image from "next/image";

export default function ProductOptions({
    options,
    variants,
    images,
}: {
    options: {
        name: string;
        values: string[];
    }[];
    variants: any[];
    images: any[];
}) {
    const [selected, setSelected] = useState<Record<string, string>>(() => {

        const first = variants[0];

        const initial: Record<string, string> = {};

        if (first.variant1) initial[first.variant1] = first.value1;
        if (first.variant2) initial[first.variant2] = first.value2;
        if (first.variant3) initial[first.variant3] = first.value3;

        return initial;

    });

    const [imgIndex, setImgIndex] = useState(0);

    const selectedVariant = variants.find((variant) => {

        return Object.entries(selected).every(([name, value]) => {

            return (
                (variant.variant1 === name && variant.value1 === value) ||
                (variant.variant2 === name && variant.value2 === value) ||
                (variant.variant3 === name && variant.value3 === value)
            );

        });

    });

    const activeValue1 = variants[0]?.variant1 ? selected[variants[0].variant1] : undefined;
    const activeValue2 = variants[0]?.variant2 ? selected[variants[0].variant2] : undefined;

    const galleryImages = images.filter((img) => {
        if (img.value1 !== activeValue1) return false;
        if (img.value2 && img.value2 !== activeValue2) return false;
        return true;
    });

    const currentImage = galleryImages[imgIndex] ?? galleryImages[0];

    return (
        <div className="space-y-6">
            <div className="aspect-square bg-gray-100 relative mb-6">
                {currentImage ? (
                    <Image
                        src={currentImage.url_mid}
                        alt=""
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                        No image
                    </div>
                )}

                {galleryImages.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8"
                        >
                            ‹
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setImgIndex((i) => (i + 1) % galleryImages.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full w-8 h-8"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {options.map((option) => (
                <div key={option.name}>
                    <h2 className="font-bold mb-2">{option.name}</h2>

                    <div className="flex gap-2 flex-wrap">
                        {option.values.map((value) => {
                            const active = selected[option.name] === value;

                            return (
                                <button
                                    key={value}
                                    onClick={() => {
                                        setSelected({
                                            ...selected,
                                            [option.name]: value,
                                        });
                                        setImgIndex(0);
                                    }}
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