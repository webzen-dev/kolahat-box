'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import clsx from 'clsx';

const MobileDrawer = dynamic(() => import('./drawer'), {
  ssr: false,
});

export interface HeaderLinksInterface {
  label: string;
  href: string;
  endContent?: ReactNode;
}

export const links: HeaderLinksInterface[] = [
  {
    label: 'صفحه نخست',
    href: '/',
  },

  {
    label: 'فروشگاه عمده',
    href: '/wholesale',
    endContent: <ChevronDownIcon className="size-4" />,
  },

  {
    label: 'تولید اختصاصی',
    href: '/custom-production',
  },

  {
    label: 'درباره ما',
    href: '/about-us',
  },

  {
    label: 'تماس با ما',
    href: '/contact-us',
  },
];

export function Header() {
  return (
    <header className="w-full flex px-10 lg:px-35 pt-10 md:pt-14 gap-16 text-background justify-between items-center select-none absolute top-0 left-0 right-0 z-20">
      <MobileDrawer className="md:hidden" links={links}/>

      <Link className="flex items-center gap-2.5" href="/" draggable="false">
        <Image
          alt="circle logo"
          src="/logo.png"
          height={32}
          width={32}
          priority
        />

        <span className="text-2xl font-extrabold">کلاهت باکس</span>
      </Link>

      <ul className="md:flex hidden items-center gap-6.5 flex-1">
        {links.map((link, id) => (
          <li key={id}>
            <Link
              href={link.href}
              className={clsx(
                'text-background/70',
                link.endContent && 'flex items-center gap-2'
              )}
            >
              {link.label}
              <span className="text-background/80">{link.endContent}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:flex hidden gap-4 items-center">
        <Button
          color="primary"
          as={Link}
          className="py-5.25 px-6 w-auto h-auto flex items-center gap-2"
          dir="ltr"
          startContent={<ArrowDownTrayIcon className="size-6" />}
          href="/receive-invoice"
        >
          دریافت پیش فاکتور
        </Button>

        <Link href="/login" className="text-background px-4 py-5.25">
          ورود کاربران
        </Link>
      </div>
    </header>
  );
}
