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

    </Router>
  );
};

export default App;
