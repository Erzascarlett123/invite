import { useEffect } from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Hero from "../components/heroSection";
import GALER from "../components/galerr";

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

    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div
      className="relative min-h-screen text-black dark:text-white"
      style={{
        backgroundImage: `url("/src/assets/images/dokumentasi/foto4.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay blur */}
      <div className="absolute inset-0 bg-white/80 dark:bg-violet-900/80 backdrop-blur-md z-0" />

      {/* Konten utama */}
      <div className="relative z-10">
        <div className="p-7" />

        {/* Hero Section */}
        <Hero />

        {/* Section Info */}
        <section className="py-12 bg-white/80 dark:bg-gray-800 animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:sticky md:top-8">
                <div className="p-[60px]"></div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  border border-2 border-gray-600 shadow-xl">
                  <h2 className="text-2xl font-bold">Sekolah Poetra Mandiri</h2>
                  <p className="mt-2">
                    Sekolah Poetra Mandiri (NPSN: P9948093) adalah lembaga pendidikan berakreditasi
                     B yang berkomitmen membentuk generasi cerdas, tangguh, dan berkarakter. 
                     Kami menggabungkan keunggulan Kurikulum 2013 dan Kurikulum Merdeka dalam pembelajaran
                      yang menyeluruh, adaptif, dan relevan dengan perkembangan zaman.
                  </p>
                </div>

                <div className="p-[20px]"></div>
                 <div className="p-6 bg-white dark:bg-gray-900 rounded-lg  border border-2 border-gray-600 shadow-xl">
                  <p>
                    Dengan suasana belajar yang hangat dan inklusif, guru-guru kami hadir sebagai pembimbing sekaligus 
                    sahabat bagi siswa dalam proses belajar mereka. Kami juga terus berinovasi melalui pemanfaatan 
                    teknologi, pembelajaran berbasis proyek, serta media yang interaktif dan modern agar setiap anak 
                    dapat tumbuh sesuai potensinya dan siap menghadapi tantangan masa depan.
                  </p>
                </div>

              </div>
              <div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl  border border-2 border-gray-600">
                  <div className="mb-6">
                    <GALER />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ajakan Bergabung */}
        <section className="py-16 bg-green-100 dark:bg-violet-800 animate-on-scroll  border border-2 border-gray-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4 text-green-800 dark:text-white">
              Berminat Bergabung Dengan Kami?
            </h2>
            <p className="text-lg text-green-700 dark:text-gray-300 mb-6">
              Jadilah bagian dari Sekolah Poetra Mandiri dan wujudkan masa depan...
            </p>
            <a
              href="/PPDB-ONLINE"
              className="inline-block bg-green-600 hover:bg-green-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Daftar Sekarang
            </a>
          </div>
        </section>

        {/* Maps */}
       <section className="py-16 bg-white/80 dark:bg-gray-800 animate-on-scroll border border-2 border-gray-600">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Kolom kiri: Hubungi Kami */}
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-2">Hubungi Kami</h2>
      <p className="text-gray-800 dark:text-gray-300">
        Kami siap menjawab pertanyaan dan kebutuhan Anda terkait Sekolah Poetra Mandiri.
        Jangan ragu untuk menghubungi kami melalui kontak atau media sosial berikut:
      </p>
      <div className="flex flex-col gap-4 text-lg">
        <a
          href="mailto: poetramandiri90@gmail.com"
          className="flex items-center gap-3 text-red-600 hover:text-red-400 transition"
        >
          <FaEnvelope className="text-2xl" /> poetramandiri90@gmail.com
        </a>
        <a
          href="https://wa.me/6287717395496
"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-green-600 hover:text-green-400 transition"
        >
          <FaWhatsapp className="text-2xl" /> +62 877 1739 5496
        </a>
        <a
          href="https://www.instagram.com/poetramandiriofficial_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-pink-600 hover:text-pink-400 transition"
        >
          <FaInstagram className="text-2xl" />@poetramandiriofficial_
        </a>
      </div>
    </div>

    {/* Kolom kanan: Google Maps */}
    <div>
      <iframe
        className="w-full h-64 md:h-80 rounded-lg shadow-lg border border-2 border-gray-600"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.3005664896721!2d106.79087245268654!3d-6.596777951798851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f3f739a717%3A0x48ec34a9e0b764fc!2sTaman%20Topi%20Square!5e1!3m2!1sid!2sid!4v1751475406653!5m2!1sid!2sid"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps SMK INFOKOM BOGOR"
      />
    </div>
  </div>
</section>
 </div>
    </div>
  );
};

export default LandingPage;
