"use client";

import {
    contacts,
    games,
    legal,
    promo,
    socials,
} from "@/data/Footer-data-constants";
import Link from "next/link";
import { Column } from "./FooterColumn";
import { SocialButton } from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="mt-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <Column title="GAMES" links={games} />
        <Column title="PROMO" links={promo} />
        <Column title="SUPPORT/LEGAL" links={legal} />

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 tracking-wide">
            CONTACT US
          </h4>
          <ul className="space-y-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="text-white/80 hover:text-white break-all"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-bold mb-4 tracking-wide">
            JOIN OUR COMMUNITY
          </h4>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <SocialButton
                key={s.label}
                href={s.href}
                label={s.label}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
