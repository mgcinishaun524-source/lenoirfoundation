import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import img1 from '../assets/images/Website images/IMG_0393.jpg';
import img2 from '../assets/images/Website images/IMG_0413.jpg';
import img3 from '../assets/images/Website images/IMG_0351.jpg';
import img4 from '../assets/images/Website images/IMG_0421.jpg';
import img5 from '../assets/images/Website images/Copy of IMG_0356.jpg';

const slideSrcs = [img1, img2, img3, img4, img5];

interface HeroSectionProps {
  onDonateClick?: () => void;
}

export default function HeroSection({ onDonateClick }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slideSrcs.length);
    }, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <header id="home" className="relative bg-[#f5f4f0] pt-28 sm:pt-32 pb-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
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
                loading={current === 0 ? 'eager' : 'lazy'}
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
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
