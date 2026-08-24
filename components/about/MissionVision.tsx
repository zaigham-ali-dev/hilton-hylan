"use client";

import React from "react";

export function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div className="max-w-[1800px] mx-auto">
        {/* Main Banner Box */}
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#0B0B0B]/85 backdrop-blur-2xl p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col md:flex-row items-stretch gap-12 md:gap-0">
          
          {/* Left Column: Our Mission */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pr-0 md:pr-12 lg:pr-16 relative z-10 group cursor-default">
            {/* Glowing Icon Circle */}
            <div className="animate-gold-pulse-consistent-slow w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] shrink-0 bg-gradient-to-br from-[#D4B28C]/10 via-transparent to-transparent relative overflow-hidden transition-all duration-500 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent-slow w-10 h-10 text-[#D4B28C] transition-transform duration-500">
                {/* Left peak */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 20l6-9 4 6" />
                {/* Right peak */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l6-8 4 8H12z" />
                {/* Center peak (with flag) */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l5-12 5 7" />
                {/* Flag staff */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V2" />
                {/* Flag outline */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2h6l-1.5 2 1.5 2h-6" />
              </svg>
            </div>
            
            {/* Text Area */}
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-2xl sm:text-[28px] font-serif text-[#D4B28C] tracking-wide mb-3">
                Our Mission
              </h3>
              <p className="text-[14px] sm:text-[15px] text-white/70 font-light leading-relaxed max-w-[340px]">
                To deliver unparalleled real estate experiences through expertise, innovation, and a client-first approach.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-full md:w-[1px] h-[1px] md:h-auto bg-white/10 shrink-0 self-stretch my-2 md:my-0" />

          {/* Right Column: Our Vision */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pl-0 md:pl-12 lg:pl-16 relative z-10 group cursor-default">
            {/* Glowing Icon Circle */}
            <div className="animate-gold-pulse-consistent-slow w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] shrink-0 bg-gradient-to-br from-[#D4B28C]/10 via-transparent to-transparent relative overflow-hidden transition-all duration-500 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent-slow w-10 h-10 text-[#D4B28C] transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 22a4 4 0 100-8 4 4 0 000 8zM16 22a4 4 0 100-8 4 4 0 000 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14V8M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M8 12h8" />
              </svg>
            </div>
            
            {/* Text Area */}
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-2xl sm:text-[28px] font-serif text-[#D4B28C] tracking-wide mb-3">
                Our Vision
              </h3>
              <p className="text-[14px] sm:text-[15px] text-white/70 font-light leading-relaxed max-w-[340px]">
                To be the world&apos;s most respected luxury real estate brand, known for results and relationships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
