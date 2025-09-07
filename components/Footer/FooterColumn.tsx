import { LinkItem } from "@/types/Footer-type";
import Link from "next/link";

export function Column({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="text-white font-bold mb-4 tracking-wide">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-white/80 hover:text-white transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
