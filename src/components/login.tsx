// src/components/LoginForm.tsx
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ switchToSignup }: { switchToSignup: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login gagal: " + error.message);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Login Admin</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded"
      >
        Login
      </button>
      <p className="text-center text-sm">
        Belum punya akun?{" "}
        <button onClick={switchToSignup} className="text-blue-600 underline">
          Daftar di sini
        </button>
      </p>
    </div>
  );
}
