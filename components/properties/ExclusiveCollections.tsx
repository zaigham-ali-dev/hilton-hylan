import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ExclusiveCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Beverly Hills",
      propertiesCount: "32 Properties",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Malibu",
      propertiesCount: "18 Properties",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Oceanfront",
      propertiesCount: "26 Properties",
      image: "/property-preview.png",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-5 sm:px-8 md:px-12 lg:px-16 w-full border-t border-white/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-4 gap-12 lg:gap-10 items-start">
        
        {/* Text Section */}
        <div className="flex flex-col justify-between xl:pr-4 xl:self-stretch">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4B28C] mb-4 block">
              HANDPICKED COLLECTION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#EBE0D0] font-normal mb-4 leading-tight tracking-wide">
              Exclusive Collections
            </h2>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[280px]">
              Curated selection of our most exclusive and prestigious properties.
            </p>
            <button className="flex items-center justify-center gap-3 bg-[#D4B28C] hover:bg-[#c4a17a] text-black font-bold text-[10px] tracking-[0.15em] uppercase px-7 py-3.5 rounded-full w-fit transition-colors shadow-[0_0_15px_rgba(212,178,140,0.2)] mt-5">
              VIEW ALL COLLECTIONS
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group relative rounded-xl overflow-hidden aspect-[1.35] cursor-pointer border border-white/10 hover:border-white/25 transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
              
              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between z-10">
                <div className="flex flex-col">
                  <h3 className="text-white font-semibold text-lg sm:text-xl tracking-wide mb-1">
                    {collection.title}
                  </h3>
                  <span className="text-white/40 text-[11px] sm:text-xs tracking-wide">
                    {collection.propertiesCount}
                  </span>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
