"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

const grades = [
  { grade: "1", label: "Grade 1", emoji: "🌱", color: "#059669" },
  { grade: "2", label: "Grade 2", emoji: "🌿", color: "#065F46" },
  { grade: "3", label: "Grade 3", emoji: "🌊", color: "#0D9488" },
  { grade: "4", label: "Grade 4", emoji: "🌍", color: "#D97706" },
  { grade: "5", label: "Grade 5", emoji: "☀️", color: "#B45309" },
];

export default function DailyGradePickerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2">Daily Lesson</h1>
        <p className="text-gray-500 font-semibold mb-2">
          One complete lesson, one grade, everything in order — warm-up through comprehension, with ESL
          scaffolds built into every step.
        </p>
        <p className="text-gray-400 text-sm mb-10">Pick a grade to see today&apos;s lesson.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {grades.map((g) => (
            <button
              key={g.grade}
              onClick={() => router.push(`/daily/${g.grade}`)}
              className="rounded-3xl p-8 text-center shadow-md hover:scale-105 transition-transform cursor-pointer text-white font-black"
              style={{ backgroundColor: g.color }}
            >
              <div className="text-5xl mb-3">{g.emoji}</div>
              <div className="text-xl">{g.label}</div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
