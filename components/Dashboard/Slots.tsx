"use client";

import { slotsGameTiles } from "@/data/Dashboard-data";
import TileCarousel from "./TileCarousel";

export default function Slots() {
  return (
    <div className="rounded-2xl">
      <TileCarousel title="Slots" items={slotsGameTiles} />
    </div>
  );
}
