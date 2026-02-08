import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";

const category = ["جدید ترین", "پرفروش ترین", "ارزان ترین", "گران ترین"];

export default function TopProducts() {
  return (
    <div className="bg-surface flex w-full justify-center">
      <div className="container flex justify-between items-center text-background py-22">
        <div className="grid gap-2">
          <span>محصولات پرفروش</span>
          <b className="text-xl">پرفروش ترین محصولات منتخب </b>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-10">
            {category.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>

          <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5" />

              <ChevronLeftIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
