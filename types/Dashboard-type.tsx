import { ElementType } from "react";

export type Bet = {
  game: string;
  player: string;
  amount: string;
  currency: string;
  multiplier: string;
  profit: string;
  profitCurrency: string;
};

export type BigWinCardProps = {
  imgSrc: string;
  player: string;
  amount: string;
};

export type TileCarouselProps = {
  title: string;
  items: { src: string; alt?: string }[];
  className?: string;
};

export type CategoryItemProps = {
  href: string;
  label: string;
  Icon: ElementType;
  active?: boolean;
};

export type ProviderCarouselProps = {
  title: string;
  items: { src: string; alt?: string }[];
  className?: string;
};

export type ImageProps = {
  src: string;
  alt?: string;
};

export type ThemeCarouselProps = {
  title: string;
  items: string[];
  className?: string;
};
