export type BilingualText = {
  en: string;
  es: string;
  ur: string;
};

export type ReadingWord = {
  id: string;
  word: string;
  emoji: string;
  translation: { es: string; ur: string };
  definition: BilingualText;
  exampleSentence: BilingualText;
};

export type ReadingPillar =
  | "phonemic-awareness"
  | "phonics"
  | "fluency"
  | "vocabulary"
  | "comprehension";

export type ReadingQuestion = {
  id: string;
  type: "multiple-choice" | "true-false";
  prompt: BilingualText;
  choices: BilingualText[];
  correctIndex: number;
};

export type ReadingUnit = {
  id: string;
  pillar: ReadingPillar;
  pillarLabel: BilingualText;
  title: BilingualText;
  emoji: string;
  teks: string;
  cambridge: string;
  vocabulary: ReadingWord[];
  lesson: BilingualText;
  exercises: ReadingQuestion[];
  quiz: ReadingQuestion[];
};

export type GradeReading = {
  grade: number;
  label: string;
  emoji: string;
  color: string;
  units: ReadingUnit[];
};
