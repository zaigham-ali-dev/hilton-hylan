import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProperties } from "@/components/properties/FeaturedProperties";
import { OurStory } from "@/components/story/OurStory";
import { ExploreNeighborhoods } from "@/components/properties/ExploreNeighborhoods";
import { ClientExperiences } from "@/components/testimonials/ClientExperiences";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden font-sans">
      <main className="relative flex flex-col min-h-screen">
        <HeroSection />
        <FeaturedProperties />
        <OurStory />
        <ExploreNeighborhoods />
        <ClientExperiences />
        <NewsletterSection />
      </main>
    </div>
  );
}


