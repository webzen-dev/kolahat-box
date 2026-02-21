import { PlayCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import HatIcon from "../icons/hat-icon";
import ScoreIcon from "../icons/score-icon";

export default function HomeHeroSection() {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center w-full h-auto md:h-[90vh] rounded-b-3xl mb-36",
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
      <div className="container flex h-full gap-12 pt-34 flex-col-reverse md:flex-row pe-20">
        <div className="flex flex-col flex-5/10 h-full gap-20 justify-center items-center md:items-start shrink-0">
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
              <PlayCircleIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex items-center gap-10 text-background">
            <Button className="bg-surface">سفارش تولید اختصاصی</Button>

            <Link href="/">مشاهده نمونه کار ها</Link>
          </div>
        </div>

        {/* <div className="flex w-full h-full items-center relative"> */}
            <Image src="/images/aaaaaaaaa.png" height={550} width={550} alt=""  className="object-contain drop-shadow-[0px_40px_100px_var(--surface)]"/>
            {/* main layer  for stickers  */}
            {/* <div className="absolute inset-0">
              <div
                className={clsx(
                  "absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4",
                  "flex flex-col aspect-square items-center justify-center gap-2",
                  "rounded-3xl bg-background p-2 md:p-4 text-center",
                )}
              >
                <span className="p-2 md:p-3 rounded-full bg-[#FF5647] mx-auto mb-4">
                  <HatIcon className={clsx("h-6 w-6 text-background")} />
                </span>

                <b className="text-base md:text-xl">ما برات میسازیمش !</b>

                <p className="text-xs md:text-sm text-foreground/60 max-w-44">
                  کلاه اختصاصی شما، مطابق سفارش تولید می‌شود
                </p>
              </div> */}

            {/* <div className="bg-background rounded-2xl flex items-center gap-4 px-6 py-4 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3">
                <UserCircleIcon className="text-background w-8 h-8 md:w-14 md:h-14 bg-[#57AB4B] rounded-full p-2 md:p-4" />

                <div className="grid gap-2">
                  <b className="text-base md:text-lg">کاربری از کلاهت</b>
                  <div className="flex text-foreground/60 text-xs md:text-sm gap-1">
                    <p>4.3 رضایت مشتری</p>

                    <div className="flex">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <ScoreIcon
                          key={i}
                          className="w-3 h-3 md:h-5 md:w-5 text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
            {/* 
            <Image
              alt="استیکر کلاه خاکستری"
              className="absolute -top-18 -left-20"
              height={200}
              src="/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png"
              width={200}
            />

            <Image
              alt="استیکر کلاه نارنجی"
              className="absolute bottom-10 -right-15 md:-right-30 rotate-y-180 max-w-2/3 aspect-square"
              height={264}
              src="/images/2394447fba5a4ae99d7329d42adf79d41c323d87.png"
              width={264}
            /> */}

          {/* <Image
              alt="مرد کلاه دار ^^"
              className="object-contain max-w-full absolute bottom-0"
              height={512}
              src="/images/downloadedImage-(5) 3.png"
              width={460}
            /> */}
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
}
