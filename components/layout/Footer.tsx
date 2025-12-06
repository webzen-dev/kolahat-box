import { EnvelopeOpenIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

type linkType = {
  label: string;
  href: string;
  src?: string;
};

interface footerDataType {
  heading: string;
  links: linkType[];
}

const footerData: footerDataType[] = [
  {
    heading: 'امکانات',
    links: [
      {
        label: 'جستجوی پیشرفته',
        href: '/advanced-search',
      },
      {
        label: 'فروشگاه',
        href: '/shop',
      },
      {
        label: 'فروش عمده',
        href: '/wholesale',
      },
      {
        label: 'فرصت شغلی',
        href: '/careers',
      },
    ],
  },
  {
    heading: 'تماس با ما',
    links: [
      {
        label: 'info@colahat.com',
        href: 'mailto:info@colahat.com',
      },
      {
        label: '02112345678',
        href: 'tel:02112345678',
      },
      {
        label: 'مشهد، خیابان کوشش، پلاک 123',
        href: 'https://www.google.com/maps',
      },
    ],
  },
  {
    heading: 'اطلاعات مجموعه',
    links: [
      {
        label: 'تماس با ما',
        href: '/contact',
      },
      {
        label: 'درباره ما',
        href: '/about',
      },
      {
        label: 'شرایط و قوانین وبسایت',
        href: '/terms',
      },
      {
        label: 'سوالات متداول',
        href: '/faq',
      },
    ],
  },
  {
    heading: 'نماد',
    links: [
      {
        label: 'دیجیکالا',
        href: 'https://www.digikala.com',
        src: '/images/symbol/5cb4e82b70a88fe78c6f1739cebb29db365f1db8.png',
      },
      {
        label: 'اعتبار الکترونیک',
        href: 'https://www.eauth.ir',
        src: '/images/symbol/e2fa3388df54c0c00a59f02111987aded49c61e4.png',
      },
      {
        label: 'بانک ملت',
        href: 'https://www.bankmellat.ir',
        src: '/images/symbol/cbac9f330aa06ecae7bc179fe270f75f381d8671.png',
      },
      {
        label: 'زرین پال',
        href: 'https://www.zarinpal.com',
        src: '/images/symbol/88c295478e0b78ebd5a36f456d7e5790f34076c6.png',
      },
      {
        label: 'ترب',
        href: 'https://torob.com',
        src: '/images/symbol/ad0d145bc694d4639184de6b803e89fa8838027a.png',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary-800 to-primary-600 flex justify-center font-sans text-background overflow-hidden px-7 mt-40">
      <Image
        fill
        src="/images/Vectore.png"
        alt="hero background"
        draggable="false"
        className="z-0 object-cover md:mr-[33.333%] max-md:mt-[60%] max-md:max-h-[50%]"
      />

      <div className="container flex flex-col gap-18 pt-28 pb-10 max-md:*:text-center">
        <div className="flex justify-between gap-10 lg:gap-20 flex-col md:flex-row">
          <div className="flex flex-col gap-6 flex-1/3">
            <Link
              className="flex items-center gap-2.5 max-md:justify-center"
              href="/"
              draggable="false"
            >
              <Image
                alt="circle logo"
                src="/logo.png"
                height={32}
                width={32}
                priority
              />

              <span className="text-2xl font-extrabold">کلاهت باکس</span>
            </Link>

            <span className="md:text-lg">
              این وبسایت با هدف ارائه مقالات تخصصی در زمینه معماری اسلامی
              راه‌اندازی شده است. ما به بررسی جنبه‌های تاریخی، هنری و فنی معماری
              اسلامی می‌پردازیم و به زودی چت‌بات هوش مصنوعی برای پاسخ به سوالات
              شما اضافه خواهد شد.
            </span>

            <div className="flex gap-8 max-md:justify-center max-md:mt-10">
              <a href="mail:info@colahat.com" className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <EnvelopeOpenIcon className="h-5 w-5 text-background" />

                  <span className="text-background/80 font-bold text-lg">
                    نشانی الکترونیک
                  </span>
                </div>
                <span className="text-background/80">info@colahat.com</span>
              </a>

              <a href="tel:02112345678" className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <PhoneIcon className="h-5 w-5 text-background" />

                  <span className="text-background/80 font-bold text-lg">
                    شماره تماس
                  </span>
                </div>
                <span className="text-background/80">021 1234 5678</span>
              </a>
            </div>
          </div>

          <div className="flex gap-12 flex-2/3 lg:justify-end max-lg:flex-wrap max-lg:flex-1/2 flex-col md:flex-row">
            {footerData.slice(0, 3).map((item, i) => (
              <div key={i} className="flex flex-col gap-4 max-lg:last:flex-1">
                <b className="text-background/80">/{item.heading}</b>
                <div className="flex flex-col gap-2">
                  {item.links.map((link, i) => (
                    <Link key={i} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 max-md:flex-wrap">
          {footerData[3].links.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="w-20 h-20 rounded-full outline-6 outline-background/20 bg-background flex items-center justify-center"
            >
              {item.src && (
                <Image
                  alt={item.label}
                  height={43}
                  width={43}
                  className="object-contain grayscale"
                  src={item.src}
                />
              )}
            </a>
          ))}
        </div>

        <span className="text-background/70 text-center max-md:text-sm md:font-bold">
          © 2025 شهر سازی اسلامی. تمامی حقوق این وب‌سایت محفوظ است. استفاده از
          مطالب تنها با ذکر منبع بلامانع است.
        </span>
      </div>
    </footer>
  );
}
