import { ReadingPillar, BilingualText } from "./types";

// Simplified from WIDA's 6 official proficiency levels down to 3 practical
// bands — matches how most classrooms actually group students for
// differentiation. See docs/decisions/proficiency-tiered-scaffolds.md for
// the reasoning behind every decision in this file.
export type ProficiencyTier = "emerging" | "developing" | "bridging";

export type EslScaffold = {
  title: BilingualText;
  strategy: Record<ProficiencyTier, BilingualText>;
};

// One grounded ESL strategy per pillar, reused across every grade's daily
// lesson — the pillar-level move stays the same even as the specific
// content changes grade to grade. Vocabulary and Comprehension are fully
// tiered (proof of concept); the other three pillars currently repeat the
// same "developing" text across all tiers — not yet differentiated, see
// the decision log for why that's an honest content-authoring gap, not a
// bug.
const eslScaffolds: Record<ReadingPillar, EslScaffold> = {
  "phonemic-awareness": {
    title: { en: "Sound Play in Both Languages", es: "Jugar con Sonidos en Ambos Idiomas", ur: "دونوں زبانوں میں آوازوں کا کھیل" },
    strategy: {
      emerging: {
        en: "Before isolating today's target sound in English, name its closest match in the student's home language — or name clearly that it has no match. A sound that doesn't exist in Spanish or Urdu isn't a mistake the student is making; it's genuinely new, and saying so out loud removes the shame from getting it wrong at first.",
        es: "Antes de aislar el sonido de hoy en inglés, nombra su equivalente más cercano en el idioma del hogar del estudiante — o indica claramente que no tiene equivalente. Un sonido que no existe en español o urdu no es un error que el estudiante está cometiendo; es genuinamente nuevo, y decirlo en voz alta quita la vergüenza de equivocarse al principio.",
        ur: "آج کی ہدف آواز کو انگریزی میں الگ کرنے سے پہلے، طالب علم کی گھریلو زبان میں اس کی قریب ترین مثال بتائیں — یا واضح کریں کہ اس کی کوئی مثال نہیں۔ وہ آواز جو ہسپانوی یا اردو میں موجود نہیں وہ طالب علم کی غلطی نہیں؛ یہ واقعی نئی ہے، اور یہ بلند آواز میں کہنا شروع میں غلطی کرنے کی شرمندگی دور کرتا ہے۔",
      },
      developing: {
        en: "Before isolating today's target sound in English, name its closest match in the student's home language — or name clearly that it has no match. A sound that doesn't exist in Spanish or Urdu isn't a mistake the student is making; it's genuinely new, and saying so out loud removes the shame from getting it wrong at first.",
        es: "Antes de aislar el sonido de hoy en inglés, nombra su equivalente más cercano en el idioma del hogar del estudiante — o indica claramente que no tiene equivalente. Un sonido que no existe en español o urdu no es un error que el estudiante está cometiendo; es genuinamente nuevo, y decirlo en voz alta quita la vergüenza de equivocarse al principio.",
        ur: "آج کی ہدف آواز کو انگریزی میں الگ کرنے سے پہلے، طالب علم کی گھریلو زبان میں اس کی قریب ترین مثال بتائیں — یا واضح کریں کہ اس کی کوئی مثال نہیں۔ وہ آواز جو ہسپانوی یا اردو میں موجود نہیں وہ طالب علم کی غلطی نہیں؛ یہ واقعی نئی ہے، اور یہ بلند آواز میں کہنا شروع میں غلطی کرنے کی شرمندگی دور کرتا ہے۔",
      },
      bridging: {
        en: "Before isolating today's target sound in English, name its closest match in the student's home language — or name clearly that it has no match. A sound that doesn't exist in Spanish or Urdu isn't a mistake the student is making; it's genuinely new, and saying so out loud removes the shame from getting it wrong at first.",
        es: "Antes de aislar el sonido de hoy en inglés, nombra su equivalente más cercano en el idioma del hogar del estudiante — o indica claramente que no tiene equivalente. Un sonido que no existe en español o urdu no es un error que el estudiante está cometiendo; es genuinamente nuevo, y decirlo en voz alta quita la vergüenza de equivocarse al principio.",
        ur: "آج کی ہدف آواز کو انگریزی میں الگ کرنے سے پہلے، طالب علم کی گھریلو زبان میں اس کی قریب ترین مثال بتائیں — یا واضح کریں کہ اس کی کوئی مثال نہیں۔ وہ آواز جو ہسپانوی یا اردو میں موجود نہیں وہ طالب علم کی غلطی نہیں؛ یہ واقعی نئی ہے، اور یہ بلند آواز میں کہنا شروع میں غلطی کرنے کی شرمندگی دور کرتا ہے۔",
      },
    },
  },
  phonics: {
    title: { en: "The Letter-Sound Bridge", es: "El Puente Letra-Sonido", ur: "حرف اور آواز کا پل" },
    strategy: {
      emerging: {
        en: "Spanish is highly phonetic — letters reliably map to sounds — so for Spanish-speaking students, say explicitly when today's letter-sound pattern transfers directly and when English breaks its own rule. Urdu uses a completely different script (Arabic-derived, right-to-left), so for Urdu-background students, anchor to the shared sound rather than any letter shape — there's no visual shortcut to lean on, only the sound itself.",
        es: "El español es muy fonético — las letras se corresponden de forma confiable con los sonidos — así que para estudiantes de habla hispana, indica claramente cuándo el patrón letra-sonido de hoy se transfiere directamente y cuándo el inglés rompe su propia regla. El urdu usa una escritura completamente diferente (derivada del árabe, de derecha a izquierda), así que para estudiantes de origen urdu, ancla en el sonido compartido en lugar de la forma de la letra — no hay atajo visual en el que apoyarse, solo el sonido mismo.",
        ur: "ہسپانوی زبان انتہائی صوتی ہے — حروف قابل اعتماد طریقے سے آوازوں سے مطابقت رکھتے ہیں — تو ہسپانوی بولنے والے طلبہ کے لیے واضح طور پر بتائیں کہ آج کا حرف آواز نمونہ کب براہ راست منتقل ہوتا ہے اور کب انگریزی اپنا ہی اصول توڑتی ہے۔ اردو مکمل طور پر مختلف رسم الخط استعمال کرتی ہے (عربی سے ماخوذ، دائیں سے بائیں)، تو اردو پس منظر رکھنے والے طلبہ کے لیے، حرف کی شکل کی بجائے مشترکہ آواز پر انحصار کریں — کوئی بصری شارٹ کٹ نہیں، صرف آواز خود۔",
      },
      developing: {
        en: "Spanish is highly phonetic — letters reliably map to sounds — so for Spanish-speaking students, say explicitly when today's letter-sound pattern transfers directly and when English breaks its own rule. Urdu uses a completely different script (Arabic-derived, right-to-left), so for Urdu-background students, anchor to the shared sound rather than any letter shape — there's no visual shortcut to lean on, only the sound itself.",
        es: "El español es muy fonético — las letras se corresponden de forma confiable con los sonidos — así que para estudiantes de habla hispana, indica claramente cuándo el patrón letra-sonido de hoy se transfiere directamente y cuándo el inglés rompe su propia regla. El urdu usa una escritura completamente diferente (derivada del árabe, de derecha a izquierda), así que para estudiantes de origen urdu, ancla en el sonido compartido en lugar de la forma de la letra — no hay atajo visual en el que apoyarse, solo el sonido mismo.",
        ur: "ہسپانوی زبان انتہائی صوتی ہے — حروف قابل اعتماد طریقے سے آوازوں سے مطابقت رکھتے ہیں — تو ہسپانوی بولنے والے طلبہ کے لیے واضح طور پر بتائیں کہ آج کا حرف آواز نمونہ کب براہ راست منتقل ہوتا ہے اور کب انگریزی اپنا ہی اصول توڑتی ہے۔ اردو مکمل طور پر مختلف رسم الخط استعمال کرتی ہے (عربی سے ماخوذ، دائیں سے بائیں)، تو اردو پس منظر رکھنے والے طلبہ کے لیے، حرف کی شکل کی بجائے مشترکہ آواز پر انحصار کریں — کوئی بصری شارٹ کٹ نہیں، صرف آواز خود۔",
      },
      bridging: {
        en: "Spanish is highly phonetic — letters reliably map to sounds — so for Spanish-speaking students, say explicitly when today's letter-sound pattern transfers directly and when English breaks its own rule. Urdu uses a completely different script (Arabic-derived, right-to-left), so for Urdu-background students, anchor to the shared sound rather than any letter shape — there's no visual shortcut to lean on, only the sound itself.",
        es: "El español es muy fonético — las letras se corresponden de forma confiable con los sonidos — así que para estudiantes de habla hispana, indica claramente cuándo el patrón letra-sonido de hoy se transfiere directamente y cuándo el inglés rompe su propia regla. El urdu usa una escritura completamente diferente (derivada del árabe, de derecha a izquierda), así que para estudiantes de origen urdu, ancla en el sonido compartido en lugar de la forma de la letra — no hay atajo visual en el que apoyarse, solo el sonido mismo.",
        ur: "ہسپانوی زبان انتہائی صوتی ہے — حروف قابل اعتماد طریقے سے آوازوں سے مطابقت رکھتے ہیں — تو ہسپانوی بولنے والے طلبہ کے لیے واضح طور پر بتائیں کہ آج کا حرف آواز نمونہ کب براہ راست منتقل ہوتا ہے اور کب انگریزی اپنا ہی اصول توڑتی ہے۔ اردو مکمل طور پر مختلف رسم الخط استعمال کرتی ہے (عربی سے ماخوذ، دائیں سے بائیں)، تو اردو پس منظر رکھنے والے طلبہ کے لیے، حرف کی شکل کی بجائے مشترکہ آواز پر انحصار کریں — کوئی بصری شارٹ کٹ نہیں، صرف آواز خود۔",
      },
    },
  },
  fluency: {
    title: { en: "Echo Reading with the Speaker Button", es: "Lectura de Eco con el Botón de Audio", ur: "اسپیکر بٹن کے ساتھ عکسی پڑھائی" },
    strategy: {
      emerging: {
        en: "Play the English audio, have the student echo it back, then play the home-language audio for the same line. That second step matters — it confirms the student understood what they just decoded, not just that they could reproduce the sounds.",
        es: "Reproduce el audio en inglés, haz que el estudiante lo repita, luego reproduce el audio en el idioma del hogar para la misma línea. Ese segundo paso importa — confirma que el estudiante entendió lo que acaba de decodificar, no solo que pudo reproducir los sonidos.",
        ur: "انگریزی آڈیو چلائیں، طالب علم سے اسے دہرانے کو کہیں، پھر اسی سطر کے لیے گھریلو زبان کا آڈیو چلائیں۔ یہ دوسرا مرحلہ اہم ہے — یہ تصدیق کرتا ہے کہ طالب علم نے وہ سمجھا جو ابھی پڑھا، نہ کہ صرف آوازیں دہرا سکا۔",
      },
      developing: {
        en: "Play the English audio, have the student echo it back, then play the home-language audio for the same line. That second step matters — it confirms the student understood what they just decoded, not just that they could reproduce the sounds.",
        es: "Reproduce el audio en inglés, haz que el estudiante lo repita, luego reproduce el audio en el idioma del hogar para la misma línea. Ese segundo paso importa — confirma que el estudiante entendió lo que acaba de decodificar, no solo que pudo reproducir los sonidos.",
        ur: "انگریزی آڈیو چلائیں، طالب علم سے اسے دہرانے کو کہیں، پھر اسی سطر کے لیے گھریلو زبان کا آڈیو چلائیں۔ یہ دوسرا مرحلہ اہم ہے — یہ تصدیق کرتا ہے کہ طالب علم نے وہ سمجھا جو ابھی پڑھا، نہ کہ صرف آوازیں دہرا سکا۔",
      },
      bridging: {
        en: "Play the English audio, have the student echo it back, then play the home-language audio for the same line. That second step matters — it confirms the student understood what they just decoded, not just that they could reproduce the sounds.",
        es: "Reproduce el audio en inglés, haz que el estudiante lo repita, luego reproduce el audio en el idioma del hogar para la misma línea. Ese segundo paso importa — confirma que el estudiante entendió lo que acaba de decodificar, no solo que pudo reproducir los sonidos.",
        ur: "انگریزی آڈیو چلائیں، طالب علم سے اسے دہرانے کو کہیں، پھر اسی سطر کے لیے گھریلو زبان کا آڈیو چلائیں۔ یہ دوسرا مرحلہ اہم ہے — یہ تصدیق کرتا ہے کہ طالب علم نے وہ سمجھا جو ابھی پڑھا، نہ کہ صرف آوازیں دہرا سکا۔",
      },
    },
  },
  "high-frequency-words": {
    title: { en: "Recognition Over Translation", es: "Reconocimiento Antes que Traducción", ur: "ترجمے کی بجائے پہچان" },
    strategy: {
      emerging: {
        en: "Words like \"would,\" \"could,\" and \"which\" often have no single clean word-for-word match in Spanish or Urdu — trying to translate them one-to-one can confuse more than it helps. Instead of translating, model the word in a few short, real sentences and have the student repeat it as a whole shape, the same way they'd memorize a friend's name — recognition first, meaning through use, not through translation.",
        es: "Palabras como \"would,\" \"could,\" y \"which\" a menudo no tienen una traducción exacta en español o urdu — intentar traducirlas palabra por palabra puede confundir más de lo que ayuda. En lugar de traducir, modela la palabra en unas pocas oraciones cortas y reales, y haz que el estudiante la repita como una forma completa, igual que memorizaría el nombre de un amigo — reconocimiento primero, significado a través del uso, no de la traducción.",
        ur: "\"would,\" \"could,\" اور \"which\" جیسے الفاظ کا اکثر ہسپانوی یا اردو میں کوئی ایک صاف لفظی ترجمہ نہیں ہوتا — انہیں لفظ بہ لفظ ترجمہ کرنے کی کوشش مدد کی بجائے الجھن پیدا کر سکتی ہے۔ ترجمہ کرنے کی بجائے، لفظ کو چند مختصر، حقیقی جملوں میں دکھائیں اور طالب علم سے اسے مکمل شکل میں دہرانے کو کہیں، بالکل اسی طرح جیسے وہ کسی دوست کا نام یاد کرے گا — پہلے پہچان، مطلب استعمال کے ذریعے، ترجمے کے ذریعے نہیں۔",
      },
      developing: {
        en: "Words like \"would,\" \"could,\" and \"which\" often have no single clean word-for-word match in Spanish or Urdu — trying to translate them one-to-one can confuse more than it helps. Instead of translating, model the word in a few short, real sentences and have the student repeat it as a whole shape, the same way they'd memorize a friend's name — recognition first, meaning through use, not through translation.",
        es: "Palabras como \"would,\" \"could,\" y \"which\" a menudo no tienen una traducción exacta en español o urdu — intentar traducirlas palabra por palabra puede confundir más de lo que ayuda. En lugar de traducir, modela la palabra en unas pocas oraciones cortas y reales, y haz que el estudiante la repita como una forma completa, igual que memorizaría el nombre de un amigo — reconocimiento primero, significado a través del uso, no de la traducción.",
        ur: "\"would,\" \"could,\" اور \"which\" جیسے الفاظ کا اکثر ہسپانوی یا اردو میں کوئی ایک صاف لفظی ترجمہ نہیں ہوتا — انہیں لفظ بہ لفظ ترجمہ کرنے کی کوشش مدد کی بجائے الجھن پیدا کر سکتی ہے۔ ترجمہ کرنے کی بجائے، لفظ کو چند مختصر، حقیقی جملوں میں دکھائیں اور طالب علم سے اسے مکمل شکل میں دہرانے کو کہیں، بالکل اسی طرح جیسے وہ کسی دوست کا نام یاد کرے گا — پہلے پہچان، مطلب استعمال کے ذریعے، ترجمے کے ذریعے نہیں۔",
      },
      bridging: {
        en: "Words like \"would,\" \"could,\" and \"which\" often have no single clean word-for-word match in Spanish or Urdu — trying to translate them one-to-one can confuse more than it helps. Instead of translating, model the word in a few short, real sentences and have the student repeat it as a whole shape, the same way they'd memorize a friend's name — recognition first, meaning through use, not through translation.",
        es: "Palabras como \"would,\" \"could,\" y \"which\" a menudo no tienen una traducción exacta en español o urdu — intentar traducirlas palabra por palabra puede confundir más de lo que ayuda. En lugar de traducir, modela la palabra en unas pocas oraciones cortas y reales, y haz que el estudiante la repita como una forma completa, igual que memorizaría el nombre de un amigo — reconocimiento primero, significado a través del uso, no de la traducción.",
        ur: "\"would,\" \"could,\" اور \"which\" جیسے الفاظ کا اکثر ہسپانوی یا اردو میں کوئی ایک صاف لفظی ترجمہ نہیں ہوتا — انہیں لفظ بہ لفظ ترجمہ کرنے کی کوشش مدد کی بجائے الجھن پیدا کر سکتی ہے۔ ترجمہ کرنے کی بجائے، لفظ کو چند مختصر، حقیقی جملوں میں دکھائیں اور طالب علم سے اسے مکمل شکل میں دہرانے کو کہیں، بالکل اسی طرح جیسے وہ کسی دوست کا نام یاد کرے گا — پہلے پہچان، مطلب استعمال کے ذریعے، ترجمے کے ذریعے نہیں۔",
      },
    },
  },
  vocabulary: {
    title: { en: "The Cognate Bridge", es: "El Puente de Cognados", ur: "مشترک الفاظ کا پل" },
    strategy: {
      emerging: {
        en: "Cognate awareness alone isn't enough support yet — say the English word, immediately say the home-language word, and show the picture together, all three at once. For Urdu-background students especially, lead with direct translation before anything else, since there's no cognate shortcut available to them at all.",
        es: "La conciencia de cognados por sí sola aún no es suficiente apoyo — di la palabra en inglés, di inmediatamente la palabra en el idioma del hogar, y muestra la imagen, los tres juntos a la vez. Para estudiantes de origen urdu especialmente, comienza con la traducción directa antes que nada, ya que no tienen ningún atajo de cognados disponible.",
        ur: "صرف مشترک الفاظ کی آگاہی ابھی کافی مدد نہیں — انگریزی لفظ بولیں، فوراً گھریلو زبان کا لفظ بولیں، اور تصویر دکھائیں، تینوں ایک ساتھ۔ خاص طور پر اردو پس منظر کے طلبہ کے لیے، براہ راست ترجمے سے شروع کریں، کیونکہ ان کے پاس کوئی مشترک الفاظ کا شارٹ کٹ دستیاب نہیں۔",
      },
      developing: {
        en: "For Spanish-speaking students, actively call out English-Spanish cognates — many academic words transfer almost directly (community/comunidad, fraction/fracción). Urdu isn't a cognate language with English, so for Urdu-background students, lean on the emoji/visual anchor and the translation pairing instead — there's no shortcut through shared word roots, so the image has to do that work.",
        es: "Para estudiantes de habla hispana, señala activamente los cognados entre inglés y español — muchas palabras académicas se transfieren casi directamente (community/comunidad, fraction/fracción). El urdu no es un idioma cognado con el inglés, así que para estudiantes de origen urdu, apóyate en el ancla visual/emoji y el par de traducción en su lugar — no hay atajo a través de raíces de palabras compartidas, así que la imagen tiene que hacer ese trabajo.",
        ur: "ہسپانوی بولنے والے طلبہ کے لیے، انگریزی اور ہسپانوی کے مشترک الفاظ کو فعال طور پر نشان زد کریں — بہت سے علمی الفاظ تقریباً براہ راست منتقل ہوتے ہیں۔ اردو انگریزی کے ساتھ مشترک الفاظ والی زبان نہیں، تو اردو پس منظر رکھنے والے طلبہ کے لیے، ایموجی/بصری اشارے اور ترجمے کے جوڑے پر انحصار کریں — مشترک الفاظ کی جڑوں سے کوئی شارٹ کٹ نہیں، تو تصویر کو یہ کام کرنا ہوگا۔",
      },
      bridging: {
        en: "Let the student try to draw the cognate connection themselves first — ask \"does this word remind you of anything in Spanish?\" before supplying the answer. For Urdu-background students at this level, ask them to explain the concept in their own English words first, then offer the translation only as a check, since they have more English capacity to work with already.",
        es: "Deja que el estudiante intente hacer la conexión de cognados por sí mismo primero — pregunta \"¿esta palabra te recuerda algo en español?\" antes de dar la respuesta. Para estudiantes de origen urdu en este nivel, pídeles que expliquen el concepto con sus propias palabras en inglés primero, y ofrece la traducción solo como verificación, ya que ya cuentan con más capacidad en inglés.",
        ur: "طالب علم کو پہلے خود مشترک الفاظ کا تعلق تلاش کرنے دیں — پوچھیں \"کیا یہ لفظ آپ کو ہسپانوی میں کسی چیز کی یاد دلاتا ہے؟\" جواب دینے سے پہلے۔ اس سطح پر اردو پس منظر کے طلبہ سے پہلے انگریزی میں اپنے الفاظ میں تصور بیان کرنے کو کہیں، پھر ترجمہ صرف تصدیق کے طور پر پیش کریں، کیونکہ ان کے پاس پہلے سے زیادہ انگریزی صلاحیت موجود ہے۔",
      },
    },
  },
  comprehension: {
    title: { en: "Sentence Frames for Retelling", es: "Marcos de Oraciones para Volver a Contar", ur: "دوبارہ بیان کرنے کے لیے جملے کے فریم" },
    strategy: {
      emerging: {
        en: "A full sentence frame may still be too much spoken output. Let the student point to pictures in the right order, or answer in single words or their home language first — then model the English frame sentence yourself so they hear it, without requiring them to produce it yet.",
        es: "Un marco de oración completo puede ser todavía demasiada producción hablada. Deja que el estudiante señale las imágenes en el orden correcto, o responda con palabras sueltas o en su idioma del hogar primero — luego modela tú la oración en inglés para que la escuchen, sin exigir que la produzcan todavía.",
        ur: "مکمل جملے کا فریم ابھی بھی بہت زیادہ بولنے کی پیداوار ہو سکتا ہے۔ طالب علم کو صحیح ترتیب میں تصویروں کی طرف اشارہ کرنے دیں، یا پہلے اکیلے الفاظ یا اپنی گھریلو زبان میں جواب دیں — پھر خود انگریزی جملے کا نمونہ بنائیں تاکہ وہ اسے سنیں، ابھی ان سے پیدا کرنے کا تقاضا کیے بغیر۔",
      },
      developing: {
        en: "Give a repeatable frame — \"First, ___. Then, ___. In the end, ___\" — so a student who understood the story but isn't yet fluent in producing English sentences can still show real comprehension instead of getting stuck on the language demand.",
        es: "Da un marco repetible — \"Primero, ___. Luego, ___. Al final, ___\" — para que un estudiante que entendió la historia pero aún no domina la producción de oraciones en inglés pueda mostrar comprensión real en lugar de quedarse atascado en la exigencia del idioma.",
        ur: "ایک قابل تکرار فریم دیں — \"پہلے، ___۔ پھر، ___۔ آخر میں، ___\" — تاکہ وہ طالب علم جس نے کہانی سمجھ لی لیکن ابھی انگریزی جملے بنانے میں روانی نہیں رکھتا، زبان کی مشکل میں پھنسنے کی بجائے حقیقی سمجھ دکھا سکے۔",
      },
      bridging: {
        en: "Drop the sentence frame and ask an open-ended \"what happened in the story?\" instead — keep the frame in your back pocket only as a fallback if the student gets stuck. At this level, the goal is pushing toward independent, unprompted retelling.",
        es: "Elimina el marco de oración y haz una pregunta abierta como \"¿qué pasó en la historia?\" en su lugar — guarda el marco solo como respaldo si el estudiante se traba. En este nivel, la meta es avanzar hacia una narración independiente y sin apoyo.",
        ur: "جملے کا فریم ہٹا دیں اور اس کی بجائے کھلا سوال پوچھیں \"کہانی میں کیا ہوا؟\" — فریم کو صرف اس صورت میں استعمال کے لیے رکھیں اگر طالب علم اٹک جائے۔ اس سطح پر مقصد آزادانہ، بغیر مدد کے دوبارہ بیان کی طرف بڑھنا ہے۔",
      },
    },
  },
};

export default eslScaffolds;
