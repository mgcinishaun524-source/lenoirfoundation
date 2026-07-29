import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 'stories-1',
      name: 'Sarah M.',
      role: 'Student',
      quote: 'Lenoir Foundation gave me access to computers and digital skills training that completely changed my confidence in technology. Today, I can use online learning platforms and build skills for my future career.',
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 'stories-2',
      name: 'Community Educator',
      role: '',
      quote: 'The mentorship and educational support provided by the foundation helped our community students gain opportunities they never had before. The impact has been truly inspiring.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 'stories-3',
      name: 'Youth Development Coordinator',
      role: '',
      quote: '“Through Lenoir Foundation\'s digital literacy programs, many young people in our area now have access to internet resources, technology training, and career guidance.”',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&crop=face',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#faf8f5] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title exactly matched to screenshot */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111c24] tracking-tight">
            Real Stories, Real Impact
          </h2>
        </div>

        {/* Carousel Container with precision-placed left & right circular arrows */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-[#f15a24] hover:border-[#f15a24] hover:bg-orange-50 bg-white transition-all cursor-pointer shadow-xs shrink-0"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={18} className="stroke-[2.5]" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-[#f15a24] hover:border-[#f15a24] hover:bg-orange-50 bg-white transition-all cursor-pointer shadow-xs shrink-0"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={18} className="stroke-[2.5]" />
          </button>

          {/* Testimonials grid: shows all 3 on large screens, slides responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {testimonials.map((item, idx) => {
              // Sliding logic for mobile/tablet responsive transitions if needed, otherwise clean grid
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  className="bg-[#f3f4f6]/60 border border-slate-200/60 rounded-[2rem] p-8 sm:p-10 pt-16 relative flex flex-col justify-between items-center text-center h-[360px] sm:h-[340px]"
                >
                  {/* Circular overlapping Portrait Avatar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-100 ring-1 ring-slate-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Main Quote Content exactly copy-fitted */}
                  <div className="flex-grow flex items-center justify-center text-center">
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                      {item.quote}
                    </p>
                  </div>

                  {/* Name and optional student designation */}
                  <div className="mt-6 pt-4 border-t border-slate-200/50 w-full">
                    <h4 className="font-display text-sm sm:text-base font-extrabold text-[#111c24] tracking-normal">
                      {item.name}
                      {item.role && (
                        <span className="font-sans text-slate-500 font-normal">, {item.role}</span>
                      )}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
