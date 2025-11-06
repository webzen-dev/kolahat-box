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
    <div className="relative flex flex-col items-center justify-center w-full h-[95vh] max-md:pb-12 max-md:pt-30 font-sans bg-radial from-primary-500 to-primary-700 rounded-b-3xl 
      overflow-hidden 
    lg:h-[90vh] lg:gap-20 gap-5">
      <Image
        fill
        src="/images/hero-bg.png"
        alt="hero background"
        draggable="false"
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 w-full h-full bg-radial from-0% to-primary-700 rounded-b-3xl" />

      <div className="container relative z-20 flex justify-start gap-15 text-background w-full max-md:flex-1 max-lg:gap-0 md:justify-between lg:gap-10 max-md:flex-col-reverse">
        <div className="flex flex-col w-1/2 gap-5 lg:gap-10 lg:pt-33 max-md:items-center max-md:w-full max-lg:pt-30">
          <div className="flex flex-col text-3xl font-bold max-md:items-center md:text-3xl lg:text-5xl">
            <span>تعاملات کاربردی آسان با</span>
            <span>مشتری و بازاریابی</span>
            <span>اتوماسیون یکپارچه خودکار</span>

            <Image
              height={15}
              width={223}
              src="/images/outline-wave.svg"
              alt="outline wave"
              draggable="false"
              className="object-cover max-md:pt-2"
            />
          </div>

          <div className="flex items-center justify-between gap-2 max-lg:flex-col-reverse md:items-start">
            <span className="text-[#57B8FD] lg:text-2xl">
              انجام آسان همه کارها با کلاهت باکس
            </span>
            <div className="w-12 h-0.5 bg-background/20 md:hidden" />
            <b className="flex items-center gap-2 lg:gap-1 max-md:text-sm">
              مشاهده ویدیو معرفی
              <PlayCircleIcon className="size-5 lg:size-6" />
            </b>
          </div>

          <div
            className="flex items-center gap-5 max-md:flex-col md:items-start lg:mt-10
          "
          >
            <Button
              color="primary"
              as={Link}
              dir="ltr"
              href="/custom-order"
              className="flex items-center gap-2 p-5 w-auto h-auto max-xl:text-sm lg:px-6 lg:py-5.25"
            >
              سفارش تولید اختصاصی
            </Button>

            <Link
              href="/custom-order"
              className="flex items-center gap-2 p-5 w-auto h-auto max-xl:text-sm lg:px-6 lg:py-5.25"
            >
              سفارش تولید اختصاصی
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-end w-full h-70 md:w-80 md:h-92 lg:w-112 lg:h-128">
          <div className="relative w-60 h-65 bg-primary rounded-2xl shadow-primary-500 md:w-70 md:h-75 lg:w-100 lg:h-100 lg:shadow-2xl">
            <div className="absolute left-0 right-0 top-30 inset-0 bg-radial from-primary-300 to-primary blur-2xl shadow-2xl shadow-primary" />

            <div className="absolute z-10 w-34 h-34 -left-15 -top-15 lg:w-51 lg:h-51 lg:-left-22.5 lg:-top-18.75">
              <Image
                src="/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png"
                fill
                draggable="false"
                alt="hat 1"
                className="object-cover"
              />
            </div>

            <div className="absolute z-10 flex items-end w-40 h-40 -right-15 bottom-16 lg:w-66 lg:h-66 lg:-right-30 lg:bottom-18">
              <Image
                src="/images/2394447fba5a4ae99d7329d42adf79d41c323d87.png"
                height={264}
                width={264}
                draggable="false"
                alt="hat 2"
                className="absolute z-10 object-cover scale-x-[-1]"
              />

              <div className="absolute bottom-0 left-10 z-0 w-full h-full bg-[rgba(221,85,47,0.4)] blur-2xl shadow-2xl lg:h-56 shadow-[rgba(221,85,47,0.7)]" />
            </div>
            
              <div className="absolute z-0 flex items-center gap-2 p-2 rounded-2xl bg-background md:p-4 md:-right-34 lg:gap-4lg:w-80.5 -top-10 -right-16">
                <div className="flex items-center justify-center w-8 h-8 bg-[#57AB4B] rounded-full lg:w-14 lg:h-14">
                  <UserCircleIcon className="text-background size-5 lg:size-6" />
                </div>

                <div className="flex flex-col flex-1 h-full lg:gap-1">
                  <b className="text-sm lg:text-lg text-foreground">
                    کاربری از کلاهت
                  </b>

                  <b className="flex items-center gap-1 text-xs text-foreground/50 lg:text-sm">
                    4.3 رضایت مشتری
                    <div className="flex items-center">
                      <ScoreIcon className="size-3 lg:size-5 text-primary-600" />
                      <ScoreIcon className="size-3 lg:size-5 text-primary-600" />
                      <ScoreIcon className="size-3 lg:size-5 text-primary-600" />
                      <ScoreIcon className="size-3 lg:size-5 text-primary-600" />
                    </div>
                  </b>
                </div>
              </div>

            <div className="absolute z-10 flex flex-col items-center justify-center gap-1 text-center bg-background rounded-2xl w-35 h-35 -bottom-8 -left-16 text-foreground md:w-45 md:h-45 lg:gap-2 lg:p-6 lg:w-55 lg:h-55">
              <div className="flex items-center justify-center w-9 h-9 bg-[#FF5647] rounded-full lg:w-14 lg:h-14 md:w-13 md:h-13">
                <HatIcon className="text-background size-4.5 md:size-5 lg:size-6" />
              </div>

              <b className="text-sm md:pt-3 md:text-lg lg:text-xl">ما برات میسازیمش!</b>

              <span className="text-xs text-foreground/50 md:text-sm lg:text-base">
                کلاه اختصاصی شما، مطابق سفارش تولید می‌شود
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 z-0 w-60 h-full md:w-70 max-lg:mr-5 lg:w-100">
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

      <Button className="z-20 flex items-center justify-center rounded-full bg-background -rotate-90 max-md:hidden lg:w-17 lg:h-17 lg:min-w-17 lg:min-h-17 mlgdlg:max-w-17 lg:max-h-17">
        <ArrowLeftIcon className="size-6" />
      </Button>
    </div>
  );
}
