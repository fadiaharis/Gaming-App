"use client";

import Banner from "./Banner";
import CategoryBar from "./CategoryBar";
import GameShows from "./GameShows";
import LatestBets from "./LatestBets";
import LiveCasino from "./LiveCasino";
import Popular from "./Popular";
import Providers from "./Providers";
import RecentBigWins from "./RecentBigWins";
import Recommended from "./Recommended";
import Slots from "./Slots";

export default function MainSection() {
  return (
    <section className="flex flex-col gap-3">
      <Banner />
      <RecentBigWins />
      <CategoryBar />
      <Recommended />
      <Slots />
      <LiveCasino />
      <GameShows />
      <Providers/>
      <LatestBets />
      <Popular />
    </section>
  );
}
