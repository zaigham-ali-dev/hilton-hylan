"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Settings2,
  ChevronUp,
  Heart,
  MapPin,
  LayoutGrid,
  List,
  ChevronDown,
} from "lucide-react";
import { ExclusiveCollections } from "@/components/properties/ExclusiveCollections";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

/* ─── Property Data ─── */
const allProperties = [
  {
    id: 1,
    image: "/horizon-estate.png",
    name: "The Horizon Estate",
    price: "$18,900,000",
    priceNum: 18900000,
    location: "Bel Air, California",
    type: "Estate",
    beds: 5,
    baths: 7,
    sqft: "8,200",
    badge: "NEW LISTING",
    amenities: ["Pool", "Smart Home", "Wine Cellar", "Home Theater"],
  },
  {
    id: 2,
    image: "/oceanview-retreat.png",
    name: "Oceanview Retreat",
    price: "$15,750,000",
    priceNum: 15750000,
    location: "Malibu, California",
    type: "Villa",
    beds: 4,
    baths: 6,
    sqft: "6,500",
    amenities: ["Ocean View", "Pool", "Smart Home"],
  },
  {
    id: 3,
    image: "/azure-waterfront.png",
    name: "Azure Waterfront",
    price: "$12,300,000",
    priceNum: 12300000,
    location: "Miami Beach, Florida",
    type: "Modern Home",
    beds: 6,
    baths: 7,
    sqft: "7,100",
    amenities: ["Ocean View", "Pool", "Gym"],
  },
  {
    id: 4,
    image: "/horizon-estate.png",
    name: "The Summit Villa",
    price: "$24,500,000",
    priceNum: 24500000,
    location: "Beverly Hills, California",
    type: "Villa",
    beds: 6,
    baths: 9,
    sqft: "9,500",
    amenities: ["Pool", "Wine Cellar", "Gym", "Home Theater"],
  },
  {
    id: 5,
    image: "/oceanview-retreat.png",
    name: "Sunset Boulevard Estate",
    price: "$21,800,000",
    priceNum: 21800000,
    location: "Hollywood Hills, California",
    type: "Estate",
    beds: 5,
    baths: 6,
    sqft: "7,800",
    amenities: ["Pool", "Smart Home", "Home Theater"],
  },
  {
    id: 6,
    image: "/azure-waterfront.png",
    name: "Skyline Penthouse",
    price: "$17,600,000",
    priceNum: 17600000,
    location: "New York, New York",
    type: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: "5,900",
    amenities: ["Smart Home", "Gym"],
  },
  {
    id: 7,
    image: "/horizon-estate.png",
    name: "Crestview Mansion",
    price: "$28,900,000",
    priceNum: 28900000,
    location: "Beverly Hills, California",
    type: "Estate",
    beds: 7,
    baths: 10,
    sqft: "11,000",
    amenities: ["Pool", "Wine Cellar", "Gym", "Home Theater", "Smart Home"],
  },
  {
    id: 8,
    image: "/oceanview-retreat.png",
    name: "The Palm Residence",
    price: "$13,900,000",
    priceNum: 13900000,
    location: "Palm Beach, Florida",
    type: "Modern Home",
    beds: 5,
    baths: 6,
    sqft: "6,800",
    amenities: ["Pool", "Ocean View"],
  },
  {
    id: 9,
    image: "/azure-waterfront.png",
    name: "Modern Masterpiece",
    price: "$19,750,000",
    priceNum: 19750000,
    location: "Bel Air, California",
    type: "Modern Home",
    beds: 5,
    baths: 6,
    sqft: "8,300",
    amenities: ["Pool", "Smart Home", "Gym"],
  },
];

/* ─── Filter Section Component ─── */
const FilterSection = ({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 px-1 group"
      >
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4B28C]">
          {title}
        </span>
        <div className="relative flex items-center justify-center w-5 h-5 rounded-full group-hover:bg-white/5 transition-colors 
        duration-300">
          <div className="arrow-circle-glow absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
          transition-opacity duration-300" />
          <ChevronUp
            className={`w-3.5 h-3.5 text-[#D4B28C]/60 group-hover:text-[#D4B28C] transition-transform duration-300 
              relative z-10 ${
              !isOpen ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[600px] pb-1" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

/* ─── Checkbox Component ─── */
const FilterCheckbox = ({
  label,
  checked = false,
  onChange,
}: {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}) => (
  <label className="flex items-center gap-2 py-0.5 px-1 cursor-pointer group">
    <div
      className={`w-[14px] h-[14px] rounded-[3px] border-2 flex items-center justify-center transition-all 
        duration-200 ${
        checked
          ? "bg-[#D4B28C] border-[#D4B28C]"
          : "border-white/25 group-hover:border-white/50"
      }`}
      onClick={onChange}
    >
      {checked && (
        <svg
          className="w-2.5 h-2.5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
    <span
      className={`text-[13px] font-light tracking-wide transition-colors duration-200 ${
        checked ? "text-white" : "text-white/60 group-hover:text-white/80"
      }`}
    >
      {label}
    </span>
  </label>
);

const stats = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.
        63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 
        0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39
         1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068
          1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

/* ─── Main Page ─── */
export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [propertyType, setPropertyType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Newest First");
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const clearAllFilters = () => {
    setPropertyType("All Types");
    setBedrooms("Any");
    setBathrooms("Any");
    setAmenities([]);
    setSortBy("Newest First");
  };

  const filteredProperties = allProperties
    .filter((property) => {
      // Property Type Filter
      if (propertyType !== "All Types" && property.type !== propertyType) return false;

      // Bedrooms Filter
      if (bedrooms !== "Any") {
        const minBeds = parseInt(bedrooms.replace("+", ""));
        if (property.beds < minBeds) return false;
      }

      // Bathrooms Filter
      if (bathrooms !== "Any") {
        const minBaths = parseInt(bathrooms.replace("+", ""));
        if (property.baths < minBaths) return false;
      }

      // Amenities Filter
      if (amenities.length > 0) {
        const hasAllAmenities = amenities.every((a) => property.amenities.includes(a));
        if (!hasAllAmenities) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Price: High to Low") return b.priceNum - a.priceNum;
      if (sortBy === "Price: Low to High") return a.priceNum - b.priceNum;
      // "Newest First" relies on default ordering/id
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ═══════════════════════ HERO SECTION (Original) ═══════════════════════ */}
      <div className="relative min-h-[100svh] w-full flex items-center bg-black overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/horizon-estate.png"
            alt="Luxury Properties Background"
            fill
            className="object-cover object-center"
            quality={100}
            unoptimized
            priority
          />
          {/* Subtle overlay to ensure text readability without hiding the image */}
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-16 mt-12 sm:mt-0">
          <div className="max-w-xl xl:max-w-2xl">
            {/* Subheading */}
            <div className="flex items-center gap-3 mb-6">
              {/* Golden Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4B28C] shadow-[0_0_8px_rgba(212,178,140,0.8)]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4B28C]">
                DISCOVER OUR COLLECTION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] text-[#EBE0D0] font-normal mb-8">
              Luxury
              <br />
              Properties
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/50 font-light max-w-md leading-relaxed">
              Explore an exclusive collection of the world&apos;s most extraordinary homes.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ MAIN CONTENT SECTION ═══════════════════════ */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-10 pb-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          {/* ═══════════════════════════════ SIDEBAR ═══════════════════════════════ */}
          <aside className="w-full lg:w-[220px] xl:w-[230px] shrink-0">
          <div className="filter-box-glow rounded-2xl p-4">
            {/* Filters Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4B28C]">
                FILTERS
              </span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={clearAllFilters}
                  className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] uppercase text-[#D4B28C] hover:text-white transition-colors duration-300"
                >
                  CLEAR ALL
                </button>
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-white/15 group-hover:border-white/30 cursor-pointer group">
                  <div className="arrow-circle-glow absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Settings2
                    className="w-3.5 h-3.5 text-[#D4B28C]/70 group-hover:text-[#D4B28C] transition-colors duration-300 relative z-10"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Price Range */}
            <FilterSection title="Price Range">
              <div className="flex flex-col gap-2 px-1">
                {/* Slider Track */}
                <div className="relative w-full h-1 bg-white/10 rounded-full mt-2">
                  <div className="absolute left-[8%] right-[15%] h-full bg-[#D4B28C] rounded-full" />
                  {/* Left Thumb */}
                  <div className="absolute left-[8%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4B28C] border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(212,178,140,0.5)] cursor-pointer" />
                  {/* Right Thumb */}
                  <div className="absolute right-[15%] top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4B28C] border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(212,178,140,0.5)] cursor-pointer" />
                </div>
                {/* Price Input Boxes */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-md px-2 py-2 text-center">
                    <span className="text-[12px] text-white/70 font-medium tracking-wide">
                      $1,000,000
                    </span>
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-md px-2 py-2 text-center">
                    <span className="text-[12px] text-white/70 font-medium tracking-wide">
                      $50,000,000+
                    </span>
                  </div>
                </div>
              </div>
            </FilterSection>

            {/* Property Type */}
            <FilterSection title="Property Type">
              <div className="flex flex-col gap-0">
                {[
                  "All Types",
                  "Villa",
                  "Modern Home",
                  "Penthouse",
                  "Apartment",
                  "Estate",
                ].map((type) => (
                  <FilterCheckbox
                    key={type}
                    label={type}
                    checked={propertyType === type}
                    onChange={() => setPropertyType(type)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Bedrooms */}
            <FilterSection title="Bedrooms">
              <div className="flex flex-col gap-0">
                {["Any", "1+", "2+", "3+", "4+", "5+"].map((opt) => (
                  <FilterCheckbox 
                    key={opt} 
                    label={opt} 
                    checked={bedrooms === opt}
                    onChange={() => setBedrooms(opt)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Bathrooms */}
            <FilterSection title="Bathrooms">
              <div className="flex flex-col gap-0">
                {["Any", "1+", "2+", "3+", "4+", "5+"].map((opt) => (
                  <FilterCheckbox 
                    key={opt} 
                    label={opt} 
                    checked={bathrooms === opt}
                    onChange={() => setBathrooms(opt)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Amenities */}
            <FilterSection title="Amenities">
              <div className="flex flex-col gap-0">
                {[
                  "Pool",
                  "Ocean View",
                  "Smart Home",
                  "Wine Cellar",
                  "Home Theater",
                  "Gym",
                ].map((amenity) => (
                  <FilterCheckbox 
                    key={amenity} 
                    label={amenity} 
                    checked={amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                ))}
              </div>
            </FilterSection>
          </div>
          </aside>

        {/* ═══════════════════════════════ RIGHT CONTENT ═══════════════════════════════ */}
        <div className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4 lg:mb-5">
            {/* Properties Count */}
            <motion.span
              key={filteredProperties.length}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/60"
            >
              {filteredProperties.length} PROPERTIES FOUND
            </motion.span>

            {/* Sort + View Toggle */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="hidden sm:flex items-center gap-2 relative">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40">
                  SORT BY:
                </span>
                <button 
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-1.5 text-[12px] text-white/70 font-medium hover:text-white transition-colors duration-200"
                >
                  {sortBy}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showSortMenu ? "rotate-180" : ""}`} strokeWidth={2} />
                </button>

                {/* Sort Options Menu */}
                {showSortMenu && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                    {["Newest First", "Price: High to Low", "Price: Low to High"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortBy(opt);
                          setShowSortMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[12px] font-medium transition-colors ${
                          sortBy === opt ? "text-[#D4B28C] bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center border border-white/15 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-white/10 text-white"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-white/10 text-white"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  <List className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <motion.div
            key={viewMode + filteredProperties.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`grid gap-3 sm:gap-4 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}
          >
            {filteredProperties.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-white/50 text-lg">No properties found matching your criteria.</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 border border-white/10 hover:border-white/30 rounded-full text-sm text-white/80 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
            {filteredProperties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx * 0.07, 0.5),
                  ease: "easeOut",
                }}
                className={`group bg-[#111111] border border-white/8 rounded-lg overflow-hidden hover:border-[#D4B28C]/30 transition-all duration-500 cursor-pointer ${
                  viewMode === "list" ? "flex flex-col sm:flex-row h-auto sm:h-[180px]" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-full sm:w-[280px] h-[180px] sm:h-full shrink-0" : "aspect-[1.6]"
                }`}>
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Badge */}
                  {property.badge && (
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/15 rounded-md px-3 py-1.5">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                        {property.badge}
                      </span>
                    </div>
                  )}

                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-black/60 transition-all duration-200"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-200 ${
                        favorites.includes(property.id)
                          ? "fill-[#D4B28C] text-[#D4B28C]"
                          : "text-white/70"
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                {/* Card Content */}
                <div className={`p-3 sm:p-4 flex flex-col ${viewMode === "list" ? "flex-1 justify-center" : ""}`}>
                  {/* Name & Price */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-[12px] sm:text-[13px] font-semibold text-white tracking-wide leading-tight">
                      {property.name}
                    </h3>
                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#D4B28C] tracking-wide whitespace-nowrap">
                      {property.price}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin
                      className="w-3 h-3 text-white/30"
                      strokeWidth={1.5}
                    />
                    <span className="text-[12px] sm:text-[13px] text-white/40 font-light tracking-wide">
                      {property.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/8 mb-2.5" />

                  {/* Stats */}
                  <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-white/40 font-light tracking-wider">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} Sq Ft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-[#D4B28C] flex items-center justify-center text-black font-semibold text-[11px] shadow-[0_0_10px_rgba(212,178,140,0.3)]">1</button>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white text-[11px] transition-all">2</button>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white text-[11px] transition-all">3</button>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white text-[11px] transition-all">4</button>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white text-[11px] transition-all">5</button>
            <span className="text-white/40 px-1 text-[11px]">...</span>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white text-[11px] transition-all">21</button>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-20 relative z-10">
        <div className="border border-white/15 rounded-3xl p-6 sm:p-8 lg:px-10 bg-zinc-950/40 backdrop-blur-sm mt-0 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-4 lg:divide-x lg:divide-white/25">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 sm:gap-5 justify-start sm:justify-center py-2 sm:px-4 lg:px-6"
              >
                <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-[#D4B28C] flex-shrink-0 gold-glowing-circle border border-white/5">
                  {stat.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-none font-sans">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wide font-light mt-1.5 font-sans">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ExclusiveCollections />

      <NewsletterSection />

      {/* Hide scrollbar styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        `,
        }}
      />
    </div>
  );
}
