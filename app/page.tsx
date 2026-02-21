import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

// import HomeHeroSection from "@/components/landing/home-hero-section";
import AboutUsSection from "@/components/pages/home/about-us-section";
import BlogSection from "@/components/pages/home/blog-section";
import BrandStorySection from "@/components/pages/home/brand-story-section";
import CustomOrder from "@/components/pages/home/custom-order-section";
import Faq from "@/components/pages/home/faq-section";
import HorizontalInfiniteScroll from "@/components/pages/home/horizontal-infinite-scroll";
import ProductCategory from "@/components/pages/home/product-category-section";
import TopProducts from "@/components/pages/home/top-products-sections";
import { Category, Product } from "@/lib/types/types";

const categoryTopProduct: Category[] = [
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
    {
      id: 6,
      title: "کلاه کوهنوردی",
      TitleEn: "Mountaineering Hats",
      parent: null,
      image: "/images/ace7f71c6b07b85eedfe45d2c4e8251f2754f47c.png",
      color: "#4E7A5D",
      breadcrumbs: [
        { label: "خانه", url: "/" },
        { label: "کلاه کوهنوردی", url: "/categories/mountaineering-hats" },
      ],
      slug: "mountaineering-hats",
      slugLock: false,
      products: {
        docs: [],
        hasNextPage: false,
        totalDocs: 0,
      },
      createdAt: "2026-02-12T10:00:00Z",
      updatedAt: "2026-02-12T10:00:00Z",
    },
  ] as Category[],

  TopProductsList: [
    categoryTopProduct,
    {
      id: 1,
      name: "کلاه کلاسیک آبی",
      description: "کلاه کلاسیک مناسب استفاده روزمره",
      price: 120000,
      gallery: "/images/2d9e1d8996251b4e37ebed31438a008e3310afbd.png",
      category: categoryTopProduct[0],
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
      category: categoryTopProduct[1],
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
      category: categoryTopProduct[2],
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
      category: categoryTopProduct[3],
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
      category: categoryTopProduct[1],
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
      category: categoryTopProduct[2],
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
      category: categoryTopProduct[0],
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
      category: categoryTopProduct[0],
      slug: "sport-red-hat-light",
      ratingAverage: 4.1,
      wishCount: 15,
      isActive: true,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ] as Product[],

  customOrderBoxData: [
    {
      id: 1,
      title: "ارسال ایده و لوگو",
      description:
        "کافیست ارسال ایده و لوگو انجام دهید، تولید کلاه شما آغاز خواهد شد",

      icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
    },
    {
      id: 2,
      title: "تایید طرح و پیش فاکتور",
      description:
        "با تایید طرح و پیش فاکتور، سفارش شما وارد مرحله تولید خواهد شد",
      icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
    },
    {
      id: 3,
      title: "تولید و تحویل سریع",
      description:
        "پس از تایید، تولید و تحویل سریع کلاه‌ها طبق زمان‌بندی انجام می‌شود",
      icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
    },
  ],

  brandStoryImages: [
    {
      src: "/images/brand-story/b5a3952bf12ec16ef0dfb92bac90e9fa1a73d6e5.png",
      column: 0,
    },
    {
      src: "/images/brand-story/dd859fb93c1f34fa215efd72411f8cf521b61926.png",
      column: 0,
    },
    {
      src: "/images/brand-story/8e6e296bb9e7125578404459a758cbbf2e4517fb.png",
      column: 0,
    },
    {
      src: "/images/brand-story/2f6de647cd6bb6c92ceb9af7cbfb1824558489ae.png",
      column: 1,
    },
    {
      src: "/images/brand-story/9c003407313408e36896461d7ba6bf9d272215bc.png",
      column: 1,
    },
    {
      src: "/images/brand-story/0e637a06e204e4302a772801d867e5ae229a5cd6.png",
      column: 2,
    },
    {
      src: "/images/brand-story/b35d7d6f19fe3c443b49e9d1f3d485ecee90700c.png",
      column: 2,
    },
    {
      src: "/images/brand-story/be70c767e2b8219267b67e2c9b7692699023601e.png",
      column: 2,
    },
    {
      src: "/images/brand-story/c2b3450a855228169b169dcd1225e69ad7b2bd47.png",
      column: 2,
    },
    {
      src: "/images/brand-story/1ab7ebf8bfecc8e277232580aefac9098ee00096.png",
      column: 3,
    },
    {
      src: "/images/brand-story/d984b3fb45a22cb639aacbccaa72be85d57dc553.png",
      column: 3,
    },
  ],

  faqDemoData: [
    {
      id: 1,
      question: "این وبسایت چه هدفی دارد؟",
      answer:
        "هدف این وبسایت ارائه مقالات آموزشی و کاربردی در حوزه توسعه فرانت‌اند و طراحی رابط کاربری است تا کاربران بتوانند مهارت‌های خود را به‌صورت عملی تقویت کنند.",
    },
    {
      id: 2,
      question: "چگونه می‌توانم در سایت ثبت‌نام کنم؟",
      answer:
        "با کلیک روی دکمه ثبت‌نام در بالای صفحه و وارد کردن اطلاعات موردنیاز، حساب کاربری شما در چند مرحله ساده ایجاد خواهد شد.",
    },
    {
      id: 3,
      question: "آیا استفاده از مطالب سایت رایگان است؟",
      answer:
        "بخش زیادی از محتوا رایگان است، اما برخی دوره‌ها و آموزش‌های تخصصی تنها برای کاربران ویژه در دسترس هستند.",
    },
    {
      id: 4,
      question: "چگونه می‌توانم به مقالات جدید دسترسی پیدا کنم؟",
      answer:
        "مقالات جدید در بخش «آخرین مطالب» صفحه اصلی نمایش داده می‌شوند و همچنین از طریق دسته‌بندی‌ها و جستجو قابل دسترسی هستند.",
    },
    {
      id: 5,
      question: "آیا امکان دانلود مطالب وجود دارد؟",
      answer:
        "در صورت فعال بودن گزینه دانلود برای یک مقاله یا دوره، دکمه دانلود در همان صفحه نمایش داده می‌شود.",
    },
    {
      id: 6,
      question: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
      answer:
        "از طریق فرم تماس با ما در پایین صفحه یا ارسال ایمیل به آدرس درج‌شده در بخش پشتیبانی می‌توانید با تیم ما در ارتباط باشید.",
    },
    {
      id: 7,
      question: "آیا سایت نسخه موبایل دارد؟",
      answer:
        "بله، طراحی سایت کاملاً ریسپانسیو است و در موبایل، تبلت و دسکتاپ تجربه کاربری بهینه ارائه می‌دهد.",
    },
    {
      id: 8,
      question: "آیا امکان ارسال دیدگاه زیر مقالات وجود دارد؟",
      answer:
        "کاربران ثبت‌نام‌شده می‌توانند زیر هر مقاله دیدگاه خود را ثبت کنند و در بحث‌ها شرکت کنند.",
    },
    {
      id: 9,
      question: "چگونه می‌توانم رمز عبور خود را بازیابی کنم؟",
      answer:
        "در صفحه ورود، گزینه «فراموشی رمز عبور» را انتخاب کرده و با وارد کردن ایمیل خود، لینک بازیابی برای شما ارسال خواهد شد.",
    },
    {
      id: 10,
      question: "آیا امکان پیشنهاد موضوع جدید وجود دارد؟",
      answer:
        "بله، کاربران می‌توانند از طریق بخش پیشنهادات، موضوعات موردنظر خود را ارسال کنند تا در برنامه تولید محتوا بررسی شوند.",
    },
  ],
 brandHistoryCategories :[
  {
    id: 101,
    title: "مردانه",
    TitleEn: "Men",
    parent: null,
    image: "/images/categories/men.png",
    color: "#2E2E2E",
    breadcrumbs: [
      { label: "خانه", url: "/" },
      { label: "مردانه", url: "/categories/men" },
    ],
    slug: "men",
    slugLock: false,
    products: {
      docs: [],
      hasNextPage: false,
      totalDocs: 0,
    },
    createdAt: "2026-02-21T00:00:00Z",
    updatedAt: "2026-02-21T00:00:00Z",
  },
  {
    id: 102,
    title: "زنانه",
    TitleEn: "Women",
    parent: null,
    image: "/images/categories/women.png",
    color: "#8E3A59",
    breadcrumbs: [
      { label: "خانه", url: "/" },
      { label: "زنانه", url: "/categories/women" },
    ],
    slug: "women",
    slugLock: false,
    products: {
      docs: [],
      hasNextPage: false,
      totalDocs: 0,
    },
    createdAt: "2026-02-21T00:00:00Z",
    updatedAt: "2026-02-21T00:00:00Z",
  },
  {
    id: 103,
    title: "بچه گانه",
    TitleEn: "Kids",
    parent: null,
    image: "/images/categories/kids.png",
    color: "#3A6EA5",
    breadcrumbs: [
      { label: "خانه", url: "/" },
      { label: "بچه گانه", url: "/categories/kids" },
    ],
    slug: "kids",
    slugLock: false,
    products: {
      docs: [],
      hasNextPage: false,
      totalDocs: 0,
    },
    createdAt: "2026-02-21T00:00:00Z",
    updatedAt: "2026-02-21T00:00:00Z",
  },
  {
    id: 104,
    title: "بیسبالی",
    TitleEn: "Baseball",
    parent: null,
    image: "/images/categories/baseball.png",
    color: "#1F4F4F",
    breadcrumbs: [
      { label: "خانه", url: "/" },
      { label: "بیسبالی", url: "/categories/baseball" },
    ],
    slug: "baseball",
    slugLock: false,
    products: {
      docs: [],
      hasNextPage: false,
      totalDocs: 0,
    },
    createdAt: "2026-02-21T00:00:00Z",
    updatedAt: "2026-02-21T00:00:00Z",
  },
  {
    id: 105,
    title: "فدورا",
    TitleEn: "Fedora",
    parent: null,
    image: "/images/categories/fedora.png",
    color: "#5C4033",
    breadcrumbs: [
      { label: "خانه", url: "/" },
      { label: "فدورا", url: "/categories/fedora" },
    ],
    slug: "fedora",
    slugLock: false,
    products: {
      docs: [],
      hasNextPage: false,
      totalDocs: 0,
    },
    createdAt: "2026-02-21T00:00:00Z",
    updatedAt: "2026-02-21T00:00:00Z",
  },
]};

export default function Home() {
  return (
    <section className="flex flex-col pt-70 ">
      {/* padding just for development mode  */}
      {/* <HomeHeroSection /> */}

      <div className="container mx-auto px-10">
        <AboutUsSection
          poster="/images/thumbnail.jpg"
          videoSrc="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
        />

        <HorizontalInfiniteScroll images={config.bransImages} />

        <ProductCategory category={config.productsCategory} />

        <BrandStorySection
          categoryItems={config.brandHistoryCategories}
          images={config.brandStoryImages}
        />

        <CustomOrder data={config.customOrderBoxData} />
      </div>

      <TopProducts
        category={categoryTopProduct}
        products={config.TopProductsList}
      />

      <div className="container mx-auto px-10">
        <BlogSection blog={config.blogData} />
        <Faq data={config.faqDemoData} />
      </div>
    </section>
  );
}
