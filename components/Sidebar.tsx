"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSidebar } from "./SidebarContext";

type Item = {
  label: string;
  href: string;
  badge?: string;
  icon?: string;
};

const sidebarItems: Item[] = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Explore", href: "/#explore", icon: "🔍" },
  { label: "Tournaments", href: "/#tournaments", badge: "New", icon: "🏆" },
  { label: "Rewards", href: "/#rewards", icon: "🎁" },
  { label: "Marketplace", href: "/#market", icon: "🛒" },
  { label: "Referrals", href: "/#referrals", icon: "👥" },
  { label: "Support", href: "/#support", icon: "🛠️" },
  { label: "Settings", href: "/#settings", icon: "⚙️" },
];

export default function Sidebar() {
  const { collapsed } = useSidebar();
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        "fixed z-20 top-16 bottom-0 bg-[#2a2d2e] border-white/10 transition-[width] duration-200 overflow-hidden flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Refer & Earn card - hidden when collapsed */}
      {!collapsed && (
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-black font-bold">
            HG
          </div>
          <div>
            <div className="font-semibold leading-tight">Refer and Earn</div>
            <div className="text-xs muted">
              Refer friends and earn commissions
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 mt-3">
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : false;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-white/10 transition",
                    active && "bg-white/10"
                  )}
                >
                  <span className="text-lg w-6 text-center">{item.icon}</span>
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                  {!collapsed && item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--accent)]/20 text-[var(--text)]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer promo box - hidden when collapsed */}
      {!collapsed && (
        <div className="mt-auto p-3 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-emerald-500/10 border border-white/10">
          <div className="text-sm font-medium mb-2">Level up faster</div>
          <p className="text-xs muted mb-3">
            Earn bonuses by completing daily quests and inviting friends.
          </p>
          <a href="/#signup" className="btn-primary w-full text-center">
            Get Started
          </a>
        </div>
      )}
    </aside>
  );
}
