"use client";

import { use, useState } from "react";
import NavBar from "@/components/NavBar";
import { useLanguage } from "@/components/LanguageContext";
import grade1 from "@/data/grade1";
import { GradeReading, ReadingUnit, ReadingQuestion } from "@/data/types";

const gradeData: Record<string, GradeReading> = {
  "1": grade1,
};

type Tab = "vocab" | "lesson" | "exercises" | "quiz";

function VocabTab({ unit, lang }: { unit: ReadingUnit; lang: "en" | "es" | "ur" }) {
  return (
    <div className="grid gap-4">
      {unit.vocabulary.map((word) => (
        <div key={word.id} className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{word.emoji}</span>
            <div>
              <span className="text-xl font-black text-gray-800">{word.word}</span>
              <span className="ml-2 text-sm font-semibold text-gray-400">
                {lang === "es" ? word.translation.es : lang === "ur" ? word.translation.ur : ""}
              </span>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-1">{word.definition[lang]}</p>
          <p className="text-gray-500 text-xs italic">{word.exampleSentence[lang]}</p>
        </div>
      ))}
    </div>
  );
}

function LessonTab({ unit, lang }: { unit: ReadingUnit; lang: "en" | "es" | "ur" }) {
  const lines = unit.lesson[lang].split("\n").filter(Boolean);
  return (
    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
      {lines.map((line, i) => {
        const cleaned = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
        if (line.startsWith("• ") || line.startsWith("- ")) {
          return <li key={i} className="ml-4 text-gray-700 mb-1 text-sm" dangerouslySetInnerHTML={{ __html: cleaned.slice(2) }} />;
        }
        if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
          return <li key={i} className="ml-4 list-decimal text-gray-700 mb-1 text-sm" dangerouslySetInnerHTML={{ __html: cleaned.slice(3) }} />;
        }
        return <p key={i} className="text-gray-700 mb-3 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: cleaned }} />;
      })}
    </div>
  );
}

function QuizSection({ questions, lang }: { questions: ReadingQuestion[]; lang: "en" | "es" | "ur" }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;

  return (
    <div>
      {questions.map((q, qi) => (
        <div key={q.id} className="bg-white rounded-2xl p-4 shadow border border-gray-100 mb-4">
          <p className="font-bold text-gray-800 mb-3 text-sm">
            {qi + 1}. {q.prompt[lang]}
          </p>
          <div className="grid gap-2">
            {q.choices.map((choice, ci) => {
              let bg = "bg-gray-50 border-gray-200";
              if (submitted) {
                if (ci === q.correctIndex) bg = "bg-green-100 border-green-400";
                else if (answers[q.id] === ci) bg = "bg-red-100 border-red-400";
              } else if (answers[q.id] === ci) {
                bg = "bg-primary-light border-primary";
              }
              return (
                <button
                  key={ci}
                  disabled={submitted}
                  onClick={() => !submitted && setAnswers({ ...answers, [q.id]: ci })}
                  className={`text-left px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-colors cursor-pointer ${bg}`}
                >
                  {choice[lang]}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full bg-primary text-white font-black py-3 rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-40 cursor-pointer"
        >
          {lang === "ur" ? "جمع کرائیں" : lang === "es" ? "Enviar" : "Submit"}
        </button>
      ) : (
        <div className="text-center mt-4">
          <p className="text-2xl font-black text-gray-800">
            {score}/{questions.length} ⭐
          </p>
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="mt-3 bg-accent text-white font-bold px-6 py-2 rounded-xl hover:opacity-90 transition cursor-pointer text-sm"
          >
            {lang === "ur" ? "دوبارہ کوشش کریں" : lang === "es" ? "Intentar de nuevo" : "Try Again"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function UnitPage({ params }: { params: Promise<{ grade: string; unit: string }> }) {
  const { grade, unit: unitId } = use(params);
  const { language } = useLanguage();
  const lang = (language ?? "es") as "en" | "es" | "ur";
  const [tab, setTab] = useState<Tab>("vocab");

  const gradeInfo = gradeData[grade];
  const unit = gradeInfo?.units.find((u) => u.id === unitId);

  if (!unit) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <NavBar />
        <main className="flex-1 px-6 py-10">
          <h1 className="text-2xl font-black text-gray-700">Unit not found</h1>
        </main>
      </div>
    );
  }

  const tabs: { id: Tab; label: Record<string, string>; emoji: string }[] = [
    { id: "vocab", label: { en: "Vocabulary", es: "Vocabulario", ur: "الفاظ" }, emoji: "📝" },
    { id: "lesson", label: { en: "Lesson", es: "Lección", ur: "سبق" }, emoji: "📖" },
    { id: "exercises", label: { en: "Exercises", es: "Ejercicios", ur: "مشقیں" }, emoji: "✏️" },
    { id: "quiz", label: { en: "Quiz", es: "Prueba", ur: "کوئز" }, emoji: "⭐" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <div className="mb-1 text-xs font-bold text-gray-400 uppercase tracking-wide">
          {unit.pillarLabel[lang]} · {unit.teks}
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-3xl">{unit.emoji}</span>
          <h1 className="text-3xl font-black text-gray-800">{unit.title[lang]}</h1>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl font-bold text-sm cursor-pointer transition-colors ${
                tab === t.id ? "bg-primary text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-primary"
              }`}
            >
              {t.emoji} {t.label[lang]}
            </button>
          ))}
        </div>

        {tab === "vocab" && <VocabTab unit={unit} lang={lang} />}
        {tab === "lesson" && <LessonTab unit={unit} lang={lang} />}
        {tab === "exercises" && <QuizSection questions={unit.exercises} lang={lang} />}
        {tab === "quiz" && <QuizSection questions={unit.quiz} lang={lang} />}
      </main>
    </div>
  );
}
