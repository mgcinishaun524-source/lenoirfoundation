import React from 'react';
import { motion } from 'motion/react';

export default function AboutUsStory() {
  return (
    <section className="py-20 bg-[#faf8f5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title: Center aligned blue-black */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#112335] tracking-tight">
            About Us
          </h2>
        </div>

        {/* Story Text block: custom tapered container mimicking the screenshot */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-12">
          
          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#5a6a7c] font-sans text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-3xl mx-auto"
            style={{ textJustify: 'inter-word' }}
          >
            LeNoir Foundation was established on the fundamental belief that digital literacy as a tool of modern creation is a human right, not a luxury. In a rapidly evolving world, children in marginalized communities are frequently left behind due to a lack of core equipment and structured guidance. We focus on bridging this gap directly inside classrooms, school libraries, and dedicated community labs.
          </motion.p>

          {/* Spacer to separate sections as in the layout */}
          <div className="h-8" />

          {/* Paragraph 2 - tapered slightly more as pictured */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5a6a7c] font-sans text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto"
          >
            By designing offline first tools like TypeSpark and establishing robust local learning hubs in Uganda, Zimbabwe, and community centers in Luton (UK), we are empowering thousands of children. Our students transition smoothly from their very first tactile keystrokes to building independent futures as programmers, designers, and digital leaders.
          </motion.p>

        </div>

      </div>
    </section>
  );
}
