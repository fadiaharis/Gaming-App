"use client";

import { bets } from "@/data/Dashboard-data";
import {
  BanknotesIcon,
  CurrencyEuroIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

/* ---------- tiny chips icons---------- */
function Chip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-1.5 h-5 text-[10px] font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}

function CurrencyChip({ code }: { code: string }) {
  const c = code.toUpperCase();

  if (c === "€" || c === "EUR")
    return (
      <Chip className="bg-white/10 text-white/80">
        <CurrencyEuroIcon className="h-3.5 w-3.5" />
      </Chip>
    );

  if (c === "$" || c === "USD" || c === "S")
    return <Chip className="bg-white/10 text-white/80">s</Chip>;

  if (c === "₹" || c === "INR")
    return (
      <Chip className="bg-emerald-500/20 text-emerald-300">
        <CurrencyRupeeIcon className="h-3.5 w-3.5" />
      </Chip>
    );

  if (c === "RS" || c === "R$") {
    return (
      <Chip className="bg-lime-500/20 text-lime-300">
        <BanknotesIcon className="h-3.5 w-3.5" />
      </Chip>
    );
  }

  if (c === "T") return <Chip className="bg-teal-500/20 text-teal-300">T</Chip>;

  // fallback
  return <Chip className="bg-white/10 text-white/70">{code}</Chip>;
}

/* ---------- segmented buttons ---------- */
function SegButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-5 py-2 rounded-lg text-sm font-semibold transition",
        active
          ? "bg-white/15 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
          : "text-white/70 hover:text-white hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}

/* ---------- main component ---------- */
export default function LatestBets() {
  const [filter, setFilter] = useState<"all" | "high">("all");

  const filtered = bets.filter((b) => {
    if (filter === "all") return true;
    const num = Number(b.profit.replace(/[^0-9.-]/g, ""));
    return num > 1500; // High Roller threshold
  });

  return (
    <div>
      {/* header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Latest bet &amp; Race</h3>

        <div className="bg-white/6 rounded-xl flex items-center bg-white/5">
          <SegButton active={filter === "all"} onClick={() => setFilter("all")}>
            All bets
          </SegButton>
          <SegButton
            active={filter === "high"}
            onClick={() => setFilter("high")}
          >
            High Roller
          </SegButton>
        </div>
      </div>

      {/* table */}
      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-gray-200 text-[15px]">
          <thead>
            <tr className="bg-white/6 text-white/70">
              <th className="text-left px-4 py-3 font-medium">Game</th>
              <th className="text-left px-4 py-3 font-medium">Player</th>
              <th className="text-left px-4 py-3 font-medium">Bet Amount</th>
              <th className="text-left px-4 py-3 font-medium">Multiplier</th>
              <th className="text-left px-4 py-3 font-medium">Profit</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((b, idx) => {
              const profitNum = Number(b.profit.replace(/[^0-9.-]/g, ""));
              const profitClass =
                profitNum > 0
                  ? "text-emerald-400"
                  : profitNum < 0
                  ? "text-rose-400"
                  : "text-white/80";

              return (
                <tr
                  key={idx}
                  className={clsx(
                    "border-t border-white/5",
                    idx % 2 === 0 ? "bg-white/[0.045]" : "bg-white/[0.03]",
                    "hover:bg-white/[0.08] transition"
                  )}
                >
                  {/* Game */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/25 text-violet-300">
                        <SparklesIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="truncate">{b.game}</span>
                    </div>
                  </td>

                  {/* Player */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <UserCircleIcon className="h-4 w-4 text-white/50" />
                      <span>{b.player}</span>
                    </div>
                  </td>

                  {/* Bet Amount + currency chip */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span>{b.amount}</span>
                      <CurrencyChip code={b.currency} />
                    </div>
                  </td>

                  {/* Multiplier */}
                  <td className="px-4 py-3">{b.multiplier}</td>

                  {/* Profit + currency chip */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={profitClass}>{b.profit}</span>
                      <CurrencyChip code={b.profitCurrency} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
