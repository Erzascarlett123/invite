// File: src/pages/gallery.tsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Galeri {
  id: string;
  nama: string;
  deskripsi: string;
  gambar_url: string;
  kategori: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<Galeri[]>([]);

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setItems(data);
    else console.error("Gagal mengambil galeri:", error);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="pt-24 px-6 pb-10 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl text-center font-bold text-cyan-400 drop-shadow-md">
        Gallery
      </h1>
      <p className="text-gray-300 mt-2 text-center text-sm mb-8">
        Temukan beragam dokumentasi kegiatan dari Poetra Mandiri Foundation
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.length === 0 && (
          <p className="text-gray-400 text-center col-span-full">Galeri masih kosong.</p>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow bg-white overflow-hidden hover:shadow-cyan-500/50 transition"
          >
            <img
              src={item.gambar_url}
              alt={item.nama}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-black">
              <h2 className="text-lg font-bold mb-1">{item.nama}</h2>
              <p className="text-sm">{item.deskripsi}</p>
              <p className="text-xs mt-2 text-gray-700">Kategori: {item.kategori}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
