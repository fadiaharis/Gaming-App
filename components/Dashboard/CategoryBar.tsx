"use client";

import { categories } from "@/data/Dashboard-data";
import CategoryItem from "./CategoryItem";

export default function CategoryBar() {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-2 bg-[#1f2324] px-4 py-3 pb-1 rounded-xl no-scrollbar">
      {categories.map((c) => (
        <CategoryItem key={c.label} {...c} />
      ))}
    </div>
  );
}
