"use client";

import { recommendedGameTiles } from "@/data/Dashboard-data";
import TileCarousel from "./TileCarousel";

export default function Recommended() {
  return (
    <div className="rounded-2xl">
      <TileCarousel title="Recommended" items={recommendedGameTiles} />
    </div>
  );
}
