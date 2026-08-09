import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export default function FlagshipSection() {
  const keyboardImage = 'https://lenoirfoundation.vercel.app/assets/typing_hand_visual_1781532845930-B3knwWEJ.jpg';

  const firstColumnFeatures = [
    '7 African Languages',
    '7 Stages',
    '100% Free',
  ];

  const secondColumnFeatures = [
    '24 lessons',
    'Achievements & Badges',
    'Fully Offline',
  ];

  return (
    <section id="flagship" className="py-20 sm:py-24 bg-[#faf8f5] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Main Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111c24] tracking-tight">
            Our Flagship Initiative
          </h2>
        </div>

        {/* Content Columns: Left (Keyboard Sketch Image), Right (Copy and Features Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Hand-drawn Colorful Keyboard Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md w-full select-none"
            >
              <img
                src={keyboardImage}
                alt="TypeSpark Color Coded Tactile Keyboard Tutor Chart"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-sm"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </motion.div>
          </div>

          {/* Right Column: Descriptions and Stats Precisely Arranged */}
          <div className="lg:col-span-7">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#111c24] leading-snug">
              Meet TypeSpark: Free Typing Lessons for Every Child
            </h3>

            <p className="mt-6 text-sm sm:text-base text-slate-500 font-sans leading-relaxed font-normal">
              Most children in the communities we serve have never touched a keyboard. Before they can learn to code, research, or create, they need to learn the most fundamental digital skill of all: typing. TypeSpark is our answer: A free, offline first typing tutor built specifically for children aged 6 to 16. It uses the Byte Back methodology, the same structured approach used in schools across Africa and the UK, to guide learners from their first keystrokes on the home row to full keyboard mastery across 24 lessons and 7 stages.
            </p>

            {/* UK Kids Coding Club callout */}
            <div className="mt-8 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#f15a24] mb-2">UK Programme · Kids Coding Club</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our UK coding club has seen remarkable success, offering young enthusiasts a gateway into the digital world. Over six weeks, eighteen students discovered the transformative potential of coding, developing confidence and analytical thinking alongside technical skills. We're now expanding the club to Zimbabwe, where young participants will create their very own computer games.
              </p>
            </div>

            {/* Orange Visit Button precisely aligned */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://typespark.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f15a24] hover:bg-[#e04f1c] text-white font-bold text-sm sm:text-base rounded-xl active:scale-95 transition-all shadow-md shadow-orange-500/10 cursor-pointer"
              >
                <span>Visit TypeSpark app</span>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#f15a24]">
                  <ArrowRight size={12} className="stroke-[3]" />
                </div>
              </a>
            </div>

            {/* Features list precisely mimicking screenshot */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h4 className="font-sans text-sm sm:text-base font-extrabold text-[#111c24] mb-6">
                TypeSpark Africa Features
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                
                {/* Column 1 of Features */}
                <div className="space-y-4">
                  {firstColumnFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0">
                        <Check size={12} className="stroke-[3.5]" />
                      </div>
                      <span className="font-sans text-sm font-semibold text-slate-600">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 of Features */}
                <div className="space-y-4">
                  {secondColumnFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0">
                        <Check size={12} className="stroke-[3.5]" />
                      </div>
                      <span className="font-sans text-sm font-semibold text-slate-600">{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
