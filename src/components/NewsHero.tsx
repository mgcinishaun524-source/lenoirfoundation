import React from 'react';
import { motion } from 'motion/react';

export default function NewsHero() {
  const heroImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop';

  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={heroImage}
          alt="Our Latest News and Blogs LeNoir Foundation"
          className="w-full h-full object-cover object-center scale-100 opacity-65 brightness-80"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width={1600}
          height={900}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40" />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 sm:py-16">
        
        {/* Main Header exactly matching the visual layout of the screenshot */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl mx-auto drop-shadow-sm"
        >
          Field Stories, Press &
          <span className="block text-[#f15a24]">Project Updates</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto font-sans leading-relaxed font-normal"
        >
          Real dispatches from our solar powered hubs, charity compliance reports, new tech launch announcements, and partner spotlights from Uganda and Zimbabwe.
        </motion.p>
      </div>
      
    </section>
  );
}
