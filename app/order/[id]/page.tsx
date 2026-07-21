import { getOrder, getOrderDetails } from "@/lib/order";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const order: any = getOrder(Number(id));
  const details: any[] = getOrderDetails(Number(id));

  return (
    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Thank you!
      </h1>

      <p className="mt-4">
        Order #{order.id}
      </p>

      <p>{order.customer_name}</p>

      <p>{order.email}</p>

      <p>{order.payment_method}</p>

      <div className="mt-8 space-y-4">

        {details.map((item) => (

          <div
            key={item.id}
            className="border p-4 rounded"
          >

            <p>Variant ID: {item.variant_id}</p>

            <p>Qty: {item.quantity}</p>

            <p>{item.unit_price.toLocaleString()} VND</p>

          </div>

        ))}

      </div>

      <h2 className="text-2xl font-bold mt-8">
        Total: {order.subtotal.toLocaleString()} VND
      </h2>

    </main>
  );
}