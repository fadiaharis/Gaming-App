"use client";

import { popularGameTiles } from "@/data/Dashboard-data";
import TileCarousel from "./TileCarousel";

export default function Popular() {
  return (
    <div className="rounded-2xl">
      <TileCarousel title="Popular" items={popularGameTiles} />
    </div>
  );
}
