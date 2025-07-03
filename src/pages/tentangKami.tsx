const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen p-8 pt-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center drop-shadow-lg">
          Tentang Kami
        </h1>
        <p className="text-gray-300 text-center mb-10">
          Sekilas informasi mengenai visi, misi, dan tujuan Sekolah Homeschooling Poetra Mandiri.
        </p>

        {/* Deskripsi Singkat */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Sekolah Poetra Mandiri</h2>
          <p className="text-gray-300 leading-relaxed">
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
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Visi Sekolah</h2>
          <p className="text-gray-300 leading-relaxed">
            Menjadi pusat pendidikan (sekolah) unggulan dalam membentuk generasi cerdas,
            berintegritas, dan berkarakter melalui pembelajaran inklusif dan inovatif.
          </p>
        </section>

        {/* Misi */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Misi Sekolah</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Menyelenggarakan proses pembelajaran yang berpusat pada peserta didik dengan pendekatan aktif, kreatif, dan adaptif terhadap kebutuhan individual.</li>
            <li>Menanamkan nilai-nilai integritas, kejujuran, dan tanggung jawab melalui pembiasaan sikap baik dan budaya sekolah.</li>
            <li>Mendorong tumbuhnya karakter siswa yang positif dan mandiri.</li>
            <li>Mengembangkan kualitas pendidik dan tenaga kependidikan agar mampu menjadi teladan dalam penguatan karakter serta pembelajaran inovatif.</li>
          </ul>
        </section>

        {/* Tujuan */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Tujuan Sekolah</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Menghasilkan lulusan yang cerdas secara intelektual, emosional, sosial, dan spiritual serta memiliki integritas dalam berpikir dan bertindak.</li>
            <li>Mewujudkan proses pembelajaran yang menyenangkan, membangun partisipasi aktif, dan menumbuhkan sikap percaya diri serta tanggung jawab siswa.</li>
            <li>Meningkatkan kualitas profesionalisme guru dalam merancang dan melaksanakan pembelajaran inovatif.</li>
            <li>Menjadi lembaga pendidikan yang konsisten dalam mengintegrasikan karakter, integritas, dan kecerdasan dalam setiap aspek pembelajaran.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
