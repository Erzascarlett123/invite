<<<<<<< HEAD
import React, { useState, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Admin from "./pages/admin/admin";
import ArticleAdmin from "./pages/admin/article";
import GalleryAdmin from "./pages/admin/galleryAdmin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AdminLayout from "./components/AdminLayout";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login"; // misal
=======
import React, { useState, useEffect, ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LandingPage from "./pages/landingPage";
import AuthPage from "./pages/login";
import TentangKami from  "./pages/tentangKami"
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Article from "./pages/article"
import Admin from "./pages/admin/admin";
import ArticleAdmin from "./pages/admin/articleAdmin";
import GalleryAdmin from "./pages/admin/galleryAdmin";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loader from "./components/load"; // loader animasi
import AdminLayout from "./layouts/adminLayout";

// Layout untuk User
const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
>>>>>>> f40668c41cfff89168b19aa2968dc10e76029861
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hideNavbar = location.pathname === "/login";

  useEffect(() => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500); // durasi loading simulasi
    return () => clearTimeout(delay);
  }, [location.pathname]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      {isLoading && <Loader />}
      {!hideNavbar && <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />}
      <main className="min-h-screen">{children}</main>
      {!hideNavbar && <Footer />}
    </div>
  );
};

// Layout untuk Admin
const AdminRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <AdminLayout>{children}</AdminLayout>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Layout User */}
        <Route
          path="/"
          element={
            <UserLayout>
              <LandingPage />
            </UserLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <UserLayout>
              <Gallery />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />

        {/* Layout Admin */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Admin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <AdminLayout>
              <GalleryAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/article"
          element={
            <AdminLayout>
              <ArticleAdmin />
            </AdminLayout>
          }
        />
      </Routes>
=======
        <Route path="/admin/login" element={<AuthPage />} />
  {/* Untuk User */}
  <Route path="/" element={<UserLayout><LandingPage /></UserLayout>} />
  <Route path="/gallery" element={<UserLayout><Gallery /></UserLayout>} />
  <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
    <Route path="/tentangKami" element={<UserLayout><TentangKami /></UserLayout>} />
  <Route path="/article" element={<UserLayout><Article /></UserLayout>} />

  {/* Untuk Admin */}
  <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
  <Route path="/admin/gallery" element={<AdminRoute><GalleryAdmin /></AdminRoute>} />
  <Route path="/admin/article" element={<AdminRoute><ArticleAdmin /></AdminRoute>} />
</Routes>

>>>>>>> f40668c41cfff89168b19aa2968dc10e76029861
    </Router>
  );
};

export default App;
