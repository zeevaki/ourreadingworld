"use client";

import { useState } from "react";

interface SpeakButtonProps {
  text: string;
  lang?: string;
  size?: "sm" | "md";
}

export default function SpeakButton({ text, lang = "en-US", size = "md" }: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  const sz = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const iconSz = size === "sm" ? "w-3.5 h-3.5" : "w-4.5 h-4.5";

  return (
    <button
      onClick={handleClick}
      title={speaking ? "Stop" : `Hear: ${text}`}
      aria-label={speaking ? "Stop" : `Speak: ${text}`}
      className={`
        ${sz} rounded-full flex items-center justify-center flex-shrink-0
        transition-all duration-200 ease-in-out cursor-pointer
        ${speaking
          ? "bg-accent text-white scale-110 shadow-lg"
          : "bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:scale-110 hover:shadow-md"
        }
      `}
    >
      {speaking ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconSz}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconSz}>
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
