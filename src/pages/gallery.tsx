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
    <div className="pt-24 px-6 pb-10 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
 <h1 className="text-4xl text-center font-bold text-cyan-400 drop-shadow-md">
          Gallery
        </h1>
        <p className="text-gray-300 mt-2 text-center text-sm">
          Temukan beragam artikel menarik dari Poetra Mandiri Foundation yang
          informatif, edukatif, dan menginspirasi.
        </p>      <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded shadow bg-white overflow-hidden hover:shadow-lg transition"
          >
            <img src={item.gambar_url} alt={item.nama} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.nama}</h2>
              <p className="text-sm text-black">{item.deskripsi}</p>
              <span className="text-xs text-black">Kategori: {item.kategori}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
