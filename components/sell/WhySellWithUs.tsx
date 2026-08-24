"use client";

import React from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent w-9 h-9">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Global Reach",
    description: "Your property is marketed to a global network of qualified buyers.",
    delayClass: "[animation-delay:0ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:400ms] w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: "Premium Marketing",
    description: "High-end photography, cinematic videos, and targeted campaigns.",
    delayClass: "[animation-delay:400ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:800ms] w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 14l1.5 1.5L22 13" />
      </svg>
    ),
    title: "Local Expertise",
    description: "Deep market knowledge to price your home strategically.",
    delayClass: "[animation-delay:800ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent [animation-delay:1200ms] w-9 h-9">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3-6 6" />
        <path d="m21 21-6-6" />
        <path d="m3 3 6 6" />
        <path d="m3 21 6-6" />
      </svg>
    ),
    title: "Negotiation Power",
    description: "Our experts negotiate the best terms and highest price.",
    delayClass: "[animation-delay:1200ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent [animation-delay:1600ms] w-9 h-9">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Seamless Experience",
    description: "We handle every detail so you can focus on what's next.",
    delayClass: "[animation-delay:1600ms]"
  },
];

export function WhySellWithUs() {
  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-white/5 relative">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Headers */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-4">
            WHY SELL WITH VISTARA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif tracking-tight leading-tight">
            Unmatched Advantage. Outstanding Results.
          </h2>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 lg:divide-x lg:divide-white/10">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center px-4 cursor-default">
              {/* Animated Glowing Icon */}
              <div className="text-[#D4B28C] mb-6 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#D4B28C] text-[15px] font-medium tracking-wide mb-3 group-hover:text-[#F3E7D7] transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-white/55 font-light leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
