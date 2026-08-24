import React from "react";
import Image from "next/image";
import { SellStatsBanner } from "@/components/sell/SellStatsBanner";
import { WhySellWithUs } from "@/components/sell/WhySellWithUs";
import { OurProcess } from "@/components/sell/OurProcess";
import { HomeEvaluation } from "@/components/sell/HomeEvaluation";
import { RecentSuccessStories } from "@/components/sell/RecentSuccessStories";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export default function SellPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sell-hero-bg.jpg"
            alt="Luxury modern mansion with pool at dusk"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 pt-40 pb-32 lg:pb-40">
          <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Gold Label */}
              <div className="flex items-center gap-2.5 mb-7">
                <span className="text-[#D4B28C] text-sm">✦</span>
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[#D4B28C]">
                  SELL WITH CONFIDENCE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[42px] md:text-6xl lg:text-[72px] font-serif text-white mb-6 leading-[1.1] tracking-tight">
                We Sell More.
                <br />
                Because We <span className="text-[#D4B28C]">Do More.</span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-white/55 font-light mb-10 max-w-lg leading-relaxed">
                A powerful combination of local expertise,
                <br className="hidden sm:block" />
                global reach, and innovative strategy to get
                <br className="hidden sm:block" />
                you exceptional results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-5">
                {/* Get a Home Valuation Button */}
                <button className="group flex items-center gap-3 bg-[#D4B28C] hover:bg-[#c3a17d] rounded-full px-7 py-3.5 transition-colors duration-300">
                  <span className="text-[12px] font-semibold tracking-wide uppercase text-[#1a1a1a]">
                    GET A HOME VALUATION
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#1a1a1a] group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>

                {/* Watch Our Process */}
                <button className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <span className="w-12 h-12 rounded-full border border-[#D4B28C]/30 bg-[#0c0c0c] flex items-center justify-center group-hover:border-[#D4B28C]/60 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#D4B28C"
                      className="w-4 h-4 ml-1"
                    >
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[12px] font-semibold tracking-wide uppercase text-white">
                    WATCH OUR PROCESS
                  </span>
                </button>
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="lg:mb-2">
              <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-start gap-6 max-w-[340px]">
                {/* Left Column: Icon & Trusted */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-xl border border-[#D4B28C]/30 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4B28C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7"
                    >
                      <path d="M4 20h16" />
                      <path d="M6 20v-4" />
                      <path d="M11 20v-8" />
                      <path d="M16 20v-6" />
                      <path d="M4 13l5-5 4 4 7-7" />
                      <path d="M17 5h3v3" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium tracking-wide text-[#D4B28C]">
                    Trusted
                  </span>
                </div>

                {/* Right Column: Stats */}
                <div className="flex flex-col pt-1">
                  <p className="text-[12px] text-[#D4B28C]/80 font-medium tracking-wider mb-2">
                    Proven Performance
                  </p>
                  <span className="text-[34px] font-semibold text-white tracking-tight leading-none mb-3">
                    $3.2B+
                  </span>
                  <p className="text-[13px] text-white/50 font-light leading-snug">
                    Total Sales Volume
                    <br />
                    by sellers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner overlapping the hero section */}
      <SellStatsBanner />

      {/* Why Sell With Us Section */}
      <WhySellWithUs />

      {/* Our Proven Process Section */}
      <OurProcess />

      {/* Home Evaluation Section */}
      <HomeEvaluation />

      {/* Recent Success Stories Section */}
      <RecentSuccessStories />

      {/* Newsletter Signup Section */}
      <NewsletterSection />
    </div>
  );
}
