import {
  ClockIcon,
  CubeTransparentIcon,
  FireIcon,
  SparklesIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  StarIcon,
  SwatchIcon,
  TableCellsIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export const SidebarBlockItems = [
  { href: "/bonus/hot", Icon: FireIcon, label: "Hot" },
  { href: "/bonus/fav", Icon: StarIcon, label: "Favorites" },
  { href: "/bonus/recent", Icon: ClockIcon, label: "Recent" },
];

export const SidebarCasinoItems = [
  { href: "/casino/slots", label: "Slots", Icon: Squares2X2Icon },
  {
    href: "/casino/bonus-games",
    label: "Bonus Games",
    Icon: CubeTransparentIcon,
  },
  {
    href: "/casino/live",
    label: "Live Casino",
    Icon: VideoCameraIcon,
  },
  { href: "/casino/providers", label: "Providers", Icon: StarIcon },
  { href: "/casino/themes", label: "Themes", Icon: SwatchIcon },
  { href: "/casino/tablegames", label: "Table Games", Icon: TableCellsIcon },
  { href: "/casino/newReleases", label: "New Releases", Icon: SparklesIcon },
  { href: "/casino/topPicks", label: "Top Picks", Icon: SquaresPlusIcon },
];
