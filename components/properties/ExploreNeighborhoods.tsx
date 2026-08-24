"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Diamond, Home, Building2, Palmtree, MapPin } from "lucide-react";

// Neighborhood data with premium Unsplash placeholder images
const neighborhoods = [
  {
    name: "Beverly Hills",
    icon: Diamond,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Malibu",
    icon: Palmtree,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bel Air",
    icon: Home,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hollywood Hills",
    icon: MapPin,
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Miami",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=800&auto=format&fit=crop",
  },
];

const particles = [
  { positionClass: "left-[10%] top-[70%]", duration: 4.0, delay: 0.5 },
  { positionClass: "left-[25%] top-[85%]", duration: 3.5, delay: 1.2 },
  { positionClass: "left-[40%] top-[65%]", duration: 4.2, delay: 0.2 },
  { positionClass: "left-[55%] top-[80%]", duration: 3.8, delay: 1.5 },
  { positionClass: "left-[70%] top-[75%]", duration: 4.5, delay: 0.8 },
  { positionClass: "left-[85%] top-[60%]", duration: 3.2, delay: 0.1 },
  { positionClass: "left-[15%] top-[90%]", duration: 4.1, delay: 1.8 },
  { positionClass: "left-[45%] top-[95%]", duration: 3.6, delay: 0.7 },
  { positionClass: "left-[65%] top-[55%]", duration: 4.8, delay: 1.1 },
  { positionClass: "left-[95%] top-[85%]", duration: 3.9, delay: 0.4 },
];

const AnimatedGoldenWave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* We use three static beautiful sine waves and animate glowing dots along them */}
        <path
          id="wave1"
          d="M-100,100 C100,180 200,180 400,100 S700,20 900,100 S1200,180 1400,100"
          fill="none"
          stroke="rgba(212, 178, 140, 0.4)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        <path
          id="wave2"
          d="M-100,130 C50,200 150,200 300,130 S550,60 700,130 S950,200 1100,130 S1350,60 1500,130"
          fill="none"
          stroke="rgba(212, 178, 140, 0.2)"
          strokeWidth="1"
        />
        <path
          id="wave3"
          d="M-100,80 C150,140 250,140 450,80 S750,20 950,80 S1250,140 1450,80"
          fill="none"
          stroke="rgba(212, 178, 140, 0.15)"
          strokeWidth="1"
        />

        {/* Glowing dots traveling along Wave 1 */}
        <circle r="4" fill="#D4B28C" filter="url(#glow)">
          <animateMotion dur="18s" repeatCount="indefinite">
            <mpath href="#wave1" />
          </animateMotion>
        </circle>
        <circle r="2" fill="#D4B28C" filter="url(#glow)">
          <animateMotion dur="18s" begin="6s" repeatCount="indefinite">
            <mpath href="#wave1" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#ffffff" filter="url(#glow)">
          <animateMotion dur="18s" begin="12s" repeatCount="indefinite">
            <mpath href="#wave1" />
          </animateMotion>
        </circle>

        {/* Glowing dots traveling along Wave 2 */}
        <circle r="3" fill="#D4B28C" filter="url(#glow)">
          <animateMotion dur="22s" repeatCount="indefinite">
            <mpath href="#wave2" />
          </animateMotion>
        </circle>
        <circle r="1.5" fill="#D4B28C" filter="url(#glow)">
          <animateMotion dur="22s" begin="11s" repeatCount="indefinite">
            <mpath href="#wave2" />
          </animateMotion>
        </circle>

        {/* Glowing dots traveling along Wave 3 */}
        <circle r="2.5" fill="#D4B28C" filter="url(#glow)">
          <animateMotion dur="15s" begin="3s" repeatCount="indefinite">
            <mpath href="#wave3" />
          </animateMotion>
        </circle>
      </svg>
      
      {/* Floating ambient particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute size-1 sm:size-1.5 rounded-full bg-[#D4B28C] shadow-[0_0_10px_1px_rgba(212,178,140,0.6)] ${p.positionClass}`}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ExploreNeighborhoods: React.FC = () => {
  return (
    <section className="bg-black relative overflow-hidden pt-6 sm:pt-8 pb-24 sm:pb-32 lg:pb-40 min-h-[600px] flex flex-col justify-center">
      {/* Header Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4B28C]">
            EXPLORE NEIGHBORHOODS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-wide text-white mt-1">
            Find your perfect place.
          </h2>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full">
        {/* Horizontal scroll container on mobile, wrapped row on very large screens, but tailored to match the mockup's horizontal line */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex overflow-x-auto hide-scrollbar px-6 sm:px-10 lg:px-16 pb-16 pt-4 gap-4 sm:gap-5 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {neighborhoods.map((city, idx) => {
            const isActive = idx === 0; // First card is active exactly like the screenshot
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] h-[170px] sm:h-[190px] lg:h-[210px] relative group cursor-pointer"
              >
                {/* Active/Hover Golden Glow */}
                <div 
                  className={`absolute inset-0 rounded-[20px] blur-xl transition-all duration-700 ease-out z-0 
                  ${isActive ? 'bg-[#D4B28C]/15 opacity-100 translate-y-2' : 'bg-[#D4B28C]/0 opacity-0 group-hover:bg-[#D4B28C]/20 group-hover:opacity-100 group-hover:translate-y-2'}`} 
                />

                {/* Card Inner Container */}
                <div 
                  className={`relative w-full h-full rounded-[20px] overflow-hidden border bg-white/5 backdrop-blur-md transition-all duration-700 ease-out z-10 p-5
                  ${isActive ? 'border-[#D4B28C]/60' : 'border-white/10 group-hover:border-[#D4B28C]/60'}`}
                >
                  {/* Background Image */}
                  <Image
                    src={city.img}
                    alt={city.name}
                    fill
                    className="object-cover opacity-65 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out z-0"
                  />
                  
                  {/* Dark Gradient Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                  {/* Content (Top-Left Aligned as requested) */}
                  <div className="relative z-20 flex flex-col justify-start items-start h-full gap-3">
                    <div className="flex items-center gap-3">
                      {/* Circular Icon */}
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm transition-colors duration-500 group-hover:border-[#D4B28C]/50">
                        <city.icon
                          strokeWidth={1.5}
                          className="w-4 h-4 text-white group-hover:text-[#D4B28C] transition-colors duration-500"
                        />
                      </div>
                      {/* City Name */}
                      <span className="text-white font-semibold text-[15px] tracking-wide mt-0.5">
                        {city.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* SVG Animated Golden Wave Background */}
      <AnimatedGoldenWave />

      {/* Inline styles for hiding scrollbar specifically for webkit */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </section>
  );
};
