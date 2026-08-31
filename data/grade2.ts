import { GradeReading } from "./types";

const grade2: GradeReading = {
  grade: 2,
  label: "Grade 2",
  emoji: "🌿",
  color: "#059669",
  units: [
    {
      id: "2-pa-1",
      pillar: "phonemic-awareness",
      pillarLabel: {
        en: "Phonemic Awareness",
        es: "Conciencia Fonémica",
        ur: "آوازوں کی سمجھ",
      },
      title: {
        en: "Blending & Segmenting",
        es: "Mezclar y Segmentar",
        ur: "آوازیں جوڑنا اور الگ کرنا",
      },
      emoji: "🔀",
      teks: "TEKS 2.2A",
      cambridge: "Cambridge Reading Stage 2",
      learningObjective: {
        en: "I am learning to blend and segment sounds so that I can read and spell longer words.",
        es: "Estoy aprendiendo a combinar y separar sonidos para poder leer y escribir palabras más largas.",
        ur: "میں آوازیں ملانا اور الگ کرنا سیکھ رہا ہوں تاکہ لمبے الفاظ پڑھ اور لکھ سکوں۔",
      },
      successCriteria: [
        { en: "I can blend separate sounds together to say a word.", es: "Puedo combinar sonidos separados para decir una palabra.", ur: "میں الگ آوازوں کو ملا کر لفظ بول سکتا ہوں۔" },
        { en: "I can break a word apart into its separate sounds.", es: "Puedo separar una palabra en sus sonidos individuales.", ur: "میں لفظ کو اس کی الگ الگ آوازوں میں توڑ سکتا ہوں۔" },
        { en: "I can count how many sounds are in a word.", es: "Puedo contar cuántos sonidos hay en una palabra.", ur: "میں گن سکتا ہوں کہ لفظ میں کتنی آوازیں ہیں۔" },
      ],
      vocabulary: [
        {
          id: "blend",
          word: "blend",
          emoji: "🔀",
          translation: { es: "mezclar", ur: "ملانا" },
          definition: {
            en: "To push separate sounds together to make a word",
            es: "Unir sonidos separados para formar una palabra",
            ur: "الگ الگ آوازوں کو ملا کر لفظ بنانا",
          },
          exampleSentence: {
            en: "Blend the sounds k, i, n, d together to say kind.",
            es: "Mezcla los sonidos k, i, n, d para decir kind.",
            ur: "kind کہنے کے لیے k, i, n, d آوازیں ملاؤ۔",
          },
        },
        {
          id: "segment",
          word: "segment",
          emoji: "✂️",
          translation: { es: "segmentar", ur: "الگ کرنا" },
          definition: {
            en: "To break a word apart into its individual sounds",
            es: "Separar una palabra en sus sonidos individuales",
            ur: "کسی لفظ کو اس کی الگ الگ آوازوں میں توڑنا",
          },
          exampleSentence: {
            en: "Segment the word help — h, e, l, p — four sounds!",
            es: "Segmenta la palabra help — h, e, l, p — ¡cuatro sonidos!",
            ur: "لفظ help کو الگ کرو — h, e, l, p — چار آوازیں!",
          },
        },
        {
          id: "phoneme",
          word: "phoneme",
          emoji: "🎵",
          translation: { es: "fonema", ur: "صوتی اکائی" },
          definition: {
            en: "The smallest single sound in a word",
            es: "El sonido individual más pequeño en una palabra",
            ur: "کسی لفظ میں سب سے چھوٹی ایک آواز",
          },
          exampleSentence: {
            en: "The word cat has three phonemes: k, aa, t.",
            es: "La palabra cat tiene tres fonemas: k, aa, t.",
            ur: "لفظ cat میں تین صوتی اکائیاں ہیں: k, aa, t۔",
          },
        },
        {
          id: "substitute",
          word: "substitute",
          emoji: "🔄",
          translation: { es: "sustituir", ur: "بدلنا" },
          definition: {
            en: "To swap one sound in a word for a different sound",
            es: "Cambiar un sonido de una palabra por otro sonido diferente",
            ur: "کسی لفظ میں ایک آواز کو دوسری آواز سے بدلنا",
          },
          exampleSentence: {
            en: "Substitute the first sound in kind — change k to m — and you get mind.",
            es: "Sustituye el primer sonido de kind — cambia k por m — y obtienes mind.",
            ur: "kind میں پہلی آواز بدلو — k کو m سے بدلو — تو mind بنتا ہے۔",
          },
        },
      ],
      lesson: {
        en: `Blending and segmenting are two of the most important reading superpowers you can build!\n\n**Blending** means pushing sounds together to read a word.\n• Say each sound slowly: sh... air... ing\n• Now push them together faster: sharing!\n• You just blended the word sharing.\n\n**Segmenting** means breaking a word into its sounds.\n• Say the word: kind\n• Tap a finger for each sound: k — i — n — d\n• Four sounds! You just segmented kind.\n\nPractice with community words:\n• share → sh, air — 2 sounds\n• help → h, e, l, p — 4 sounds\n• give → g, i, v — 3 sounds\n• kind → k, i, n, d — 4 sounds\n\nWhen students in our class sort donated school supplies, they are being kind. Segment the word kind and count with your fingers!`,
        es: `¡Mezclar y segmentar son dos de los superpoderes de lectura más importantes que puedes desarrollar!\n\n**Mezclar** significa unir sonidos para leer una palabra.\n• Di cada sonido despacio: sh... air... ing\n• Ahora únelos más rápido: sharing!\n• ¡Acabas de mezclar la palabra sharing!\n\n**Segmentar** significa separar una palabra en sus sonidos.\n• Di la palabra: kind\n• Toca un dedo por cada sonido: k — i — n — d\n• ¡Cuatro sonidos!\n\nPractica con palabras de la comunidad:\n• share → sh, air — 2 sonidos\n• help → h, e, l, p — 4 sonidos\n• give → g, i, v — 3 sonidos\n• kind → k, i, n, d — 4 sonidos`,
        ur: `ملانا اور الگ کرنا پڑھنے کی دو سب سے اہم طاقتیں ہیں!\n\n**ملانا** کا مطلب ہے آوازوں کو اکٹھا کر کے لفظ پڑھنا۔\n• ہر آواز آہستہ کہو: sh... air... ing\n• اب انہیں تیز تیز ملاؤ: sharing!\n• آپ نے sharing لفظ ملایا!\n\n**الگ کرنا** کا مطلب ہے لفظ کو آوازوں میں توڑنا۔\n• لفظ کہو: kind\n• ہر آواز پر انگلی ٹھونکو: k — i — n — d\n• چار آوازیں!\n\nکمیونٹی الفاظ کے ساتھ مشق کرو:\n• share → sh, air — 2 آوازیں\n• help → h, e, l, p — 4 آوازیں\n• give → g, i, v — 3 آوازیں\n• kind → k, i, n, d — 4 آوازیں`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Blend these sounds: sh + air. What word do you get?",
            es: "Mezcla estos sonidos: sh + air. ¿Qué palabra obtienes?",
            ur: "ان آوازوں کو ملاؤ: sh + air۔ کون سا لفظ بنتا ہے؟",
          },
          choices: [
            { en: "ship", es: "ship", ur: "ship" },
            { en: "share", es: "share", ur: "share" },
            { en: "shop", es: "shop", ur: "shop" },
            { en: "shell", es: "shell", ur: "shell" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "How many phonemes are in the word help?",
            es: "¿Cuántos fonemas tiene la palabra help?",
            ur: "لفظ help میں کتنی صوتی اکائیاں ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "۲" },
            { en: "3", es: "3", ur: "۳" },
            { en: "4", es: "4", ur: "۴" },
            { en: "5", es: "5", ur: "۵" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Segmenting a word means breaking it into its individual sounds.",
            es: "Segmentar una palabra significa separarla en sus sonidos individuales.",
            ur: "کسی لفظ کو الگ کرنے کا مطلب اسے اس کی انفرادی آوازوں میں توڑنا ہے۔",
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
            en: "Segment the word give. How many phonemes does it have?",
            es: "Segmenta la palabra give. ¿Cuántos fonemas tiene?",
            ur: "لفظ give کو الگ کرو۔ اس میں کتنی صوتی اکائیاں ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "۲" },
            { en: "3", es: "3", ur: "۳" },
            { en: "4", es: "4", ur: "۴" },
            { en: "5", es: "5", ur: "۵" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Blending means pushing separate sounds together to read a word.",
            es: "Mezclar significa unir sonidos separados para leer una palabra.",
            ur: "ملانے کا مطلب الگ الگ آوازوں کو اکٹھا کر کے لفظ پڑھنا ہے۔",
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
      id: "2-ph-1",
      pillar: "phonics",
      pillarLabel: {
        en: "Phonics",
        es: "Fonética",
        ur: "حروف اور آوازیں",
      },
      title: {
        en: "Long Vowels & the Magic E",
        es: "Vocales Largas y la E Mágica",
        ur: "لمبی واول آوازیں اور جادوئی E",
      },
      emoji: "✨",
      teks: "TEKS 2.2B",
      cambridge: "Cambridge Reading Stage 2",
      learningObjective: {
        en: "I am learning about long vowels and the magic e so that I can read words where a silent e changes the vowel sound.",
        es: "Estoy aprendiendo las vocales largas y la e mágica para poder leer palabras donde una e silenciosa cambia el sonido de la vocal.",
        ur: "میں لمبے حروفِ علت اور جادوئی e سیکھ رہا ہوں تاکہ ایسے الفاظ پڑھ سکوں جہاں خاموش e حرفِ علت کی آواز بدل دیتا ہے۔",
      },
      successCriteria: [
        { en: "I can read a word with a long vowel sound made by a silent e.", es: "Puedo leer una palabra con un sonido de vocal larga hecho por una e silenciosa.", ur: "میں خاموش e سے بننے والی لمبی حرفِ علت کی آواز والا لفظ پڑھ سکتا ہوں۔" },
        { en: "I can explain how adding e to the end of a word changes its sound.", es: "Puedo explicar cómo agregar una e al final de una palabra cambia su sonido.", ur: "میں وضاحت کر سکتا ہوں کہ لفظ کے آخر میں e شامل کرنے سے اس کی آواز کیسے بدلتی ہے۔" },
        { en: "I can compare a short-vowel word to its magic e partner, like 'cap' and 'cape.'", es: "Puedo comparar una palabra de vocal corta con su pareja de e mágica, como 'cap' y 'cape'.", ur: "میں مختصر حرفِ علت والے لفظ کا جادوئی e والے جوڑے سے موازنہ کر سکتا ہوں، جیسے 'cap' اور 'cape'۔" },
      ],
      vocabulary: [
        {
          id: "long-vowel",
          word: "long vowel",
          emoji: "📢",
          translation: { es: "vocal larga", ur: "لمبی واول" },
          definition: {
            en: "A vowel that says its own name, like the ay in cake or the ee in Pete",
            es: "Una vocal que dice su propio nombre, como la a en cake o la e en Pete",
            ur: "واول جو اپنا نام کہے، جیسے cake میں ay یا Pete میں ee",
          },
          exampleSentence: {
            en: "The word hope has a long o — it says oh, not ahh.",
            es: "La palabra hope tiene una o larga — dice oh, no ahh.",
            ur: "لفظ hope میں لمبی o ہے — یہ oh کہتی ہے، ahh نہیں۔",
          },
        },
        {
          id: "silent-e",
          word: "silent e",
          emoji: "🤫",
          translation: { es: "e silenciosa", ur: "خاموش e" },
          definition: {
            en: "An e at the end of a word that you do not say, but it makes the vowel before it long",
            es: "Una e al final de una palabra que no se pronuncia, pero hace que la vocal anterior sea larga",
            ur: "لفظ کے آخر میں e جسے آپ نہیں بولتے، لیکن یہ پہلی واول کو لمبا کرتی ہے",
          },
          exampleSentence: {
            en: "In the word hope, the e is silent — but it makes the o say oh.",
            es: "En la palabra hope, la e es silenciosa — pero hace que la o diga oh.",
            ur: "لفظ hope میں e خاموش ہے — لیکن یہ o کو oh کہلواتی ہے۔",
          },
        },
        {
          id: "decode",
          word: "decode",
          emoji: "🔓",
          translation: { es: "decodificar", ur: "سمجھ کر پڑھنا" },
          definition: {
            en: "To use letter sounds to figure out how to read a word",
            es: "Usar los sonidos de las letras para descubrir cómo leer una palabra",
            ur: "حروف کی آوازیں استعمال کر کے لفظ پڑھنا سیکھنا",
          },
          exampleSentence: {
            en: "I can decode the word safe by sounding out each letter.",
            es: "Puedo decodificar la palabra safe pronunciando cada letra.",
            ur: "میں ہر حرف کی آواز نکال کر لفظ safe سمجھ کر پڑھ سکتا ہوں۔",
          },
        },
        {
          id: "pattern",
          word: "pattern",
          emoji: "🔁",
          translation: { es: "patrón", ur: "نمونہ" },
          definition: {
            en: "A rule about letters that happens the same way in many words",
            es: "Una regla sobre letras que ocurre de la misma manera en muchas palabras",
            ur: "حروف کے بارے میں ایک اصول جو بہت سے الفاظ میں یکساں طریقے سے ہوتا ہے",
          },
          exampleSentence: {
            en: "The vowel-consonant-e pattern makes the vowel long, like in home and safe.",
            es: "El patrón vocal-consonante-e hace que la vocal sea larga, como en home y safe.",
            ur: "واول-غیر واول-e کا نمونہ واول کو لمبا کرتا ہے، جیسے home اور safe میں۔",
          },
        },
      ],
      lesson: {
        en: `The Magic E rule is one of the most useful phonics patterns in English. When you add a silent e to the end of a short word, the vowel inside the word changes from short to long — it says its own name!\n\nShort to long — watch the magic:\n• hop → hope (short ahh becomes long oh)\n• can → cane (short ahh becomes long ay)\n• pin → pine (short ihh becomes long eye)\n• cut → cute (short uhh becomes long yoo)\n• pet → Pete (short ehh becomes long ee)\n\nRemember: the e at the end is silent — you do not say it!\n\nThink about words that matter in our community:\n• home — everyone deserves a safe home\n• hope — we hope things get better for everyone\n• safe — our school is a safe place for all\n• vote — when you are older, you can vote to make change\n\nAll of these words use the Magic E pattern. Can you find the silent e in each one?`,
        es: `La regla de la E Mágica es uno de los patrones fonéticos más útiles en inglés. Cuando agregas una e silenciosa al final de una palabra corta, la vocal dentro de la palabra cambia de corta a larga.\n\nDe corta a larga — observa la magia:\n• hop → hope (ahh corta se vuelve oh larga)\n• can → cane (ahh corta se vuelve ay larga)\n• pin → pine (ihh corta se vuelve eye larga)\n• cut → cute (uhh corta se vuelve yoo larga)\n• pet → Pete (ehh corta se vuelve ee larga)\n\nRecuerda: ¡la e al final es silenciosa, no la dices!\n\nPiensa en palabras que importan en nuestra comunidad:\n• home — todos merecen un hogar seguro\n• hope — esperamos que las cosas mejoren para todos\n• safe — nuestra escuela es un lugar seguro para todos`,
        ur: `جادوئی E کا اصول انگریزی میں سب سے زیادہ کارآمد صوتیاتی نمونوں میں سے ایک ہے۔ جب آپ کسی چھوٹے لفظ کے آخر میں خاموش e لگاتے ہیں تو اندر کی واول چھوٹی سے لمبی ہو جاتی ہے!\n\nچھوٹی سے لمبی — جادو دیکھو:\n• hop → hope (چھوٹی ahh لمبی oh بن جاتی ہے)\n• can → cane (چھوٹی ahh لمبی ay بن جاتی ہے)\n• pin → pine (چھوٹی ihh لمبی eye بن جاتی ہے)\n• cut → cute (چھوٹی uhh لمبی yoo بن جاتی ہے)\n• pet → Pete (چھوٹی ehh لمبی ee بن جاتی ہے)\n\nیاد رکھو: آخر کی e خاموش ہے — آپ اسے نہیں بولتے!\n\nہماری کمیونٹی میں اہم الفاظ:\n• home — ہر کوئی محفوظ گھر کا حقدار ہے\n• hope — ہمیں امید ہے کہ سب کے لیے حالات بہتر ہوں گے\n• safe — ہمارا اسکول سب کے لیے محفوظ جگہ ہے`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "What happens to the vowel when you add a silent e to the word hop to make hope?",
            es: "¿Qué le pasa a la vocal cuando agregas una e silenciosa a hop para hacer hope?",
            ur: "جب آپ hop میں خاموش e لگا کر hope بناتے ہیں تو واول کا کیا ہوتا ہے؟",
          },
          choices: [
            { en: "It disappears", es: "Desaparece", ur: "غائب ہو جاتی ہے" },
            { en: "It becomes long and says its name", es: "Se vuelve larga y dice su nombre", ur: "لمبی ہو جاتی ہے اور اپنا نام کہتی ہے" },
            { en: "It stays the same", es: "Sigue igual", ur: "وہی رہتی ہے" },
            { en: "It becomes silent too", es: "También se vuelve silenciosa", ur: "وہ بھی خاموش ہو جاتی ہے" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "In the word hope, the e at the end is pronounced out loud.",
            es: "En la palabra hope, la e al final se pronuncia en voz alta.",
            ur: "لفظ hope میں آخر کی e اونچی آواز میں بولی جاتی ہے۔",
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
            en: "Which word uses the Magic E pattern?",
            es: "¿Cuál palabra usa el patrón de la E Mágica?",
            ur: "کون سا لفظ جادوئی E کا نمونہ استعمال کرتا ہے؟",
          },
          choices: [
            { en: "cat", es: "cat", ur: "cat" },
            { en: "run", es: "run", ur: "run" },
            { en: "safe", es: "safe", ur: "safe" },
            { en: "stop", es: "stop", ur: "stop" },
          ],
          correctIndex: 2,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "Add a silent e to the word pin. What new word do you get?",
            es: "Agrega una e silenciosa a la palabra pin. ¿Qué nueva palabra obtienes?",
            ur: "لفظ pin میں خاموش e لگاؤ۔ کون سا نیا لفظ بنتا ہے؟",
          },
          choices: [
            { en: "pane", es: "pane", ur: "pane" },
            { en: "pine", es: "pine", ur: "pine" },
            { en: "pone", es: "pone", ur: "pone" },
            { en: "pune", es: "pune", ur: "pune" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "The word home uses the vowel-consonant-e pattern.",
            es: "La palabra home usa el patrón vocal-consonante-e.",
            ur: "لفظ home واول-غیر واول-e کا نمونہ استعمال کرتا ہے۔",
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
      id: "2-hfw-1",
      pillar: "high-frequency-words",
      pillarLabel: {
        en: "High-Frequency Words",
        es: "Palabras de Alta Frecuencia",
        ur: "زیادہ استعمال ہونے والے الفاظ",
      },
      title: {
        en: "Words You See Every Day",
        es: "Palabras que Ves Todos los Días",
        ur: "الفاظ جو آپ روز دیکھتے ہیں",
      },
      emoji: "⚡",
      teks: "TEKS 2.2 (TBD)",
      cambridge: "TBD",
      learningObjective: {
        en: "I am learning to instantly recognize common high-frequency words so that I can read smoothly instead of sounding out every letter.",
        es: "Estoy aprendiendo a reconocer al instante las palabras comunes de alta frecuencia para poder leer con fluidez en lugar de pronunciar cada letra.",
        ur: "میں عام زیادہ استعمال ہونے والے الفاظ کو فوراً پہچاننا سیکھ رہا ہوں تاکہ ہر حرف کی آواز نکالنے کی بجائے روانی سے پڑھ سکوں۔",
      },
      successCriteria: [
        { en: "I can read this unit's high-frequency words instantly, without sounding them out.", es: "Puedo leer las palabras de alta frecuencia de esta unidad al instante, sin pronunciarlas letra por letra.", ur: "میں اس یونٹ کے زیادہ استعمال ہونے والے الفاظ کو فوراً پڑھ سکتا ہوں، حرف بہ حرف آواز نکالے بغیر۔" },
        { en: "I can use each word correctly in a full sentence.", es: "Puedo usar cada palabra correctamente en una oración completa.", ur: "میں ہر لفظ کو مکمل جملے میں درست طریقے سے استعمال کر سکتا ہوں۔" },
        { en: "I can spot these words quickly inside a longer piece of text.", es: "Puedo detectar estas palabras rápidamente dentro de un texto más largo.", ur: "میں ان الفاظ کو لمبے متن کے اندر تیزی سے تلاش کر سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "because",
          word: "because",
          emoji: "🔗",
          translation: { es: "porque", ur: "کیونکہ" },
          definition: {
            en: "A word we use to explain the reason for something.",
            es: "Una palabra que usamos para explicar la razón de algo.",
            ur: "ایک لفظ جو ہم کسی چیز کی وجہ بتانے کے لیے استعمال کرتے ہیں۔",
          },
          exampleSentence: {
            en: "We stayed inside because it was raining.",
            es: "Nos quedamos adentro porque estaba lloviendo.",
            ur: "ہم اندر رہے کیونکہ بارش ہو رہی تھی۔",
          },
        },
        {
          id: "could",
          word: "could",
          emoji: "🔑",
          translation: { es: "podía / podría", ur: "سکتا تھا" },
          definition: {
            en: "A word that shows something was possible, or asks a question politely.",
            es: "Una palabra que muestra que algo era posible, o hace una pregunta con cortesía.",
            ur: "ایک لفظ جو ظاہر کرتا ہے کہ کچھ ممکن تھا، یا شائستگی سے سوال پوچھتا ہے۔",
          },
          exampleSentence: {
            en: "Could you please pass the pencil?",
            es: "¿Podrías pasarme el lápiz, por favor?",
            ur: "کیا آپ پنسل دے سکتے ہیں؟",
          },
        },
        {
          id: "their",
          word: "their",
          emoji: "👨‍👩‍👧‍👦",
          translation: { es: "su / sus (de ellos)", ur: "ان کا / ان کی" },
          definition: {
            en: "A word that shows something belongs to more than one person.",
            es: "Una palabra que muestra que algo pertenece a más de una persona.",
            ur: "ایک لفظ جو ظاہر کرتا ہے کہ کوئی چیز ایک سے زیادہ لوگوں کی ہے۔",
          },
          exampleSentence: {
            en: "The students packed their backpacks for the trip.",
            es: "Los estudiantes empacaron sus mochilas para el viaje.",
            ur: "طلبہ نے سفر کے لیے اپنے بستے پیک کیے۔",
          },
        },
        {
          id: "would",
          word: "would",
          emoji: "🌀",
          translation: { es: "-ía (querría, iría)", ur: "گا / گی" },
          definition: {
            en: "A word we use to talk about something that might happen, or something that used to happen again and again.",
            es: "Una palabra que usamos para hablar de algo que podría pasar, o algo que solía pasar una y otra vez.",
            ur: "ایک لفظ جو ہم کسی ایسی چیز کے بارے میں بات کرنے کے لیے استعمال کرتے ہیں جو ہو سکتی ہے، یا جو پہلے بار بار ہوتی تھی۔",
          },
          exampleSentence: {
            en: "I would love to visit the zoo this weekend.",
            es: "Me encantaría visitar el zoológico este fin de semana.",
            ur: "مجھے اس ہفتے چڑیا گھر جانا اچھا لگے گا۔",
          },
        },
        {
          id: "which",
          word: "which",
          emoji: "❓",
          translation: { es: "cuál / cuáles", ur: "کونسا" },
          definition: {
            en: "A word we use to ask about or point to one choice among several.",
            es: "Una palabra que usamos para preguntar sobre, o señalar, una opción entre varias.",
            ur: "ایک لفظ جو ہم کئی چیزوں میں سے ایک کے بارے میں پوچھنے یا اشارہ کرنے کے لیے استعمال کرتے ہیں۔",
          },
          exampleSentence: {
            en: "Which book would you like to read first?",
            es: "¿Cuál libro te gustaría leer primero?",
            ur: "آپ پہلے کونسی کتاب پڑھنا پسند کریں گے؟",
          },
        },
        {
          id: "were",
          word: "were",
          emoji: "⏪",
          translation: { es: "eran / estaban", ur: "تھے" },
          definition: {
            en: "The past-tense form of \"are,\" used when talking about more than one person or thing.",
            es: "La forma en pasado de \"are\", usada al hablar de más de una persona o cosa.",
            ur: "\"are\" کی ماضی کی شکل، جو ایک سے زیادہ لوگوں یا چیزوں کے بارے میں بات کرتے وقت استعمال ہوتی ہے۔",
          },
          exampleSentence: {
            en: "The birds were singing in the tree this morning.",
            es: "Los pájaros estaban cantando en el árbol esta mañana.",
            ur: "آج صبح پرندے درخت پر گا رہے تھے۔",
          },
        },
      ],
      lesson: {
        en: `Some words show up again and again in almost everything you read — words like *because*, *could*, and *which*. These are called **high-frequency words**, and some of them don't follow the regular sounding-out rules, so the fastest way to read them is to **recognize the whole word by sight** — like recognizing a friend's face.\n\nHere's the trick: instead of sounding out every letter, look at the whole shape of the word and say it in one quick beat.\n\n• because — one quick word, not b-e-c-a-u-s-e sound by sound\n• could — say it fast, like "kood"\n• their — notice the tricky "ei" — it doesn't sound like it looks!\n\nThe more you see these words in real sentences, the faster you'll recognize them — like how you don't have to think hard to recognize your own name.`,
        es: `Algunas palabras aparecen una y otra vez en casi todo lo que lees — palabras como *because*, *could* y *which*. Se llaman **palabras de alta frecuencia**, y algunas no siguen las reglas normales de sonido, así que la forma más rápida de leerlas es **reconocer la palabra completa a simple vista** — como reconoces la cara de un amigo.\n\nAquí está el truco: en lugar de pronunciar cada letra, mira la forma completa de la palabra y dila de un solo golpe rápido.\n\n• because — una palabra rápida, no letra por letra\n• could — dila rápido, como "kud"\n• their — fíjate en el "ei" complicado — ¡no suena como se ve!\n\nMientras más veces veas estas palabras en oraciones reales, más rápido las reconocerás — como no tienes que pensar mucho para reconocer tu propio nombre.`,
        ur: `کچھ الفاظ تقریباً ہر چیز میں بار بار آتے ہیں جو آپ پڑھتے ہیں — جیسے *because*، *could*، اور *which*۔ انہیں **زیادہ استعمال ہونے والے الفاظ** کہا جاتا ہے، اور ان میں سے کچھ عام آواز کے اصولوں کی پیروی نہیں کرتے، اس لیے انہیں پڑھنے کا تیز ترین طریقہ یہ ہے کہ **پورے لفظ کو دیکھ کر پہچانیں** — جیسے آپ کسی دوست کا چہرہ پہچانتے ہیں۔\n\nیہ رہا نسخہ: ہر حرف کی آواز نکالنے کی بجائے، لفظ کی پوری شکل دیکھیں اور اسے ایک تیز جھٹکے میں بولیں۔\n\n• because — ایک تیز لفظ، حرف بہ حرف نہیں\n• could — اسے تیزی سے بولیں\n• their — مشکل "ei" پر غور کریں — یہ ویسا نہیں بولا جاتا جیسا لکھا جاتا ہے!\n\nجتنی بار آپ یہ الفاظ حقیقی جملوں میں دیکھیں گے، اتنی ہی تیزی سے آپ انہیں پہچانیں گے — جیسے آپ کو اپنا نام پہچاننے کے لیے زیادہ سوچنا نہیں پڑتا۔`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Which word means 'belonging to more than one person'?",
            es: "¿Qué palabra significa 'que pertenece a más de una persona'?",
            ur: "کون سا لفظ 'ایک سے زیادہ لوگوں کا' ظاہر کرتا ہے؟",
          },
          choices: [
            { en: "their", es: "their", ur: "their" },
            { en: "would", es: "would", ur: "would" },
            { en: "which", es: "which", ur: "which" },
            { en: "were", es: "were", ur: "were" },
          ],
          correctIndex: 0,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "We stayed inside ___ it was raining.",
            es: "Nos quedamos adentro ___ estaba lloviendo.",
            ur: "ہم اندر رہے ___ بارش ہو رہی تھی۔",
          },
          choices: [
            { en: "which", es: "which", ur: "which" },
            { en: "because", es: "because", ur: "because" },
            { en: "were", es: "were", ur: "were" },
            { en: "could", es: "could", ur: "could" },
          ],
          correctIndex: 1,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "The word \"could\" can be used to ask a question politely.",
            es: "La palabra \"could\" se puede usar para hacer una pregunta con cortesía.",
            ur: "لفظ \"could\" شائستگی سے سوال پوچھنے کے لیے استعمال ہو سکتا ہے۔",
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
            en: "___ book would you like to read first?",
            es: "¿___ libro te gustaría leer primero?",
            ur: "آپ پہلے ___ کتاب پڑھنا پسند کریں گے؟",
          },
          choices: [
            { en: "Were", es: "Were", ur: "Were" },
            { en: "Which", es: "Which", ur: "Which" },
            { en: "Their", es: "Their", ur: "Their" },
            { en: "Could", es: "Could", ur: "Could" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "High-frequency words should always be sounded out letter by letter.",
            es: "Las palabras de alta frecuencia siempre deben pronunciarse letra por letra.",
            ur: "زیادہ استعمال ہونے والے الفاظ کو ہمیشہ حرف بہ حرف آواز میں پڑھنا چاہیے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "2-fl-1",
      pillar: "fluency",
      pillarLabel: {
        en: "Fluency",
        es: "Fluidez",
        ur: "روانی",
      },
      title: {
        en: "Reading in Phrases",
        es: "Leer en Frases",
        ur: "جملوں میں پڑھنا",
      },
      emoji: "🗣️",
      teks: "TEKS 2.4A",
      cambridge: "Cambridge Reading Stage 2",
      learningObjective: {
        en: "I am learning to read in phrases so that my reading sounds natural instead of word-by-word.",
        es: "Estoy aprendiendo a leer en frases para que mi lectura suene natural en lugar de palabra por palabra.",
        ur: "میں فقروں میں پڑھنا سیکھ رہا ہوں تاکہ میری قرات لفظ بہ لفظ کی بجائے فطری لگے۔",
      },
      successCriteria: [
        { en: "I can group words together into a phrase as I read.", es: "Puedo agrupar palabras en una frase mientras leo.", ur: "میں پڑھتے ہوئے الفاظ کو فقرے میں گروپ کر سکتا ہوں۔" },
        { en: "I can pause at commas and periods.", es: "Puedo hacer una pausa en las comas y los puntos.", ur: "میں کاما اور فل سٹاپ پر رک سکتا ہوں۔" },
        { en: "I can read a sentence at a steady, comfortable pace.", es: "Puedo leer una oración a un ritmo constante y cómodo.", ur: "میں جملہ مستقل اور آرام دہ رفتار سے پڑھ سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "phrase",
          word: "phrase",
          emoji: "💬",
          translation: { es: "frase", ur: "جملہ" },
          definition: {
            en: "A group of words that go together and make sense as a chunk",
            es: "Un grupo de palabras que van juntas y tienen sentido como un bloque",
            ur: "الفاظ کا ایک گروہ جو مل کر سمجھ میں آتا ہو",
          },
          exampleSentence: {
            en: "In the morning is a phrase — it is a time chunk.",
            es: "In the morning es una frase — es un bloque de tiempo.",
            ur: "In the morning ایک جملہ ہے — یہ وقت کا ایک حصہ ہے۔",
          },
        },
        {
          id: "chunk",
          word: "chunk",
          emoji: "🧩",
          translation: { es: "bloque", ur: "ٹکڑا" },
          definition: {
            en: "A small piece of text you read together without stopping",
            es: "Un pedazo pequeño de texto que lees junto sin detenerte",
            ur: "متن کا ایک چھوٹا حصہ جسے آپ بغیر رکے پڑھتے ہیں",
          },
          exampleSentence: {
            en: "Read each chunk of words together, then pause at the comma.",
            es: "Lee cada bloque de palabras juntas, luego haz una pausa en la coma.",
            ur: "الفاظ کا ہر ٹکڑا ساتھ پڑھو، پھر کاما پر رکو۔",
          },
        },
        {
          id: "pace",
          word: "pace",
          emoji: "⏱️",
          translation: { es: "ritmo", ur: "رفتار" },
          definition: {
            en: "How fast or slow you read",
            es: "Qué tan rápido o despacio lees",
            ur: "آپ کتنی تیز یا آہستہ پڑھتے ہیں",
          },
          exampleSentence: {
            en: "A good pace sounds natural — not too fast, not too slow.",
            es: "Un buen ritmo suena natural — ni muy rápido, ni muy lento.",
            ur: "اچھی رفتار قدرتی لگتی ہے — نہ بہت تیز، نہ بہت آہستہ۔",
          },
        },
        {
          id: "phrasing",
          word: "phrasing",
          emoji: "🎼",
          translation: { es: "fraseo", ur: "جملہ بندی" },
          definition: {
            en: "Grouping words together naturally as you read aloud",
            es: "Agrupar palabras naturalmente mientras lees en voz alta",
            ur: "اونچی آواز میں پڑھتے وقت الفاظ کو قدرتی طور پر اکٹھا کرنا",
          },
          exampleSentence: {
            en: "Good phrasing makes your reading sound like natural speech.",
            es: "Un buen fraseo hace que tu lectura suene como el habla natural.",
            ur: "اچھی جملہ بندی آپ کی پڑھائی کو قدرتی گفتگو جیسا بناتی ہے۔",
          },
        },
      ],
      lesson: {
        en: `Fluent readers do not read one word at a time. They group words into phrases — chunks that make sense together. This makes reading sound like talking!\n\nWord-by-word reading sounds choppy:\nWe / helped / our / neighbors / carry / boxes / of / food.\n\nPhrased reading sounds smooth and natural:\nWe helped our neighbors / carry boxes of food.\n\nHow to read in phrases:\n1. Look ahead — read a few words at once with your eyes\n2. Group words that belong together\n3. Pause at punctuation marks like commas and periods\n4. Let your voice show the meaning\n\nPractice this sentence about our school food drive:\n"Every Friday, / our class collects canned food / to help families / in our neighborhood."\n\nRead it twice. The second time, group the words between the slashes together. Notice how much more natural it sounds!`,
        es: `Los lectores fluidos no leen una palabra a la vez. Agrupan las palabras en frases — bloques que tienen sentido juntos. ¡Esto hace que la lectura suene como hablar!\n\nLeer palabra por palabra suena entrecortado:\nWe / helped / our / neighbors / carry / boxes / of / food.\n\nLeer en frases suena suave y natural:\nWe helped our neighbors / carry boxes of food.\n\nCómo leer en frases:\n1. Mira adelante — lee varias palabras a la vez con los ojos\n2. Agrupa las palabras que van juntas\n3. Haz una pausa en los signos de puntuación como comas y puntos\n4. Deja que tu voz muestre el significado`,
        ur: `روانی سے پڑھنے والے ایک وقت میں ایک لفظ نہیں پڑھتے۔ وہ الفاظ کو جملوں میں گروہ بناتے ہیں — ایسے حصے جو ساتھ میں سمجھ میں آتے ہیں۔ یہ پڑھنے کو بولنے جیسا بناتا ہے!\n\nلفظ لفظ پڑھنا ٹوٹا ہوا لگتا ہے:\nWe / helped / our / neighbors / carry / boxes / of / food.\n\nجملوں میں پڑھنا ہموار اور قدرتی لگتا ہے:\nWe helped our neighbors / carry boxes of food.\n\nجملوں میں پڑھنے کا طریقہ:\n1. آگے دیکھو — آنکھوں سے ایک ساتھ کچھ الفاظ پڑھو\n2. ساتھ آنے والے الفاظ کو اکٹھا کرو\n3. کاما اور نقطے جیسے اوقاف پر رکو\n4. اپنی آواز سے مطلب ظاہر کرو`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Which version of this sentence uses good phrasing?",
            es: "¿Cuál versión de esta oración usa un buen fraseo?",
            ur: "اس جملے کا کون سا ورژن اچھی جملہ بندی استعمال کرتا ہے؟",
          },
          choices: [
            { en: "Our / class / helps / every / week.", es: "Our / class / helps / every / week.", ur: "Our / class / helps / every / week." },
            { en: "Our class helps / every week.", es: "Our class helps / every week.", ur: "Our class helps / every week." },
            { en: "Ourclasshelpseveryweek.", es: "Ourclasshelpseveryweek.", ur: "Ourclasshelpseveryweek." },
            { en: "Our class helps every…week.", es: "Our class helps every…week.", ur: "Our class helps every…week." },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "true-false",
          prompt: {
            en: "Fluent readers should pause at commas and periods when they read.",
            es: "Los lectores fluidos deben hacer una pausa en las comas y los puntos cuando leen.",
            ur: "روانی سے پڑھنے والوں کو پڑھتے وقت کاما اور نقطوں پر رکنا چاہیے۔",
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
            en: "Why do good readers group words into phrases?",
            es: "¿Por qué los buenos lectores agrupan las palabras en frases?",
            ur: "اچھے پڑھنے والے الفاظ کو جملوں میں کیوں گروہ کرتے ہیں؟",
          },
          choices: [
            { en: "To read faster and skip words", es: "Para leer más rápido y saltarse palabras", ur: "تیز پڑھنے اور الفاظ چھوڑنے کے لیے" },
            { en: "To make reading sound natural and easier to understand", es: "Para que la lectura suene natural y sea más fácil de entender", ur: "پڑھنے کو قدرتی اور سمجھنے میں آسان بنانے کے لیے" },
            { en: "To show off to the teacher", es: "Para impresionar al maestro", ur: "استاد کو متاثر کرنے کے لیے" },
            { en: "To read every word separately", es: "Para leer cada palabra por separado", ur: "ہر لفظ الگ الگ پڑھنے کے لیے" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "q1",
          type: "multiple-choice",
          prompt: {
            en: "What is a phrase?",
            es: "¿Qué es una frase?",
            ur: "جملہ کیا ہے؟",
          },
          choices: [
            { en: "A single word", es: "Una sola palabra", ur: "ایک اکیلا لفظ" },
            { en: "A group of words that go together and make sense as a chunk", es: "Un grupo de palabras que van juntas y tienen sentido como un bloque", ur: "الفاظ کا ایک گروہ جو مل کر سمجھ میں آتا ہو" },
            { en: "A full paragraph", es: "Un párrafo completo", ur: "ایک پورا پیراگراف" },
            { en: "A rhyming pair", es: "Un par que rima", ur: "ہم قافیہ جوڑا" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Reading word by word makes your reading sound natural and fluent.",
            es: "Leer palabra por palabra hace que tu lectura suene natural y fluida.",
            ur: "لفظ لفظ پڑھنا آپ کی پڑھائی کو قدرتی اور روانی والا بناتا ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "2-vo-1",
      pillar: "vocabulary",
      pillarLabel: {
        en: "Vocabulary",
        es: "Vocabulario",
        ur: "الفاظ کا ذخیرہ",
      },
      title: {
        en: "Synonyms & Antonyms",
        es: "Sinónimos y Antónimos",
        ur: "ہم معنی اور متضاد الفاظ",
      },
      emoji: "🔄",
      teks: "TEKS 2.7A",
      cambridge: "Cambridge Reading Stage 2",
      learningObjective: {
        en: "I am learning synonyms and antonyms so that I can find words that mean the same or the opposite.",
        es: "Estoy aprendiendo sinónimos y antónimos para poder encontrar palabras que significan lo mismo o lo opuesto.",
        ur: "میں مترادفات اور متضادات سیکھ رہا ہوں تاکہ ایک جیسے یا مخالف معنی والے الفاظ تلاش کر سکوں۔",
      },
      successCriteria: [
        { en: "I can name a synonym for a given word.", es: "Puedo nombrar un sinónimo de una palabra dada.", ur: "میں دیے گئے لفظ کا مترادف بتا سکتا ہوں۔" },
        { en: "I can name an antonym for a given word.", es: "Puedo nombrar un antónimo de una palabra dada.", ur: "میں دیے گئے لفظ کا متضاد بتا سکتا ہوں۔" },
        { en: "I can explain the difference between a synonym and an antonym.", es: "Puedo explicar la diferencia entre un sinónimo y un antónimo.", ur: "میں مترادف اور متضاد کا فرق بتا سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "synonym",
          word: "synonym",
          emoji: "🟰",
          translation: { es: "sinónimo", ur: "ہم معنی لفظ" },
          definition: {
            en: "A word that means the same or almost the same as another word",
            es: "Una palabra que significa lo mismo o casi lo mismo que otra palabra",
            ur: "وہ لفظ جس کا مطلب کسی دوسرے لفظ جیسا یا تقریباً جیسا ہو",
          },
          exampleSentence: {
            en: "Kind and caring are synonyms — they both describe a helpful person.",
            es: "Kind y caring son sinónimos — las dos describen a una persona servicial.",
            ur: "Kind اور caring ہم معنی الفاظ ہیں — دونوں مددگار شخص کو بیان کرتے ہیں۔",
          },
        },
        {
          id: "antonym",
          word: "antonym",
          emoji: "↔️",
          translation: { es: "antónimo", ur: "متضاد لفظ" },
          definition: {
            en: "A word that means the opposite of another word",
            es: "Una palabra que significa lo contrario de otra palabra",
            ur: "وہ لفظ جو کسی دوسرے لفظ کا الٹ مطلب رکھتا ہو",
          },
          exampleSentence: {
            en: "Fair and unfair are antonyms — they mean opposite things.",
            es: "Fair y unfair son antónimos — significan cosas opuestas.",
            ur: "Fair اور unfair متضاد الفاظ ہیں — ان کے الٹ مطلب ہیں۔",
          },
        },
        {
          id: "context",
          word: "context",
          emoji: "📌",
          translation: { es: "contexto", ur: "سیاق" },
          definition: {
            en: "The words around an unknown word that help you figure out its meaning",
            es: "Las palabras alrededor de una palabra desconocida que te ayudan a entender su significado",
            ur: "کسی انجان لفظ کے آس پاس کے الفاظ جو اس کا مطلب سمجھنے میں مدد کرتے ہیں",
          },
          exampleSentence: {
            en: "Use context clues to figure out what a new word means.",
            es: "Usa las pistas de contexto para entender el significado de una palabra nueva.",
            ur: "نئے لفظ کا مطلب سمجھنے کے لیے سیاق کے اشارے استعمال کرو۔",
          },
        },
        {
          id: "thesaurus",
          word: "thesaurus",
          emoji: "📚",
          translation: { es: "tesauro", ur: "مترادف لغت" },
          definition: {
            en: "A book or tool that lists synonyms and antonyms for words",
            es: "Un libro o herramienta que enumera sinónimos y antónimos de las palabras",
            ur: "ایک کتاب یا ٹول جو الفاظ کے ہم معنی اور متضاد الفاظ کی فہرست دیتا ہے",
          },
          exampleSentence: {
            en: "I used a thesaurus to find a synonym for the word help.",
            es: "Usé un tesauro para encontrar un sinónimo de la palabra help.",
            ur: "میں نے لفظ help کا ہم معنی لفظ تلاش کرنے کے لیے مترادف لغت استعمال کی۔",
          },
        },
      ],
      lesson: {
        en: `Knowing synonyms and antonyms makes your reading and writing much stronger. When you understand that two words mean the same thing — or the opposite — you can understand text better and use more interesting words!\n\n**Synonyms** — words that mean the same:\n• kind = caring = generous\n• help = assist = support\n• fair = just = equal\n• brave = courageous = bold\n\n**Antonyms** — words that mean the opposite:\n• kind vs. cruel\n• fair vs. unfair\n• give vs. take\n• include vs. exclude\n\nThink about our community values. We want to be kind — not cruel. We believe in fairness — not unfairness. We include everyone — we do not exclude anyone.\n\nWhen you see an unfamiliar word while reading, look at the words around it. The context often gives you a clue. If the sentence says something like "She was generous — she always gave her lunch to others," you can guess that generous is a synonym for giving and kind.`,
        es: `¡Conocer sinónimos y antónimos hace que tu lectura y escritura sean mucho más fuertes!\n\n**Sinónimos** — palabras que significan lo mismo:\n• kind = caring = generous\n• help = assist = support\n• fair = just = equal\n• brave = courageous = bold\n\n**Antónimos** — palabras que significan lo contrario:\n• kind vs. cruel\n• fair vs. unfair\n• give vs. take\n• include vs. exclude\n\nPiensa en los valores de nuestra comunidad. Queremos ser amables — no crueles. Creemos en la equidad — no en la injusticia. Incluimos a todos — no excluimos a nadie.\n\nCuando veas una palabra desconocida, mira las palabras a su alrededor. El contexto a menudo te da una pista.`,
        ur: `ہم معنی اور متضاد الفاظ جاننے سے آپ کی پڑھنے اور لکھنے کی صلاحیت بہت بہتر ہوتی ہے!\n\n**ہم معنی الفاظ** — جن کا مطلب ایک جیسا ہو:\n• kind = caring = generous\n• help = assist = support\n• fair = just = equal\n• brave = courageous = bold\n\n**متضاد الفاظ** — جن کا مطلب الٹ ہو:\n• kind بمقابلہ cruel\n• fair بمقابلہ unfair\n• give بمقابلہ take\n• include بمقابلہ exclude\n\nہماری کمیونٹی کی اقدار کے بارے میں سوچیں۔ ہم مہربان بننا چاہتے ہیں — ظالم نہیں۔ ہم انصاف میں یقین رکھتے ہیں — ناانصافی میں نہیں۔ ہم سب کو شامل کرتے ہیں — کسی کو باہر نہیں کرتے۔`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "Which word is a synonym for kind?",
            es: "¿Cuál palabra es un sinónimo de kind?",
            ur: "کون سا لفظ kind کا ہم معنی ہے؟",
          },
          choices: [
            { en: "cruel", es: "cruel", ur: "cruel" },
            { en: "caring", es: "caring", ur: "caring" },
            { en: "unfair", es: "unfair", ur: "unfair" },
            { en: "take", es: "take", ur: "take" },
          ],
          correctIndex: 1,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "Which word is an antonym for fair?",
            es: "¿Cuál palabra es un antónimo de fair?",
            ur: "کون سا لفظ fair کا متضاد ہے؟",
          },
          choices: [
            { en: "just", es: "just", ur: "just" },
            { en: "equal", es: "equal", ur: "equal" },
            { en: "unfair", es: "unfair", ur: "unfair" },
            { en: "right", es: "right", ur: "right" },
          ],
          correctIndex: 2,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Help and assist are synonyms because they mean the same thing.",
            es: "Help y assist son sinónimos porque significan lo mismo.",
            ur: "Help اور assist ہم معنی الفاظ ہیں کیونکہ ان کا مطلب ایک ہی ہے۔",
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
            en: "What is a thesaurus used for?",
            es: "¿Para qué se usa un tesauro?",
            ur: "مترادف لغت کس لیے استعمال ہوتی ہے؟",
          },
          choices: [
            { en: "To look up how to spell a word", es: "Para ver cómo se escribe una palabra", ur: "کسی لفظ کی ہجے دیکھنے کے لیے" },
            { en: "To find synonyms and antonyms for a word", es: "Para encontrar sinónimos y antónimos de una palabra", ur: "کسی لفظ کے ہم معنی اور متضاد الفاظ تلاش کرنے کے لیے" },
            { en: "To find the definition of a word", es: "Para encontrar la definición de una palabra", ur: "کسی لفظ کی تعریف تلاش کرنے کے لیے" },
            { en: "To translate a word to another language", es: "Para traducir una palabra a otro idioma", ur: "کسی لفظ کا دوسری زبان میں ترجمہ کرنے کے لیے" },
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "Give and take are antonyms because they have opposite meanings.",
            es: "Give y take son antónimos porque tienen significados opuestos.",
            ur: "Give اور take متضاد الفاظ ہیں کیونکہ ان کے الٹ مطلب ہیں۔",
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
      id: "2-co-1",
      pillar: "comprehension",
      pillarLabel: {
        en: "Comprehension",
        es: "Comprensión",
        ur: "فہم",
      },
      title: {
        en: "Story Sequencing",
        es: "Secuencia del Cuento",
        ur: "کہانی کی ترتیب",
      },
      emoji: "📋",
      teks: "TEKS 2.9D",
      cambridge: "Cambridge Reading Stage 3",
      learningObjective: {
        en: "I am learning to sequence a story so that I can tell what happened first, next, and last.",
        es: "Estoy aprendiendo a secuenciar una historia para poder decir qué pasó primero, después y al final.",
        ur: "میں کہانی کی ترتیب سیکھ رہا ہوں تاکہ بتا سکوں پہلے، بعد میں، اور آخر میں کیا ہوا۔",
      },
      successCriteria: [
        { en: "I can put story events in the correct order.", es: "Puedo poner los eventos de una historia en el orden correcto.", ur: "میں کہانی کے واقعات کو درست ترتیب میں رکھ سکتا ہوں۔" },
        { en: "I can use words like first, next, and last to retell a story.", es: "Puedo usar palabras como primero, después y al final para volver a contar una historia.", ur: "میں کہانی دوبارہ سنانے کے لیے پہلے، بعد میں، اور آخر میں جیسے الفاظ استعمال کر سکتا ہوں۔" },
        { en: "I can tell what happened before or after a specific event in a story.", es: "Puedo decir qué pasó antes o después de un evento específico en una historia.", ur: "میں بتا سکتا ہوں کہ کہانی کے کسی خاص واقعے سے پہلے یا بعد میں کیا ہوا۔" },
      ],
      vocabulary: [
        {
          id: "sequence",
          word: "sequence",
          emoji: "1️⃣",
          translation: { es: "secuencia", ur: "ترتیب" },
          definition: {
            en: "The order in which events happen — what comes first, next, and last",
            es: "El orden en que ocurren los eventos — qué viene primero, después y al final",
            ur: "وہ ترتیب جس میں واقعات ہوتے ہیں — پہلے، پھر اور آخر میں کیا آتا ہے",
          },
          exampleSentence: {
            en: "The sequence of the story was: plant the seeds, water them, then harvest the vegetables.",
            es: "La secuencia del cuento fue: plantar las semillas, regarlas y luego cosechar las verduras.",
            ur: "کہانی کی ترتیب یہ تھی: بیج بوئے، پانی دیا، پھر سبزیاں کاٹیں۔",
          },
        },
        {
          id: "signal-word",
          word: "signal word",
          emoji: "🚦",
          translation: { es: "palabra señal", ur: "اشارہ لفظ" },
          definition: {
            en: "A word like first, then, next, or finally that tells you the order of events",
            es: "Una palabra como first, then, next o finally que te dice el orden de los eventos",
            ur: "لفظ جیسے first، then، next یا finally جو واقعات کی ترتیب بتاتا ہے",
          },
          exampleSentence: {
            en: "Signal words like first and then help you understand the order of a story.",
            es: "Las palabras señal como first y then te ayudan a entender el orden de un cuento.",
            ur: "اشارہ الفاظ جیسے first اور then کہانی کی ترتیب سمجھنے میں مدد کرتے ہیں۔",
          },
        },
        {
          id: "event",
          word: "event",
          emoji: "📅",
          translation: { es: "evento", ur: "واقعہ" },
          definition: {
            en: "Something that happens in a story",
            es: "Algo que ocurre en un cuento",
            ur: "کہانی میں کچھ ایسا جو ہو",
          },
          exampleSentence: {
            en: "One important event was when the students planted the first seeds in the garden.",
            es: "Un evento importante fue cuando los estudiantes plantaron las primeras semillas en el jardín.",
            ur: "ایک اہم واقعہ یہ تھا جب طالب علموں نے باغ میں پہلے بیج بوئے۔",
          },
        },
        {
          id: "plot",
          word: "plot",
          emoji: "🗺️",
          translation: { es: "trama", ur: "کہانی کا خاکہ" },
          definition: {
            en: "The series of events that make up a story from beginning to end",
            es: "La serie de eventos que forman un cuento de principio a fin",
            ur: "واقعات کا سلسلہ جو شروع سے آخر تک کہانی بناتا ہے",
          },
          exampleSentence: {
            en: "The plot of the story showed how the class turned an empty lot into a garden.",
            es: "La trama del cuento mostró cómo la clase convirtió un lote vacío en un jardín.",
            ur: "کہانی کا خاکہ دکھاتا ہے کہ کلاس نے ایک خالی جگہ کو باغ میں کیسے بدلا۔",
          },
        },
      ],
      lesson: {
        en: `When we understand the sequence of a story, we understand how events connect and lead to each other. Good readers ask: what happened first? What happened next? How did the story end?\n\n**Signal words tell you the sequence:**\n• First — the beginning of a story or step\n• Then / Next — what happened after\n• After that — another step following\n• Finally / Last — the end or result\n\nRead this short story and notice the signal words:\n\n*First, our class noticed that many families in our neighborhood did not have fresh vegetables. Then, we decided to start a school garden. Next, we planted tomatoes, peppers, and herbs in big pots outside our classroom. After that, we watered and cared for the plants every day. Finally, we harvested the vegetables and gave bags of fresh produce to ten families in our community.*\n\nThe sequence was: notice a need → start a garden → plant → care for plants → harvest → share with families.\n\nCan you retell the story in order using the signal words?`,
        es: `Cuando entendemos la secuencia de un cuento, entendemos cómo los eventos se conectan entre sí.\n\n**Las palabras señal te dicen la secuencia:**\n• First — el comienzo de un cuento o paso\n• Then / Next — lo que pasó después\n• After that — otro paso a continuación\n• Finally / Last — el final o resultado\n\nLee este cuento corto y observa las palabras señal:\n\n*First, nuestra clase notó que muchas familias en nuestro vecindario no tenían verduras frescas. Then, decidimos empezar un jardín escolar. Next, plantamos tomates, pimientos y hierbas en macetas grandes fuera de nuestra clase. After that, regamos y cuidamos las plantas todos los días. Finally, cosechamos las verduras y les dimos bolsas de productos frescos a diez familias en nuestra comunidad.*`,
        ur: `جب ہم کہانی کی ترتیب سمجھتے ہیں تو ہم سمجھتے ہیں کہ واقعات کس طرح آپس میں جڑے ہیں۔\n\n**اشارہ الفاظ ترتیب بتاتے ہیں:**\n• First — کہانی یا قدم کا آغاز\n• Then / Next — اس کے بعد کیا ہوا\n• After that — اگلا قدم\n• Finally / Last — انجام یا نتیجہ\n\nیہ مختصر کہانی پڑھیں اور اشارہ الفاظ نوٹ کریں:\n\n*First، ہماری کلاس نے محسوس کیا کہ ہمارے محلے کے بہت سے خاندانوں کے پاس تازہ سبزیاں نہیں ہیں۔ Then، ہم نے اسکول کا باغ شروع کرنے کا فیصلہ کیا۔ Next، ہم نے ٹماٹر، مرچ اور جڑی بوٹیاں باہر بڑے گملوں میں لگائیں۔ After that، ہم نے ہر روز پودوں کو پانی دیا اور ان کی دیکھ بھال کی۔ Finally، ہم نے سبزیاں کاٹیں اور اپنی کمیونٹی کے دس خاندانوں کو تازہ پیداوار کی تھیلیاں دیں۔*`,
      },
      exercises: [
        {
          id: "e1",
          type: "multiple-choice",
          prompt: {
            en: "In the garden story, what happened FIRST?",
            es: "En el cuento del jardín, ¿qué pasó PRIMERO?",
            ur: "باغ کی کہانی میں سب سے پہلے کیا ہوا؟",
          },
          choices: [
            { en: "They harvested the vegetables.", es: "Cosecharon las verduras.", ur: "انہوں نے سبزیاں کاٹیں۔" },
            { en: "They planted tomatoes and peppers.", es: "Plantaron tomates y pimientos.", ur: "انہوں نے ٹماٹر اور مرچ لگائے۔" },
            { en: "The class noticed families did not have fresh vegetables.", es: "La clase notó que las familias no tenían verduras frescas.", ur: "کلاس نے محسوس کیا کہ خاندانوں کے پاس تازہ سبزیاں نہیں ہیں۔" },
            { en: "They gave bags of produce to families.", es: "Le dieron bolsas de productos a las familias.", ur: "انہوں نے خاندانوں کو پیداوار کی تھیلیاں دیں۔" },
          ],
          correctIndex: 2,
        },
        {
          id: "e2",
          type: "multiple-choice",
          prompt: {
            en: "Which signal word tells you the LAST event in a sequence?",
            es: "¿Cuál palabra señal te dice el ÚLTIMO evento en una secuencia?",
            ur: "کون سا اشارہ لفظ ترتیب میں آخری واقعہ بتاتا ہے؟",
          },
          choices: [
            { en: "First", es: "First", ur: "First" },
            { en: "Then", es: "Then", ur: "Then" },
            { en: "Next", es: "Next", ur: "Next" },
            { en: "Finally", es: "Finally", ur: "Finally" },
          ],
          correctIndex: 3,
        },
        {
          id: "e3",
          type: "true-false",
          prompt: {
            en: "Signal words like first, then, and finally help readers understand the order of events.",
            es: "Las palabras señal como first, then y finally ayudan a los lectores a entender el orden de los eventos.",
            ur: "اشارہ الفاظ جیسے first، then اور finally قارئین کو واقعات کی ترتیب سمجھنے میں مدد کرتے ہیں۔",
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
            en: "What is the LAST thing that happened in the garden story?",
            es: "¿Cuál es el ÚLTIMO suceso del cuento del jardín?",
            ur: "باغ کی کہانی میں سب سے آخر میں کیا ہوا؟",
          },
          choices: [
            { en: "They started planning the garden.", es: "Empezaron a planificar el jardín.", ur: "انہوں نے باغ کی منصوبہ بندی شروع کی۔" },
            { en: "They watered the plants every day.", es: "Regaron las plantas todos los días.", ur: "انہوں نے ہر روز پودوں کو پانی دیا۔" },
            { en: "They gave fresh vegetables to ten families.", es: "Le dieron verduras frescas a diez familias.", ur: "انہوں نے دس خاندانوں کو تازہ سبزیاں دیں۔" },
            { en: "They planted tomatoes.", es: "Plantaron tomates.", ur: "انہوں نے ٹماٹر لگائے۔" },
          ],
          correctIndex: 2,
        },
        {
          id: "q2",
          type: "true-false",
          prompt: {
            en: "The plot of a story is the series of events from beginning to end.",
            es: "La trama de un cuento es la serie de eventos de principio a fin.",
            ur: "کہانی کا خاکہ شروع سے آخر تک واقعات کا سلسلہ ہے۔",
          },
          choices: [
            { en: "True", es: "Verdadero", ur: "سچ" },
            { en: "False", es: "Falso", ur: "غلط" },
          ],
          correctIndex: 0,
        },
      ],
      creativePrompt: {
        promptType: "story",
        title: {
          en: "Write Your Own Story",
          es: "Escribe tu Propio Cuento",
          ur: "اپنی کہانی لکھو",
        },
        instructions: {
          en: "Every good story has a beginning, a middle, and an end. Write or tell a grown-up your own short story with all three parts — it can be about anything you like! Try using the words first, then, and in the end to keep your parts in order.",
          es: "Todo buen cuento tiene un principio, un medio y un final. Escribe o cuéntale a un adulto tu propio cuento corto con las tres partes — ¡puede ser sobre lo que quieras! Intenta usar las palabras primero, luego, y al final para mantener tus partes en orden.",
          ur: "ہر اچھی کہانی کی ایک شروعات، درمیان، اور اختتام ہوتا ہے۔ کسی بڑے کو اپنی مختصر کہانی لکھ کر دکھاؤ یا سناؤ جس میں تینوں حصے ہوں — یہ کسی بھی چیز کے بارے میں ہو سکتی ہے! اپنے حصوں کو ترتیب میں رکھنے کے لیے پہلے، پھر، اور آخر میں جیسے الفاظ استعمال کرنے کی کوشش کرو۔",
        },
      },
    },
  ],
};

export default grade2;
