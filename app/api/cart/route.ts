import { NextRequest, NextResponse } from "next/server";

import { getVariantById } from "@/lib/db/inventory";
import { getProduct } from "@/lib/db/products";
import type { CartItem, Inventory, Product } from "@/types/db";

type CartLine = CartItem & {
  available: boolean;
  variant: Inventory | null;
  product: Product | null;
};

export async function POST(req: NextRequest) {
  const { cart } = (await req.json()) as { cart: CartItem[] };

  const items: CartLine[] = await Promise.all(
    cart.map(async (item): Promise<CartLine> => {
      const variant = await getVariantById(item.variant_id);

      if (!variant) {
        return {
          ...item,
          available: false,
          variant: null,
          product: null,
        };
      }

      const product = await getProduct(variant.product_slug);

      return {
        ...item,
        available: true,
        variant,
        product,
      };
    })
  );

  return NextResponse.json(items);
}