import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, User, Calendar, BookOpen, Share2, ThumbsUp, MessageSquare } from 'lucide-react';

import typingImg from '../assets/images/typing_hand_visual_1781532845930.jpg';
import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';
import codingImg from '../assets/images/coding_for_kids_1781532812034.jpg';
import communityImg from '../assets/images/community_outreach_1781532828060.jpg';

interface BlogPost {
  id: string;
  category: 'Education' | 'Community' | 'Technology';
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
}

export default function NewsGrid() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'n-1',
      category: 'Education',
      title: "Bridging the Screen Time and Input Divide",
      excerpt: "Most children we serve have never interacted with a tactile keyboard. We teach keyboard layouts before coding or browsing to set a solid foundation.",
      content: `For children to grow into active drivers of the digital economy, we must move beyond passive screen consumption.

At LeNoir Foundation, our key realization was simple: before a child can write code, conduct virtual research, or design a presentation, they must first master standard input. The humble keyboard remains the prime window of creation.

Our TypeSpark software focuses on tactile muscle memory, enabling kids to type naturally and focus on their thoughts rather than hunting for keys. This sets them up for success as they transition to programming languages and digital editing tasks.`,
      image: typingImg,
      author: {
        name: 'Thando Mavusa',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        role: 'Lead Educational Facilitator'
      },
      date: '2 hours ago',
      readTime: '4 min read'
    },
    {
      id: 'n-2',
      category: 'Community',
      title: 'Transforming School Libraries into Dynamic Learning Hubs',
      excerpt: "We work hand in hand with municipal structures to establish offline ready computer labs that remain fully operational even without internet.",
      content: `Access to educational resources should not be bounded by high subscription rates or erratic network coverage.

Through our local simulations, we turn standard libraries into robust tech installations. By leveraging Raspberry Pi grids loaded with TypeSpark lessons, offline Wikipedia, and offline typing tutors, children gain the leverage they need to build structural confidence with computers at no ongoing cost to their local community.

These local libraries serve as after-school hubs where children can collaborate, learn at their own pace, and receive peer validation.`,
      image: 'https://lenoirfoundation.vercel.app/assets/digital_literacy_1781532795243-Dsex_HqF.jpg',
      author: {
        name: 'Chinedu Okeke',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        role: 'Infrastructure Engineer'
      },
      date: '5 hours ago',
      readTime: '6 min read'
    },
    {
      id: 'n-3',
      category: 'Technology',
      title: 'Why Offline First Architecture is Critical for Impact',
      excerpt: "True scale in marginalized communities requires tools designed to function completely disconnected from cloud systems. Here's our technical blueprint.",
      content: `Most development initiatives fail when they assume constant 5G connectivity or unlimited electrical grids.

We designed TypeSpark to store progress logs locally, serialize data into lightweight profiles, and rely on embedded SVG components instead of heavy internet packages. By utilizing lightweight local database systems on the client, children's progress is persisted smoothly across power cycles, without transmitting data to centralized servers.

This methodology makes digital learning resilient, durable, and highly cost-effective for schools with tight infrastructure budgets.`,
      image: 'https://lenoirfoundation.vercel.app/assets/coding_for_kids_1781532812034-B28KANh7.jpg',
      author: {
        name: 'Amina El-Amin',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150',
        role: 'Chief Technical Officer'
      },
      date: 'Yesterday',
      readTime: '5 min read'
    },
    {
      id: 'n-4',
      category: 'Education',
      title: 'The Byte Back Methodology Explained',
      excerpt: "We break down the 7-stage learning journey from home row keys to full Touch Typing mastery using structured gamified challenges.",
      content: `Interactive feedback is the best driver of continuous practice.

Byte Back methodology treats rows of keys as climbing levels. Beginning with 'Home Row Basics', students unlock visual keystroke targets. Within 24 progressive lessons, the muscle memory develops to where students no longer look at the keys, boosting average typing speeds from under 10 WPM to over 40 WPM.

This structured progression builds deep tactile familiarity with symbols, numbers, and letter sequences, paving the way for coding syntax structure.`,
      image: 'https://lenoirfoundation.vercel.app/assets/typing_hand_visual_1781532845930-B3knwWEJ.jpg',
      author: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        role: 'Pedagogy Specialist'
      },
      date: '2 days ago',
      readTime: '5 min read'
    },
    {
      id: 'n-5',
      category: 'Community',
      title: 'TypeSpark Africa Speed Championships: Celebrating Progress',
      excerpt: "Kids from five different local libraries gathered together to showcase their typing speeds and win custom hardware prizes.",
      content: `Healthy competition creates a high-energy community standard.

Our latest local typing championship brought together over 120 learners to showcase their growth on TypeSpark. The focus wasn't just on maximum speed, but on high precision and perfect home-row posture.

The grand winner took home a new raspberry pi desktop computer to continue writing custom software, showing how basic skills opens real rewards for local families.`,
      image: 'https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg',
      author: {
        name: 'Ezenwa Obi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        role: 'Outreach Coordinator'
      },
      date: '3 days ago',
      readTime: '4 min read'
    },
    {
      id: 'n-6',
      category: 'Technology',
      title: 'Zero Tariff Tracking',
      excerpt: "Deploying a custom offline local server that enables synchronous student activity tracking without external network cost.",
      content: `How do teachers manage classrooms without an active cloud dashboard?

By building a lightweight node application that synchronizes all client logs over a local area network (LAN) Wi-fi router setup. Teachers can host tests, view progress speeds, and issue electronic certificates without using an active cellular data connection.

This approach reduces schools' running overhead entirely to zero, meaning that technology works even where internet packages are priced beyond budget limits.`,
      image: 'https://lenoirfoundation.vercel.app/assets/hero_background_1781532776444-BODnaYja.jpg',
      author: {
        name: 'Tunde Bakare',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        role: 'Network Architect'
      },
      date: '4 days ago',
      readTime: '7 min read'
    },
    {
      id: 'n-7',
      category: 'Education',
      title: 'From Keystrokes to Source Code Editing',
      excerpt: "Once students master touch typing, how we transition them into basic HTML, CSS, and structural markdown editing.",
      content: `Typing is the foundational language of the modern developer.

Once students achieve a baseline typing rate of 30 WPM with accuracy above 95%, our secondary workshops introduce basic visual editing. By showing how structural lines of HTML build physical web layouts, kids connect the keystrokes they practiced to web development and technical expression.

This transition transforms their computer relationship from game usage into real output and design mastery.`,
      image: 'https://lenoirfoundation.vercel.app/assets/coding_for_kids_1781532812034-B28KANh7.jpg',
      author: {
        name: 'Amina El-Amin',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150',
        role: 'Chief Technical Officer'
      },
      date: '1 week ago',
      readTime: '6 min read'
    },
    {
      id: 'n-8',
      category: 'Community',
      title: 'Bridging Generational Gaps with Computer Clinics',
      excerpt: "How kids from local workshops became the trainers for their parents and community elders on basic digital literacy.",
      content: `Knowledge flourishes most when shared across local social circles.

In our weekend computer clinics, our top performing students stepped into leadership roles. Teaching parents to search digital encyclopedias, navigate key health platforms, and communicate with loved ones created immense pride.

This peer to peer approach demonstrates that true empowerment is a collective community effort that feeds back into the community support network.`,
      image: 'https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg',
      author: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        role: 'Pedagogy Specialist'
      },
      date: '2 weeks ago',
      readTime: '5 min read'
    },
    {
      id: 'n-9',
      category: 'Technology',
      title: 'Low Cost Hardware Solutions for Classrooms',
      excerpt: "Sourcing and mounting low energy computers inside rugged protective cases to withstand daily use in high dust regions.",
      content: `Fulfilling a structural mission means designing for raw real world conditions.

To keep hardware running in challenging physical environments, we engineered compact enclosures with customized dust guards. By pairing energy efficient ARM processors with responsive low travel keyboards, our hardware setup requires only small power draws, ideal for classrooms relying on solar cells or backup generator sets.

This rugged construction minimizes downtime and lowers overall school technology upkeep costs.`,
      image: 'https://lenoirfoundation.vercel.app/assets/digital_literacy_1781532795243-Dsex_HqF.jpg',
      author: {
        name: 'Chinedu Okeke',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        role: 'Infrastructure Engineer'
      },
      date: '1 month ago',
      readTime: '8 min read'
    },
  ];

  const getBadgeColors = (category: string) => {
    switch (category) {
      case 'Education':
        return 'bg-blue-50 text-blue-600 border border-blue-100';
      case 'Community':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
      case 'Technology':
        return 'bg-orange-50 text-[#f15a24] border border-orange-100';
      default:
        return 'bg-slate-50 text-slate-650';
    }
  };

  return (
    <section className="py-20 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id + '-' + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-[2rem] border border-slate-100 hover:border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group overflow-hidden"
            >
              
              {/* Card Header Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                {/* LeNoir Logo watermark appearing on hover with high opacity */}
                <div className="absolute top-3 right-3 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-1.5 rounded-lg shadow-sm border border-slate-100">
                  <img
                    src="https://www.lenoirfoundation.com/lenoir-logo.png"
                    alt="LeNoir Foundation Logo"
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                   loading="lazy" decoding="async" />
                </div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                 loading="lazy" decoding="async" />
              </div>

              {/* Card Meta and details body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                
                {/* Category Badge matching color specs */}
                <div className="flex">
                  <span className={`px-4 py-1 text-[11px] font-bold rounded-lg font-sans tracking-wide uppercase ${getBadgeColors(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#112335] leading-snug group-hover:text-[#f15a24] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-[#5a6a7c] font-sans text-xs sm:text-sm leading-relaxed font-normal flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-6" />

                {/* Author component details overlay */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                   loading="lazy" decoding="async" />
                  <div>
                    <h5 className="font-sans text-xs font-bold text-slate-800">
                      {post.author.name}
                    </h5>
                    <span className="block mt-0.5 text-[10px] text-slate-400 font-sans font-medium">
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                </div>

              </div>
              
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reading Article Modal Modal view details */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-[#070f16]/80 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-20 flex flex-col my-8 border border-white/10"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-30 p-2.5 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Cover Header Picture */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                 loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-8 text-white" />
              </div>

              {/* Modal Contents Scroll Box */}
              <div className="p-8 sm:p-10 max-h-[50vh] overflow-y-auto custom-scrollbar">
                
                {/* Overlay details */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-4 py-1 text-[10px] font-bold rounded-lg tracking-wide uppercase ${getBadgeColors(selectedPost.category)}`}>
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-slate-400 font-sans flex items-center gap-1 ml-2">
                    <Clock size={12} />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black text-[#112335] leading-tight mb-6">
                  {selectedPost.title}
                </h2>

                {/* Author Info Card */}
                <div className="flex items-center gap-4 py-4 px-5 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                    referrerPolicy="no-referrer"
                   loading="lazy" decoding="async" />
                  <div>
                    <h5 className="font-sans text-sm font-extrabold text-slate-800">
                      {selectedPost.author.name}
                    </h5>
                    <span className="text-xs text-slate-400 font-sans">
                      {selectedPost.author.role} • {selectedPost.date}
                    </span>
                  </div>
                </div>

                {/* Article Text Content */}
                <div className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed space-y-6">
                  {selectedPost.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Interactive panel tools inside the reading modal */}
                <div className="border-t border-slate-100 mt-10 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#f15a24] transition-colors">
                      <ThumbsUp size={14} />
                      Like
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#f15a24] transition-colors">
                      <MessageSquare size={14} />
                      Comment
                    </button>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors">
                    <Share2 size={14} />
                    Share Post
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
