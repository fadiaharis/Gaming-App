import Link from "next/link";

export function SocialButton({
  href,
  label,
  icon: IconEl,
}: {
  href: string;
  label: string;
  icon: (cls?: string) => JSX.Element;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-white/80 hover:bg-white/12 hover:text-white transition"
    >
      {IconEl("h-5 w-5")}
    </Link>
  );
}
