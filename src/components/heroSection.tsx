import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  image_url: string;
}

const HeroSection: React.FC = () => {
  const [heroList, setHeroList] = useState<HeroContent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("hero_banners")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setHeroList(data);
    };
    fetchHero();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        heroList.length > 0 ? (prev + 1) % heroList.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroList]);

  const handleStart = (x: number) => (startX.current = x);
  const handleEnd = (x: number) => {
    if (startX.current === null) return;
    const deltaX = startX.current - x;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setCurrentIndex((prev) => (prev + 1) % heroList.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + heroList.length) % heroList.length);
      }
    }
    startX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => handleEnd(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX);

  if (heroList.length === 0) {
    return <div className="text-white text-center mt-10">Memuat Hero...</div>;
  }

  const hero = heroList[currentIndex];

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110 brightness-75"
        style={{
          backgroundImage: `url(${hero.image_url})`,
          backgroundSize: "cover",
        }}
      />

      {/* Overlay gelap transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Konten Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Gambar utama (fokus) */}
        <img
          src={hero.image_url}
          alt={hero.title}
          className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl transition duration-500"
        />

        {/* Teks */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
          {hero.title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mt-2">
          {hero.subtitle}
        </h2>
        {hero.description && (
          <p className="text-lg text-gray-200 max-w-2xl mt-4">
            {hero.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
