import clsx from "clsx";
import Image from "next/image";

interface AboutUsSectionProps {
  videoSrc: string;
  poster?: string;
}

export default function AboutUsSection({
  videoSrc,
  poster = "/images/thumbnail.jpg",
}: AboutUsSectionProps) {
  return (
    <section
      className={clsx(
        "flex flex-col-reverse items-center",
        "gap-12 lg:flex-row mb-36",
      )}
    >
      <div className="flex flex-1 flex-col gap-6">
        <Image
          alt="star"
          className="object-contain"
          height={42}
          src="/images/Star 2.png"
          width={38}
        />


        <div className="flex flex-col gap-3 max-w-prose">
          <span className="text-sm md:text-base text-foreground/60">
            درباره ما بیشتر بدانید
          </span>

          <b className="text-xl md:text-2xl font-bold leading-relaxed">
            تعاملات کاربردی آسان با مشتری و بازاریابی اتوماسیون یکپارچه خودکار.
          </b>
        </div>

        <p className="text-sm md:text-base leading-7 text-foreground/70">
          مجموعه ما با سال‌ها تجربه در طراحی و تولید انواع کلاه، به‌عنوان یکی از
          تأمین‌کنندگان معتبر در بازار عمده‌فروشی فعالیت می‌کند. ما تخصص خود را
          بر تولید کلاه‌های باکیفیت، متنوع و مطابق نیاز مشتریان متمرکز کرده‌ایم
          تا برندهافروشگاه‌ها و کسب‌وکارها بتوانند با اطمینان محصولات خود را
          تأمین کنند.
        </p>
      </div>

      {/* Video */}
      <div className="relative w-full max-h-100 aspect-4/3 lg:flex-[0_0_50%]">
        <video
          className="h-full w-full rounded-2xl object-cover"
          controls
          poster={poster}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    </section>
  );
}
