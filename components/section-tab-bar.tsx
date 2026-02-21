import { Chip } from "@heroui/react";
import clsx from "clsx";
import React, { memo } from "react";

import { Category } from "@/lib/types/types";

interface SectionWithTabsProps {
  eyebrow?: string;
  title: string;
  theme?: "light" | "dark";
  categories: Category[];
  className?: string;
  renderItem?: (item: Category) => React.ReactNode;
  headerAction?: React.ReactNode;
}

function SectionTabBar({
  eyebrow,
  title,
  theme = "dark",
  categories,
  className,
  renderItem,
  headerAction,
}: SectionWithTabsProps) {
  return (
    <div
      className={clsx(
        "flex justify-between gap-6 flex-col",
        "md:items-center md:flex-row px-7",
        theme === "light" ? "text-background" : "text-foreground",
        className,
      )}
    >
      <div className="grid gap-2">
        {eyebrow && (
          <span
            className={
              theme === "light" ? "text-background/80" : "text-foreground/80"
            }
          >
            {eyebrow}
          </span>
        )}
        <b className="text-xl">{title}</b>
      </div>

        <div className="flex items-center py-2 gap-2 overflow-auto max-w-full flex-1 justify-end">
          {categories.map((item) =>
            renderItem ? (
              renderItem(item)
            ) : (
              <Chip
                key={item.id}
                className={clsx(
                  "bg-transparent! text-nowrap cursor-pointer",
                  theme === "light"
                    ? "text-background"
                    : "text-foreground",
                )}
              >
                {item.title}
              </Chip>
            ),
          )}
        </div>
        
      {headerAction && <>{headerAction}</>}
    </div>
  );
}

export default memo(SectionTabBar);
