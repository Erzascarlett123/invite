import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nama, email, pesan } = form;

    if (!nama || !email || !pesan) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Semua kolom wajib diisi!",
      });
      return;
    }

    // Tujuan email
    const to = "poetramandiri90@gmail.com";

    // Gunakan Gmail Compose URL
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
      `Pesan dari ${nama}`
    )}&body=${encodeURIComponent(
      `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`
    )}`;

    Swal.fire({
      title: "Buka Gmail...",
      text: "Anda akan diarahkan ke Gmail untuk mengirim email.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      window.open(gmailComposeURL, "_blank");
      setForm({ nama: "", email: "", pesan: "" });
    });
  };

  return (
    <section
      className="min-h-screen px-6 py-16
      bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-gray-200
      transition-colors duration-700 ease-in-out"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Formulir Kontak */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-lime-300 dark:text-cyan-400">
            Hubungi Kami
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Nama</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Pesan</label>
              <textarea
                name="pesan"
                rows={5}
                value={form.pesan}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Informasi Kontak dan Maps */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 dark:text-yellow-400">
            Informasi Kontak
          </h3>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl mt-1 text-blue-400" />
            <p>RT.03/RW.01, Paledang, Bogor Tengah, Kota Bogor, 16122</p>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-xl mt-1 text-red-400" />
            <a
              href="mailto:poetramandiri90@gmail.com"
              className="hover:underline"
            >
              poetramandiri90@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-xl mt-1 text-green-400" />
            <a
              href="https://wa.me/6287717395496"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +62 877 1739 5496
            </a>
          </div>

          <div className="flex items-start gap-4">
            <FaInstagram className="text-xl mt-1 text-pink-400" />
            <a
              href="https://www.instagram.com/poetramandiriofficial_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @poetramandiriofficial_
            </a>
          </div>

          <div className="mt-8">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.3005664896721!2d106.79087245268654!3d-6.596777951798851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f3f739a717%3A0x48ec34a9e0b764fc!2sTaman%20Topi%20Square!5e1!3m2!1sid!2sid!4v1751475406653!5m2!1sid!2sid"
              loading="lazy"
              title="Lokasi Sekolah"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
