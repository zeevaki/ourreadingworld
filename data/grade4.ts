import { GradeReading } from "./types";

const grade4: GradeReading = {
  grade: 4,
  label: "Grade 4",
  emoji: "🌍",
  color: "#0891B2",
  units: [
    {
      id: "4-pa-1",
      pillar: "phonemic-awareness",
      pillarLabel: {
        en: "Phonemic Awareness",
        es: "Conciencia Fonémica",
        ur: "آوازوں کی سمجھ",
      },
      title: {
        en: "Syllable Manipulation",
        es: "Manipulación de Sílabas",
        ur: "مقطعوں میں تبدیلی",
      },
      emoji: "🔢",
      teks: "TEKS 4.2A",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "syllable",
          word: "syllable",
          emoji: "✂️",
          translation: { es: "sílaba", ur: "مقطعہ" },
          definition: {
            en: "A word chunk that has one vowel sound — the beats of a word",
            es: "Un trozo de palabra que tiene un sonido vocal — los golpes de una palabra",
            ur: "لفظ کا وہ حصہ جس میں ایک واول کی آواز ہو — لفظ کی دھڑکنیں",
          },
          exampleSentence: {
            en: "The word community has four syllables: com-mu-ni-ty.",
            es: "La palabra community tiene cuatro sílabas: com-mu-ni-ty.",
            ur: "لفظ community میں چار مقطعے ہیں: com-mu-ni-ty۔",
          },
        },
        {
          id: "accent",
          word: "accent",
          emoji: "📢",
          translation: { es: "acento", ur: "لہجہ/زور" },
          definition: {
            en: "The syllable in a word that gets the most stress when you say it",
            es: "La sílaba de una palabra que recibe más énfasis cuando la dices",
            ur: "لفظ میں وہ مقطعہ جس پر بولتے وقت سب سے زیادہ زور دیا جائے",
          },
          exampleSentence: {
            en: "In the word donate, the accent is on the first syllable: DO-nate.",
            es: "En la palabra donate, el acento está en la primera sílaba: DO-nate.",
            ur: "لفظ donate میں زور پہلے مقطعے پر ہے: DO-nate۔",
          },
        },
        {
          id: "divide",
          word: "divide",
          emoji: "➗",
          translation: { es: "dividir", ur: "تقسیم کرنا" },
          definition: {
            en: "To split a long word into its syllable parts to read it more easily",
            es: "Separar una palabra larga en sus partes de sílabas para leerla más fácilmente",
            ur: "لمبے لفظ کو مقطعوں میں تقسیم کرنا تاکہ اسے آسانی سے پڑھا جا سکے",
          },
          exampleSentence: {
            en: "Divide the word education into syllables: ed-u-ca-tion.",
            es: "Divide la palabra education en sílabas: ed-u-ca-tion.",
            ur: "لفظ education کو مقطعوں میں تقسیم کرو: ed-u-ca-tion۔",
          },
        },
        {
          id: "compound",
          word: "compound word",
          emoji: "🔗",
          translation: { es: "palabra compuesta", ur: "مرکب لفظ" },
          definition: {
            en: "Two smaller words joined together to make one new word",
            es: "Dos palabras más pequeñas unidas para formar una nueva palabra",
            ur: "دو چھوٹے الفاظ مل کر ایک نیا لفظ بنائیں",
          },
          exampleSentence: {
            en: "Rainwater is a compound word: rain plus water.",
            es: "Rainwater es una palabra compuesta: rain más water.",
            ur: "Rainwater ایک مرکب لفظ ہے: rain اور water۔",
          },
        },
      ],
      lesson: {
        en: `At Grade 4, you read longer, more complex words. The secret to reading them is breaking them into syllables — manageable chunks you already know how to read!\n\n**How to divide long words:**\n1. Look for prefixes and suffixes first — peel them off\n2. Find the vowels inside the root word\n3. Divide between consonants or after open syllables\n4. Read each part, then blend them together\n\nPractice with important community words:\n• en-vi-ron-ment (4 syllables) — what we must protect\n• sus-tain-a-ble (4 syllables) — using resources wisely so there is enough for everyone\n• com-mu-ni-ty (4 syllables) — the people around us who we work with\n• ed-u-ca-tion (4 syllables) — the key to a better future for all\n• vol-un-teer (3 syllables) — someone who helps without being paid\n\nTry the clapping test — clap once for each syllable beat:\nSus-TAIN-a-ble: clap clap clap clap — four claps!\n\nThe accented syllable is usually the one that sounds the strongest. In sustainable, the accent falls on TAIN.`,
        es: `En cuarto grado, lees palabras más largas y complejas. ¡El secreto para leerlas es dividirlas en sílabas!\n\n**Cómo dividir palabras largas:**\n1. Busca primero los prefijos y sufijos — quítalos\n2. Encuentra las vocales dentro de la palabra raíz\n3. Divide entre consonantes o después de sílabas abiertas\n4. Lee cada parte, luego únelas\n\nPractica con palabras importantes de la comunidad:\n• en-vi-ron-ment (4 sílabas)\n• sus-tain-a-ble (4 sílabas)\n• com-mu-ni-ty (4 sílabas)\n• ed-u-ca-tion (4 sílabas)\n• vol-un-teer (3 sílabas)\n\nPrueba el test de los aplausos — aplaude una vez por cada sílaba:\nSus-TAIN-a-ble: ¡cuatro aplausos!`,
        ur: `چوتھی جماعت میں آپ لمبے اور پیچیدہ الفاظ پڑھتے ہیں۔ انہیں پڑھنے کا راز مقطعوں میں توڑنا ہے!\n\n**لمبے الفاظ تقسیم کرنے کا طریقہ:**\n1. پہلے سابقے اور لاحقے تلاش کرو — انہیں الگ کرو\n2. بنیادی لفظ میں واول تلاش کرو\n3. غیر واول حروف کے درمیان یا کھلے مقطعے کے بعد تقسیم کرو\n4. ہر حصہ پڑھو، پھر جوڑو\n\nاہم کمیونٹی الفاظ سے مشق:\n• en-vi-ron-ment (4 مقطعے)\n• sus-tain-a-ble (4 مقطعے)\n• com-mu-ni-ty (4 مقطعے)\n• ed-u-ca-tion (4 مقطعے)\n• vol-un-teer (3 مقطعے)\n\nتالی کا ٹیسٹ کرو — ہر مقطعے پر ایک تالی:\nSus-TAIN-a-ble: چار تالیاں!`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "How many syllables does the word environment have?",
            es: "¿Cuántas sílabas tiene la palabra environment?",
            ur: "لفظ environment میں کتنے مقطعے ہیں؟",
          },
          choices: [
            { en: "3", es: "3", ur: "۳" },
            { en: "4", es: "4", ur: "۴" },
            { en: "5", es: "5", ur: "۵" },
            { en: "6", es: "6", ur: "۶" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "In the word DONate, which syllable is accented?",
            es: "En la palabra DONate, ¿cuál sílaba está acentuada?",
            ur: "لفظ DONate میں کون سا مقطعہ اکسنٹ والا ہے؟",
          },
          choices: [
            { en: "The second syllable: -nate", es: "La segunda sílaba: -nate", ur: "دوسرا مقطعہ: -nate" },
            { en: "The first syllable: DON-", es: "La primera sílaba: DON-", ur: "پہلا مقطعہ: DON-" },
            { en: "Both syllables equally", es: "Ambas sílabas por igual", ur: "دونوں مقطعے برابر" },
            { en: "Neither syllable", es: "Ninguna sílaba", ur: "کوئی بھی مقطعہ نہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Rainwater is a compound word because it is made of two smaller words joined together.",
            es: "Rainwater es una palabra compuesta porque está formada por dos palabras más pequeñas unidas.",
            ur: "Rainwater مرکب لفظ ہے کیونکہ یہ دو چھوٹے الفاظ مل کر بنا ہے۔",
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
            en: "Which is the correct syllable division for the word volunteer?",
            es: "¿Cuál es la división de sílabas correcta para la palabra volunteer?",
            ur: "لفظ volunteer کی درست مقطعہ بندی کون سی ہے؟",
          },
          choices: [
            { en: "volu-nteer", es: "volu-nteer", ur: "volu-nteer" },
            { en: "vol-un-teer", es: "vol-un-teer", ur: "vol-un-teer" },
            { en: "v-olunteer", es: "v-olunteer", ur: "v-olunteer" },
            { en: "volunt-eer", es: "volunt-eer", ur: "volunt-eer" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Breaking a long word into syllables makes it easier to read and decode.",
            es: "Dividir una palabra larga en sílabas hace que sea más fácil leerla y decodificarla.",
            ur: "لمبے لفظ کو مقطعوں میں توڑنا اسے پڑھنا اور سمجھنا آسان بنا دیتا ہے۔",
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
      id: "4-ph-1",
      pillar: "phonics",
      pillarLabel: {
        en: "Phonics",
        es: "Fonética",
        ur: "حروف اور آوازیں",
      },
      title: {
        en: "Multisyllabic Word Patterns",
        es: "Patrones de Palabras Multisílabas",
        ur: "کثیر مقطعی الفاظ کے نمونے",
      },
      emoji: "🏗️",
      teks: "TEKS 4.2B",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "open-syllable",
          word: "open syllable",
          emoji: "🔓",
          translation: { es: "sílaba abierta", ur: "کھلا مقطعہ" },
          definition: {
            en: "A syllable that ends with a vowel — the vowel says its long name",
            es: "Una sílaba que termina con una vocal — la vocal dice su nombre largo",
            ur: "وہ مقطعہ جو واول پر ختم ہو — واول اپنا لمبا نام کہے",
          },
          exampleSentence: {
            en: "The syllable go is open — it ends in a vowel and says the long o sound.",
            es: "La sílaba go es abierta — termina en vocal y dice el sonido largo de la o.",
            ur: "مقطعہ go کھلا ہے — یہ واول پر ختم ہوتا ہے اور لمبی o کہتا ہے۔",
          },
        },
        {
          id: "closed-syllable",
          word: "closed syllable",
          emoji: "🔒",
          translation: { es: "sílaba cerrada", ur: "بند مقطعہ" },
          definition: {
            en: "A syllable that ends with a consonant — the vowel inside says its short sound",
            es: "Una sílaba que termina con una consonante — la vocal dentro dice su sonido corto",
            ur: "وہ مقطعہ جو غیر واول حرف پر ختم ہو — اندر کی واول چھوٹی آواز کہے",
          },
          exampleSentence: {
            en: "The syllable mit in submit is closed — it ends in t and has a short i.",
            es: "La sílaba mit en submit es cerrada — termina en t y tiene una i corta.",
            ur: "submit میں مقطعہ mit بند ہے — یہ t پر ختم ہوتا ہے اور چھوٹی i ہے۔",
          },
        },
        {
          id: "vce-syllable",
          word: "vowel-consonant-e syllable",
          emoji: "✨",
          translation: { es: "sílaba vocal-consonante-e", ur: "واول-غیر واول-e مقطعہ" },
          definition: {
            en: "A syllable with the Magic E pattern — the vowel is long and the e is silent",
            es: "Una sílaba con el patrón de la E Mágica — la vocal es larga y la e es silenciosa",
            ur: "جادوئی E نمونے والا مقطعہ — واول لمبی اور e خاموش",
          },
          exampleSentence: {
            en: "The syllable vate in activate has the vowel-consonant-e pattern — long a, silent e.",
            es: "La sílaba vate en activate tiene el patrón vocal-consonante-e — a larga, e silenciosa.",
            ur: "activate میں مقطعہ vate کا واول-غیر واول-e نمونہ ہے — لمبی a، خاموش e۔",
          },
        },
        {
          id: "r-controlled",
          word: "r-controlled syllable",
          emoji: "🔤",
          translation: { es: "sílaba controlada por r", ur: "r کنٹرول مقطعہ" },
          definition: {
            en: "A syllable where a vowel is followed by r, changing its sound — like ar, er, ir, or, ur",
            es: "Una sílaba donde una vocal va seguida de r, cambiando su sonido — como ar, er, ir, or, ur",
            ur: "وہ مقطعہ جہاں واول کے بعد r آئے اور آواز بدل جائے — جیسے ar، er، ir، or، ur",
          },
          exampleSentence: {
            en: "The word water has an r-controlled syllable: wa-ter — the er says uh.",
            es: "La palabra water tiene una sílaba controlada por r: wa-ter — la er dice uh.",
            ur: "لفظ water میں r کنٹرول مقطعہ ہے: wa-ter — er کی آواز uh ہے۔",
          },
        },
      ],
      lesson: {
        en: `Every syllable in English belongs to one of six types. Knowing the types helps you instantly know how to pronounce the vowel in any syllable — even in words you have never seen before!\n\n**The six syllable types:**\n1. **Closed** — ends in a consonant, vowel is short: cab-in, bas-ket, plas-tic\n2. **Open** — ends in a vowel, vowel is long: go, me, stu-dent, pro-tect\n3. **Vowel-Consonant-E** — Magic E makes vowel long: hope, vote, cre-ate, de-bate\n4. **Vowel Team** — two vowels together make one sound: rain, feet, road, true\n5. **R-Controlled** — vowel + r changes the sound: car, bird, wa-ter, en-vi-ron-ment\n6. **Consonant-LE** — consonant + le at end: ta-ble, sim-ple, gen-tle\n\nReal words that matter — broken down:\n• pro-TECT (closed + closed) — protect our planet\n• cre-ATE (open + VCE) — create solutions together\n• sus-TAIN-a-ble (closed + vowel team + open + consonant-le) — sustainable habits\n• en-VI-ron-MENT (open + r-controlled + closed + closed) — care for the environment\n\nWhen you see a long word, scan for the syllable type in each chunk. Your brain decodes it faster than you think!`,
        es: `Cada sílaba en inglés pertenece a uno de seis tipos. ¡Conocer los tipos te ayuda a pronunciar instantáneamente la vocal en cualquier sílaba!\n\n**Los seis tipos de sílabas:**\n1. **Cerrada** — termina en consonante, vocal corta: cab-in, bas-ket\n2. **Abierta** — termina en vocal, vocal larga: go, me, stu-dent\n3. **Vocal-Consonante-E** — E Mágica: hope, vote, cre-ate\n4. **Equipo de vocales** — dos vocales juntas: rain, feet, road\n5. **Controlada por r** — vocal + r cambia el sonido: car, bird, wa-ter\n6. **Consonante-LE** — consonante + le al final: ta-ble, sim-ple\n\nPalabras reales que importan:\n• pro-TECT — proteger nuestro planeta\n• cre-ATE — crear soluciones juntos\n• sus-TAIN-a-ble — hábitos sostenibles`,
        ur: `انگریزی میں ہر مقطعہ چھ اقسام میں سے ایک کا ہوتا ہے۔ اقسام جاننا آپ کو کسی بھی مقطعے میں واول کی آواز فوری پہچاننے میں مدد کرتا ہے!\n\n**چھ مقطعہ اقسام:**\n1. **بند** — غیر واول پر ختم، واول چھوٹی: cab-in, bas-ket\n2. **کھلا** — واول پر ختم، واول لمبی: go, me, stu-dent\n3. **واول-غیر واول-E** — جادوئی E: hope, vote, cre-ate\n4. **واول ٹیم** — دو واول ساتھ: rain, feet, road\n5. **r کنٹرول** — واول + r آواز بدلے: car, bird, wa-ter\n6. **غیر واول-LE** — آخر میں غیر واول + le: ta-ble, sim-ple\n\nاہم الفاظ توڑ کر:\n• pro-TECT — ہمارے کرہ ارض کی حفاظت\n• cre-ATE — مل کر حل بنانا\n• sus-TAIN-a-ble — پائیدار عادات`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "The syllable go ends in a vowel. What type of syllable is it?",
            es: "La sílaba go termina en vocal. ¿Qué tipo de sílaba es?",
            ur: "مقطعہ go واول پر ختم ہوتا ہے۔ یہ کس قسم کا مقطعہ ہے؟",
          },
          choices: [
            { en: "Closed syllable", es: "Sílaba cerrada", ur: "بند مقطعہ" },
            { en: "Open syllable", es: "Sílaba abierta", ur: "کھلا مقطعہ" },
            { en: "R-controlled syllable", es: "Sílaba controlada por r", ur: "r کنٹرول مقطعہ" },
            { en: "Vowel team syllable", es: "Sílaba de equipo vocal", ur: "واول ٹیم مقطعہ" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "In the word water, what type of syllable is the second syllable ter?",
            es: "En la palabra water, ¿qué tipo de sílaba es la segunda sílaba ter?",
            ur: "لفظ water میں دوسرا مقطعہ ter کس قسم کا ہے؟",
          },
          choices: [
            { en: "Open syllable", es: "Sílaba abierta", ur: "کھلا مقطعہ" },
            { en: "Vowel-consonant-e syllable", es: "Sílaba vocal-consonante-e", ur: "واول-غیر واول-e مقطعہ" },
            { en: "R-controlled syllable", es: "Sílaba controlada por r", ur: "r کنٹرول مقطعہ" },
            { en: "Closed syllable", es: "Sílaba cerrada", ur: "بند مقطعہ" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "In a closed syllable, the vowel always says its long sound.",
            es: "En una sílaba cerrada, la vocal siempre dice su sonido largo.",
            ur: "بند مقطعے میں واول ہمیشہ لمبی آواز کہتی ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Which syllable type makes the vowel say its long sound because it ends in a vowel?",
            es: "¿Qué tipo de sílaba hace que la vocal diga su sonido largo porque termina en vocal?",
            ur: "کون سا مقطعہ واول کو لمبی آواز کہلواتا ہے کیونکہ یہ واول پر ختم ہوتا ہے؟",
          },
          choices: [
            { en: "Closed syllable", es: "Sílaba cerrada", ur: "بند مقطعہ" },
            { en: "R-controlled syllable", es: "Sílaba controlada por r", ur: "r کنٹرول مقطعہ" },
            { en: "Open syllable", es: "Sílaba abierta", ur: "کھلا مقطعہ" },
            { en: "Consonant-LE syllable", es: "Sílaba consonante-LE", ur: "غیر واول-LE مقطعہ" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Knowing syllable types helps you decode long words you have never seen before.",
            es: "Conocer los tipos de sílabas te ayuda a decodificar palabras largas que nunca has visto antes.",
            ur: "مقطعہ اقسام جاننا ایسے لمبے الفاظ سمجھنے میں مدد کرتا ہے جو آپ نے پہلے نہیں دیکھے۔",
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
      id: "4-fl-1",
      pillar: "fluency",
      pillarLabel: {
        en: "Fluency",
        es: "Fluidez",
        ur: "روانی",
      },
      title: {
        en: "Reading Rate & Self-Monitoring",
        es: "Velocidad de Lectura y Automonitoreo",
        ur: "پڑھنے کی رفتار اور خود نگرانی",
      },
      emoji: "📡",
      teks: "TEKS 4.4A",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "reading-rate",
          word: "reading rate",
          emoji: "⏱️",
          translation: { es: "velocidad de lectura", ur: "پڑھنے کی رفتار" },
          definition: {
            en: "How many words you read per minute — and whether it matches the type of text",
            es: "Cuántas palabras lees por minuto — y si corresponde al tipo de texto",
            ur: "آپ ایک منٹ میں کتنے الفاظ پڑھتے ہیں — اور کیا یہ متن کی قسم سے میل کھاتی ہے",
          },
          exampleSentence: {
            en: "A good reading rate for Grade 4 is around 120 to 140 words per minute.",
            es: "Una buena velocidad de lectura para cuarto grado es de aproximadamente 120 a 140 palabras por minuto.",
            ur: "چوتھی جماعت کے لیے اچھی پڑھنے کی رفتار تقریباً ۱۲۰ سے ۱۴۰ الفاظ فی منٹ ہے۔",
          },
        },
        {
          id: "self-monitor",
          word: "self-monitor",
          emoji: "🔍",
          translation: { es: "automonitorear", ur: "خود نگرانی کرنا" },
          definition: {
            en: "To check your own understanding while reading and fix it when something does not make sense",
            es: "Comprobar tu propia comprensión mientras lees y corregirla cuando algo no tiene sentido",
            ur: "پڑھتے وقت اپنی سمجھ کو خود جانچنا اور جب کچھ سمجھ نہ آئے تو ٹھیک کرنا",
          },
          exampleSentence: {
            en: "When she self-monitored, she realized she had skipped a whole line and had to reread.",
            es: "Cuando se automonitorió, se dio cuenta de que había saltado toda una línea y tuvo que releer.",
            ur: "جب اس نے خود نگرانی کی تو اسے احساس ہوا کہ وہ پوری سطر چھوڑ گئی تھی اور دوبارہ پڑھنا پڑا۔",
          },
        },
        {
          id: "reread",
          word: "reread",
          emoji: "🔄",
          translation: { es: "releer", ur: "دوبارہ پڑھنا" },
          definition: {
            en: "To go back and read a section again when you realize you did not understand it",
            es: "Volver atrás y leer una sección de nuevo cuando te das cuenta de que no la entendiste",
            ur: "واپس جا کر کوئی حصہ دوبارہ پڑھنا جب آپ کو لگے کہ آپ نے سمجھا نہیں",
          },
          exampleSentence: {
            en: "He rereread the paragraph about climate change because it had many new facts.",
            es: "Releyó el párrafo sobre el cambio climático porque tenía muchos datos nuevos.",
            ur: "اس نے موسمیاتی تبدیلی کے بارے میں پیراگراف دوبارہ پڑھا کیونکہ اس میں بہت سے نئے حقائق تھے۔",
          },
        },
        {
          id: "accuracy",
          word: "accuracy",
          emoji: "🎯",
          translation: { es: "exactitud", ur: "درستگی" },
          definition: {
            en: "Reading the exact words on the page without skipping, adding, or changing words",
            es: "Leer las palabras exactas de la página sin saltarse, agregar o cambiar palabras",
            ur: "الفاظ چھوڑے، شامل کیے یا بدلے بغیر صفحے کے بالکل درست الفاظ پڑھنا",
          },
          exampleSentence: {
            en: "Reading with accuracy means saying every word correctly as written.",
            es: "Leer con exactitud significa decir cada palabra correctamente tal como está escrita.",
            ur: "درستگی سے پڑھنے کا مطلب ہے ہر لفظ بالکل اسی طرح کہنا جیسا لکھا ہو۔",
          },
        },
      ],
      lesson: {
        en: `Fluency at Grade 4 means more than reading fast. It means reading at the RIGHT rate for the type of text, while staying accurate and checking your own understanding.\n\n**Adjust your rate to the text:**\n• Slow down for: informational text with facts and data, new vocabulary, complex sentences\n• Speed up for: familiar narrative text, simple dialogue, re-reading a section you know well\n• Pause at: commas, semicolons, em-dashes — these are breathing spaces\n\n**Self-monitoring strategies — what to do when you get confused:**\n1. Reread the sentence or paragraph\n2. Look for context clues around the tricky word\n3. Break the hard word into syllables\n4. Ask: does this make sense? Does it sound right?\n\nPractice passage about climate:\n"Scientists have found that global temperatures have risen more than one degree since 1900. This may sound small, but even a tiny change in average temperature causes bigger storms, longer droughts, and rising sea levels. However, researchers also say that if communities work together — reducing waste, planting trees, and using clean energy — the warming can slow down."\n\nTip: Slow down on the numbers and facts. Reread the however sentence — it is the most important idea. Stress the words together and can when you read the final phrase aloud.`,
        es: `La fluidez en cuarto grado significa más que leer rápido. Significa leer a la velocidad CORRECTA según el tipo de texto.\n\n**Ajusta tu velocidad al texto:**\n• Más despacio para: texto informativo con datos, vocabulario nuevo, oraciones complejas\n• Más rápido para: narrativa familiar, diálogo simple\n• Pausa en: comas, punto y coma — son espacios para respirar\n\n**Estrategias de automonitoreo:**\n1. Relee la oración o el párrafo\n2. Busca pistas de contexto\n3. Divide la palabra difícil en sílabas\n4. Pregunta: ¿tiene sentido esto? ¿Suena bien?\n\nPasaje de práctica sobre el clima:\n"Scientists have found that global temperatures have risen more than one degree since 1900. This may sound small, but even a tiny change in average temperature causes bigger storms, longer droughts, and rising sea levels. However, if communities work together — reducing waste, planting trees, and using clean energy — the warming can slow down."`,
        ur: `چوتھی جماعت میں روانی کا مطلب صرف تیز پڑھنا نہیں۔ اس کا مطلب متن کی قسم کے مطابق صحیح رفتار سے پڑھنا ہے۔\n\n**متن کے مطابق رفتار ایڈجسٹ کریں:**\n• آہستہ: حقائق اور ڈیٹا والے معلوماتی متن، نئے الفاظ، پیچیدہ جملے\n• تیز: آسان کہانی، جانا پہچانا متن\n• رکیں: کاما، سیمی کولن پر — یہ سانس لینے کی جگہیں ہیں\n\n**خود نگرانی کی حکمت عملیاں:**\n1. جملہ یا پیراگراف دوبارہ پڑھو\n2. سیاق کے اشارے تلاش کرو\n3. مشکل لفظ مقطعوں میں توڑو\n4. پوچھو: کیا یہ سمجھ میں آتا ہے؟`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "When should you slow down your reading rate?",
            es: "¿Cuándo debes reducir tu velocidad de lectura?",
            ur: "آپ کو پڑھنے کی رفتار کب کم کرنی چاہیے؟",
          },
          choices: [
            { en: "When reading a familiar story you have read before", es: "Cuando lees una historia familiar que ya has leído antes", ur: "جب کوئی جانی پہچانی کہانی پڑھو جو پہلے پڑھ چکے ہو" },
            { en: "When reading informational text with new facts and complex sentences", es: "Cuando lees texto informativo con datos nuevos y oraciones complejas", ur: "جب نئے حقائق اور پیچیدہ جملوں والا معلوماتی متن پڑھو" },
            { en: "When reading simple dialogue in a novel", es: "Cuando lees diálogo simple en una novela", ur: "جب ناول میں آسان مکالمہ پڑھو" },
            { en: "When you have already read the text twice", es: "Cuando ya has leído el texto dos veces", ur: "جب متن دو بار پڑھ چکے ہو" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "What is the first thing you should do when you read something confusing?",
            es: "¿Cuál es lo primero que debes hacer cuando lees algo confuso?",
            ur: "جب کوئی الجھن والی چیز پڑھو تو سب سے پہلے کیا کرنا چاہیے؟",
          },
          choices: [
            { en: "Skip it and keep going", es: "Saltarlo y seguir", ur: "چھوڑ دو اور آگے بڑھو" },
            { en: "Ask the teacher immediately", es: "Preguntarle al maestro inmediatamente", ur: "فوری استاد سے پوچھو" },
            { en: "Reread the sentence or paragraph", es: "Releer la oración o el párrafo", ur: "جملہ یا پیراگراف دوبارہ پڑھو" },
            { en: "Stop reading altogether", es: "Dejar de leer por completo", ur: "بالکل پڑھنا بند کر دو" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "A fluent reader always reads at the same speed no matter what type of text it is.",
            es: "Un lector fluido siempre lee a la misma velocidad sin importar qué tipo de texto sea.",
            ur: "روانی سے پڑھنے والا ہمیشہ ایک ہی رفتار سے پڑھتا ہے چاہے متن کی قسم کوئی بھی ہو۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "What does it mean to self-monitor while reading?",
            es: "¿Qué significa automonitorearse mientras se lee?",
            ur: "پڑھتے وقت خود نگرانی کرنے کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "To count how many words you read per minute", es: "Contar cuántas palabras lees por minuto", ur: "فی منٹ کتنے الفاظ پڑھے گنتے رہنا" },
            { en: "To check your understanding and fix it when something does not make sense", es: "Comprobar tu comprensión y corregirla cuando algo no tiene sentido", ur: "سمجھ جانچنا اور جب کچھ سمجھ نہ آئے تو ٹھیک کرنا" },
            { en: "To read out loud so others can hear you", es: "Leer en voz alta para que otros puedan escucharte", ur: "اونچی آواز میں پڑھنا تاکہ دوسرے سن سکیں" },
            { en: "To time how long it takes to read a page", es: "Cronometrar cuánto tardas en leer una página", ur: "ایک صفحہ پڑھنے میں کتنا وقت لگا ماپنا" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Accuracy means reading the exact words on the page without skipping or changing them.",
            es: "La exactitud significa leer las palabras exactas de la página sin saltarse ni cambiarlas.",
            ur: "درستگی کا مطلب ہے صفحے کے بالکل درست الفاظ پڑھنا چھوڑے یا بدلے بغیر۔",
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
      id: "4-vo-1",
      pillar: "vocabulary",
      pillarLabel: {
        en: "Vocabulary",
        es: "Vocabulario",
        ur: "الفاظ کا ذخیرہ",
      },
      title: {
        en: "Figurative Language",
        es: "Lenguaje Figurado",
        ur: "مجازی زبان",
      },
      emoji: "🎨",
      teks: "TEKS 4.7B",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "figurative-language",
          word: "figurative language",
          emoji: "🎭",
          translation: { es: "lenguaje figurado", ur: "مجازی زبان" },
          definition: {
            en: "Words used in a creative, non-literal way to paint a picture or feeling",
            es: "Palabras usadas de manera creativa y no literal para crear una imagen o sentimiento",
            ur: "وہ الفاظ جو تصویر یا احساس ابھارنے کے لیے تخلیقی اور غیر لفظی طور پر استعمال ہوں",
          },
          exampleSentence: {
            en: "Figurative language makes writing more vivid and powerful.",
            es: "El lenguaje figurado hace que la escritura sea más vívida y poderosa.",
            ur: "مجازی زبان تحریر کو زیادہ واضح اور طاقتور بناتی ہے۔",
          },
        },
        {
          id: "simile",
          word: "simile",
          emoji: "🔵",
          translation: { es: "símil", ur: "تشبیہ" },
          definition: {
            en: "A comparison using the words like or as",
            es: "Una comparación que usa las palabras like o as",
            ur: "like یا as الفاظ سے موازنہ",
          },
          exampleSentence: {
            en: "The river was as dry as a bone after the long drought.",
            es: "El río estaba seco como un hueso después de la larga sequía.",
            ur: "لمبے خشک موسم کے بعد دریا ہڈی کی طرح خشک تھا۔",
          },
        },
        {
          id: "metaphor",
          word: "metaphor",
          emoji: "🔴",
          translation: { es: "metáfora", ur: "استعارہ" },
          definition: {
            en: "A direct comparison that says one thing IS another thing — without using like or as",
            es: "Una comparación directa que dice que una cosa ES otra cosa — sin usar like o as",
            ur: "براہ راست موازنہ جو کہے کہ ایک چیز دوسری چیز ہے — like یا as کے بغیر",
          },
          exampleSentence: {
            en: "Our school is a garden where every student can grow.",
            es: "Nuestra escuela es un jardín donde cada estudiante puede crecer.",
            ur: "ہمارا اسکول ایک باغ ہے جہاں ہر طالب علم پروان چڑھ سکتا ہے۔",
          },
        },
        {
          id: "idiom",
          word: "idiom",
          emoji: "💬",
          translation: { es: "modismo", ur: "محاورہ" },
          definition: {
            en: "A phrase whose meaning is different from the literal meaning of the individual words",
            es: "Una frase cuyo significado es diferente al significado literal de las palabras individuales",
            ur: "وہ جملہ جس کا مطلب انفرادی الفاظ کے لفظی مطلب سے مختلف ہو",
          },
          exampleSentence: {
            en: "It is raining cats and dogs means it is raining very hard — not that animals are falling!",
            es: "It is raining cats and dogs significa que está lloviendo muy fuerte — ¡no que los animales están cayendo!",
            ur: "It is raining cats and dogs کا مطلب ہے بہت تیز بارش — یہ نہیں کہ جانور گر رہے ہیں!",
          },
        },
      ],
      lesson: {
        en: `Figurative language brings writing to life. Authors use it to help readers feel, see, and connect with ideas — especially when writing about important topics like fairness, climate, and community.\n\n**Simile** — comparison using like or as:\n• "The landfill grew as tall as a mountain."\n• "Volunteering felt like sunlight on a cold day."\n• "Without clean water, the village was as helpless as a fish out of water."\n\n**Metaphor** — says one thing IS another:\n• "Our community is a quilt — every family adds a different color."\n• "Education is the ladder out of poverty."\n• "The drought was a slow thief, stealing the crops month by month."\n\n**Idiom** — a phrase with a hidden meaning:\n• "It's raining cats and dogs" = raining very hard\n• "Hit the books" = start studying\n• "Bite off more than you can chew" = take on too much\n• "The ball is in your court" = it is your turn to act\n\nWhen you find figurative language while reading:\n1. Ask — is this literally true? If not, it is probably figurative.\n2. Look for like or as → simile\n3. Says something IS something else → metaphor\n4. Strange phrase that does not make sense literally → idiom`,
        es: `El lenguaje figurado da vida a la escritura. Los autores lo usan para ayudar a los lectores a sentir, ver y conectarse con las ideas.\n\n**Símil** — comparación con like o as:\n• "The landfill grew as tall as a mountain."\n• "Volunteering felt like sunlight on a cold day."\n\n**Metáfora** — dice que una cosa ES otra:\n• "Our community is a quilt — every family adds a different color."\n• "Education is the ladder out of poverty."\n• "The drought was a slow thief, stealing the crops month by month."\n\n**Modismo** — una frase con significado oculto:\n• "It's raining cats and dogs" = está lloviendo muy fuerte\n• "Hit the books" = empezar a estudiar\n• "Bite off more than you can chew" = asumir demasiado`,
        ur: `مجازی زبان تحریر کو زندہ کرتی ہے۔ مصنف اسے قارئین کو محسوس کرانے اور خیالات سے جوڑنے کے لیے استعمال کرتے ہیں۔\n\n**تشبیہ** — like یا as سے موازنہ:\n• "The landfill grew as tall as a mountain."\n• "Volunteering felt like sunlight on a cold day."\n\n**استعارہ** — کہے کہ ایک چیز دوسری ہے:\n• "Our community is a quilt — every family adds a different color."\n• "Education is the ladder out of poverty."\n• "The drought was a slow thief, stealing the crops month by month."\n\n**محاورہ** — چھپے مطلب والا جملہ:\n• "It's raining cats and dogs" = بہت تیز بارش\n• "Hit the books" = پڑھنا شروع کرو\n• "Bite off more than you can chew" = بہت زیادہ ذمہ داری لینا`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "The drought was a slow thief, stealing the crops month by month. What type of figurative language is this?",
            es: "The drought was a slow thief, stealing the crops month by month. ¿Qué tipo de lenguaje figurado es este?",
            ur: "The drought was a slow thief, stealing the crops month by month. یہ کس قسم کی مجازی زبان ہے؟",
          },
          choices: [
            { en: "Simile", es: "Símil", ur: "تشبیہ" },
            { en: "Idiom", es: "Modismo", ur: "محاورہ" },
            { en: "Metaphor", es: "Metáfora", ur: "استعارہ" },
            { en: "Literal language", es: "Lenguaje literal", ur: "لفظی زبان" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "What does the idiom hit the books mean?",
            es: "¿Qué significa el modismo hit the books?",
            ur: "محاورہ hit the books کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "To throw books across the room", es: "Tirar libros al otro lado de la habitación", ur: "کتابیں کمرے میں پھینکنا" },
            { en: "To start studying", es: "Empezar a estudiar", ur: "پڑھنا شروع کرنا" },
            { en: "To go to the library", es: "Ir a la biblioteca", ur: "لائبریری جانا" },
            { en: "To close your books", es: "Cerrar tus libros", ur: "کتابیں بند کرنا" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "A simile always uses the words like or as to make a comparison.",
            es: "Un símil siempre usa las palabras like o as para hacer una comparación.",
            ur: "تشبیہ موازنہ کرنے کے لیے ہمیشہ like یا as الفاظ استعمال کرتی ہے۔",
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
            en: "Volunteering felt like sunlight on a cold day. What type of figurative language is this?",
            es: "Volunteering felt like sunlight on a cold day. ¿Qué tipo de lenguaje figurado es este?",
            ur: "Volunteering felt like sunlight on a cold day. یہ کس قسم کی مجازی زبان ہے؟",
          },
          choices: [
            { en: "Metaphor", es: "Metáfora", ur: "استعارہ" },
            { en: "Idiom", es: "Modismo", ur: "محاورہ" },
            { en: "Simile", es: "Símil", ur: "تشبیہ" },
            { en: "Literal statement", es: "Declaración literal", ur: "لفظی بیان" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "A metaphor says one thing IS another thing without using like or as.",
            es: "Una metáfora dice que una cosa ES otra cosa sin usar like o as.",
            ur: "استعارہ like یا as کے بغیر کہتا ہے کہ ایک چیز دوسری چیز ہے۔",
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
      id: "4-co-1",
      pillar: "comprehension",
      pillarLabel: {
        en: "Comprehension",
        es: "Comprensión",
        ur: "فہم",
      },
      title: {
        en: "Author's Purpose",
        es: "Propósito del Autor",
        ur: "مصنف کا مقصد",
      },
      emoji: "🎯",
      teks: "TEKS 4.9D",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "authors-purpose",
          word: "author's purpose",
          emoji: "🎯",
          translation: { es: "propósito del autor", ur: "مصنف کا مقصد" },
          definition: {
            en: "The reason an author writes a text — to persuade, inform, or entertain",
            es: "La razón por la que un autor escribe un texto — para persuadir, informar o entretener",
            ur: "وہ وجہ جس کے لیے مصنف متن لکھتا ہے — قائل کرنا، آگاہ کرنا یا تفریح فراہم کرنا",
          },
          exampleSentence: {
            en: "The author's purpose was to persuade readers to reduce plastic waste.",
            es: "El propósito del autor era persuadir a los lectores de reducir los desechos de plástico.",
            ur: "مصنف کا مقصد قارئین کو پلاسٹک کا فضلہ کم کرنے کے لیے قائل کرنا تھا۔",
          },
        },
        {
          id: "persuade",
          word: "persuade",
          emoji: "📣",
          translation: { es: "persuadir", ur: "قائل کرنا" },
          definition: {
            en: "To try to get the reader to agree with an opinion or take an action",
            es: "Tratar de que el lector esté de acuerdo con una opinión o tome una acción",
            ur: "قاری کو کسی رائے سے متفق کرانا یا کوئی اقدام کرانا",
          },
          exampleSentence: {
            en: "The editorial tried to persuade the city to build more parks in low-income neighborhoods.",
            es: "El editorial intentó persuadir a la ciudad de construir más parques en los vecindarios de bajos ingresos.",
            ur: "اداریے نے شہر کو کم آمدنی والے محلوں میں مزید پارک بنانے کے لیے قائل کرنے کی کوشش کی۔",
          },
        },
        {
          id: "inform",
          word: "inform",
          emoji: "📰",
          translation: { es: "informar", ur: "آگاہ کرنا" },
          definition: {
            en: "To give the reader facts, data, and information without trying to change their opinion",
            es: "Dar al lector hechos, datos e información sin tratar de cambiar su opinión",
            ur: "قاری کو رائے بدلے بغیر حقائق، ڈیٹا اور معلومات دینا",
          },
          exampleSentence: {
            en: "The science article informed readers about how recycling reduces landfill waste.",
            es: "El artículo científico informó a los lectores sobre cómo el reciclaje reduce los desechos en los vertederos.",
            ur: "سائنس مضمون نے قارئین کو بتایا کہ ری سائیکلنگ لینڈ فل کا فضلہ کیسے کم کرتی ہے۔",
          },
        },
        {
          id: "entertain",
          word: "entertain",
          emoji: "🎬",
          translation: { es: "entretener", ur: "تفریح فراہم کرنا" },
          definition: {
            en: "To tell a story that keeps the reader interested and engaged",
            es: "Contar una historia que mantenga al lector interesado y comprometido",
            ur: "ایسی کہانی سنانا جو قاری کو دلچسپ اور مصروف رکھے",
          },
          exampleSentence: {
            en: "The story of two friends starting a community garden was written to entertain and inspire.",
            es: "La historia de dos amigos que empezaron un jardín comunitario fue escrita para entretener e inspirar.",
            ur: "دو دوستوں کی کمیونٹی باغ شروع کرنے کی کہانی تفریح اور تحریک کے لیے لکھی گئی تھی۔",
          },
        },
      ],
      lesson: {
        en: `Every text is written for a reason. When you identify the author's purpose, you read more critically and understand the text more deeply. The three main purposes are easy to remember with the acronym PIE:\n\n**P — Persuade:** The author wants you to agree with an opinion or change your behavior.\n• Signal words: should, must, need to, it is important, we must act, the only solution\n• Example: "Our city MUST ban single-use plastics now before our oceans are irreparably harmed."\n\n**I — Inform:** The author shares facts and information without pushing an opinion.\n• Signal words: studies show, according to, statistics, researchers found, data, numbers, dates\n• Example: "In 2023, scientists recorded the hottest global average temperature in 125,000 years."\n\n**E — Entertain:** The author tells a story to engage the reader.\n• Signal words: story elements — characters, setting, plot, dialogue, feelings\n• Example: "Maya pushed open the rusty gate and stared at the empty lot. She had a plan."\n\nSome texts have MORE THAN ONE purpose. A story about a real environmental hero can both inform and inspire. An opinion article can both inform (with facts) and persuade (with arguments).\n\nAlways ask: What does the author want me to think, feel, or do after reading this?`,
        es: `Cada texto se escribe por una razón. Recuerda los tres propósitos principales con el acrónimo PIE:\n\n**P — Persuadir:** El autor quiere que estés de acuerdo con una opinión.\n• Palabras señal: should, must, need to, it is important, we must act\n• Ejemplo: "Our city MUST ban single-use plastics now."\n\n**I — Informar:** El autor comparte hechos sin imponer una opinión.\n• Palabras señal: studies show, according to, statistics, researchers found\n• Ejemplo: "In 2023, scientists recorded the hottest global average temperature in 125,000 years."\n\n**E — Entretener:** El autor cuenta una historia para involucrar al lector.\n• Palabras señal: personajes, escenario, trama, diálogo\n• Ejemplo: "Maya pushed open the rusty gate and stared at the empty lot."\n\nAlgunos textos tienen MÁS DE UN propósito. Siempre pregunta: ¿Qué quiere el autor que piense, sienta o haga después de leer esto?`,
        ur: `ہر متن ایک وجہ سے لکھا جاتا ہے۔ تین مرکزی مقاصد کو PIE سے یاد رکھیں:\n\n**P — قائل کرنا:** مصنف چاہتا ہے کہ آپ کسی رائے سے متفق ہوں۔\n• اشارہ الفاظ: should, must, need to, it is important\n• مثال: "Our city MUST ban single-use plastics now."\n\n**I — آگاہ کرنا:** مصنف رائے مسلط کیے بغیر حقائق بانٹتا ہے۔\n• اشارہ الفاظ: studies show, according to, statistics, researchers found\n• مثال: "In 2023, scientists recorded the hottest global average temperature in 125,000 years."\n\n**E — تفریح:** مصنف کہانی سناتا ہے۔\n• اشارہ الفاظ: کردار، جگہ، کہانی، مکالمہ\n• مثال: "Maya pushed open the rusty gate and stared at the empty lot."\n\nکچھ متن میں ایک سے زیادہ مقصد ہوتے ہیں۔ ہمیشہ پوچھو: مصنف چاہتا ہے کہ پڑھنے کے بعد میں کیا سوچوں، محسوس کروں یا کروں؟`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Our city MUST ban single-use plastics now before our oceans are irreparably harmed. What is the author's purpose?",
            es: "Our city MUST ban single-use plastics now before our oceans are irreparably harmed. ¿Cuál es el propósito del autor?",
            ur: "Our city MUST ban single-use plastics now before our oceans are irreparably harmed. مصنف کا مقصد کیا ہے؟",
          },
          choices: [
            { en: "To inform with facts", es: "Informar con hechos", ur: "حقائق سے آگاہ کرنا" },
            { en: "To entertain with a story", es: "Entretener con una historia", ur: "کہانی سے تفریح دینا" },
            { en: "To persuade readers to take action", es: "Persuadir a los lectores para que tomen acción", ur: "قارئین کو اقدام کرنے کے لیے قائل کرنا" },
            { en: "To explain a science concept", es: "Explicar un concepto científico", ur: "سائنسی تصور سمجھانا" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "In 2023, scientists recorded the hottest global average temperature in 125,000 years. What is the author's purpose?",
            es: "In 2023, scientists recorded the hottest global average temperature in 125,000 years. ¿Cuál es el propósito del autor?",
            ur: "In 2023, scientists recorded the hottest global average temperature in 125,000 years. مصنف کا مقصد کیا ہے؟",
          },
          choices: [
            { en: "To persuade", es: "Persuadir", ur: "قائل کرنا" },
            { en: "To inform", es: "Informar", ur: "آگاہ کرنا" },
            { en: "To entertain", es: "Entretener", ur: "تفریح دینا" },
            { en: "To scare the reader", es: "Asustar al lector", ur: "قاری کو ڈرانا" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "A text can only have one author's purpose — it cannot be both persuasive and informational.",
            es: "Un texto solo puede tener un propósito del autor — no puede ser persuasivo e informativo al mismo tiempo.",
            ur: "متن میں صرف ایک مصنف کا مقصد ہو سکتا ہے — یہ ایک ساتھ قائل کرنے والا اور معلوماتی نہیں ہو سکتا۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "What does PIE stand for in author's purpose?",
            es: "¿Qué significa PIE en el propósito del autor?",
            ur: "مصنف کے مقصد میں PIE کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "Predict, Infer, Evaluate", es: "Predecir, Inferir, Evaluar", ur: "اندازہ، نتیجہ، جائزہ" },
            { en: "Persuade, Inform, Entertain", es: "Persuadir, Informar, Entretener", ur: "قائل کرنا، آگاہ کرنا، تفریح دینا" },
            { en: "Plan, Identify, Explain", es: "Planificar, Identificar, Explicar", ur: "منصوبہ، پہچان، بیان" },
            { en: "Point, Illustrate, Emphasize", es: "Señalar, Ilustrar, Enfatizar", ur: "اشارہ، مثال، زور" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Signal words like should and must often indicate that an author's purpose is to persuade.",
            es: "Las palabras señal como should y must a menudo indican que el propósito del autor es persuadir.",
            ur: "should اور must جیسے اشارہ الفاظ اکثر بتاتے ہیں کہ مصنف کا مقصد قائل کرنا ہے۔",
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

export default grade4;
