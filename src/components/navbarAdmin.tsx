import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const [admin, setAdmin] = useState<{ nama: string; email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("admins")
        .select("nama, email")
        .eq("id", user.id)
        .single();

      if (!error) setAdmin(data);
    };

    getAdmin();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
<nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center ml-64 fixed top-0 w-[calc(100%-16rem)] z-50">
      <div className="text-xl text-center font-bold text-cyan-400">Admin Dashboard</div>

      {admin && (
        <div className="flex items-center gap-4">
          <div className="text-sm text-right">
            <p className="font-semibold">{admin.nama}</p>
            <p className="text-gray-400 text-xs">{admin.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1.5 rounded transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
