"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

type faqData = {
  id: number;
  question: string;
  answer: string;
};

interface faqProps {
  data: faqData[];
}

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
        "pt-8 px-10 flex flex-col rounded-2xl",
        "cursor-pointer transition-colors overflow-hidden",
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

export default function Faq({ data }: faqProps) {
  const [itemKey, setItemKey] = useState<number>(1);

  return (
    <section className="flex flex-col gap-16">
      <FaqHeader />

      <div className="flex flex-col gap-4">
        {data.slice(0, 4).map((item) => (
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
