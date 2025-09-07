"use client";

import { TileCarouselProps } from "@/types/Dashboard-type";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import GameTile from "./GameTile";

export default function TileCarousel({
  title,
  items,
  className,
}: TileCarouselProps) {
  // outer scroll container
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // inner flex track
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(200); // pixels to scroll per click
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;

    const firstTile = track.children[0] as HTMLElement | undefined;
    if (!firstTile) return;

    const tileWidth = firstTile.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    setStep(tileWidth + gap);
  };

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    measureStep();
    updateArrows();

    const onScroll = () => updateArrows();
    const onResize = () => {
      measureStep();
      updateArrows();
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft - step, behavior: "smooth" });
  };
  const onRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
  };

  return (
    <section className={clsx("rounded-xl", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <div className="flex items-center gap-2">
          <button className="rounded-md px-3 py-1.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15">
            All
          </button>

          <button
            className={clsx(
              "rounded-md p-2 text-white/80 bg-white/10 hover:bg-white/15 transition",
              !canLeft && "opacity-40 cursor-not-allowed"
            )}
            onClick={onLeft}
            disabled={!canLeft}
            aria-label="Previous"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            className={clsx(
              "rounded-md p-2 text-white/80 bg-white/10 hover:bg-white/15 transition",
              !canRight && "opacity-40 cursor-not-allowed"
            )}
            onClick={onRight}
            disabled={!canRight}
            aria-label="Next"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto overflow-y-hidden no-scrollbar"
      >
        <div ref={trackRef} className="flex gap-2 pr-4">
          {items.map((it, idx) => (
            <GameTile key={idx} src={it.src} alt={it.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
