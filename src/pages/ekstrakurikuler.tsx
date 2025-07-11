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
    <div className="
      pt-24 px-6 pb-16 min-h-screen
      bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-gray-200
      transition-colors duration-700 ease-in-out
    ">
      <h1 className="text-4xl text-center font-bold text-lime-300 dark:text-cyan-400 drop-shadow-md mb-2 transition-colors duration-500">
        Ekstrakurikuler Poetra Mandiri
      </h1>
      <p className="text-emerald-100 dark:text-gray-300 text-center text-sm mb-12 max-w-2xl mx-auto transition-colors duration-500">
        Kami percaya bahwa pembentukan karakter siswa tidak hanya dilakukan di dalam kelas, tetapi juga melalui kegiatan ekstrakurikuler yang menyenangkan, mendidik, dan membangun nilai-nilai positif.
      </p>

      {/* GRID 3 KOLOM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Ekstra Item */}
        {ekstrakurikuler.map((item, i) => (
          <div
            key={i}
            className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg hover:shadow-green-400 transition-all duration-500"
          >
            <item.icon className={`text-4xl mb-3 ${item.iconColor}`} />
            <h2 className="text-xl font-bold text-green-800 dark:text-yellow-400 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* AJAKAN PENUTUP */}
      <div className="text-center mt-16 max-w-xl mx-auto transition-colors duration-500">
        <h3 className="text-xl font-semibold text-yellow-300 dark:text-cyan-400 mb-2">
          Ekstrakurikuler Berkualitas, Karakter Siswa Hebat!
        </h3>
        <p className="text-sm text-emerald-100 dark:text-gray-300">
          Mari kembangkan bakat, minat, dan nilai kepemimpinan siswa bersama kami melalui berbagai program unggulan di luar kelas.
        </p>
      </div>
    </div>
  );
}

// Data ekstrakurikuler
const ekstrakurikuler = [
  {
    title: "IRMA (Ikatan Remaja Masjid)",
    description:
      "Membangun spiritualitas, kepemimpinan, dan kegiatan keagamaan siswa yang Islami dan berakhlak mulia.",
    icon: FaMosque,
    iconColor: "text-green-700",
  },
  {
    title: "Calistung",
    description:
      "Ekstra untuk siswa tingkat awal dalam memperkuat kemampuan membaca, menulis, dan berhitung secara menyenangkan.",
    icon: FaCalculator,
    iconColor: "text-yellow-600",
  },
  {
    title: "PMR (Palang Merah Remaja)",
    description:
      "Mengajarkan kepedulian sosial, pertolongan pertama, serta kesiapsiagaan terhadap bencana sejak dini.",
    icon: FaHandsHelping,
    iconColor: "text-red-600",
  },
  {
    title: "Badminton",
    description:
      "Menyalurkan minat dan bakat siswa di bidang olahraga dengan semangat sportivitas dan kebugaran.",
    icon: FaTableTennis,
    iconColor: "text-indigo-600",
  },
  {
    title: "Seni Tari",
    description:
      "Mengekspresikan budaya dan kreativitas siswa melalui gerakan tari daerah dan modern yang membangun kepercayaan diri.",
    icon: FaTheaterMasks,
    iconColor: "text-pink-600",
  },
  {
    title: "Basket",
    description:
      "Membina kerja sama tim, kekuatan fisik, serta strategi permainan melalui kegiatan bola basket yang seru.",
    icon: FaBasketballBall,
    iconColor: "text-orange-500",
  },
];
