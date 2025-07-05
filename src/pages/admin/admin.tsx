import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

interface Galeri {
  id: string;
  nama: string;
  deskripsi: string;
  gambar_url: string;
  kategori: string;
}

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  gambar_url: string;
  kategori: string;
  link: string;
}

export default function AdminHome() {
  const [galeriList, setGaleriList] = useState<Galeri[]>([]);
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);

  const fetchGaleri = async () => {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setGaleriList(data);
  };

  const fetchArtikel = async () => {
    const { data, error } = await supabase
      .from("artikel")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setArtikelList(data);
  };

  useEffect(() => {
    fetchGaleri();
    fetchArtikel();
  }, []);

  const navigateTo = (level: string) => {
    alert(`Kamu memilih admin untuk jenjang: ${level}`);
    // Bisa diarahkan ke halaman khusus: navigate(`/admin/${level.toLowerCase()}`);
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400 drop-shadow-md animate-pulse">
        Welcome !
      </h1>
      <p className="text-center text-sm text-gray-300 mb-10">
        Terima kasih telah mengelola konten galeri & artikel. Pilih jenjang atau lihat konten terbaru di bawah.
      </p>

      {/* PILIH ADMIN JENJANG */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        {["SD", "SMP", "SMA"].map((level) => (
          <button
            key={level}
            onClick={() => navigateTo(level)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition"
          >
            Admin {level}
          </button>
        ))}
      </div>

      {/* Galeri */}
      <h2 className="text-2xl font-bold mb-4 border-b border-cyan-400 inline-block">Galeri Terbaru</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {galeriList.length === 0 ? (
          <p className="text-gray-400">Belum ada galeri yang diunggah.</p>
        ) : (
          galeriList.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-500/50 overflow-hidden transition"
            >
              <img src={item.gambar_url} alt={item.nama} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-cyan-300">{item.nama}</h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">{item.deskripsi}</p>
                <span className="text-xs text-gray-400 block mt-2">Kategori: {item.kategori}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Artikel */}
      <h2 className="text-2xl font-bold mb-4 border-b border-yellow-400 inline-block">Artikel Terbaru</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artikelList.length === 0 ? (
          <p className="text-gray-400">Belum ada artikel yang diunggah.</p>
        ) : (
          artikelList.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-yellow-400/50 overflow-hidden transition"
            >
              <img src={item.gambar_url} alt={item.judul} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-yellow-300">{item.judul}</h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">{item.isi}</p>
                <span className="text-xs text-gray-400 block mt-2 mb-2">Kategori: {item.kategori}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-400 hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
