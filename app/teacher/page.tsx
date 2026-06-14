"use client";

import NavBar from "@/components/NavBar";
import grade1 from "@/data/grade1";
import grade2 from "@/data/grade2";
import grade3 from "@/data/grade3";
import { GradeReading } from "@/data/types";

const allGrades: GradeReading[] = [grade1, grade2, grade3];

const pillarColors: Record<string, string> = {
  "phonemic-awareness": "#8B5CF6",
  phonics: "#F59E0B",
  fluency: "#0EA5E9",
  vocabulary: "#22C55E",
  comprehension: "#EF4444",
};

function GradeSection({ gradeInfo }: { gradeInfo: GradeReading }) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{gradeInfo.emoji}</span>
        <h2 className="text-2xl font-black" style={{ color: gradeInfo.color }}>
          {gradeInfo.label}
        </h2>
      </div>
      <div className="grid gap-3">
        {gradeInfo.units.map((unit) => {
          const color = pillarColors[unit.pillar] ?? "#6B7280";
          return (
            <div
              key={unit.id}
              className="bg-white rounded-2xl p-4 shadow border border-gray-100 flex gap-4 items-start"
            >
              <span className="text-3xl mt-0.5">{unit.emoji}</span>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-1 items-center">
                  <span className="font-black text-gray-800">{unit.title.en}</span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: color }}
                  >
                    {unit.pillarLabel.en}
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-gray-500 font-semibold">
                  <span>{unit.teks}</span>
                  <span>{unit.cambridge}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>{unit.vocabulary.length} vocab words</span>
                  <span className="mx-2">·</span>
                  <span>{unit.exercises.length} exercises</span>
                  <span className="mx-2">·</span>
                  <span>{unit.quiz.length} quiz questions</span>
                </div>
                <div className="mt-2 text-xs text-gray-400 font-medium">
                  ES: {unit.title.es} · UR: {unit.title.ur}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function TeacherPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2">Teacher View</h1>
        <p className="text-gray-500 font-semibold mb-10">
          Science of Reading · All units by grade and pillar
        </p>

        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100 mb-8 flex flex-wrap gap-3">
          {Object.entries(pillarColors).map(([pillar, color]) => (
            <div key={pillar} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs font-bold text-gray-600 capitalize">{pillar.replace("-", " ")}</span>
            </div>
          ))}
        </div>

        {allGrades.map((g) => (
          <GradeSection key={g.grade} gradeInfo={g} />
        ))}
      </main>
    </div>
  );
}
