"use client";

import React from "react";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8V5.5L12 2l9 3.5V12z" />
      </svg>
    ),
    title: "Integrity",
    description: "We operate with honesty and transparency in every interaction.",
    delayClass: "[animation-delay:0ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:400ms] w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.39.745-.39.94 0l2.3 4.659 5.14.747c.433.063.606.592.292.902l-3.72 3.625.88 5.12c.074.433-.38.762-.767.558L12 16.347l-4.605 2.42c-.387.204-.84-.125-.767-.558l.88-5.12-3.72-3.625c-.314-.3-.14-.829.292-.902l5.14-.747 2.3-4.659z" />
      </svg>
    ),
    title: "Excellence",
    description: "We strive for excellence in everything we do, every day.",
    delayClass: "[animation-delay:400ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:800ms] w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Relationships",
    description: "We build lasting relationships that go beyond transactions.",
    delayClass: "[animation-delay:800ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:1200ms] w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2 2 0 01-2-2h4a2 2 0 01-2 2zm5-12c0 2.25-1.5 4.5-2.5 5.5A2.5 2.5 0 0013.5 16h-3a2.5 2.5 0 00-1 1.5c-1-1-2.5-3.25-2.5-5.5a5 5 0 0110 0z" />
      </svg>
    ),
    title: "Innovation",
    description: "We embrace creativity and technology to deliver better results.",
    delayClass: "[animation-delay:1200ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:1600ms] w-7 h-7">
        <rect x="5" y="11" width="14" height="10" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v3M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
    title: "Discretion",
    description: "We value privacy and handle every detail with care.",
    delayClass: "[animation-delay:1600ms]"
  },
];

export function OurValues() {
  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-white/5 relative z-10">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Column: Heading */}
          <div className="w-full lg:w-1/4 shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-4 block">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif tracking-tight leading-tight mb-6">
              The Principles<br className="hidden lg:block" /> That Guide Us
            </h2>
            {/* Gold divider line */}
            <div className="w-14 h-[2px] bg-[#D4B28C]" />
          </div>

          {/* Right Column: Values Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 lg:divide-x lg:divide-white/10">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`group flex flex-col items-center text-center px-4 lg:pl-6 lg:first:pl-0 cursor-default ${
                  idx > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                {/* Balanced Glowing Circle Icon Container */}
                <div className={`animate-gold-pulse-consistent ${val.delayClass} w-14 h-14 rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] mb-6 bg-gradient-to-b from-[#D4B28C]/10 to-transparent relative group-hover:scale-105 transition-all duration-300`}>
                  {val.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#D4B28C] text-[15px] font-medium tracking-wide mb-3 group-hover:text-[#F3E7D7] transition-all duration-300">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/55 font-light leading-relaxed max-w-[200px]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
