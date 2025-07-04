// src/pages/admin/AuthPage.tsx
import { useState } from "react";
import LoginForm from "../components/login";
import SignupForm from "../components/signup";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded p-8">
        {isLogin ? (
          <LoginForm switchToSignup={() => setIsLogin(false)} />
        ) : (
          <SignupForm switchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
