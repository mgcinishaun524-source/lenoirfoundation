import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Globe } from 'lucide-react';
import { safeHref, safeMailto, sitePrimaryDomain } from '../lib/security';

import communityImg from '../assets/images/community_outreach_1781532828060.jpg';
import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';
import codingImg from '../assets/images/coding_for_kids_1781532812034.jpg';

export default function AboutUsTeam() {
  const teamMembers = [
    {
      name: 'James Mawaka',
      role: 'Founder & Managing Trustee',
      bio: 'James founded the LeNoir Foundation with a profound vision to alleviate digital poverty. He leads global hardware logistics, coordinating strategic installations in remote schools across East Africa.',
      avatarUrl: communityImg,
      linkedin: '#',
      email: 'james@lenoirfoundation.com'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Educational Outreach',
      bio: 'Sarah is an experienced curriculum specialist. She designs localized digital lesson plans and trains regional classroom mentors to deliver sustainable long term educational impact.',
      avatarUrl: digitalLiteracyImg,
      linkedin: '#',
      email: 'sarah.j@lenoirfoundation.com'
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'Trustee & Technology Lead',
      bio: 'Aris oversees the systems architecture for our off grid servers and solar integration projects. He ensures our classroom hubs run seamlessly without requiring persistent online access.',
      avatarUrl: codingImg,
      linkedin: '#',
      email: 'aris@lenoirfoundation.com'
    }
  ];

  return (
    <section id="founders" className="py-20 bg-[#faf8f5] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="block text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-[#f15a24] mb-2 text-center">
            Organizational Stewardship
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112335] tracking-tight">
            Our Leadership Board
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            Meet the trustees and experts guiding our efforts to bridge the global digital divide and secure digital rights for underprivileged children.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/60 shadow-xs flex flex-col justify-between overflow-hidden group hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              
              {/* Card Main Body */}
              <div>
                {/* Visual Avatar frame with dark brand shade overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#112335]">
                  <div className="absolute inset-0 bg-[#112335]/30 group-hover:bg-transparent transition-colors duration-400 z-10" />
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute badging inside image frame */}
                  <span className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-[#112335]/90 backdrop-blur-xs text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">
                    Trustee Board
                  </span>
                </div>

                {/* Info Area */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display font-black text-xl text-[#112335] tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#f15a24] block mt-1.5 uppercase tracking-wider">
                    {member.role}
                  </span>
                  <p className="mt-4 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer Social Panel */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verified Steward
                </span>
                
                <div className="flex items-center gap-3">
                  <a
                    href={safeMailto(member.email)}
                    className="text-slate-400 hover:text-orange-600 transition-colors"
                    title="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={safeHref(member.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-600 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={safeHref(sitePrimaryDomain)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-600 transition-colors"
                    title="LeNoir Official"
                  >
                    <Globe size={16} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
