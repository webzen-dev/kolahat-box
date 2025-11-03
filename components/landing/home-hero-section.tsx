import Image from 'next/image';
import { ArrowLeftIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import Link from 'next/link';

export default function HomeHeroSection() {
  return (
    <div className="w-full h-screen bg-radial from-primary-500 to-primary-700 relative flex items-center justify-center flex-col gap-20 font-sans rounded-2xl">
      <Image
        fill
        src={'/images/hero-bg.png'}
        className="object-cover z-0"
        alt="hero background"
      />
      <div className="absolute bg-radial w-full h-full inset-0 from-0% to-primary-700 z-10" />
      <div className="container flex justify-between gap-10 text-background z-20">

        <div className="flex flex-col gap-10 w-1/2">
          <div className="flex flex-col text-5xl font-bold gap-2">
            <span>تعاملات کاربردی آسان با</span>
            <span>مشتری و بازاریابی</span>
            <span> اتوماسیون یکپارچه خودکار</span>
            <Image
              height={15}
              width={223}
              alt="outline wave"
              src={'/images/outline-wave.svg'}
              className="object-cover"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-2xl text-[#57B8FD]">
              انجام آسان همه کار ها با کلاهت باکس
            </span>

            <b className="flex items-center gap-1">
              مشاهده ویدیو معرفی
              <PlayCircleIcon className="size-6" />
            </b>
          </div>

          <div className="flex mt-10 gap-5 items-center">
            <Button
              color="primary"
              as={Link}
              className="py-5.25 px-6 w-auto h-auto flex items-center gap-2"
              dir="ltr"
              href="/custom-order"
            >
              سفارش تولید اختصاصی
            </Button>
            <Link
              className="py-5.25 px-6 w-auto h-auto flex items-center gap-2"
              href="/custom-order"
            >
              سفارش تولید اختصاصی
            </Link>
          </div>
        </div>
      </div>

      <Button className="flex items-center -rotate-90 justify-center bg-background z-20 rounded-full w-17 h-17 max-w-17 max-h-17 min-w-17 min-h-17">
        <ArrowLeftIcon className="size-6" />
      </Button>
    </div>
  );
}
