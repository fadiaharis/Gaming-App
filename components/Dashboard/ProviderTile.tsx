"use client";

import { ImageProps } from "@/types/Dashboard-type";
import Image from "next/image";

export default function ProviderTile({ src, alt = "provider" }: ImageProps) {
  return (
    <div className="w-[120px] h-[60px] rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition overflow-hidden flex items-center justify-center shrink-0">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={60}
        className="max-h-[72px] max-w-[160px] object-contain"
        priority
      />
    </div>
  );
}
