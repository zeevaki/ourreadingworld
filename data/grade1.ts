import { GradeReading } from "./types";

const grade1: GradeReading = {
  grade: 1,
  label: "Grade 1",
  emoji: "🌱",
  color: "#22C55E",
  units: [
    {
      id: "1-pa-1",
      pillar: "phonemic-awareness",
      pillarLabel: {
        en: "Phonemic Awareness",
        es: "Conciencia Fonémica",
        ur: "آوازوں کی سمجھ",
      },
      title: {
        en: "Rhyming Words",
        es: "Palabras que Riman",
        ur: "ہم قافیہ الفاظ",
      },
      emoji: "🎵",
      teks: "TEKS 1.2A",
      cambridge: "Cambridge Reading Stage 1",
      vocabulary: [
        {
          id: "rhyme",
          word: "rhyme",
          emoji: "🎶",
          translation: { es: "rima", ur: "قافیہ" },
          definition: {
            en: "Words that end with the same sound",
            es: "Palabras que terminan con el mismo sonido",
            ur: "وہ الفاظ جن کے آخر میں ایک جیسی آواز ہو",
          },
          exampleSentence: {
            en: "Cat and hat rhyme because they both end in -at.",
            es: "Cat y hat riman porque los dos terminan en -at.",
            ur: "Cat اور hat ہم قافیہ ہیں کیونکہ دونوں -at پر ختم ہوتے ہیں۔",
          },
        },
        {
          id: "sound",
          word: "sound",
          emoji: "🔊",
          translation: { es: "sonido", ur: "آواز" },
          definition: {
            en: "A noise you hear when a letter is spoken",
            es: "Un ruido que escuchas cuando se habla una letra",
            ur: "وہ آواز جو کسی حرف کو بولنے پر سنائی دیتی ہے",
          },
          exampleSentence: {
            en: "The letter B makes a /b/ sound like in book.",
            es: "La letra B hace el sonido /b/ como en book.",
            ur: "حرف B میں /b/ کی آواز ہے جیسے book میں۔",
          },
        },
        {
          id: "syllable",
          word: "syllable",
          emoji: "✂️",
          translation: { es: "sílaba", ur: "مقطع" },
          definition: {
            en: "A word chunk with one vowel sound",
            es: "Un pedazo de palabra con un sonido de vocal",
            ur: "لفظ کا ایک حصہ جس میں ایک واول کی آواز ہو",
          },
          exampleSentence: {
            en: "The word happy has two syllables: hap-py.",
            es: "La palabra happy tiene dos sílabas: hap-py.",
            ur: "لفظ happy میں دو مقطعے ہیں: hap-py۔",
          },
        },
      ],
      lesson: {
        en: `Words that rhyme share the same ending sound. When we share food or supplies with others, we say kind words — and kind words often rhyme in songs and poems!\n\nLet's say these rhyming pairs together:\n• **cat / hat** — We put on a hat and fed the cat!\n• **share / care** — We share because we care.\n• **give / live** — When we give, we help others live better.\n\nListen and clap for each syllable:\n• hap-py (2 claps)\n• com-mun-i-ty (4 claps)\n• to-geth-er (3 claps)\n\nRhyming words make learning fun. When you help sort food at school for the food drive, try making up a rhyme about it!`,
        es: `Las palabras que riman comparten el mismo sonido al final. Cuando compartimos comida o útiles con otros, decimos palabras amables — ¡y las palabras amables a menudo riman en canciones y poemas!\n\nDigamos estos pares que riman juntos:\n• **cat / hat** — ¡Nos pusimos el sombrero y alimentamos al gato!\n• **share / care** — Compartimos porque nos importa.\n• **give / live** — Cuando damos, ayudamos a otros a vivir mejor.\n\nEscucha y aplaude por cada sílaba:\n• hap-py (2 aplausos)\n• com-mun-i-ty (4 aplausos)\n• to-geth-er (3 aplausos)\n\n¡Las palabras que riman hacen que aprender sea divertido!`,
        ur: `ہم قافیہ الفاظ کے آخر میں ایک جیسی آواز ہوتی ہے۔ جب ہم دوسروں کے ساتھ کھانا یا سامان بانٹتے ہیں تو ہم مہربان الفاظ کہتے ہیں — اور مہربان الفاظ اکثر گانوں اور نظموں میں ہم قافیہ ہوتے ہیں!\n\nآو ان ہم قافیہ جوڑوں کو ساتھ کہیں:\n• **cat / hat** — ہم نے ٹوپی پہنی اور بلی کو کھانا دیا!\n• **share / care** — ہم بانٹتے ہیں کیونکہ ہمیں پرواہ ہے۔\n• **give / live** — جب ہم دیتے ہیں تو دوسروں کو بہتر زندگی ملتی ہے۔\n\nسنو اور ہر مقطعے پر تالی بجاؤ:\n• hap-py (2 تالیاں)\n• com-mun-i-ty (4 تالیاں)\n• to-geth-er (3 تالیاں)`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Which word rhymes with share?",
            es: "¿Cuál palabra rima con share?",
            ur: "share کے ساتھ کون سا لفظ ہم قافیہ ہے؟",
          },
          choices: [
            { en: "book", es: "book", ur: "book" },
            { en: "care", es: "care", ur: "care" },
            { en: "jump", es: "jump", ur: "jump" },
            { en: "plant", es: "plant", ur: "plant" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "The words give and live rhyme.",
            es: "Las palabras give y live riman.",
            ur: "الفاظ give اور live ہم قافیہ ہیں۔",
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
            en: "How many syllables does the word community have?",
            es: "¿Cuántas sílabas tiene la palabra community?",
            ur: "لفظ community میں کتنے مقطعے ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "۲" },
            { en: "3", es: "3", ur: "۳" },
            { en: "4", es: "4", ur: "۴" },
            { en: "5", es: "5", ur: "۵" },
          ],
          correctIndex: 2,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Which pair of words rhymes?",
            es: "¿Qué par de palabras rima?",
            ur: "الفاظ کا کون سا جوڑا ہم قافیہ ہے؟",
          },
          choices: [
            { en: "dog / log", es: "dog / log", ur: "dog / log" },
            { en: "cat / cup", es: "cat / cup", ur: "cat / cup" },
            { en: "run / sun (both!)", es: "run / sun (¡los dos!)", ur: "run / sun (دونوں!)" },
            { en: "1 and 3", es: "1 y 3", ur: "۱ اور ۳" },
          ],
          correctIndex: 3,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "A syllable always has exactly one vowel sound.",
            es: "Una sílaba siempre tiene exactamente un sonido de vocal.",
            ur: "ایک مقطعے میں ہمیشہ بالکل ایک واول کی آواز ہوتی ہے۔",
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
      id: "1-ph-1",
      pillar: "phonics",
      pillarLabel: {
        en: "Phonics",
        es: "Fonética",
        ur: "حروف اور آوازیں",
      },
      title: {
        en: "Short Vowel Sounds",
        es: "Sonidos de Vocales Cortas",
        ur: "چھوٹی واول آوازیں",
      },
      emoji: "🔤",
      teks: "TEKS 1.2B",
      cambridge: "Cambridge Reading Stage 1",
      vocabulary: [
        {
          id: "vowel",
          word: "vowel",
          emoji: "🅰️",
          translation: { es: "vocal", ur: "واول" },
          definition: {
            en: "The letters a, e, i, o, u — the open sounds in English",
            es: "Las letras a, e, i, o, u — los sonidos abiertos en inglés",
            ur: "حروف a, e, i, o, u — انگریزی کی کھلی آوازیں",
          },
          exampleSentence: {
            en: "Every word needs at least one vowel.",
            es: "Cada palabra necesita al menos una vocal.",
            ur: "ہر لفظ میں کم از کم ایک واول ہوتا ہے۔",
          },
        },
        {
          id: "consonant",
          word: "consonant",
          emoji: "🔡",
          translation: { es: "consonante", ur: "غیر واول حرف" },
          definition: {
            en: "All letters except a, e, i, o, u",
            es: "Todas las letras excepto a, e, i, o, u",
            ur: "a, e, i, o, u کے علاوہ باقی تمام حروف",
          },
          exampleSentence: {
            en: "B, d, and t are consonants.",
            es: "B, d y t son consonantes.",
            ur: "B, d اور t غیر واول حروف ہیں۔",
          },
        },
        {
          id: "blend",
          word: "blend",
          emoji: "🔀",
          translation: { es: "mezcla", ur: "ملاپ" },
          definition: {
            en: "Two consonants together — you hear both sounds",
            es: "Dos consonantes juntas — escuchas los dos sonidos",
            ur: "دو غیر واول حروف ساتھ — دونوں آوازیں سنائی دیتی ہیں",
          },
          exampleSentence: {
            en: "The word plant starts with a blend: pl.",
            es: "La palabra plant empieza con una mezcla: pl.",
            ur: "لفظ plant کا شروع ملاپ سے ہے: pl۔",
          },
        },
      ],
      lesson: {
        en: `Short vowels are the quick sounds inside many small words. Learning them helps you read new words quickly!\n\n• **short a** — /a/ — cat, bag, map\n• **short e** — /e/ — bed, red, ten\n• **short i** — /i/ — sit, fin, tip\n• **short o** — /o/ — hot, top, mop\n• **short u** — /u/ — bug, run, cup\n\nThink about our school's recycling project. We sort cans, bins, and bags. Say each word and listen for the short vowel:\n• **can** — short a\n• **bin** — short i\n• **bag** — short a\n\nWhen we read the recycling labels at school, we use our phonics skills!`,
        es: `Las vocales cortas son los sonidos rápidos dentro de muchas palabras pequeñas. ¡Aprenderlas te ayuda a leer palabras nuevas rápidamente!\n\n• **a corta** — /a/ — cat, bag, map\n• **e corta** — /e/ — bed, red, ten\n• **i corta** — /i/ — sit, fin, tip\n• **o corta** — /o/ — hot, top, mop\n• **u corta** — /u/ — bug, run, cup\n\nPiensa en el proyecto de reciclaje de nuestra escuela. Separamos latas, botes y bolsas. Di cada palabra y escucha la vocal corta:\n• **can** — a corta\n• **bin** — i corta\n• **bag** — a corta`,
        ur: `چھوٹی واول آوازیں بہت سے چھوٹے الفاظ کے اندر تیز آوازیں ہیں۔ انہیں سیکھنے سے آپ نئے الفاظ جلدی پڑھ سکتے ہیں!\n\n• **چھوٹی a** — /a/ — cat, bag, map\n• **چھوٹی e** — /e/ — bed, red, ten\n• **چھوٹی i** — /i/ — sit, fin, tip\n• **چھوٹی o** — /o/ — hot, top, mop\n• **چھوٹی u** — /u/ — bug, run, cup\n\nہمارے اسکول کے ری سائیکلنگ پروجیکٹ کے بارے میں سوچیں۔ ہم ڈبے، بن اور تھیلے چھانٹتے ہیں۔ ہر لفظ کہو اور چھوٹی واول سنو:\n• **can** — چھوٹی a\n• **bin** — چھوٹی i\n• **bag** — چھوٹی a`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What short vowel sound is in the word sit?",
            es: "¿Qué sonido de vocal corta tiene la palabra sit?",
            ur: "لفظ sit میں کون سی چھوٹی واول آواز ہے؟",
          },
          choices: [
            { en: "short a", es: "a corta", ur: "چھوٹی a" },
            { en: "short e", es: "e corta", ur: "چھوٹی e" },
            { en: "short i", es: "i corta", ur: "چھوٹی i" },
            { en: "short u", es: "u corta", ur: "چھوٹی u" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "The word hot has a short o vowel sound.",
            es: "La palabra hot tiene el sonido de vocal o corta.",
            ur: "لفظ hot میں چھوٹی o واول کی آواز ہے۔",
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
            en: "Which word has a consonant blend at the start?",
            es: "¿Qué palabra tiene una mezcla de consonantes al principio?",
            ur: "کس لفظ کے شروع میں غیر واول حروف کا ملاپ ہے؟",
          },
          choices: [
            { en: "cat", es: "cat", ur: "cat" },
            { en: "plant", es: "plant", ur: "plant" },
            { en: "bed", es: "bed", ur: "bed" },
            { en: "run", es: "run", ur: "run" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Which word has a short u sound?",
            es: "¿Cuál palabra tiene el sonido u corta?",
            ur: "کس لفظ میں چھوٹی u کی آواز ہے؟",
          },
          choices: [
            { en: "map", es: "map", ur: "map" },
            { en: "top", es: "top", ur: "top" },
            { en: "cup", es: "cup", ur: "cup" },
            { en: "bed", es: "bed", ur: "bed" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Every word must have at least one vowel.",
            es: "Cada palabra debe tener al menos una vocal.",
            ur: "ہر لفظ میں کم از کم ایک واول ہونا ضروری ہے۔",
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
      id: "1-fl-1",
      pillar: "fluency",
      pillarLabel: {
        en: "Fluency",
        es: "Fluidez",
        ur: "روانی",
      },
      title: {
        en: "Reading with Expression",
        es: "Leer con Expresión",
        ur: "جذبات کے ساتھ پڑھنا",
      },
      emoji: "📖",
      teks: "TEKS 1.4A",
      cambridge: "Cambridge Reading Stage 2",
      vocabulary: [
        {
          id: "fluency",
          word: "fluency",
          emoji: "🌊",
          translation: { es: "fluidez", ur: "روانی" },
          definition: {
            en: "Reading smoothly, at the right speed, with feeling",
            es: "Leer suavemente, a la velocidad correcta, con sentimiento",
            ur: "آسانی سے، صحیح رفتار سے، جذبات کے ساتھ پڑھنا",
          },
          exampleSentence: {
            en: "She read the story with fluency — it sounded like she was talking.",
            es: "Ella leyó el cuento con fluidez — sonaba como si estuviera hablando.",
            ur: "اس نے کہانی روانی سے پڑھی — ایسے لگا جیسے وہ بات کر رہی ہو۔",
          },
        },
        {
          id: "expression",
          word: "expression",
          emoji: "😊",
          translation: { es: "expresión", ur: "اظہار" },
          definition: {
            en: "Showing feeling in your voice when you read",
            es: "Mostrar sentimiento con tu voz cuando lees",
            ur: "پڑھتے وقت اپنی آواز میں جذبات ظاہر کرنا",
          },
          exampleSentence: {
            en: "He read with expression — his voice was excited for the happy parts.",
            es: "Él leyó con expresión — su voz estaba emocionada en las partes felices.",
            ur: "اس نے اظہار کے ساتھ پڑھا — خوشی کے حصوں پر اس کی آواز جوشیلی تھی۔",
          },
        },
        {
          id: "punctuation",
          word: "punctuation",
          emoji: "❗",
          translation: { es: "puntuación", ur: "اوقاف" },
          definition: {
            en: "Marks like . ! ? that tell you how to read a sentence",
            es: "Marcas como . ! ? que te dicen cómo leer una oración",
            ur: "نشانات جیسے ۔ ! ؟ جو بتاتے ہیں کہ جملہ کیسے پڑھنا ہے",
          },
          exampleSentence: {
            en: "A question mark tells you to make your voice go up at the end.",
            es: "Un signo de pregunta te dice que levantes la voz al final.",
            ur: "سوالیہ نشان بتاتا ہے کہ آخر میں آواز اوپر جائے۔",
          },
        },
      ],
      lesson: {
        en: `Fluent readers sound natural — like they are telling a story to a friend. When you read aloud smoothly, it helps your brain understand the meaning.\n\nThree keys to fluency:\n1. **Accuracy** — say each word correctly\n2. **Rate** — not too fast, not too slow\n3. **Expression** — let punctuation guide your voice\n   - Period (.) → stop, lower your voice\n   - Exclamation (!) → sound excited\n   - Question (?) → raise your voice at the end\n\nPractice this sentence: "We collected cans for the food drive — and it felt great!"\n\nRead it twice. The second time, make your voice show how happy and proud you feel about helping your community.`,
        es: `Los lectores fluidos suenan naturales — como si estuvieran contando un cuento a un amigo. Cuando lees en voz alta de manera fluida, ayuda a tu cerebro a entender el significado.\n\nTres claves para la fluidez:\n1. **Exactitud** — di cada palabra correctamente\n2. **Ritmo** — ni muy rápido, ni muy lento\n3. **Expresión** — deja que la puntuación guíe tu voz\n   - Punto (.) → para, baja la voz\n   - Exclamación (!) → suena emocionado\n   - Pregunta (?) → sube la voz al final\n\nPractica esta oración: "We collected cans for the food drive — and it felt great!"`,
        ur: `روانی سے پڑھنے والے قدرتی لگتے ہیں — جیسے وہ کسی دوست کو کہانی سنا رہے ہوں۔ جب آپ آسانی سے اونچی آواز میں پڑھتے ہیں تو آپ کا دماغ مطلب بہتر سمجھتا ہے۔\n\nروانی کی تین چابیاں:\n1. **درستگی** — ہر لفظ صحیح بولو\n2. **رفتار** — نہ بہت تیز، نہ بہت آہستہ\n3. **اظہار** — اوقاف کو آواز کی رہنمائی کرنے دو\n   - نقطہ (.) → رکو، آواز نیچے کرو\n   - تعجب (!) → جوش سے بولو\n   - سوال (?) → آخر میں آواز اوپر کرو\n\nیہ جملہ پڑھو: "We collected cans for the food drive — and it felt great!"`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "When you see an exclamation mark (!), you should read with:",
            es: "Cuando ves un signo de exclamación (!), debes leer con:",
            ur: "جب آپ تعجب کا نشان (!) دیکھیں تو آپ کو پڑھنا چاہیے:",
          },
          choices: [
            { en: "a slow, quiet voice", es: "una voz lenta y tranquila", ur: "آہستہ اور خاموش آواز" },
            { en: "an excited voice", es: "una voz emocionada", ur: "جوشیلی آواز" },
            { en: "a questioning voice", es: "una voz de pregunta", ur: "سوالیہ آواز" },
            { en: "no voice change", es: "sin cambio de voz", ur: "آواز میں کوئی تبدیلی نہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "Reading fluently means reading as fast as you can.",
            es: "Leer con fluidez significa leer tan rápido como puedas.",
            ur: "روانی سے پڑھنے کا مطلب ہے جتنا تیز ہو سکے پڑھنا۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "multiple-choice",
          prompt: {
            en: "A period (.) tells you to:",
            es: "Un punto (.) te dice que:",
            ur: "نقطہ (.) آپ کو بتاتا ہے کہ:",
          },
          choices: [
            { en: "raise your voice", es: "subas la voz", ur: "آواز اوپر کرو" },
            { en: "stop and lower your voice", es: "pares y bajes la voz", ur: "رکو اور آواز نیچے کرو" },
            { en: "ask a question", es: "hagas una pregunta", ur: "سوال پوچھو" },
            { en: "read faster", es: "leas más rápido", ur: "تیز پڑھو" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "What are the three keys to reading fluency?",
            es: "¿Cuáles son las tres claves para la fluidez en la lectura?",
            ur: "پڑھنے کی روانی کی تین چابیاں کون سی ہیں؟",
          },
          choices: [
            { en: "Speed, volume, and length", es: "Velocidad, volumen y longitud", ur: "رفتار، آواز کی بلندی اور لمبائی" },
            { en: "Accuracy, rate, and expression", es: "Exactitud, ritmo y expresión", ur: "درستگی، رفتار اور اظہار" },
            { en: "Rhyming, blending, and spelling", es: "Rima, mezcla y ortografía", ur: "قافیہ، ملاپ اور ہجے" },
            { en: "Vowels, consonants, and syllables", es: "Vocales, consonantes y sílabas", ur: "واول، غیر واول اور مقطعے" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Punctuation marks help you know how to use your voice when reading.",
            es: "Los signos de puntuación te ayudan a saber cómo usar tu voz al leer.",
            ur: "اوقاف کے نشانات آپ کو بتاتے ہیں کہ پڑھتے وقت آواز کیسے استعمال کرنی ہے۔",
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
      id: "1-vo-1",
      pillar: "vocabulary",
      pillarLabel: {
        en: "Vocabulary",
        es: "Vocabulario",
        ur: "الفاظ کا ذخیرہ",
      },
      title: {
        en: "Community Helper Words",
        es: "Palabras de Ayudantes de la Comunidad",
        ur: "کمیونٹی کے مددگار الفاظ",
      },
      emoji: "🤝",
      teks: "TEKS 1.7A",
      cambridge: "Cambridge Reading Stage 1",
      vocabulary: [
        {
          id: "community",
          word: "community",
          emoji: "🏘️",
          translation: { es: "comunidad", ur: "برادری" },
          definition: {
            en: "A group of people who live or work together in the same place",
            es: "Un grupo de personas que viven o trabajan juntas en el mismo lugar",
            ur: "لوگوں کا ایک گروہ جو ایک ہی جگہ رہتے یا کام کرتے ہیں",
          },
          exampleSentence: {
            en: "Our school is part of our community.",
            es: "Nuestra escuela es parte de nuestra comunidad.",
            ur: "ہمارا اسکول ہماری برادری کا حصہ ہے۔",
          },
        },
        {
          id: "donate",
          word: "donate",
          emoji: "🎁",
          translation: { es: "donar", ur: "عطیہ دینا" },
          definition: {
            en: "To give something to help others",
            es: "Dar algo para ayudar a otros",
            ur: "دوسروں کی مدد کے لیے کچھ دینا",
          },
          exampleSentence: {
            en: "We donate canned food to the food bank every November.",
            es: "Donamos comida enlatada al banco de alimentos cada noviembre.",
            ur: "ہم ہر نومبر میں فوڈ بینک کو ڈبہ بند کھانا عطیہ کرتے ہیں۔",
          },
        },
        {
          id: "volunteer",
          word: "volunteer",
          emoji: "🙋",
          translation: { es: "voluntario", ur: "رضاکار" },
          definition: {
            en: "A person who helps without being paid",
            es: "Una persona que ayuda sin recibir dinero",
            ur: "وہ شخص جو بغیر پیسوں کے مدد کرے",
          },
          exampleSentence: {
            en: "Student volunteers helped sort the donated items.",
            es: "Los estudiantes voluntarios ayudaron a organizar los artículos donados.",
            ur: "طالب علم رضاکاروں نے عطیہ کی گئی اشیاء چھانٹنے میں مدد کی۔",
          },
        },
        {
          id: "fairness",
          word: "fairness",
          emoji: "⚖️",
          translation: { es: "equidad", ur: "انصاف" },
          definition: {
            en: "Treating everyone equally and with respect",
            es: "Tratar a todos de manera igual y con respeto",
            ur: "سب کے ساتھ برابری اور احترام سے پیش آنا",
          },
          exampleSentence: {
            en: "Sharing supplies fairly shows fairness.",
            es: "Compartir los útiles de manera justa muestra equidad.",
            ur: "سامان برابری سے بانٹنا انصاف ظاہر کرتا ہے۔",
          },
        },
      ],
      lesson: {
        en: `Words help us talk about the world around us and the good things we can do in it!\n\nToday's words are about helping our community:\n• **community** — the people around you\n• **donate** — give something to help\n• **volunteer** — help without pay\n• **fairness** — treating everyone equally\n\nWhen your class collects school supplies for students who need them, you are:\n- Donating supplies\n- Volunteering your time\n- Showing fairness to your community\n\nUse these words in a sentence today. Example: "I volunteer to help sort the donated supplies for our community."`,
        es: `¡Las palabras nos ayudan a hablar del mundo que nos rodea y las cosas buenas que podemos hacer!\n\nLas palabras de hoy son sobre ayudar a nuestra comunidad:\n• **community** — las personas a tu alrededor\n• **donate** — dar algo para ayudar\n• **volunteer** — ayudar sin recibir pago\n• **fairness** — tratar a todos por igual\n\nCuando tu clase junta útiles escolares para estudiantes que los necesitan:\n- Están donando útiles\n- Están siendo voluntarios con su tiempo\n- Están mostrando equidad a su comunidad`,
        ur: `الفاظ ہمیں اپنے آس پاس کی دنیا کے بارے میں اور اس میں ہم جو اچھی چیزیں کر سکتے ہیں، ان کے بارے میں بات کرنے میں مدد کرتے ہیں!\n\nآج کے الفاظ اپنی برادری کی مدد کے بارے میں ہیں:\n• **community** — آپ کے آس پاس کے لوگ\n• **donate** — مدد کے لیے کچھ دینا\n• **volunteer** — بغیر پیسوں کے مدد کرنا\n• **fairness** — سب کے ساتھ برابری سے پیش آنا\n\nجب آپ کی کلاس ان طالب علموں کے لیے اسکول کا سامان اکٹھا کرتی ہے جنہیں ضرورت ہے:\n- آپ سامان عطیہ کر رہے ہیں\n- آپ اپنا وقت رضاکارانہ دے رہے ہیں\n- آپ اپنی برادری سے انصاف کا مظاہرہ کر رہے ہیں`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What does it mean to donate?",
            es: "¿Qué significa donar?",
            ur: "عطیہ دینے کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "To sell something", es: "Vender algo", ur: "کچھ بیچنا" },
            { en: "To give something to help others", es: "Dar algo para ayudar a otros", ur: "دوسروں کی مدد کے لیے کچھ دینا" },
            { en: "To throw something away", es: "Tirar algo", ur: "کچھ پھینک دینا" },
            { en: "To borrow something", es: "Pedir prestado algo", ur: "کچھ ادھار لینا" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "A volunteer gets paid for their help.",
            es: "Un voluntario recibe pago por su ayuda.",
            ur: "رضاکار کو اس کی مدد کے لیے پیسے ملتے ہیں۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "multiple-choice",
          prompt: {
            en: "Fairness means:",
            es: "Equidad significa:",
            ur: "انصاف کا مطلب ہے:",
          },
          choices: [
            { en: "giving your friends more", es: "dar más a tus amigos", ur: "اپنے دوستوں کو زیادہ دینا" },
            { en: "treating everyone equally", es: "tratar a todos por igual", ur: "سب کے ساتھ برابری سے پیش آنا" },
            { en: "only helping yourself", es: "solo ayudarte a ti mismo", ur: "صرف اپنی مدد کرنا" },
            { en: "sharing only with family", es: "compartir solo con la familia", ur: "صرف خاندان کے ساتھ بانٹنا" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Which word means a group of people who live or work together?",
            es: "¿Cuál palabra significa un grupo de personas que viven o trabajan juntas?",
            ur: "کون سا لفظ ان لوگوں کے گروہ کے لیے ہے جو ساتھ رہتے یا کام کرتے ہیں؟",
          },
          choices: [
            { en: "donate", es: "donar", ur: "عطیہ دینا" },
            { en: "volunteer", es: "voluntario", ur: "رضاکار" },
            { en: "community", es: "comunidad", ur: "برادری" },
            { en: "fairness", es: "equidad", ur: "انصاف" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "When you sort food donations at school you are being a community volunteer.",
            es: "Cuando clasificas las donaciones de comida en la escuela eres un voluntario comunitario.",
            ur: "جب آپ اسکول میں کھانے کے عطیات چھانٹتے ہیں تو آپ کمیونٹی رضاکار ہوتے ہیں۔",
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
      id: "1-co-1",
      pillar: "comprehension",
      pillarLabel: {
        en: "Comprehension",
        es: "Comprensión",
        ur: "فہم",
      },
      title: {
        en: "Main Idea & Details",
        es: "Idea Principal y Detalles",
        ur: "مرکزی خیال اور تفصیلات",
      },
      emoji: "💡",
      teks: "TEKS 1.9D",
      cambridge: "Cambridge Reading Stage 2",
      vocabulary: [
        {
          id: "main-idea",
          word: "main idea",
          emoji: "💡",
          translation: { es: "idea principal", ur: "مرکزی خیال" },
          definition: {
            en: "The most important point a text is about",
            es: "El punto más importante de lo que trata un texto",
            ur: "متن کا سب سے اہم نقطہ",
          },
          exampleSentence: {
            en: "The main idea of the story was that sharing makes everyone happy.",
            es: "La idea principal del cuento era que compartir hace feliz a todos.",
            ur: "کہانی کا مرکزی خیال یہ تھا کہ بانٹنا سب کو خوش کرتا ہے۔",
          },
        },
        {
          id: "detail",
          word: "detail",
          emoji: "🔍",
          translation: { es: "detalle", ur: "تفصیل" },
          definition: {
            en: "A small piece of information that supports the main idea",
            es: "Una pequeña información que apoya la idea principal",
            ur: "معلومات کا ایک چھوٹا ٹکڑا جو مرکزی خیال کی حمایت کرتا ہے",
          },
          exampleSentence: {
            en: "One detail was that students brought canned food every Monday.",
            es: "Un detalle fue que los estudiantes traían comida enlatada cada lunes.",
            ur: "ایک تفصیل یہ تھی کہ طالب علم ہر پیر کو ڈبہ بند کھانا لاتے تھے۔",
          },
        },
        {
          id: "retell",
          word: "retell",
          emoji: "🔄",
          translation: { es: "volver a contar", ur: "دوبارہ بیان کرنا" },
          definition: {
            en: "To say a story again in your own words",
            es: "Decir un cuento otra vez con tus propias palabras",
            ur: "اپنے الفاظ میں کہانی دوبارہ بیان کرنا",
          },
          exampleSentence: {
            en: "Can you retell the story to a partner?",
            es: "¿Puedes volver a contar el cuento a un compañero?",
            ur: "کیا آپ کسی ساتھی کو کہانی دوبارہ بیان کر سکتے ہیں؟",
          },
        },
      ],
      lesson: {
        en: `When we read, we look for the **main idea** — the big message — and the **details** that support it.\n\nRead this short passage:\n\n*"Our class started a food drive. Every week, students brought canned vegetables, rice, and beans. By the end of the month, we had collected 200 cans. We donated them to families in our neighborhood."*\n\n**Main idea:** Our class helped the community with a food drive.\n\n**Details:**\n- Students brought canned vegetables, rice, and beans each week.\n- We collected 200 cans.\n- We donated them to neighborhood families.\n\nAfter reading, try to **retell** the passage: "The class did a food drive. They collected 200 cans and gave them to families." Great job!`,
        es: `Cuando leemos, buscamos la **idea principal** — el mensaje grande — y los **detalles** que la apoyan.\n\nLee este párrafo corto:\n\n*"Nuestra clase empezó una colecta de alimentos. Cada semana, los estudiantes traían vegetales enlatados, arroz y frijoles. Al final del mes, habíamos recolectado 200 latas. Las donamos a familias de nuestro vecindario."*\n\n**Idea principal:** Nuestra clase ayudó a la comunidad con una colecta de alimentos.\n\n**Detalles:**\n- Los estudiantes traían vegetales enlatados, arroz y frijoles cada semana.\n- Recolectamos 200 latas.\n- Las donamos a familias del vecindario.`,
        ur: `جب ہم پڑھتے ہیں تو ہم **مرکزی خیال** — بڑا پیغام — اور اسے سہارا دینے والی **تفصیلات** تلاش کرتے ہیں۔\n\nیہ مختصر اقتباس پڑھیں:\n\n*"ہماری کلاس نے فوڈ ڈرائیو شروع کی۔ ہر ہفتے طالب علم ڈبہ بند سبزیاں، چاول اور دالیں لاتے۔ مہینے کے آخر تک ہم نے ۲۰۰ ڈبے اکٹھے کیے۔ ہم نے انہیں اپنے محلے کے خاندانوں کو عطیہ کر دیا۔"*\n\n**مرکزی خیال:** ہماری کلاس نے فوڈ ڈرائیو سے کمیونٹی کی مدد کی۔\n\n**تفصیلات:**\n- طالب علم ہر ہفتے ڈبہ بند سبزیاں، چاول اور دالیں لاتے۔\n- ہم نے ۲۰۰ ڈبے اکٹھے کیے۔\n- ہم نے انہیں محلے کے خاندانوں کو عطیہ دیا۔`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What is the main idea of the food drive passage?",
            es: "¿Cuál es la idea principal del párrafo sobre la colecta de alimentos?",
            ur: "فوڈ ڈرائیو کے اقتباس کا مرکزی خیال کیا ہے؟",
          },
          choices: [
            { en: "Students like rice and beans.", es: "A los estudiantes les gustan el arroz y los frijoles.", ur: "طالب علموں کو چاول اور دالیں پسند ہیں۔" },
            { en: "Our class helped the community with a food drive.", es: "Nuestra clase ayudó a la comunidad con una colecta de alimentos.", ur: "ہماری کلاس نے فوڈ ڈرائیو سے کمیونٹی کی مدد کی۔" },
            { en: "We went to the neighborhood.", es: "Fuimos al vecindario.", ur: "ہم محلے گئے۔" },
            { en: "Cans are heavy.", es: "Las latas son pesadas.", ur: "ڈبے بھاری ہوتے ہیں۔" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "Details support the main idea of a text.",
            es: "Los detalles apoyan la idea principal de un texto.",
            ur: "تفصیلات متن کے مرکزی خیال کی حمایت کرتی ہیں۔",
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
            en: "Which is a DETAIL from the food drive passage?",
            es: "¿Cuál es un DETALLE del párrafo de la colecta de alimentos?",
            ur: "فوڈ ڈرائیو کے اقتباس سے ایک تفصیل کون سی ہے؟",
          },
          choices: [
            { en: "The class helped the community.", es: "La clase ayudó a la comunidad.", ur: "کلاس نے کمیونٹی کی مدد کی۔" },
            { en: "Students are kind.", es: "Los estudiantes son amables.", ur: "طالب علم مہربان ہیں۔" },
            { en: "200 cans were collected.", es: "Se recolectaron 200 latas.", ur: "۲۰۰ ڈبے اکٹھے کیے گئے۔" },
            { en: "Food drives are fun.", es: "Las colectas de alimentos son divertidas.", ur: "فوڈ ڈرائیوز مزیدار ہوتی ہیں۔" },
          ],
          correctIndex: 2,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "To retell a story means to:",
            es: "Volver a contar un cuento significa:",
            ur: "کہانی دوبارہ بیان کرنے کا مطلب ہے:",
          },
          choices: [
            { en: "read it again out loud", es: "leerlo otra vez en voz alta", ur: "اسے دوبارہ اونچی آواز میں پڑھنا" },
            { en: "say it again in your own words", es: "decirlo otra vez con tus propias palabras", ur: "اپنے الفاظ میں دوبارہ کہنا" },
            { en: "write a new ending", es: "escribir un final nuevo", ur: "نیا انجام لکھنا" },
            { en: "find all the details", es: "encontrar todos los detalles", ur: "تمام تفصیلات تلاش کرنا" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "A text can have more than one detail supporting the main idea.",
            es: "Un texto puede tener más de un detalle que apoye la idea principal.",
            ur: "ایک متن میں مرکزی خیال کی حمایت میں ایک سے زیادہ تفصیلات ہو سکتی ہیں۔",
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

export default grade1;
