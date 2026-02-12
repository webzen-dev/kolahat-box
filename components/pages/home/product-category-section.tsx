/* eslint-disable @stylistic/jsx-pascal-case */
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/lib/types/types";

function _CategoryItem({ item }: { item: Category }) {
  return (
    <Link
      className={clsx(
        "relative h-full aspect-square rounded-4xl shrink-0",
        "flex items-center justify-center gap-8",
        "p-4 pb-16",
        "after:content-[''] after:absolute after:inset-0 after:rounded-4xl",
        "after:bg-gradient-to-t after:from-foreground/50",
      )}
      href={item.slug}
      style={{
        background: `linear-gradient(to top left, ${item.color}, ${item.color}66)`,
        boxShadow: `0px 30px 30px ${item.color}33`,
      }}
    >
      <Image
        alt={item.TitleEn || item.title}
        className="object-contain max-w-24 max-h-24 md:max-w-40 md:max-h-40"
        height={160}
        src={item?.image || "/images/poster.png"}
        width={160}
      />

      {/* text box */}
      <div
        className={clsx(
          "flex flex-col gap-1 p-4 text-background",
          "absolute bottom-0 z-30 inset-x-0",
        )}
      >
        <b className="text-sm md:text-base">{item.title}</b>
        <span
          className={clsx(
            "font-medium text-background/70",
            "text-xs md:text-sm uppercase",
          )}
        >
          {item.TitleEn}
        </span>
      </div>
    </Link>
  );
}

export default function ProductCategory({
  category,
}: {
  category: Category[];
}) {
  return (
    <section className="flex flex-col gap-18 mb-16">
      <div className="grid gap-2">
        <span className="text-foreground/60 text-base">دسته بندی محصولات</span>

        <b className="text-xl">دسته بندی محصول را انتخاب کنید !</b>
      </div>

      <div className="flex items-stretch flex-wrap -me-6 gap-y-6 justify-center">
        {category.map((item, idx) => (
          <div key={idx} className="w-1/2 md:w-1/3 lg:w-1/5 h-auto pe-6">
            <_CategoryItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
