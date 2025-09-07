"use client";

import Banner from "./Banner";
import Dashboard from "./Dashboard";
import RecentBigWins from "./RecentBigWins";

export default function MainSection() {
  return (
    <section className="flex flex-col gap-3">
      <Banner />
      <RecentBigWins />
      <Dashboard />
    </section>
  );
}
