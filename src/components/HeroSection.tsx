import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Only import first image — rest are lazy loaded at runtime
import img1 from '../assets/images/Website images/IMG_0393.jpg';

const slideSrcs = [
  img1,
  new URL('../assets/images/Website images/IMG_0413.jpg', import.meta.url).href,
  new URL('../assets/images/Website images/IMG_0351.jpg', import.meta.url).href,
  new URL('../assets/images/Website images/IMG_0421.jpg', import.meta.url).href,
  new URL('../assets/images/Website images/Copy of IMG_0356.jpg', import.meta.url).href,
];

interface HeroSectionProps {
  onDonateClick?: () => void;
}

export default function HeroSection({ onDonateClick }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([true, false, false, false, false]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preload next slide only after first paint
  useEffect(() => {
    const preload = (idx: number) => {
      const img = new Image();
      img.src = slideSrcs[idx];
      img.onload = () => setLoaded(prev => { const n = [...prev]; n[idx] = true; return n; });
    };
    // Preload slide 2 after 1s, rest progressively
    const t1 = setTimeout(() => preload(1), 1000);
    const t2 = setTimeout(() => preload(2), 2000);
    const t3 = setTimeout(() => preload(3), 3000);
    const t4 = setTimeout(() => preload(4), 4000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slideSrcs.length;
        return loaded[next] ? next : prev;
      });
    }, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [loaded]);

  return (
    <header id="home" className="relative bg-[#f5f4f0] pt-28 sm:pt-32 pb-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 w-full text-center">

        {/* Text block */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111c24] leading-[1.1] max-w-3xl mx-auto"
          >
            LeNoir Foundation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-sans leading-relaxed font-normal"
          >
            We uplift the most marginalised communities through digital literacy,
            library resources, and improved internet accessibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <button
              onClick={onDonateClick}
              className="px-8 py-3 bg-[#f15a24] hover:bg-orange-600 active:scale-95 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              Give
            </button>
            <button
              onClick={onDonateClick}
              className="px-8 py-3 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/40 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all cursor-pointer"
            >
              Build
            </button>
          </motion.div>
        </div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="px-4 sm:px-6 lg:px-8 pb-16"
        >
          <div className="relative max-w-4xl mx-auto overflow-hidden aspect-[16/9] rounded-2xl bg-slate-200 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slideSrcs[current]}
                alt="LeNoir Foundation community"
                width={1400}
                height={788}
                fetchPriority={current === 0 ? 'high' : 'low'}
                decoding={current === 0 ? 'sync' : 'async'}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
              {slideSrcs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'bg-white w-6' : 'bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}

interface HeroSectionProps {
  onDonateClick?: () => void;
}

export default function HeroSection({ onDonateClick }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="home"
      className="relative bg-[#f5f4f0] pt-28 sm:pt-32 pb-0 overflow-hidden"
    >
      {/* Subtle background texture dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 w-full text-center">

        {/* Text block — constrained width */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111c24] leading-[1.1] max-w-3xl mx-auto"
          >
            LeNoir Foundation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-sans leading-relaxed font-normal"
          >
            We uplift the most marginalised communities through digital literacy,
            library resources, and improved internet accessibility.
          </motion.p>

          {/* CTA Buttons — matching site style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <button
              onClick={onDonateClick}
              className="px-8 py-3 bg-[#f15a24] hover:bg-orange-600 active:scale-95 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              Give
            </button>
            <button
              onClick={onDonateClick}
              className="px-8 py-3 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/40 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all cursor-pointer"
            >
              Build
            </button>
          </motion.div>
        </div>

        {/* Centered image slideshow — reasonable width, centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="px-4 sm:px-6 lg:px-8 pb-16"
        >
          <div className="relative max-w-4xl mx-auto overflow-hidden aspect-[16/9] rounded-2xl bg-slate-100 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current]}
                alt="LeNoir Foundation community"
                loading="eager"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Slide dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'bg-white w-6' : 'bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
