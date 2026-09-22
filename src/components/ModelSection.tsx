import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  BookOpen, 
  Download, 
  Users, 
  Trophy, 
  Heart,
  Play,
  ArrowRight
} from 'lucide-react';

export default function TypeSparkSection() {
  const features = [
    { 
      icon: BookOpen, 
      title: '24 Comprehensive Lessons', 
      description: 'Progressive curriculum from basics to advanced typing skills'
    },
    { 
      icon: Globe, 
      title: '7 Languages Supported', 
      description: 'Available in English, French, Spanish, Portuguese, Arabic, Swahili, and more'
    },
    { 
      icon: Download, 
      title: '100% Offline Learning', 
      description: 'No internet required after installation, perfect for remote areas'
    },
    { 
      icon: Users, 
      title: 'Multi-User Friendly', 
      description: 'Track progress for multiple students on one device'
    },
    { 
      icon: Trophy, 
      title: 'Gamified Experience', 
      description: 'Engaging games and achievements to motivate young learners'
    },
    { 
      icon: Heart, 
      title: 'Child-Safe Design', 
      description: 'Age-appropriate content with no ads or external links'
    },
  ];

  return (
    <section id="typespark" className="py-20 sm:py-28 bg-[#fefcf8] border-b border-slate-100 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left: TypeSpark Africa App Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-cyan-400 to-teal-600 rounded-3xl p-0 shadow-2xl overflow-hidden max-w-md mx-auto">
              
              {/* Top Section - Hero with Hippo */}
              <div className="relative bg-cyan-400 p-6 pb-8 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://typespark.fun/assets/Educational_Kids_Toy_Store_Logo_(4)_1774223057615-DJFR8X-o.png"
                    alt="TypeSpark background"
                    className="w-full h-full object-cover scale-150 opacity-30"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-6 z-10">
                  <div className="w-6 h-6 bg-pink-500 rounded transform rotate-45"></div>
                </div>
                <div className="absolute top-8 right-16 z-10">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="absolute top-12 left-8 z-10">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
                
                {/* TypeSpark Africa Logo */}
                <div className="mb-4 relative z-10">
                  <h1 className="text-white font-black text-2xl mb-1 tracking-tight">TypeSpark</h1>
                  <h2 className="text-white font-black text-xl tracking-tight">Africa</h2>
                  <p className="text-white/90 text-sm font-medium mt-2">Free Typing Tutor for Kids</p>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mt-2">
                    <span className="text-white text-xs font-bold">FREE APP</span>
                  </div>
                </div>

                
              </div>

              {/* Bottom Section - Dark Teal */}
              <div className="bg-teal-600 p-6 text-white">
                <h3 className="text-xl font-black mb-1">TypeSpark</h3>
                <p className="text-sm font-medium text-teal-100 mb-4">Free digital literacy for every child aged 6-16</p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center bg-teal-500 rounded-full px-3 py-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-xs font-bold">7 African Languages</span>
                  </div>
                  <div className="flex items-center bg-teal-500 rounded-full px-3 py-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs font-bold">Works Offline</span>
                  </div>
                  <div className="flex items-center bg-teal-500 rounded-full px-3 py-1">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-xs font-bold">24 Lessons • 7 Stages</span>
                  </div>
                  <div className="flex items-center bg-teal-500 rounded-full px-3 py-1">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-xs font-bold">Achievements & Badges</span>
                  </div>
                  <div className="flex items-center bg-teal-500 rounded-full px-3 py-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs font-bold">100% Free</span>
                  </div>
                </div>

                {/* Available Languages */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-teal-200 mb-2">AVAILABLE IN</p>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Swahili', 'Shona', 'isiZulu', 'Luganda', 'isiNdebele', 'Twi'].map((lang) => (
                      <span key={lang} className="bg-teal-700 rounded-full px-3 py-1 text-xs font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://typespark.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-teal-500 border-2 border-teal-400 text-white font-bold py-3 rounded-2xl mb-2 hover:bg-teal-400 transition-colors text-center"
                >
                  Try TypeSpark Free →
                </a>

                {/* Sponsor Link */}
                <div className="text-center">
                  <button className="text-teal-200 text-sm underline hover:text-white transition-colors">
                    Sponsor a School — just $30/year
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111c24] font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Meet TypeSpark:<br />
                <span className="text-blue-600">Free Typing Lessons</span><br />
                for Every Child
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 font-sans leading-relaxed mb-8"
              >
                Our flagship educational software transforms any computer into a comprehensive typing learning center. 
                Designed specifically for children in underserved communities, TypeSpark works completely offline 
                and provides engaging, curriculum-based lessons that build essential digital literacy skills.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
                  <div className="text-sm text-gray-600">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">7</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">0%</div>
                  <div className="text-sm text-gray-600">Internet Required</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://typespark.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Try TypeSpark Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Sponsor a School — $30/yr
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <IconComponent size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

