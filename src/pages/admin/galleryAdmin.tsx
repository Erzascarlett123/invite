import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Galeri {
  id: string;
  judul: string;
  deskripsi: string;
  gambar_url: string;
  kategori: string;
}

export default function GalleryAdmin() {
  const [galeriList, setGaleriList] = useState<Galeri[]>([]);
  const [form, setForm] = useState({
    id: "",
    judul: "",
    deskripsi: "",
    kategori: "",
    file: null as File | null,
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

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
    const { id, judul, deskripsi, kategori, file } = form;

    if (!judul.trim() || !deskripsi.trim() || !kategori.trim() || (!file && !editing)) {
      alert("Harap lengkapi semua data.");
      return;
    }

    setLoading(true);
    let imageUrl = "";

    if (file) {
      const filename = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("galerry")
        .upload(filename, file);

      if (uploadError) {
        alert("Gagal mengupload gambar: " + uploadError.message);
        setLoading(false);
        return;
      }

      const { data } = supabase.storage.from("galerry").getPublicUrl(filename);
      imageUrl = data.publicUrl;
    }

    if (editing) {
      const { error: updateError } = await supabase
        .from("galeri")
        .update({
          judul,
          deskripsi,
          kategori,
          ...(file && { gambar_url: imageUrl }),
        })
        .eq("id", id);

      if (updateError) alert("Gagal mengupdate data: " + updateError.message);
      else alert("Data berhasil diperbarui!");
    } else {
      const { error: insertError } = await supabase.from("galeri").insert({
        judul,
        deskripsi,
        kategori,
        gambar_url: imageUrl,
      });

      if (insertError) alert("Gagal menambahkan data: " + insertError.message);
      else alert("Galeri berhasil ditambahkan!");
    }

    setForm({ id: "", judul: "", deskripsi: "", kategori: "", file: null });
    setEditing(false);
    fetchGaleri();
    setLoading(false);
  };

  const handleEdit = (item: Galeri) => {
    setForm({ ...item, file: null });
    setEditing(true);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus galeri ini?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("galeri").delete().eq("id", id);
    if (error) alert("Gagal menghapus: " + error.message);
    else fetchGaleri();
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Manajemen Galeri
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Judul Galeri"
            className="w-full p-2 border rounded"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
          />

          <select
            className="w-full p-2 border rounded"
            value={form.kategori}
            onChange={(e) => setForm({ ...form, kategori: e.target.value })}
          >
            <option value="">Pilih Kategori</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="For All">For All</option>
          </select>

          <textarea
            placeholder="Deskripsi Galeri"
            className="w-full p-2 border rounded"
            rows={4}
            value={form.deskripsi}
            onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) =>
              setForm({ ...form, file: e.target.files?.[0] || null })
            }
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className={`w-full py-2 rounded text-white font-semibold transition ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editing
              ? loading
                ? "Menyimpan..."
                : "Perbarui Galeri"
              : loading
              ? "Mengunggah..."
              : "Tambah Galeri"}
          </button>
        </div>

        {/* List Galeri */}
        <div className="space-y-4">
          {galeriList.length === 0 ? (
            <p className="text-gray-300">Belum ada galeri.</p>
          ) : (
            galeriList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.gambar_url}
                  alt={item.judul}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.judul}</h3>
                  <p className="text-sm text-gray-600">{item.deskripsi}</p>
                  <p className="text-xs text-gray-500 mb-2">
                    Kategori: {item.kategori}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
