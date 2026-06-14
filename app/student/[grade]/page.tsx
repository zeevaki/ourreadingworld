"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { useLanguage } from "@/components/LanguageContext";
import grade1 from "@/data/grade1";
import grade2 from "@/data/grade2";
import grade3 from "@/data/grade3";
import { GradeReading } from "@/data/types";

const gradeData: Record<string, GradeReading> = {
  "1": grade1,
  "2": grade2,
  "3": grade3,
};

const pillarColors: Record<string, string> = {
  "phonemic-awareness": "#8B5CF6",
  phonics: "#F59E0B",
  fluency: "#0EA5E9",
  vocabulary: "#22C55E",
  comprehension: "#EF4444",
};

const pillarEmojis: Record<string, string> = {
  "phonemic-awareness": "👂",
  phonics: "🔤",
  fluency: "📖",
  vocabulary: "🤝",
  comprehension: "💡",
};

export default function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = use(params);
  const { language } = useLanguage();
  const router = useRouter();
  const lang = language ?? "es";

  const gradeInfo = gradeData[grade];
  if (!gradeInfo) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <NavBar />
        <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
          <h1 className="text-2xl font-black text-gray-700">Grade not found</h1>
          <p className="text-gray-500 mt-2">Coming soon — we&apos;re building this grade now!</p>
        </main>
      </div>
    );
  }

  const pillars = Array.from(new Set(gradeInfo.units.map((u) => u.pillar)));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{gradeInfo.emoji}</span>
          <h1 className="text-4xl font-black text-gray-800">{gradeInfo.label}</h1>
        </div>
        <p className="text-gray-500 font-semibold mb-8">
          {lang === "ur" ? "پڑھنے کی مہارتیں — پانچ ستون" : "Reading skills — 5 pillars"}
        </p>

        {pillars.map((pillar) => {
          const units = gradeInfo.units.filter((u) => u.pillar === pillar);
          const color = pillarColors[pillar] ?? "#6B7280";
          const emoji = pillarEmojis[pillar] ?? "📚";
          const pillarLabel = units[0]?.pillarLabel[lang] ?? pillar;

          return (
            <div key={pillar} className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{emoji}</span>
                <h2 className="text-xl font-black" style={{ color }}>
                  {pillarLabel}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {units.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => router.push(`/student/${grade}/${unit.id}`)}
                    className="text-left rounded-2xl p-4 shadow hover:scale-105 transition-transform cursor-pointer border-2"
                    style={{ borderColor: color, backgroundColor: color + "10" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{unit.emoji}</span>
                      <span className="text-xs font-bold text-gray-500">{unit.teks}</span>
                    </div>
                    <div className="font-black text-gray-800 text-sm">{unit.title.en}</div>
                    <div className="font-semibold text-gray-500 text-xs mt-0.5" dir={lang === "ur" ? "rtl" : undefined}>{unit.title[lang]}</div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
