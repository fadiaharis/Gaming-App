"use client";

import LatestBets from "./LatestBets";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="card">
          <div className="text-sm muted mb-2">Daily Bonus</div>
          <div className="text-2xl font-semibold mb-4">Log in to claim</div>
          <a href="/#signin" className="btn-primary">
            Claim now
          </a>
        </div>

        <div className="card">
          <div className="text-sm muted mb-2">Featured Tournament</div>
          <div className="text-xl font-semibold mb-2">Neon Royale Cup</div>
          <p className="text-sm muted mb-4">
            Compete with thousands and climb the leaderboard.
          </p>
          <button className="btn-ghost">View details</button>
        </div>

        <div className="card">
          <div className="text-sm muted mb-2">Wallet</div>
          <div className="text-2xl font-semibold mb-2">0.00</div>
          <p className="text-sm muted mb-4">Top up to join premium events.</p>
          <button className="btn-ghost">Add funds</button>
        </div>

        <div className="card md:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">Top Games</h4>
            <a href="/#explore" className="text-sm underline">
              See all
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--accent)]/20 to-emerald-500/20" />
                <div className="px-3 py-2 text-sm">Game {i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Announcements</h4>
            <span className="text-xs bg-white/10 rounded-lg px-2 py-1">2</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>New season starts next week. Gear up!</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500" />
              <span>Marketplace fees reduced for a limited time.</span>
            </li>
          </ul>
        </div>
      </div>
      <LatestBets />
    </>
  );
}
