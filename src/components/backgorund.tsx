// layouts/UserLayout.tsx
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loader from "../components/load";
import BackgroundWrapper from "../components/BackgroundWrapper";

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

  // Apply or remove "dark" class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Load saved mode from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setDarkMode(stored === "true");
  }, []);

  // Save mode to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div>
      {isLoading && <Loader />}
      {!hideNavbar && (
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      )}

      <BackgroundWrapper>
        <main className="min-h-screen">{children}</main>
        {!hideNavbar && <Footer />}
      </BackgroundWrapper>
    </div>
  );
};

export default UserLayout;
