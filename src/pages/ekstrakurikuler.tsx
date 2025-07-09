import { useEffect } from "react";
import {
  FaMosque,
  FaCalculator,
  FaHandsHelping,
  FaTableTennis,
  FaTheaterMasks,
  FaBasketballBall,
} from "react-icons/fa";

export default function EkstrakurikulerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 px-6 pb-16 min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white">
      <h1 className="text-4xl text-center font-bold text-yellow-300 drop-shadow-md mb-2">
        Ekstrakurikuler Poetra Mandiri
      </h1>
      <p className="text-gray-200 text-center text-sm mb-12 max-w-2xl mx-auto">
        Kami percaya bahwa pembentukan karakter siswa tidak hanya dilakukan di dalam kelas, tetapi juga melalui kegiatan ekstrakurikuler yang menyenangkan, mendidik, dan membangun nilai-nilai positif.
      </p>

      {/* GRID 3 KOLOM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* IRMA */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaMosque className="text-4xl text-green-700 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">IRMA (Ikatan Remaja Masjid)</h2>
          <p className="text-sm text-gray-700">
            Membangun spiritualitas, kepemimpinan, dan kegiatan keagamaan siswa yang Islami dan berakhlak mulia.
          </p>
        </div>

        {/* Calistung */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaCalculator className="text-4xl text-yellow-600 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">Calistung</h2>
          <p className="text-sm text-gray-700">
            Ekstra untuk siswa tingkat awal dalam memperkuat kemampuan membaca, menulis, dan berhitung secara menyenangkan.
          </p>
        </div>

        {/* PMR */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaHandsHelping className="text-4xl text-red-600 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">PMR (Palang Merah Remaja)</h2>
          <p className="text-sm text-gray-700">
            Mengajarkan kepedulian sosial, pertolongan pertama, serta kesiapsiagaan terhadap bencana sejak dini.
          </p>
        </div>

        {/* Badminton */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaTableTennis className="text-4xl text-indigo-600 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">Badminton</h2>
          <p className="text-sm text-gray-700">
            Menyalurkan minat dan bakat siswa di bidang olahraga dengan semangat sportivitas dan kebugaran.
          </p>
        </div>

        {/* Seni Tari */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaTheaterMasks className="text-4xl text-pink-600 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">Seni Tari</h2>
          <p className="text-sm text-gray-700">
            Mengekspresikan budaya dan kreativitas siswa melalui gerakan tari daerah dan modern yang membangun kepercayaan diri.
          </p>
        </div>

        {/* Basket */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-green-400 transition">
          <FaBasketballBall className="text-4xl text-orange-500 mb-3" />
          <h2 className="text-xl font-bold text-green-800 mb-2">Basket</h2>
          <p className="text-sm text-gray-700">
            Membina kerja sama tim, kekuatan fisik, serta strategi permainan melalui kegiatan bola basket yang seru.
          </p>
        </div>
      </div>

      {/* AJAKAN PENUTUP */}
      <div className="text-center mt-16 max-w-xl mx-auto">
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">
          Ekstrakurikuler Berkualitas, Karakter Siswa Hebat!
        </h3>
        <p className="text-sm text-gray-300">
          Mari kembangkan bakat, minat, dan nilai kepemimpinan siswa bersama kami melalui berbagai program unggulan di luar kelas.
        </p>
      </div>
    </div>
  );
}
