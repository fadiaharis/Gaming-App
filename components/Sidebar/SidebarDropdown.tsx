"use client";

import { SidebarDropdownProps } from "@/types/Sidebar-type";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarItem from "./SidebarItem";

export default function SidebarDropdown({
  parentHref,
  label,
  Icon,
  items,
  collapsed = false,
  className = "",
}: SidebarDropdownProps) {
  const pathname = usePathname();

  /** active if on parent or any child route */
  const active =
    pathname === parentHref || pathname.startsWith(`${parentHref}/`);

  /**
   * state: open by default (when expanded), closed if collapsed
   */
  const [open, setOpen] = useState(!collapsed);

  return (
    <li className={clsx("select-none", className)}>
      {/* Header */}
      <div
        className={clsx(
          "group flex items-center rounded-xl text-sm transition text-white hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-transparent",
          active ? "bg-white/10" : "bg-white/5",
          collapsed ? "justify-center p-3" : "gap-2 px-3 py-2"
        )}
      >
        <Link
          href={parentHref}
          className={clsx(
            "flex items-center flex-1",
            collapsed ? "justify-center" : "gap-2"
          )}
        >
          <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {!collapsed && <span className="text-sm font-semibold">{label}</span>}
        </Link>

        {/* Chevron toggle */}
        {!collapsed && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="ml-auto rounded p-1 hover:bg-white/10"
          >
            {open ? (
              <ChevronUpIcon className="h-5 w-5 opacity-70" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 opacity-70" />
            )}
          </button>
        )}
      </div>

      {/* Children */}
      {!collapsed && open && (
        <ul className="mt-1 space-y-1 rounded-xl bg-white/[0.04] p-2">
          {items.map(({ href, label, Icon }) => {
            const childActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <SidebarItem
                key={href}
                href={href}
                Icon={Icon}
                label={label}
                active={childActive}
                collapsed={false}
                className="bg-transparent"
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
