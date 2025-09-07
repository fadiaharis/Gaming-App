import {
    ClockIcon,
    CubeTransparentIcon,
    FireIcon,
    Squares2X2Icon,
    StarIcon,
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
];
