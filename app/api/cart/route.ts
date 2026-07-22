import { NextRequest, NextResponse } from "next/server";

import { getVariantById } from "@/lib/db/inventory";
import { getProduct } from "@/lib/db/products";

export async function POST(req: NextRequest) {

  const { cart } = (await req.json()) as any;

  const items = await Promise.all(cart.map(async (item: any) => {

    const variant: any = await getVariantById(item.variant_id);

    const product: any = await getProduct(variant.product_slug);

    return {
      ...item,
      variant,
      product,
    };

  }));

  return NextResponse.json(items);

}