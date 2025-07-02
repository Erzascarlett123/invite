// File: src/pages/admin/galleryAdmin.tsx

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Galeri {
  id: string;
  nama: string;
  deskripsi: string;
  gambar_url: string;
  kategori: string;
}

export default function GalleryAdmin() {
  const [galeriList, setGaleriList] = useState<Galeri[]>([]);
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
    kategori: "",
    file: null as File | null,
  });

  const fetchGaleri = async () => {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching galeri:", error);
    } else if (data) {
      setGaleriList(data);
    }
  };

  const handleUpload = async () => {
    if (!form.file) return alert("Pilih gambar terlebih dahulu");

    const filename = `${Date.now()}-${form.file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("galerry")
      .upload(filename, form.file);

    if (uploadError) return alert("Gagal upload gambar");

    const { data: urlData } = supabase.storage.from("galerry").getPublicUrl(filename);

    const { error: insertError } = await supabase.from("galeri").insert({
      nama: form.nama,
      deskripsi: form.deskripsi,
      kategori: form.kategori,
      gambar_url: urlData.publicUrl,
    });

    if (insertError) {
      alert("Gagal menyimpan data galeri");
    } else {
      setForm({ nama: "", deskripsi: "", kategori: "", file: null });
      fetchGaleri();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("galeri").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus galeri");
    } else {
      fetchGaleri();
    }
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manajemen Galeri</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Tambah Galeri */}
        <div className="bg-white p-6 rounded shadow-md space-y-4">
          <input
            type="text"
            placeholder="Nama"
            className="w-full p-2 border rounded"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
          <input
            type="text"
            placeholder="Kategori (SD/SMP/SMA)"
            className="w-full p-2 border rounded"
            value={form.kategori}
            onChange={(e) => setForm({ ...form, kategori: e.target.value })}
          />
          <textarea
            placeholder="Deskripsi"
            className="w-full p-2 border rounded"
            rows={4}
            value={form.deskripsi}
            onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          />
          <input
            type="file"
            className="w-full"
            accept="image/*"
            onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })}
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={handleUpload}
          >
            Tambah Galeri
          </button>
        </div>

        {/* Daftar Galeri */}
        <div className="space-y-4">
          {galeriList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.gambar_url}
                alt={item.nama}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.nama}</h3>
                <p className="text-gray-700 text-sm mb-1">{item.deskripsi}</p>
                <span className="text-xs text-gray-500">Kategori: {item.kategori}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="block mt-3 text-sm text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
