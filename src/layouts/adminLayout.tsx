// src/layouts/AdminLayout.tsx
import { ReactNode } from "react";
import AdminNavbar from "../components/navbarAdmin";
import SidebarAdmin from "../pages/admin/sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-100 text-black min-h-screen">
      <AdminNavbar />
      <div className="flex">
        <SidebarAdmin />
        <main className="ml-64 w-full pt-[60px]">
          {children}
        </main>
      </div>
    </div>
  );
}
