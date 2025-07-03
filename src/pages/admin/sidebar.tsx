// src/components/SidebarAdmin.tsx
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 pt-16 shadow-lg">
      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/admin" className="hover:text-cyan-400">Dashboard</Link>
        <Link to="/admin/gallery" className="hover:text-cyan-400">Galeri</Link>
        <Link to="/admin/article" className="hover:text-cyan-400">Artikel</Link>
      </nav>
    </aside>
  );
}
