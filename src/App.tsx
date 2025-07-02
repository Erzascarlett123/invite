import React, { useState, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Gallery from "./pages/gallery"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login'; // Sembunyikan navbar di halaman tertentu (misalnya login)
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
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
