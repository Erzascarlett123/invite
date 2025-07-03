import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Teks dan Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Kami senang mendengar dari Anda. Jika ada pertanyaan, saran, atau ingin
            bekerja sama, silakan hubungi kami melalui platform berikut:
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaInstagram className="text-pink-500 text-2xl" />
              <a
                href="https://www.instagram.com/poetramandiri.sch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:underline"
              >
                @poetramandiri.sch
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <a
                href="mailto:poetramandiri.sch@gmail.com"
                className="text-gray-700 dark:text-gray-200 hover:underline"
              >
                poetramandiri.sch@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:underline"
              >
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Kanan: Peta atau Ilustrasi */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5318670904594!2d106.76465207499344!3d-6.58060459341292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4f906e40827%3A0x6b93a4462670547c!2sSMK%20Infokom%20Kota%20Bogor!5e0!3m2!1sid!2sid!4v1739088231598!5m2!1sid!2sid"
            className="w-full h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lokasi Sekolah"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
