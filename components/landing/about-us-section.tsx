'use client';

import { useState } from 'react';
import Image from 'next/image';

import { PlayIcon } from '@heroicons/react/24/outline';

import ReactPlayer from 'react-player';

export default function AboutUsSection() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <section className="container mx-auto flex my-40 justify-between items-center gap-10 md:gap-22 max-md:flex-col-reverse px-7">
      <div className="flex-1 flex flex-col gap-5">
        <Image
          height={41.54}
          width={37.4}
          src={'/images/Star 2.png'}
          alt="star icon"
          className="object-cover"
        />

        <div className="flex flex-col gap-2 md:max-w-3/4">
          <span className="text-foreground/60 text-base md:text-lg">
            درباره ما بیشتر بدانید
          </span>
          <b className="text-lg md:text-xl font-bold">
            تعاملات کاربردی آسان با مشتری و بازاریابی اتوماسیون یکپارچه خودکار
          </b>
        </div>

        <div className="text-foreground/60 text-base md:text-lg">
          مجموعه ما با سال‌ها تجربه در طراحی و تولید انواع کلاه، به‌عنوان یکی از
          تأمین‌کنندگان معتبر در بازار عمده‌فروشی فعالیت می‌کند. ما تخصص خود را
          بر تولید کلاه‌های باکیفیت، متنوع و مطابق نیاز مشتریان متمرکز کرده‌ایم
          تا برندهافروشگاه‌ها و کسب‌وکارها بتوانند با اطمینان محصولات خود را
          تأمین کنند.
        </div>
      </div>

      <div className="relative min-w-1/2 h-50 max-md:min-w-full lg:min-w-156.5 md:h-100 rounded-2xl overflow-hidden">
        {playing ? (
          <ReactPlayer
            src="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
            playing={playing}
            className="min-w-full min-h-full"
          />
        ) : (
          <div>
            <div className="absolute inset-0 rounded-2xl bg-foreground/40 z-20" />
            <Image
              src={'/images/thumbnail.jpg'}
              fill
              className="object-cover grayscale-0 rounded-2xl"
              alt="thumbnail video"
            />
          </div>
        )}
        {!playing && (
          <button
            onClick={handlePlayPause}
            className="w-18 h-18 rounded-full bg-background absolute z-20 top-1/2 left-1/2 transform -translate-1/2 outline-5 outline-background/50 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-foreground/50 animate-ping rounded-full z-0"/>
            <PlayIcon className="h-10 w-10 text-foreground" />
          </button>
        )}
      </div>
    </section>
  );
}
