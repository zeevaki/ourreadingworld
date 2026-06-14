import { GradeReading } from "./types";

const grade3: GradeReading = {
  grade: 3,
  label: "Grade 3",
  emoji: "🌊",
  color: "#0EA5E9",
  units: [
    {
      id: "3-pa-1",
      pillar: "phonemic-awareness",
      pillarLabel: {
        en: "Phonemic Awareness",
        es: "Conciencia Fonémica",
        ur: "آوازوں کی سمجھ",
      },
      title: {
        en: "Phoneme Manipulation",
        es: "Manipulación de Fonemas",
        ur: "آوازوں میں تبدیلی",
      },
      emoji: "🎛️",
      teks: "TEKS 3.2A",
      cambridge: "Cambridge Reading Stage 3",
      vocabulary: [
        {
          id: "delete",
          word: "delete",
          emoji: "🗑️",
          translation: { es: "eliminar", ur: "ہٹانا" },
          definition: {
            en: "To remove a sound from a word to make a new word",
            es: "Quitar un sonido de una palabra para formar una nueva palabra",
            ur: "لفظ سے ایک آواز ہٹا کر نیا لفظ بنانا",
          },
          exampleSentence: {
            en: "Delete the s from smile and you get mile.",
            es: "Elimina la s de smile y obtienes mile.",
            ur: "smile سے s ہٹاؤ تو mile بنتا ہے۔",
          },
        },
        {
          id: "substitute",
          word: "substitute",
          emoji: "🔄",
          translation: { es: "sustituir", ur: "بدلنا" },
          definition: {
            en: "To swap one sound in a word for a different sound",
            es: "Cambiar un sonido en una palabra por un sonido diferente",
            ur: "کسی لفظ میں ایک آواز کو دوسری سے بدلنا",
          },
          exampleSentence: {
            en: "Substitute the ch in change with r and you get range.",
            es: "Sustituye el ch de change por r y obtienes range.",
            ur: "change میں ch کو r سے بدلو تو range بنتا ہے۔",
          },
        },
        {
          id: "add",
          word: "add",
          emoji: "➕",
          translation: { es: "agregar", ur: "جوڑنا" },
          definition: {
            en: "To put a new sound into a word to make a different word",
            es: "Poner un sonido nuevo en una palabra para formar una palabra diferente",
            ur: "لفظ میں نئی آواز ڈال کر مختلف لفظ بنانا",
          },
          exampleSentence: {
            en: "Add gr to the beginning of ow and you get grow.",
            es: "Agrega gr al principio de ow y obtienes grow.",
            ur: "ow کے شروع میں gr لگاؤ تو grow بنتا ہے۔",
          },
        },
        {
          id: "manipulate",
          word: "manipulate",
          emoji: "🎮",
          translation: { es: "manipular", ur: "تبدیل کرنا" },
          definition: {
            en: "To change sounds in a word by adding, deleting, or substituting",
            es: "Cambiar sonidos en una palabra agregando, eliminando o sustituyendo",
            ur: "لفظ میں آوازیں جوڑ کر، ہٹا کر یا بدل کر تبدیل کرنا",
          },
          exampleSentence: {
            en: "When you manipulate sounds, you can turn one word into many others.",
            es: "Cuando manipulas sonidos, puedes convertir una palabra en muchas otras.",
            ur: "جب آپ آوازیں تبدیل کرتے ہیں تو ایک لفظ سے کئی الفاظ بنا سکتے ہیں۔",
          },
        },
      ],
      lesson: {
        en: `Phoneme manipulation means changing words by adding, deleting, or substituting sounds. This is an advanced reading superpower that helps you decode tricky words!\n\n**Deleting a phoneme** — take a sound away:\n• smile → remove s → mile\n• grow → remove g → row\n• plant → remove p → lant... not a word! Try removing l → pant. Yes!\n\n**Adding a phoneme** — put a new sound in:\n• row → add g at the start → grow\n• act → add r before a → tract... try adding at the end instead → acts\n• change → add un at the front → you need prefixes for that! (we'll learn those next)\n\n**Substituting a phoneme** — swap one sound for another:\n• change the c in care to sh → share\n• change the f in fair to ch → chair\n• change the h in help to k → kelp\n\nOur community words are full of sounds to manipulate. Try turning share into bare — substitute sh with b. Sharing and caring both start with sounds that show up in many important words!`,
        es: `La manipulación de fonemas significa cambiar palabras agregando, eliminando o sustituyendo sonidos.\n\n**Eliminar un fonema** — quita un sonido:\n• smile → quita s → mile\n• grow → quita g → row\n• plant → quita l → pant\n\n**Agregar un fonema** — pon un sonido nuevo:\n• row → agrega g al inicio → grow\n• act → agrega s al final → acts\n\n**Sustituir un fonema** — cambia un sonido por otro:\n• cambia la c de care por sh → share\n• cambia la f de fair por ch → chair\n• cambia la h de help por k → kelp\n\n¡Nuestras palabras de la comunidad están llenas de sonidos para manipular!`,
        ur: `آوازوں میں تبدیلی کا مطلب ہے جوڑ کر، ہٹا کر یا بدل کر الفاظ بدلنا۔\n\n**آواز ہٹانا:**\n• smile → s ہٹاؤ → mile\n• grow → g ہٹاؤ → row\n• plant → l ہٹاؤ → pant\n\n**آواز جوڑنا:**\n• row → شروع میں g لگاؤ → grow\n• act → آخر میں s لگاؤ → acts\n\n**آواز بدلنا:**\n• care میں c کو sh سے بدلو → share\n• fair میں f کو ch سے بدلو → chair\n• help میں h کو k سے بدلو → kelp\n\nہماری کمیونٹی کے الفاظ تبدیل کرنے کے لیے آوازوں سے بھرے ہیں!`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Delete the first sound from smile. What word do you get?",
            es: "Elimina el primer sonido de smile. ¿Qué palabra obtienes?",
            ur: "smile سے پہلی آواز ہٹاؤ۔ کون سا لفظ بنتا ہے؟",
          },
          choices: [
            { en: "mill", es: "mill", ur: "mill" },
            { en: "mile", es: "mile", ur: "mile" },
            { en: "mild", es: "mild", ur: "mild" },
            { en: "silk", es: "silk", ur: "silk" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "Substitute the c in care with sh. What word do you get?",
            es: "Sustituye la c de care por sh. ¿Qué palabra obtienes?",
            ur: "care میں c کو sh سے بدلو۔ کون سا لفظ بنتا ہے؟",
          },
          choices: [
            { en: "shore", es: "shore", ur: "shore" },
            { en: "share", es: "share", ur: "share" },
            { en: "spare", es: "spare", ur: "spare" },
            { en: "stare", es: "stare", ur: "stare" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Phoneme manipulation means changing a word by adding, deleting, or substituting sounds.",
            es: "La manipulación de fonemas significa cambiar una palabra agregando, eliminando o sustituyendo sonidos.",
            ur: "آوازوں میں تبدیلی کا مطلب ہے آوازیں جوڑ کر، ہٹا کر یا بدل کر لفظ بدلنا۔",
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
            en: "Add gr to the beginning of ow. What word do you make?",
            es: "Agrega gr al principio de ow. ¿Qué palabra formas?",
            ur: "ow کے شروع میں gr لگاؤ۔ کون سا لفظ بنتا ہے؟",
          },
          choices: [
            { en: "glow", es: "glow", ur: "glow" },
            { en: "crow", es: "crow", ur: "crow" },
            { en: "grow", es: "grow", ur: "grow" },
            { en: "throw", es: "throw", ur: "throw" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "If you delete the p from plant, the word that remains is lant.",
            es: "Si eliminas la p de plant, la palabra que queda es lant.",
            ur: "اگر plant سے p ہٹاؤ تو باقی لفظ lant ہے۔",
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
      id: "3-ph-1",
      pillar: "phonics",
      pillarLabel: {
        en: "Phonics",
        es: "Fonética",
        ur: "حروف اور آوازیں",
      },
      title: {
        en: "Prefixes & Suffixes",
        es: "Prefijos y Sufijos",
        ur: "سابقے اور لاحقے",
      },
      emoji: "🧩",
      teks: "TEKS 3.2B",
      cambridge: "Cambridge Reading Stage 3",
      vocabulary: [
        {
          id: "prefix",
          word: "prefix",
          emoji: "⬅️",
          translation: { es: "prefijo", ur: "سابقہ" },
          definition: {
            en: "A word part added to the BEGINNING of a word that changes its meaning",
            es: "Una parte de la palabra que se agrega al INICIO de una palabra y cambia su significado",
            ur: "لفظ کا وہ حصہ جو شروع میں لگایا جائے اور مطلب بدل دے",
          },
          exampleSentence: {
            en: "The prefix un means not — so unfair means not fair.",
            es: "El prefijo un significa no — así que unfair significa no justo.",
            ur: "سابقہ un کا مطلب نہیں ہے — تو unfair کا مطلب غیر منصفانہ ہے۔",
          },
        },
        {
          id: "suffix",
          word: "suffix",
          emoji: "➡️",
          translation: { es: "sufijo", ur: "لاحقہ" },
          definition: {
            en: "A word part added to the END of a word that changes its meaning",
            es: "Una parte de la palabra que se agrega al FINAL de una palabra y cambia su significado",
            ur: "لفظ کا وہ حصہ جو آخر میں لگایا جائے اور مطلب بدل دے",
          },
          exampleSentence: {
            en: "The suffix ful means full of — so helpful means full of help.",
            es: "El sufijo ful significa lleno de — así que helpful significa lleno de ayuda.",
            ur: "لاحقہ ful کا مطلب بھرا ہوا ہے — تو helpful کا مطلب مدد سے بھرا ہوا ہے۔",
          },
        },
        {
          id: "root-word",
          word: "root word",
          emoji: "🌱",
          translation: { es: "palabra raíz", ur: "بنیادی لفظ" },
          definition: {
            en: "The base word before any prefix or suffix is added",
            es: "La palabra base antes de agregar cualquier prefijo o sufijo",
            ur: "وہ بنیادی لفظ جس میں کوئی سابقہ یا لاحقہ نہ لگا ہو",
          },
          exampleSentence: {
            en: "The root word of kindness is kind.",
            es: "La palabra raíz de kindness es kind.",
            ur: "kindness کا بنیادی لفظ kind ہے۔",
          },
        },
        {
          id: "affix",
          word: "affix",
          emoji: "🔗",
          translation: { es: "afijo", ur: "سابقہ یا لاحقہ" },
          definition: {
            en: "A word part — either a prefix or a suffix — added to a root word",
            es: "Una parte de la palabra — ya sea un prefijo o un sufijo — que se agrega a una palabra raíz",
            ur: "لفظ کا حصہ — سابقہ یا لاحقہ — جو بنیادی لفظ میں لگایا جائے",
          },
          exampleSentence: {
            en: "Knowing common affixes helps you read and understand new words.",
            es: "Conocer los afijos comunes te ayuda a leer y entender palabras nuevas.",
            ur: "عام سابقوں اور لاحقوں کو جاننا نئے الفاظ پڑھنے اور سمجھنے میں مدد کرتا ہے۔",
          },
        },
      ],
      lesson: {
        en: `Prefixes and suffixes are powerful tools. When you know what they mean, you can unlock the meaning of hundreds of new words without looking them up!\n\n**Common Prefixes:**\n• un = not → unfair, unkind, unhappy, unsafe\n• re = again → reuse, recycle, rebuild, rethink\n• pre = before → prepare, preview, prevent\n\n**Common Suffixes:**\n• ful = full of → helpful, hopeful, peaceful, grateful\n• less = without → homeless, careless, hopeless, powerless\n• ness = the state of → kindness, fairness, darkness, happiness\n• tion = the act of → action, donation, protection, education\n\nThink about how these connect to our community:\n• Recycling = re (again) + cycle — doing something again with materials\n• Unkind = un (not) + kind — the opposite of what we want to be\n• Donation = donate + tion — the act of giving\n• Homeless = home + less — without a home\n• Hopeful = hope + ful — full of hope for a better world\n\nWhen you see a long word, look for the root word first. Then check for a prefix at the start or a suffix at the end. Break it apart and you can read almost anything!`,
        es: `¡Los prefijos y sufijos son herramientas poderosas!\n\n**Prefijos comunes:**\n• un = no → unfair, unkind, unhappy, unsafe\n• re = otra vez → reuse, recycle, rebuild, rethink\n• pre = antes → prepare, preview, prevent\n\n**Sufijos comunes:**\n• ful = lleno de → helpful, hopeful, peaceful, grateful\n• less = sin → homeless, careless, hopeless, powerless\n• ness = el estado de → kindness, fairness, darkness, happiness\n• tion = el acto de → action, donation, protection, education\n\nPiensa en cómo se conectan con nuestra comunidad:\n• Recycling = re (otra vez) + cycle — hacer algo de nuevo con materiales\n• Unkind = un (no) + kind — lo opuesto de lo que queremos ser\n• Donation = donate + tion — el acto de dar`,
        ur: `سابقے اور لاحقے بہت طاقتور اوزار ہیں!\n\n**عام سابقے:**\n• un = نہیں → unfair, unkind, unhappy, unsafe\n• re = دوبارہ → reuse, recycle, rebuild, rethink\n• pre = پہلے → prepare, preview, prevent\n\n**عام لاحقے:**\n• ful = سے بھرا → helpful, hopeful, peaceful, grateful\n• less = کے بغیر → homeless, careless, hopeless, powerless\n• ness = کی حالت → kindness, fairness, darkness, happiness\n• tion = کا عمل → action, donation, protection, education\n\nسوچیں یہ ہماری کمیونٹی سے کیسے جڑتے ہیں:\n• Recycling = re (دوبارہ) + cycle — مواد کے ساتھ دوبارہ کام کرنا\n• Unkind = un (نہیں) + kind — جو ہم نہیں بننا چاہتے\n• Donation = donate + tion — دینے کا عمل`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What does the prefix un mean in the word unkind?",
            es: "¿Qué significa el prefijo un en la palabra unkind?",
            ur: "لفظ unkind میں سابقہ un کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "very", es: "muy", ur: "بہت" },
            { en: "again", es: "otra vez", ur: "دوبارہ" },
            { en: "not", es: "no", ur: "نہیں" },
            { en: "before", es: "antes", ur: "پہلے" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "What is the root word in the word kindness?",
            es: "¿Cuál es la palabra raíz de la palabra kindness?",
            ur: "لفظ kindness میں بنیادی لفظ کیا ہے؟",
          },
          choices: [
            { en: "ness", es: "ness", ur: "ness" },
            { en: "kind", es: "kind", ur: "kind" },
            { en: "kin", es: "kin", ur: "kin" },
            { en: "ind", es: "ind", ur: "ind" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "The suffix ful means without, so hopeful means without hope.",
            es: "El sufijo ful significa sin, así que hopeful significa sin esperanza.",
            ur: "لاحقہ ful کا مطلب کے بغیر ہے، تو hopeful کا مطلب امید کے بغیر ہے۔",
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
            en: "Which word means the act of giving?",
            es: "¿Cuál palabra significa el acto de dar?",
            ur: "کون سا لفظ دینے کے عمل کا مطلب رکھتا ہے؟",
          },
          choices: [
            { en: "hopeful", es: "hopeful", ur: "hopeful" },
            { en: "unkind", es: "unkind", ur: "unkind" },
            { en: "donation", es: "donation", ur: "donation" },
            { en: "rebuild", es: "rebuild", ur: "rebuild" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "The prefix re means to do something again, so recycle means to cycle again.",
            es: "El prefijo re significa hacer algo otra vez, así que recycle significa volver a ciclar.",
            ur: "سابقہ re کا مطلب دوبارہ کرنا ہے، تو recycle کا مطلب دوبارہ چکر لگانا ہے۔",
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
      id: "3-fl-1",
      pillar: "fluency",
      pillarLabel: {
        en: "Fluency",
        es: "Fluidez",
        ur: "روانی",
      },
      title: {
        en: "Prosody & Intonation",
        es: "Prosodia y Entonación",
        ur: "لہجہ اور آواز کا اتار چڑھاؤ",
      },
      emoji: "🎶",
      teks: "TEKS 3.4A",
      cambridge: "Cambridge Reading Stage 3",
      vocabulary: [
        {
          id: "prosody",
          word: "prosody",
          emoji: "🎼",
          translation: { es: "prosodia", ur: "لہجہ" },
          definition: {
            en: "The music of reading — the rise and fall, stress, and rhythm of your voice",
            es: "La música de la lectura — el subir y bajar, el énfasis y el ritmo de tu voz",
            ur: "پڑھنے کی موسیقی — آواز کا اتار چڑھاؤ، زور اور تال",
          },
          exampleSentence: {
            en: "Good prosody makes reading sound like natural, expressive speech.",
            es: "Una buena prosodia hace que la lectura suene como un habla natural y expresiva.",
            ur: "اچھا لہجہ پڑھنے کو قدرتی اور اظہاری گفتگو جیسا بناتا ہے۔",
          },
        },
        {
          id: "intonation",
          word: "intonation",
          emoji: "📈",
          translation: { es: "entonación", ur: "آواز کا اتار چڑھاؤ" },
          definition: {
            en: "The way your voice rises and falls to show meaning and emotion",
            es: "La manera en que tu voz sube y baja para mostrar significado y emoción",
            ur: "آواز کا اوپر نیچے جانا جو مطلب اور جذبات ظاہر کرتا ہے",
          },
          exampleSentence: {
            en: "Your intonation rises at the end of a question.",
            es: "Tu entonación sube al final de una pregunta.",
            ur: "سوال کے آخر میں آپ کا آواز کا اتار چڑھاؤ اوپر جاتا ہے۔",
          },
        },
        {
          id: "stress",
          word: "stress",
          emoji: "💪",
          translation: { es: "énfasis", ur: "زور" },
          definition: {
            en: "Saying one word or syllable louder and stronger to show it is important",
            es: "Decir una palabra o sílaba más fuerte para mostrar que es importante",
            ur: "کسی لفظ یا مقطعے کو زور سے کہنا تاکہ اہمیت ظاہر ہو",
          },
          exampleSentence: {
            en: "We stress the word every in Everyone deserves a home.",
            es: "Enfatizamos la palabra every en Everyone deserves a home.",
            ur: "Everyone deserves a home میں ہم every پر زور دیتے ہیں۔",
          },
        },
        {
          id: "tone",
          word: "tone",
          emoji: "🎭",
          translation: { es: "tono", ur: "لہجہ/سر" },
          definition: {
            en: "The feeling or emotion in your voice that matches the meaning of the text",
            es: "El sentimiento o emoción en tu voz que corresponde al significado del texto",
            ur: "آواز میں وہ احساس یا جذبہ جو متن کے مطلب سے میل کھاتا ہو",
          },
          exampleSentence: {
            en: "Use a hopeful tone when reading about solving a community problem.",
            es: "Usa un tono esperanzador cuando lees sobre resolver un problema comunitario.",
            ur: "کمیونٹی کا مسئلہ حل کرنے کے بارے میں پڑھتے وقت امیدوار لہجہ استعمال کرو۔",
          },
        },
      ],
      lesson: {
        en: `Prosody is the music of reading. When you read with good prosody, your voice rises and falls, slows down and speeds up, gets softer and louder — just like natural speech. It helps the listener understand not just the words, but the feeling behind them.\n\n**Four elements of prosody:**\n1. **Intonation** — voice goes up for questions, down for statements\n2. **Stress** — emphasize important words\n3. **Tone** — match your voice to the emotion of the text\n4. **Pacing** — slow down for important parts, speed up for exciting parts\n\nPractice with these sentences. Notice how your voice changes:\n• "Everyone deserves clean water." (serious, strong tone — stress everyone and deserves)\n• "Did you know that one million children don't have access to clean water?" (rising intonation on the question, slow and thoughtful)\n• "But WE can help change that!" (excited, hopeful — stress we and change)\n\nWhen you read to a younger student, your prosody helps them understand the meaning and feel the importance of the words. You are teaching with your voice!`,
        es: `La prosodia es la música de la lectura. Cuando lees con buena prosodia, tu voz sube y baja, se vuelve más suave y más fuerte — igual que el habla natural.\n\n**Cuatro elementos de la prosodia:**\n1. **Entonación** — la voz sube para preguntas, baja para afirmaciones\n2. **Énfasis** — enfatiza las palabras importantes\n3. **Tono** — ajusta tu voz a la emoción del texto\n4. **Ritmo** — más despacio para las partes importantes, más rápido para las emocionantes\n\nPractica con estas oraciones:\n• "Everyone deserves clean water." (tono serio y fuerte)\n• "Did you know that one million children don't have access to clean water?" (entonación ascendente)\n• "But WE can help change that!" (emocionado, esperanzador)`,
        ur: `لہجہ پڑھنے کی موسیقی ہے۔ اچھے لہجے کے ساتھ پڑھنے پر آپ کی آواز اوپر نیچے جاتی ہے، تیز اور آہستہ ہوتی ہے — بالکل قدرتی گفتگو کی طرح۔\n\n**لہجے کے چار اجزاء:**\n1. **آواز کا اتار چڑھاؤ** — سوالوں پر اوپر، بیانات پر نیچے\n2. **زور** — اہم الفاظ پر زور دو\n3. **سر** — متن کے جذبات سے آواز کو ملاؤ\n4. **رفتار** — اہم حصوں پر آہستہ، دلچسپ حصوں پر تیز\n\nان جملوں سے مشق کرو:\n• "Everyone deserves clean water." (سنجیدہ، مضبوط سر)\n• "Did you know that one million children don't have access to clean water?" (سوالیہ اتار چڑھاؤ)\n• "But WE can help change that!" (جوشیلا، امیدوار)`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What should your voice do at the end of a question?",
            es: "¿Qué debe hacer tu voz al final de una pregunta?",
            ur: "سوال کے آخر میں آپ کی آواز کیا کرے؟",
          },
          choices: [
            { en: "Go down", es: "Bajar", ur: "نیچے جائے" },
            { en: "Go up", es: "Subir", ur: "اوپر جائے" },
            { en: "Stay the same", es: "Quedarse igual", ur: "وہی رہے" },
            { en: "Stop completely", es: "Parar completamente", ur: "بالکل رک جائے" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "In the sentence But WE can help change that, which word should be stressed?",
            es: "En la oración But WE can help change that, ¿cuál palabra debe enfatizarse?",
            ur: "جملے But WE can help change that میں کس لفظ پر زور دینا چاہیے؟",
          },
          choices: [
            { en: "but", es: "but", ur: "but" },
            { en: "can", es: "can", ur: "can" },
            { en: "WE", es: "WE", ur: "WE" },
            { en: "that", es: "that", ur: "that" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Prosody means reading every word at exactly the same speed and volume.",
            es: "Prosodia significa leer cada palabra a exactamente la misma velocidad y volumen.",
            ur: "لہجے کا مطلب ہے ہر لفظ بالکل ایک ہی رفتار اور آواز کی بلندی پر پڑھنا۔",
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
            en: "What is prosody?",
            es: "¿Qué es la prosodia?",
            ur: "لہجہ کیا ہے؟",
          },
          choices: [
            { en: "Reading every word slowly one at a time", es: "Leer cada palabra despacio una por una", ur: "ہر لفظ آہستہ آہستہ پڑھنا" },
            { en: "The rise and fall, stress, and rhythm of your voice when reading", es: "El subir y bajar, énfasis y ritmo de tu voz al leer", ur: "پڑھتے وقت آواز کا اتار چڑھاؤ، زور اور تال" },
            { en: "Only reading questions with a high voice", es: "Solo leer preguntas con una voz alta", ur: "صرف سوالات اونچی آواز سے پڑھنا" },
            { en: "Reading as fast as possible", es: "Leer tan rápido como sea posible", ur: "جتنا تیز ہو سکے پڑھنا" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Good prosody helps listeners understand not just the words but the feeling behind them.",
            es: "Una buena prosodia ayuda a los oyentes a entender no solo las palabras sino el sentimiento detrás de ellas.",
            ur: "اچھا لہجہ سننے والوں کو نہ صرف الفاظ بلکہ ان کے پیچھے کا احساس بھی سمجھنے میں مدد کرتا ہے۔",
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
      id: "3-vo-1",
      pillar: "vocabulary",
      pillarLabel: {
        en: "Vocabulary",
        es: "Vocabulario",
        ur: "الفاظ کا ذخیرہ",
      },
      title: {
        en: "Context Clues",
        es: "Pistas del Contexto",
        ur: "سیاق کے اشارے",
      },
      emoji: "🔍",
      teks: "TEKS 3.7B",
      cambridge: "Cambridge Reading Stage 3",
      vocabulary: [
        {
          id: "context-clue",
          word: "context clue",
          emoji: "🔎",
          translation: { es: "pista del contexto", ur: "سیاق کا اشارہ" },
          definition: {
            en: "Information in the surrounding sentences that helps you figure out the meaning of an unknown word",
            es: "Información en las oraciones cercanas que te ayuda a descifrar el significado de una palabra desconocida",
            ur: "آس پاس کے جملوں میں وہ معلومات جو انجان لفظ کا مطلب سمجھنے میں مدد کرے",
          },
          exampleSentence: {
            en: "Use context clues in the paragraph to figure out what the word scarce means.",
            es: "Usa las pistas del contexto en el párrafo para entender qué significa la palabra scarce.",
            ur: "لفظ scarce کا مطلب سمجھنے کے لیے پیراگراف میں سیاق کے اشارے استعمال کرو۔",
          },
        },
        {
          id: "definition-clue",
          word: "definition clue",
          emoji: "📖",
          translation: { es: "pista de definición", ur: "تعریف کا اشارہ" },
          definition: {
            en: "When the author directly tells you what a word means right in the sentence",
            es: "Cuando el autor te dice directamente qué significa una palabra justo en la oración",
            ur: "جب مصنف جملے میں ہی آپ کو بتا دے کہ لفظ کا مطلب کیا ہے",
          },
          exampleSentence: {
            en: "Scarce, which means hard to find, describes clean water in dry regions.",
            es: "Scarce, que significa difícil de encontrar, describe el agua limpia en las regiones secas.",
            ur: "Scarce، جس کا مطلب ڈھونڈنا مشکل ہے، خشک علاقوں میں صاف پانی کو بیان کرتا ہے۔",
          },
        },
        {
          id: "example-clue",
          word: "example clue",
          emoji: "📝",
          translation: { es: "pista de ejemplo", ur: "مثال کا اشارہ" },
          definition: {
            en: "When the author gives examples that help you understand an unfamiliar word",
            es: "Cuando el autor da ejemplos que te ayudan a entender una palabra desconocida",
            ur: "جب مصنف مثالیں دے جو انجان لفظ سمجھنے میں مدد کریں",
          },
          exampleSentence: {
            en: "Resources, such as clean water, fresh food, and safe shelter, are not equal for all families.",
            es: "Los recursos, como el agua limpia, la comida fresca y el refugio seguro, no son iguales para todas las familias.",
            ur: "وسائل، جیسے صاف پانی، تازہ کھانا اور محفوظ پناہ گاہ، سب خاندانوں کے لیے برابر نہیں۔",
          },
        },
        {
          id: "contrast-clue",
          word: "contrast clue",
          emoji: "↔️",
          translation: { es: "pista de contraste", ur: "تضاد کا اشارہ" },
          definition: {
            en: "When the author shows the opposite meaning to help you understand a word",
            es: "Cuando el autor muestra el significado opuesto para ayudarte a entender una palabra",
            ur: "جب مصنف الٹ مطلب دکھا کر لفظ سمجھنے میں مدد کرے",
          },
          exampleSentence: {
            en: "Unlike the plentiful rain in the north, water was scarce in the southern desert villages.",
            es: "A diferencia de la abundante lluvia en el norte, el agua escaseaba en los pueblos del desierto del sur.",
            ur: "شمال کی بکثرت بارش کے برعکس، جنوبی صحرائی گاؤں میں پانی کم تھا۔",
          },
        },
      ],
      lesson: {
        en: `Context clues are hints inside a text that help you understand unfamiliar words. Skilled readers use them all the time — instead of stopping to look every word up, they look at the words around it.\n\n**Four types of context clues:**\n\n1. **Definition clue** — the author explains the word directly:\n"Arid, meaning extremely dry, regions often face water shortages."\nThe clue is: meaning extremely dry.\n\n2. **Example clue** — the author gives examples after words like such as or for example:\n"Many resources, such as clean water, food, and shelter, are not shared equally."\nYou can guess resources means things people need.\n\n3. **Contrast clue** — the author shows the opposite using words like but, unlike, or however:\n"Unlike the plentiful rain up north, water was scarce in the desert village."\nPlentiful and scarce are opposites — scarce must mean not plentiful.\n\n4. **Inference clue** — you figure it out from the whole paragraph:\n"Families walked three miles each day. Children missed school to carry jugs. The whole community worried about running out." You can infer the community was facing a water crisis.\n\nContext clues help you keep reading without losing the meaning. The more you practice, the faster you get!`,
        es: `Las pistas del contexto son sugerencias dentro de un texto que te ayudan a entender palabras desconocidas.\n\n**Cuatro tipos de pistas del contexto:**\n\n1. **Pista de definición** — el autor explica la palabra directamente:\n"Arid, que significa extremadamente seco, las regiones a menudo enfrentan escasez de agua."\n\n2. **Pista de ejemplo** — el autor da ejemplos después de palabras como such as o for example:\n"Many resources, such as clean water, food, and shelter, are not shared equally."\n\n3. **Pista de contraste** — el autor muestra el opuesto usando palabras como but, unlike o however:\n"Unlike the plentiful rain up north, water was scarce in the desert village."\n\n4. **Pista de inferencia** — lo deduces del párrafo completo.`,
        ur: `سیاق کے اشارے متن میں وہ نشانیاں ہیں جو انجان الفاظ سمجھنے میں مدد کرتے ہیں۔\n\n**سیاق کے اشاروں کی چار اقسام:**\n\n1. **تعریف کا اشارہ** — مصنف لفظ سیدھا بیان کرے:\n"Arid, meaning extremely dry, regions often face water shortages."\n\n2. **مثال کا اشارہ** — مصنف such as جیسے الفاظ کے بعد مثالیں دے:\n"Many resources, such as clean water, food, and shelter, are not shared equally."\n\n3. **تضاد کا اشارہ** — مصنف but، unlike جیسے الفاظ سے الٹ معنی دکھائے:\n"Unlike the plentiful rain up north, water was scarce in the desert village."\n\n4. **اندازے کا اشارہ** — پورے پیراگراف سے مطلب سمجھو۔`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Read this sentence: Arid, meaning extremely dry, land cannot grow crops easily. What type of context clue is used?",
            es: "Lee esta oración: Arid, meaning extremely dry, land cannot grow crops easily. ¿Qué tipo de pista del contexto se usa?",
            ur: "یہ جملہ پڑھو: Arid, meaning extremely dry, land cannot grow crops easily. کس قسم کا سیاق اشارہ استعمال ہوا؟",
          },
          choices: [
            { en: "Example clue", es: "Pista de ejemplo", ur: "مثال کا اشارہ" },
            { en: "Contrast clue", es: "Pista de contraste", ur: "تضاد کا اشارہ" },
            { en: "Definition clue", es: "Pista de definición", ur: "تعریف کا اشارہ" },
            { en: "Inference clue", es: "Pista de inferencia", ur: "اندازے کا اشارہ" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "Unlike the plentiful rain up north, water was scarce in the desert. What does scarce most likely mean?",
            es: "A diferencia de la abundante lluvia en el norte, el agua escaseaba en el desierto. ¿Qué significa probablemente scarce?",
            ur: "شمال کی بکثرت بارش کے برعکس، صحرا میں پانی scarce تھا۔ scarce کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "very cold", es: "muy frío", ur: "بہت ٹھنڈا" },
            { en: "hard to find, not plentiful", es: "difícil de encontrar, no abundante", ur: "ڈھونڈنا مشکل، بکثرت نہیں" },
            { en: "fast moving", es: "que se mueve rápido", ur: "تیز بہتا ہوا" },
            { en: "clean and safe", es: "limpio y seguro", ur: "صاف اور محفوظ" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Context clues are hints in the surrounding text that help you figure out the meaning of unknown words.",
            es: "Las pistas del contexto son sugerencias en el texto cercano que te ayudan a entender el significado de palabras desconocidas.",
            ur: "سیاق کے اشارے آس پاس کے متن میں وہ نشانیاں ہیں جو انجان الفاظ کا مطلب سمجھنے میں مدد کرتے ہیں۔",
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
            en: "Many resources, such as clean water, food, and shelter, are not shared equally. What does resources most likely mean?",
            es: "Many resources, such as clean water, food, and shelter, are not shared equally. ¿Qué significa probablemente resources?",
            ur: "Many resources, such as clean water, food, and shelter, are not shared equally. resources کا کیا مطلب ہے؟",
          },
          choices: [
            { en: "school subjects", es: "materias escolares", ur: "اسکول کے مضامین" },
            { en: "things people need to live", es: "cosas que la gente necesita para vivir", ur: "وہ چیزیں جن کی لوگوں کو زندگی کے لیے ضرورت ہے" },
            { en: "books in a library", es: "libros en una biblioteca", ur: "لائبریری میں کتابیں" },
            { en: "places to visit", es: "lugares para visitar", ur: "گھومنے کی جگہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "A contrast clue uses words like unlike or but to show the opposite meaning of a word.",
            es: "Una pista de contraste usa palabras como unlike o but para mostrar el significado opuesto de una palabra.",
            ur: "تضاد کا اشارہ unlike یا but جیسے الفاظ استعمال کر کے الٹ مطلب ظاہر کرتا ہے۔",
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
      id: "3-co-1",
      pillar: "comprehension",
      pillarLabel: {
        en: "Comprehension",
        es: "Comprensión",
        ur: "فہم",
      },
      title: {
        en: "Problem & Solution Text",
        es: "Texto de Problema y Solución",
        ur: "مسئلہ اور حل کا متن",
      },
      emoji: "⚡",
      teks: "TEKS 3.9D",
      cambridge: "Cambridge Reading Stage 4",
      vocabulary: [
        {
          id: "text-structure",
          word: "text structure",
          emoji: "🏗️",
          translation: { es: "estructura del texto", ur: "متن کی ساخت" },
          definition: {
            en: "The way an author organizes information in a text",
            es: "La manera en que un autor organiza la información en un texto",
            ur: "وہ طریقہ جس سے مصنف متن میں معلومات ترتیب دیتا ہے",
          },
          exampleSentence: {
            en: "The text structure of this article is problem and solution.",
            es: "La estructura del texto de este artículo es problema y solución.",
            ur: "اس مضمون کی متن کی ساخت مسئلہ اور حل ہے۔",
          },
        },
        {
          id: "problem",
          word: "problem",
          emoji: "❗",
          translation: { es: "problema", ur: "مسئلہ" },
          definition: {
            en: "A difficulty or challenge that needs to be fixed or improved",
            es: "Una dificultad o desafío que necesita arreglarse o mejorarse",
            ur: "ایک مشکل یا چیلنج جسے ٹھیک یا بہتر کرنے کی ضرورت ہو",
          },
          exampleSentence: {
            en: "The problem was that many students at the school did not have enough food on weekends.",
            es: "El problema era que muchos estudiantes de la escuela no tenían suficiente comida los fines de semana.",
            ur: "مسئلہ یہ تھا کہ اسکول کے بہت سے طالب علموں کے پاس ویک اینڈ پر کافی کھانا نہیں تھا۔",
          },
        },
        {
          id: "solution",
          word: "solution",
          emoji: "✅",
          translation: { es: "solución", ur: "حل" },
          definition: {
            en: "An action or plan that fixes or improves a problem",
            es: "Una acción o plan que arregla o mejora un problema",
            ur: "وہ عمل یا منصوبہ جو مسئلے کو ٹھیک یا بہتر کرے",
          },
          exampleSentence: {
            en: "The solution was a weekend backpack program that sent food home with students every Friday.",
            es: "La solución fue un programa de mochila de fin de semana que enviaba comida a casa con los estudiantes cada viernes.",
            ur: "حل یہ تھا کہ ویک اینڈ بیگ پروگرام شروع کیا گیا جو ہر جمعے طالب علموں کے ساتھ کھانا گھر بھیجتا۔",
          },
        },
        {
          id: "evidence",
          word: "evidence",
          emoji: "📊",
          translation: { es: "evidencia", ur: "ثبوت" },
          definition: {
            en: "Facts and details from the text that support an idea",
            es: "Hechos y detalles del texto que apoyan una idea",
            ur: "متن سے حقائق اور تفصیلات جو کسی خیال کی حمایت کریں",
          },
          exampleSentence: {
            en: "Use evidence from the text to support your answer about the solution.",
            es: "Usa evidencia del texto para apoyar tu respuesta sobre la solución.",
            ur: "حل کے بارے میں اپنے جواب کی حمایت کے لیے متن سے ثبوت استعمال کرو۔",
          },
        },
      ],
      lesson: {
        en: `Informational texts are often organized around a problem and its solution. When you recognize this structure, you understand the text much more deeply.\n\n**How to identify problem-solution text:**\n• Look for signal words: problem, issue, challenge, concern, however, as a result, therefore, solved, because of this\n• Ask: What went wrong? What did someone do about it?\n\nRead this passage and find the problem and solution:\n\n*"Many students at Jefferson Elementary arrived at school on Monday without having eaten all weekend. Teachers noticed students were tired and had trouble concentrating. The problem of weekend hunger was real. However, a group of parents and teachers came up with a solution. Every Friday, volunteers packed small backpacks with easy-to-prepare food. Students who needed them could quietly take a backpack home. As a result, students came back to school on Monday ready to learn. The program helped 45 families in its first month."*\n\n**Problem:** Students did not have enough food on weekends.\n**Solution:** A Friday backpack program gave food to students who needed it.\n**Evidence:** 45 families were helped in the first month.\n\nProblem-solution structure appears in almost every news article about social issues. Learning to spot it makes you a critical reader!`,
        es: `Los textos informativos a menudo se organizan en torno a un problema y su solución.\n\n**Cómo identificar texto de problema-solución:**\n• Busca palabras señal: problem, issue, challenge, however, as a result, therefore, solved\n• Pregunta: ¿Qué salió mal? ¿Qué hizo alguien al respecto?\n\nLee este párrafo:\n\n*"Many students at Jefferson Elementary arrived at school on Monday without having eaten all weekend. Teachers noticed students were tired. However, a group of parents and teachers came up with a solution. Every Friday, volunteers packed small backpacks with easy-to-prepare food. As a result, students came back to school on Monday ready to learn. The program helped 45 families in its first month."*\n\n**Problema:** Los estudiantes no tenían suficiente comida los fines de semana.\n**Solución:** Un programa de mochila les daba comida a los estudiantes que la necesitaban.\n**Evidencia:** 45 familias fueron ayudadas en el primer mes.`,
        ur: `معلوماتی متن اکثر ایک مسئلے اور اس کے حل کے گرد ترتیب دیا جاتا ہے۔\n\n**مسئلہ-حل متن کی پہچان:**\n• اشارہ الفاظ تلاش کرو: problem، issue، however، as a result، solved\n• پوچھو: کیا غلط ہوا؟ کسی نے اس کے بارے میں کیا کیا؟\n\nیہ اقتباس پڑھو:\n\n*"Jefferson Elementary کے بہت سے طالب علم پیر کو اسکول آتے لیکن پورے ویک اینڈ میں کچھ نہیں کھایا ہوتا۔ اساتذہ نے محسوس کیا کہ طالب علم تھکے ہوئے ہیں۔ تاہم، والدین اور اساتذہ کے ایک گروہ نے حل نکالا۔ ہر جمعے رضاکار چھوٹے بستوں میں آسان کھانا بھرتے۔ نتیجتاً طالب علم پیر کو سیکھنے کے لیے تیار آتے۔ پروگرام نے پہلے مہینے میں ۴۵ خاندانوں کی مدد کی۔*\n\n**مسئلہ:** طالب علموں کے پاس ویک اینڈ پر کافی کھانا نہیں تھا۔\n**حل:** جمعے کا بستہ پروگرام۔\n**ثبوت:** پہلے مہینے میں ۴۵ خاندان۔`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "In the backpack program passage, what was the main PROBLEM?",
            es: "En el párrafo del programa de mochila, ¿cuál era el PROBLEMA principal?",
            ur: "بستہ پروگرام کے اقتباس میں مرکزی مسئلہ کیا تھا؟",
          },
          choices: [
            { en: "Students forgot their backpacks.", es: "Los estudiantes olvidaban sus mochilas.", ur: "طالب علم اپنے بستے بھول جاتے تھے۔" },
            { en: "Students did not have enough food on weekends.", es: "Los estudiantes no tenían suficiente comida los fines de semana.", ur: "طالب علموں کے پاس ویک اینڈ پر کافی کھانا نہیں تھا۔" },
            { en: "The school ran out of teachers.", es: "La escuela se quedó sin maestros.", ur: "اسکول کے اساتذہ ختم ہو گئے۔" },
            { en: "Students came to school too late.", es: "Los estudiantes llegaban a la escuela muy tarde.", ur: "طالب علم اسکول بہت دیر سے آتے تھے۔" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "What evidence shows that the backpack solution worked?",
            es: "¿Qué evidencia muestra que la solución de la mochila funcionó?",
            ur: "کون سا ثبوت ظاہر کرتا ہے کہ بستے کا حل کامیاب رہا؟",
          },
          choices: [
            { en: "Teachers were less tired.", es: "Los maestros estaban menos cansados.", ur: "اساتذہ کم تھکے ہوئے تھے۔" },
            { en: "45 families were helped in the first month.", es: "45 familias fueron ayudadas en el primer mes.", ur: "پہلے مہینے میں ۴۵ خاندانوں کی مدد ہوئی۔" },
            { en: "The school bought more food.", es: "La escuela compró más comida.", ur: "اسکول نے زیادہ کھانا خریدا۔" },
            { en: "Students got new backpacks.", es: "Los estudiantes obtuvieron mochilas nuevas.", ur: "طالب علموں کو نئے بستے ملے۔" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Words like however and as a result are signal words that help you find problem-solution structure.",
            es: "Palabras como however y as a result son palabras señal que te ayudan a encontrar la estructura problema-solución.",
            ur: "however اور as a result جیسے الفاظ اشارہ الفاظ ہیں جو مسئلہ-حل ساخت تلاش کرنے میں مدد کرتے ہیں۔",
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
            en: "What is text structure?",
            es: "¿Qué es la estructura del texto?",
            ur: "متن کی ساخت کیا ہے؟",
          },
          choices: [
            { en: "The number of paragraphs in a text", es: "El número de párrafos en un texto", ur: "متن میں پیراگرافوں کی تعداد" },
            { en: "The way an author organizes information in a text", es: "La manera en que un autor organiza la información en un texto", ur: "وہ طریقہ جس سے مصنف متن میں معلومات ترتیب دیتا ہے" },
            { en: "The font and size of the words", es: "La fuente y el tamaño de las palabras", ur: "الفاظ کا فونٹ اور سائز" },
            { en: "How long the sentences are", es: "Qué tan largas son las oraciones", ur: "جملے کتنے لمبے ہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "In a problem-solution text, evidence from the text can show whether the solution worked.",
            es: "En un texto de problema-solución, la evidencia del texto puede mostrar si la solución funcionó.",
            ur: "مسئلہ-حل متن میں متن کے ثبوت ظاہر کر سکتے ہیں کہ حل کام آیا یا نہیں۔",
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

export default grade3;
