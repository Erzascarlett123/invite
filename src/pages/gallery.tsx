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
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Galeri Kegiatan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded shadow bg-white overflow-hidden hover:shadow-lg transition"
          >
            <img src={item.gambar_url} alt={item.nama} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.nama}</h2>
              <p className="text-sm text-gray-600">{item.deskripsi}</p>
              <span className="text-xs text-gray-400">Kategori: {item.kategori}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
