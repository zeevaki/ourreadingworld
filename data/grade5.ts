import { GradeReading } from "./types";

const grade5: GradeReading = {
  grade: 5,
  label: "Grade 5",
  emoji: "☀️",
  color: "#047857",
  units: [
    {
      id: "5-pa-1",
      pillar: "phonemic-awareness",
      pillarLabel: {
        en: "Phonemic Awareness",
        es: "Conciencia Fonémica",
        ur: "آوازوں کی سمجھ",
      },
      title: {
        en: "Morpheme Awareness",
        es: "Conciencia de Morfemas",
        ur: "معنی کے اکائیوں کی سمجھ",
      },
      emoji: "🧬",
      teks: "TEKS 5.2A",
      cambridge: "Cambridge Reading Stage 5",
      vocabulary: [
        {
          id: "morpheme",
          word: "morpheme",
          emoji: "🔬",
          translation: { es: "morfema", ur: "معنوی اکائی" },
          definition: {
            en: "The smallest unit of meaning in a word — it cannot be broken down further without losing its meaning",
            es: "La unidad de significado más pequeña en una palabra — no puede dividirse más sin perder su significado",
            ur: "لفظ میں معنی کی سب سے چھوٹی اکائی — اسے مزید توڑا نہیں جا سکتا",
          },
          exampleSentence: {
            en: "The word unkind has two morphemes: un and kind.",
            es: "La palabra unkind tiene dos morfemas: un y kind.",
            ur: "لفظ unkind میں دو معنوی اکائیاں ہیں: un اور kind۔",
          },
        },
        {
          id: "free-morpheme",
          word: "free morpheme",
          emoji: "🆓",
          translation: { es: "morfema libre", ur: "آزاد معنوی اکائی" },
          definition: {
            en: "A morpheme that can stand alone as a word by itself",
            es: "Un morfema que puede estar solo como una palabra por sí mismo",
            ur: "وہ معنوی اکائی جو خود ایک لفظ کے طور پر کھڑی ہو سکے",
          },
          exampleSentence: {
            en: "Kind, help, and act are free morphemes — each is a complete word.",
            es: "Kind, help y act son morfemas libres — cada uno es una palabra completa.",
            ur: "Kind، help اور act آزاد معنوی اکائیاں ہیں — ہر ایک مکمل لفظ ہے۔",
          },
        },
        {
          id: "bound-morpheme",
          word: "bound morpheme",
          emoji: "🔗",
          translation: { es: "morfema ligado", ur: "جڑی معنوی اکائی" },
          definition: {
            en: "A morpheme that cannot stand alone — it must attach to another word",
            es: "Un morfema que no puede estar solo — debe unirse a otra palabra",
            ur: "وہ معنوی اکائی جو خود نہیں کھڑی ہو سکتی — اسے دوسرے لفظ سے جڑنا ہوگا",
          },
          exampleSentence: {
            en: "The prefix un and suffix ness are bound morphemes — they need a root word.",
            es: "El prefijo un y el sufijo ness son morfemas ligados — necesitan una palabra raíz.",
            ur: "سابقہ un اور لاحقہ ness جڑی معنوی اکائیاں ہیں — انہیں بنیادی لفظ چاہیے۔",
          },
        },
        {
          id: "morphological-awareness",
          word: "morphological awareness",
          emoji: "🧠",
          translation: { es: "conciencia morfológica", ur: "لفظی ساخت کی سمجھ" },
          definition: {
            en: "The ability to recognize and use word parts to read and understand new words",
            es: "La capacidad de reconocer y usar partes de palabras para leer y entender palabras nuevas",
            ur: "لفظ کے حصوں کو پہچاننے اور نئے الفاظ پڑھنے و سمجھنے کی صلاحیت",
          },
          exampleSentence: {
            en: "Morphological awareness helps you decode long words like empowerment and sustainability.",
            es: "La conciencia morfológica te ayuda a decodificar palabras largas como empowerment y sustainability.",
            ur: "لفظی ساخت کی سمجھ empowerment اور sustainability جیسے لمبے الفاظ سمجھنے میں مدد کرتی ہے۔",
          },
        },
      ],
      lesson: {
        en: `At Grade 5, reading long and complex words becomes much easier when you understand morphemes. A morpheme is the smallest unit of MEANING — not sound. While phonemes are sounds, morphemes carry meaning.\n\n**Free morphemes** — stand alone:\nkind, help, act, equal, power, place\n\n**Bound morphemes** — must attach:\n• Prefixes: un-, in-, em-, dis-, re-, pre-\n• Suffixes: -ness, -ment, -tion, -ity, -al, -able\n\nBreak these important words into morphemes:\n• un + equal + ity = inequality (3 morphemes — "the state of not being equal")\n• em + power + ment = empowerment (3 morphemes — "the act of gaining power")\n• dis + place + ment = displacement (3 morphemes — "the act of being moved out of place")\n• sustain + able = sustainable (2 morphemes — "able to be sustained")\n• un + sustain + able = unsustainable (3 morphemes — "not able to be sustained")\n\nWhen you see a long word, ask:\n1. Is there a prefix at the front?\n2. Is there a suffix at the end?\n3. What is the root word in the middle?\n4. Put the meanings together!\n\nWords like inequality, empowerment, and displacement are important for understanding social justice issues. When you can break them apart, you can read — and talk about — complex ideas with confidence.`,
        es: `En quinto grado, leer palabras largas y complejas se vuelve mucho más fácil cuando entiendes los morfemas.\n\n**Morfemas libres** — están solos:\nkind, help, act, equal, power, place\n\n**Morfemas ligados** — deben unirse:\n• Prefijos: un-, in-, em-, dis-, re-, pre-\n• Sufijos: -ness, -ment, -tion, -ity, -al, -able\n\nDescompón estas palabras importantes en morfemas:\n• un + equal + ity = inequality (3 morfemas)\n• em + power + ment = empowerment (3 morfemas)\n• dis + place + ment = displacement (3 morfemas)\n• sustain + able = sustainable (2 morfemas)\n\nCuando veas una palabra larga, pregunta:\n1. ¿Hay un prefijo al frente?\n2. ¿Hay un sufijo al final?\n3. ¿Cuál es la palabra raíz en el medio?\n4. ¡Une los significados!`,
        ur: `پانچویں جماعت میں لمبے اور پیچیدہ الفاظ پڑھنا معنوی اکائیوں کو سمجھنے سے بہت آسان ہو جاتا ہے۔\n\n**آزاد معنوی اکائیاں** — خود کھڑی ہوں:\nkind, help, act, equal, power, place\n\n**جڑی معنوی اکائیاں** — جڑنی پڑتی ہیں:\n• سابقے: un-, in-, em-, dis-, re-, pre-\n• لاحقے: -ness, -ment, -tion, -ity, -al, -able\n\nان اہم الفاظ کو معنوی اکائیوں میں توڑو:\n• un + equal + ity = inequality (3 اکائیاں)\n• em + power + ment = empowerment (3 اکائیاں)\n• dis + place + ment = displacement (3 اکائیاں)\n• sustain + able = sustainable (2 اکائیاں)\n\nجب لمبا لفظ دیکھو تو پوچھو:\n1. کیا آگے سابقہ ہے؟\n2. کیا پیچھے لاحقہ ہے؟\n3. درمیان میں بنیادی لفظ کیا ہے؟\n4. مطلب جوڑو!`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "How many morphemes does the word empowerment have?",
            es: "¿Cuántos morfemas tiene la palabra empowerment?",
            ur: "لفظ empowerment میں کتنی معنوی اکائیاں ہیں؟",
          },
          choices: [
            { en: "1", es: "1", ur: "۱" },
            { en: "2", es: "2", ur: "۲" },
            { en: "3", es: "3", ur: "۳" },
            { en: "4", es: "4", ur: "۴" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "Which of these is a BOUND morpheme — one that cannot stand alone?",
            es: "¿Cuál de estos es un morfema LIGADO — uno que no puede estar solo?",
            ur: "ان میں سے کون سی جڑی معنوی اکائی ہے — جو خود نہیں کھڑی ہو سکتی؟",
          },
          choices: [
            { en: "kind", es: "kind", ur: "kind" },
            { en: "help", es: "help", ur: "help" },
            { en: "-ment", es: "-ment", ur: "-ment" },
            { en: "act", es: "act", ur: "act" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "A morpheme is the smallest unit of meaning in a word.",
            es: "Un morfema es la unidad de significado más pequeña en una palabra.",
            ur: "معنوی اکائی کسی لفظ میں معنی کی سب سے چھوٹی اکائی ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Break apart the word unsustainable. What are its three morphemes?",
            es: "Descompón la palabra unsustainable. ¿Cuáles son sus tres morfemas?",
            ur: "لفظ unsustainable کو توڑو۔ اس کی تین معنوی اکائیاں کیا ہیں؟",
          },
          choices: [
            { en: "un + sus + tainable", es: "un + sus + tainable", ur: "un + sus + tainable" },
            { en: "uns + us + tainable", es: "uns + us + tainable", ur: "uns + us + tainable" },
            { en: "un + sustain + able", es: "un + sustain + able", ur: "un + sustain + able" },
            { en: "unsu + stain + able", es: "unsu + stain + able", ur: "unsu + stain + able" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Free morphemes like kind and help can stand alone as complete words.",
            es: "Los morfemas libres como kind y help pueden estar solos como palabras completas.",
            ur: "kind اور help جیسی آزاد معنوی اکائیاں مکمل الفاظ کے طور پر خود کھڑی ہو سکتی ہیں۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: "5-ph-1",
      pillar: "phonics",
      pillarLabel: {
        en: "Phonics",
        es: "Fonética",
        ur: "حروف اور آوازیں",
      },
      title: {
        en: "Greek & Latin Roots",
        es: "Raíces Griegas y Latinas",
        ur: "یونانی اور لاطینی جڑیں",
      },
      emoji: "🏛️",
      teks: "TEKS 5.2B",
      cambridge: "Cambridge Reading Stage 5",
      vocabulary: [
        {
          id: "root",
          word: "root",
          emoji: "🌱",
          translation: { es: "raíz", ur: "جڑ" },
          definition: {
            en: "The base part of a word that comes from Greek or Latin and carries the core meaning",
            es: "La parte base de una palabra que proviene del griego o latín y lleva el significado central",
            ur: "لفظ کا وہ بنیادی حصہ جو یونانی یا لاطینی سے آتا ہے اور مرکزی مطلب رکھتا ہے",
          },
          exampleSentence: {
            en: "The Latin root port means to carry — so transport means to carry across.",
            es: "La raíz latina port significa llevar — así que transport significa llevar a través.",
            ur: "لاطینی جڑ port کا مطلب اٹھانا ہے — تو transport کا مطلب پار اٹھانا ہے۔",
          },
        },
        {
          id: "etymology",
          word: "etymology",
          emoji: "📜",
          translation: { es: "etimología", ur: "علم اشتقاق" },
          definition: {
            en: "The study of where words come from and how their meanings have changed over time",
            es: "El estudio de dónde vienen las palabras y cómo sus significados han cambiado con el tiempo",
            ur: "اس بات کا مطالعہ کہ الفاظ کہاں سے آئے اور وقت کے ساتھ ان کے معنی کیسے بدلے",
          },
          exampleSentence: {
            en: "Understanding the etymology of a word helps you remember its meaning forever.",
            es: "Entender la etimología de una palabra te ayuda a recordar su significado para siempre.",
            ur: "کسی لفظ کی اشتقاقی تاریخ جاننا اس کا مطلب ہمیشہ یاد رکھنے میں مدد کرتا ہے۔",
          },
        },
        {
          id: "greek-root",
          word: "Greek root",
          emoji: "🇬🇷",
          translation: { es: "raíz griega", ur: "یونانی جڑ" },
          definition: {
            en: "A word part that comes from the ancient Greek language — common in science words",
            es: "Una parte de la palabra que viene del idioma griego antiguo — común en palabras científicas",
            ur: "قدیم یونانی زبان سے آنے والا لفظ کا حصہ — سائنسی الفاظ میں عام",
          },
          exampleSentence: {
            en: "The Greek root bio means life — so biology is the study of life.",
            es: "La raíz griega bio significa vida — así que biology es el estudio de la vida.",
            ur: "یونانی جڑ bio کا مطلب زندگی ہے — تو biology زندگی کا مطالعہ ہے۔",
          },
        },
        {
          id: "latin-root",
          word: "Latin root",
          emoji: "🏛️",
          translation: { es: "raíz latina", ur: "لاطینی جڑ" },
          definition: {
            en: "A word part that comes from the ancient Latin language — common in English vocabulary",
            es: "Una parte de la palabra que viene del idioma latín antiguo — común en el vocabulario inglés",
            ur: "قدیم لاطینی زبان سے آنے والا لفظ کا حصہ — انگریزی الفاظ میں عام",
          },
          exampleSentence: {
            en: "The Latin root dict means to say — so predict means to say before it happens.",
            es: "La raíz latina dict significa decir — así que predict significa decir antes de que suceda.",
            ur: "لاطینی جڑ dict کا مطلب کہنا ہے — تو predict کا مطلب پہلے سے کہنا ہے۔",
          },
        },
      ],
      lesson: {
        en: `More than 60% of English words come from Greek or Latin roots. Knowing just 20 roots unlocks the meaning of hundreds of words — including many you will find in science, social studies, and news articles!\n\n**Greek Roots:**\n• bio (life) → biology, biodiversity, biography, antibiotic\n• geo (earth) → geography, geology, geothermal, geopolitics\n• graph (write) → photograph, paragraph, biography, autograph\n• aud (hear) → audible, audience, auditorium, audiovisual\n• vis (see) → visible, vision, supervise, video\n\n**Latin Roots:**\n• port (carry) → transport, export, import, portable, support\n• dict (say/speak) → predict, dictate, verdict, contradict, dictionary\n• struct (build) → construct, structure, infrastructure, instruct, destroy\n• ject (throw) → reject, project, inject, eject, subject\n• scrib/script (write) → describe, prescription, manuscript, subscribe\n\nConnect roots to community:\n• geo + thermal = geothermal energy (heat from the earth — a clean energy source)\n• bio + diversity = biodiversity (variety of life — something we must protect)\n• infra + struct + ure = infrastructure (the built systems that support communities)\n• trans + port + ation = transportation (carrying people across distances)\n\nWhen you see an unfamiliar word, scan it for a Greek or Latin root. The root is usually the key to the meaning!`,
        es: `¡Más del 60% de las palabras en inglés provienen de raíces griegas o latinas!\n\n**Raíces griegas:**\n• bio (vida) → biology, biodiversity, biography\n• geo (tierra) → geography, geology, geothermal\n• graph (escribir) → photograph, paragraph, autograph\n• aud (escuchar) → audible, audience, auditorium\n• vis (ver) → visible, vision, supervise\n\n**Raíces latinas:**\n• port (llevar) → transport, export, import, portable\n• dict (decir) → predict, dictate, verdict, contradict\n• struct (construir) → construct, structure, infrastructure\n• ject (lanzar) → reject, project, inject, eject\n• scrib (escribir) → describe, prescription, subscribe\n\nConecta las raíces con la comunidad:\n• geo + thermal = energía geotérmica (calor de la tierra)\n• bio + diversity = biodiversidad (variedad de vida)\n• infra + struct + ure = infraestructura (sistemas construidos)`,
        ur: `انگریزی کے ۶۰ فیصد سے زیادہ الفاظ یونانی یا لاطینی جڑوں سے آتے ہیں!\n\n**یونانی جڑیں:**\n• bio (زندگی) → biology, biodiversity, biography\n• geo (زمین) → geography, geology, geothermal\n• graph (لکھنا) → photograph, paragraph, autograph\n• aud (سننا) → audible, audience, auditorium\n• vis (دیکھنا) → visible, vision, supervise\n\n**لاطینی جڑیں:**\n• port (اٹھانا) → transport, export, import, portable\n• dict (کہنا) → predict, dictate, verdict, contradict\n• struct (بنانا) → construct, structure, infrastructure\n• ject (پھینکنا) → reject, project, inject, eject\n• scrib (لکھنا) → describe, prescription, subscribe\n\nجڑوں کو کمیونٹی سے جوڑو:\n• geo + thermal = جیوتھرمل توانائی (زمین کی گرمی)\n• bio + diversity = حیاتیاتی تنوع (زندگی کی قسمیں)`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "The Greek root bio means life. Which word means the study of life?",
            es: "La raíz griega bio significa vida. ¿Cuál palabra significa el estudio de la vida?",
            ur: "یونانی جڑ bio کا مطلب زندگی ہے۔ کون سا لفظ زندگی کے مطالعے کا مطلب رکھتا ہے؟",
          },
          choices: [
            { en: "geography", es: "geography", ur: "geography" },
            { en: "biology", es: "biology", ur: "biology" },
            { en: "auditorium", es: "auditorium", ur: "auditorium" },
            { en: "transport", es: "transport", ur: "transport" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "The Latin root port means to carry. Which word means to carry goods out of a country?",
            es: "La raíz latina port significa llevar. ¿Cuál palabra significa llevar mercancías fuera de un país?",
            ur: "لاطینی جڑ port کا مطلب اٹھانا ہے۔ کون سا لفظ سامان ملک سے باہر لے جانے کا مطلب رکھتا ہے؟",
          },
          choices: [
            { en: "import", es: "import", ur: "import" },
            { en: "support", es: "support", ur: "support" },
            { en: "export", es: "export", ur: "export" },
            { en: "transport", es: "transport", ur: "transport" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Knowing Greek and Latin roots can help you understand the meaning of unfamiliar words.",
            es: "Conocer las raíces griegas y latinas puede ayudarte a entender el significado de palabras desconocidas.",
            ur: "یونانی اور لاطینی جڑیں جاننا انجان الفاظ کا مطلب سمجھنے میں مدد کر سکتا ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "The Latin root dict means to say or speak. Which word means to say something before it happens?",
            es: "La raíz latina dict significa decir o hablar. ¿Cuál palabra significa decir algo antes de que suceda?",
            ur: "لاطینی جڑ dict کا مطلب کہنا یا بولنا ہے۔ کون سا لفظ واقعہ ہونے سے پہلے کہنے کا مطلب رکھتا ہے؟",
          },
          choices: [
            { en: "dictate", es: "dictate", ur: "dictate" },
            { en: "predict", es: "predict", ur: "predict" },
            { en: "verdict", es: "verdict", ur: "verdict" },
            { en: "contradict", es: "contradict", ur: "contradict" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "The word biodiversity uses the Greek root bio, which means life.",
            es: "La palabra biodiversity usa la raíz griega bio, que significa vida.",
            ur: "لفظ biodiversity یونانی جڑ bio استعمال کرتا ہے جس کا مطلب زندگی ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: "5-fl-1",
      pillar: "fluency",
      pillarLabel: {
        en: "Fluency",
        es: "Fluidez",
        ur: "روانی",
      },
      title: {
        en: "Fluency in Complex Texts",
        es: "Fluidez en Textos Complejos",
        ur: "پیچیدہ متن میں روانی",
      },
      emoji: "🎓",
      teks: "TEKS 5.4A",
      cambridge: "Cambridge Reading Stage 5",
      vocabulary: [
        {
          id: "complex-sentence",
          word: "complex sentence",
          emoji: "🔗",
          translation: { es: "oración compleja", ur: "پیچیدہ جملہ" },
          definition: {
            en: "A sentence with a main clause and one or more dependent clauses",
            es: "Una oración con una cláusula principal y una o más cláusulas dependientes",
            ur: "ایک جملہ جس میں ایک مرکزی شق اور ایک یا زیادہ ماتحت شقیں ہوں",
          },
          exampleSentence: {
            en: "Although the project was difficult, the students never gave up.",
            es: "Aunque el proyecto era difícil, los estudiantes nunca se rindieron.",
            ur: "اگرچہ پروجیکٹ مشکل تھا، طالب علموں نے کبھی ہار نہیں مانی۔",
          },
        },
        {
          id: "parenthetical",
          word: "parenthetical phrase",
          emoji: "( )",
          translation: { es: "frase entre paréntesis", ur: "قوسین والا جملہ" },
          definition: {
            en: "An extra phrase added to a sentence — set off by commas, dashes, or parentheses — that adds information but is not essential",
            es: "Una frase adicional en una oración — separada por comas, rayas o paréntesis — que agrega información pero no es esencial",
            ur: "جملے میں اضافی جملہ — کاما، ڈیش یا قوسین سے الگ — جو معلومات شامل کرے لیکن ضروری نہ ہو",
          },
          exampleSentence: {
            en: "Rosa Parks, who refused to give up her bus seat in 1955, inspired the Civil Rights Movement.",
            es: "Rosa Parks, quien se negó a ceder su asiento en el autobús en 1955, inspiró el Movimiento de Derechos Civiles.",
            ur: "Rosa Parks، جنہوں نے ۱۹۵۵ میں بس میں اپنی سیٹ چھوڑنے سے انکار کیا، نے سول رائٹس تحریک کو متاثر کیا۔",
          },
        },
        {
          id: "subordinate-clause",
          word: "subordinate clause",
          emoji: "📎",
          translation: { es: "cláusula subordinada", ur: "ماتحت شق" },
          definition: {
            en: "A clause that cannot stand alone as a sentence — it depends on the main clause",
            es: "Una cláusula que no puede estar sola como oración — depende de la cláusula principal",
            ur: "وہ شق جو خود جملہ نہیں بن سکتی — یہ مرکزی شق پر انحصار کرتی ہے",
          },
          exampleSentence: {
            en: "Although she was young is a subordinate clause — it needs a main clause to be complete.",
            es: "Although she was young es una cláusula subordinada — necesita una cláusula principal para ser completa.",
            ur: "Although she was young ماتحت شق ہے — مکمل ہونے کے لیے مرکزی شق چاہیے۔",
          },
        },
        {
          id: "syntactic-awareness",
          word: "syntactic awareness",
          emoji: "🗺️",
          translation: { es: "conciencia sintáctica", ur: "جملے کی ساخت کی سمجھ" },
          definition: {
            en: "Understanding how sentences are structured so you can phrase them correctly when reading aloud",
            es: "Entender cómo están estructuradas las oraciones para poder frasearlas correctamente al leer en voz alta",
            ur: "یہ سمجھنا کہ جملے کیسے بنے ہیں تاکہ اونچی آواز میں پڑھتے وقت انہیں درست طریقے سے بول سکو",
          },
          exampleSentence: {
            en: "Syntactic awareness helps you know where to pause in a long, complex sentence.",
            es: "La conciencia sintáctica te ayuda a saber dónde hacer una pausa en una oración larga y compleja.",
            ur: "جملے کی ساخت کی سمجھ آپ کو بتاتی ہے کہ لمبے پیچیدہ جملے میں کہاں رکنا ہے۔",
          },
        },
      ],
      lesson: {
        en: `At Grade 5, the texts you read have longer sentences, parenthetical phrases, and complex clause structures. Fluent reading means navigating all of this so your listener understands the meaning — not just the words.\n\n**Where to pause in complex sentences:**\n• After introductory clauses: "Although the task was hard, [pause] they kept going."\n• Around parenthetical phrases: "Malala Yousafzai, [pause] who was shot for defending girls' education, [pause] went on to win the Nobel Prize."\n• Before connecting words: "They planted trees, [pause] built rain gardens, [pause] and petitioned the city council."\n• At all punctuation marks: commas, semicolons, dashes, colons\n\nPractice this passage about a young activist:\n\n"Xiomara, a fifth-grade student from Dallas, noticed that her neighborhood had no parks — only concrete and parking lots. Although her teacher said the idea was ambitious, Xiomara wrote a letter to the city council, organized a petition signed by 200 neighbors, and — after three months of effort — secured a vote to convert an empty lot into a community garden."\n\nPhrase it like this:\n• "Xiomara, [pause] a fifth-grade student from Dallas, [pause] noticed that her neighborhood had no parks [pause] — only concrete and parking lots."\n\nYour voice should rise slightly before the dash, then drop when naming the contrast. The listener should feel the emptiness of no parks — then the hope of what Xiomara did.`,
        es: `En quinto grado, los textos tienen oraciones más largas y estructuras de cláusulas complejas.\n\n**Dónde hacer pausas en oraciones complejas:**\n• Después de cláusulas introductorias: "Although the task was hard, [pausa] they kept going."\n• Alrededor de frases entre paréntesis: "Malala Yousafzai, [pausa] who was shot for defending girls' education, [pausa] won the Nobel Prize."\n• Antes de palabras conectoras: "They planted trees, [pausa] built rain gardens, [pausa] and petitioned the city."\n\nPractica este párrafo:\n\n"Xiomara, a fifth-grade student from Dallas, noticed that her neighborhood had no parks — only concrete and parking lots. Although her teacher said the idea was ambitious, Xiomara wrote a letter to the city council, organized a petition signed by 200 neighbors, and — after three months of effort — secured a vote to convert an empty lot into a community garden."`,
        ur: `پانچویں جماعت میں متن میں لمبے جملے اور پیچیدہ شق کی ساختیں ہوتی ہیں۔\n\n**پیچیدہ جملوں میں کہاں رکنا ہے:**\n• تعارفی شقوں کے بعد: "Although the task was hard, [رکو] they kept going."\n• قوسین والے جملوں کے گرد: "Malala Yousafzai, [رکو] who was shot for defending girls' education, [رکو] won the Nobel Prize."\n• جوڑنے والے الفاظ سے پہلے: "They planted trees, [رکو] built rain gardens, [رکو] and petitioned the city."\n\nیہ اقتباس مشق کرو:\n\n"Xiomara, a fifth-grade student from Dallas, noticed that her neighborhood had no parks — only concrete and parking lots. Although her teacher said the idea was ambitious, Xiomara wrote a letter to the city council, organized a petition signed by 200 neighbors, and — after three months of effort — secured a vote to convert an empty lot into a community garden."`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "In the sentence Although she was young, Malala never stopped fighting for education — where should you pause?",
            es: "En la oración Although she was young, Malala never stopped fighting for education — ¿dónde debes hacer una pausa?",
            ur: "جملے Although she was young, Malala never stopped fighting for education میں کہاں رکنا چاہیے؟",
          },
          choices: [
            { en: "Before the word although", es: "Antes de la palabra although", ur: "لفظ although سے پہلے" },
            { en: "After the comma following young", es: "Después de la coma que sigue a young", ur: "young کے بعد کاما پر" },
            { en: "Before the word for", es: "Antes de la palabra for", ur: "لفظ for سے پہلے" },
            { en: "There are no good pausing places", es: "No hay buenos lugares para pausar", ur: "رکنے کی کوئی اچھی جگہ نہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "A parenthetical phrase adds extra information to a sentence and is set off by commas, dashes, or parentheses.",
            es: "Una frase entre paréntesis agrega información adicional a una oración y está separada por comas, rayas o paréntesis.",
            ur: "قوسین والا جملہ جملے میں اضافی معلومات شامل کرتا ہے اور کاما، ڈیش یا قوسین سے الگ ہوتا ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
        {
          id: "e3",
          type: "multiple-choice",
          prompt: {
            en: "What does syntactic awareness help you do when reading aloud?",
            es: "¿Qué te ayuda a hacer la conciencia sintáctica cuando lees en voz alta?",
            ur: "اونچی آواز میں پڑھتے وقت جملے کی ساخت کی سمجھ آپ کی کیا مدد کرتی ہے؟",
          },
          choices: [
            { en: "Read faster without pausing", es: "Leer más rápido sin pausar", ur: "بغیر رکے تیز پڑھنا" },
            { en: "Know where to pause and phrase words correctly", es: "Saber dónde pausar y frasear las palabras correctamente", ur: "جاننا کہ کہاں رکنا اور الفاظ کو درست طریقے سے بولنا" },
            { en: "Understand only the vocabulary words", es: "Entender solo las palabras de vocabulario", ur: "صرف الفاظ کو سمجھنا" },
            { en: "Skip the difficult sentences", es: "Saltarse las oraciones difíciles", ur: "مشکل جملے چھوڑنا" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "A subordinate clause like Although the task was hard cannot stand alone. What does it need?",
            es: "Una cláusula subordinada como Although the task was hard no puede estar sola. ¿Qué necesita?",
            ur: "Although the task was hard جیسی ماتحت شق خود نہیں کھڑی ہو سکتی۔ اسے کیا چاہیے؟",
          },
          choices: [
            { en: "More adjectives", es: "Más adjetivos", ur: "مزید صفات" },
            { en: "A main clause to complete it", es: "Una cláusula principal para completarla", ur: "مکمل کرنے کے لیے مرکزی شق" },
            { en: "A question mark", es: "Un signo de pregunta", ur: "سوالیہ نشان" },
            { en: "A longer subject", es: "Un sujeto más largo", ur: "لمبا فاعل" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "At Grade 5, fluent reading includes knowing how to phrase complex sentences with multiple clauses.",
            es: "En quinto grado, la lectura fluida incluye saber cómo frasear oraciones complejas con múltiples cláusulas.",
            ur: "پانچویں جماعت میں روانی سے پڑھنے میں کئی شقوں والے پیچیدہ جملوں کو درست طریقے سے بولنا شامل ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: "5-vo-1",
      pillar: "vocabulary",
      pillarLabel: {
        en: "Vocabulary",
        es: "Vocabulario",
        ur: "الفاظ کا ذخیرہ",
      },
      title: {
        en: "Connotation & Denotation",
        es: "Connotación y Denotación",
        ur: "ضمنی اور لفظی معنی",
      },
      emoji: "🎨",
      teks: "TEKS 5.7B",
      cambridge: "Cambridge Reading Stage 5",
      vocabulary: [
        {
          id: "denotation",
          word: "denotation",
          emoji: "📖",
          translation: { es: "denotación", ur: "لفظی معنی" },
          definition: {
            en: "The literal, dictionary definition of a word — exactly what it means",
            es: "La definición literal del diccionario de una palabra — exactamente lo que significa",
            ur: "لفظ کا حرفی، لغتی مطلب — بالکل وہی جو اس کا مطلب ہے",
          },
          exampleSentence: {
            en: "The denotation of home is a place where people live.",
            es: "La denotación de home es un lugar donde vive la gente.",
            ur: "home کا لفظی معنی وہ جگہ ہے جہاں لوگ رہتے ہیں۔",
          },
        },
        {
          id: "connotation",
          word: "connotation",
          emoji: "💭",
          translation: { es: "connotación", ur: "ضمنی معنی" },
          definition: {
            en: "The emotion or feeling a word carries beyond its literal definition",
            es: "La emoción o sentimiento que una palabra lleva más allá de su definición literal",
            ur: "وہ جذبہ یا احساس جو لفظ اپنے لفظی مطلب سے آگے رکھتا ہو",
          },
          exampleSentence: {
            en: "Home has a warm connotation of belonging and love, while house feels more neutral.",
            es: "Home tiene una connotación cálida de pertenencia y amor, mientras que house se siente más neutral.",
            ur: "Home میں تعلق اور محبت کے گرم ضمنی معنی ہیں، جبکہ house زیادہ غیر جذباتی لگتا ہے۔",
          },
        },
        {
          id: "positive-connotation",
          word: "positive connotation",
          emoji: "😊",
          translation: { es: "connotación positiva", ur: "مثبت ضمنی معنی" },
          definition: {
            en: "When a word carries a good, pleasant, or admiring feeling",
            es: "Cuando una palabra lleva un sentimiento bueno, agradable o de admiración",
            ur: "جب لفظ اچھے، خوشگوار یا تعریفی جذبات رکھتا ہو",
          },
          exampleSentence: {
            en: "Activist has a positive connotation — it suggests someone who bravely works for change.",
            es: "Activist tiene una connotación positiva — sugiere a alguien que trabaja valientemente por el cambio.",
            ur: "Activist کے مثبت ضمنی معنی ہیں — یہ کسی ایسے شخص کا خیال دیتا ہے جو بہادری سے تبدیلی کے لیے کام کرے۔",
          },
        },
        {
          id: "negative-connotation",
          word: "negative connotation",
          emoji: "😟",
          translation: { es: "connotación negativa", ur: "منفی ضمنی معنی" },
          definition: {
            en: "When a word carries a bad, unpleasant, or critical feeling",
            es: "Cuando una palabra lleva un sentimiento malo, desagradable o crítico",
            ur: "جب لفظ برے، ناخوشگوار یا تنقیدی جذبات رکھتا ہو",
          },
          exampleSentence: {
            en: "Troublemaker has a negative connotation, even if it describes the same person as activist.",
            es: "Troublemaker tiene una connotación negativa, aunque describa a la misma persona que activist.",
            ur: "Troublemaker کے منفی ضمنی معنی ہیں، چاہے یہ activist جیسے ہی شخص کو بیان کرے۔",
          },
        },
      ],
      lesson: {
        en: `Words that mean the same thing can feel very different. Understanding connotation — the feeling behind a word — is one of the most important reading skills you can develop at Grade 5. It helps you understand bias, point of view, and the power of word choice.\n\n**Denotation vs. Connotation:**\n\n| Word | Denotation (same) | Connotation (different) |\n|---|---|---|\n| home | place to live | warm, belonging, love |\n| house | place to live | neutral, just a structure |\n| slim | thin body | positive — stylish |\n| skinny | thin body | negative — unhealthy |\n| activist | person working for change | positive — brave |\n| troublemaker | person disrupting things | negative — problematic |\n\n**Why this matters for social justice reading:**\nNews articles sometimes use words with negative connotations to describe people who are actually doing brave work. A student who organizes a school walkout for climate action might be called an activist (positive) or a disrupter (negative) — depending on the author's point of view.\n\nWhen you read: always ask — what words did the author CHOOSE? And what do those words make me feel? That is connotation at work.\n\n**Word pairs — same denotation, different connotation:**\n• frugal (positive) vs. cheap (negative)\n• determined (positive) vs. stubborn (negative)\n• unhoused (neutral/compassionate) vs. homeless (can feel dismissive)\n• confident (positive) vs. arrogant (negative)`,
        es: `Las palabras que significan lo mismo pueden sentirse muy diferentes. Entender la connotación — el sentimiento detrás de una palabra — es una de las habilidades de lectura más importantes.\n\n**Denotación vs. Connotación:**\n• home vs. house — mismo significado, diferente sensación\n• slim vs. skinny — misma denotación, connotaciones diferentes\n• activist vs. troublemaker — pueden describir a la misma persona\n\n**Por qué importa para la lectura de justicia social:**\nLos artículos de noticias a veces usan palabras con connotaciones negativas para describir personas que están haciendo un trabajo valiente.\n\n**Pares de palabras — misma denotación, diferente connotación:**\n• frugal (positivo) vs. cheap (negativo)\n• determined (positivo) vs. stubborn (negativo)\n• unhoused (neutral/compasivo) vs. homeless\n• confident (positivo) vs. arrogant (negativo)`,
        ur: `ایک جیسے مطلب والے الفاظ بہت مختلف محسوس ہو سکتے ہیں۔ ضمنی معنی سمجھنا — لفظ کے پیچھے جذبہ — پانچویں جماعت میں سب سے اہم مہارتوں میں سے ایک ہے۔\n\n**لفظی بمقابلہ ضمنی معنی:**\n• home بمقابلہ house — ایک ہی مطلب، مختلف احساس\n• slim بمقابلہ skinny — ایک ہی تعریف، مختلف جذبات\n• activist بمقابلہ troublemaker — ایک ہی شخص، مختلف ضمنی معنی\n\n**سماجی انصاف کی پڑھائی کے لیے یہ کیوں اہم ہے:**\nخبروں کے مضامین کبھی کبھی ایسے لوگوں کے لیے منفی ضمنی معنی والے الفاظ استعمال کرتے ہیں جو دراصل بہادرانہ کام کر رہے ہوتے ہیں۔\n\n**لفظی جوڑے — ایک ہی تعریف، مختلف ضمنی معنی:**\n• frugal (مثبت) بمقابلہ cheap (منفی)\n• determined (مثبت) بمقابلہ stubborn (منفی)\n• confident (مثبت) بمقابلہ arrogant (منفی)`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "The words slim and skinny have the same denotation but different connotations. Which word has a more NEGATIVE connotation?",
            es: "Las palabras slim y skinny tienen la misma denotación pero diferentes connotaciones. ¿Cuál palabra tiene una connotación más NEGATIVA?",
            ur: "الفاظ slim اور skinny کے ایک جیسے لفظی معنی ہیں لیکن مختلف ضمنی معنی۔ کون سا لفظ زیادہ منفی ضمنی معنی رکھتا ہے؟",
          },
          choices: [
            { en: "slim", es: "slim", ur: "slim" },
            { en: "skinny", es: "skinny", ur: "skinny" },
            { en: "Both are equally negative", es: "Ambas son igualmente negativas", ur: "دونوں یکساں منفی ہیں" },
            { en: "Neither has a connotation", es: "Ninguna tiene connotación", ur: "کسی میں ضمنی معنی نہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "What is the DENOTATION of the word home?",
            es: "¿Cuál es la DENOTACIÓN de la palabra home?",
            ur: "لفظ home کا لفظی معنی کیا ہے؟",
          },
          choices: [
            { en: "A feeling of warmth and belonging", es: "Un sentimiento de calidez y pertenencia", ur: "گرمجوشی اور تعلق کا احساس" },
            { en: "A place where people live", es: "Un lugar donde vive la gente", ur: "وہ جگہ جہاں لوگ رہتے ہیں" },
            { en: "Love and family", es: "Amor y familia", ur: "محبت اور خاندان" },
            { en: "Safety and comfort", es: "Seguridad y comodidad", ur: "حفاظت اور آرام" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "The words activist and troublemaker can describe the same person but carry very different connotations.",
            es: "Las palabras activist y troublemaker pueden describir a la misma persona pero tienen connotaciones muy diferentes.",
            ur: "الفاظ activist اور troublemaker ایک ہی شخص کو بیان کر سکتے ہیں لیکن بہت مختلف ضمنی معنی رکھتے ہیں۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Which pair of words has the SAME denotation but DIFFERENT connotations?",
            es: "¿Qué par de palabras tiene la MISMA denotación pero DIFERENTES connotaciones?",
            ur: "کس لفظی جوڑے کے ایک جیسے لفظی معنی لیکن مختلف ضمنی معنی ہیں؟",
          },
          choices: [
            { en: "happy and sad", es: "happy y sad", ur: "happy اور sad" },
            { en: "determined and stubborn", es: "determined y stubborn", ur: "determined اور stubborn" },
            { en: "run and jump", es: "run y jump", ur: "run اور jump" },
            { en: "large and enormous", es: "large y enormous", ur: "large اور enormous" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Understanding connotation helps you recognize bias and point of view in what you read.",
            es: "Entender la connotación te ayuda a reconocer el sesgo y el punto de vista en lo que lees.",
            ur: "ضمنی معنی سمجھنا آپ کو پڑھنے میں تعصب اور نقطہ نظر پہچاننے میں مدد کرتا ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: "5-co-1",
      pillar: "comprehension",
      pillarLabel: {
        en: "Comprehension",
        es: "Comprensión",
        ur: "فہم",
      },
      title: {
        en: "Point of View & Theme",
        es: "Punto de Vista y Tema",
        ur: "نقطہ نظر اور موضوع",
      },
      emoji: "🌟",
      teks: "TEKS 5.9D",
      cambridge: "Cambridge Reading Stage 5",
      vocabulary: [
        {
          id: "point-of-view",
          word: "point of view",
          emoji: "👁️",
          translation: { es: "punto de vista", ur: "نقطہ نظر" },
          definition: {
            en: "The perspective from which a story is told — who is narrating and what they know",
            es: "La perspectiva desde la que se cuenta una historia — quién la narra y qué sabe",
            ur: "وہ زاویہ جس سے کہانی سنائی جاتی ہے — کون بیان کرتا ہے اور وہ کیا جانتا ہے",
          },
          exampleSentence: {
            en: "The story is told from the first-person point of view — the narrator uses I and me.",
            es: "La historia se cuenta desde el punto de vista en primera persona — el narrador usa I y me.",
            ur: "کہانی پہلی شخصی نقطہ نظر سے سنائی گئی ہے — بیان کنندہ I اور me استعمال کرتا ہے۔",
          },
        },
        {
          id: "first-person",
          word: "first person",
          emoji: "👤",
          translation: { es: "primera persona", ur: "پہلا شخص" },
          definition: {
            en: "Narrated by a character using I, me, my, we — you experience events through their eyes",
            es: "Narrado por un personaje usando I, me, my, we — experimentas los eventos a través de sus ojos",
            ur: "I، me، my، we استعمال کرنے والے کردار کا بیان — آپ ان کی آنکھوں سے واقعات دیکھتے ہیں",
          },
          exampleSentence: {
            en: "I walked into the empty lot and imagined what it could become — that is first person.",
            es: "I walked into the empty lot and imagined what it could become — eso es primera persona.",
            ur: "I walked into the empty lot and imagined what it could become — یہ پہلا شخص ہے۔",
          },
        },
        {
          id: "third-person",
          word: "third person",
          emoji: "👥",
          translation: { es: "tercera persona", ur: "تیسرا شخص" },
          definition: {
            en: "Narrated using he, she, they — the narrator is outside the story",
            es: "Narrado usando he, she, they — el narrador está fuera de la historia",
            ur: "he، she، they استعمال کرتا ہے — بیان کنندہ کہانی سے باہر ہوتا ہے",
          },
          exampleSentence: {
            en: "She walked into the empty lot and imagined what it could become — that is third person.",
            es: "She walked into the empty lot and imagined what it could become — eso es tercera persona.",
            ur: "She walked into the empty lot and imagined what it could become — یہ تیسرا شخص ہے۔",
          },
        },
        {
          id: "theme",
          word: "theme",
          emoji: "💡",
          translation: { es: "tema", ur: "مرکزی پیغام" },
          definition: {
            en: "The deeper message or lesson about life that runs through a text — bigger than just the topic",
            es: "El mensaje más profundo o la lección sobre la vida que atraviesa un texto — más grande que solo el tema",
            ur: "زندگی کا وہ گہرا پیغام یا سبق جو پورے متن میں دوڑتا ہو — موضوع سے بڑا",
          },
          exampleSentence: {
            en: "The topic was a community garden. The theme was that one person's courage can inspire a whole community.",
            es: "El tema era un jardín comunitario. El tema más profundo era que el coraje de una persona puede inspirar a toda una comunidad.",
            ur: "موضوع کمیونٹی باغ تھا۔ مرکزی پیغام یہ تھا کہ ایک شخص کی ہمت پوری برادری کو متاثر کر سکتی ہے۔",
          },
        },
      ],
      lesson: {
        en: `At Grade 5, you analyze both WHO is telling the story and WHAT deeper message the story carries. These are two of the most powerful reading skills you will ever develop.\n\n**Point of View:**\n• **First person** — narrator uses I, me, we. You hear their thoughts directly but only their side.\n• **Third person limited** — narrator uses he/she/they but only knows ONE character's thoughts.\n• **Third person omniscient** — narrator knows ALL characters' thoughts and feelings.\n\nWhy it matters: A story about a neighborhood park being removed could be told from the perspective of a child who loved to play there (loss, sadness), a city planner (efficiency, budget), or a developer (profit, opportunity). The SAME event — completely different stories.\n\n**Theme vs. Topic:**\n• Topic = what the story is about (one or two words): a young activist, the environment\n• Theme = the deeper message (a full sentence): "Even small acts of courage can change communities."\n\nTheme is NEVER just the topic. It is always a statement about life.\n\nCommon themes in social justice literature:\n• "One voice can spark a movement."\n• "Injustice affects everyone, not just those directly harmed."\n• "Community is built through shared action, not just shared space."\n• "Hope is most powerful when things are hardest."\n\nRead this passage and identify the point of view AND the theme:\n\n*"I did not think one fifth grader could change anything. But then I saw the empty lot become a garden — because of Xiomara. She showed me that if you care enough to try, the world listens."*\n\nPoint of view: First person — the narrator uses I.\nTheme: One person's courage can inspire others to believe in change.`,
        es: `En quinto grado, analizas QUIÉN cuenta la historia y QUÉ mensaje más profundo lleva.\n\n**Punto de vista:**\n• **Primera persona** — el narrador usa I, me, we.\n• **Tercera persona limitada** — usa he/she/they pero solo conoce los pensamientos de UN personaje.\n• **Tercera persona omnisciente** — conoce los pensamientos de TODOS los personajes.\n\n**Tema vs. Tópico:**\n• Tópico = de qué trata la historia: un joven activista, el medio ambiente\n• Tema = el mensaje más profundo (una oración completa): "Incluso los pequeños actos de valentía pueden cambiar las comunidades."\n\nEl tema NUNCA es solo el tópico. Siempre es una afirmación sobre la vida.\n\nLee este párrafo e identifica el punto de vista Y el tema:\n\n*"I did not think one fifth grader could change anything. But then I saw the empty lot become a garden — because of Xiomara. She showed me that if you care enough to try, the world listens."*`,
        ur: `پانچویں جماعت میں آپ یہ تجزیہ کرتے ہیں کہ کہانی کون سنا رہا ہے اور اس کا گہرا پیغام کیا ہے۔\n\n**نقطہ نظر:**\n• **پہلا شخص** — بیان کنندہ I، me، we استعمال کرتا ہے۔\n• **تیسرا شخص محدود** — he/she/they استعمال کرتا ہے لیکن صرف ایک کردار کے خیالات جانتا ہے۔\n• **تیسرا شخص سب جاننے والا** — تمام کرداروں کے خیالات اور جذبات جانتا ہے۔\n\n**مرکزی پیغام بمقابلہ موضوع:**\n• موضوع = کہانی کس کے بارے میں ہے: ایک نوجوان سرگرم کارکن، ماحولیات\n• مرکزی پیغام = گہرا پیغام (پورا جملہ): "ہمت کے چھوٹے اعمال بھی برادریاں بدل سکتے ہیں۔"\n\nیہ اقتباس پڑھ کر نقطہ نظر اور مرکزی پیغام بیان کرو:\n\n*"I did not think one fifth grader could change anything. But then I saw the empty lot become a garden — because of Xiomara. She showed me that if you care enough to try, the world listens."*`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "I did not think one fifth grader could change anything. What point of view is this?",
            es: "I did not think one fifth grader could change anything. ¿Cuál es el punto de vista?",
            ur: "I did not think one fifth grader could change anything. یہ کون سا نقطہ نظر ہے؟",
          },
          choices: [
            { en: "Third person omniscient", es: "Tercera persona omnisciente", ur: "تیسرا شخص سب جاننے والا" },
            { en: "Third person limited", es: "Tercera persona limitada", ur: "تیسرا شخص محدود" },
            { en: "First person", es: "Primera persona", ur: "پہلا شخص" },
            { en: "Second person", es: "Segunda persona", ur: "دوسرا شخص" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "The topic of a story is a community garden. Which sentence best states a THEME?",
            es: "El tópico de una historia es un jardín comunitario. ¿Cuál oración expresa mejor un TEMA?",
            ur: "کہانی کا موضوع کمیونٹی باغ ہے۔ کون سا جملہ بہترین طریقے سے مرکزی پیغام بیان کرتا ہے؟",
          },
          choices: [
            { en: "Community gardens", es: "Jardines comunitarios", ur: "کمیونٹی باغات" },
            { en: "Gardens need water and sunlight.", es: "Los jardines necesitan agua y luz solar.", ur: "باغوں کو پانی اور سورج کی روشنی چاہیے۔" },
            { en: "One person's courage can inspire a whole community to grow.", es: "El coraje de una persona puede inspirar a toda una comunidad a crecer.", ur: "ایک شخص کی ہمت پوری برادری کو ترقی کرنے کی تحریک دے سکتی ہے۔" },
            { en: "Xiomara started a garden.", es: "Xiomara empezó un jardín.", ur: "Xiomara نے باغ شروع کیا۔" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "The theme of a text is always a full statement about life, not just the topic.",
            es: "El tema de un texto siempre es una afirmación completa sobre la vida, no solo el tópico.",
            ur: "متن کا مرکزی پیغام ہمیشہ زندگی کے بارے میں پورا بیان ہوتا ہے، نہ کہ صرف موضوع۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "In third person omniscient point of view, what does the narrator know?",
            es: "En el punto de vista de tercera persona omnisciente, ¿qué sabe el narrador?",
            ur: "تیسرے شخص سب جاننے والے نقطہ نظر میں بیان کنندہ کیا جانتا ہے؟",
          },
          choices: [
            { en: "Only the main character's thoughts", es: "Solo los pensamientos del personaje principal", ur: "صرف مرکزی کردار کے خیالات" },
            { en: "The thoughts and feelings of ALL characters", es: "Los pensamientos y sentimientos de TODOS los personajes", ur: "تمام کرداروں کے خیالات اور جذبات" },
            { en: "Nothing — the narrator is a character in the story", es: "Nada — el narrador es un personaje en la historia", ur: "کچھ نہیں — بیان کنندہ کہانی میں ایک کردار ہے" },
            { en: "Only the setting and events, not any thoughts", es: "Solo el escenario y los eventos, no los pensamientos", ur: "صرف منظر اور واقعات، کوئی خیالات نہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "The same event can produce very different stories depending on whose point of view it is told from.",
            es: "El mismo evento puede producir historias muy diferentes según el punto de vista desde el que se cuenta.",
            ur: "ایک ہی واقعہ مختلف نقطہ نظر سے بیان کرنے پر بہت مختلف کہانیاں پیدا کر سکتا ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
};

export default grade5;
