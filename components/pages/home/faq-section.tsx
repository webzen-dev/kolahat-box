"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

const faqDemoData = [
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
];

const categoryTopProduct = [
  {
    id: 1,
    title: "محصولات",
    slug: "newest",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "مقالات",
    slug: "best-sellers",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "سفارشات ",
    slug: "cheapest",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "مشاوره رایگان",
    slug: "most-expensive",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

function FaqHeader() {
  return (
    <div
      className={clsx(
        "flex justify-between gap-6 text-foreground flex-col",
        "md:items-center md:flex-row px-7",
      )}
    >
      {/* top products title */}
      <div className="grid gap-2">
        <span className="text-foreground/80">سوالات متداول </span>
        <b className="text-xl">سوالات خود را از اینجا پیدا کنید !</b>
      </div>

      {/* top products category */}
      <div
        className={clsx("flex gap-4 flex-col", "md:items-center md:flex-row")}
      >
        <div className="flex items-center py-2 gap-10 overflow-auto max-w-full">
          {categoryTopProduct.map((item, idx) => (
            <span key={idx} className="text-nowrap">
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface rowItem {
  item: { id: number; question: string; answer: string };
  openitemkey: number;
  setSelectedKey: (id: number) => void;
}

function RowItem({ item, openitemkey, setSelectedKey }: rowItem) {
  return (
    <motion.div
      className={clsx(
        "pt-8 px-10 flex flex-col rounded-2xl cursor-pointer transition-colors overflow-hidden",
        openitemkey === item.id
          ? "shadow-2xl/10"
          : "border border-foreground/10",
      )}
      layout
      onClick={() => setSelectedKey(item.id)}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center gap-2 mb-8">
        <p className="font-medium text-lg">{item.question}</p>

        <motion.span
          animate={{ rotate: openitemkey === item.id ? -180 : 0 }}
          className={clsx(
            "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
            openitemkey === item.id
              ? "border-accent/30 text-accent"
              : "border-foreground/10",
          )}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.span>
      </div>

      {/* Answer */}
      <motion.div layout>
        {openitemkey === item.id && (
          <motion.div
            animate={{ opacity: 1 }}
            className="border-t border-foreground/10 text-foreground/50 py-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.answer}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Faq() {
  const [itemKey, setItemKey] = useState<number>(1);

  return (
    <section className="flex flex-col gap-16">
      <FaqHeader />

      <div className="flex flex-col gap-4">
        {faqDemoData.slice(0,4).map((item) => (
          <RowItem
            key={item.id}
            item={item}
            openitemkey={itemKey}
            setSelectedKey={(id) => setItemKey(id)}
          />
        ))}
      </div>
    </section>
  );
}
