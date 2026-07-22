import Link from "next/link";
import { ReactNode } from "react";

const links = [
  {
    name: "Collections",
    href: "/admin/collections",
  },
  {
    name: "Products",
    href: "/admin/products",
  },
  {
    name: "Inventory",
    href: "/admin/inventory",
  },
  {
    name: "Images",
    href: "/admin/images",
  },
  {
    name: "Orders",
    href: "/admin/orders",
  },
];

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}

      <aside className="w-64 border-r bg-gray-50">

        <div className="p-6 border-b">
          <h1 className="text-xl font-bold">
            Admin
          </h1>

          <p className="text-sm text-gray-500">
            Ecommerce Template
          </p>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 hover:bg-white border border-transparent hover:border-gray-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </aside>

      {/* Page */}

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}