"use client";

import { useState } from "react";

interface SpeakButtonProps {
  text: string;
  lang?: string; // BCP-47: 'en-US', 'es-MX', 'ur-PK'
  size?: "sm" | "md";
}

export default function SpeakButton({ text, lang = "en-US", size = "md" }: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  function speak(e: React.MouseEvent) {
    e.stopPropagation();
    if (typeof window === "undefined" || !window.speechSynthesis) return;
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
  const iconSz = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";

  return (
    <button
      onClick={speak}
      title={`Hear: ${text}`}
      aria-label={`Speak: ${text}`}
      className={`
        ${sz} rounded-full flex items-center justify-center flex-shrink-0
        transition-all duration-200 ease-in-out cursor-pointer
        ${speaking
          ? "bg-accent text-white scale-110 shadow-lg animate-pulse"
          : "bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:scale-110 hover:shadow-md"
        }
      `}
    >
      {speaking ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconSz}>
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconSz}>
          <path d="M3 9v6h4l5 5V4L7 9H3zm10.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
      )}
    </button>
  );
}
