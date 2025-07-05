import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  kategori: string;
  gambar_url: string;
}

interface Galeri {
  id: string;
  judul: string;
  deskripsi: string;
  kategori: string;
  gambar_url: string;
}

const jenjangList = ["SD", "SMP", "SMA", "For All"];

export default function AdminHome() {
  const [selectedJenjang, setSelectedJenjang] = useState("For All");
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  const [galeriList, setGaleriList] = useState<Galeri[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    let artikelData: Artikel[] = [];
    let galeriData: Galeri[] = [];

    if (selectedJenjang === "For All") {
      const { data: aData } = await supabase
        .from("artikel")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: gData } = await supabase
        .from("galeri")
        .select("*")
        .order("created_at", { ascending: false });

      artikelData = aData || [];
      galeriData = gData || [];
    } else {
      const { data: aData } = await supabase
        .from("artikel")
        .select("*")
        .eq("kategori", selectedJenjang)
        .order("created_at", { ascending: false });

      const { data: gData } = await supabase
        .from("galeri")
        .select("*")
        .eq("kategori", selectedJenjang)
        .order("created_at", { ascending: false });

      artikelData = aData || [];
      galeriData = gData || [];
    }

    setArtikelList(artikelData);
    setGaleriList(galeriData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [selectedJenjang]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Filter Berdasarkan Jenjang</h1>

      {/* Filter Jenjang */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {jenjangList.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedJenjang(level)}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              selectedJenjang === level
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
            }`}
          >
            {level === "For All" ? "Semua Jenjang" : `Jenjang ${level}`}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-lg">Memuat data...</p>}

      {/* Artikel Section */}
      {!loading && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Artikel {selectedJenjang}</h2>
          {artikelList.length === 0 ? (
            <p className="text-gray-500">Tidak ada artikel.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {artikelList.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                  <img src={item.gambar_url} alt={item.judul} className="h-40 w-full object-cover rounded mb-3" />
                  <h3 className="text-xl font-semibold mb-1">{item.judul}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{item.isi}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Galeri Section */}
      {!loading && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Galeri {selectedJenjang}</h2>
          {galeriList.length === 0 ? (
            <p className="text-gray-500">Tidak ada galeri.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {galeriList.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                  <img src={item.gambar_url} alt={item.judul} className="h-40 w-full object-cover rounded mb-3" />
                  <h3 className="text-lg font-semibold mb-1">{item.judul}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.deskripsi}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
