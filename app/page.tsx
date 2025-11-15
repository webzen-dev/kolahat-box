import BrandStorySection from "@/components/landing/brand-story-section";
import HomeHeroSection from "@/components/landing/home-hero-section";

export default function Home() {
  return (
    <section className="flex flex-col">
  
      <HomeHeroSection/>
      <BrandStorySection/>
    </section>
  );
}
