"use client";

import { BigWinCardProps } from "@/types/Dashboard-type";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function BigWinCard({
  imgSrc,
  player,
  amount,
}: BigWinCardProps) {
  return (
    <div className="w-[60px] sm:w-[60px] mr-3 shrink-0">
      {/* Game image */}
      <div className="rounded-2xl overflow-hidden bg-black/20">
        <Image
          src={imgSrc}
          alt={player}
          width={60}
          height={80}
          className="h-[80px] w-full object-contain"
          priority
        />
      </div>

      {/* Player row */}
      <div className="mt-1 flex items-center gap-1 text-white/90 min-w-0">
        <UserCircleIcon className="h-4 w-4 opacity-50 shrink-0" />
        <span className="block min-w-0 truncate text-[10px] font-semibold">
          {player}
        </span>
      </div>

      {/* Amount */}
      <div className="text-green-400 text-[10px] font-bold mt-0.5">
        {amount}
      </div>
    </div>
  );
}
