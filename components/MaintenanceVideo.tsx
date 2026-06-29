"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export function MaintenanceVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPaused(false);
      return;
    }

    video.pause();
    setPaused(true);
  }

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className="group relative flex aspect-[5/4] w-full items-center justify-center overflow-hidden rounded-[32px] bg-navy shadow-premium"
      aria-label={paused ? "Reproduzir vídeo de manutenção" : "Pausar vídeo de manutenção"}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        src="/videos/manutencao-profissional.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className={`absolute grid size-16 place-items-center rounded-full bg-white/88 text-navy shadow-xl backdrop-blur transition ${paused ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        {paused ? <Play size={28} fill="currentColor" /> : <Pause size={28} fill="currentColor" />}
      </span>
    </button>
  );
}
