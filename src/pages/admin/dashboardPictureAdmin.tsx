import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

interface HeroData {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  storage_path: string;
  created_at: string;
}

export default function HeroAdmin() {
  const [heroList, setHeroList] = useState<HeroData[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Ambil data dari Supabase
  const fetchHeroData = async () => {
    const { data, error } = await supabase
      .from("hero_banners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      Swal.fire("Gagal Memuat Data", error.message, "error");
    } else {
      setHeroList(data);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  // Upload gambar & simpan metadata
  const handleUpload = async () => {
    if (!file || !title.trim() || !subtitle.trim()) {
      Swal.fire("Peringatan", "Judul, Subjudul, dan Gambar wajib diisi", "warning");
      return;
    }

    setLoading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `hero-${uuidv4()}.${fileExt}`;
      const filePath = `hero-images/${fileName}`;

      // Upload ke storage (bucket "hero")
      const { error: uploadError } = await supabase.storage
        .from("hero")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        throw new Error("Upload gagal: " + uploadError.message);
      }

      // Ambil URL publik
      const { data: urlData } = supabase.storage.from("hero").getPublicUrl(filePath);
      const publicUrl = urlData.publicUrl;

      // Simpan metadata ke tabel hero_banners
      const { error: insertError } = await supabase.from("hero_banners").insert({
        title,
        subtitle,
        image_url: publicUrl,
        storage_path: filePath,
      });

      if (insertError) {
        throw new Error("Gagal menyimpan ke database: " + insertError.message);
      }

      // Reset form dan refresh list
      setFile(null);
      setTitle("");
      setSubtitle("");
      fetchHeroData();

      Swal.fire("Berhasil", "Gambar berhasil diupload", "success");
    } catch (err: any) {
      Swal.fire("Gagal", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Hapus gambar dari storage dan database
  const handleDelete = async (item: HeroData) => {
    const confirm = await Swal.fire({
      title: "Hapus Gambar?",
      text: "Gambar akan dihapus dari database dan storage.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirm.isConfirmed) return;

    try {
      // Hapus dari storage
      const { error: storageError } = await supabase.storage
        .from("hero")
        .remove([item.storage_path]);

      if (storageError) {
        throw new Error("Gagal hapus dari storage: " + storageError.message);
      }

      // Hapus dari database
      const { error: dbError } = await supabase
        .from("hero_banners")
        .delete()
        .eq("id", item.id);

      if (dbError) {
        throw new Error("Gagal hapus dari database: " + dbError.message);
      }

      fetchHeroData();
      Swal.fire("Terhapus", "Gambar berhasil dihapus", "success");
    } catch (err: any) {
      Swal.fire("Gagal", err.message, "error");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kelola Hero Banner</h1>

      <div className="mb-6 space-y-2 md:space-y-0 md:flex md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Subjudul"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="border p-2 rounded w-full md:w-auto"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Mengupload..." : "Upload"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {heroList.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded shadow-md bg-white dark:bg-gray-800"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.subtitle}
            </p>
            <button
              onClick={() => handleDelete(item)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
