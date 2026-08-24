"use client";

import React from 'react';
import Image from 'next/image';

// 7 locations for sidebar
const locations = [
  { name: 'Beverly Hills', state: 'California, USA' },
  { name: 'Malibu', state: 'California, USA' },
  { name: 'Bel Air', state: 'California, USA' },
  { name: 'Miami', state: 'Florida, USA' },
  { name: 'New York', state: 'New York, USA' },
  { name: 'Palm Beach', state: 'Florida, USA' },
  { name: 'San Francisco', state: 'California, USA' },
];

// Pin positions on actual map image
const pins = [
  { name: 'San Francisco', top: '26%', left: '15%' },
  { name: 'Beverly Hills', top: '38%', left: '16%' },
  { name: 'Malibu', top: '44%', left: '15%' },
  { name: 'Bel Air', top: '50%', left: '19%' },
  { name: 'New York', top: '24%', left: '83%' },
  { name: 'Palm Beach', top: '52%', left: '78%' },
  { name: 'Miami', top: '62%', left: '76%' },
];

export default function LocationsMap() {
  return (
    <section className="bg-[#050607] py-0 px-0">
      {/* Heading Outside Container */}
      <h2 className="text-[10px] md:text-xs font-medium tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#D4B28C] mb-8 md:mb-10 pl-12 md:pl-16 lg:pl-20">
        EXPLORE ON MAP
      </h2>

      {/* Main Container with Sidebar + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT SIDEBAR - Location List */}
        <div className="lg:col-span-3 space-y-1 pl-4 md:pl-6 lg:pl-8">
          {locations.map((location) => (
            <button
              key={location.name}
              className="w-full group flex items-center justify-between p-3.5 md:p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <div className="flex items-center gap-4 pl-14">
                {/* Location Pin Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 text-[#D4B28C] flex-shrink-0"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" 
                  />
                </svg>
                
                <div className="text-left">
                  <h3 className="text-white text-sm font-medium">{location.name}</h3>
                  <p className="text-xs text-white/40">{location.state}</p>
                </div>
              </div>
              
              {/* Arrow Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m8.25 4.5 7.5 7.5-7.5 7.5" 
                />
              </svg>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE - Map Image with Pins */}
        <div className="lg:col-span-9 relative h-[400px] md:h-[400px] lg:h-[530px] rounded-[16px] 
        overflow-hidden border border-[rgba(255,255,255,0.10)] bg-[#08090a]">
          
          {/* Map Image from public/pic/map.jpg */}
          <div className="absolute inset-0">
            <Image
              src="/pic/map.jpg"
              alt="USA Map"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dark overlay for better pin visibility */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          {/* Location Pins on Map */}
          {pins.map((pin) => (
            <div
              key={pin.name}
              className="absolute z-20 flex items-center gap-2.5 cursor-pointer group transition-all duration-300 hover:scale-110"
              style={{ top: pin.top, left: pin.left }}
            >
              {/* Golden Radial Glow */}
              <div 
                className="absolute -inset-6 rounded-full opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  background: 'radial-gradient(circle, rgba(212,178,140,0.5) 0%, rgba(212,178,140,0.3) 30%, transparent 65%)'
                }}
              />
              
              {/* Location Pin Icon */}
                <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="relative flex-shrink-0 drop-shadow-[0_0_12px_rgba(212,178,140,0.8)]"
              >
                <path 
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0
                   9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                  fill="#D4B28C"
                />
              </svg>
              
              {/* Location Label */}
              <span className="text-[12px] md:text-[13px] font-medium tracking-wide whitespace-nowrap text-white 
              drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                {pin.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Label */}
      <h2 className="text-[10px] md:text-xs font-medium tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#D4B28C]
       mt-12 md:mt-16 pl-12 md:pl-16 lg:pl-20">
        EXPLORE ON LOCATION
        
      </h2>
    </section>
  );
}
