"use client";

import { GlobeAltIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { useSidebar } from "../Sidebar/SidebarContext";

export default function Header() {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="fixed top-0 inset-x-0 z-30 h-16 bg-[#2a2d2e]">
      <div className="h-full mx-auto flex items-center gap-3 px-4">
        <button
          aria-label="Toggle menu"
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl p-2 bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Link href="/" className="items-center">
          <Image
            src="/images/betaHg.svg"
            alt="HG Logo"
            width={153}
            height={40}
          />
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <button className="p-2 mr-2 rounded-xl bg-white/10 group">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-300 group-hover:text-white" />
          </button>
          <a href="#signin" className="btn-ghost">
            Sign in
          </a>
          <a href="#signup" className="btn-primary">
            Sign up
          </a>
          <a
            href="#currency"
            className="hidden md:flex relative ml-2 h-10 flex-none rounded-lg bg-[#3E4446] w-auto items-center"
          >
            <button
              title="Change language"
              className="relative size-10 flex items-center justify-center p-0"
            >
              <GlobeAltIcon className="h-6 w-6 text-[#BBC6C9]" />
            </button>

            {/* Divider */}
            <div className="relative h-6 w-[0.5px] mr-2 bg-[#252424]"></div>

            <button className="h-10 pr-2 py-0 flex items-center">
              <span className="font-semibold text-[#BBC6C9]">USDT</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
