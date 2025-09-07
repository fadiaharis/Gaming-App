"use client";

export default function ThemeTile({ label }: { label: string }) {
  return (
    <div className="w-[150px] h-[60px] rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition flex items-center justify-center shrink-0">
      <span className="text-white font-semibold text-sm capitalize">
        {label}
      </span>
    </div>
  );
}
