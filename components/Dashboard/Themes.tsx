"use client";

import { themes } from "@/data/Dashboard-data";
import ThemeCarousel from "./ThemeCarousel";

export default function Themes() {
  return (
    <div className="p-2 rounded-2xl">
      <ThemeCarousel title="Themes" items={themes} />
    </div>
  );
}
