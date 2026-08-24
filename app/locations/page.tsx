import React from "react";
import LocationsMap from "@/components/locations/LocationsMap";
import { MarketInsights } from "@/components/shared/MarketInsights";
import { ExploreByLifestyle } from "@/components/shared/ExploreByLifestyle";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/Video Establishing Wave Flow.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 pt-32 pb-20">
          <div className="max-w-2xl">
            {/* Small Tagline */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#D4B28C]">
              EXPLORE OUR WORLD
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Discover
              <br />
              <span className="text-[#D4B28C]">Extraordinary</span>
              <br />
              Locations
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/50 font-light mb-10 max-w-lg leading-relaxed">
              From iconic neighborhoods to hidden gems,
              <br />
              find the perfect place to call home.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by city, neighborhood or ZIP code"
                className="w-full bg-black/30 backdrop-blur-sm border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4B28C] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="bg-zinc-950 pt-16 pb-16 md:pb-24 px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#D4B28C]">
            FEATURED DESTINATIONS
          </h2>
          <button className="flex items-center gap-2 text-xs text-white/60 hover:text-[#D4B28C] transition-colors uppercase tracking-wider group">
            VIEW ALL LOCATIONS
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Beverly Hills */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('/neighborhoods/beverly-hills.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Beverly Hills</h3>
              <p className="text-xs text-white/50 mb-4">California, USA</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">250+ Properties</span>
                <span className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Malibu */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('/neighborhoods/malibu.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Malibu</h3>
              <p className="text-xs text-white/50 mb-4">California, USA</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">180+ Properties</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Bel Air */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('/neighborhoods/bel-air.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Bel Air</h3>
              <p className="text-xs text-white/50 mb-4">California, USA</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">120+ Properties</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Hollywood Hills */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('/neighborhoods/hollywood-hills.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Hollywood Hills</h3>
              <p className="text-xs text-white/50 mb-4">California, USA</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">95+ Properties</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Miami */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('/neighborhoods/miami.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Miami</h3>
              <p className="text-xs text-white/50 mb-4">Florida, USA</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">210+ Properties</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore On Map Section - Using Reusable  Component */}
      <LocationsMap />
      
      {/* Market Insights */}
      <section className="bg-[#050607] pt-10 pb-20">
        <MarketInsights />
      </section>

      {/* Explore by Lifestyle */}
      <section className="bg-[#050607] pb-24">
        <ExploreByLifestyle />
      </section>

      {/* Newsletter / Stay Ahead */}
      <NewsletterSection />
    </div>
  );
}
