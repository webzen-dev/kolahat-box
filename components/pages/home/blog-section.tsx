

import { Button } from '@heroui/react';
import Link from 'next/link';

import BlogCarousel from './_blog-carousel';

export interface blogProps {
  id: number;
  image: string;
  tag: string;
  author: string;
  title: string;
  caption: string;
}

export default function BlogSection({ blog }: { blog: blogProps[] }) {

  return (
    <section className="flex flex-col w-full gap-18 mb-50">
      {/* header section */}
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <span className="text-foreground/60">مقالات</span>
          <b className="text-2xl">بهترین و آموزنده ترین مقاله ها</b>
        </div>

        <Button
          className="bg-foreground text-background py-4 px-6 h-16 rounded-xl hidden md:flex"
          dir="ltr"
          size="lg"
        >
          <Link href="/blogs">مشاهده همه مقالات</Link>
        </Button>
      </div>

      {/* carousel section */}
      <BlogCarousel data={blog} />
    </section>
  );
}
