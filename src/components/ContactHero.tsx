import React from 'react';
import { motion } from 'motion/react';

import communityImg from '../assets/images/community_outreach_1781532828060.jpg';

interface ContactHeroProps {
  onDonateClick?: () => void;
}

export default function ContactHero({ onDonateClick }: ContactHeroProps) {

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28">
      
      {/* Background Graphic mural photo with overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={communityImg}
          alt="Empowering Digital Futures for Marginalised Communities"
          className="w-full h-full object-cover object-center opacity-60 brightness-80 scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Dark gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      {/* Narrative content block exactly modeled from layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 sm:py-20 flex flex-col items-center">
        
        {/* Large Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5.5xl md:text-7xl font-sans font-black tracking-normal leading-[1.1] max-w-5xl mx-auto drop-shadow-md text-white"
        >
          Partner, Volunteer or
          <span className="block text-[#f15a24]">Talk With Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 sm:mt-8 text-sm sm:text-xl text-slate-200/90 font-sans leading-relaxed max-w-3xl mx-auto font-normal"
        >
          Schools in Africa applying for a tech hub, companies donating laptops or solar hardware, or grant makers wanting to earmark funds message our programs team below within 48 hours.
        </motion.p>

        {/* Centered Orange Action CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <button
            onClick={onDonateClick}
            className="px-8 sm:px-10 py-4 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-sans font-extrabold text-sm sm:text-base tracking-wide rounded-2xl shadow-xl shadow-orange-600/20 hover:shadow-orange-600/35 transition-all duration-300 transform cursor-pointer"
          >
            Donate Now
          </button>
        </motion.div>

      </div>
      
    </section>
  );
}
