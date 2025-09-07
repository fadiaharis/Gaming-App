"use client";

import { GameTileProps } from "@/types/Dashboard-type";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function GameTile({
  src,
  alt = "game",
  onClick,
}: GameTileProps) {
  return (
    <button
      type="button"
      aria-label={`Play ${alt}`}
      onClick={onClick}
      className="
        group relative shrink-0
        w-[100px] md:w-[130px] h-[180px]
        rounded-2xl overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-emerald-400/50
      "
    >
      {/* Base image */}
      <Image
        src={src}
        alt={alt}
        width={460}
        height={600}
        className="h-full w-full object-cover"
        priority
      />

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          bg-black/70
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      />

      {/* Semi-transparent circular Play button */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          flex items-center justify-center
          h-12 w-12 rounded-full bg-white/20
          shadow-lg
          opacity-0 scale-90
          transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        <PlayIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
    </button>
  );
}
