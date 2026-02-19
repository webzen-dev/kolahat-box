"use client";

import {
  // ArrowLeftIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import HatIcon from "../icons/hat-icon";
import ScoreIcon from "../icons/score-icon";

// const handleScrollDown = () => {
//   window.scrollBy({
//     top: window.innerHeight / 2,
//     behavior: "smooth",
//   });
// };

// function CustomOfferCard() {
//   return (
//     <div className="absolute z-10 flex flex-col items-center justify-center gap-1 text-center bg-background rounded-2xl w-35 h-35 -bottom-8 -left-16 text-foreground md:w-45 md:h-45 lg:gap-2 lg:p-6 lg:w-55 lg:h-55">
//       <div className="flex items-center justify-center w-9 h-9 bg-[#FF5647] rounded-full lg:w-14 lg:h-14 md:w-13 md:h-13">
//         <HatIcon className="text-background size-4.5 md:size-5 lg:size-6" />
//       </div>

//       <b className="text-sm md:pt-3 md:text-lg lg:text-xl">ما برات میسازیمش!</b>

//       <span className="text-xs text-foreground/50 md:text-sm lg:text-base">
//         کلاه اختصاصی شما، مطابق سفارش تولید می‌شود
//       </span>
//     </div>
//   );
// }

// function UserReviewCard() {
//   return (
//     <div className="absolute z-0 flex items-center gap-2 p-2 rounded-2xl bg-background md:p-4 md:-right-34 lg:gap-4lg:w-80.5 -top-10 -right-16">
//       <div className="flex items-center justify-center w-8 h-8 bg-[#57AB4B] rounded-full lg:w-14 lg:h-14">
//         <UserCircleIcon className="text-background size-5 lg:size-6" />
//       </div>

//       <div className="flex flex-col flex-1 h-full lg:gap-1">
//         <b className="text-sm lg:text-lg text-foreground">کاربری از کلاهت</b>

//         <b className="flex items-center gap-1 text-xs text-foreground/50 lg:text-sm">
//           4.3 رضایت مشتری
//           <div className="flex items-center">
//             {Array.from({ length: 4 }).map((_, i) => (
//               <ScoreIcon
//                 key={i}
//                 className="size-3 lg:size-5 text-primary-600"
//               />
//             ))}
//           </div>
//         </b>
//       </div>
//     </div>
//   );
// }

export default function HomeHeroSection() {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center w-full h-[90vh] rounded-b-3xl mb-36",
        "bg-accent",
      )}
    >
      <Image
        alt="hero background"
        className="z-0 object-cover"
        draggable="false"
        fill
        src="/images/hero-bg.png"
      />
      <div className="container flex h-full gap-8 pt-24">
        <div className="flex flex-col flex-6/10 h-full gap-20 justify-center">
          {/* heading text  */}
          <div className="grid">
            <h1 className=" text-background font-bold text-5xl">
              تعاملات کاربردی آسان با <br /> مشتری و بازاریابی
              <br />
              اتوماسیون یکپارچه خودکار
            </h1>

            <Image
              alt="shape curly"
              height={15}
              src="/images/outline-wave.svg"
              width={220}
            />
          </div>

          <div className="flex items-center gap-6 text-accent-foreground">
            <p className="text-lg text-surface/50 after:content-[''] after:h-8 after:w-0.5 after:inline-block after:bg-background/20 flex items-center gap-6">
              انجام آسان همه کار ها با کلاهت باکس
            </p>

            <Link className="flex items-center gap-2" href="/show-video">
              مشاهده ویدیو معرفی
              {/* icon  */}
              <PlayCircleIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex items-center gap-10 text-background">
            <Button className="bg-surface">سفارش تولید اختصاصی</Button>

            <Link href="/">مشاهده نمونه کار ها</Link>
          </div>
        </div>

        <div className="flex flex-4/10 h-full items-center justify-center">
          <div className="w-full aspect-square bg-surface z-20 max-w-100 rounded-2xl relative">
            <div
              className={clsx(
                "absolute -bottom-10 -left-10",
                "flex aspect-square w-55 flex-col items-center justify-center gap-2",
                "rounded-3xl bg-background p-4 text-center",
              )}
            >
              <HatIcon
                className={clsx(
                  "mx-auto mb-4",
                  "h-13 w-13",
                  "rounded-full bg-[#FF5647] p-3 text-background",
                )}
              />

              <b className="text-xl">ما برات میسازیمش !</b>

              <p className="text-sm text-foreground/60">
                کلاه اختصاصی شما، مطابق سفارش تولید می‌شود
              </p>
            </div>

            <div className="w-80 h-22 bg-background rounded-2xl flex items-center gap-4 px-6 py-4 absolute -top-6 -right-40">
              <UserCircleIcon className="text-background w-14 h-14 bg-[#57AB4B] rounded-full p-4" />

              <div className="grid gap-2">
                <b className="text-lg">کاربری از کلاهت</b>
                <div className="flex text-foreground/60 text-sm gap-1">
                  <p>4.3 رضایت مشتری</p>

                  <div className="flex">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ScoreIcon key={i} className="h-5 w-5 text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Image
              alt="استیکر کلاه خاکستری"
              className="absolute -top-18 -left-20"
              height={200}
              src="/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png"
              width={200}
            />

            <Image
              alt="استیکر کلاه خاکستری"
              className="absolute bottom-10 -right-30 rotate-y-180"
              height={264}
              src="/images/2394447fba5a4ae99d7329d42adf79d41c323d87.png"
              width={264}
            />

            <Image
              alt="مرد کلاه دار ^^"
              className=""
              height={512}
              src="/images/downloadedImage-(5) 3.png"
              width={460}
            />

          </div>
        </div>
      </div>
      {/* <div
        className={clsx(
          'container relative z-20 flex justify-start gap-15 text-background w-full mt-15',
          'max-md:flex-1 md:mt-25 md:px-10 max-lg:max-w-none max-lg:p-15 max-lg:pe-20 max-lg:gap-0 lg:justify-between lg:gap-10 max-lg:items-center max-lg:py-10 max-md:flex-col-reverse'
        )}
      > */}
      {/* <div className="flex flex-col w-1/2 gap-5 pt-10 md:pt-20 md:items-start lg:pt-33 lg:gap-10 max-lg:w-full">
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

          <div className="flex items-center gap-2 lg:gap-10 max-lg:flex-col-reverse lg:items-start">
            <span className="text-[#57B8FD] lg:text-2xl">
              انجام آسان همه کارها با کلاهت باکس
            </span>
            <div className="w-12 h-0.5 bg-background/20 lg:hidden" />
            <b className="flex items-center gap-2 lg:gap-1 max-lg:text-sm h-full">
              مشاهده ویدیو معرفی
              <PlayCircleIcon className="size-5 lg:size-6" />
            </b>
          </div>

          <div className="flex items-center gap-2 lg:gap-5 max-md:flex-col md:items-start lg:mt-10">
            <Button
              color="primary"
              as={Link}
              dir="ltr"
              href="/custom-order"
              className="flex items-center gap-2 py-3 px-5 w-auto h-auto max-xl:text-sm lg:px-6 lg:py-5.25"
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
        </div> */}

      {/* <div className="relative flex justify-center items-end w-1/2 aspect-square"></div> */}
      {/* </div> */}

      {/* <Button
        className="z-20 flex items-center justify-center rounded-full bg-background max-md:hidden md:w-14 md:h-14 md:min-w-14 md:min-h-14 md:max-w-14 md:max-h-14 lg:w-17 lg:h-17 lg:min-w-17 lg:min-h-17 lg:max-w-17 lg:max-h-17 animate-bounce"
        onClick={() => handleScrollDown()}
      >
        <ArrowLeftIcon className="size-6 -rotate-90" />
      </Button> */}
    </div>
  );
}
