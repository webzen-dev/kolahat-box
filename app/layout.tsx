import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // description: siteConfig.description,
  // icons: {
  //   icon: "/favicon.ico",
  // },
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
    <html suppressHydrationWarning lang="fa-IR" dir="rtl">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          vazirmatn.variable
          
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "ligh" }}>
          {/* <Header /> */}
          <main className="mx-auto flex-grow">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}