// import BlogSection from "@/components/common/_blog-section";
import AboutUsSection from "@/components/landing/about-us-section";
import BrandStorySection from "@/components/landing/brand-story-section";
// import HomeHeroSection from '@/components/landing/home-hero-section';
import HorizontalInfiniteScroll from "@/components/landing/horizontal-infinite-scroll";
import ProductCategory from "@/components/pages/home/product-category-section";
import TopProducts from "@/components/pages/home/top-products-sections";
import { Category } from "@/lib/types/types";

const config = {
  blogData: [
    {
      id: 1,
      image: "/images/82f4c60908fafe890e4f078b3f4d33fb2f587bde.png",
      tag: "بررسی کلاه",
      author: "محمد رحمانی",
      title:
        "کلاه یکی از اکسسوری‌های پرطرفدار است که علاوه بر جنبه‌ی کاربردی، نقش مهمی در استایل و هویت برند ایفا می‌کند. بسیاری از کسب‌وکارها، فروشگاه‌ها و برندها برای تبلیغات و فروش، به تولید عمده کلاه نیاز دارند. در این مقاله مراحل سفارش، نکات مهم در انتخاب تولیدکننده و مزایای همکاری با یک مجموعه حرفه‌ای را بررسی می‌کنیم.",
      caption:
        "در دنیای رقابتی امروز، برندها و فروشگاه‌ها به دنبال راهکارهایی هستند که هم هزینه‌ها را کاهش دهند و هم هویت بصری برندشان را تقویت کنند. یکی از مؤثرترین روش‌ها برای دستیابی به این هدف، تولید عمده کلاه با طراحی اختصاصی است.",
    },

    {
      id: 2,
      image: "/images/3f8499d3e0521afc7dead4d4452d76ca56a0fc02.png",
      tag: "استایل خیابانی",
      author: "سینا مقدم",
      title:
        "کلاه یکی از اکسسوری‌های پرطرفدار است که علاوه بر جنبه‌ی کاربردی، نقش مهمی در استایل و هویت برند ایفا می‌کند. بسیاری از کسب‌وکارها، فروشگاه‌ها و برندها برای تبلیغات و فروش، به تولید عمده کلاه نیاز دارند. در این مقاله مراحل سفارش، نکات مهم در انتخاب تولیدکننده و مزایای همکاری با یک مجموعه حرفه‌ای را بررسی می‌کنیم.",
      caption:
        "در دنیای رقابتی امروز، برندها و فروشگاه‌ها به دنبال راهکارهایی هستند که هم هزینه‌ها را کاهش دهند و هم هویت بصری برندشان را تقویت کنند. یکی از مؤثرترین روش‌ها برای دستیابی به این هدف، تولید عمده کلاه با طراحی اختصاصی است.",
    },

    {
      id: 3,
      image: "/images/6651308e119549dfd434991bebc837f935a447aa.png",
      tag: "راهنمای خرید",
      author: "مهیار دلاوری",
      title:
        "کلاه یکی از اکسسوری‌های پرطرفدار است که علاوه بر جنبه‌ی کاربردی، نقش مهمی در استایل و هویت برند ایفا می‌کند. بسیاری از کسب‌وکارها، فروشگاه‌ها و برندها برای تبلیغات و فروش، به تولید عمده کلاه نیاز دارند. در این مقاله مراحل سفارش، نکات مهم در انتخاب تولیدکننده و مزایای همکاری با یک مجموعه حرفه‌ای را بررسی می‌کنیم.",
      caption:
        "در دنیای رقابتی امروز، برندها و فروشگاه‌ها به دنبال راهکارهایی هستند که هم هزینه‌ها را کاهش دهند و هم هویت بصری برندشان را تقویت کنند. یکی از مؤثرترین روش‌ها برای دستیابی به این هدف، تولید عمده کلاه با طراحی اختصاصی است.",
    },
    {
      id: 4,
      image: "/images/82f4c60908fafe890e4f078b3f4d33fb2f587bde.png",
      tag: "تحلیل ترندها",
      author: "آرین کیانی",
      title:
        "کلاه یکی از اکسسوری‌های پرطرفدار است که علاوه بر جنبه‌ی کاربردی، نقش مهمی در استایل و هویت برند ایفا می‌کند. بسیاری از کسب‌وکارها، فروشگاه‌ها و برندها برای تبلیغات و فروش، به تولید عمده کلاه نیاز دارند. در این مقاله مراحل سفارش، نکات مهم در انتخاب تولیدکننده و مزایای همکاری با یک مجموعه حرفه‌ای را بررسی می‌کنیم.",
      caption:
        "در دنیای رقابتی امروز، برندها و فروشگاه‌ها به دنبال راهکارهایی هستند که هم هزینه‌ها را کاهش دهند و هم هویت بصری برندشان را تقویت کنند. یکی از مؤثرترین روش‌ها برای دستیابی به این هدف، تولید عمده کلاه با طراحی اختصاصی است.",
    },

    {
      id: 5,
      image: "/images/3f8499d3e0521afc7dead4d4452d76ca56a0fc02.png",
      tag: "استایل زمستانی",
      author: "طاها مسلمی",
      title:
        "کلاه یکی از اکسسوری‌های پرطرفدار است که علاوه بر جنبه‌ی کاربردی، نقش مهمی در استایل و هویت برند ایفا می‌کند. بسیاری از کسب‌وکارها، فروشگاه‌ها و برندها برای تبلیغات و فروش، به تولید عمده کلاه نیاز دارند. در این مقاله مراحل سفارش، نکات مهم در انتخاب تولیدکننده و مزایای همکاری با یک مجموعه حرفه‌ای را بررسی می‌کنیم.",
      caption:
        "در دنیای رقابتی امروز، برندها و فروشگاه‌ها به دنبال راهکارهایی هستند که هم هزینه‌ها را کاهش دهند و هم هویت بصری برندشان را تقویت کنند. یکی از مؤثرترین روش‌ها برای دستیابی به این هدف، تولید عمده کلاه با طراحی اختصاصی است.",
    },
  ],

  bransImages: [
    "/images/brands/1f1acb614ef91eb3832b69eb918f0208aa7480ca.png",
    "/images/brands/290c29b78f613ee1f9efc09d08393c964757f0bb.png",
    "/images/brands/88b3c87c55ef5753d9a78e45aef4d219c86a8843.png",
    "/images/brands/91be6524233631974c49e17393a43726e9680864.png",
    "/images/brands/afc7cbd15be18beb1d44d0845b09bf3cff953c7b.png",
  ],

  productsCategory: [
    {
      id: 1,
      title: "کلاه زنانه",
      TitleEn: "Women's Hats",
      parent: null,
      image: "/images/fd6bbe66c8eecdf27c6c8640e6036cdf6e84f912.png",
      color: "#FF9093",
      breadcrumbs: [
        { label: "خانه", url: "/" },
        { label: "کلاه زنانه", url: "/categories/womens-hats" },
      ],
      slug: "womens-hats",
      slugLock: false,
      products: {
        docs: [],
        hasNextPage: false,
        totalDocs: 0,
      },
      createdAt: "2026-02-11T10:00:00Z",
      updatedAt: "2026-02-11T10:00:00Z",
    },
    {
      id: 2,
      title: "کلاه مردانه",
      TitleEn: "Men's Hats",
      parent: null,
      image: "/images/2d9e1d8996251b4e37ebed31438a008e3310afbd.png",
      color: "#606060",
      breadcrumbs: [
        { label: "خانه", url: "/" },
        { label: "کلاه مردانه", url: "/categories/mens-hats" },
      ],
      slug: "mens-hats",
      slugLock: false,
      products: {
        docs: [],
        hasNextPage: false,
        totalDocs: 0,
      },
      createdAt: "2026-02-11T10:10:00Z",
      updatedAt: "2026-02-11T10:10:00Z",
    },
    {
      id: 3,
      title: "کلاه بیسبالی",
      TitleEn: "Baseball Hats",
      parent: null,
      image: "/images/1c2c08ce116b18b8e63ff439e30021781ebe9a12.png",
      color: "#5F6D99",
      breadcrumbs: [
        { label: "خانه", url: "/" },
        { label: "کلاه بیسبالی", url: "/categories/baseball-hats" },
      ],
      slug: "baseball-hats",
      slugLock: false,
      products: {
        docs: [],
        hasNextPage: false,
        totalDocs: 0,
      },
      createdAt: "2026-02-11T10:20:00Z",
      updatedAt: "2026-02-11T10:20:00Z",
    },
    {
      id: 4,
      title: "کلاه بچه گانه",
      TitleEn: "Kids' Hats",
      parent: null,
      image: "/images/567764071e6f4e6a475ff46483c51e9ab107106d.png",
      color: "#FFEA70",
      breadcrumbs: [
        { label: "خانه", url: "/" },
        { label: "کلاه بچه گانه", url: "/categories/kids-hats" },
      ],
      slug: "kids-hats",
      slugLock: false,
      products: {
        docs: [],
        hasNextPage: false,
        totalDocs: 0,
      },
      createdAt: "2026-02-11T10:30:00Z",
      updatedAt: "2026-02-11T10:30:00Z",
    },
  ] as Category[],
};

export default function Home() {
  return (
    <section className="flex flex-col pt-30">
      {/* padding just for development mode  */}
      {/* <HomeHeroSection /> */}
      <div className="container mx-auto px-10">
        {/* <AboutUsSection /> */}
        {/* <HorizontalInfiniteScroll images={config.bransImages} /> */}
        <ProductCategory category={config.productsCategory} />
        {/* <BrandStorySection /> */}
        {/* <BlogSection  blog={config.blogData} /> */}
      </div>
      {/* <TopProducts /> */}
    </section>
  );
}
