// File: src/pages/admin/article.tsx

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  gambar_url: string;
  slug: string;
}

export default function ArticleAdmin() {
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  const [form, setForm] = useState({ judul: "", isi: "", slug: "", file: null as File | null });

  const fetchArtikel = async () => {
    const { data, error } = await supabase.from("artikel").select("*").order("created_at", { ascending: false });
    if (!error && data) setArtikelList(data);
  };

  const handleUpload = async () => {
    if (!form.file) return alert("Pilih gambar dulu");
    const filename = `${Date.now()}-${form.file.name}`;
    const { data: fileData, error: uploadError } = await supabase.storage.from("article").upload(filename, form.file);
    if (uploadError) return alert("Gagal upload gambar");
    const { data: urlData } = supabase.storage.from("article").getPublicUrl(filename);

    const { error: insertError } = await supabase.from("artikel").insert({
      judul: form.judul,
      isi: form.isi,
      slug: form.slug,
      gambar_url: urlData.publicUrl,
    });

    if (!insertError) {
      setForm({ judul: "", isi: "", slug: "", file: null });
      fetchArtikel();
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("artikel").delete().eq("id", id);
    fetchArtikel();
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manajemen Artikel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input type="text" placeholder="Judul" className="input" value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} />
          <input type="text" placeholder="Slug" className="input mt-2" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <textarea placeholder="Isi Artikel" className="input mt-2" rows={4} value={form.isi} onChange={(e) => setForm({ ...form, isi: e.target.value })} />
          <input type="file" className="mt-2" onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })} />
          <button className="bg-blue-600 text-white px-4 py-2 mt-3 rounded" onClick={handleUpload}>Tambah Artikel</button>
        </div>

        <div className="space-y-4">
          {artikelList.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <img src={item.gambar_url} alt={item.judul} className="h-40 w-full object-cover rounded mb-2" />
              <h3 className="text-xl font-semibold">{item.judul}</h3>
              <p className="text-gray-600 line-clamp-2">{item.isi}</p>
              <button onClick={() => handleDelete(item.id)} className="mt-2 text-red-500">Hapus</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
