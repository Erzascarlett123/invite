import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: Props) {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/");
        setChecking(false);
        return;
      }

      const { data, error } = await supabase
        .from("admins")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data || data.role !== "admin") {
        navigate("/");
        setChecking(false);
        return;
      }

      setChecking(false); // Berhasil lolos semua pengecekan
    };

    checkAdmin();
  }, [navigate]);

  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="animate-pulse">Memeriksa akses admin...</p>
      </div>
    );
  }

  return <>{children}</>;
}
