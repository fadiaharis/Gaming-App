"use client";

import { GameTileProps } from "@/types/Dashboard-type";
import Image from "next/image";

export default function GameTile({ src, alt = "game" }: GameTileProps) {
  return (
    <div className="w-[100px] md:w-[130px] h-[180px] rounded-2xl overflow-hidden bg-black/20 shrink-0">
      <Image
        src={src}
        alt={alt}
        width={460}
        height={600}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
