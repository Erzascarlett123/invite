import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import Swal from "sweetalert2";

interface Artikel {
  id: string;
  judul: string;
  isi: string;
  gambar_url: string;
  kategori: string;
  link: string;
}

export default function ArticleAdmin() {
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  const [form, setForm] = useState({
    id: "",
    judul: "",
    isi: "",
    kategori: "",
    link: "",
    file: null as File | null,
    gambar_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const resetForm = () => {
    setForm({
      id: "",
      judul: "",
      isi: "",
      kategori: "",
      link: "",
      file: null,
      gambar_url: "",
    });
    setEditing(false);
  };

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

  const deleteOldImage = async (imageUrl: string) => {
    if (!imageUrl) return;
    const path = imageUrl.split("/storage/v1/object/public/article/")[1];
    if (path) {
      await supabase.storage.from("article").remove([path]);
    }
  };

  const handleSubmit = async () => {
    if (!form.judul || !form.isi || !form.kategori || !form.link) {
      Swal.fire("Peringatan", "Harap lengkapi semua data", "warning");
      return;
    }

    setLoading(true);
    let imageUrl = form.gambar_url;

    try {
      if (form.file) {
        const filename = `${Date.now()}-${form.file.name}`;

        // Cek duplikat
        const { data: existingFile } = await supabase
          .storage
          .from("article")
          .list("", { search: filename });

        if (existingFile && existingFile.length > 0) {
          Swal.fire("File Ada", "Nama file sudah digunakan. Harap ganti nama file.", "error");
          setLoading(false);
          return;
        }

        if (editing && form.gambar_url) {
          await deleteOldImage(form.gambar_url);
        }

        const { error: uploadError } = await supabase
          .storage
          .from("article")
          .upload(filename, form.file);

        if (uploadError) {
          Swal.fire("Upload Gagal", uploadError.message, "error");
          setLoading(false);
          return;
        }

        const { data: urlData } = supabase.storage.from("article").getPublicUrl(filename);
        imageUrl = urlData.publicUrl;
      }

      if (editing) {
        const { error } = await supabase
          .from("artikel")
          .update({
            judul: form.judul,
            isi: form.isi,
            kategori: form.kategori,
            link: form.link,
            gambar_url: imageUrl,
          })
          .eq("id", form.id);

        if (error) {
          Swal.fire("Gagal Update", error.message, "error");
        } else {
          Swal.fire("Berhasil", "Artikel diperbarui", "success");
        }
      } else {
        const { error } = await supabase.from("artikel").insert({
          judul: form.judul,
          isi: form.isi,
          kategori: form.kategori,
          link: form.link,
          gambar_url: imageUrl,
        });

        if (error) {
          Swal.fire("Gagal Tambah", error.message, "error");
        } else {
          Swal.fire("Berhasil", "Artikel berhasil ditambahkan", "success");
        }
      }

      resetForm();
      fetchArtikel();
    } catch (err) {
      Swal.fire("Kesalahan", "Terjadi kesalahan tak terduga", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item: Artikel) => {
    const confirm = await Swal.fire({
      title: "Yakin ingin menghapus?",
      text: "Artikel dan gambar akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirm.isConfirmed) return;

    try {
      await deleteOldImage(item.gambar_url);
      const { error } = await supabase.from("artikel").delete().eq("id", item.id);
      if (error) {
        Swal.fire("Gagal Hapus", error.message, "error");
      } else {
        Swal.fire("Terhapus", "Artikel berhasil dihapus", "success");
        fetchArtikel();
      }
    } catch {
      Swal.fire("Gagal", "Terjadi kesalahan saat menghapus", "error");
    }
  };

  const handleEdit = (item: Artikel) => {
    setForm({
      id: item.id,
      judul: item.judul,
      isi: item.isi,
      kategori: item.kategori,
      link: item.link,
      gambar_url: item.gambar_url,
      file: null,
    });
    setEditing(true);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">
        {editing ? "Edit Artikel" : "Manajemen Artikel"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FORM INPUT */}
        <div className="bg-white p-6 rounded shadow space-y-4 text-black">
          <input
            type="text"
            placeholder="Judul Artikel"
            className="w-full p-2 border rounded"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
          />
          <textarea
            placeholder="Isi Artikel"
            className="w-full p-2 border rounded"
            rows={4}
            value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })}
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
          <input
            type="text"
            placeholder="Link Artikel (opsional)"
            className="w-full p-2 border rounded"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
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
            className={`w-full text-white py-2 rounded transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {editing
              ? loading
                ? "Menyimpan..."
                : "Simpan Perubahan"
              : loading
              ? "Mengunggah..."
              : "Tambah Artikel"}
          </button>
          {editing && (
            <button
              onClick={resetForm}
              className="w-full bg-gray-300 text-black py-2 rounded mt-2 hover:bg-gray-400"
            >
              Batal Edit
            </button>
          )}
        </div>

        {/* LIST ARTIKEL */}
        <div className="space-y-4">
          {artikelList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition text-black"
            >
              <img
                src={item.gambar_url}
                alt={item.judul}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{item.judul}</h3>
                <p className="text-gray-600 text-sm mb-1 line-clamp-3">
                  {item.isi}
                </p>
                <span className="text-xs text-gray-500">
                  Kategori: {item.kategori}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="block mt-2 text-blue-500 hover:underline text-sm"
                    rel="noreferrer"
                  >
                    Lihat Detail
                  </a>
                )}
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-yellow-500 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
