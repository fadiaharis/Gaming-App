"use client";

import { bets } from "@/data/Dashboard-data";
import { useState } from "react";

export default function LatestBets() {
  const [filter, setFilter] = useState<"all" | "high">("all");

  const filtered = bets.filter((b) => {
    if (filter === "all") return true;
    const num = Number(b.profit.replace(/[^0-9.-]/g, ""));
    return num > 1500;
  });

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Latest bet & Race</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === "all"
                ? "bg-white/10 text-white"
                : "bg-white/5 text-[var(--subtle)]"
            }`}
          >
            All bets
          </button>
          <button
            onClick={() => setFilter("high")}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === "high"
                ? "bg-white/10 text-white"
                : "bg-white/5 text-[var(--subtle)]"
            }`}
          >
            High Roller
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <table className="w-full text-sm text-gray-300">
          <thead className="bg-white/3 text-[var(--subtle)]">
            <tr>
              <th className="text-left px-4 py-3">Game</th>
              <th className="text-left px-4 py-3">Player</th>
              <th className="text-left px-4 py-3">Bet Amount</th>
              <th className="text-left px-4 py-3">Multiplier</th>
              <th className="text-left px-4 py-3">Profit</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, idx) => (
              <tr
                key={idx}
                className="border-t border-white/5 hover:bg-white/3 transition"
              >
                <td className="px-4 py-3">{b.game}</td>
                <td className="px-4 py-3">{b.player}</td>
                <td className="px-4 py-3">
                  {b.amount}{" "}
                  <span className="ml-2 inline-block px-2 py-0.5 text-[12px] rounded-full bg-white/5 muted">
                    {b.currency}
                  </span>
                </td>
                <td className="px-4 py-3">{b.multiplier}</td>
                <td className="px-4 py-3 text-emerald-400">
                  {b.profit}{" "}
                  <span className="ml-2 inline-block px-2 py-0.5 text-[12px] rounded-full bg-white/5 muted">
                    {b.profitCurrency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
