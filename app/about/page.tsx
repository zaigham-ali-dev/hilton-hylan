import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutStatsBanner } from "@/components/about/AboutStatsBanner";
import { OurValues } from "@/components/about/OurValues";
import { MissionVision } from "@/components/about/MissionVision";
import { OurLeadership } from "@/components/about/OurLeadership";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section - Full viewport height */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero-bg.jpg"
            alt="Luxury Estate"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay - heavier on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          {/* Top subtle fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[550px]">
              {/* Label */}
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4B28C] mb-5 block">
                OUR STORY
              </span>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-serif text-white leading-[1.1] tracking-tight mb-6">
                Redefining Luxury.
                <br />
                Building{" "}
                <span className="text-[#D4B28C] italic">Legacies.</span>
              </h1>

              {/* Gold divider line */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-[#D4B28C] to-[#D4B28C]/30 mb-7" />

              {/* Description */}
              <p className="text-[15px] md:text-[16px] text-white/65 font-light leading-relaxed mb-10 max-w-[420px]">
                Vistara Estates is a global luxury real estate advisory firm
                dedicated to connecting extraordinary properties with
                extraordinary people.
              </p>

              {/* CTA Button */}
              <Link
                href="/about#story"
                className="group inline-flex items-center gap-3 border border-[#D4B28C]/40 hover:border-[#D4B28C] text-[#D4B28C] hover:text-white px-7 py-4 rounded-full transition-all duration-300 hover:bg-[#D4B28C]/10"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                  DISCOVER OUR STORY
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
        </div>
      </section>

      {/* Stats Banner Section */}
      <AboutStatsBanner />

      {/* Our Values Section */}
      <OurValues />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Our Leadership Section */}
      <OurLeadership />

      {/* Newsletter Section */}
      <div className="pb-16">
        <NewsletterSection />
      </div>
    </div>
  );
}
