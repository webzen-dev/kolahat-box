import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/button';
import {
  ArrowLeftIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import HatIcon from '../icons/hat-icon';
import ScoreIcon from '../icons/score-icon';

export default function HomeHeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen gap-20 font-sans rounded-2xl bg-radial from-primary-500 to-primary-700">
      <Image
        fill
        src="/images/hero-bg.png"
        alt="hero background"
        draggable="false"
        className="object-cover z-0"
      />

      <div className="absolute inset-0 z-10 w-full h-full bg-radial from-0% to-primary-700" />

      <div className="container relative z-20 flex justify-between gap-10 text-background">
        <div className="flex flex-col w-1/2 gap-10 pt-27.5">
          <div className="flex flex-col gap-2 text-5xl font-bold">
            <span>تعاملات کاربردی آسان با</span>
            <span>مشتری و بازاریابی</span>
            <span>اتوماسیون یکپارچه خودکار</span>

            <Image
              height={15}
              width={223}
              alt="outline wave"
              src="/images/outline-wave.svg"
              draggable="false"
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl text-[#57B8FD]">
              انجام آسان همه کارها با کلاهت باکس
            </span>

            <b className="flex items-center gap-1">
              مشاهده ویدیو معرفی
              <PlayCircleIcon className="size-6" />
            </b>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <Button
              color="primary"
              as={Link}
              dir="ltr"
              href="/custom-order"
              className="flex items-center w-auto h-auto gap-2 px-6 py-5.25"
            >
              سفارش تولید اختصاصی
            </Button>

            <Link
              href="/custom-order"
              className="flex items-center w-auto h-auto gap-2 px-6 py-5.25"
            >
              سفارش تولید اختصاصی
            </Link>
          </div>
        </div>

        <div className="relative flex items-end w-112 h-128">
          <div className="relative w-100 h-100 rounded-2xl bg-primary shadow-2xl shadow-primary-500">
            <div className="absolute inset-0 left-0 right-0 top-30 bg-radial from-primary-300 to-primary blur-2xl shadow-2xl shadow-primary"></div>
            <Image
              src="/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png"
              height={204}
              width={204}
              draggable="false"
              alt="hat 1"
              className="absolute z-10 object-cover -left-22.5 -top-18.75"
            />

            <div className="absolute z-10 flex items-end w-66 h-66 -right-30 bottom-18">
              <Image
                src="/images/2394447fba5a4ae99d7329d42adf79d41c323d87.png"
                height={264}
                width={264}
                draggable="false"
                alt="hat 2"
                className="absolute z-10 object-cover scale-x-[-1]"
              />

              <div className="absolute bottom-0 left-10 z-0 w-full h-56 blur-2xl shadow-2xl bg-[rgba(221,85,47,0.4)] shadow-[rgba(221,85,47,0.7)]"/>
            </div>

            <div className="absolute z-0 flex items-center gap-4 p-4 bg-background rounded-2xl w-80.5 -top-6 -right-34">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#57AB4B]">
                <UserCircleIcon className="text-background size-6" />
              </div>

              <div className="flex flex-col flex-1 h-full gap-1">
                <b className="text-lg text-foreground">کاربری از کلاهت</b>

                <b className="flex items-center gap-1 text-sm text-foreground/50">
                  4.3 رضایت مشتری

                  <div className="flex items-center">
                    <ScoreIcon className="size-5 text-primary-600" />
                    <ScoreIcon className="size-5 text-primary-600" />
                    <ScoreIcon className="size-5 text-primary-600" />
                    <ScoreIcon className="size-5 text-primary-600" />
                  </div>
                </b>
              </div>
            </div>

            <div className="absolute z-10 flex flex-col items-center justify-center gap-2 p-6 text-center text-foreground bg-background rounded-2xl w-55 h-55 -bottom-8 -left-16">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FF5647]">
                <HatIcon className="text-background size-6" />
              </div>

              <b className="pt-3 text-xl">ما برات میسازیمش!</b>

              <span className="text-foreground/50">
                کلاه اختصاصی شما، مطابق سفارش تولید می‌شود
              </span>
            </div>
          </div>

          <div className="absolute left-3 right-3 bottom-0 z-0 w-100 h-full">
            <Image
              src="/images/downloadedImage-(5) 3.png"
              fill
              draggable="false"
              alt="man"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Button className="z-20 flex items-center justify-center w-17 h-17 min-w-17 min-h-17 max-w-17 max-h-17 -rotate-90 bg-background rounded-full">
        <ArrowLeftIcon className="size-6" />
      </Button>
    </div>
  );
}
