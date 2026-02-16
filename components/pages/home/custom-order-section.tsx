import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";

const customOrderBoxData = [
  {
    id: 1,
    title: "ارسال ایده و لوگو",
    description:
      "کافیست ارسال ایده و لوگو انجام دهید، تولید کلاه شما آغاز خواهد شد",

    icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
  },
  {
    id: 2,
    title: "تایید طرح و پیش فاکتور",
    description:
      "با تایید طرح و پیش فاکتور، سفارش شما وارد مرحله تولید خواهد شد",
    icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
  },
  {
    id: 3,
    title: "تولید و تحویل سریع",
    description:
      "پس از تایید، تولید و تحویل سریع کلاه‌ها طبق زمان‌بندی انجام می‌شود",
    icon: <PaperAirplaneIcon className="w-6 h-6 text-surface" />,
  },
];

export default function CustomOrder() {
  return (
    <section className="flex flex-col gap-10 md:gap-28 mb-32">
      {/* custom order header */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <Image
            alt="کلاه  خاکستری"
            className="object-cover rotate-13"
            height={200}
            src="/images/d8b87f2354cc5def66bff39d208781faa21c7fd9.png"
            width={200}
          />

          <span className="text-foreground/60 text-base font-normal">
            سفارش اختصاصی
          </span>
          <b className="text-xl">تنها در 3 مرحله ساده !</b>
        </div>

        <Button
          className="bg-foreground text-background py-4 px-6 h-16 rounded-xl hidden md:flex"
          variant="secondary"
        >
          شروع مشاوره رایگان
        </Button>
      </div>

      <div
        className={clsx(
          "flex flex-col flex-wrap",
          "p-10 gap-10 ",
          "border border-foreground/10 rounded-2xl",
          "md:flex-row lg:flex-nowrap",
        )}
      >
        {customOrderBoxData.map((item, idx) => (
          <div key={idx} className="flex-1/3 flex flex-col gap-10">
            <div
              className={clsx(
                "flex items-center justify-center w-16 h-16",
                "border border-foreground/10 rounded-full",
              )}
            >
              {item.icon}
            </div>

            {/* text box */}
            <div
              className={clsx(
                "relative flex flex-col gap-6",
                // after
                "after:content-[''] after:absolute after:-top-1",
                "after:w-2.5 after:h-2.5 after:rounded-full after:bg-surface",
                // before
                "before:content-[''] before:ms-8 before:h-0.5 before:w-1/2",
                "before:bg-foreground/10 last:before:w-full",
              )}
            >
              <b className="text-lg">
                {item.id.toLocaleString("fa-IR")} . {item.title}
              </b>

              <p className="text-foreground/40 text-base font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button
        className="bg-foreground text-background w-full h-16 rounded-xl md:hidden"
        variant="secondary"
      >
        شروع مشاوره رایگان
      </Button>
    </section>
  );
}
