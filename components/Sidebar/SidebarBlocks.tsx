"use client";

import Link from "next/link";
import clsx from "clsx";
import { SidebarBlocksProps } from "@/types/Sidebar-type";

export default function SidebarBlocks({
  items,
  collapsed = false,
}: SidebarBlocksProps) {
  if (collapsed) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-2 my-1">
      {items.map(({ href, Icon, label }) => (
        <Link
          key={href}
          href={href}
          aria-label={label}
          className={clsx(
            "flex flex-col items-center justify-center rounded-lg bg-white/5 text-white",
            "hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-transparent transition p-2"
          )}
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
