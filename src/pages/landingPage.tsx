import { useEffect } from "react";
import Image from "../assets/images/harep.jpeg";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const LandingPage: React.FC = () => {
  // Animasi saat scroll
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="animate-on-scroll p-8 bg-opacity-90 rounded-lg shadow-xl">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              SELAMAT DATANG DI WEBSITE POETRA
            </h1>
            <h2 className="text-2xl font-medium text-white mb-4">
              Belajar Secara Efektif, Raih Prestasi Secara Positif
            </h2>
            <p className="text-lg text-white">
              Berani Bermimpi, Berani Berprestasi
            </p>
          </div>
        </div>
      </div>


      {/* Section Info Penceramah */}
      <section className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">
           Informasi Poetra Mandiri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom Kiri */}
            <div className="md:sticky md:top-8">
              <div className="p-6 bg-white rounded-lg shadow-xl">
                
                <h2 className="text-2xl font-bold">Sekolah Poetra Mandiri</h2>
                <p className="mt-2">
                  Sekolah Homeschooling Poetra Mandiri adalah lembaga pendidikan
                  alternatif yang berdiri untuk menjawab kebutuhan belajar
                  anak-anak dengan pendekatan yang lebih personal, fleksibel, dan
                  menyeluruh. Kami melayani peserta didik dari tingkat SD, SMP,
                  hingga SMA, termasuk anak-anak berkebutuhan khusus atau disabilitas.
                </p>
                <br />
                <p>
                  Melalui program pembelajaran yang disesuaikan dengan potensi
                  masing-masing siswa/i, sekolah ini menciptakan suasana belajar
                  yang nyaman dan menyenangkan. Didukung oleh tenaga pendidik
                  berpengalaman dan kurikulum yang inovatif, Homeschooling Poetra
                  Mandiri mampu membentuk karakter generasi yang mandiri dan mampu
                  bersaing secara global.
                </p>
              </div>
            </div>
            {/* Kolom Kanan */}
            <div>
              <div className="p-6 bg-white rounded-lg shadow-xl">
                <div className="mb-6">
                 
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Informasi 
                </h2>
                <p>
                Sekolah Homeschooling Poetra Mandiri juga membantu anak-anak belajar dengan lebih tenang dan bahagia tanpa 
                tekanan dari sistem sekolah konvensional. Memberikan fleksibilitas bagi keluarga dan anak dalam menentukan waktu
                 dan metode belajar sebaik mungkin. Karena kami percaya bahwa setiap anak berhak mendapatkan pendidikan yang memperhatikan
                  keunikan mereka serta minat dan bakat yang mereka kuasai. Bersama kami, bapak dan ibu tidak perlu khawatir akan keterlambatan
                   belajar atau kesulitan sosial anak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tombol Jenjang Sekolah */}
      <div className="flex flex-col items-center justify-center gap-6 py-10 px-6 bg-white dark:bg-white animate-on-scroll">
  <div className="text-center">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">Informasi Jenjang</h2>
    <p className="text-gray-600 dark:text-black max-w-xl">
      Pilih jenjang pendidikan yang sesuai dengan tingkat anak Anda untuk mendapatkan informasi lebih lanjut mengenai program, kurikulum, dan kegiatan belajar-mengajar di tingkat tersebut.
    </p>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
    {["SD", "SMP", "SMA"].map((jenjang) => (
      <button
        key={jenjang}
        onClick={() => alert(`Kamu memilih jenjang: ${jenjang}`)}
        className="px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1
        bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-700"
      >
        {jenjang}
      </button>
    ))}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.3005664896721!2d106.79087245268654!3d-6.596777951798851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f3f739a717%3A0x48ec34a9e0b764fc!2sTaman%20Topi%20Square!5e1!3m2!1sid!2sid!4v1751475406653!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps SMK INFOKOM BOGOR"
          ></iframe>
        </div>

        {/* Section Kontak & Media Sosial */}
        <section className="relative p-10 py-16 bg-white dark:bg-white  animate-on-scroll">

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kolom Kiri */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-black mb-4">Hubungi Kami</h2>
          <p className="text-black dark:text-black">
            Kami siap menjawab pertanyaan dan kebutuhan Anda. Silakan hubungi kami melalui media sosial atau layanan pesan berikut.
          </p>
        </div>

    {/* Kolom Kanan: Ikon Media Sosial */}
    <div className="flex justify-center md:justify-end items-center gap-6">
      <a
        href="https://www.instagram.com/poetramandiri.sch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-400 transition-transform transform hover:scale-110 text-3xl"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="mailto:poetramandiri.sch@gmail.com"
        className="text-red-600 hover:text-red-400 transition-transform transform hover:scale-110 text-3xl"
        aria-label="Gmail"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-400 transition-transform transform hover:scale-110 text-3xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default LandingPage;
