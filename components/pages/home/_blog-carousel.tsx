"use client"
import {
  ArrowLongLeftIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import { blogProps } from './blog-section';

import { useCarousel } from '@/lib/hooks/useCarousel';


function BlogCard({ blog }: { blog: blogProps }) {
  return (
    <Link
      className="w-full h-full flex flex-col gap-5"
      draggable={false}
      href={`/blog/${blog.title}`}
    >
      <div className="relative aspect-16/9 w-full max-h-50">
        <Image
          alt={blog.title.slice(0, 20)}
          className="rounded-2xl object-cover"
          draggable={false}
          fill
          src={blog.image}
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
}: {
  data: blogProps[];
}) {
    const { refCarousel} = useCarousel();

  return (
    <div ref={refCarousel} className="overflow-hidden">
      <div className="flex touch-pan-y touch-pinch-zoom -me-10">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pe-10 select-none"
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
