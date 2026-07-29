import React from 'react';
import { motion } from 'motion/react';

import communityImg from '../assets/images/community_outreach_1781532828060.jpg';
import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';
import codingImg from '../assets/images/coding_for_kids_1781532812034.jpg';

export default function AboutUsBento() {
  const images = {
    leftBlock: communityImg,
    topRightBlock: digitalLiteracyImg,
    bottomRightBlock: codingImg,
  };

  return (
    <section className="py-12 sm:py-16 bg-[#faf8f5] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid layout matching the screenshot architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto h-[550px] lg:h-[600px]">
          
          {/* Left Column: Big square / vertical visual block (7/12 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-full relative rounded-3xl overflow-hidden group border border-slate-100 shadow-sm"
          >
            {/* LeNoir Logo watermark appearing on hover with high opacity */}
            <div className="absolute top-6 right-6 z-30 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-2 rounded-xl shadow-sm border border-slate-100">
              <img
                src="https://www.lenoirfoundation.com/lenoir-logo.png"
                alt="LeNoir Foundation Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Dark Brand Slate Overlay with low opacity, multiplying on hover */}
            <div className="absolute inset-0 bg-[#0f243f]/60 group-hover:bg-[#0f243f]/75 transition-all duration-500 z-10" />
            
            <img
              src={images.leftBlock}
              alt="Community outreach, LeNoir volunteers with students"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Text Overlay contents */}
            <div className="absolute inset-0 z-20 p-8 sm:p-10 flex flex-col justify-end text-white">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#f15a24] uppercase font-sans mb-3">
                Our Primary Mission
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3.5xl tracking-tight leading-tight">
                Empowering Underprivileged Communities Through Tactile Learning
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed max-w-xl">
                We design and integrate physical educational resource hubs directly inside towns where digital access remains an steep socioeconomic barrier.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Two horizontal rectangular blocks (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            {/* Top Right block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[calc(50%-12px)] relative rounded-3xl overflow-hidden group border border-slate-100 shadow-sm"
            >
              {/* LeNoir Logo watermark appearing on hover with high opacity */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-lg shadow-sm border border-slate-100">
                <img
                  src="https://www.lenoirfoundation.com/lenoir-logo.png"
                  alt="LeNoir Foundation Logo"
                  className="h-6 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute inset-0 bg-[#0f243f]/65 group-hover:bg-[#0f243f]/80 transition-all duration-500 z-10" />
              
              <img
                src={images.topRightBlock}
                alt="Digital literacy programs"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#f15a24] uppercase font-sans mb-2">
                  Interactive Curriculums
                </span>
                <h4 className="font-display font-extrabold text-lg sm:text-xl tracking-tight leading-snug">
                  Tailored Digital Literacy Labs
                </h4>
              </div>
            </motion.div>

            {/* Bottom Right block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-[calc(50%-12px)] relative rounded-3xl overflow-hidden group border border-slate-100 shadow-sm"
            >
              {/* LeNoir Logo watermark appearing on hover with high opacity */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-lg shadow-sm border border-slate-100">
                <img
                  src="https://www.lenoirfoundation.com/lenoir-logo.png"
                  alt="LeNoir Foundation Logo"
                  className="h-6 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute inset-0 bg-[#0f243f]/65 group-hover:bg-[#0f243f]/80 transition-all duration-500 z-10" />
              
              <img
                src={images.bottomRightBlock}
                alt="Kids learning to code offline"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#f15a24] uppercase font-sans mb-2">
                  Offline Operations
                </span>
                <h4 className="font-display font-extrabold text-lg sm:text-xl tracking-tight leading-snug">
                  TypeSpark Local Simulations
                </h4>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
