"use client";

import { use, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import SpeakButton from "@/components/SpeakButton";
import { useLanguage } from "@/components/LanguageContext";
import grade1 from "@/data/grade1";
import grade2 from "@/data/grade2";
import grade3 from "@/data/grade3";
import grade4 from "@/data/grade4";
import grade5 from "@/data/grade5";
import eslScaffolds, { ProficiencyTier } from "@/data/eslScaffolds";
import { GradeReading, ReadingPillar } from "@/data/types";
import { Ear, Type, Mic, BookMarked, Lightbulb, Clock, Languages, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tierOptions: { tier: ProficiencyTier; label: string }[] = [
  { tier: "emerging", label: "🌱 Emerging" },
  { tier: "developing", label: "🌿 Developing" },
  { tier: "bridging", label: "🌉 Bridging" },
];

const gradeData: Record<string, GradeReading> = {
  "1": grade1,
  "2": grade2,
  "3": grade3,
  "4": grade4,
  "5": grade5,
};

const pillarOrder: { pillar: ReadingPillar; icon: LucideIcon; minutes: number; blockLabel: string }[] = [
  { pillar: "phonemic-awareness", icon: Ear, minutes: 5, blockLabel: "Warm-Up" },
  { pillar: "phonics", icon: Type, minutes: 15, blockLabel: "Skills Block" },
  { pillar: "fluency", icon: Mic, minutes: 10, blockLabel: "Fluency Practice" },
  { pillar: "vocabulary", icon: BookMarked, minutes: 10, blockLabel: "Knowledge Building" },
  { pillar: "comprehension", icon: Lightbulb, minutes: 15, blockLabel: "Comprehension & Wrap-Up" },
];

function cleanForTTS(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\*/g, "").replace(/•/g, "").replace(/\n/g, " ").replace(/  +/g, " ").trim();
}

function renderLines(text: string) {
  return text.split("\n").filter(Boolean).map((line, i) => {
    const cleaned = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
    return <p key={i} className="mb-2 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: cleaned }} />;
  });
}

function secondLangCode(lang: "es" | "ur"): string {
  return lang === "es" ? "es-MX" : "ur-PK";
}

export default function DailyLessonPage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = use(params);
  const { language } = useLanguage();
  const lang = (language ?? "es") as "es" | "ur";
  const gradeInfo = gradeData[grade];
  const [tier, setTier] = useState<ProficiencyTier>("developing");

  if (!gradeInfo) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <NavBar />
        <main className="flex-1 px-6 py-10">
          <h1 className="text-2xl font-black text-gray-700">Grade not found</h1>
        </main>
      </div>
    );
  }

  const totalMinutes = pillarOrder.reduce((sum, p) => sum + p.minutes, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-3xl">{gradeInfo.emoji}</span>
          <div>
            <h1 className="text-2xl font-black text-gray-800 leading-tight">{gradeInfo.label} — Day 1</h1>
            <p className="text-gray-500 text-sm font-semibold flex items-center gap-1.5">
              <Clock size={14} /> ~{totalMinutes} minutes, start to finish
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-xs mb-4">
          Warm-up through comprehension, in order — everything you need for today in one place.
        </p>

        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 mb-2">Which group are you sitting with right now?</p>
          <div className="flex gap-2">
            {tierOptions.map((opt) => (
              <button
                key={opt.tier}
                onClick={() => setTier(opt.tier)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  tier === opt.tier ? "bg-accent text-white scale-105" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">
            Changes the ESL scaffold suggestions below to match this group's English proficiency — the story and lesson content stay the same for everyone.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {pillarOrder.map(({ pillar, icon: Icon, minutes, blockLabel }) => {
            const unit = gradeInfo.units.find((u) => u.pillar === pillar);
            if (!unit) return null;
            const scaffold = eslScaffolds[pillar];

            return (
              <section key={pillar} className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                {/* Section header */}
                <div className="bg-primary-light px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="text-primary" />
                    <span className="font-black text-primary text-sm uppercase tracking-wide">{blockLabel}</span>
                  </div>
                  <span className="text-xs font-bold text-primary/70 flex items-center gap-1">
                    <Clock size={12} /> {minutes} min
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{unit.emoji}</span>
                    <div>
                      <h2 className="font-black text-gray-800">{unit.title.en}</h2>
                      <p className="text-gray-500 text-sm font-bold" dir={lang === "ur" ? "rtl" : undefined}>{unit.title[lang]}</p>
                    </div>
                    <SpeakButton text={cleanForTTS(unit.title.en)} lang="en-US" size="sm" />
                  </div>

                  {/* Lesson content */}
                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">English</span>
                      <SpeakButton text={cleanForTTS(unit.lesson.en)} lang="en-US" size="sm" />
                    </div>
                    <div className="text-gray-800">{renderLines(unit.lesson.en)}</div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-wide">{lang === "es" ? "Español" : "اردو"}</span>
                      <SpeakButton text={cleanForTTS(unit.lesson[lang])} lang={secondLangCode(lang)} size="sm" />
                    </div>
                    <div className="text-gray-600" dir={lang === "ur" ? "rtl" : undefined}>{renderLines(unit.lesson[lang])}</div>
                  </div>

                  {/* Vocabulary */}
                  {unit.vocabulary.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {unit.vocabulary.map((w) => (
                        <span key={w.id} className="bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 flex items-center gap-1">
                          {w.emoji} {w.word} <span className="text-gray-400">· {lang === "es" ? w.translation.es : w.translation.ur}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* ESL scaffold */}
                  <div className="bg-accent-light border-l-4 border-accent rounded-r-xl p-3 mb-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Languages size={14} className="text-accent" />
                      <span className="text-xs font-black text-accent uppercase tracking-wide">{scaffold.title.en}</span>
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed mb-1">{scaffold.strategy[tier].en}</p>
                    <p className="text-gray-500 text-xs leading-relaxed italic" dir={lang === "ur" ? "rtl" : undefined}>{scaffold.strategy[tier][lang]}</p>
                  </div>

                  <Link
                    href={`/student/${grade}/${unit.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all"
                  >
                    Practice this skill <ArrowRight size={14} />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
