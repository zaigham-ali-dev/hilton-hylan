"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    if (isNaN(end)) return;

    const duration = 3500;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(start + (end - start) * easeProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent w-7 h-7">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 6-6" />
        <path d="M18 10v6" />
        <path d="M14 10v6" />
        <path d="M10 14v2" />
      </svg>
    ),
    value: 2.18,
    prefix: "$",
    suffix: "M",
    decimals: 2,
    label: "Median Home Price",
    subtext: "+12.5% vs last year",
    delayClass: "[animation-delay:0ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent [animation-delay:400ms] w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    value: 3.42,
    prefix: "$",
    suffix: "M",
    decimals: 2,
    label: "Average Sale Price",
    subtext: "+8.3% vs last year",
    delayClass: "[animation-delay:400ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent [animation-delay:800ms] w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    value: 24.6,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Luxury Demand",
    subtext: "High buyer interest",
    delayClass: "[animation-delay:800ms]"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-glow-consistent [animation-delay:1200ms] w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l3 3 5-5" />
      </svg>
    ),
    value: 16.2,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Investment Growth",
    subtext: "Year over year",
    delayClass: "[animation-delay:1200ms]"
  },
];

export function MarketInsights() {
  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-20 relative z-10">
      <div className="border border-white/10 rounded-[20px] p-8 lg:px-12 bg-[#0c0c0c] shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="mb-10 relative z-10">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4B28C]">
            MARKET INSIGHTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 lg:gap-4 lg:divide-x lg:divide-white/10 relative z-10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center px-4 cursor-default"
            >
              {/* Glowing Icon Circle */}
              <div className={`animate-gold-pulse-consistent ${stat.delayClass} w-[60px] h-[60px] rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] mb-6 bg-gradient-to-b from-[#D4B28C]/10 to-transparent relative group-hover:scale-105 transition-all duration-300`}>
                {stat.icon}
              </div>
              
              {/* Number */}
              <span className="text-3xl sm:text-[32px] font-semibold text-white tracking-tight leading-none mb-3 font-sans group-hover:text-[#D4B28C] transition-colors">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals} 
                />
              </span>
              
              {/* Label */}
              <span className="text-[13px] text-white/80 font-medium mb-1.5">
                {stat.label}
              </span>
              
              {/* Subtext */}
              <span className="text-[11px] text-white/40 font-light">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
