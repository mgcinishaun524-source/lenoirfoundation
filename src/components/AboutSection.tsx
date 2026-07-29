import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onReadMoreClick?: () => void;
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = '', duration = 2.2 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth exponential ease-out curve
      onUpdate(latest) {
        setDisplayValue(Math.round(latest).toLocaleString('en-US'));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0.2, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export default function AboutSection({ onReadMoreClick }: AboutSectionProps) {
  return (
    <section id="about" className="pt-20 sm:pt-28 pb-28 sm:pb-36 bg-[#faf8f5] overflow-hidden scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Introductory Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Main Headline */}
          <h2 className="font-sans text-4xl sm:text-5xl text-[#112335] font-extrabold tracking-tight mb-8">
            About Us
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6 text-[#5f738a] text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto text-center">
            <p className="leading-relaxed">
              The digital divide is not just a technology gap. It is an opportunity gap. Right now, in<br />
              classrooms across Uganda and Zimbabwe, Children sit shoulder to shoulder in<br />
              overcrowded rooms with no access to a single computer, no library, and no internet<br />
              connection.
            </p>
            <p className="leading-relaxed">
              The consequences ripple across generations: poverty deepens, inequality widens,<br />
              in sub-Saharan Africa. But it does not have to stay that way.
            </p>
          </div>

          {/* Read More Button - SECONDARY (navbar Get In Touch style) */}
          <div className="flex justify-center mt-8 mb-16">
            <button
              onClick={onReadMoreClick}
              className="px-5 py-2.5 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Read More</span>
              <ArrowRight size={16} className="stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 3 Metric Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch"
        >
          {/* Card 1: 15,000+ */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group bg-white hover:bg-[#f15a24] border border-[#e1e9f2] hover:border-[#f15a24] rounded-[2.25rem] shadow-xs hover:shadow-[0_20px_50px_rgba(241,90,36,0.30)] transition-all duration-300 flex flex-col min-h-[360px] cursor-pointer"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-center items-center text-center flex-grow">
              <h3 className="font-sans text-5xl sm:text-6xl font-extrabold text-[#101e2e] group-hover:text-white mb-5 tracking-tight transition-colors duration-300">
                <AnimatedCounter value={15000} suffix="+" duration={2} />
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#4b5d6e] group-hover:text-white leading-relaxed font-normal max-w-[290px] mx-auto transition-colors duration-300">
                Thousands of students from diverse backgrounds are empowered with essential digital skills through our intensive training programs designed for the modern global economy.
              </p>
            </div>
          </motion.div>

          {/* Card 2: 25+ */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group bg-white hover:bg-[#f15a24] border border-[#e1e9f2] hover:border-[#f15a24] rounded-[2.25rem] shadow-xs hover:shadow-[0_20px_50px_rgba(241,90,36,0.30)] transition-all duration-300 flex flex-col min-h-[360px] cursor-pointer md:translate-y-12"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-center items-center text-center flex-grow">
              <h3 className="font-sans text-5xl sm:text-6xl font-extrabold text-[#101e2e] group-hover:text-white mb-5 tracking-tight transition-colors duration-300">
                <AnimatedCounter value={25} suffix="+" duration={1.8} />
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#4b5d6e] group-hover:text-white leading-relaxed font-normal max-w-[290px] mx-auto transition-colors duration-300">
                Sustainable tech hubs established in rural areas provide consistent community access to tools, bridging the digital divide for youth in marginalized and remote locations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: 95% */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group bg-white hover:bg-[#f15a24] border border-[#e1e9f2] hover:border-[#f15a24] rounded-[2.25rem] shadow-xs hover:shadow-[0_20px_50px_rgba(241,90,36,0.30)] transition-all duration-300 flex flex-col min-h-[360px] cursor-pointer"
          >
            <div className="p-6 sm:p-8 flex flex-col justify-center items-center text-center flex-grow">
              <h3 className="font-sans text-5xl sm:text-6xl font-extrabold text-[#101e2e] group-hover:text-white mb-5 tracking-tight transition-colors duration-300">
                <AnimatedCounter value={95} suffix="%" duration={1.8} />
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#4b5d6e] group-hover:text-white leading-relaxed font-normal max-w-[290px] mx-auto transition-colors duration-300">
                Our structured curriculum ensures high rates of program completion and career placement, transforming basic digital literacy into tangible long term professional success.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


