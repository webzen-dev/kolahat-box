import clsx from "clsx";
import Image from "next/image";

export default function HorizontalInfiniteScroll({
  images,
}: {
  images: string[];
}) {
  return (
    <div
      className={clsx(
        "flex flex-nowrap items-center overflow-hidden",
        "select-none mb-30 horizontal-infinite-scroll-container group",
      )}
    >
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className={clsx(
            "flex items-center justify-around min-w-full",
            "gap-4 pe-4 horizontal-infinite-scroll",
          )}
        >
          {images.map((img, i) => (
            <Image
              src={img}
              key={i}
              height={64}
              width={200}
              alt="برند منتخب"
              className="object-contain max-h-16 min-h-16 group-hover:grayscale hover:!grayscale-0 transition-[filter]"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
