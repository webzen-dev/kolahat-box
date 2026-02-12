/* eslint-disable @stylistic/jsx-pascal-case */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { type EmblaCarouselType } from "embla-carousel";

import TopProductCard from "./_top-product-card";

import { useCarousel } from "@/lib/hooks/useCarousel";
import { Category, Product } from "@/lib/types/types";

function _TopProductsHeader({
  api,
  categoryItems,
}: {
  api: EmblaCarouselType | undefined;
  categoryItems: Category[];
}) {
  return (
    <div
      className={clsx(
        "flex justify-between gap-6 text-background flex-col",
        "py-22 md:items-center md:flex-row px-7",
      )}
    >
      {/* top products title */}
      <div className="grid gap-2">
        <span className="text-background/80">محصولات پرفروش</span>
        <b className="text-xl">پرفروش ترین محصولات منتخب </b>
      </div>

      {/* top products category */}
      <div
        className={clsx("flex gap-4 flex-col", "md:items-center md:flex-row")}
      >
        <div className="flex items-center py-2 gap-10 overflow-auto max-w-full">
          {categoryItems.map((item, idx) => (
            <span key={idx} className="text-nowrap">
              {item.title}
            </span>
          ))}
        </div>

        {/* buttons carousel control */}
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
      </div>
    </div>
  );
}

export default function TopProducts({
  category,
  products,
}: {
  category: Category[];
  products: Product[];
}) {
  const { refCarousel, api } = useCarousel();
  return (
    <section className="bg-surface flex w-full items-center flex-col pb-22 ">
      <div className="container flex flex-col">
        {/* top products header -_-  */}

        <_TopProductsHeader api={api} categoryItems={category} />
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
