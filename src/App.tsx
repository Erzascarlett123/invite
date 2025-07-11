import React, { useState, useEffect, ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import BackgroundWrapper from "./components/BackgroundWrapper";
import LandingPage from "./pages/landingPage";
import AuthPage from "./pages/login";
import TentangKami from  "./pages/tentangKami"
import Gallery from "./pages/PPDB-ONLINE";
import Contact from "./pages/contact";
import Eskul from "./pages/ekstrakurikuler"
import Article from "./pages/article"
import Admin from "./pages/admin/admin";
import ArticleAdmin from "./pages/admin/articleAdmin";
import Protect from "./components/protectAdmin"
import GalleryAdmin from "./pages/admin/galleryAdmin";
import HeroAdmin from "./pages/admin/dashboardPictureAdmin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loader from "./components/load"; // loader animasi
import AdminLayout from "./layouts/adminLayout";

// Layout untuk User
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
    }, 500);
    return () => clearTimeout(delay);
  }, [location.pathname]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BackgroundWrapper>
        {isLoading && <Loader />}
        {!hideNavbar && (
          <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        )}
        <main className="min-h-screen">{children}</main>
        {!hideNavbar && <Footer />}
      </BackgroundWrapper>
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
  <Route path="/Ekstrakurikuler" element={<UserLayout><Eskul /></UserLayout>} />
  <Route path="/PPDB-ONLINE" element={<UserLayout><Gallery /></UserLayout>} />
  <Route path="/Kontak" element={<UserLayout><Contact /></UserLayout>} />
    <Route path="/tentangKami" element={<UserLayout><TentangKami /></UserLayout>} />
  <Route path="/artikel" element={<UserLayout><Article /></UserLayout>} />

  {/* Untuk Admin */}
  <Route path="/admin" element={<Protect><AdminRoute><Admin /></AdminRoute></Protect>} />
  <Route path="/admin/gallery" element={<Protect><AdminRoute><GalleryAdmin /></AdminRoute></Protect>} />
  <Route path="/admin/article" element={<Protect><AdminRoute><ArticleAdmin /></AdminRoute></Protect>} />
  <Route path="/admin/heroAdmin" element={<Protect><AdminRoute><HeroAdmin /></AdminRoute></Protect>} />

</Routes>

    </Router>
  );
};

export default App;