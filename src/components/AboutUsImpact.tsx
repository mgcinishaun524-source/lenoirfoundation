import React from 'react';
import { motion } from 'motion/react';

export default function AboutUsImpact() {
  const impactCards = [
    {
      id: 'ui-1',
      author: 'James Mawaka',
      title: 'Equipping School Libraries',
      description: "We build and outfit sustainable technology rooms in school libraries across Uganda and Zimbabwe, providing durable, energy-efficient computer labs, responsive tactile keyboards, and offline-ready servers to eliminate high connectivity costs.",
      image: 'https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg'
    },
    {
      id: 'ui-2',
      author: 'James Mawaka',
      title: 'TypeSpark Typing Mastery',
      description: "By implementing the structural, gamified Byte Back typing lessons, we help children transition from absolute keyboard beginners to fluid, blind touch typists, opening the primary window of creative computer capability.",
      image: 'https://lenoirfoundation.vercel.app/assets/digital_literacy_1781532795243-Dsex_HqF.jpg'
    },
    {
      id: 'ui-3',
      author: 'James Mawaka',
      title: 'Coding the Future',
      description: "Once baseline speed and touch-typing layouts are secured, children progress directly to coding workshops, local-hosted HTML simulations, and technical design tasks, teaching them to craft their own digital solutions.",
      image: 'https://lenoirfoundation.vercel.app/assets/coding_for_kids_1781532812034-B28KANh7.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#faf8f5] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Main Title mimicking screenshot */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#112335] tracking-tight">
            Our Impact
          </h2>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {impactCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full group"
            >
              
              {/* Picture Frame with overlapping top-right tag exactly as illustrated */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#1a3854] border border-slate-100 shadow-sm transition-all duration-300">
                {/* LeNoir Logo watermark appearing on hover with high opacity */}
                <div className="absolute top-3 left-3 z-30 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-lg shadow-sm border border-slate-100">
                  <img
                    src="https://www.lenoirfoundation.com/lenoir-logo.png"
                    alt="LeNoir Foundation Logo"
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Visual Image inside frame with blue slate shade overlay */}
                <div className="absolute inset-0 bg-[#0f243f]/30 z-10 group-hover:bg-transparent transition-colors duration-400" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlapped Light Grey Rectangular Author Button Badge */}
                <div className="absolute top-0 right-0 z-20 select-none">
                  <div className="bg-[#e2e2e2] text-slate-800 font-sans text-xs sm:text-sm font-semibold px-6 py-2 rounded-bl-xl border-l border-b border-white shadow-xs">
                    {card.author}
                  </div>
                </div>

              </div>

              {/* Title Left-Aligned with thin elegant styling */}
              <h3 className="mt-6 font-display text-2xl font-extrabold text-[#112335] tracking-tight hover:text-[#f15a24] transition-colors inline-block self-start border-b-2 border-transparent hover:border-[#f15a24] pb-0.5">
                {card.title}
              </h3>

              {/* Narratives copy */}
              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed font-normal">
                {card.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
