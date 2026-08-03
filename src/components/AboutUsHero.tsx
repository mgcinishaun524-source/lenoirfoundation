import React from 'react';
import { motion } from 'motion/react';

import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';

interface AboutUsHeroProps {
  onDonateClick: () => void;
}

export default function AboutUsHero({ onDonateClick }: AboutUsHeroProps) {

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28">
      
      {/* Background Image with Dark Vignette Overlay to match screenshot of About-Hero */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={digitalLiteracyImg}
          alt="About Us LeNoir Foundation Library children community"
          className="w-full h-full object-cover object-center scale-100 opacity-65 brightness-80 transition-all"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {/* Transparent dark gradient and overlay as pictured */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
      </div>

      {/* Main Hero Content Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 md:py-24">
        
        {/* Principal Heading precisely as matched to the screenshot */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-xs"
        >
          Who We Are & Why We
          <span className="block text-[#f15a24]">Keep Building</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto font-sans leading-relaxed font-normal drop-shadow-xs"
        >
          LeNoir Foundation is a UK registered charity built by educators, engineers, and community leaders united to turn unused technology into solar powered digital labs that last for generations.
        </motion.p>

        {/* Action Button: Single rounded custom orange Donate Now button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={onDonateClick}
            className="px-10 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-orange-500/10 transition-all cursor-pointer"
          >
            Donate Now
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
