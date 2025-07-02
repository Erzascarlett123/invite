import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface GaleriItem {
  id: string;
  judul: string;
  deskripsi: string;
  gambar_url: string;
}

export default function GaleriPage() {
  const [galeri, setGaleri] = useState<GaleriItem[]>([]);

  useEffect(() => {
    const fetchGaleri = async () => {
      const { data, error } = await supabase.from("galeri").select("*").order("created_at", { ascending: false });
      if (error) console.error("Gagal mengambil galeri:", error);
      else setGaleri(data);
    };

    fetchGaleri();
  }, []);

  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {galeri.map((item) => (
        <div key={item.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <img src={item.gambar_url} alt={item.judul} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.judul}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
