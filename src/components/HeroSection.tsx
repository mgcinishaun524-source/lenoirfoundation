import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';

import img1 from '../assets/images/Website images/IMG_0393.jpg';
import img2 from '../assets/images/Website images/IMG_0413.jpg';
import img3 from '../assets/images/Website images/IMG_0351.jpg';
import img4 from '../assets/images/Website images/IMG_0421.jpg';
import img5 from '../assets/images/Website images/Copy of IMG_0356.jpg';

const slides = [img1, img2, img3, img4, img5];

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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <button
              onClick={onDonateClick}
              className="px-8 py-3.5 bg-[#e8d44d] hover:bg-[#dfc93a] active:scale-95 text-[#111c24] font-bold text-sm rounded-full shadow-sm transition-all cursor-pointer"
            >
              Give
            </button>
            <button
              onClick={onDonateClick}
              className="px-8 py-3.5 bg-[#e8d44d] hover:bg-[#dfc93a] active:scale-95 text-[#111c24] font-bold text-sm rounded-full shadow-sm transition-all cursor-pointer"
            >
              Build
            </button>
          </motion.div>
        </div>

        {/* Full-width image slideshow — no side padding, no rounded corners on sides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="w-full relative"
        >
          <div className="relative w-full overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current]}
                alt="LeNoir Foundation community"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle bottom fade into page */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5f4f0]/60 to-transparent pointer-events-none" />

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
