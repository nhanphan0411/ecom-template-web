"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => (res.json()) as any)
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Orders</h1>

      <table className="w-full border">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Subtotal</th>
            <th className="p-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b">
              <td className="p-3">{o.id}</td>
              <td className="p-3">{o.customer_name}</td>
              <td className="p-3">{new Date(o.created_at).toLocaleDateString()}</td>
              <td className="p-3">{o.payment_status}</td>
              <td className="p-3">{o.subtotal.toLocaleString()} VND</td>
              <td className="p-3">
                <Link href={`/order/${o.id}`} className="text-blue-600 underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}