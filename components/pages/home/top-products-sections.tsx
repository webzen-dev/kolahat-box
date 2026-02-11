/* eslint-disable @stylistic/jsx-pascal-case */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { type EmblaCarouselType } from "embla-carousel";

import TopProductCard from "./_top-product-card";

import { useCarousel } from "@/lib/hooks/useCarousel";
import { Category, Product } from "@/lib/types/types";

const category: Category[] = [
  {
    id: 1,
    title: "جدید ترین",
    slug: "newest",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "پرفروش ترین",
    slug: "best-sellers",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "ارزان ترین",
    slug: "cheapest",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "گران ترین",
    slug: "most-expensive",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

const ProductsList: Product[] = [
  {
    id: 1,
    name: "کلاه کلاسیک آبی",
    description: "کلاه کلاسیک مناسب استفاده روزمره",
    price: 120000,
    gallery: "/images/2d9e1d8996251b4e37ebed31438a008e3310afbd.png",
    category: category[0],
    slug: "classic-blue-hat",
    ratingAverage: 4.5,
    wishCount: 32,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "کلاه اسپرت قرمز",
    description: "کلاه اسپرت برای استایل خیابونی",
    price: 150000,
    discountPercentage: 15,
    discountedPrice: 127500,
    gallery: "/images/63c3a0fc062118bb5ebc0f35d4f8e2168c39209e.png",
    category: category[1],
    slug: "sport-red-hat",
    ratingAverage: 4.2,
    wishCount: 21,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "کلاه تابستانی سفید",
    description: "سبک، خنک، مخصوص تابستون",
    price: 100000,
    discountPercentage: 20,
    discountedPrice: 80000,
    gallery: "/images/ace7f71c6b07b85eedfe45d2c4e8251f2754f47c.png",
    category: category[2],
    slug: "summer-white-hat",
    ratingAverage: 4.8,
    wishCount: 45,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "کلاه زمستانی خاکستری",
    description: "گرم و مناسب هوای سرد",
    price: 200000,
    discountPercentage: 5,
    discountedPrice: 190000,
    gallery: "/images/3e32563911ed289958eb5593c5ce4eefe4963ba1.png",
    category: category[3],
    slug: "winter-gray-hat",
    ratingAverage: 4.0,
    wishCount: 12,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "کلاه فدورا مشکی",
    description: "استایل رسمی و خاص",
    price: 180000,
    discountPercentage: 25,
    discountedPrice: 135000,
    gallery: "/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png",
    category: category[1],
    slug: "fedora-black-hat",
    ratingAverage: 4.7,
    wishCount: 54,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    name: "کلاه بیسبال سبز",
    description: "مینیمال و راحت",
    price: 90000,
    discountPercentage: 0,
    discountedPrice: 90000,
    gallery: "/images/2394447fba5a4ae99d7329d42adf79d41c323d87.png",
    category: category[2],
    slug: "baseball-green-hat",
    ratingAverage: 3.9,
    wishCount: 8,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    name: "کلاه کلاسیک آبی (مدل جدید)",
    description: "نسخه آپدیت‌شده کلاه کلاسیک",
    price: 130000,
    discountPercentage: 10,
    discountedPrice: 117000,
    gallery: "/images/2d9e1d8996251b4e37ebed31438a008e3310afbd.png",
    category: category[0],
    slug: "classic-blue-hat-v2",
    ratingAverage: 4.3,
    wishCount: 19,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    name: "کلاه اسپرت قرمز (لایت)",
    description: "نسخه سبک‌تر برای استفاده روزانه",
    price: 140000,
    discountPercentage: 12,
    discountedPrice: 123200,
    gallery: "/images/63c3a0fc062118bb5ebc0f35d4f8e2168c39209e.png",
    category: category[0],
    slug: "sport-red-hat-light",
    ratingAverage: 4.1,
    wishCount: 15,
    isActive: true,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

function _TopProductsHeader({ api }: { api: EmblaCarouselType | undefined }) {
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
          {category.map((item, idx) => (
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

export default function TopProducts() {
  const { refCarousel, api } = useCarousel();
  return (
    <section className="bg-surface flex w-full items-center flex-col pb-22 ">
      <div className="container flex flex-col">
        {/* top products header -_-  */}
        
        <_TopProductsHeader api={api} />
        {/* top products list */}
        <div ref={refCarousel} className="overflow-hidden">
          <div className="flex -me-6">
            {/* product card */}
            {ProductsList.map((product, idx) => (
              <TopProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
