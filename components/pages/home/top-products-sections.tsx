"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import TopProductCard from "./_top-product-card";

import SectionTabBar from "@/components/section-tab-bar";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { Category, Product } from "@/lib/types/types";


export default function TopProducts({
  category,
  products,
}: {
  category: Category[];
  products: Product[];
}) {
  const { refCarousel, api } = useCarousel();
  return (
    <section className="bg-surface flex w-full items-center flex-col pb-22 mb-30">
      <div className="container flex flex-col">
        {/* top products header -_-  */}
        <SectionTabBar
          categories={category}
          className="py-22"
          eyebrow="محصولات پرفروش"
          headerAction={
            <div className="flex items-center self-end md:self-center">
              <ChevronRightIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => api?.scrollPrev()}
              />

              <ChevronLeftIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => api?.scrollNext()}
              />
            </div>
          }
          theme="light"
          title="پرفروش ترین محصولات منتخب"
        />
        {/* top products list */}
        <div ref={refCarousel} className="overflow-hidden">
          <div className="flex -me-6">
            {/* product card */}
            {products.map((product, idx) => (
              <TopProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
