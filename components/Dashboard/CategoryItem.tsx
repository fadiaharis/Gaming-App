"use client";

import { CategoryItemProps } from "@/types/Dashboard-type";
import clsx from "clsx";
import Link from "next/link";

export default function CategoryItem({
  href,
  label,
  Icon,
  active,
}: CategoryItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition",
        active ? "bg-emerald-500/10" : "hover:bg-emerald-500/10"
      )}
    >
      <Icon
        className={clsx(
          "h-5 w-5 shrink-0 transition-colors",
          active
            ? "text-emerald-400"
            : "text-gray-400 group-hover:text-emerald-400"
        )}
      />
      <span
        className={clsx(
          "font-medium transition-colors",
          active
            ? "text-white font-bold"
            : "text-gray-400 group-hover:text-white group-hover:font-bold"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
