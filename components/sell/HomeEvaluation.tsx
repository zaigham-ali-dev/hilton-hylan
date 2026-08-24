"use client";

import React from "react";
import Image from "next/image";

const benefits = [
  "Accurate market analysis",
  "Comparable sales report",
  "Expert pricing strategy",
  "No obligation. 100% confidential.",
];

export function HomeEvaluation() {
  return (
    <section className="py-20 md:py-28 bg-zinc-950 text-white relative">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        {/* Main Banner Container with Background Image */}
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl min-h-[540px] lg:min-h-[580px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home-evaluation-bg.jpg"
              alt="Luxury penthouse interior at night"
              fill
              className="object-cover object-center brightness-105 contrast-105"
              quality={95}
              priority
            />
            {/* Soft gradient only on the far left for text readability, keeping the couch, lamp, and right side bright */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 via-45% to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Column */}
            <div className="max-w-xl">
              {/* Badge Label */}
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4B28C] mb-4 block">
                WHAT YOUR HOME COULD BE WORTH
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif text-white tracking-tight leading-[1.15] mb-8">
                Get a Complimentary Home Evaluation
              </h2>

              {/* Bullet Points */}
              <div className="space-y-3.5 mb-10">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    {/* Gold Checkmark */}
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[#D4B28C] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-[15px] text-white/85 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group flex items-center gap-3 bg-[#D4B28C] hover:bg-[#c3a17d] rounded-full px-8 py-4 transition-colors duration-300 shadow-xl shadow-black/40">
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide uppercase text-[#111111]">
                  GET MY FREE HOME EVALUATION
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#111111] group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Right Column: Floating Valuation Glass Card (Transparent backdrop-blur matching reference) */}
            <div className="w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] shrink-0">
              <div className="bg-black/35 backdrop-blur-xl border border-white/15 rounded-[24px] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                {/* Top Badge */}
                <div className="inline-block bg-white/10 border border-white/10 rounded-full px-3.5 py-1 text-[11px] text-white/80 font-light mb-4">
                  Example Estimate
                </div>

                {/* Property Address */}
                <p className="text-[13px] text-white/70 font-light mb-1">
                  123 Ocean View Drive
                </p>

                {/* Estimated Price */}
                <h3 className="text-3xl sm:text-[38px] lg:text-[42px] font-serif font-normal text-white tracking-tight leading-none mb-1.5">
                  $4,250,000
                </h3>

                {/* Subtitle */}
                <p className="text-[11px] text-white/45 font-light mb-5">
                  Estimated Market Value
                </p>

                {/* Property Specs */}
                <div className="flex items-center gap-5 text-[12px] text-white/60 font-light mb-5">
                  <span>4 Beds</span>
                  <span>5 Baths</span>
                  <span>4,200 Sq Ft</span>
                </div>

                {/* Rising Golden Curve Graph matching the reference screenshot */}
                <div className="relative w-full h-[110px]">
                  <svg
                    viewBox="0 0 320 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                  >
                    {/* Dotted Grid lines */}
                    <line x1="20" y1="30" x2="300" y2="30" stroke="rgba(212,178,140,0.12)" strokeDasharray="3 3" />
                    <line x1="20" y1="65" x2="300" y2="65" stroke="rgba(212,178,140,0.12)" strokeDasharray="3 3" />
                    <line x1="20" y1="100" x2="300" y2="100" stroke="rgba(212,178,140,0.12)" strokeDasharray="3 3" />
                    
                    <line x1="80" y1="15" x2="80" y2="105" stroke="rgba(212,178,140,0.08)" strokeDasharray="3 3" />
                    <line x1="160" y1="15" x2="160" y2="105" stroke="rgba(212,178,140,0.08)" strokeDasharray="3 3" />
                    <line x1="240" y1="15" x2="240" y2="105" stroke="rgba(212,178,140,0.08)" strokeDasharray="3 3" />

                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id="goldCurveFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4B28C" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#D4B28C" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#D4B28C" stopOpacity="0" />
                      </linearGradient>
                      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Gradient Area under curve */}
                    <path
                      d="M 20 100 C 60 95, 100 82, 140 85 C 180 88, 220 60, 260 35 C 275 25, 290 18, 298 15 L 298 105 L 20 105 Z"
                      fill="url(#goldCurveFill)"
                    />

                    {/* Smooth S-curve Glowing Line */}
                    <path
                      d="M 20 100 C 60 95, 100 82, 140 85 C 180 88, 220 60, 260 35 C 275 25, 290 18, 298 15"
                      stroke="#D4B28C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      filter="url(#goldGlow)"
                    />

                    {/* Bright Glowing Dot at the tip */}
                    <circle
                      cx="298"
                      cy="15"
                      r="5.5"
                      fill="#D4B28C"
                      className="drop-shadow-[0_0_10px_#D4B28C] drop-shadow-[0_0_18px_rgba(212,178,140,0.8)]"
                    />
                    <circle
                      cx="298"
                      cy="15"
                      r="10"
                      fill="#D4B28C"
                      fillOpacity="0.25"
                      className="animate-ping"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
