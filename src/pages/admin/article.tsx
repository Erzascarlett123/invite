// File: src/pages/admin/article.tsx

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Swal from "sweetalert2";

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  gambar_url: string;
  slug: string;
  storage_path?: string;
}

export default function ArticleAdmin() {
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  const [form, setForm] = useState({
    judul: "",
    isi: "",
    slug: "",
    file: null as File | null,
  });

  const fetchArtikel = async () => {
    const { data, error } = await supabase
      .from("artikel")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      Swal.fire("Gagal Memuat", error.message, "error");
    } else {
      setArtikelList(data);
    }
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  const handleUpload = async () => {
    if (!form.judul || !form.slug || !form.isi || !form.file) {
      Swal.fire("Peringatan", "Semua field wajib diisi", "warning");
      return;
    }

    const ext = form.file.name.split(".").pop();
    const filename = `article-${Date.now()}.${ext}`;
    const storagePath = `artikel/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from("article")
      .upload(storagePath, form.file, { upsert: false });

    if (uploadError) {
      Swal.fire("Upload Gagal", uploadError.message, "error");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("article")
      .getPublicUrl(storagePath);

    const { error: insertError } = await supabase.from("artikel").insert({
      judul: form.judul,
      isi: form.isi,
      slug: form.slug,
      gambar_url: urlData.publicUrl,
      storage_path: storagePath,
    });

    if (insertError) {
      Swal.fire("Gagal Simpan", insertError.message, "error");
      return;
    }

    Swal.fire("Berhasil", "Artikel berhasil ditambahkan", "success");
    setForm({ judul: "", isi: "", slug: "", file: null });
    fetchArtikel();
  };

  const handleDelete = async (item: Artikel) => {
    const confirm = await Swal.fire({
      title: "Hapus Artikel?",
      text: "Artikel dan gambar akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirm.isConfirmed) return;

    if (item.storage_path) {
      const { error: removeError } = await supabase.storage
        .from("article")
        .remove([item.storage_path]);

      if (removeError) {
        Swal.fire("Gagal Hapus Gambar", removeError.message, "error");
        return;
      }
    }

    const { error: deleteError } = await supabase
      .from("artikel")
      .delete()
      .eq("id", item.id);

    if (deleteError) {
      Swal.fire("Gagal Hapus Artikel", deleteError.message, "error");
    } else {
      Swal.fire("Berhasil", "Artikel telah dihapus", "success");
      fetchArtikel();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manajemen Artikel</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form Tambah */}
        <div>
          <input
            type="text"
            placeholder="Judul"
            className="w-full p-2 border rounded mb-2"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
          />
          <input
            type="text"
            placeholder="Slug"
            className="w-full p-2 border rounded mb-2"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
          <textarea
            placeholder="Isi Artikel"
            className="w-full p-2 border rounded mb-2"
            rows={4}
            value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            className="w-full mb-2"
            onChange={(e) =>
              setForm({ ...form, file: e.target.files?.[0] || null })
            }
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            onClick={handleUpload}
          >
            Tambah Artikel
          </button>
        </div>

        {/* Daftar Artikel */}
        <div className="space-y-4">
          {artikelList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow border dark:bg-gray-800"
            >
              <img
                src={item.gambar_url}
                alt={item.judul}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <h3 className="text-xl font-semibold">{item.judul}</h3>
              <p className="text-gray-600 line-clamp-2">{item.isi}</p>
              <button
                onClick={() => handleDelete(item)}
                className="mt-2 text-red-500 hover:underline"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
