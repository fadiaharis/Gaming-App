"use client";

import Link from "next/link";
import clsx from "clsx";
import { SidebarItemProps } from "@/types/Sidebar-type";

export default function SidebarItem({
  href,
  label,
  labelNode,
  Icon,
  RightIcon,
  collapsed = false,
  active = false,
  badge,
  className = "",
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "group flex items-center rounded-xl text-sm transition text-white",
          collapsed ? "justify-center p-3" : "gap-2 px-3 py-2",
          "bg-white/5",
          !active &&
            "hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-transparent",
          active &&
            "bg-gradient-to-r from-emerald-500/40 to-transparent font-semibold",
          className
        )}
        aria-label={typeof labelNode !== "undefined" ? undefined : label}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {!collapsed && (
          <>
            <span className="text-sm font-semibold">{labelNode ?? label}</span>
            {badge ? (
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-md bg-[var(--accent)]/20 text-[var(--text)]">
                {badge}
              </span>
            ) : null}
            {RightIcon ? (
              <RightIcon
                className="ml-auto h-5 w-5 opacity-70 group-hover:opacity-100"
                aria-hidden="true"
              />
            ) : null}
          </>
        )}
      </Link>
    </li>
  );
}
