import clsx from "clsx";
import Image from "next/image";

export default function HorizontalInfiniteScroll({
  images,
}: {
  images: string[];
}) {
  return (
    <section
      className={clsx(
        "flex flex-nowrap items-center overflow-x-hidden",
        "select-none mb-36 horizontal-infinite-scroll-container group",
      )}
    >
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className={clsx(
            "flex items-center justify-around shrink-0 min-w-full",
            "gap-2 md:gap-4 pe-4 relative horizontal-infinite-scroll",
          )}
        >
          {images.map((img, i) => (
            <Image
              key={i}
              alt="برند منتخب"
              className="object-contain max-h-16 max-w-fit min-h-16 group-hover:grayscale hover:!grayscale-0 group-hover:opacity-80 hover:opacity-100 transition-[filter] duration-200"
              height={64}
              src={img}
              width={200}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
