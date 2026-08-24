"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const handleLogoClick = () => {
    // If already on home page, smoothly scroll to top
    if (pathname === "/") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [lenis, menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[1px]"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#D4B28C] font-light tracking-widest transition-transform group-hover:scale-105 duration-300">
            V
          </div>
          <div className="flex flex-col border-l border-white/20 pl-2.5 sm:pl-3">
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-white uppercase font-sans">
              Vistara
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] font-medium tracking-[0.3em] text-[#D4B28C] uppercase font-sans">
              Estates
            </span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <Navbar />

        {/* CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden md:inline-flex items-center justify-center rounded-full text-[10px] lg:text-xs tracking-[0.15em] font-semibold py-2 sm:py-2.5 px-4 sm:px-6 bg-[#D4B28C] hover:bg-[#C29F79] text-black transition-all duration-300 uppercase">
            Book a Consultation
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-black/20 hover:bg-white/10 hover:border-white/40 text-white transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Right Side Slide-In Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full sm:w-[480px] bg-black border-l border-white/10 p-8 sm:p-12 md:p-16 flex flex-col justify-between transition-transform duration-500 ease-out z-10 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Bar with Icons */}
          <div className="flex justify-end items-center gap-6 text-white/70">
            {/* Search Icon */}
            <button className="hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Mail Icon */}
            <button className="hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            {/* Close Icon (X) */}
            <button
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-300 ml-2"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Menu Body (2-Column Grid matching reference layout) */}
          <div className="my-auto grid grid-cols-2 gap-x-8 gap-y-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              {/* Properties Section */}
              <div className="flex flex-col">
                <Link 
                  href="/properties" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  Properties
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/properties" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    For Sale
                  </Link>
                  <Link href="/properties" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Leases
                  </Link>
                  <Link href="/properties" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Open House
                  </Link>
                </div>
              </div>

              {/* Locations Section */}
              <div className="flex flex-col">
                <Link 
                  href="/locations" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  Locations
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Beverly Hills
                  </Link>
                  <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Malibu
                  </Link>
                  <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Miami Beach
                  </Link>
                </div>
              </div>

              {/* Sell Section */}
              <div className="flex flex-col">
                <Link 
                  href="/sell" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  Sell
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/sell" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Valuation
                  </Link>
                  <Link href="/sell" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              {/* About Section */}
              <div className="flex flex-col">
                <Link 
                  href="/about" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  About
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Our Story
                  </Link>
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Leadership
                  </Link>
                </div>
              </div>

              {/* Journal Section */}
              <div className="flex flex-col">
                <Link 
                  href="/journal" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  Journal
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/journal" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Latest Updates
                  </Link>
                  <Link href="/journal" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    In The Press
                  </Link>
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col">
                <Link 
                  href="/contact" 
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-normal text-white hover:text-[#D4B28C] transition-colors duration-300"
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2.5 mt-4">
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
                    Get In Touch
                  </Link>
                  <button 
                    onClick={() => setMenuOpen(false)}
                    className="text-left text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider / Footer element inside drawer */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-[9px] tracking-wider text-white/30 uppercase">
              Vistara Estates © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
