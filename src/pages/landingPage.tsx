import { useEffect } from "react";

import Image from "../assets/images/harep.jpeg";
import SpeakerImage from "../assets/images/ustadz-abdul_220106140902-349.jpg";



const LandingPage: React.FC = () => {
  // SweetAlert ketika user baru memasuki website
  
  

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
      {/* Section Info Penceramah */}
<section className="py-5 bg-gray-200 animate-on-scroll">
  <div className="container mx-auto px-2">
    <h2 className="text-3xl text-center font-bold mb-12">
      Informasi Penceramah Kali Ini
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      
      {/* Foto Penceramah */}
      <div className="flex justify-center">
        <img
          src={SpeakerImage}
          alt="Penceramah"
          className="rounded-lg w-full max-w-md shadow-lg"
        />
      </div>

      {/* Teks Deskripsi */}
      <div className="bg-white p-4 rounded-lg shadow-xl text-justify">
        <h3 className="text-2xl font-bold mb-1">Sekolah Poetra Mandiri</h3>
        <p className="mb-2">
          Sekolah Homeschooling Poetra Mandiri adalah lembaga pendidikan alternatif
          yang berdiri untuk menjawab kebutuhan belajar anak-anak dengan pendekatan yang
          lebih personal, fleksibel, dan menyeluruh. Kami melayani peserta didik dari
          tingkat SD, SMP, hingga SMA, termasuk anak-anak berkebutuhan khusus atau disabilitas.
        </p>
        <p>
          Melalui program pembelajaran yang disesuaikan dengan potensi masing-masing siswa/i,
          sekolah ini menciptakan suasana belajar yang nyaman dan menyenangkan. Didukung oleh
          tenaga pendidik profesional serta kurikulum inovatif, Homeschooling Poetra Mandiri
          berkomitmen membentuk karakter generasi yang mandiri dan mampu bersaing secara global.
        </p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5318670904594!2d106.76465207499344!3d-6.58060459341292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4f906e40827%3A0x6b93a4462670547c!2sSMK%20Infokom%20Kota%20Bogor!5e0!3m2!1sid!2sid!4v1739088231598!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps SMK INFOKOM BOGOR"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
