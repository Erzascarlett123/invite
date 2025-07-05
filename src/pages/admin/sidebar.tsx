import { NavLink } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <aside className="w-full md:w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 pt-16 shadow-lg">
      <h2 className="text-xl font-bold px-4 mb-6">Admin Panel</h2>
      <nav className="flex flex-col px-4 space-y-4">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-300"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/gallery"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-300"
          }
        >
          Galeri
        </NavLink>
        <NavLink
          to="/admin/heroAdmin"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-300"
          }
        >
          Hero
        </NavLink>
        <NavLink
          to="/admin/article"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-300"
          }
        >
          Artikel
        </NavLink>
      </nav>
    </aside>
  );
}
