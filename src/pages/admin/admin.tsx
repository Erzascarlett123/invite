export default function AdminHome() {
    const navigateTo = (level: string) => {
      alert(`Kamu memilih admin untuk jenjang: ${level}`);
      // Bisa diarahkan ke halaman khusus: navigate(`/admin/${level.toLowerCase()}`);
    };
  
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Pilih Admin Jenjang</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {["SD", "SMP", "SMA"].map((level) => (
            <button
              key={level}
              onClick={() => navigateTo(level)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition"
            >
              Admin {level}
            </button>
          ))}
        </div>
      </div>
    );
  }
  