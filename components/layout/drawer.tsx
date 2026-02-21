"use client";

import { siteConfig } from "@/config/site";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";
import AuthButton from "./_auth-button";

export default function MobileDrawer({ className }: { className?: string }) {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button
          isIconOnly
          className={clsx("bg-bacground! w-14 h-14", className)}
        >
          <Bars2Icon className="w-6 h-6" />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay
          className={clsx(
            "fixed inset-0 bg-foreground/30",
            "supports-[backdrop-filter]:backdrop-blur-sm z-40",
          )}
        />

        <Drawer.Content
          className={clsx(
            "fixed inset-y-0 start-0 z-50 flex",
            "w-xs max-w-screen flex-col p-6 bg-background",
          )}
        >
          {/* deawer title */}
          <Drawer.Title asChild>
            <div className="w-full flex items-center justify-between">
              <Link className="flex items-center gap-2" href="/">
                <Image
                  alt="circle logo"
                  height={32}
                  priority
                  src="/logo.png"
                  width={32}
                />

                <span className="text-2xl font-extrabold">کلاهت باکس</span>
              </Link>

              <Drawer.Close asChild>
                <Button className="bg-foreground/5!" isIconOnly>
                  <XMarkIcon className="w-6 h-6 text-accent" />
                </Button>
              </Drawer.Close>
            </div>
          </Drawer.Title>

          {/* links  */}
          <ul className="flex flex-col items-center gap-6 pt-10 mb-10">
            {siteConfig.navItems.map((link, id) => (
              <li key={id}>
                <Link className={clsx("text-foreground/70")} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* action button */}
          <AuthButton
            isAuthenticated={true}
            className="flex bg-accent! w-full"
          />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
