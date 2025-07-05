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

  // Fetch data
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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        heroList.length > 0 ? (prev + 1) % heroList.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroList]);

  // Handle drag start (mouse & touch)
  const handleStart = (x: number) => {
    startX.current = x;
  };

  const handleEnd = (x: number) => {
    if (startX.current === null) return;
    const deltaX = startX.current - x;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // next
        setCurrentIndex((prev) =>
          (prev + 1) % heroList.length
        );
      } else {
        // prev
        setCurrentIndex((prev) =>
          (prev - 1 + heroList.length) % heroList.length
        );
      }
    }

    startX.current = null;
  };

  // Mouse & touch events
  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => handleEnd(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX);

  if (heroList.length === 0)
    return <div className="text-white text-center mt-10">Memuat Hero...</div>;

  const hero = heroList[currentIndex];

  return (
    <div
      className="relative text-white transition-all duration-500 min-h-screen bg-cover bg-center select-none"
      style={{
        backgroundImage: `url(${hero.image_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Teks */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 select-none">
          {hero.title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 select-none">
          {hero.subtitle}
        </h2>
        {hero.description && (
          <p className="text-lg text-gray-200 max-w-2xl select-none">
            {hero.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
