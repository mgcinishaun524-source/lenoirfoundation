import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck, Bus, Train } from 'lucide-react';
import { safeHref } from '../lib/security';

export default function ContactMap() {
  const [mapType, setMapType] = useState<'satellite' | 'roadmap'>('roadmap');
  
  // Exact UK Office Details
  const address = "86 to 90 Paul Street, Shoreditch, London, EC2A 4NE, United Kingdom";
  
  // OpenStreetMap embed URLs — no API key required, no content-blocking issues
  // Satellite-style uses Esri World Imagery layer; roadmap uses default OSM tiles
  // Coordinates: 86-90 Paul Street, Shoreditch, London EC2A 4NE (51.5248, -0.0878)
  const mapUrl = mapType === 'satellite'
    ? "https://www.openstreetmap.org/export/embed.html?bbox=-0.0928%2C51.5228%2C-0.0828%2C51.5268&layer=cyclemap&marker=51.5248%2C-0.0878"
    : "https://www.openstreetmap.org/export/embed.html?bbox=-0.0928%2C51.5228%2C-0.0828%2C51.5268&layer=mapnik&marker=51.5248%2C-0.0878";

  // External link for real directions
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=86-90+Paul+Street+London+EC2A+4NE";

  return (
    <section className="relative py-12 bg-[#faf8f5] overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="block text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-[#f15a24] mb-2 text-center">
            Our Headquarters
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#112335] mt-4 tracking-tight">
            Find Us in the Heart of London
          </h2>
          <p className="mt-3 text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
            Stop by our Shoreditch tech hub, coordinate donation drop-offs, or meet the community management team.
          </p>
        </div>

        {/* Combined Map Screen and Location Card Container */}
        <div className="relative max-w-6xl mx-auto h-[450px] sm:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50">
          
          {/* Real Embedded Google Map with Satellite styling preset Toggle */}
          <iframe
            src={mapUrl}
            title="LeNoir Headquarters Map"
            width="100%"
            height="100%"
            className="border-0 select-none"
            allowFullScreen={false}
            loading="lazy"
          />

          {/* Interactive Toggle Control Top-Left */}
          <div className="absolute top-6 left-6 z-10 flex gap-2 bg-black/75 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg">
            <button
              onClick={() => setMapType('satellite')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                mapType === 'satellite' 
                  ? 'bg-[#f15a24] text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Cycle Map
            </button>
            <button
              onClick={() => setMapType('roadmap')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                mapType === 'roadmap' 
                  ? 'bg-[#f15a24] text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Standard Map
            </button>
          </div>

          {/* Location details overlay floating card (Bottom-Left on Desktop / bottom or hidden on mobile gracefully) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-[400px] z-10 bg-white/95 backdrop-blur-lg p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-2xl flex flex-col"
          >
            {/* Title */}
            <div className="flex items-start gap-3.5">
              <div className="p-3 bg-orange-50 text-[#f15a24] rounded-2xl">
                <MapPin size={22} className="animate-bounce" />
              </div>
              <div>
                <h4 className="font-display text-lg font-black text-[#112335]">
                  London HQ (UK)
                </h4>
                <p className="mt-1 text-slate-500 font-sans text-xs font-semibold">
                  LeNoir Foundation Services Ltd.
                </p>
              </div>
            </div>

            {/* Address */}
            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-semibold">
              {address}
            </p>

            <hr className="my-5 border-slate-150" />

            {/* Transit and Access */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5 text-slate-600 text-xs font-sans">
                <Train size={14} className="text-[#3dbba6]" />
                <span>Old Street Station (Northern Line)  <strong className="font-bold text-slate-800">4 min walk</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 text-xs font-sans">
                <Bus size={14} className="text-[#3dbba6]" />
                <span>Epworth Street / Shoreditch stop  <strong className="font-bold text-slate-800">2 min walk</strong></span>
              </div>
            </div>

            {/* Navigation action links */}
            <div className="mt-6 flex gap-3">
              <a
                href={safeHref(directionsUrl, '#')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-sans font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Navigation size={13} />
                Get Directions
                <ExternalLink size={11} className="opacity-70" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
