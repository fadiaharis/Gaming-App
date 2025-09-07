import { LinkItem } from "@/types/Footer-type";

export const FooterIcon = {
  telegram: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.036 15.804 8.88 19.9c.4 0 .574-.172.783-.378l1.88-1.812 3.9 2.858c.715.394 1.226.187 1.42-.66l2.57-12.066c.263-1.236-.448-1.718-1.146-1.417L3.6 9.51c-1.197.486-1.179 1.18-.204 1.49l4.603 1.438 10.68-6.743c.5-.304.956-.136.58.167L9.036 15.804z" />
    </svg>
  ),
  github: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2.1c-3.22.7-3.9-1.39-3.9-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.23 1.8 1.23 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.72 0-1.26.45-2.3 1.2-3.12-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19.94-.26 1.94-.39 2.94-.39 1 0 2 .13 2.94.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.78.12 3.07.75.82 1.2 1.86 1.2 3.12 0 4.44-2.72 5.42-5.31 5.71.42.36.79 1.08.79 2.19v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  x: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21l-6.93 7.92L22 22h-6.78l-5.3-6.43L3.7 22H1l7.44-8.5L2 2h6.9l4.77 5.79L18.244 2ZM17.2 20h1.84L8.86 4H6.94L17.2 20Z" />
    </svg>
  ),
  facebook: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.64.77-1.64 1.56v1.86h2.8l-.45 2.9h-2.35V22c4.78-.8 8.44-4.93 8.44-9.94Z" />
    </svg>
  ),
  discord: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.32 4.37A16.3 16.3 0 0 0 16.4 3l-.2.36c2.08.63 3.04 1.52 3.04 1.52a10.7 10.7 0 0 0-3.92-1.24 10.94 10.94 0 0 0-2.69.03c-.2.02-.39.06-.58.1-.88.17-1.8.43-2.72.85 0 0-1-.93-3.07-1.56L5.99 3a16.27 16.27 0 0 0-3.9 1.38C.88 9.34 0 14.14 0 14.14A16.3 16.3 0 0 0 5.94 19l.3-.46a10.9 10.9 0 0 1-2.58-1.3l.2-.15c.17.12.34.23.52.33 1.84 1.04 3.93 1.67 6.62 1.67 2.69 0 4.78-.63 6.62-1.67.18-.1.35-.22.52-.33l.2.15c-.8.52-1.67.95-2.58 1.3l.3.46A16.3 16.3 0 0 0 24 14.14s-.88-4.8-3.68-9.77ZM8.9 13.2c-.8 0-1.45-.73-1.45-1.63 0-.9.64-1.63 1.45-1.63.8 0 1.45.73 1.45 1.63 0 .91-.65 1.63-1.45 1.63Zm6.2 0c-.8 0-1.45-.73-1.45-1.63 0-.9.65-1.63 1.45-1.63.8 0 1.45.73 1.45 1.63 0 .91-.65 1.63-1.45 1.63Z" />
    </svg>
  ),
  instagram: (cls = "h-5 w-5") => (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
    </svg>
  ),
};

export const socials = [
  { label: "Telegram", href: "#", icon: FooterIcon.telegram },
  { label: "GitHub", href: "#", icon: FooterIcon.github },
  { label: "X", href: "#", icon: FooterIcon.x },
  { label: "Facebook", href: "#", icon: FooterIcon.facebook },
  { label: "Discord", href: "#", icon: FooterIcon.discord },
  { label: "Instagram", href: "#", icon: FooterIcon.instagram },
];

export const games: LinkItem[] = [
  { label: "Bonus game", href: "/bonus" },
  { label: "Slots", href: "/slots" },
  { label: "Live Casino", href: "/live-casino" },
  { label: "Game Shows", href: "/game-shows" },
  { label: "New Releases", href: "/new" },
  { label: "Themes", href: "/themes" },
];

export const promo: LinkItem[] = [
  { label: "VIP Club", href: "/vip" },
  { label: "Referral", href: "/referral" },
];

export const legal: LinkItem[] = [
  { label: "Licenses", href: "/legal/licenses" },
  { label: "Help Center", href: "/help" },
  { label: "Gamble Aware", href: "/responsible-gambling" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms Of Service", href: "/legal/terms" },
  { label: "Self exclusion", href: "/legal/self-exclusion" },
  { label: "AML", href: "/legal/aml" },
  { label: "Live Support", href: "/legal/live-support" },
];

export const contacts = [
  { label: "compliance@hg.game", href: "mailto:compliance@hg.game" },
  { label: "support@hg.game", href: "mailto:support@hg.game" },
];
