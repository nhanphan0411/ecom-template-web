import { NextRequest, NextResponse } from "next/server";

import { getVariantById } from "@/lib/inventory";
import { getProduct } from "@/lib/products";

export async function POST(req: NextRequest) {

  const { cart } = await req.json();

  const items = cart.map((item: any) => {

    const variant: any = getVariantById(item.variant_id);

    const product: any = getProduct(variant.product_slug);

    return {
      ...item,
      variant,
      product,
    };

  });

  return NextResponse.json(items);

}