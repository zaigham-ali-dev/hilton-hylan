"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroContent: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="flex flex-col max-w-2xl text-white gap-3 sm:gap-4 md:gap-5 relative z-10"
    >
      {/* Mini Tagline */}
      <div className="flex items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60">
        <svg
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-[#D4B28C]/80"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2 2.4-7.2-6-4.8h7.6z" />
        </svg>
        Luxury Reimagined
      </div>

      {/* Main Title - Responsive serif heading */}
      <h1 className="font-serif font-normal leading-[1.05] tracking-[-0.02em]">
        <span className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] text-white block">
          Spaces that
        </span>
        <span className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] italic text-[#D4B28C] block">
          inspire life.
        </span>
      </h1>

      {/* Subtext Description */}
      <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] text-white/50 font-light max-w-[280px] sm:max-w-xs md:max-w-sm leading-[1.7] sm:leading-[1.8] tracking-wide mt-0.5 sm:mt-1">
        Exceptional homes in the world&apos;s most desirable destinations.
      </p>

      {/* Hero Actions */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 sm:gap-6 md:gap-8 mt-4 sm:mt-5 md:mt-6">
        {/* Discover Properties Button Wrapper */}
        <div className="relative inline-flex items-center group cursor-pointer">
          {/* Main Text Button (Beige Pill) */}
          <button className="rounded-full bg-gradient-to-r from-[#D4B28C] via-[#c9a46c] to-[#D4B28C] pr-12 sm:pr-14 md:pr-16 pl-6 sm:pl-7 md:pl-8 py-2.5 sm:py-3.5 md:py-4 group-hover:from-[#c9a46c] group-hover:via-[#b8935b] group-hover:to-[#c9a46c] transition-all duration-500 shadow-lg shadow-[#D4B28C]/10">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-black/85">
              Discover Properties
            </span>
          </button>
          
          {/* Arrow circle with golden spinning arc - positioned outside on the right */}
          <div className="arrow-circle-glow absolute right-0 translate-x-[25%] flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#111] group-hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Watch Showreel Play Button */}
        <button className="group inline-flex items-center gap-3 sm:gap-4 hover:gap-4 sm:hover:gap-5 transition-all duration-300">
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:border-white/40 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-white ml-0.5"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
            Watch Showreel
          </span>
        </button>
      </div>
    </motion.div>
  );
};
