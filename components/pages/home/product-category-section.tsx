import Image from "next/image";

import { Category } from "@/lib/types/types";

export default function ProductCategory({
  category,
}: {
  category: Category[];
}) {
  return (
    <section className="flex flex-col gap-18">
      <div className="grid gap-2">
        <span className="text-foreground/60 text-base">دسته بندی محصولات</span>

        <b className="text-xl">دسته بندی محصول را انتخاب کنید !</b>
      </div>

      <div className="flex items-center justify-center lg:justify-between gap-12 flex-wrap">
        {category.map((item, idx) => (
          <div
            key={idx}
            className="w-28 md:w-52 flex flex-col gap-8 text-end shrink-0"
          >
            <div
              className="w-full aspect-square rounded-4xl flex justify-center items-center"
              style={{
                background: `linear-gradient(to top left, ${item.color}, ${item.color}66)`,
                boxShadow: `0px 60px 20px ${item.color}33`,
              }}
            >
              <Image
                alt="kolah"
                className="object-contain max-w-24 max-h-24 md:max-w-40 md:max-h-40"
                height={160}
                src={item?.image || "/images/poster.png"}
                width={160}
              />
            </div>

            {/* text  box */}
            <div className="flex flex-col gap-2">
              <b className="text-base">{item.title}</b>
              <span className="font-medium text-foreground/60 text-sm uppercase">
                {item.TitleEn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
