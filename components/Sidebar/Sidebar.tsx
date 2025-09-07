"use client";

import { SidebarBlockItems, SidebarCasinoItems } from "@/data/Sidebar-data";
import {
  BanknotesIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  GiftIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SidebarBlocks from "./SidebarBlocks";
import { useSidebar } from "./SidebarContext";
import SidebarDropdown from "./SidebarDropdown";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside
      className={clsx(
        "fixed z-20 top-16 p-2 pt-4 bottom-0 overflow-y-scroll no-scrollbar hide-scrollbar bg-[#2a2d2e] border-white/10 transition-[width] duration-200 overflow-hidden flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {!collapsed && (
        <div className="relative h-[100px] shrink-0 rounded-lg overflow-hidden mb-2">
          <div className="bg-gradient-to-r from-[#2a2d2e] to-[#2dee8866] w-full h-full rounded-lg pl-[10px] flex">
            <div className="w-[82%] text-white h-full flex flex-col justify-center">
              <div className="text-[10px] bg-[#328D5D] font-semibold py-[1px] rounded-[4px] w-max -skew-x-[30deg] px-[12px] ml-[2px]">
                <div className="skew-x-[30deg]">Refer and Earn</div>
              </div>

              {/* Heading */}
              <div className="text-[13px] font-extrabold my-[5px]">
                Refer friends and earn commissions
              </div>

              {/* Copy link button */}
              <div className="leading-[18px] text-[10px] bg-[#328D5D] font-semibold py-[1px] px-[8px] rounded-[4px] w-max cursor-pointer relative z-[2]">
                Copy link
              </div>
            </div>

            <img
              src="/images/sideBar-card.png"
              alt="affiliate"
              className="h-full absolute right-0 bottom-0 pointer-events-none"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 mt-3">
        <ul className="space-y-1">
          <SidebarItem
            href="/bonus"
            Icon={GiftIcon}
            label="Bonus"
            collapsed={collapsed}
            active={usePathname() === "/bonus"}
          />

          <SidebarBlocks collapsed={collapsed} items={SidebarBlockItems} />
          <SidebarItem
            href="/hash-games"
            Icon={BoltIcon}
            label="Hash Games"
            collapsed={collapsed}
            active={usePathname() === "/hash-games"}
          />

          <SidebarDropdown
            parentHref="/casino"
            label="Casino"
            Icon={SparklesIcon}
            collapsed={collapsed}
            items={SidebarCasinoItems}
          />

          <SidebarItem
            href="/vip"
            Icon={SparklesIcon}
            labelNode={
              <span className="font-semibold">
                <span className="text-emerald-400">VIP</span> Club
              </span>
            }
            collapsed={collapsed}
            active={usePathname() === "/vip"}
            className="bg-[#323738]"
          />

          <SidebarItem
            href="/referral"
            Icon={UsersIcon}
            label="Referral"
            collapsed={collapsed}
            active={usePathname() === "/referral"}
          />

          <SidebarItem
            href="/responsible-gambling"
            Icon={ShieldCheckIcon}
            label="Responsible Gambling"
            collapsed={collapsed}
            active={usePathname() === "/responsible-gambling"}
          />

          <SidebarItem
            href="/language"
            Icon={GlobeAltIcon}
            label="English"
            RightIcon={ChevronRightIcon}
            collapsed={collapsed}
            active={usePathname() === "/language"}
          />

          <SidebarItem
            href="/usdt"
            Icon={BanknotesIcon}
            label="USDT"
            RightIcon={ChevronRightIcon}
            collapsed={collapsed}
            active={usePathname() === "/usdt"}
          />

          <SidebarItem
            href="/support"
            Icon={ChatBubbleLeftRightIcon}
            label="Live Support"
            collapsed={collapsed}
            active={usePathname() === "/support"}
          />
        </ul>
      </nav>
    </aside>
  );
}
