"use client";
import React from "react";
import Image from "next/image";

interface Property {
  id: number;
  image: string;
  location: string;
  title: string;
  price: string;
  badge?: string;
  showHeart?: boolean;
}

export const FeaturedProperties: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      image: "/horizon-estate.png",
      location: "Bel Air, California",
      title: "The Horizon Estate",
      price: "$18,900,000",
      badge: "NEW LISTING",
    },
    {
      id: 2,
      image: "/oceanview-retreat.png",
      location: "Malibu, California",
      title: "Oceanview Retreat",
      price: "$15,750,000",
      showHeart: true,
    },
    {
      id: 3,
      image: "/azure-waterfront.png",
      location: "Miami Beach, Florida",
      title: "Azure Waterfront",
      price: "$12,300,000",
    },
  ];

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      value: "$3.2B+",
      label: "Total Sales",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5l-3-1m-3.182-5.182a1.5 1.5 0 00-2.28 0l-7.5 7.5a1.5 1.5 0 00-.36 1.708l1.5 3a1.5 1.5 0 001.242.792h9.792a1.5 1.5 0 001.242-.792l1.5-3a1.5 1.5 0 00-.36-1.708l-7.5-7.5z" />
        </svg>
      ),
      value: "1,250+",
      label: "Properties Sold",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gC4.5 6.63 7.87 3.5 12 3.5s7.5 3.13 7.5 7.0c0 7.142" />
        </svg>
      ),
      value: "30+",
      label: "Global Locations",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0012.25 19c-1.238 0-2.424.24-3.517.674m0-.001A9.337 9.337 0 0112 18.75c.82 0 1.611.105 2.37.302m-7.25.109v-.003c0-1.113.285-2.16.786-3.07M12 18.75a9.337 9.337 0 00-4.121-.952 4.125 4.125 0 00-7.533 2.493M12 18.75v-.003c0-1.113-.285-2.16-.786-3.07M12 18.75v.109c0 .38-.022.756-.064 1.127M12 18.75c-.82 0-1.611.105-2.37.302m0 0a9.38 9.38 0 00-2.625.372c-.886.125-1.747.334-2.568.618M12 18.75v.109c0 .38-.022.756-.064 1.127m0 0A9.337 9.337 0 019 19.128M12 12a3 3 0 100-6 3 3 0 000 6zm6.5-1.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM5.75 9.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      value: "350+",
      label: "Happy Clients",
    },
  ];

  return (
    <section className="bg-black py-20 px-5 sm:px-8 md:px-12 lg:px-16 text-white border-t border-white/5 relative overflow-hidden">
      {/* Glow highlight inside background */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#D4B28C]/2 filter blur-[150px] pointer-events-none" />
      
      <div className="w-full flex flex-col gap-10 md:gap-14">
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5 md:gap-2.5">
            <span className="text-[10px] md:text-xs font-medium tracking-[0.35em] uppercase text-[#D4B28C]">
              HANDPICKED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-tight tracking-wide">
              Featured Properties
            </h2>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3.5">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/50 bg-black/20 hover:bg-white/5 text-white/70 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D4B28C] hover:bg-[#c5a37d] text-black transition-all duration-300">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Row: Cards + Vertical View All Label */}
        <div className="flex gap-6 lg:gap-8 items-stretch">
          {/* Main Grid for Cards - Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 flex-1">
            {properties.map((item) => (
              <div
                key={item.id}
                className="group card-border-glow relative rounded-3xl p-[2px] h-[240px] sm:h-[260px] md:h-[280px] lg:h-[290px] xl:h-[310px] 2xl:h-[320px] cursor-pointer"
              >
                <div className="card-border-glow-inner relative rounded-[23px] overflow-hidden bg-zinc-950 flex flex-col h-full w-full">
                  {/* Property Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={item.id === 1}
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    {/* Subtle vignette/gradient overlay inside card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                  </div>

                  {/* Badge (e.g. New Listing) */}
                  {item.badge && (
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-black/60 backdrop-blur-md text-white border border-white/15 text-[8px] sm:text-[9px] font-semibold tracking-[0.15em] px-3.5 py-1.5 rounded-full uppercase">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Heart Button (e.g. Wishlist) */}
                  {item.showHeart && (
                    <button className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                  )}

                  {/* Text overlays at bottom */}
                  <div className="relative z-10 mt-auto p-5 sm:p-6 lg:p-7 flex items-end justify-between gap-4">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] sm:text-xs text-white/60 tracking-wider font-light">
                        {item.location}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-serif font-normal text-white mt-1 group-hover:text-[#D4B28C] transition-colors duration-300 truncate">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3.5 flex-shrink-0">
                      <span className="text-[13px] sm:text-[15px] lg:text-base font-semibold text-white/95 tracking-wide">
                        {item.price}
                      </span>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 bg-black/35 backdrop-blur-[2px] flex items-center justify-center text-white group-hover:bg-[#D4B28C] group-hover:border-[#D4B28C] group-hover:text-black transition-all duration-500">
                        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right vertical line + "VIEW ALL" rotated 90 degrees */}
          <div className="hidden xl:flex flex-col items-center justify-center gap-6 relative px-4 border-l border-white/25 select-none">
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-semibold tracking-[0.4em] text-white/40 uppercase whitespace-nowrap">
              VIEW ALL
            </span>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="border border-white/25 rounded-3xl p-6 sm:p-8 lg:px-10 bg-zinc-950/20 backdrop-blur-sm mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-4 lg:divide-x lg:divide-white/25">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 sm:gap-5 justify-start sm:justify-center py-2 sm:px-4 lg:px-6"
              >
                {/* Circle Icon Container with Luxury Pulsing Gold Glow */}
                <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-[#D4B28C] flex-shrink-0 gold-glowing-circle">
                  {stat.icon}
                </div>
                {/* Stats Info */}
                <div className="flex flex-col min-w-0">
                  <span className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-white tracking-tight leading-none font-sans">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/50 tracking-wide font-light mt-1.5 font-sans">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
