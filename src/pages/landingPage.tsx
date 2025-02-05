import { useEffect } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGift,
  FaMoneyBillWave,
} from "react-icons/fa";
import Image from "../assets/images/masjid.jpeg";

// Contoh gambar penceramah, ganti dengan path gambar yang sesuai
import SpeakerImage from "../assets/images/home.png";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          element.classList.add("fade-in");
          element.classList.remove("fade-out");
        } else {
          element.classList.remove("fade-in");
          element.classList.add("fade-out");
        }
      });
    };

    // Panggil sekali agar elemen yang terlihat saat load awal langsung mendapatkan animasi
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="h-full text-gray-800">
      {/* Hero Section */}
      <div
        className="relative p-8 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* Overlay dengan background lebih gelap */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          {/* Membungkus teks undangan dalam sebuah kotak */}
          <div className="animate-on-scroll p-8  bg-opacity-90 rounded-lg shadow-xl">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Undangan Maulid Nabi
            </h1>
            <h2 className="text-2xl font-medium text-white mb-4">
              Kepada Yth. Bapak Erwin
            </h2>
            <p className="text-lg text-white">
              Mari bersama kita mengenang kelahiran Nabi Muhammad SAW dengan
              penuh rasa syukur.
            </p>
            <p className="text-lg text-white">
            Semoga kehadiran Bapak/Ibu membawa keberkahan.
            </p>
          </div>
        </div>
      </div>

      {/* Section Info Penceramah */}
      <section className="py-16 bg-gray-200 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom Kiri: Info Singkat Penceramah yang sticky */}
            <div className="md:sticky md:top-8">
              <div className="p-6 bg-white rounded-lg shadow-xl">
                <img
                  src={SpeakerImage}
                  alt="Penceramah"
                  className="rounded-lg w-full mb-4"
                />
                <h2 className="text-2xl font-bold">Ustadz Ahmad Ridwan</h2>
                <p className="mt-2">
                  Ustadz Ahmad Ridwan adalah penceramah yang inspiratif dan
                  berwawasan luas. Beliau telah menyampaikan banyak tausiyah
                  mengenai kebaikan, toleransi, dan nilai-nilai kemanusiaan.
                </p>
              </div>
            </div>
            {/* Kolom Kanan: Video YouTube dan Info Detail */}
            <div>
              <div className="p-6 bg-white rounded-lg shadow-xl">
                {/* Kotak Video YouTube */}
                <div className="mb-6">
                  <iframe
                    className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video Penceramah"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-2xl font-bold mb-2">Informasi Penceramah</h2>
                <p>
                  Beliau memiliki pengalaman lebih dari 15 tahun dalam berdakwah,
                  menyampaikan pesan-pesan keislaman dengan penuh semangat dan
                  inspirasi. Topik yang sering diangkat meliputi keutamaan
                  berakhlak mulia, pentingnya persaudaraan, dan nilai-nilai keadilan
                  dalam kehidupan. Kunjungi situs resmi beliau untuk mengetahui
                  lebih lanjut tentang kegiatan dakwah dan jadwal ceramah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Waktu Section */}
      <div className="py-16 bg-white border-2 shadow-lg animate-on-scroll">
        <div className="max-w-3xl mx-auto flex flex-col items-start gap-4 text-gray-800">
          <div className="flex items-center gap-4">
            <FaCalendarAlt className="text-indigo-500 text-4xl" />
            <h2 className="text-3xl font-semibold">Waktu Acara</h2>
          </div>
          <p className="text-lg ml-12">
            <strong>Sabtu, 15 Maret 2025</strong> <br />
            Pukul: 09:00 AM
          </p>
        </div>
      </div>

      {/* Informasi Lokasi Section */}
      <div className="py-16 bg-gray-200 border-2 shadow-lg animate-on-scroll">
        <div className="max-w-3xl mx-auto flex flex-col items-start gap-4 text-gray-800">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-500 text-4xl" />
            <h2 className="text-3xl font-semibold">Tempat Acara</h2>
          </div>
          <p className="text-lg ml-12">
            Masjid Al-Hikmah <br />
            Jalan Raya No. 45, Jakarta
          </p>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="py-16 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Lokasi di Google Maps
          </h2>
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4874856720177!2d106.87001951500807!3d-6.201433962703221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69919fbe5e741d%3A0x60068e02f46c3b25!2sMasjid%20Al-Hikmah!5e0!3m2!1sid!2sid!4v1674481932087!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Masjid Al-Hikmah"
          ></iframe>
        </div>
      </div>

      {/* Donasi/Kado Section */}
      <div className="py-16 bg-gray-200 border-2 shadow-lg animate-on-scroll">
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-6 text-gray-800">
          <div className="flex items-center gap-4">
            <FaGift className="text-indigo-500 text-4xl" />
            <h2 className="text-3xl font-semibold">Donasi atau Kado</h2>
          </div>
          <p className="text-lg ml-12">
            Untuk mendukung kelancaran acara Maulid Nabi Muhammad SAW,
            Bapak/Ibu dapat memberikan donasi atau kado.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Donasi */}
            <div className="bg-gray-100 p-6 rounded-lg border-2 shadow-[4px_4px_0px_black] w-64">
              <div className="flex items-center gap-4">
                <FaMoneyBillWave className="text-indigo-500 text-3xl" />
                <h3 className="text-xl font-semibold">Donasi Tunai</h3>
              </div>
              <p className="text-sm mt-4">
                Kirim donasi Anda ke rekening: <br />
                <strong>1234567890</strong> (Bank XYZ) <br />
                a.n. Panitia Maulid Nabi
              </p>
            </div>
            {/* Kado */}
            <div className="bg-gray-100 p-6 rounded-lg border-2 shadow-[4px_4px_0px_black] w-64">
              <div className="flex items-center gap-4">
                <FaGift className="text-indigo-500 text-3xl" />
                <h3 className="text-xl font-semibold">Kado</h3>
              </div>
              <p className="text-sm mt-4">
                Silakan bawa kado langsung ke lokasi acara atau hubungi panitia
                untuk pengambilan kado Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
