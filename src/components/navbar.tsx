import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-lg bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-2xl font-extrabold tracking-wide text-indigo-600 dark:text-indigo-400">
        Undangan<span className="text-gray-800 dark:text-gray-300">Religius</span>
      </div>
      
      <button
        onClick={toggleDarkMode}
        className="relative flex items-center w-14 h-8 p-1 rounded-full bg-gray-300 dark:bg-gray-700 shadow-inner hover:shadow-lg transition-shadow duration-500 ease-in-out"
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
    </nav>
  );
};

export default Navbar;
