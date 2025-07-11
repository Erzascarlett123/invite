const About = () => {
  return (
    <div className="
      min-h-screen pt-28 px-4 sm:px-6 lg:px-8
      bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-gray-200
      transition-colors duration-700 ease-in-out
    ">
      <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-black/10 ring-1 ring-white/10 dark:ring-gray-700 transition-all duration-700">
        <h1 className="text-4xl font-bold text-center mb-6 text-lime-300 dark:text-cyan-400 drop-shadow-lg transition-colors duration-500">
          Tentang Kami
        </h1>
        <p className="text-center text-emerald-100 dark:text-gray-300 mb-10">
          Sekilas informasi mengenai visi, misi, dan tujuan Sekolah Homeschooling Poetra Mandiri.
        </p>

        {/* Sekolah */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-300 dark:text-yellow-400 transition-colors">
            Sekolah Poetra Mandiri
          </h2>
          <p className="leading-relaxed text-emerald-100 dark:text-gray-300">
            Sekolah Homeschooling Poetra Mandiri adalah lembaga pendidikan alternatif
            yang berdiri untuk menjawab kebutuhan belajar anak-anak dengan pendekatan yang lebih
            personal, fleksibel, dan menyeluruh. Kami melayani peserta didik dari tingkat SD, SMP,
            hingga SMA, termasuk anak-anak berkebutuhan khusus atau disabilitas.
            <br /><br />
            Melalui program pembelajaran yang disesuaikan dengan potensi masing-masing siswa/i,
            sekolah ini menciptakan suasana belajar yang nyaman dan menyenangkan. Didukung oleh tenaga
            pendidik profesional serta kurikulum inovatif, Homeschooling Poetra Mandiri berkomitmen
            membentuk karakter generasi yang mandiri dan mampu bersaing secara global.
          </p>
        </section>

        {/* Visi */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-300 dark:text-yellow-400">
            Visi Sekolah
          </h2>
          <p className="leading-relaxed text-emerald-100 dark:text-gray-300">
            Menjadi pusat pendidikan (sekolah) unggulan dalam membentuk generasi cerdas,
            berintegritas, dan berkarakter melalui pembelajaran inklusif dan inovatif.
          </p>
        </section>

        {/* Misi */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-yellow-300 dark:text-yellow-400">
            Misi Sekolah
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-100 dark:text-gray-300">
            <li>
              Menyelenggarakan proses pembelajaran yang berpusat pada peserta didik dengan pendekatan aktif,
              kreatif, dan adaptif terhadap kebutuhan individual.
            </li>
            <li>
              Menanamkan nilai-nilai integritas, kejujuran, dan tanggung jawab melalui pembiasaan sikap baik
              dan budaya sekolah.
            </li>
            <li>
              Mendorong tumbuhnya karakter siswa yang positif dan mandiri.
            </li>
            <li>
              Mengembangkan kualitas pendidik dan tenaga kependidikan agar mampu menjadi teladan dalam penguatan
              karakter serta pembelajaran inovatif.
            </li>
          </ul>
        </section>
      </div>
      <div className="p-4"></div>
    </div>
  );
};

export default About;
