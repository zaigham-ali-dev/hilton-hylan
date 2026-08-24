"use client";

import React from "react";
import Image from "next/image";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";
import { ContactInfoBanner } from "@/components/contact/ContactInfoBanner";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { OurOfficesSection } from "@/components/contact/OurOfficesSection";

const contactFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8V5.5L12 2l9 3.5V12z" />
      </svg>
    ),
    line1: "Trusted",
    line2: "Experts",
    delayClass: "[animation-delay:0ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:400ms] w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    line1: "Personalized",
    line2: "Approach",
    delayClass: "[animation-delay:400ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:800ms] w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
        <path strokeLinecap="round" d="M12 2v2m0 16v2M2 12h2m16 0h2" />
      </svg>
    ),
    line1: "Results",
    line2: "That Matter",
    delayClass: "[animation-delay:800ms]",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[640px] max-h-[1000px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero-bg.jpg"
            alt="Luxury Villa at Dusk"
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

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-[1800px] mx-auto">
          <div className="max-w-[560px]">
            {/* Get In Touch Tag */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B28C] shadow-[0_0_8px_#D4B28C]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4B28C]">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif text-white leading-[1.12] tracking-tight mb-6">
              We&apos;re Here to
              <br />
              Help You{" "}
              <span className="text-[#D4B28C]">Move</span>
              <br />
              <span className="text-[#D4B28C]">Forward.</span>
            </h1>

            {/* Gold divider line */}
            <div className="w-12 h-[2px] bg-[#D4B28C] mb-6" />

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/70 font-light leading-relaxed max-w-[460px] mb-12">
              Whether you&apos;re looking to buy, sell, or invest, our team of luxury real estate experts is ready to assist you with tailored guidance.
            </p>

            {/* 3 Badges at Bottom */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
              {contactFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 group cursor-default">
                  {/* Glowing Icon Circle */}
                  <div className={`animate-gold-pulse-consistent ${item.delayClass} w-11 h-11 rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] shrink-0 bg-gradient-to-b from-[#D4B28C]/10 to-transparent group-hover:scale-105 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  {/* 2-line Label */}
                  <div className="flex flex-col">
                    <span className="text-[12px] sm:text-[13px] font-medium text-white/90 leading-tight block">
                      {item.line1}
                    </span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-white/90 leading-tight block">
                      {item.line2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <ContactInfoBanner />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Our Offices Section */}
      <OurOfficesSection />

      {/* Newsletter Section */}
      <div className="pb-16 pt-16">
        <NewsletterSection />
      </div>
    </div>
  );
}
