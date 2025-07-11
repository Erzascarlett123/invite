import { useEffect } from "react";
import Video1 from "../assets/images/dokumentasi/video2.mp4";

export default function PpdbInfoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="
      pt-24 px-6 pb-16 min-h-screen
      bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-gray-200
      transition-colors duration-700 ease-in-out
    ">
      <h1 className="text-4xl text-center font-bold text-lime-300 dark:text-cyan-400 drop-shadow-md transition-colors duration-500">
        Informasi PPDB Online
      </h1>
      <p className="text-emerald-100 dark:text-gray-300 mt-2 text-center text-sm mb-8 max-w-2xl mx-auto transition-colors duration-500">
        Penerimaan Peserta Didik Baru (PPDB) Sekolah Poetra Mandiri telah dibuka!
        Bergabunglah bersama kami untuk meraih pendidikan berkualitas dan lingkungan belajar yang menyenangkan.
      </p>

      {/* VIDEO + INFORMASI UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center mb-16">
        <div className="relative group">
          <div className="transform transition-transform duration-500 group-hover:scale-105 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 transition-colors">
            <video
              src={Video1}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-60"
            />
            <div className="p-4 bg-white text-black dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
              <h3 className="font-bold text-lg mb-1">Kegiatan Belajar</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Dokumentasi suasana kegiatan belajar interaktif di Sekolah Poetra Mandiri.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg transition-colors duration-500">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-cyan-400">
            Kenapa Memilih Sekolah Kami?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Pembelajaran berbasis Kurikulum Merdeka & K13</li>
            <li>Fasilitas lengkap dan modern</li>
            <li>Lingkungan belajar yang ramah dan Islami</li>
            <li>Guru berpengalaman dan kompeten</li>
            <li>Pembinaan karakter & kegiatan ekstrakurikuler yang beragam</li>
          </ul>
          <a
            href="https://forms.gle/G2zZw9bJHjoVncrJ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>

      {/* GRID 3 KOLOM UNTUK: PERIODE - ALUR - SYARAT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
        {/* Periode Pendaftaran */}
        <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow transition-colors duration-500">
          <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-yellow-400">
            Periode Pendaftaran
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <p><strong>Gelombang 1:</strong> 9 – 14 Juli 2025</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Beasiswa Berprestasi + Seragam + Potongan 15%
              </p>
            </div>
            <div>
              <p><strong>Gelombang 2:</strong> 15 – 19 Juli 2025</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Seragam + Potongan 10%
              </p>
            </div>
            <div>
              <p><strong>Gelombang 3:</strong> 21 – 25 Juli 2025</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Seragam + Potongan 5%
              </p>
            </div>
          </div>
        </div>

        {/* Alur Pendaftaran */}
        <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow transition-colors duration-500">
          <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-yellow-400">
            Alur Pendaftaran
          </h2>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li>Registrasi Online/Offline</li>
            <li>Pengumpulan Berkas</li>
            <li>Seleksi Administrasi & Tes</li>
            <li>Pengumuman Hasil Seleksi</li>
            <li>Daftar Ulang</li>
          </ol>
        </div>

        {/* Persyaratan */}
        <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow transition-colors duration-500">
          <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-yellow-400">
            Persyaratan
          </h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Fotokopi Akta Kelahiran</li>
            <li>Fotokopi Kartu Keluarga</li>
            <li>Pas Foto Terbaru (3x4)</li>
            <li>Ijazah/SKL (opsional)</li>
            <li>Map warna merah</li>
          </ul>
        </div>
      </div>

      {/* AJAKAN */}
      <div className="text-center mt-16 max-w-2xl mx-auto transition-colors duration-500">
        <h3 className="text-xl font-semibold text-yellow-300 dark:text-cyan-400 mb-2">
          Yuk, Wujudkan Masa Depan Cerahmu Bersama Kami!
        </h3>
        <p className="text-sm text-emerald-100 dark:text-gray-300">
          Daftar sekarang dan rasakan pengalaman belajar yang berbeda di Sekolah Poetra Mandiri.
        </p>
      </div>
    </div>
  );
}
