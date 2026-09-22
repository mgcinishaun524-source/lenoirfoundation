import React from 'react';
import { motion } from 'motion/react';

interface BlogsSectionProps {
  onPostClick?: (postId: string) => void;
}

export default function BlogsSection({ onPostClick }: BlogsSectionProps) {
  const posts = [
    {
      id: 'b-1',
      title: 'Digital Literacy Workshop for Students',
      date: '10 Aug 2025',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop',
    },
    {
      id: 'b-2',
      title: 'New Community Learning Hub Launched',
      date: '10 Aug 2025',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&auto=format&fit=crop',
    },
    {
      id: 'b-3',
      title: 'Empowering Young Innovators Through Technology',
      date: '10 Aug 2025',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop',
    },
    {
      id: 'b-4',
      title: 'Back to school Support Initiative',
      date: '10 Aug 2025',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blogs" className="py-20 sm:py-24 bg-[#faf8f5] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111c24] tracking-tight">
            Latest Blogs & Events
          </h2>
        </div>

        {/* Double-Column Grid aligned to screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Big Featured Visual Post */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => onPostClick?.('b-featured')}
              className="flex flex-col select-none cursor-pointer group"
            >
              {/* Feature Box with rounded outline */}
              <div className="relative overflow-hidden bg-[#fcfdfd] border border-slate-200/60 rounded-[2rem] p-4 shadow-xs transition-shadow group-hover:shadow-md">
                {/* LeNoir Logo watermark appearing on hover with high opacity */}
                <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-xl shadow-sm border border-slate-100">
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

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
                  alt="Digital literacy education program"
                  className="w-full h-auto object-cover rounded-[1.5rem]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={900}
                />
              </div>

              {/* Precise Typography and description immediately below */}
              <div className="mt-6 px-1">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#111c24] tracking-tight group-hover:text-[#f15a24] transition-colors">
                  TypeSpark Africa typing competition
                </h3>
                <span className="block mt-1 text-[11px] sm:text-xs font-semibold text-slate-400 font-sans">
                  10 Aug 2025
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: "Latest Post" Vertical stack */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#111c24] mb-8">
              Latest Post
            </h3>

            <div className="flex flex-col gap-6 sm:gap-8">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => onPostClick?.(post.id)}
                  className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                >
                  {/* Small Circular/Rounded Left Cover Image */}
                  <div className="w-24 sm:w-28 h-16 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-50 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width={150}
                      height={100}
                    />
                  </div>

                  {/* Right side Text: title and date */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#f15a24] transition-colors">
                      {post.title}
                    </h4>
                    <span className="block mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-slate-400 font-semibold font-sans">
                      {post.date}
                    </span>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
