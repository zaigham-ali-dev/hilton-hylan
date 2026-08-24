"use client";

import React from "react";
import Image from "next/image";

export function ContactFormSection() {
  return (
    <section className="bg-zinc-950 py-16 md:py-20 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        {/* Make the grid stretch equal heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: Contact Form */}
          <div className="relative border border-white/10 rounded-sm p-8 sm:p-10 md:p-12 bg-zinc-950 flex flex-col">
            {/* Gold corner accent — top-left */}
            <div className="absolute top-0 left-0 w-6 h-6">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4B28C]" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#D4B28C]" />
            </div>
            {/* Gold corner accent — bottom-right */}
            <div className="absolute bottom-0 right-0 w-6 h-6">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#D4B28C]" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[#D4B28C]" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-[34px] font-serif text-white leading-tight mb-3">
              Send Us a Message
            </h2>
            <p className="text-[13px] sm:text-[14px] text-white/55 font-light leading-relaxed mb-8 max-w-[420px]">
              Fill out the form below and one of our specialists will get back to you shortly.
            </p>

            {/* Form */}
            <form className="space-y-4 flex-1 flex flex-col">
              {/* Row 1: Full Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3.5 text-[13px] text-white placeholder:text-white/40 focus:border-[#D4B28C]/60 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3.5 text-[13px] text-white placeholder:text-white/40 focus:border-[#D4B28C]/60 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Row 2: Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3.5 text-[13px] text-white placeholder:text-white/40 focus:border-[#D4B28C]/60 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3.5 text-[13px] text-white placeholder:text-white/40 focus:border-[#D4B28C]/60 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Row 3: Textarea — flex-1 to fill remaining space */}
              <textarea
                placeholder="How can we help you?"
                className="w-full flex-1 min-h-[140px] bg-transparent border border-white/15 rounded-sm px-4 py-3.5 text-[13px] text-white placeholder:text-white/40 focus:border-[#D4B28C]/60 focus:outline-none transition-colors duration-300 resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#D4B28C] hover:bg-[#c9a57d] text-zinc-950 font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase py-4 rounded-sm transition-colors duration-300 group mt-auto"
              >
                SEND MESSAGE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right: Full-height image with text overlaid at top */}
          <div className="relative min-h-[500px] lg:min-h-0 rounded-xl overflow-hidden">
            {/* Full-height Background Image starting from top */}
            <Image
              src="/contact-form-decor-dark.jpg"
              alt="Luxury desk with dark olive branches and leather notebook"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark gradient from top so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/10" />

            {/* Text overlaid at top */}
            <div className="relative z-10 p-8 sm:p-10 md:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif text-white leading-[1.18] mb-5">
                More Than a Message,
                <br />
                It&apos;s the Beginning of a
                <br />
                <span className="text-[#D4B28C] italic">Great Opportunity.</span>
              </h2>

              {/* Gold divider */}
              <div className="w-10 h-[2px] bg-[#D4B28C] mb-5" />

              <p className="text-[13px] sm:text-[14px] text-white/70 font-light leading-relaxed max-w-[420px]">
                Your goals are unique, and so is our approach. Tell us about your vision—we&apos;ll handle
                the rest with care and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
