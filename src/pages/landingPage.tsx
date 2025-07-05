import { useEffect } from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Hero from "../components/heroSection";

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
      <Hero />

      {/* Section Info Penceramah */}
      <section className="py-16 bg-gray-200 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom Kiri */}
            <div className="md:sticky md:top-8">
              <div className="p-6 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold">Sekolah Poetra Mandiri</h2>
                <p className="mt-2">
                Sekolah Poetra Mandiri (NPSN: P9948093) adalah lembaga pendidikan
                 berakreditasi B yang berkomitmen membentuk generasi cerdas, tangguh, 
                 dan berkarakter. Kami menggabungkan keunggulan Kurikulum 2013 dan Kurikulum 
                 Merdeka dalam pembelajaran yang menyeluruh, adaptif, dan relevan dengan perkembangan zaman.
                </p>
                <br />
                <p>
                Dengan suasana belajar yang hangat dan inklusif, guru-guru kami hadir sebagai pembimbing
                 sekaligus sahabat bagi siswa dalam proses belajar mereka. Kami juga terus berinovasi melalui
                  pemanfaatan teknologi, pembelajaran berbasis proyek, serta media yang interaktif dan modern agar
                   setiap anak dapat tumbuh sesuai potensinya dan siap menghadapi tantangan masa depan.
                </p>
              </div>
            </div>
            {/* Kolom Kanan */}
            <div>
              <div className="p-6 bg-white rounded-lg shadow-xl">
                <div className="mb-6">
                  <iframe
                    className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/0HiNAOKAF9Y?si=P33OH4AXJY4eoBIQ"
                    title="Video Penceramah"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Informasi Ustadz Abdul Somad
                </h2>
                <p>
                  Ustadz Abdul Somad telah berdakwah selama lebih dari 20 tahun,
                  menjadi salah satu penceramah terkemuka di Indonesia. Beliau
                  menyampaikan pesan-pesan agama Islam dengan penuh semangat dan
                  mendalam, yang mampu memberi pencerahan kepada banyak umat.
                  Beberapa topik yang sering beliau angkat meliputi pentingnya
                  menjaga akhlak mulia, memperkuat ukhuwah Islamiyah, serta
                  memahami prinsip-prinsip keadilan dalam ajaran Islam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <section className="relative p-10 py-16 bg-white dark:bg-white animate-on-scroll">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Kolom Kiri */}
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-black mb-4">
                Hubungi Kami
              </h2>
              <p className="text-black dark:text-black">
                Kami siap menjawab pertanyaan dan kebutuhan Anda. Silakan
                hubungi kami melalui media sosial atau layanan pesan berikut.
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
