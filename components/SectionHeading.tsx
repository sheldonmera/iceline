import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const bodyColor = tone === "dark" ? "text-white/78" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-2xl"}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-ice">{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-black md:text-5xl ${titleColor}`}>{title}</h2>
      {children ? <p className={`mt-5 text-base leading-8 md:text-lg ${bodyColor}`}>{children}</p> : null}
    </div>
  );
}
