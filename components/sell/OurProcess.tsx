"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We learn about your goals and evaluate your property.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pricing Strategy",
    description: "We create a data-driven strategy to position your home perfectly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 6-6" />
        <path d="M17 10h3v3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Marketing",
    description: "Your home is showcased with premium marketing across all channels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15V6" />
        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M12 12H3" />
        <path d="M16 6H3" />
        <path d="M12 18H3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Showings",
    description: "We manage showings and qualify serious buyers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Negotiation",
    description: "We negotiate the best terms and highest price.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Sold",
    description: "We guide you to a smooth and successful closing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
      </svg>
    ),
  },
];

export function OurProcess() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-3 md:mb-4">
            OUR PROVEN PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif tracking-tight leading-tight">
            From Strategy to Sold.
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* ================= DESKTOP HORIZONTAL TIMELINE (lg+) ================= */}
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[32px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-[#D4B28C]/10 via-[#D4B28C]/30 to-[#D4B28C]/10 z-[1]">
            {/* Traveling Dots */}
            <div className="animate-timeline-dot-horizontal absolute top-1/2 z-[5] size-[9px] -translate-y-1/2 rounded-full bg-[#D4B28C]" />
            <div className="animate-timeline-dot-horizontal [animation-delay:2250ms] absolute top-1/2 z-[5] size-[9px] -translate-y-1/2 rounded-full bg-[#D4B28C]" />
          </div>

          {/* Bright static dots at each icon position */}
          <div className="hidden lg:flex absolute top-[32px] left-[8%] right-[8%] justify-between z-[3] pointer-events-none">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className="size-2.5 -translate-y-1/2 rounded-full bg-[#D4B28C] shadow-[0_0_8px_3px_rgba(212,178,140,0.5),0_0_16px_6px_rgba(212,178,140,0.2)]"
              />
            ))}
          </div>

          {/* ================= MOBILE/TABLET VERTICAL TIMELINE (<lg) ================= */}
          {/* Vertical Connecting Line */}
          <div className="block lg:hidden absolute top-[32px] bottom-[110px] sm:bottom-[100px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#D4B28C]/10 via-[#D4B28C]/30 to-[#D4B28C]/10 z-[1]">
            {/* Traveling Dots along vertical axis */}
            <div className="animate-timeline-dot-vertical absolute left-1/2 z-[5] size-[9px] -translate-x-1/2 rounded-full bg-[#D4B28C]" />
            <div className="animate-timeline-dot-vertical [animation-delay:2500ms] absolute left-1/2 z-[5] size-[9px] -translate-x-1/2 rounded-full bg-[#D4B28C]" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-14 sm:gap-16 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-[4]">
                {/* Icon Circle */}
                <div className="mb-5 flex size-16 items-center justify-center rounded-full border border-[#D4B28C]/40 bg-[#0a0a0a] text-[#D4B28C] shadow-[0_0_15px_rgba(212,178,140,0.12)] transition-all duration-300 hover:border-[#D4B28C]/80 hover:shadow-[0_0_20px_rgba(212,178,140,0.35)]">
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className="text-[11px] text-white/40 font-light tracking-wider mb-1.5">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-[#D4B28C] text-[14px] font-medium tracking-wide mb-2.5 md:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-white/50 font-light leading-relaxed max-w-[220px] lg:max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
