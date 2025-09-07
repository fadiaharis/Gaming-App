"use client";

import { liveCasinoGameTiles } from "@/data/Dashboard-data";
import TileCarousel from "./TileCarousel";

export default function LiveCasino() {
  return (
    <div className="rounded-2xl">
      <TileCarousel title="Live Casino" items={liveCasinoGameTiles} />
    </div>
  );
}
