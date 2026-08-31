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
  | "high-frequency-words"
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

export type CreativePrompt = {
  promptType: "poem" | "story" | "illustration" | "shape-art";
  title: BilingualText;
  instructions: BilingualText;
};

export type ReadingUnit = {
  id: string;
  pillar: ReadingPillar;
  pillarLabel: BilingualText;
  title: BilingualText;
  emoji: string;
  teks: string;
  cambridge: string;
  learningObjective?: BilingualText;
  successCriteria?: BilingualText[];
  vocabulary: ReadingWord[];
  lesson: BilingualText;
  exercises: ReadingQuestion[];
  quiz: ReadingQuestion[];
  creativePrompt?: CreativePrompt;
};

export type GradeReading = {
  grade: number;
  label: string;
  emoji: string;
  color: string;
  units: ReadingUnit[];
};
