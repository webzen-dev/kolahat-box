import AboutUsSection from '@/components/landing/about-us-section';
import BrandStorySection from '@/components/landing/brand-story-section';
import HomeHeroSection from '@/components/landing/home-hero-section';

export default function Home() {
  return (
    <section className="flex flex-col">
      {/* <HomeHeroSection /> */}
      <AboutUsSection />
      {/* <BrandStorySection /> */}
    </section>
  );
}
