import type { CardInput } from '$lib/types';

/**
 * LESSON 1: Erste Schritte - First Steps in French
 *
 * Learning Objectives:
 * - Master the French alphabet and basic pronunciation
 * - Learn personal pronouns and their usage
 * - Conjugate and use "être" (to be) in present tense
 * - Handle basic greetings and introductions
 * - Count from 1-10
 *
 * Target Audience: German-speaking absolute beginners (A1)
 */

// ============================================================================
// PART 1: TEACHING CONTENT - PRONUNCIATION GUIDE
// ============================================================================

export const pronunciationGuide = {
  title: 'Aussprache-Grundlagen',
  sections: [
    {
      id: 'alphabet',
      title: 'Das französische Alphabet',
      content: `
Das französische Alphabet hat 26 Buchstaben wie das Deutsche, aber die Aussprache ist oft sehr unterschiedlich.

**Besonders wichtige Unterschiede:**

- **H**: Immer stumm! "homme" = [ɔm] (wie "om")
- **J**: Wird wie "sch" ausgesprochen: "je" = [ʒə] (wie in "Journal")
- **R**: Das französische R kommt aus dem Rachen (wie beim Gurgeln)
- **U**: Ein sehr charakteristischer Laut! Sag "i" und spitze die Lippen wie bei "u"

**Die Vokale:**
- a = ähnlich wie deutsches "a"
- e = oft stumm am Wortende, sonst wie "ö" oder "e"
- i = wie deutsches "i"
- o = wie deutsches "o"
- u = ACHTUNG! Wie deutsches "ü" (Zunge nach vorne!)
      `,
      examples: [
        { word: 'tu', pronunciation: '[ty]', comparison: 'Wie "tü" im Deutschen' },
        { word: 'rue', pronunciation: '[ʁy]', comparison: 'Wie "rü" im Deutschen' }
      ]
    },
    {
      id: 'nasal-vowels',
      title: 'Nasalvokale - Eine französische Besonderheit',
      content: `
Im Französischen gibt es Nasalvokale - Vokale, die durch die Nase gesprochen werden.
Dies ist DIE charakteristische Eigenschaft der französischen Aussprache!

**Die vier Nasalvokale:**

1. **-an/-en**: [ɑ̃] - wie "an" mit Nase
   Beispiele: "dans" (in), "vent" (Wind), "comment" (wie)

2. **-on**: [ɔ̃] - wie "on" mit Nase
   Beispiele: "bon" (gut), "nom" (Name), "sont" (sind)

3. **-in/-ain/-ein**: [ɛ̃] - wie "än" mit Nase
   Beispiele: "vin" (Wein), "pain" (Brot), "plein" (voll)

4. **-un**: [œ̃] - wie "ön" mit Nase
   Beispiel: "un" (ein)

**Wichtige Regel:** Der Nasenvokal verschwindet, wenn ein weiterer Vokal oder "n/m" folgt!
- "bon" [bɔ̃] (gut) → "bonne" [bɔn] (gut, feminin) - KEIN Nasalvokal mehr!
      `,
      tips: [
        'Halte dir kurz die Nase zu beim Üben - du solltest spüren, wie die Luft durch die Nase will',
        'Diese Laute existieren nicht im Deutschen - sie brauchen Übung!'
      ]
    },
    {
      id: 'silent-letters',
      title: 'Stumme Buchstaben',
      content: `
Im Französischen werden viele Buchstaben am Wortende NICHT ausgesprochen.

**Grundregel:** Konsonanten am Wortende sind meistens stumm.

**Ausnahmen (werden ausgesprochen): C-R-F-L** (Merksatz: "CaReFuL")

Beispiele:
- "petit" → sprich: [pəti] (das -t ist stumm)
- "vous" → sprich: [vu] (das -s ist stumm)
- "comment" → sprich: [kɔmɑ̃] (das -ent ist stumm)

ABER:
- "avec" → sprich: [avɛk] (C wird gesprochen - CaReFuL!)
- "sur" → sprich: [syʁ] (R wird gesprochen)
- "neuf" → sprich: [nœf] (F wird gesprochen)

**Stummes -e am Ende:**
Das -e am Wortende wird fast NIE gesprochen:
- "je parle" → [ʒə paʁl] (das -e ist stumm)
- "grande" → [gʁɑ̃d] (das -e ist stumm)
      `
    },
    {
      id: 'french-r',
      title: 'Das französische R',
      content: `
Das französische R ist für Deutsche eine Herausforderung!

**Wie macht man es?**
1. Sag "ach" (wie in "Achtung")
2. Spüre, wo dein Gaumen vibriert
3. Das ist die Stelle für das französische R!

**Es ist NICHT:**
- ❌ Das deutsche Zungenspitzen-R
- ❌ Das englische R

**Es ist:**
- ✅ Ein Rachenkonsonant (wie beim Gurgeln)
- ✅ Ähnlich wie das deutsche "ch" in "ach", aber stimmhaft

**Übungswörter:**
- "rue" (Straße) - [ʁy]
- "rouge" (rot) - [ʁuʒ]
- "merci" (danke) - [mɛʁsi]

**Tipp:** Es wird mit der Zeit natürlicher. Viele Anfänger übertreiben es - es sollte nicht ZU guttural klingen!
      `
    }
  ]
};

// ============================================================================
// PART 2: GRAMMAR - PERSONAL PRONOUNS
// ============================================================================

export const personalPronouns = {
  title: 'Personalpronomen - Personal Pronouns',

  introduction: `
Die französischen Personalpronomen sind dem Deutschen sehr ähnlich - aber es gibt wichtige Unterschiede!
  `,

  comparison: {
    title: 'Vergleich: Französisch vs. Deutsch',
    table: [
      {
        person: '1. Person Singular',
        french: 'je',
        german: 'ich',
        pronunciation: '[ʒə]',
        notes: 'Wird vor Vokalen zu "j\'": j\'aime (ich liebe)'
      },
      {
        person: '2. Person Singular (informell)',
        french: 'tu',
        german: 'du',
        pronunciation: '[ty]',
        notes: 'Wie das deutsche "du" - für Freunde, Familie, Kinder'
      },
      {
        person: '3. Person Singular (männlich)',
        french: 'il',
        german: 'er',
        pronunciation: '[il]',
        notes: 'Für männliche Personen UND Dinge (le livre → il)'
      },
      {
        person: '3. Person Singular (weiblich)',
        french: 'elle',
        german: 'sie',
        pronunciation: '[ɛl]',
        notes: 'Für weibliche Personen UND Dinge (la maison → elle)'
      },
      {
        person: '1. Person Plural',
        french: 'nous',
        german: 'wir',
        pronunciation: '[nu]',
        notes: 'Wird seltener - oft ersetzt durch "on" in Umgangssprache'
      },
      {
        person: '2. Person Plural / Höflichkeitsform',
        french: 'vous',
        german: 'ihr / Sie',
        pronunciation: '[vu]',
        notes: 'DOPPELFUNKTION: Plural "ihr" UND höflich "Sie"'
      },
      {
        person: '3. Person Plural (männlich/gemischt)',
        french: 'ils',
        german: 'sie (Plural)',
        pronunciation: '[il]',
        notes: 'Für mehrere Männer ODER gemischte Gruppe'
      },
      {
        person: '3. Person Plural (weiblich)',
        french: 'elles',
        german: 'sie (Plural)',
        pronunciation: '[ɛl]',
        notes: 'NUR für rein weibliche Gruppen'
      }
    ]
  },

  importantDifferences: {
    title: 'Wichtige Unterschiede zum Deutschen',
    points: [
      {
        topic: 'Tu vs. Vous - Wie "du" vs. "Sie"',
        explanation: `
Genau wie im Deutschen gibt es eine informelle und formelle Anrede:

**TU (du):**
- Freunde, Familie
- Kinder und Jugendliche untereinander
- Gleichaltrige in lockerer Atmosphäre

**VOUS (Sie):**
- Fremde, ältere Menschen
- Geschäftliche Situationen
- Respektvolle Anrede

**ABER:** Franzosen duzen schneller als Deutsche! Nach kurzer Zeit wechseln oft selbst Erwachsene zum "tu".

Typische Frage: "On se tutoie?" (Duzen wir uns?)
        `
      },
      {
        topic: 'Genus bei "il" und "elle"',
        explanation: `
Im Deutschen benutzen wir "er/sie/es" für Personen, aber "es" für Dinge.
Im Französischen gibt es KEIN "es" (neutrum)!

Alle Dinge sind entweder männlich (il) oder weiblich (elle):

- le livre (das Buch) → il est intéressant (ER ist interessant)
- la table (der Tisch) → elle est grande (SIE ist groß)

Dies ist gewöhnungsbedürftig für Deutsche!
        `
      },
      {
        topic: 'Ils vs. Elles',
        explanation: `
Während Deutsch nur "sie" (Plural) hat, unterscheidet Französisch:

- **ils**: männlich ODER gemischt
  Beispiel: Pierre et Marie → ils (ein Mann dabei = ils!)

- **elles**: NUR rein weibliche Gruppen
  Beispiel: Marie et Sophie → elles (nur Frauen = elles)

**Regel:** Ein einziger Mann in der Gruppe → "ils"
        `
      }
    ]
  },

  examples: [
    {
      french: 'Je suis étudiant.',
      german: 'Ich bin Student.',
      notes: 'je + être (suis)'
    },
    {
      french: 'Tu es français?',
      german: 'Bist du Franzose?',
      notes: 'Informelle Frage unter Freunden'
    },
    {
      french: 'Il est médecin.',
      german: 'Er ist Arzt.',
      notes: 'il = männliche Person'
    },
    {
      french: 'Elle est belle.',
      german: 'Sie ist schön.',
      notes: 'elle = weibliche Person'
    },
    {
      french: 'Nous sommes amis.',
      german: 'Wir sind Freunde.',
      notes: 'nous = wir'
    },
    {
      french: 'Vous êtes professeur?',
      german: 'Sind Sie Lehrer?',
      notes: 'Höfliche Anrede'
    },
    {
      french: 'Ils sont étudiants.',
      german: 'Sie sind Studenten.',
      notes: 'ils = gemischte/männliche Gruppe'
    },
    {
      french: 'Elles sont françaises.',
      german: 'Sie sind Französinnen.',
      notes: 'elles = nur weibliche Gruppe'
    }
  ]
};

// ============================================================================
// PART 3: VERB "ÊTRE" (TO BE) - COMPLETE CONJUGATION
// ============================================================================

export const verbEtre = {
  title: 'Das Verb "être" (sein) - Das wichtigste Verb!',

  introduction: `
"Être" ist das wichtigste Verb im Französischen - genau wie "sein" im Deutschen.
Es ist UNREGELMÄSSIG - die Formen müssen auswendig gelernt werden.
  `,

  conjugationTable: {
    title: 'Konjugation im Präsens (Présent)',
    forms: [
      {
        pronoun: 'je',
        conjugation: 'suis',
        pronunciation: '[sɥi]',
        german: 'ich bin',
        example: 'Je suis content.',
        exampleGerman: 'Ich bin zufrieden.'
      },
      {
        pronoun: 'tu',
        conjugation: 'es',
        pronunciation: '[ɛ]',
        german: 'du bist',
        example: 'Tu es fatigué.',
        exampleGerman: 'Du bist müde.'
      },
      {
        pronoun: 'il/elle',
        conjugation: 'est',
        pronunciation: '[ɛ]',
        german: 'er/sie ist',
        example: 'Elle est professeure.',
        exampleGerman: 'Sie ist Lehrerin.'
      },
      {
        pronoun: 'nous',
        conjugation: 'sommes',
        pronunciation: '[sɔm]',
        german: 'wir sind',
        example: 'Nous sommes français.',
        exampleGerman: 'Wir sind Franzosen.'
      },
      {
        pronoun: 'vous',
        conjugation: 'êtes',
        pronunciation: '[ɛt]',
        german: 'ihr seid / Sie sind',
        example: 'Vous êtes étudiants.',
        exampleGerman: 'Ihr seid Studenten.'
      },
      {
        pronoun: 'ils/elles',
        conjugation: 'sont',
        pronunciation: '[sɔ̃]',
        german: 'sie sind',
        example: 'Ils sont contents.',
        exampleGerman: 'Sie sind zufrieden.'
      }
    ]
  },

  comparisonToGerman: {
    title: 'Vergleich mit dem deutschen "sein"',
    content: `
**Ähnlichkeiten:**
- Beide sind unregelmäßig und müssen auswendig gelernt werden
- Beide werden mit Adjektiven verwendet: "Je suis content" = "Ich bin zufrieden"
- Beide zeigen Zustand oder Identität an

**Unterschiede:**
- Im Französischen wird "être" auch für Berufe OHNE Artikel benutzt:
  ✅ "Je suis étudiant" (Ich bin Student)
  ❌ NICHT: "Je suis un étudiant" (zu förmlich)

- Deutsche benutzen oft "sein + am": "Ich bin am Arbeiten"
  Französisch benutzt andere Konstruktion: "Je travaille" oder "Je suis en train de travailler"

**Merkhilfe für die Formen:**
Vergleiche mit Deutsch - einige Laute sind ähnlich:
- je suis [sɥi] ≈ "süi"
- nous sommes [sɔm] ≈ "som"
- vous êtes [ɛt] ≈ "äht"
    `,
    memoryTips: [
      'Lerne die Formen als Einheit: "je-suis, tu-es, il-est, nous-sommes, vous-êtes, ils-sont"',
      'Sprich sie laut als Rhythmus - das hilft beim Merken!',
      'Wichtig: "ils sont" klingt wie "il-sohn" (Nasalvokal!)'
    ]
  },

  commonUsages: {
    title: 'Häufige Verwendungen von "être"',
    categories: [
      {
        category: 'Identität / Beruf',
        examples: [
          { french: 'Je suis étudiant.', german: 'Ich bin Student.' },
          { french: 'Elle est médecin.', german: 'Sie ist Ärztin.' },
          { french: 'Nous sommes français.', german: 'Wir sind Franzosen.' }
        ],
        note: 'Beachte: KEIN Artikel vor dem Beruf!'
      },
      {
        category: 'Eigenschaften / Adjektive',
        examples: [
          { french: 'Tu es intelligent.', german: 'Du bist intelligent.' },
          { french: 'La maison est grande.', german: 'Das Haus ist groß.' },
          { french: 'Ils sont contents.', german: 'Sie sind zufrieden.' }
        ],
        note: 'Adjektive passen sich an (männlich/weiblich, Singular/Plural)'
      },
      {
        category: 'Ort / Position',
        examples: [
          { french: 'Je suis à Paris.', german: 'Ich bin in Paris.' },
          { french: 'Où es-tu?', german: 'Wo bist du?' },
          { french: 'Nous sommes ici.', german: 'Wir sind hier.' }
        ],
        note: 'Für temporären Aufenthalt - nicht "aller" (gehen)!'
      },
      {
        category: 'Datum / Uhrzeit',
        examples: [
          { french: 'Il est midi.', german: 'Es ist Mittag.' },
          { french: 'Nous sommes lundi.', german: 'Es ist Montag.' }
        ],
        note: 'Unpersönliches "il est" für Zeit'
      }
    ]
  },

  commonMistakes: [
    {
      mistake: '❌ Je est content.',
      correct: '✅ Je suis content.',
      explanation: 'Die Form "est" gehört nur zu il/elle, nicht zu "je"!'
    },
    {
      mistake: '❌ Tu suis fatigué.',
      correct: '✅ Tu es fatigué.',
      explanation: '"suis" gehört zu "je", nicht zu "tu"!'
    },
    {
      mistake: '❌ Je suis un étudiant.',
      correct: '✅ Je suis étudiant.',
      explanation: 'Bei Berufen KEIN Artikel (außer mit Adjektiv: "Je suis un bon étudiant")'
    },
    {
      mistake: '❌ Vous sont professeurs.',
      correct: '✅ Vous êtes professeurs.',
      explanation: '"sont" gehört zu ils/elles, nicht zu "vous"!'
    }
  ]
};

// ============================================================================
// PART 4: GREETINGS AND INTRODUCTIONS
// ============================================================================

export const greetingsAndIntroductions = {
  title: 'Begrüßungen und Vorstellungen',

  basicGreetings: {
    title: 'Grundlegende Begrüßungen',
    phrases: [
      {
        french: 'Bonjour',
        pronunciation: '[bɔ̃ʒuʁ]',
        german: 'Guten Tag / Hallo',
        usage: 'Formell oder informell, tagsüber (bis ca. 18 Uhr)',
        notes: 'DIE Standard-Begrüßung in Frankreich. Sehr wichtig!'
      },
      {
        french: 'Bonsoir',
        pronunciation: '[bɔ̃swaʁ]',
        german: 'Guten Abend',
        usage: 'Ab ca. 18 Uhr abends',
        notes: 'Wird sowohl zur Begrüßung als auch zum Abschied benutzt'
      },
      {
        french: 'Salut',
        pronunciation: '[saly]',
        german: 'Hi / Tschüss',
        usage: 'Informell unter Freunden',
        notes: 'Wird sowohl für Hallo als auch Tschüss benutzt - sehr casual!'
      },
      {
        french: 'Bonne nuit',
        pronunciation: '[bɔn nɥi]',
        german: 'Gute Nacht',
        usage: 'Beim Schlafengehen',
        notes: 'NICHT zur Begrüßung! Nur wenn jemand wirklich schlafen geht'
      },
      {
        french: 'Au revoir',
        pronunciation: '[oʁəvwaʁ]',
        german: 'Auf Wiedersehen',
        usage: 'Formeller Abschied',
        notes: 'Standard-Abschied in formellen Situationen'
      },
      {
        french: 'À bientôt',
        pronunciation: '[a bjɛ̃to]',
        german: 'Bis bald',
        usage: 'Wenn man sich bald wieder sieht',
        notes: 'Freundlicher als "au revoir"'
      },
      {
        french: 'À plus tard',
        pronunciation: '[a ply taʁ]',
        german: 'Bis später',
        usage: 'Informell, für denselben Tag',
        notes: 'Umgangssprachlich oft verkürzt zu "À plus" [aply]'
      }
    ]
  },

  politePhrases: {
    title: 'Höflichkeitsformen',
    phrases: [
      {
        french: 'S\'il vous plaît',
        pronunciation: '[sil vu plɛ]',
        german: 'Bitte (höflich)',
        usage: 'Formelle Höflichkeit (Sie-Form)',
        notes: 'Sehr wichtig in Frankreich - IMMER benutzen!'
      },
      {
        french: 'S\'il te plaît',
        pronunciation: '[sil tə plɛ]',
        german: 'Bitte (informell)',
        usage: 'Informell (Du-Form)',
        notes: 'Nur unter Freunden / Familie'
      },
      {
        french: 'Merci',
        pronunciation: '[mɛʁsi]',
        german: 'Danke',
        usage: 'Universal',
        notes: 'Kann sowohl formell als auch informell benutzt werden'
      },
      {
        french: 'Merci beaucoup',
        pronunciation: '[mɛʁsi boku]',
        german: 'Vielen Dank',
        usage: 'Für extra Dankbarkeit',
        notes: 'Betonung liegt auf "beaucoup"'
      },
      {
        french: 'De rien',
        pronunciation: '[də ʁjɛ̃]',
        german: 'Gern geschehen / Nichts zu danken',
        usage: 'Antwort auf "merci"',
        notes: 'Wörtlich: "von nichts" - sehr gebräuchlich'
      },
      {
        french: 'Pardon',
        pronunciation: '[paʁdɔ̃]',
        german: 'Entschuldigung',
        usage: 'Um Aufmerksamkeit bitten oder sich entschuldigen',
        notes: 'Wird auch benutzt, um jemanden anzusprechen'
      },
      {
        french: 'Excusez-moi',
        pronunciation: '[ɛkskyze mwa]',
        german: 'Entschuldigen Sie',
        usage: 'Höflicher als "pardon"',
        notes: 'Benutze dies in formellen Situationen'
      }
    ]
  },

  introductions: {
    title: 'Sich vorstellen',
    essentialPhrases: [
      {
        french: 'Comment tu t\'appelles?',
        pronunciation: '[kɔmɑ̃ ty tapɛl]',
        german: 'Wie heißt du?',
        usage: 'Informell (tu)',
        notes: 'Wörtlich: "Wie rufst du dich?"'
      },
      {
        french: 'Comment vous vous appelez?',
        pronunciation: '[kɔmɑ̃ vu vuz aple]',
        german: 'Wie heißen Sie?',
        usage: 'Formell (vous)',
        notes: 'Beachte die Wiederholung von "vous"'
      },
      {
        french: 'Je m\'appelle...',
        pronunciation: '[ʒə mapɛl]',
        german: 'Ich heiße...',
        usage: 'Universal',
        notes: 'Das Standard-Phrase für Vorstellungen'
      },
      {
        french: 'Enchanté(e)',
        pronunciation: '[ɑ̃ʃɑ̃te]',
        german: 'Angenehm / Freut mich',
        usage: 'Bei erstem Kennenlernen',
        notes: 'Männer: enchanté / Frauen: enchantée (mit -e)'
      },
      {
        french: 'Comment ça va?',
        pronunciation: '[kɔmɑ̃ sa va]',
        german: 'Wie geht\'s?',
        usage: 'Informell',
        notes: 'Sehr häufig! Oft verkürzt zu "Ça va?"'
      },
      {
        french: 'Ça va bien, merci.',
        pronunciation: '[sa va bjɛ̃ mɛʁsi]',
        german: 'Mir geht\'s gut, danke.',
        usage: 'Standard-Antwort',
        notes: 'Oft gefolgt von "Et toi?" (Und dir?)'
      },
      {
        french: 'Et toi?',
        pronunciation: '[e twa]',
        german: 'Und du?',
        usage: 'Informell',
        notes: 'Nach deiner Antwort zurückfragen'
      },
      {
        french: 'Et vous?',
        pronunciation: '[e vu]',
        german: 'Und Sie / ihr?',
        usage: 'Formell oder Plural',
        notes: 'Höfliche Version'
      }
    ]
  },

  dialogues: [
    {
      title: 'Dialog 1: Erste Begegnung (Informell)',
      situation: 'Zwei Studenten treffen sich zum ersten Mal',
      conversation: [
        { speaker: 'Marie', french: 'Salut!', german: 'Hi!' },
        { speaker: 'Pierre', french: 'Salut! Comment tu t\'appelles?', german: 'Hi! Wie heißt du?' },
        { speaker: 'Marie', french: 'Je m\'appelle Marie. Et toi?', german: 'Ich heiße Marie. Und du?' },
        { speaker: 'Pierre', french: 'Moi, c\'est Pierre. Enchanté!', german: 'Ich bin Pierre. Freut mich!' },
        { speaker: 'Marie', french: 'Enchantée! Ça va?', german: 'Freut mich! Wie geht\'s?' },
        { speaker: 'Pierre', french: 'Ça va bien, merci. Et toi?', german: 'Gut, danke. Und dir?' },
        { speaker: 'Marie', french: 'Ça va bien aussi!', german: 'Mir auch gut!' }
      ],
      notes: [
        'Beachte: "Moi, c\'est..." ist eine entspannte Alternative zu "Je m\'appelle"',
        '"Enchanté/Enchantée" ist sehr höflich - unter Jugendlichen optional',
        'Das Gespräch ist sehr kurz und direkt - typisch für Frankreich'
      ]
    },
    {
      title: 'Dialog 2: Formelle Vorstellung',
      situation: 'Geschäftstreffen - zwei Erwachsene stellen sich vor',
      conversation: [
        { speaker: 'M. Dupont', french: 'Bonjour!', german: 'Guten Tag!' },
        { speaker: 'Mme Martin', french: 'Bonjour! Comment vous vous appelez?', german: 'Guten Tag! Wie heißen Sie?' },
        { speaker: 'M. Dupont', french: 'Je m\'appelle Jean Dupont. Et vous?', german: 'Ich heiße Jean Dupont. Und Sie?' },
        { speaker: 'Mme Martin', french: 'Sophie Martin. Enchantée.', german: 'Sophie Martin. Angenehm.' },
        { speaker: 'M. Dupont', french: 'Enchanté. Vous êtes française?', german: 'Angenehm. Sind Sie Französin?' },
        { speaker: 'Mme Martin', french: 'Oui, je suis française. Et vous?', german: 'Ja, ich bin Französin. Und Sie?' },
        { speaker: 'M. Dupont', french: 'Je suis allemand.', german: 'Ich bin Deutscher.' }
      ],
      notes: [
        'Beachte: "Bonjour" ist förmlicher als "Salut"',
        '"Vous êtes" wird für die höfliche Sie-Form benutzt',
        'Nationalitäten schreibt man im Französischen KLEIN: français, allemand'
      ]
    },
    {
      title: 'Dialog 3: Im Café',
      situation: 'Im Café bestellen',
      conversation: [
        { speaker: 'Kellner', french: 'Bonjour! Vous désirez?', german: 'Guten Tag! Was darf es sein?' },
        { speaker: 'Tourist', french: 'Bonjour. Un café, s\'il vous plaît.', german: 'Guten Tag. Einen Kaffee, bitte.' },
        { speaker: 'Kellner', french: 'Tout de suite!', german: 'Sofort!' },
        { speaker: 'Tourist', french: 'Merci beaucoup.', german: 'Vielen Dank.' },
        { speaker: 'Kellner', french: 'De rien!', german: 'Gern geschehen!' }
      ],
      notes: [
        'In Frankreich IMMER mit "Bonjour" beginnen - sehr wichtig!',
        '"S\'il vous plaît" ist essentiell bei Bestellungen',
        '"Tout de suite" = sofort / gleich - sehr häufige Phrase'
      ]
    },
    {
      title: 'Dialog 4: Auf der Straße',
      situation: 'Nach dem Weg fragen',
      conversation: [
        { speaker: 'Tourist', french: 'Pardon! Vous êtes français?', german: 'Entschuldigung! Sind Sie Franzose?' },
        { speaker: 'Passant', french: 'Oui, je suis français.', german: 'Ja, ich bin Franzose.' },
        { speaker: 'Tourist', french: 'Je suis allemand. Comment ça va?', german: 'Ich bin Deutscher. Wie geht es Ihnen?' },
        { speaker: 'Passant', french: 'Ça va bien, merci. Et vous?', german: 'Gut, danke. Und Ihnen?' },
        { speaker: 'Tourist', french: 'Ça va bien aussi. Merci!', german: 'Mir geht es auch gut. Danke!' },
        { speaker: 'Passant', french: 'Au revoir!', german: 'Auf Wiedersehen!' },
        { speaker: 'Tourist', french: 'Au revoir!', german: 'Auf Wiedersehen!' }
      ],
      notes: [
        '"Pardon" ist perfekt, um Aufmerksamkeit zu bekommen',
        'Beachte: "vous êtes" = Sie sind (formell)',
        'Auch bei kurzen Interaktionen ist Höflichkeit wichtig!'
      ]
    }
  ]
};

// ============================================================================
// PART 5: NUMBERS 1-10
// ============================================================================

export const numbers = {
  title: 'Zahlen 1-10 (Les nombres)',

  introduction: `
Die französischen Zahlen 1-10 sind die Grundlage für alle höheren Zahlen.
Sie sind relativ einfach zu lernen!
  `,

  basicNumbers: [
    {
      number: 1,
      french: 'un',
      pronunciation: '[œ̃]',
      german: 'eins',
      notes: 'Maskulin. Feminin = "une" [yn]',
      example: 'un chat (eine Katze - maskulin)'
    },
    {
      number: 2,
      french: 'deux',
      pronunciation: '[dø]',
      german: 'zwei',
      notes: 'Wie deutsches "dö"',
      example: 'deux chiens (zwei Hunde)'
    },
    {
      number: 3,
      french: 'trois',
      pronunciation: '[tʁwa]',
      german: 'drei',
      notes: 'Das französische R!',
      example: 'trois maisons (drei Häuser)'
    },
    {
      number: 4,
      french: 'quatre',
      pronunciation: '[katʁ]',
      german: 'vier',
      notes: 'Betonung auf erster Silbe',
      example: 'quatre étudiants (vier Studenten)'
    },
    {
      number: 5,
      french: 'cinq',
      pronunciation: '[sɛ̃k]',
      german: 'fünf',
      notes: 'Das -q wird ausgesprochen (CaReFuL-Regel!)',
      example: 'cinq livres (fünf Bücher)'
    },
    {
      number: 6,
      french: 'six',
      pronunciation: '[sis]',
      german: 'sechs',
      notes: 'Wie "siß". Vor Konsonant: [si] (stummes -x)',
      example: 'six amis (sechs Freunde)'
    },
    {
      number: 7,
      french: 'sept',
      pronunciation: '[sɛt]',
      german: 'sieben',
      notes: 'Das -p ist stumm',
      example: 'sept jours (sieben Tage)'
    },
    {
      number: 8,
      french: 'huit',
      pronunciation: '[ɥit]',
      german: 'acht',
      notes: 'Das H ist stumm, beginnt mit [ɥ] (wie "üi")',
      example: 'huit heures (acht Uhr)'
    },
    {
      number: 9,
      french: 'neuf',
      pronunciation: '[nœf]',
      german: 'neun',
      notes: 'F wird ausgesprochen (CaReFuL!)',
      example: 'neuf euros (neun Euro)'
    },
    {
      number: 10,
      french: 'dix',
      pronunciation: '[dis]',
      german: 'zehn',
      notes: 'Wie "diß". Vor Konsonant: [di]',
      example: 'dix minutes (zehn Minuten)'
    }
  ],

  pronunciation_tips: {
    title: 'Aussprache-Besonderheiten',
    tips: [
      {
        topic: 'Liaison bei 2, 3, 6, 10',
        explanation: `
Wenn nach der Zahl ein Vokal kommt, verändert sich die Aussprache:

- deux heures [døz‿œʁ] - Das -x wird zu [z]
- trois ans [tʁwaz‿ɑ̃] - Das -s wird zu [z]
- six enfants [siz‿ɑ̃fɑ̃] - Das -x wird zu [z]
- dix euros [diz‿øʁo] - Das -x wird zu [z]

Dies nennt man "Liaison" - eine typisch französische Erscheinung!
        `
      },
      {
        topic: 'Verstummen bei 6 und 10',
        explanation: `
Wenn nach "six" oder "dix" ein Konsonant kommt, wird das Ende nicht ausgesprochen:

- six personnes [si pɛʁsɔn] - Das -x ist stumm
- dix francs [di fʁɑ̃] - Das -x ist stumm

Aber:
- six [sis] alleine - volle Aussprache
- dix [dis] alleine - volle Aussprache
        `
      }
    ]
  },

  practiceExamples: [
    { french: 'J\'ai trois chats.', german: 'Ich habe drei Katzen.' },
    { french: 'Il y a cinq étudiants.', german: 'Es gibt fünf Studenten.' },
    { french: 'Elle a sept ans.', german: 'Sie ist sieben Jahre alt.' },
    { french: 'Nous sommes dix.', german: 'Wir sind zehn (Personen).' },
    { french: 'Il est deux heures.', german: 'Es ist zwei Uhr.' }
  ]
};

// ============================================================================
// PART 6: VOCABULARY LIST FOR LESSON 1 (30-40 WORDS)
// ============================================================================

export const lesson1Vocabulary: CardInput[] = [
  // Personal Pronouns (already in initial vocabulary, but here for completeness)
  {
    id: 'lesson1-pronoun-je',
    french: 'je',
    german: 'ich',
    english: 'I',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Je suis content.',
      german: 'Ich bin zufrieden.'
    },
    notes: 'Wird vor Vokalen zu "j\'" (z.B. j\'aime)',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-tu',
    french: 'tu',
    german: 'du',
    english: 'you (informal)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Tu es mon ami.',
      german: 'Du bist mein Freund.'
    },
    notes: 'Informelle Anrede wie das deutsche "du"',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-il',
    french: 'il',
    german: 'er',
    english: 'he',
    partOfSpeech: 'pronoun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est français.',
      german: 'Er ist Franzose.'
    },
    notes: 'Auch für männliche Dinge benutzt',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-elle',
    french: 'elle',
    german: 'sie',
    english: 'she',
    partOfSpeech: 'pronoun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle est belle.',
      german: 'Sie ist schön.'
    },
    notes: 'Auch für weibliche Dinge benutzt',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-nous',
    french: 'nous',
    german: 'wir',
    english: 'we',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Nous sommes amis.',
      german: 'Wir sind Freunde.'
    },
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-vous',
    french: 'vous',
    german: 'ihr / Sie',
    english: 'you (plural/formal)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Vous êtes français?',
      german: 'Sind Sie Franzose?'
    },
    notes: 'Formelle Anrede (wie "Sie") oder Plural (wie "ihr")',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-ils',
    french: 'ils',
    german: 'sie (Plural, männlich/gemischt)',
    english: 'they (masculine/mixed)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Ils sont étudiants.',
      german: 'Sie sind Studenten.'
    },
    notes: 'Für männliche oder gemischte Gruppen',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },
  {
    id: 'lesson1-pronoun-elles',
    french: 'elles',
    german: 'sie (Plural, weiblich)',
    english: 'they (feminine)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Elles sont françaises.',
      german: 'Sie sind Französinnen.'
    },
    notes: 'NUR für rein weibliche Gruppen',
    level: 'A1',
    tags: ['lesson1', 'pronoun', 'essential']
  },

  // Greetings
  {
    id: 'lesson1-greeting-bonjour',
    french: 'bonjour',
    german: 'Guten Tag / Hallo',
    english: 'hello / good day',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Bonjour! Comment allez-vous?',
      german: 'Guten Tag! Wie geht es Ihnen?'
    },
    notes: 'DIE Standard-Begrüßung - sehr wichtig! Tagsüber benutzen.',
    level: 'A1',
    tags: ['lesson1', 'greeting', 'essential', 'politeness']
  },
  {
    id: 'lesson1-greeting-bonsoir',
    french: 'bonsoir',
    german: 'Guten Abend',
    english: 'good evening',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Bonsoir! Ça va?',
      german: 'Guten Abend! Wie geht\'s?'
    },
    notes: 'Ab ca. 18 Uhr. Wird auch zum Abschied benutzt.',
    level: 'A1',
    tags: ['lesson1', 'greeting', 'essential']
  },
  {
    id: 'lesson1-greeting-salut',
    french: 'salut',
    german: 'Hi / Tschüss',
    english: 'hi / bye',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Salut Marie! Ça va?',
      german: 'Hi Marie! Wie geht\'s?'
    },
    notes: 'Informell unter Freunden. Sowohl Hallo als auch Tschüss!',
    level: 'A1',
    tags: ['lesson1', 'greeting', 'informal']
  },
  {
    id: 'lesson1-greeting-aurevoir',
    french: 'au revoir',
    german: 'Auf Wiedersehen',
    english: 'goodbye',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Au revoir, monsieur!',
      german: 'Auf Wiedersehen, mein Herr!'
    },
    notes: 'Formeller Abschied',
    level: 'A1',
    tags: ['lesson1', 'greeting', 'farewell']
  },
  {
    id: 'lesson1-greeting-abientot',
    french: 'à bientôt',
    german: 'Bis bald',
    english: 'see you soon',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'À bientôt! Bonne journée!',
      german: 'Bis bald! Schönen Tag noch!'
    },
    notes: 'Freundlicher Abschied, wenn man sich bald wiedersieht',
    level: 'A1',
    tags: ['lesson1', 'greeting', 'farewell']
  },
  {
    id: 'lesson1-politeness-merci',
    french: 'merci',
    german: 'Danke',
    english: 'thank you',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Merci beaucoup!',
      german: 'Vielen Dank!'
    },
    notes: 'Essentiell! Wird sehr häufig benutzt.',
    level: 'A1',
    tags: ['lesson1', 'politeness', 'essential']
  },
  {
    id: 'lesson1-politeness-stp',
    french: 's\'il te plaît',
    german: 'Bitte (informell)',
    english: 'please (informal)',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Passe-moi le sel, s\'il te plaît.',
      german: 'Reich mir das Salz, bitte.'
    },
    notes: 'Informelle Du-Form',
    level: 'A1',
    tags: ['lesson1', 'politeness', 'informal']
  },
  {
    id: 'lesson1-politeness-svp',
    french: 's\'il vous plaît',
    german: 'Bitte (formell)',
    english: 'please (formal)',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Un café, s\'il vous plaît.',
      german: 'Einen Kaffee, bitte.'
    },
    notes: 'Formelle Sie-Form. Sehr wichtig!',
    level: 'A1',
    tags: ['lesson1', 'politeness', 'essential', 'formal']
  },
  {
    id: 'lesson1-politeness-derien',
    french: 'de rien',
    german: 'Gern geschehen',
    english: 'you\'re welcome',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: '— Merci! — De rien!',
      german: '— Danke! — Gern geschehen!'
    },
    notes: 'Antwort auf "merci"',
    level: 'A1',
    tags: ['lesson1', 'politeness', 'response']
  },
  {
    id: 'lesson1-politeness-pardon',
    french: 'pardon',
    german: 'Entschuldigung',
    english: 'excuse me / sorry',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Pardon, où est la gare?',
      german: 'Entschuldigung, wo ist der Bahnhof?'
    },
    notes: 'Für Aufmerksamkeit oder Entschuldigung',
    level: 'A1',
    tags: ['lesson1', 'politeness', 'essential']
  },

  // "Être" conjugations as vocabulary
  {
    id: 'lesson1-etre-jesuis',
    french: 'je suis',
    german: 'ich bin',
    english: 'I am',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je suis étudiant.',
      german: 'Ich bin Student.'
    },
    notes: 'être Konjugation: 1. Person Singular',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },
  {
    id: 'lesson1-etre-tues',
    french: 'tu es',
    german: 'du bist',
    english: 'you are',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu es fatigué.',
      german: 'Du bist müde.'
    },
    notes: 'être Konjugation: 2. Person Singular',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },
  {
    id: 'lesson1-etre-ilest',
    french: 'il/elle est',
    german: 'er/sie ist',
    english: 'he/she is',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il est médecin.',
      german: 'Er ist Arzt.'
    },
    notes: 'être Konjugation: 3. Person Singular',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },
  {
    id: 'lesson1-etre-noussommes',
    french: 'nous sommes',
    german: 'wir sind',
    english: 'we are',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous sommes amis.',
      german: 'Wir sind Freunde.'
    },
    notes: 'être Konjugation: 1. Person Plural',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },
  {
    id: 'lesson1-etre-vousetes',
    french: 'vous êtes',
    german: 'ihr seid / Sie sind',
    english: 'you are (plural/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous êtes français?',
      german: 'Sind Sie Franzose?'
    },
    notes: 'être Konjugation: 2. Person Plural/formell',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },
  {
    id: 'lesson1-etre-ilssont',
    french: 'ils/elles sont',
    german: 'sie sind',
    english: 'they are',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils sont étudiants.',
      german: 'Sie sind Studenten.'
    },
    notes: 'être Konjugation: 3. Person Plural',
    level: 'A1',
    tags: ['lesson1', 'verb', 'être', 'conjugation']
  },

  // Basic adjectives for descriptions
  {
    id: 'lesson1-adj-content',
    french: 'content',
    german: 'zufrieden',
    english: 'happy/content',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Je suis content.',
      german: 'Ich bin zufrieden.'
    },
    notes: 'Feminin: contente (mit -e)',
    level: 'A1',
    tags: ['lesson1', 'adjective', 'emotion']
  },
  {
    id: 'lesson1-adj-fatigue',
    french: 'fatigué',
    german: 'müde',
    english: 'tired',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Tu es fatigué?',
      german: 'Bist du müde?'
    },
    notes: 'Feminin: fatiguée (mit -e)',
    level: 'A1',
    tags: ['lesson1', 'adjective', 'state']
  },
  {
    id: 'lesson1-adj-francais',
    french: 'français',
    german: 'französisch',
    english: 'French',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Je suis français.',
      german: 'Ich bin Franzose.'
    },
    notes: 'Feminin: française. Nationalitäten klein schreiben!',
    level: 'A1',
    tags: ['lesson1', 'adjective', 'nationality']
  },
  {
    id: 'lesson1-adj-allemand',
    french: 'allemand',
    german: 'deutsch',
    english: 'German',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Il est allemand.',
      german: 'Er ist Deutscher.'
    },
    notes: 'Feminin: allemande. Klein schreiben!',
    level: 'A1',
    tags: ['lesson1', 'adjective', 'nationality']
  },
  {
    id: 'lesson1-adj-etudiant',
    french: 'étudiant',
    german: 'Student',
    english: 'student',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je suis étudiant.',
      german: 'Ich bin Student.'
    },
    notes: 'Feminin: étudiante. KEIN Artikel vor Beruf!',
    level: 'A1',
    tags: ['lesson1', 'noun', 'profession']
  },
  {
    id: 'lesson1-adj-professeur',
    french: 'professeur',
    german: 'Lehrer(in)',
    english: 'teacher',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Elle est professeur.',
      german: 'Sie ist Lehrerin.'
    },
    notes: 'Traditionell maskulin, auch für Frauen. Modern: "professeure"',
    level: 'A1',
    tags: ['lesson1', 'noun', 'profession']
  },

  // Introduction phrases
  {
    id: 'lesson1-phrase-commenttuappelles',
    french: 'comment tu t\'appelles?',
    german: 'Wie heißt du?',
    english: 'what\'s your name?',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Salut! Comment tu t\'appelles?',
      german: 'Hi! Wie heißt du?'
    },
    notes: 'Informell (tu). Wörtlich: "Wie rufst du dich?"',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'introduction', 'question']
  },
  {
    id: 'lesson1-phrase-jemappelle',
    french: 'je m\'appelle',
    german: 'ich heiße',
    english: 'my name is',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je m\'appelle Marie.',
      german: 'Ich heiße Marie.'
    },
    notes: 'Standard-Phrase für Vorstellungen',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'introduction', 'essential']
  },
  {
    id: 'lesson1-phrase-enchante',
    french: 'enchanté(e)',
    german: 'Angenehm / Freut mich',
    english: 'pleased to meet you',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'Enchanté! Je m\'appelle Pierre.',
      german: 'Freut mich! Ich heiße Pierre.'
    },
    notes: 'Männer: enchanté, Frauen: enchantée',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'introduction', 'politeness']
  },
  {
    id: 'lesson1-phrase-cava',
    french: 'ça va?',
    german: 'Wie geht\'s?',
    english: 'how are you?',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Salut Pierre! Ça va?',
      german: 'Hi Pierre! Wie geht\'s?'
    },
    notes: 'Sehr häufig! Auch als Antwort: "Ça va." = "Es geht."',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'greeting', 'question']
  },
  {
    id: 'lesson1-phrase-cavabien',
    french: 'ça va bien',
    german: 'Mir geht\'s gut',
    english: 'I\'m fine',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ça va bien, merci!',
      german: 'Mir geht\'s gut, danke!'
    },
    notes: 'Standard-Antwort auf "ça va?"',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'response']
  },
  {
    id: 'lesson1-phrase-ettoi',
    french: 'et toi?',
    german: 'Und du?',
    english: 'and you?',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Ça va bien. Et toi?',
      german: 'Mir geht\'s gut. Und dir?'
    },
    notes: 'Informell. Formell: "Et vous?"',
    level: 'A1',
    tags: ['lesson1', 'phrase', 'question']
  },

  // Numbers 1-10
  {
    id: 'lesson1-number-un',
    french: 'un',
    german: 'eins',
    english: 'one',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'ai un chat.',
      german: 'Ich habe eine Katze.'
    },
    notes: 'Maskulin. Feminin: "une"',
    level: 'A1',
    tags: ['lesson1', 'number', 'article']
  },
  {
    id: 'lesson1-number-deux',
    french: 'deux',
    german: 'zwei',
    english: 'two',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'J\'ai deux chiens.',
      german: 'Ich habe zwei Hunde.'
    },
    notes: 'Aussprache: [dø] wie "dö"',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-trois',
    french: 'trois',
    german: 'drei',
    english: 'three',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Il y a trois maisons.',
      german: 'Es gibt drei Häuser.'
    },
    notes: 'Französisches R beachten!',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-quatre',
    french: 'quatre',
    german: 'vier',
    english: 'four',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Nous sommes quatre.',
      german: 'Wir sind vier (Personen).'
    },
    notes: 'Betonung auf erster Silbe',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-cinq',
    french: 'cinq',
    german: 'fünf',
    english: 'five',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'J\'ai cinq livres.',
      german: 'Ich habe fünf Bücher.'
    },
    notes: 'Das -q wird ausgesprochen: [sɛ̃k]',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-six',
    french: 'six',
    german: 'sechs',
    english: 'six',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Il est six heures.',
      german: 'Es ist sechs Uhr.'
    },
    notes: 'Aussprache variiert: [sis] allein, [si] vor Konsonant',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-sept',
    french: 'sept',
    german: 'sieben',
    english: 'seven',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Elle a sept ans.',
      german: 'Sie ist sieben Jahre alt.'
    },
    notes: 'Das -p ist stumm: [sɛt]',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-huit',
    french: 'huit',
    german: 'acht',
    english: 'eight',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Il est huit heures.',
      german: 'Es ist acht Uhr.'
    },
    notes: 'Beginnt mit [ɥ] wie "üi": [ɥit]',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-neuf',
    french: 'neuf',
    german: 'neun',
    english: 'nine',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'J\'ai neuf euros.',
      german: 'Ich habe neun Euro.'
    },
    notes: 'F wird ausgesprochen (CaReFuL!): [nœf]',
    level: 'A1',
    tags: ['lesson1', 'number']
  },
  {
    id: 'lesson1-number-dix',
    french: 'dix',
    german: 'zehn',
    english: 'ten',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Nous sommes dix.',
      german: 'Wir sind zehn.'
    },
    notes: 'Aussprache variiert: [dis] allein, [di] vor Konsonant',
    level: 'A1',
    tags: ['lesson1', 'number']
  }
];

// ============================================================================
// PART 7: EXERCISES
// ============================================================================

export const lesson1Exercises = {
  title: 'Übungen zu Lektion 1',

  exercises: [
    // EXERCISE 1: Multiple Choice - Pronouns
    {
      id: 'ex1-pronouns-mc-1',
      type: 'multiple-choice' as const,
      difficulty: 'easy' as const,
      question: 'Wähle das richtige Pronomen: ___ suis étudiant. (Ich bin Student.)',
      options: ['je', 'tu', 'il', 'nous'],
      correctAnswer: 'je',
      explanation: '"je" bedeutet "ich". Die richtige Form von être ist "je suis".',
      topic: 'pronouns',
      points: 1
    },
    {
      id: 'ex1-pronouns-mc-2',
      type: 'multiple-choice' as const,
      difficulty: 'easy' as const,
      question: 'Welches Pronomen bedeutet "du"?',
      options: ['je', 'tu', 'vous', 'nous'],
      correctAnswer: 'tu',
      explanation: '"tu" ist die informelle Form für "du", während "vous" die formelle Form "Sie" oder Plural "ihr" ist.',
      topic: 'pronouns',
      points: 1
    },
    {
      id: 'ex1-pronouns-mc-3',
      type: 'multiple-choice' as const,
      difficulty: 'medium' as const,
      question: 'Marie und Sophie sind zusammen. Welches Pronomen?',
      options: ['ils', 'elles', 'nous', 'vous'],
      correctAnswer: 'elles',
      explanation: '"elles" wird für rein weibliche Gruppen benutzt. "ils" wäre bei gemischten oder männlichen Gruppen.',
      topic: 'pronouns',
      points: 2
    },

    // EXERCISE 2: Fill in the blank - être conjugation
    {
      id: 'ex1-etre-fill-1',
      type: 'fill-blank' as const,
      difficulty: 'easy' as const,
      question: 'Je ___ content. (Ich bin zufrieden.)',
      correctAnswer: 'suis',
      acceptableAnswers: ['suis'],
      explanation: 'Die Form von être für "je" ist "suis".',
      topic: 'être conjugation',
      points: 1
    },
    {
      id: 'ex1-etre-fill-2',
      type: 'fill-blank' as const,
      difficulty: 'easy' as const,
      question: 'Tu ___ fatigué. (Du bist müde.)',
      correctAnswer: 'es',
      acceptableAnswers: ['es'],
      explanation: 'Die Form von être für "tu" ist "es".',
      topic: 'être conjugation',
      points: 1
    },
    {
      id: 'ex1-etre-fill-3',
      type: 'fill-blank' as const,
      difficulty: 'medium' as const,
      question: 'Nous ___ français. (Wir sind Franzosen.)',
      correctAnswer: 'sommes',
      acceptableAnswers: ['sommes'],
      explanation: 'Die Form von être für "nous" ist "sommes".',
      topic: 'être conjugation',
      points: 2
    },
    {
      id: 'ex1-etre-fill-4',
      type: 'fill-blank' as const,
      difficulty: 'medium' as const,
      question: 'Vous ___ professeur? (Sind Sie Lehrer?)',
      correctAnswer: 'êtes',
      acceptableAnswers: ['êtes', 'etes'],
      explanation: 'Die Form von être für "vous" ist "êtes" (mit accent circonflexe).',
      topic: 'être conjugation',
      points: 2
    },
    {
      id: 'ex1-etre-fill-5',
      type: 'fill-blank' as const,
      difficulty: 'medium' as const,
      question: 'Ils ___ étudiants. (Sie sind Studenten.)',
      correctAnswer: 'sont',
      acceptableAnswers: ['sont'],
      explanation: 'Die Form von être für "ils/elles" ist "sont".',
      topic: 'être conjugation',
      points: 2
    },

    // EXERCISE 3: Translation DE→FR
    {
      id: 'ex1-trans-defr-1',
      type: 'translation-de-fr' as const,
      difficulty: 'easy' as const,
      question: 'Übersetze ins Französische: Hallo',
      correctAnswer: 'bonjour',
      acceptableAnswers: ['bonjour', 'Bonjour'],
      explanation: '"Bonjour" ist die Standard-Begrüßung im Französischen.',
      topic: 'greetings',
      points: 1
    },
    {
      id: 'ex1-trans-defr-2',
      type: 'translation-de-fr' as const,
      difficulty: 'easy' as const,
      question: 'Übersetze: Danke',
      correctAnswer: 'merci',
      acceptableAnswers: ['merci', 'Merci'],
      explanation: '"Merci" bedeutet "Danke".',
      topic: 'greetings',
      points: 1
    },
    {
      id: 'ex1-trans-defr-3',
      type: 'translation-de-fr' as const,
      difficulty: 'medium' as const,
      question: 'Übersetze: Ich bin Student.',
      correctAnswer: 'Je suis étudiant.',
      acceptableAnswers: ['Je suis étudiant', 'Je suis étudiant.', 'je suis étudiant', 'je suis etudiant'],
      explanation: 'WICHTIG: Kein Artikel vor Beruf! "Je suis étudiant" (nicht "un étudiant").',
      topic: 'être + professions',
      points: 2
    },
    {
      id: 'ex1-trans-defr-4',
      type: 'translation-de-fr' as const,
      difficulty: 'medium' as const,
      question: 'Übersetze: Wie heißt du?',
      correctAnswer: 'Comment tu t\'appelles?',
      acceptableAnswers: [
        'Comment tu t\'appelles?',
        'Comment tu t\'appelles',
        'Comment tu t\'appelle?',
        'comment tu t\'appelles?'
      ],
      explanation: 'Die Phrase ist "Comment tu t\'appelles?" (wörtlich: "Wie rufst du dich?").',
      topic: 'introductions',
      points: 2
    },

    // EXERCISE 4: Translation FR→DE
    {
      id: 'ex1-trans-frde-1',
      type: 'translation-fr-de' as const,
      difficulty: 'easy' as const,
      question: 'Übersetze ins Deutsche: Au revoir',
      correctAnswer: 'Auf Wiedersehen',
      acceptableAnswers: ['Auf Wiedersehen', 'auf Wiedersehen', 'Auf wiedersehen', 'Tschüss'],
      explanation: '"Au revoir" bedeutet "Auf Wiedersehen" (formeller Abschied).',
      topic: 'greetings',
      points: 1
    },
    {
      id: 'ex1-trans-frde-2',
      type: 'translation-fr-de' as const,
      difficulty: 'medium' as const,
      question: 'Übersetze: Elle est professeur.',
      correctAnswer: 'Sie ist Lehrerin.',
      acceptableAnswers: ['Sie ist Lehrerin', 'Sie ist Lehrerin.', 'sie ist Lehrerin'],
      explanation: '"Elle" = sie, "est" = ist, "professeur" = Lehrer(in).',
      topic: 'être + professions',
      points: 2
    },
    {
      id: 'ex1-trans-frde-3',
      type: 'translation-fr-de' as const,
      difficulty: 'medium' as const,
      question: 'Übersetze: Nous sommes français.',
      correctAnswer: 'Wir sind Franzosen.',
      acceptableAnswers: ['Wir sind Franzosen', 'Wir sind Franzosen.', 'wir sind Franzosen', 'Wir sind französisch'],
      explanation: '"Nous" = wir, "sommes" = sind, "français" = Franzosen/französisch.',
      topic: 'être + nationality',
      points: 2
    },

    // EXERCISE 5: Numbers
    {
      id: 'ex1-numbers-mc-1',
      type: 'multiple-choice' as const,
      difficulty: 'easy' as const,
      question: 'Wie sagt man "fünf" auf Französisch?',
      options: ['quatre', 'cinq', 'six', 'sept'],
      correctAnswer: 'cinq',
      explanation: '"cinq" [sɛ̃k] bedeutet "fünf". Das -q wird ausgesprochen!',
      topic: 'numbers',
      points: 1
    },
    {
      id: 'ex1-numbers-mc-2',
      type: 'multiple-choice' as const,
      difficulty: 'easy' as const,
      question: 'Was bedeutet "huit"?',
      options: ['sechs', 'sieben', 'acht', 'neun'],
      correctAnswer: 'acht',
      explanation: '"huit" [ɥit] bedeutet "acht".',
      topic: 'numbers',
      points: 1
    },
    {
      id: 'ex1-numbers-fill-1',
      type: 'fill-blank' as const,
      difficulty: 'medium' as const,
      question: 'Ergänze die Zahl: J\'ai ___ chats. (Ich habe drei Katzen.)',
      correctAnswer: 'trois',
      acceptableAnswers: ['trois'],
      explanation: '"trois" bedeutet "drei".',
      topic: 'numbers',
      points: 2
    },

    // EXERCISE 6: Greetings context
    {
      id: 'ex1-greetings-mc-1',
      type: 'multiple-choice' as const,
      difficulty: 'medium' as const,
      question: 'Du triffst morgens um 10 Uhr einen Fremden. Was sagst du?',
      options: ['Salut', 'Bonjour', 'Bonsoir', 'Bonne nuit'],
      correctAnswer: 'Bonjour',
      explanation: '"Bonjour" wird tagsüber benutzt und ist formell genug für Fremde. "Salut" wäre zu informell.',
      topic: 'greetings usage',
      points: 2
    },
    {
      id: 'ex1-greetings-mc-2',
      type: 'multiple-choice' as const,
      difficulty: 'medium' as const,
      question: 'Es ist 19 Uhr abends. Welche Begrüßung passt?',
      options: ['Bonjour', 'Bonsoir', 'Salut', 'Bonne nuit'],
      correctAnswer: 'Bonsoir',
      explanation: '"Bonsoir" wird ab ca. 18 Uhr abends benutzt. "Bonne nuit" nur beim Schlafengehen!',
      topic: 'greetings usage',
      points: 2
    },

    // EXERCISE 7: Pronoun selection based on context
    {
      id: 'ex1-context-1',
      type: 'multiple-choice' as const,
      difficulty: 'hard' as const,
      question: 'Pierre und Marie (Mann und Frau) gehen zusammen. Welches Pronomen?',
      options: ['ils', 'elles', 'nous', 'vous'],
      correctAnswer: 'ils',
      explanation: 'Bei gemischten Gruppen (Mann + Frau) wird "ils" benutzt, nicht "elles". "elles" nur für rein weibliche Gruppen!',
      topic: 'pronouns gender',
      points: 3
    },

    // EXERCISE 8: Complete dialogue
    {
      id: 'ex1-dialogue-fill-1',
      type: 'fill-blank' as const,
      difficulty: 'hard' as const,
      question: 'Vervollständige den Dialog:\n— Bonjour! Comment vous vous ___?\n— Je ___ Paul.',
      correctAnswer: 'appelez, m\'appelle',
      acceptableAnswers: ['appelez, m\'appelle', 'appelez m\'appelle'],
      explanation: '"Comment vous vous appelez?" (Wie heißen Sie?) und "Je m\'appelle" (Ich heiße).',
      topic: 'introductions',
      points: 3
    }
  ],

  // Summary of exercise types and distribution
  summary: {
    totalExercises: 22,
    byType: {
      'multiple-choice': 9,
      'fill-blank': 8,
      'translation-de-fr': 4,
      'translation-fr-de': 3
    },
    byDifficulty: {
      easy: 9,
      medium: 11,
      hard: 2
    },
    byTopic: {
      pronouns: 3,
      'être conjugation': 5,
      greetings: 6,
      numbers: 3,
      introductions: 3,
      professions: 2
    }
  }
};

// ============================================================================
// PART 8: LESSON METADATA & STRUCTURE
// ============================================================================

export const lesson1Metadata = {
  id: 'lesson-1',
  title: 'Lektion 1: Erste Schritte - First Steps in French',
  subtitle: 'Grundlagen der Aussprache, être-Verb und erste Konversation',
  level: 'A1',
  estimatedTime: '90-120 Minuten',

  objectives: [
    'Das französische Alphabet und grundlegende Ausspracheregeln verstehen',
    'Alle Personalpronomen kennen und korrekt anwenden',
    'Das Verb "être" in allen Formen konjugieren können',
    'Sich auf Französisch vorstellen und begrüßen können',
    'Von 1 bis 10 zählen',
    'Einfache Sätze mit être bilden können'
  ],

  prerequisites: [
    'Keine Vorkenntnisse erforderlich',
    'Absolute Beginner willkommen',
    'Grundlegende Deutschkenntnisse (Muttersprache)'
  ],

  sections: [
    {
      id: 'pronunciation',
      title: 'Aussprache-Grundlagen',
      duration: '20 Minuten',
      content: pronunciationGuide
    },
    {
      id: 'pronouns',
      title: 'Personalpronomen',
      duration: '15 Minuten',
      content: personalPronouns
    },
    {
      id: 'etre',
      title: 'Das Verb "être" (sein)',
      duration: '25 Minuten',
      content: verbEtre
    },
    {
      id: 'greetings',
      title: 'Begrüßungen und Vorstellungen',
      duration: '20 Minuten',
      content: greetingsAndIntroductions
    },
    {
      id: 'numbers',
      title: 'Zahlen 1-10',
      duration: '10 Minuten',
      content: numbers
    },
    {
      id: 'exercises',
      title: 'Übungen',
      duration: '30 Minuten',
      content: lesson1Exercises
    }
  ],

  vocabulary: lesson1Vocabulary,

  learningTips: [
    'Übe die Aussprache laut - besonders die Nasalvokale brauchen Zeit!',
    'Lerne die être-Formen als rhythmischen Singsang auswendig',
    'Benutze Flashcards für die Pronomen und ihre Verwendung',
    'Stelle dich täglich im Spiegel auf Französisch vor',
    'Zähle alltägliche Dinge auf Französisch (Treppenstufen, Äpfel, etc.)',
    'Schaue französische Videos mit Untertiteln - achte auf Begrüßungen'
  ],

  culturalNotes: [
    {
      title: 'Die Wichtigkeit von "Bonjour"',
      content: 'In Frankreich ist es SEHR wichtig, beim Betreten eines Geschäfts, Restaurants oder bei jeder Interaktion mit "Bonjour" zu grüßen. Es gilt als unhöflich, direkt mit einer Frage zu beginnen!'
    },
    {
      title: 'Tu vs. Vous',
      content: 'Franzosen duzen ("tu") schneller als Deutsche. Unter Studenten und jungen Leuten ist "tu" sehr verbreitet. Im Zweifel beginne mit "vous" - dein Gegenüber wird vorschlagen, zum "tu" zu wechseln, wenn angemessen.'
    },
    {
      title: 'La bise - Der französische Wangenkuss',
      content: 'Zur Begrüßung unter Freunden und Familie gibt es "la bise" - Wangenküsse (meist 2, in manchen Regionen 3 oder 4!). Bei ersten Treffen: Händeschütteln ist sicherer.'
    }
  ],

  nextSteps: [
    'Lektion 2: Das Verb "avoir" (haben) und Besitz ausdrücken',
    'Lektion 3: Regelmäßige Verben auf -er',
    'Lektion 4: Artikel und Genus (le/la, un/une)'
  ]
};

// Export everything as default for easy importing
export default {
  metadata: lesson1Metadata,
  pronunciation: pronunciationGuide,
  pronouns: personalPronouns,
  verbEtre: verbEtre,
  greetings: greetingsAndIntroductions,
  numbers: numbers,
  vocabulary: lesson1Vocabulary,
  exercises: lesson1Exercises
};
