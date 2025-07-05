import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`
        fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}
        ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-700 to-blue-600'}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo & Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/" className={`font-extrabold tracking-wide ${isScrolled ? 'text-xl' : 'text-2xl'} ${darkMode ? 'text-indigo-400' : 'text-white'}`}>
            POETRA<span className={darkMode ? 'text-gray-300' : 'text-blue-200'}>MANDIRI</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="relative flex items-center w-14 h-8 p-1 rounded-full bg-gray-300 dark:bg-gray-700 shadow-inner hover:shadow-lg transition-shadow duration-500 ease-in-out"
            aria-label="Toggle Dark Mode"
          >
            <span
              className={`absolute w-6 h-6 bg-yellow-400 dark:bg-blue-500 rounded-full transition-transform duration-500 transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
            />
            <FaSun className={`absolute left-2 text-yellow-500 text-xl transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
            <FaMoon className={`absolute right-2 text-blue-400 text-xl transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition text-lg font-medium`}>Beranda</Link>
          <Link to="/tentangKami" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition text-lg font-medium`}>Tentang Kami</Link>
          <Link to="/gallery" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition text-lg font-medium`}>Galeri</Link>
          <Link to="/article" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition text-lg font-medium`}>Berita</Link>
          <Link to="/contact" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition text-lg font-medium`}>Kontak</Link>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-800'} md:hidden w-full py-2 mt-4 rounded-b-md`}>
          <Link to="/" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Beranda</Link>
          <Link to="/tentangKami" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Tentang Kami</Link>
          <Link to="/gallery" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Galeri</Link>
          <Link to="/article" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Berita</Link>
          <Link to="/contact" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Kontak</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
