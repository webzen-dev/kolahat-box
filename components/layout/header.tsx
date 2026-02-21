import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import AuthButton from "./_auth-button";

import { siteConfig } from "@/config/site";

const MobileDrawer = dynamic(() => import("./drawer"));

export function Header() {
  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 px-6",
        "backdrop-blur-3xl bg-accent md:py-5",
      )}
    >
      <nav
        className={clsx(
          "container mx-auto flex items-center",
          "justify-between text-background",
        )}
      >
        <MobileDrawer className="md:hidden" />

        <Link
          className="flex items-center gap-2 shrink-0"
          draggable="false"
          href="/"
        >
          <Image
            alt="circle logo"
            draggable="false"
            height={32}
            priority
            src="/logo.png"
            width={32}
          />

          <span className="text-xl lg:text-2xl font-extrabold">کلاهت باکس</span>
        </Link>

        <div className="gap-4 hidden ps-6 md:flex flex-1">
          {siteConfig.navItems.map((link, id) => (
            <Link key={id} className={clsx("text-background")} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <AuthButton className="hidden md:flex shrink-0" isAuthenticated={true} />
      </nav>
    </header>
  );
}
