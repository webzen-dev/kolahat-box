import clsx from "clsx";
import Image from "next/image";

import SectionTabBar from "@/components/section-tab-bar";
import { Category } from "@/lib/types/types";

function shuffleArray<T>(array: T[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

type ImageItemType = {
  src: string;
  column: number;
};

export default function BrandStorySection({
  images,
  categoryItems,
}: {
  images: ImageItemType[];
  categoryItems: Category[];
}) {
  const randomizedImages = shuffleArray(images);
  const columns = Array.from({ length: 4 }, (_, i) =>
    randomizedImages
      .filter((img) => img.column === i)
      .sort((a, b) => a.column - b.column),
  );

  return (
    <section className="container mt-10 mx-auto flex flex-col gap-10 mb-30">
      {/* header */}
      <SectionTabBar
        categories={categoryItems}
        eyebrow="نمونه کارها"
        title="داستان برند شما تخصص ما"
      />
      <div
        className={clsx(
          "grid gap-6 w-full",
          "grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
        )}
      >
{/*  */}
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className={clsx(
              "flex flex-col gap-6 justify-between items-stretch",
              "md:first:flex-row lg:first:flex-col md:first:col-span-full",
              "lg:first:col-span-1 lg:first:items-center",
            )}
          >
            {col.map((img, i) => (
              <div
                key={i}
                className={clsx(
                  "relative rounded-2xl",
                  colIndex === columns.length - 1 &&
                    i === col.length - 1 &&
                    "col-span-full md:col-span-full lg:col-span-1",
                )}
              >
                <Image
                  alt={`brand story image ${i + 1}`}
                  className={clsx(
                    "object-contain min-w-full rounded-2xl",
                    "grayscale hover:grayscale-0 transition-all duration-500",
                  )}
                  height={400}
                  src={img.src}
                  width={400}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
