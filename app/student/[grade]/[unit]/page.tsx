"use client";

import { use, useState } from "react";
import NavBar from "@/components/NavBar";
import SpeakButton from "@/components/SpeakButton";
import { useLanguage } from "@/components/LanguageContext";
import grade1 from "@/data/grade1";
import { GradeReading, ReadingUnit, ReadingQuestion } from "@/data/types";

const gradeData: Record<string, GradeReading> = {
  "1": grade1,
};

type Tab = "vocab" | "lesson" | "exercises" | "quiz";

const langCode: Record<string, string> = {
  es: "es-MX",
  ur: "ur-PK",
};

function renderLines(text: string) {
  return text.split("\n").filter(Boolean).map((line, i) => {
    const cleaned = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
    if (line.startsWith("• ") || line.startsWith("- ")) {
      return <li key={i} className="ml-4 mb-1 text-sm" dangerouslySetInnerHTML={{ __html: cleaned.slice(2) }} />;
    }
    if (/^\d+\. /.test(line)) {
      return <li key={i} className="ml-4 list-decimal mb-1 text-sm" dangerouslySetInnerHTML={{ __html: cleaned.replace(/^\d+\. /, "") }} />;
    }
    return <p key={i} className="mb-2 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: cleaned }} />;
  });
}

function VocabTab({ unit, lang }: { unit: ReadingUnit; lang: "es" | "ur" }) {
  return (
    <div className="grid gap-4">
      {unit.vocabulary.map((word) => (
        <div key={word.id} className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          {/* Word row */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{word.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl font-black text-gray-800">{word.word}</span>
                <SpeakButton text={word.word} lang="en-US" size="sm" />
                <span className="text-base font-bold text-primary" dir={lang === "ur" ? "rtl" : undefined}>
                  {lang === "es" ? word.translation.es : word.translation.ur}
                </span>
                <SpeakButton text={lang === "es" ? word.translation.es : word.translation.ur} lang={langCode[lang]} size="sm" />
              </div>
            </div>
          </div>

          {/* Definition */}
          <div className="mb-2">
            <div className="flex items-start gap-2">
              <p className="text-gray-800 text-sm font-semibold flex-1">{word.definition.en}</p>
              <SpeakButton text={word.definition.en} lang="en-US" size="sm" />
            </div>
            <div className="flex items-start gap-2 mt-1">
              <p className="text-gray-500 text-sm flex-1" dir={lang === "ur" ? "rtl" : undefined}>{word.definition[lang]}</p>
              <SpeakButton text={word.definition[lang]} lang={langCode[lang]} size="sm" />
            </div>
          </div>

          {/* Example sentence */}
          <div className="border-t border-gray-100 pt-2 mt-2">
            <div className="flex items-start gap-2">
              <p className="text-gray-600 text-xs italic flex-1">{word.exampleSentence.en}</p>
              <SpeakButton text={word.exampleSentence.en} lang="en-US" size="sm" />
            </div>
            <div className="flex items-start gap-2 mt-1">
              <p className="text-gray-400 text-xs italic flex-1" dir={lang === "ur" ? "rtl" : undefined}>{word.exampleSentence[lang]}</p>
              <SpeakButton text={word.exampleSentence[lang]} lang={langCode[lang]} size="sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LessonTab({ unit, lang }: { unit: ReadingUnit; lang: "es" | "ur" }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-wide">English</span>
          <SpeakButton text={unit.lesson.en.replace(/\*\*/g, "").replace(/\*/g, "").replace(/•/g, "").replace(/\n/g, " ")} lang="en-US" size="sm" />
        </div>
        <div className="text-gray-800">{renderLines(unit.lesson.en)}</div>
      </div>
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-accent uppercase tracking-wide">
            {lang === "es" ? "Español" : "اردو"}
          </span>
          <SpeakButton text={unit.lesson[lang].replace(/\*\*/g, "").replace(/\*/g, "").replace(/•/g, "").replace(/\n/g, " ")} lang={langCode[lang]} size="sm" />
        </div>
        <div className="text-gray-700" dir={lang === "ur" ? "rtl" : undefined}>
          {renderLines(unit.lesson[lang])}
        </div>
      </div>
    </div>
  );
}

function QuizSection({ questions, lang }: { questions: ReadingQuestion[]; lang: "es" | "ur" }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;

  return (
    <div>
      {questions.map((q, qi) => (
        <div key={q.id} className="bg-white rounded-2xl p-4 shadow border border-gray-100 mb-4">
          {/* Prompt */}
          <div className="mb-3">
            <div className="flex items-start gap-2">
              <p className="font-bold text-gray-800 text-sm flex-1">{qi + 1}. {q.prompt.en}</p>
              <SpeakButton text={q.prompt.en} lang="en-US" size="sm" />
            </div>
            <div className="flex items-start gap-2 mt-1">
              <p className="text-gray-500 text-sm flex-1" dir={lang === "ur" ? "rtl" : undefined}>{q.prompt[lang]}</p>
              <SpeakButton text={q.prompt[lang]} lang={langCode[lang]} size="sm" />
            </div>
          </div>

          {/* Choices */}
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
                <div key={ci} className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2 transition-colors ${bg}`}>
                  <button
                    disabled={submitted}
                    onClick={() => !submitted && setAnswers({ ...answers, [q.id]: ci })}
                    className="flex-1 text-left cursor-pointer disabled:cursor-default"
                  >
                    <span className="font-semibold text-gray-800 text-sm block">{choice.en}</span>
                    <span className="text-gray-500 text-xs" dir={lang === "ur" ? "rtl" : undefined}>{choice[lang]}</span>
                  </button>
                  <SpeakButton text={choice.en} lang="en-US" size="sm" />
                </div>
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
          Submit / {lang === "ur" ? "جمع کرائیں" : "Enviar"}
        </button>
      ) : (
        <div className="text-center mt-4">
          <p className="text-2xl font-black text-gray-800">{score}/{questions.length} ⭐</p>
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="mt-3 bg-accent text-white font-bold px-6 py-2 rounded-xl hover:opacity-90 transition cursor-pointer text-sm"
          >
            Try Again / {lang === "ur" ? "دوبارہ کوشش کریں" : "Intentar de nuevo"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function UnitPage({ params }: { params: Promise<{ grade: string; unit: string }> }) {
  const { grade, unit: unitId } = use(params);
  const { language } = useLanguage();
  const lang = (language ?? "es") as "es" | "ur";
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

  const tabs: { id: Tab; enLabel: string; secLabel: string; emoji: string }[] = [
    { id: "vocab", enLabel: "Vocabulary", secLabel: lang === "ur" ? "الفاظ" : "Vocabulario", emoji: "📝" },
    { id: "lesson", enLabel: "Lesson", secLabel: lang === "ur" ? "سبق" : "Lección", emoji: "📖" },
    { id: "exercises", enLabel: "Exercises", secLabel: lang === "ur" ? "مشقیں" : "Ejercicios", emoji: "✏️" },
    { id: "quiz", enLabel: "Quiz", secLabel: lang === "ur" ? "کوئز" : "Prueba", emoji: "⭐" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <div className="mb-1 text-xs font-bold text-gray-400 uppercase tracking-wide">
          {unit.pillarLabel.en} · {unit.pillarLabel[lang]} · {unit.teks}
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-3xl">{unit.emoji}</span>
          <div className="flex-1">
            <h1 className="text-2xl font-black text-gray-800 leading-tight">{unit.title.en}</h1>
            <p className="text-base font-bold text-gray-500" dir={lang === "ur" ? "rtl" : undefined}>{unit.title[lang]}</p>
          </div>
          <SpeakButton text={unit.title.en} lang="en-US" />
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl font-bold text-xs cursor-pointer transition-colors text-center ${
                tab === t.id ? "bg-primary text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-primary"
              }`}
            >
              <span className="block">{t.emoji} {t.enLabel}</span>
              <span className="block opacity-80" dir={lang === "ur" ? "rtl" : undefined}>{t.secLabel}</span>
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
