import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";
import { JournalArticlesGrid } from "@/components/journal/JournalArticlesGrid";
import { MostPopularReads } from "@/components/journal/MostPopularReads";

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[640px] max-h-[1000px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/journal-hero-bg.jpg"
            alt="Luxury Villa at Night"
            fill
            className="object-cover object-right lg:object-center brightness-95 contrast-105"
            priority
          />
          {/* Dark gradient overlay on the left for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          {/* Subtle top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        </div>

        {/* Decorative Golden Wireframe V Emblem with Compass Ring */}
        <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] pointer-events-none opacity-40 z-[5]">
          <svg viewBox="0 0 300 300" className="w-full h-full text-[#D4B28C]" fill="none">
            {/* Outer dotted compass circle */}
            <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            
            {/* Cardinal tick lines */}
            <line x1="150" y1="5" x2="150" y2="25" stroke="currentColor" strokeWidth="1.2" />
            <line x1="150" y1="275" x2="150" y2="295" stroke="currentColor" strokeWidth="1.2" />
            <line x1="5" y1="150" x2="25" y2="150" stroke="currentColor" strokeWidth="1.2" />
            <line x1="275" y1="150" x2="295" y2="150" stroke="currentColor" strokeWidth="1.2" />
            
            {/* Stylized wireframe Vistara 'V' */}
            <path 
              d="M100 85 L150 215 L200 85 M118 85 L150 185 L182 85" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              opacity="0.8" 
            />

            {/* Glowing traveling dot on the outer ring */}
            <circle cx="270" cy="100" r="4.5" fill="#F3E7D7" className="drop-shadow-[0_0_8px_#D4B28C]">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 150"
                to="360 150 150"
                dur="16s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-[1800px] mx-auto">
          <div className="max-w-[580px]">
            {/* Journal Tag */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B28C] shadow-[0_0_8px_#D4B28C]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4B28C]">
                JOURNAL
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif text-white leading-[1.1] tracking-tight mb-6">
              Insights That
              <br />
              <span className="text-[#D4B28C]">Move You Forward.</span>
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-white/70 font-light leading-relaxed max-w-[480px] mb-10">
              Expert perspectives, market trends, and lifestyle stories that inspire smarter decisions and elevate the way you think about luxury living.
            </p>

            {/* CTA Button */}
            <Link
              href="#stories"
              className="group inline-flex items-center gap-3 border border-[#D4B28C]/40 hover:border-[#D4B28C] text-[#D4B28C] hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#D4B28C]/10 shadow-xl shadow-black/50"
            >
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                EXPLORE STORIES
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="bg-zinc-950 border-t border-white/10 sticky top-[72px] z-30">
        <div className="max-w-[1800px] mx-auto flex items-center justify-center px-6">
          {/* Tab Items */}
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {[
              { label: "ALL STORIES", active: true },
              { label: "MARKET INSIGHTS", active: false },
              { label: "LIFESTYLE", active: false },
              { label: "INVESTMENT GUIDE", active: false },
              { label: "DESIGN & ARCHITECTURE", active: false },
              { label: "NEIGHBORHOOD SPOTLIGHTS", active: false },
            ].map((tab) => (
              <button
                key={tab.label}
                className={`relative text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase whitespace-nowrap py-5 px-5 sm:px-6 transition-colors duration-300 ${
                  tab.active
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D4B28C]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Icon */}
          <button className="w-10 h-10 rounded-full border border-white/20 hover:border-[#D4B28C]/50 flex items-center justify-center text-white/50 hover:text-[#D4B28C] transition-all duration-300 shrink-0 ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <JournalArticlesGrid />

      {/* Most Popular Reads Section */}
      <MostPopularReads />

      {/* Newsletter Section */}
      <div className="pb-16 pt-12">
        <NewsletterSection />
      </div>
    </div>
  );
}
