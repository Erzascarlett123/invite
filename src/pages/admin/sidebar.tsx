import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-60 bg-blue-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/admin" className="hover:text-blue-200">Home</NavLink>
        <NavLink to="/admin/gallery" className="hover:text-blue-200">Gallery</NavLink>
        <NavLink to="/admin/article" className="hover:text-blue-200">Article</NavLink>
      </nav>
    </aside>
  );
}
