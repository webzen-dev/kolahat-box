import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";

import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import "@/styles/style.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa-IR" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          vazirmatn.variable,
        )}
      >
        <Header />
        <main className="mx-auto flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
