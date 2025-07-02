import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Menambahkan ikon hamburger dan close

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mengontrol menu mobile

  // Efek untuk menangani perubahan scroll
  useEffect(() => {
    const handleScroll = () => {
      // Navbar akan mengecil setelah scroll lebih dari 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menutup menu mobile saat link diklik (opsional, tapi disarankan)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out 
        flex flex-col md:flex-row justify-between items-center px-6 shadow-lg
        ${isScrolled ? 'py-2' : 'py-4'} // Padding vertikal berubah saat scroll
        ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-700 to-blue-600'} // Warna latar belakang navbar
      `}
    >
      <div className="container mx-auto flex justify-between items-center w-1/2">
        {/* Logo/Nama Brand */}
        <Link to="/" className={`
          font-extrabold tracking-wide transition-all duration-300 ease-in-out
          ${isScrolled ? 'text-xl' : 'text-2xl'} // Ukuran font logo berubah saat scroll
          ${darkMode ? 'text-indigo-400' : 'text-white'}
          `}>
          POETRA<span className={`${darkMode ? 'text-gray-300' : 'text-blue-200'}`}>MANDIRI</span>
        </Link>
          <button
            onClick={toggleDarkMode}
            className="relative flex items-center w-14 h-8 p-1 rounded-full bg-gray-300 dark:bg-gray-700 shadow-inner hover:shadow-lg transition-shadow duration-500 ease-in-out"
            aria-label="Toggle Dark Mode"
          >
            <span
              className={`absolute w-6 h-6 bg-yellow-400 dark:bg-blue-500 rounded-full transition-transform duration-500 transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
            <FaSun
              className={`absolute left-2 text-yellow-500 text-xl transition-opacity duration-500 ${
                darkMode ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <FaMoon
              className={`absolute right-2 text-blue-400 text-xl transition-opacity duration-500 ${
                darkMode ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>

        {/* Tombol Hamburger dan Dark Mode Toggle untuk Mobile & Desktop */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}

          {/* Tombol Hamburger (Hanya terlihat di mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" /> // Ikon X saat menu terbuka
              ) : (
                <FaBars className="w-6 h-6" /> // Ikon Hamburger saat menu tertutup
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Navigasi Desktop */}
      <div className="hidden md:flex space-x-10 mt-0"> {/* mt-0 untuk memastikan tidak ada margin di desktop */}
        <Link to="/" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Beranda</Link>
        <Link to="/about" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Tentang Kami</Link>
        <Link to="/programs" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Program Studi</Link>
        <Link to="/gallery" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Galeri</Link>
        <Link to="/news" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Berita</Link>
        <Link to="/contact" className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-blue-200 transition duration-300 text-lg font-medium`}>Kontak</Link>
      </div>

      {/* Menu Navigasi Mobile (Tergantung state isMobileMenuOpen) */}
      {isMobileMenuOpen && (
        <div className={`md:hidden w-full ${darkMode ? 'bg-gray-800' : 'bg-blue-800'} py-2 mt-4 rounded-b-md`}>
          <Link to="/" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Beranda</Link>
          <Link to="/about" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Tentang Kami</Link>
          <Link to="/programs" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Program Studi</Link>
          <Link to="/gallery" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Galeri</Link>
          <Link to="/news" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Berita</Link>
          <Link to="/contact" className="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300" onClick={closeMobileMenu}>Kontak</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;