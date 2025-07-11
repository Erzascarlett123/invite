// Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/TentangKami" },
    { label: "PPDB-ONLINE", path: "/PPDB-ONLINE" },
    { label: "Ekstrakurikuler", path: "/Ekstrakurikuler" },
    { label: "Artikel", path: "/Artikel" },
    { label: "Kontak", path: "/Kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "py-2 shadow-md" : "py-4"}
        ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-green-700 to-blue-600"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo & Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className={`font-extrabold tracking-wide ${
              isScrolled ? "text-xl" : "text-2xl"
            } ${darkMode ? "text-indigo-400" : "text-white"}`}
          >
            POETRA
            <span className={darkMode ? "text-gray-300" : "text-blue-200"}>MANDIRI</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="relative flex items-center w-14 h-8 p-1 rounded-full bg-gray-300 dark:bg-gray-700 shadow-inner hover:shadow-md transition-all duration-500 ease-in-out"
            aria-label="Toggle Dark Mode"
          >
            <span
              className={`absolute w-6 h-6 bg-yellow-400 dark:bg-blue-500 rounded-full transition-transform duration-500 transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
            <FaSun
              className={`absolute left-2 text-yellow-500 text-xl transition-opacity duration-300 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            />
            <FaMoon
              className={`absolute right-2 text-blue-400 text-xl transition-opacity duration-300 ${
                darkMode ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map(({ label, path }, idx) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={idx}
                to={path}
                className={`relative group pb-1 ${
                  darkMode ? "text-gray-300" : "text-white"
                } hover:text-yellow-300 transition text-lg font-medium`}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    ${darkMode ? "bg-yellow-400" : "bg-white"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 transition duration-200" />
            ) : (
              <FaBars className="w-6 h-6 transition duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden z-40
        ${isMobileMenuOpen ? "max-h-[500px] opacity-100 animate-slideDown" : "max-h-0 opacity-0"}
        ${darkMode ? "bg-black/80 text-white backdrop-blur-sm" : "bg-white/90 text-black backdrop-blur-md"}
      `}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map(({ label, path }, idx) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={idx}
                to={path}
                onClick={closeMobileMenu}
                className={`flex items-center gap-2 py-3 px-4 rounded-lg font-medium text-base
                  transition duration-300 ease-in-out transform hover:scale-[1.03]
                  ${isActive
                    ? "bg-blue-600 text-white dark:bg-yellow-400 dark:text-black"
                    : "hover:bg-blue-500/20 dark:hover:text-yellow-300"}`}
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400 dark:bg-cyan-300 animate-pulse" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
