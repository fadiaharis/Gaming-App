"use client";

import { wins } from "@/data/Dashboard-data";
import clsx from "clsx";
import BigWinCard from "./BigWinCard";

export default function RecentBigWins() {
  // duplicate to make a seamless marquee
  const loop = [...wins, ...wins];

  return (
    <section className="rounded-xl p-0 overflow-hidden">
      {/* Header */}
      <div className="py-3 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <h2 className="text-white font-semibold">Recent Big Wins</h2>

        <nav className="ml-6 text-sm text-white/70 space-x-4 hidden md:block">
          <button className="relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-6 after:bg-emerald-400">
            All
          </button>
          <button className="hover:text-white/90">Slots</button>
          <button className="hover:text-white/90">Live Casino</button>
          <button className="hover:text-white/90">Game Shows</button>
        </nav>
      </div>

      {/* Marquee rail */}
      <div className="card relative overflow-hidden group rounded-2xl px-3 py-3">
        <div
          className={clsx(
            "flex items-stretch whitespace-nowrap w-max",
            "animate-[wins-marquee_26s_linear_infinite]",
            "group-hover:[animation-play-state:paused]"
          )}
        >
          {loop.map((w, i) => (
            <BigWinCard key={`a-${i}`} {...w} />
          ))}
          {loop.map((w, i) => (
            <BigWinCard key={`b-${i}`} {...w} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes wins-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
