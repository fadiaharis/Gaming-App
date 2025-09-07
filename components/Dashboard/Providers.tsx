"use client";

import { providers } from "@/data/Dashboard-data";
import ProviderCarousel from "./ProviderCarousel";

export default function Providers() {
  return (
    <div className="p-1 rounded-2xl">
      <ProviderCarousel title="Provider" items={providers} />
    </div>
  );
}
