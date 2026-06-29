"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href="https://wa.me/5567992434488?text=Ola%2C%20gostaria%20de%20solicitar%20um%20atendimento%20da%20IceLine." target="_blank" rel="noreferrer" className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-1" aria-label="Chamar no WhatsApp">
        <MessageCircle size={25} />
      </a>
      <button aria-label="Voltar ao topo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`grid size-12 place-items-center rounded-full bg-navy text-white shadow-xl transition ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
        <ArrowUp size={21} />
      </button>
    </div>
  );
}