import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ImpactSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const cards = [
    {
      title: 'Library & E Lab Builds',
      category: 'INFRASTRUCTURE',
      description: "We don't just donate equipment, we build the rooms to house it. Each LeNoir E Lab is a complete digital learning environment with solar power and governance frameworks.",
      btnText: 'EXPLORE OUR PROJECTS',
      image: 'https://lenoirfoundation.vercel.app/assets/hero_background_1781532776444-BODnaYja.jpg',
    },
    {
      title: 'Digital Champions',
      category: 'CAPACITY BUILDING',
      description: 'Technology without training is just hardware. Our Digital Champions programme embeds local educators with intensive digital literacy training and ongoing mentorship.',
      btnText: 'MEET THE CHAMPIONS',
      image: 'https://lenoirfoundation.vercel.app/assets/digital_literacy_1781532795243-Dsex_HqF.jpg',
    },
    {
      title: 'IT Equipment Donations',
      category: 'HARDWARE REDEPLOYMENT',
      description: 'We partner with UK corporations and universities to responsibly collect end of life IT equipment. Laptops are wiped, preloaded with software, and distributed safely.',
      btnText: 'DONATE IT EQUIPMENT',
      image: 'https://lenoirfoundation.vercel.app/assets/coding_for_kids_1781532812034-B28KANh7.jpg',
    },
    {
      title: 'Community Outreach',
      category: 'RURAL ENGAGEMENT',
      description: 'Our team travels directly into remote rural districts, delivering workshops, setting up mobile typing stations, and engaging local chiefs and parents for lasting impact.',
      btnText: 'COMMUNITY OUTREACH',
      image: 'https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg',
    },
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#faf8f5] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title - Matches the attached layout */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#f15a24] block mb-3">
            OUR GALLERY & PROJECTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111c24] tracking-tight">
            Showing Real Results & Telling Compelling Stories
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal">
            We do not just deliver technology, we build sustainable systems that empower communities for the future.
          </p>
        </div>

        {/* Horizontal Gallery Cards Carousel Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {cards.map((card, idx) => {
            const isActive = activeSlide === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => setActiveSlide(idx)}
                className={`group relative bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive ? 'border-[#f15a24] ring-2 ring-[#f15a24]/20' : 'border-slate-200/90'
                }`}
              >
                <div>
                  {/* Photo Frame Window */}
                  <div className="aspect-[16/11] w-full relative overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-2">
                      {card.category}
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-[#111c24] mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-block text-xs font-bold text-[#f15a24] hover:text-orange-700 uppercase tracking-wider transition-colors"
                  >
                    {card.btnText} →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Interactive Pagination Dots - Matches attached image bottom controls */}
        <div className="mt-12 flex justify-center items-center gap-2 select-none">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === idx
                  ? 'w-8 h-2.5 bg-[#111c24]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
