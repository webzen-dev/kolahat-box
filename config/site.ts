export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kolahat-box",
  description: "this site for kolhat box",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },

    {
      label: "فروشگاه",
      href: "/wholesale",
    },

    {
      label: "سفارش اختصاصی",
      href: "/custom-production",
    },

    {
      label: "درباره ما",
      href: "/about-us",  
    },

    // {
    //   label: "تماس با ما",
    //   href: "/contact-us",
    // },
  ],
  // navMenuItems: [],
  links: {},
};
