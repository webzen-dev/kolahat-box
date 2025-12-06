'use client';

import { Button } from '@heroui/button';
import Link from 'next/link';
import BlogCarousel from './_blog-carousel';
import { useBlogCarousel } from './_useBlogCarousel';
import useEmblaCarousel from 'embla-carousel-react';

export interface blogProps {
  id: number;
  image: string;
  tag: string;
  author: string;
  title: string;
  caption: string;
}

export default function BlogSection({ blog }: { blog: blogProps[] }) {
  const { ref } = useBlogCarousel();
  return (
    <section className="flex flex-col w-full gap-18 mt-40">
      {/* header section */}
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <span className="text-foreground/60">مقالات</span>
          <b className="text-2xl">بهترین و آموزنده ترین مقاله ها</b>
        </div>

        <Button
          className="bg-foreground text-background outline-none"
          dir="ltr"
          size="lg"
        >
          <Link href={'/blogs'}>مشاهده همه مقالات</Link>
        </Button>
      </div>

      {/* carousel section */}
      <BlogCarousel data={blog}  emblaRef={ref} />
    </section>
  );
}
