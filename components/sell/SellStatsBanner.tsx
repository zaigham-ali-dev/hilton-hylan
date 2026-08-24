"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l4 6 2-6 2 6 4-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21L6 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l6-12" />
      </svg>
    ),
    value: 3.2,
    prefix: "$",
    suffix: "B+",
    decimals: 1,
    label: "Total Sales Volume",
    delayClass: "[animation-delay:0ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:400ms] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    value: 1250,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Properties Sold",
    delayClass: "[animation-delay:400ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:800ms] w-6 h-6">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
      </svg>
    ),
    value: 30,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Countries Reached",
    delayClass: "[animation-delay:800ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:1200ms] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    value: 350,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Happy Sellers",
    delayClass: "[animation-delay:1200ms]",
  },
];

export function SellStatsBanner() {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24 pt-8 pb-20 relative z-20">
      <div className="max-w-[1800px] mx-auto">
        <div className="bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] py-8 px-6 lg:px-12 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="group flex items-center gap-5 px-2 lg:px-6 cursor-default">
                {/* Balanced Glowing Icon Circle */}
                <div className={`animate-gold-pulse-consistent ${stat.delayClass} w-[52px] h-[52px] rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] shrink-0 bg-gradient-to-b from-[#D4B28C]/10 to-transparent group-hover:scale-105 transition-all duration-300`}>
                  {stat.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-[28px] font-semibold text-white tracking-tight leading-none mb-1 font-sans group-hover:text-[#D4B28C] transition-colors">
                    <AnimatedCounter 
                      value={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals} 
                    />
                  </span>
                  <span className="text-[11px] lg:text-xs text-white/60 font-light">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
