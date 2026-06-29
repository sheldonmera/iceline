"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/88 shadow-lg shadow-navy/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className={`flex items-center gap-3 font-black ${scrolled ? "text-navy" : "text-white"}`} aria-label="IceLine Refrigeração">
          <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-white shadow-lg shadow-ice/30">
            <Image src="/logo.png" alt="Logo IceLine Refrigeração" width={48} height={48} className="size-12 object-cover" priority />
          </span>
          <span className="font-logo text-2xl">IceLine</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm font-semibold transition hover:text-ice ${scrolled ? "text-slate-700" : "text-white/88"}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="hidden rounded-full bg-ice px-5 py-3 text-sm font-bold text-navy shadow-lg shadow-ice/30 transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex">
          Solicitar visita
        </a>
        <button className={`grid size-11 place-items-center rounded-full lg:hidden ${scrolled ? "bg-navy text-white" : "bg-white/18 text-white backdrop-blur"}`} onClick={() => setOpen((value) => !value)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-premium lg:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 font-semibold text-navy hover:bg-mist" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}