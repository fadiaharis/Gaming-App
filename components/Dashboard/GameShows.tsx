"use client";

import { gameShowsGameTiles } from "@/data/Dashboard-data";
import TileCarousel from "./TileCarousel";

export default function GameShows() {
  return (
    <div className="rounded-2xl">
      <TileCarousel title="Game Shows" items={gameShowsGameTiles} />
    </div>
  );
}
