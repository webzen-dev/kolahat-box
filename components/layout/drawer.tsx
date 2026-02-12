"use client";

import {
  ArrowDownTrayIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";

import { HeaderLinksInterface } from "./header";

interface MobileDrawerProps {
  className: string;
  links: HeaderLinksInterface[];
}

export default function MobileDrawer({ className, links }: MobileDrawerProps) {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button
          className={clsx("bg-backgound! w-14 h-14", className)}
          isIconOnly
        >
          <Bars2Icon className="w-6 h-6" />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-foreground/30 supports-[backdrop-filter]:backdrop-blur-sm z-40" />

        <Drawer.Content className="bg-background z-50 flex flex-col fixed inset-y-0 start-0 w-xs max-w-[80vw] p-6">
          <Drawer.Title asChild>
            <div className="w-full flex items-center justify-between">
              <Link className="flex items-center gap-2.5" href="/">
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
                  <XMarkIcon className="w-6 h-6" />
                </Button>
              </Drawer.Close>
            </div>
          </Drawer.Title>

          <ul className="flex flex-col items-center gap-6.5 py-10">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  className={clsx(
                    "text-foreground/70",
                    link.endContent && "flex items-center gap-4",
                  )}
                  href={link.href}
                >
                  {link.label}
                  <span className="text-foreground/80">{link.endContent}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 items-center">
            <Button
              className="py-5.25 px-6 w-auto h-auto flex items-center gap-2"
              dir="ltr"
            >
              <Link href="/">
                دریافت پیش فاکتور
                <ArrowDownTrayIcon className="size-6" />
              </Link>
            </Button>

            <Link className="text-foreground px-4 py-5.25" href="/login">
              ورود کاربران
            </Link>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
