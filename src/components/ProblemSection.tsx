import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

import typingImg from '../assets/images/typing_hand_visual_1781532845930.jpg';
import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';
import codingImg from '../assets/images/coding_for_kids_1781532812034.jpg';

export default function ProblemSection() {
  const cards = [
    {
      title: 'Infrastructure Barrier',
      subtitle: '89% lack a single computer',
      description:
        'In many rural schools across Uganda and Zimbabwe, up to 70 students share a single textbook. Electricity is spotty, internet is non-existent, and children study computer theory on chalkboards without touching a key.',
      stat: '89% Deficit',
      image: typingImg,
      alt: 'Student studying computer keyboard',
    },
    {
      title: 'Gender Inequality',
      subtitle: '40% lower digital access for girls',
      description:
        'Cultural barriers and economic hardship force young women out of digital spaces first. When families must choose who receives educational resources, girls are far less likely to gain technology training.',
      stat: '40% Equity Gap',
      image: digitalLiteracyImg,
      alt: 'Young student observing laptop screen',
    },
    {
      title: 'Economic Exclusion',
      subtitle: '3.5x higher career lock out',
      description:
        'The modern global economy demands digital literacy for 90% of entry level jobs. Without basic typing, office software, and internet research skills, youth are permanently locked out of modern employment.',
      stat: '3.5x Career Lock',
      image: codingImg,
      alt: 'Children engaged in digital classroom learning',
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111c24] font-extrabold tracking-tight leading-[1.1]"
          >
            Understanding the Digital Divide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Behind every statistic is a child eager to learn. The digital divide isn't just about missed technology it's about missing dreams and silenced potential.
          </motion.p>
        </div>

        {/* 3 Package-Style White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="group relative overflow-hidden bg-[#faf8f5] p-6 sm:p-8 rounded-[1.25rem] flex flex-col justify-between shadow-xs border border-slate-200 hover:border-orange-500/40 hover:shadow-[0_20px_50px_-25px_rgba(241,90,36,0.25)] transition-all duration-300"
            >
              {/* LeNoir Logo watermark appearing on hover with high opacity */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-lg shadow-sm border border-slate-100">
                <img
                  src="https://www.lenoirfoundation.com/lenoir-logo.png"
                  alt="LeNoir Foundation Logo"
                  className="h-7 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={73}
                />
              </div>

              <div>
                {/* Top Rectangular Image */}
                <div className="w-full aspect-4/3 overflow-hidden bg-slate-100 mb-6">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover grayscale-15 hover:grayscale-0 hover:scale-103 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#111c24] text-center mb-2 leading-snug">
                  {card.title}
                </h3>
                
                <span className="block text-center font-sans text-xs font-bold text-[#f15a24] mb-4 uppercase tracking-wider">
                  {card.subtitle}
                </span>

                <p className="font-sans text-sm text-slate-600 text-center leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center">
                <span className="font-sans text-xs font-bold text-[#111c24] tracking-wide">
                  {card.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Outline Button Matching Design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#promise"
            className="px-5 py-2.5 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Learn How We Bridge This Gap
            <ArrowRight size={16} className="stroke-[2.5]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

