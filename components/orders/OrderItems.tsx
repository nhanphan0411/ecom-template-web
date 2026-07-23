"use client";

import Link from "next/link";

type Props = {
  items: any[];
  editable?: boolean;

  onIncrease?: (variantId: number) => void;
  onDecrease?: (variantId: number) => void;
  onRemove?: (variantId: number) => void;

  subtotal?: number;
  showCheckout?: boolean;
  currency?: string;
};


export default function OrderItems({
  items,
  editable = false,
  onIncrease,
  onDecrease,
  onRemove,
  subtotal,
  showCheckout = false,
  currency = "VND",
}: Props) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.variant.id}
          className="border rounded p-5 mb-4"
        >
          {!item.available ? (
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                This item is no longer available
              </p>

              {editable && (
                <button
                  onClick={() => onRemove?.(item.variant_id)}
                  className="text-red-600 underline"
                >
                  Remove
                </button>
              )}
            </div>
          ) : (
            <div className="flex gap-5">

              <div className="w-28 h-28 rounded overflow-hidden bg-gray-100 flex-shrink-0">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.product.product_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                    No image
                  </div>
                )}

              </div>

              <div className="flex-1">

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
                  
                  {currency === "USD"
                    ? `$${item.unit_price.toFixed(2)}`
                    : `${item.unit_price.toLocaleString()} VND`}
                </p>

                {editable && (
                  <div className="flex gap-2 mt-4">

                    <button
                      onClick={() => onDecrease?.(item.variant_id)}
                    >
                      -
                    </button>

                    <button
                      disabled={item.quantity >= item.variant.stock}
                      className={
                        item.quantity >= item.variant.stock
                          ? "opacity-30 cursor-not-allowed"
                          : ""
                      }
                      onClick={() => onIncrease?.(item.variant_id)}
                    >
                      +
                    </button>

                    <button
                      onClick={() => onRemove?.(item.variant_id)}
                    >
                      Remove
                    </button>

                  </div>
                )}

              </div>

            </div>
          )}
        </div>
      ))}

      {subtotal !== undefined && (
        <div className="mt-10 border-t pt-6">

          <h2 className="text-2xl font-bold">
            Total
          </h2>

          <p className="text-xl mt-2">
            {currency === "USD"
              ? `$${subtotal.toFixed(2)}`
              : `${subtotal.toLocaleString()} VND`}
          </p>

          {showCheckout && (
            <Link
              href="/checkout"
              className="inline-block mt-8 border px-6 py-3"
            >
              Checkout
            </Link>
          )}

        </div>
      )}
    </>
  );
}