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
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      {!hideNavbar && <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />}
      <main className="min-h-screen">{children}</main>
      {!hideNavbar && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
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
    </Router>
  );
};

export default App;
