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
        navigate("/"); // Belum login
        return;
      }

      const { data, error } = await supabase
        .from("admins")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data || data.role !== "admin") {
        navigate("/"); // Bukan admin
      }

      setChecking(false); // Aman
    };

    checkAdmin();
  }, [navigate]);


  if (checking) {
    return <div className="text-center text-white mt-10">Memeriksa akses...</div>;
  }

  return <>{children}</>;
}
