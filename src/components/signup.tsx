// src/components/SignupForm.tsx
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupForm({ switchToLogin }: { switchToLogin: () => void }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!nama || !email || !password) {
      alert("Semua field harus diisi!");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert("Signup gagal: " + error.message);
      setLoading(false);
      return;
    }

    const userId = data.user?.id;

    if (userId) {
      const { error: insertError } = await supabase.from("admins").insert({
        id: userId,
        nama,
        email,
      });

      if (insertError) {
        alert("Gagal menyimpan data admin ke database: " + insertError.message);
      } else {
        alert("Signup berhasil! Silakan login.");
        switchToLogin(); // Beralih ke form login
      }
    }

    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Daftar Admin</h2>

      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Nama Lengkap"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        disabled={loading}
        className={`w-full py-2 rounded text-white transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Mendaftarkan..." : "Daftar"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Sudah punya akun?{" "}
        <button
          onClick={switchToLogin}
          className="text-blue-600 hover:underline font-semibold"
        >
          Login di sini
        </button>
      </p>
    </div>
  );
}
