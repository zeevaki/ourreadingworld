import { ReadingPillar, BilingualText } from "./types";

export type EslScaffold = {
  title: BilingualText;
  strategy: BilingualText;
};

// One grounded ESL strategy per pillar, reused across every grade's daily
// lesson — the pillar-level move stays the same even as the specific
// content changes grade to grade.
const eslScaffolds: Record<ReadingPillar, EslScaffold> = {
  "phonemic-awareness": {
    title: { en: "Sound Play in Both Languages", es: "Jugar con Sonidos en Ambos Idiomas", ur: "دونوں زبانوں میں آوازوں کا کھیل" },
    strategy: {
      en: "Before isolating today's target sound in English, name its closest match in the student's home language — or name clearly that it has no match. A sound that doesn't exist in Spanish or Urdu isn't a mistake the student is making; it's genuinely new, and saying so out loud removes the shame from getting it wrong at first.",
      es: "Antes de aislar el sonido de hoy en inglés, nombra su equivalente más cercano en el idioma del hogar del estudiante — o indica claramente que no tiene equivalente. Un sonido que no existe en español o urdu no es un error que el estudiante está cometiendo; es genuinamente nuevo, y decirlo en voz alta quita la vergüenza de equivocarse al principio.",
      ur: "آج کی ہدف آواز کو انگریزی میں الگ کرنے سے پہلے، طالب علم کی گھریلو زبان میں اس کی قریب ترین مثال بتائیں — یا واضح کریں کہ اس کی کوئی مثال نہیں۔ وہ آواز جو ہسپانوی یا اردو میں موجود نہیں وہ طالب علم کی غلطی نہیں؛ یہ واقعی نئی ہے، اور یہ بلند آواز میں کہنا شروع میں غلطی کرنے کی شرمندگی دور کرتا ہے۔",
    },
  },
  phonics: {
    title: { en: "The Letter-Sound Bridge", es: "El Puente Letra-Sonido", ur: "حرف اور آواز کا پل" },
    strategy: {
      en: "Spanish is highly phonetic — letters reliably map to sounds — so for Spanish-speaking students, say explicitly when today's letter-sound pattern transfers directly and when English breaks its own rule. Urdu uses a completely different script (Arabic-derived, right-to-left), so for Urdu-background students, anchor to the shared sound rather than any letter shape — there's no visual shortcut to lean on, only the sound itself.",
      es: "El español es muy fonético — las letras se corresponden de forma confiable con los sonidos — así que para estudiantes de habla hispana, indica claramente cuándo el patrón letra-sonido de hoy se transfiere directamente y cuándo el inglés rompe su propia regla. El urdu usa una escritura completamente diferente (derivada del árabe, de derecha a izquierda), así que para estudiantes de origen urdu, ancla en el sonido compartido en lugar de la forma de la letra — no hay atajo visual en el que apoyarse, solo el sonido mismo.",
      ur: "ہسپانوی زبان انتہائی صوتی ہے — حروف قابل اعتماد طریقے سے آوازوں سے مطابقت رکھتے ہیں — تو ہسپانوی بولنے والے طلبہ کے لیے واضح طور پر بتائیں کہ آج کا حرف آواز نمونہ کب براہ راست منتقل ہوتا ہے اور کب انگریزی اپنا ہی اصول توڑتی ہے۔ اردو مکمل طور پر مختلف رسم الخط استعمال کرتی ہے (عربی سے ماخوذ، دائیں سے بائیں)، تو اردو پس منظر رکھنے والے طلبہ کے لیے، حرف کی شکل کی بجائے مشترکہ آواز پر انحصار کریں — کوئی بصری شارٹ کٹ نہیں، صرف آواز خود۔",
    },
  },
  fluency: {
    title: { en: "Echo Reading with the Speaker Button", es: "Lectura de Eco con el Botón de Audio", ur: "اسپیکر بٹن کے ساتھ عکسی پڑھائی" },
    strategy: {
      en: "Play the English audio, have the student echo it back, then play the home-language audio for the same line. That second step matters — it confirms the student understood what they just decoded, not just that they could reproduce the sounds.",
      es: "Reproduce el audio en inglés, haz que el estudiante lo repita, luego reproduce el audio en el idioma del hogar para la misma línea. Ese segundo paso importa — confirma que el estudiante entendió lo que acaba de decodificar, no solo que pudo reproducir los sonidos.",
      ur: "انگریزی آڈیو چلائیں، طالب علم سے اسے دہرانے کو کہیں، پھر اسی سطر کے لیے گھریلو زبان کا آڈیو چلائیں۔ یہ دوسرا مرحلہ اہم ہے — یہ تصدیق کرتا ہے کہ طالب علم نے وہ سمجھا جو ابھی پڑھا، نہ کہ صرف آوازیں دہرا سکا۔",
    },
  },
  vocabulary: {
    title: { en: "The Cognate Bridge", es: "El Puente de Cognados", ur: "مشترک الفاظ کا پل" },
    strategy: {
      en: "For Spanish-speaking students, actively call out English-Spanish cognates — many academic words transfer almost directly (community/comunidad, fraction/fracción). Urdu isn't a cognate language with English, so for Urdu-background students, lean on the emoji/visual anchor and the translation pairing instead — there's no shortcut through shared word roots, so the image has to do that work.",
      es: "Para estudiantes de habla hispana, señala activamente los cognados entre inglés y español — muchas palabras académicas se transfieren casi directamente (community/comunidad, fraction/fracción). El urdu no es un idioma cognado con el inglés, así que para estudiantes de origen urdu, apóyate en el ancla visual/emoji y el par de traducción en su lugar — no hay atajo a través de raíces de palabras compartidas, así que la imagen tiene que hacer ese trabajo.",
      ur: "ہسپانوی بولنے والے طلبہ کے لیے، انگریزی اور ہسپانوی کے مشترک الفاظ کو فعال طور پر نشان زد کریں — بہت سے علمی الفاظ تقریباً براہ راست منتقل ہوتے ہیں۔ اردو انگریزی کے ساتھ مشترک الفاظ والی زبان نہیں، تو اردو پس منظر رکھنے والے طلبہ کے لیے، ایموجی/بصری اشارے اور ترجمے کے جوڑے پر انحصار کریں — مشترک الفاظ کی جڑوں سے کوئی شارٹ کٹ نہیں، تو تصویر کو یہ کام کرنا ہوگا۔",
    },
  },
  comprehension: {
    title: { en: "Sentence Frames for Retelling", es: "Marcos de Oraciones para Volver a Contar", ur: "دوبارہ بیان کرنے کے لیے جملے کے فریم" },
    strategy: {
      en: "Give a repeatable frame — \"First, ___. Then, ___. In the end, ___\" — so a student who understood the story but isn't yet fluent in producing English sentences can still show real comprehension instead of getting stuck on the language demand.",
      es: "Da un marco repetible — \"Primero, ___. Luego, ___. Al final, ___\" — para que un estudiante que entendió la historia pero aún no domina la producción de oraciones en inglés pueda mostrar comprensión real en lugar de quedarse atascado en la exigencia del idioma.",
      ur: "ایک قابل تکرار فریم دیں — \"پہلے، ___۔ پھر، ___۔ آخر میں، ___\" — تاکہ وہ طالب علم جس نے کہانی سمجھ لی لیکن ابھی انگریزی جملے بنانے میں روانی نہیں رکھتا، زبان کی مشکل میں پھنسنے کی بجائے حقیقی سمجھ دکھا سکے۔",
    },
  },
};

export default eslScaffolds;
