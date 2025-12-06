import Image from 'next/image';
import Link from 'next/link';
import { blogProps } from './_blog-section';
import type { EmblaViewportRefType } from 'embla-carousel-react';

import {
  ArrowLongLeftIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

function BlogCard({ blog }: { blog: blogProps }) {
  return (
    <Link
      href={`/blog/${blog.title}`}
      className="w-full h-full flex flex-col gap-5"
      draggable={false}
    >
      <div className="relative aspect-16/9 w-full">
        <Image
          fill
          src={blog.image}
          alt={blog.title.slice(0, 20)}
          draggable={false}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex gap-6 items-center">
        <span className="text-foreground/60 bg-foreground/5 py-1 px-2 rounded-lg">
          {blog.tag}
        </span>

        <div className="flex items-center text-foreground/60 gap-1">
          <PencilSquareIcon className="h-5 w-5" />

          <span>{blog.author}</span>
        </div>
      </div>

      <b className="text-lg line-clamp-2">{blog.title}</b>

      <span className="text-foreground/50 line-clamp-2">{blog.caption}</span>

      <b className="flex items-center gap-2">
        بیشتر بخوانید
        <ArrowLongLeftIcon className="h-5 w-5" />
      </b>
    </Link>
  );
}

export default function BlogCarousel({
  data,
  emblaRef,
}: {
  data: blogProps[];
  emblaRef: EmblaViewportRefType;
}) {
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex touch-pan-y touch-pinch-zoom -me-10">
        {data.map((blog) => (
          <div
            className="flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pe-10 select-none"
            key={blog.id}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
