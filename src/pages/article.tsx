import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  gambar_url: string;
  kategori: string;
  link: string;
}

export default function ArtikelList() {
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchArtikel = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("artikel")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setArtikelList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  return (
    <div className="
      pt-24 px-6 pb-10 min-h-screen
      bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-gray-200
      transition-colors duration-700 ease-in-out
    ">
      <div className="text-center mb-10 transition-colors duration-500">
        <h1 className="text-4xl font-bold text-lime-300 dark:text-cyan-400 drop-shadow-md">
          Artikel Pilihan
        </h1>
        <p className="text-emerald-100 dark:text-gray-300 mt-2 text-sm max-w-xl mx-auto">
          Temukan beragam artikel menarik dari Poetra Mandiri Foundation yang informatif, edukatif, dan menginspirasi.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-emerald-100 dark:text-gray-400">Memuat artikel...</p>
      ) : artikelList.length === 0 ? (
        <p className="text-center text-emerald-100 dark:text-gray-400">
          Belum ada artikel yang tersedia saat ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-colors duration-500">
          {artikelList.map((artikel) => (
            <div
              key={artikel.id}
              className="
                bg-white text-black
                dark:bg-gray-900 dark:text-gray-200
                rounded-lg shadow-md hover:shadow-green-400/40
                transition-all duration-500 overflow-hidden
              "
            >
              <img
                src={artikel.gambar_url}
                alt={artikel.judul}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800 dark:text-cyan-300">
                  {artikel.judul}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 line-clamp-3">
                  {artikel.isi}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Kategori: {artikel.kategori}
                </p>
                <a
                  href={artikel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-blue-600 dark:text-yellow-400 hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
