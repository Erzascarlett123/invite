// File: src/components/GaleriSlider.tsx

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { supabase } from "../lib/supabase";

interface GaleriItem {
  id: string; // UUID
  judul: string;
  deskripsi: string;
  gambar_url: string; // Sudah berupa PUBLIC URL dari Supabase
  kategori: string;
  created_at: string;
}

export default function GaleriSlider() {
  const [galeri, setGaleri] = useState<GaleriItem[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    drag: true,
    created(s) {
      setInterval(() => s.next(), 4000); // Autoplay
    },
  });

  useEffect(() => {
    const fetchGaleri = async () => {
      const { data, error } = await supabase
        .from("galeri")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal memuat galeri:", error.message);
        return;
      }

      setGaleri(data);
    };

    fetchGaleri();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-2xl border border-2 border-gray-600">

      {galeri.length === 0 ? (
        <p className="text-center text-gray-600">Sedang memuat gambar...</p>
      ) : (
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {galeri.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide flex flex-col items-center p-4"
            >
              <img
                src={item.gambar_url}
                alt={item.judul || "Galeri"}
                className="object-cover w-full h-64 md:h-80 lg:h-[400px] rounded-lg transition-transform hover:scale-105 duration-300"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold text-blue-700">{item.judul}</h3>
                <p className="text-sm text-gray-600">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
