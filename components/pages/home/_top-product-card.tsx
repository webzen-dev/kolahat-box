import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/types/types";

export default function TopProductCard({ product }: { product: Product }) {
  if (product.slug)
    return (
      <Link
        className={clsx(
          "pe-6 group flex-[80%_0_0]",
          "md:flex-[50%_0_0] lg:flex-[33.33%_0_0] xl:flex-[25%_0_0] 2xl:flex-[20%_0_0]",
        )}
        draggable={false}
        href={product.slug}
      >
        <div className="bg-background rounded-3xl p-6 gap-8 flex flex-col">
          <div
            className={clsx(
              "relative flex items-center justify-center p-8",
              "aspect-9/10 rounded-2xl bg-foreground/5 overflow-hidden",
            )}
          >
            {typeof product.discountPercentage === "number" &&
              product.discountPercentage > 0 && (
                <span
                  className={clsx(
                    "absolute left-4 top-4 py-2 px-4 rounded-4xl",
                    "bg-linear-to-r from-[#FF0505] to-[#FB653B] text-background",
                  )}
                >
                  {product.discountPercentage.toLocaleString("fa-IR")}% تخفیف
                </span>
              )}

            <Image
              alt={product.name}
              className={clsx(
                "w-full h-auto object-contain",
                "group-hover:scale-125 transition-[scale] duration-300",
              )}
              draggable={false}
              height={100}
              src={product.gallery || "/images/no-image.png"}
              width={200}
            />
          </div>

          <b className="text-base">{product.name}</b>

          <div className="flex justify-between">
            <div className="flex flex-col justify-between items-end">
              {typeof product.discountPercentage === "number" &&
              product.discountPercentage > 0 && (
                <span className="text-sm text-foreground/60">
                  {product.discountedPrice?.toLocaleString("fa-IR")} تومان
                </span>
              )}

              <p className="text-lg font-extrabold mt-auto">
                {product.price.toLocaleString("fa-IR")} تومان
              </p>
            </div>

            <BuildingStorefrontIcon
              className={clsx(
                "h-15 w-15 p-5 rounded-full",
                "bg-surface text-background",
              )}
            />
          </div>
        </div>
      </Link>
    );
}

// __________________________________________________

// Do you love me mm25zamanian ?  ^^
// __________________________________________________
