import React from 'react';
import { motion } from 'motion/react';

const heroImg = 'https://static.wixstatic.com/media/aea8cd_6ddd676224a6447daf129b0503d0bbca~mv2.jpg';

interface HeroSectionProps {
  onDonateClick?: () => void;
}

export default function HeroSection({ onDonateClick }: HeroSectionProps) {

  const handleDonateClick = () => {
    if (onDonateClick) {
      onDonateClick();
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Image with Zoom and Elegant Muted Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroImg}
          alt="LeNoir Foundation Library children community"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.8)' }}
          referrerPolicy="no-referrer"
        />
        {/* Transparent dark vignette as seen in screenshot */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>

      {/* Main Hero Content Frame precisely aligned to screenshot */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 sm:py-20">
        
        {/* Principal Heading precisely as seen in screenshot */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto"
        >
          Empowering Digital Futures for Marginalised Communities
        </motion.h1>

        {/* Secondary Subtitle precisely as seen in screenshot */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-sans leading-relaxed font-normal"
        >
          We uplift the most marginalised communities through digital literacy, library resources, and improved internet accessibility.
        </motion.p>

        {/* Action Button: Single rounded custom orange Donate Now button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={handleDonateClick}
            className="px-10 py-4 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Donate Now
          </button>
        </motion.div>
      </div>
    </header>
  );
}
