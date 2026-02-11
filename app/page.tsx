import BrandStorySection from "@/components/landing/brand-story-section";
import HorizontalInfiniteScroll from "@/components/landing/horizontal-infinite-scroll";
import BrandsSection from "@/components/landing/horizontal-infinite-scroll";
import HomeHeroSection from "@/components/landing/home-hero-section";

export default function Home() {
  return (
    <section className="flex flex-col">
      <HorizontalInfiniteScroll/>
    </section>
  );
}
