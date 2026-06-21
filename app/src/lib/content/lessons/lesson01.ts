import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 01: Premiers Pas - Erste Schritte
 * First Steps in French for German speakers
 *
 * Level: A1 (Absolute Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - French alphabet and pronunciation basics
 * - Personal pronouns
 * - Verb "être" (to be) conjugation
 * - Basic greetings and introductions
 * - Numbers 1-10
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: French Alphabet
  {
    id: 'alphabet',
    title: 'Das französische Alphabet',
    type: 'explanation',
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
    germanExplanation: 'Grundlegende Ausspracheregeln des französischen Alphabets',
    examples: [
      { french: 'tu', german: 'du', notes: 'Aussprache: [ty] wie "tü" im Deutschen' },
      { french: 'rue', german: 'Straße', notes: 'Aussprache: [ʁy] wie "rü" im Deutschen' }
    ]
  },

  // Section 2: Nasal Vowels
  {
    id: 'nasal-vowels',
    title: 'Nasalvokale - Eine französische Besonderheit',
    type: 'explanation',
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
    germanExplanation: 'Nasalvokale existieren nicht im Deutschen - sie brauchen Übung!'
  },

  // Section 3: Silent Letters
  {
    id: 'silent-letters',
    title: 'Stumme Buchstaben',
    type: 'tip',
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

  // Section 4: French R
  {
    id: 'french-r',
    title: 'Das französische R',
    type: 'explanation',
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

**Tipp:** Es wird mit der Zeit natürlicher. Viele Anfänger übertreiben es - es sollte nicht ZU guttural klingen!
    `,
    examples: [
      { french: 'rue', german: 'Straße', notes: 'Aussprache: [ʁy]' },
      { french: 'rouge', german: 'rot', notes: 'Aussprache: [ʁuʒ]' },
      { french: 'merci', german: 'danke', notes: 'Aussprache: [mɛʁsi]' }
    ]
  },

  // Section 5: Personal Pronouns
  {
    id: 'personal-pronouns',
    title: 'Personalpronomen',
    type: 'table',
    content: `
Die französischen Personalpronomen sind dem Deutschen sehr ähnlich - aber es gibt wichtige Unterschiede!

| Person | Französisch | Deutsch | Aussprache | Besonderheiten |
|--------|-------------|---------|------------|----------------|
| 1. Sg. | je | ich | [ʒə] | Wird vor Vokalen zu "j'": j'aime |
| 2. Sg. (informell) | tu | du | [ty] | Für Freunde, Familie, Kinder |
| 3. Sg. (m) | il | er | [il] | Für männliche Personen UND Dinge |
| 3. Sg. (f) | elle | sie | [ɛl] | Für weibliche Personen UND Dinge |
| 1. Pl. | nous | wir | [nu] | Wird seltener - oft ersetzt durch "on" |
| 2. Pl. / formell | vous | ihr / Sie | [vu] | DOPPELFUNKTION: Plural "ihr" UND höflich "Sie" |
| 3. Pl. (m/gemischt) | ils | sie | [il] | Für mehrere Männer ODER gemischte Gruppe |
| 3. Pl. (f) | elles | sie | [ɛl] | NUR für rein weibliche Gruppen |
    `,
    germanExplanation: 'Im Französischen gibt es KEIN neutrales "es" - alle Dinge sind männlich oder weiblich!'
  },

  // Section 6: Tu vs. Vous
  {
    id: 'tu-vs-vous',
    title: 'Tu vs. Vous - Wie "du" vs. "Sie"',
    type: 'comparison',
    content: `
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

  // Section 7: Verb être
  {
    id: 'verb-etre',
    title: 'Das Verb "être" (sein)',
    type: 'table',
    content: `
"Être" ist das wichtigste Verb im Französischen - genau wie "sein" im Deutschen.
Es ist UNREGELMÄSSIG - die Formen müssen auswendig gelernt werden.

## Konjugation im Präsens (Présent)

| Pronomen | être | Aussprache | Deutsch | Beispiel |
|----------|------|------------|---------|----------|
| je | suis | [sɥi] | ich bin | Je suis content. (Ich bin zufrieden.) |
| tu | es | [ɛ] | du bist | Tu es fatigué. (Du bist müde.) |
| il/elle | est | [ɛ] | er/sie ist | Elle est professeure. (Sie ist Lehrerin.) |
| nous | sommes | [sɔm] | wir sind | Nous sommes français. (Wir sind Franzosen.) |
| vous | êtes | [ɛt] | ihr seid / Sie sind | Vous êtes étudiants. (Ihr seid Studenten.) |
| ils/elles | sont | [sɔ̃] | sie sind | Ils sont contents. (Sie sind zufrieden.) |

**Merkhilfe:** Lerne die Formen als Einheit: "je-suis, tu-es, il-est, nous-sommes, vous-êtes, ils-sont"
Sprich sie laut als Rhythmus - das hilft beim Merken!
    `
  },

  // Section 8: Être Usage
  {
    id: 'etre-usage',
    title: 'Verwendung von être',
    type: 'example',
    content: `
**être** wird verwendet für:

### 1. Identität / Beruf
**Beachte:** KEIN Artikel vor dem Beruf!
    `,
    examples: [
      { french: 'Je suis étudiant.', german: 'Ich bin Student.' },
      { french: 'Elle est médecin.', german: 'Sie ist Ärztin.' },
      { french: 'Nous sommes français.', german: 'Wir sind Franzosen.' }
    ]
  },

  // Section 9: Greetings
  {
    id: 'greetings',
    title: 'Grundlegende Begrüßungen',
    type: 'table',
    content: `
| Französisch | Aussprache | Deutsch | Verwendung |
|-------------|------------|---------|------------|
| Bonjour | [bɔ̃ʒuʁ] | Guten Tag / Hallo | Formell oder informell, tagsüber (bis ca. 18 Uhr) |
| Bonsoir | [bɔ̃swaʁ] | Guten Abend | Ab ca. 18 Uhr abends |
| Salut | [saly] | Hi / Tschüss | Informell unter Freunden |
| Bonne nuit | [bɔn nɥi] | Gute Nacht | Beim Schlafengehen |
| Au revoir | [oʁəvwaʁ] | Auf Wiedersehen | Formeller Abschied |
| À bientôt | [a bjɛ̃to] | Bis bald | Wenn man sich bald wieder sieht |

**WICHTIG:** In Frankreich IMMER mit "Bonjour" beginnen - sehr wichtig für die Höflichkeit!
    `
  },

  // Section 10: Polite Phrases
  {
    id: 'politeness',
    title: 'Höflichkeitsformen',
    type: 'example',
    content: `
Höflichkeit ist im Französischen sehr wichtig!
    `,
    examples: [
      { french: 'S\'il vous plaît', german: 'Bitte (höflich)', notes: 'Formelle Sie-Form' },
      { french: 'S\'il te plaît', german: 'Bitte (informell)', notes: 'Informelle Du-Form' },
      { french: 'Merci', german: 'Danke', notes: 'Universal verwendbar' },
      { french: 'Merci beaucoup', german: 'Vielen Dank', notes: 'Für extra Dankbarkeit' },
      { french: 'De rien', german: 'Gern geschehen', notes: 'Antwort auf "merci"' },
      { french: 'Pardon', german: 'Entschuldigung', notes: 'Um Aufmerksamkeit bitten' },
      { french: 'Excusez-moi', german: 'Entschuldigen Sie', notes: 'Höflicher als "pardon"' }
    ]
  },

  // Section 11: Introductions
  {
    id: 'introductions',
    title: 'Sich vorstellen',
    type: 'example',
    content: `
Grundlegende Phrasen für Vorstellungen:
    `,
    examples: [
      { french: 'Comment tu t\'appelles?', german: 'Wie heißt du?', notes: 'Informell (tu)' },
      { french: 'Comment vous vous appelez?', german: 'Wie heißen Sie?', notes: 'Formell (vous)' },
      { french: 'Je m\'appelle...', german: 'Ich heiße...', notes: 'Standard-Phrase für Vorstellungen' },
      { french: 'Enchanté(e)', german: 'Angenehm / Freut mich', notes: 'Männer: enchanté, Frauen: enchantée' },
      { french: 'Comment ça va?', german: 'Wie geht\'s?', notes: 'Sehr häufig! Oft verkürzt zu "Ça va?"' },
      { french: 'Ça va bien, merci.', german: 'Mir geht\'s gut, danke.', notes: 'Standard-Antwort' },
      { french: 'Et toi?', german: 'Und du?', notes: 'Informell' },
      { french: 'Et vous?', german: 'Und Sie / ihr?', notes: 'Formell oder Plural' }
    ]
  },

  // Section 12: Dialogue Example 1
  {
    id: 'dialogue-informal',
    title: 'Dialog: Erste Begegnung (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Zwei Studenten treffen sich zum ersten Mal

**Marie:** Salut!
**Pierre:** Salut! Comment tu t'appelles?
**Marie:** Je m'appelle Marie. Et toi?
**Pierre:** Moi, c'est Pierre. Enchanté!
**Marie:** Enchantée! Ça va?
**Pierre:** Ça va bien, merci. Et toi?
**Marie:** Ça va bien aussi!

---

**Beachte:**
- "Moi, c'est..." ist eine entspannte Alternative zu "Je m'appelle"
- "Enchanté/Enchantée" ist sehr höflich - unter Jugendlichen optional
- Das Gespräch ist sehr kurz und direkt - typisch für Frankreich
    `
  },

  // Section 13: Dialogue Example 2
  {
    id: 'dialogue-formal',
    title: 'Dialog: Formelle Vorstellung',
    type: 'dialogue',
    content: `
**Situation:** Geschäftstreffen - zwei Erwachsene stellen sich vor

**M. Dupont:** Bonjour!
**Mme Martin:** Bonjour! Comment vous vous appelez?
**M. Dupont:** Je m'appelle Jean Dupont. Et vous?
**Mme Martin:** Sophie Martin. Enchantée.
**M. Dupont:** Enchanté. Vous êtes française?
**Mme Martin:** Oui, je suis française. Et vous?
**M. Dupont:** Je suis allemand.

---

**Beachte:**
- "Bonjour" ist förmlicher als "Salut"
- "Vous êtes" wird für die höfliche Sie-Form benutzt
- Nationalitäten schreibt man im Französischen KLEIN: français, allemand
    `
  },

  // Section 14: Numbers
  {
    id: 'numbers',
    title: 'Zahlen 1-10 (Les nombres)',
    type: 'table',
    content: `
| Zahl | Französisch | Aussprache | Besonderheiten |
|------|-------------|------------|----------------|
| 1 | un | [œ̃] | Maskulin. Feminin = "une" [yn] |
| 2 | deux | [dø] | Wie deutsches "dö" |
| 3 | trois | [tʁwa] | Das französische R! |
| 4 | quatre | [katʁ] | Betonung auf erster Silbe |
| 5 | cinq | [sɛ̃k] | Das -q wird ausgesprochen (CaReFuL!) |
| 6 | six | [sis] | Wie "siß". Vor Konsonant: [si] |
| 7 | sept | [sɛt] | Das -p ist stumm |
| 8 | huit | [ɥit] | Beginnt mit [ɥ] wie "üi" |
| 9 | neuf | [nœf] | F wird ausgesprochen (CaReFuL!) |
| 10 | dix | [dis] | Wie "diß". Vor Konsonant: [di] |
    `
  },

  // Section 15: Number Liaison
  {
    id: 'number-liaison',
    title: 'Aussprache-Besonderheiten bei Zahlen',
    type: 'tip',
    content: `
## Liaison bei 2, 3, 6, 10

Wenn nach der Zahl ein Vokal kommt, verändert sich die Aussprache:

- deux heures [døz‿œʁ] - Das -x wird zu [z]
- trois ans [tʁwaz‿ɑ̃] - Das -s wird zu [z]
- six enfants [siz‿ɑ̃fɑ̃] - Das -x wird zu [z]
- dix euros [diz‿øʁo] - Das -x wird zu [z]

Dies nennt man "Liaison" - eine typisch französische Erscheinung!

## Verstummen bei 6 und 10

Wenn nach "six" oder "dix" ein Konsonant kommt, wird das Ende nicht ausgesprochen:

- six personnes [si pɛʁsɔn] - Das -x ist stumm
- dix francs [di fʁɑ̃] - Das -x ist stumm

Aber:
- six [sis] alleine - volle Aussprache
- dix [dis] alleine - volle Aussprache
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Personal Pronouns
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

  // Être conjugations
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

  // Adjectives
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

  // Numbers
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
// EXERCISES
// ============================================================================

// Guided Practice: Easy exercises (8 exercises)
const guidedPractice: Exercise[] = [
  {
    id: 'guided-1',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wähle das richtige Pronomen: ___ suis étudiant. (Ich bin Student.)',
    options: ['je', 'tu', 'il', 'nous'],
    correctAnswer: 'je',
    explanation: '"je" bedeutet "ich". Die richtige Form von être ist "je suis".',
    hints: [
      'Welches Pronomen bedeutet "ich"?',
      'Das Pronomen für "ich" ist je.'
    ],
    tags: ['pronouns', 'être']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welches Pronomen bedeutet "du"?',
    options: ['je', 'tu', 'vous', 'nous'],
    correctAnswer: 'tu',
    explanation: '"tu" ist die informelle Form für "du", während "vous" die formelle Form "Sie" oder Plural "ihr" ist.',
    hints: [
      'Es ist nicht die formelle Form.',
      'Die informelle Form ist tu.'
    ],
    tags: ['pronouns']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ content. (Ich bin zufrieden.)',
    correctAnswer: 'suis',
    explanation: 'Die Form von être für "je" ist "suis".',
    hints: [
      'Die Konjugation beginnt mit s.',
      'Es ist "suis".'
    ],
    tags: ['être', 'conjugation']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Tu ___ fatigué. (Du bist müde.)',
    correctAnswer: 'es',
    explanation: 'Die Form von être für "tu" ist "es".',
    hints: [
      'Es ist eine sehr kurze Form.',
      'Es ist nur zwei Buchstaben: "es".'
    ],
    tags: ['être', 'conjugation']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: Hallo',
    correctAnswer: 'bonjour',
    explanation: '"Bonjour" ist die Standard-Begrüßung im Französischen.',
    hints: [
      'Es bedeutet wörtlich "guter Tag".',
      'Es ist "bonjour".'
    ],
    tags: ['greetings', 'vocabulary']
  },
  {
    id: 'guided-6',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze: Danke',
    correctAnswer: 'merci',
    explanation: '"Merci" bedeutet "Danke".',
    hints: [
      'Es ist ein sehr kurzes Wort.',
      'Es ist "merci".'
    ],
    tags: ['greetings', 'politeness']
  },
  {
    id: 'guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man "fünf" auf Französisch?',
    options: ['quatre', 'cinq', 'six', 'sept'],
    correctAnswer: 'cinq',
    explanation: '"cinq" [sɛ̃k] bedeutet "fünf". Das -q wird ausgesprochen!',
    hints: [
      'Es beginnt mit c.',
      'Es ist "cinq".'
    ],
    tags: ['numbers']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "huit"?',
    options: ['sechs', 'sieben', 'acht', 'neun'],
    correctAnswer: 'acht',
    explanation: '"huit" [ɥit] bedeutet "acht".',
    hints: [
      'Es ist eine Zahl zwischen 7 und 9.',
      'Es ist acht.'
    ],
    tags: ['numbers']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Marie und Sophie sind zusammen. Welches Pronomen?',
    options: ['ils', 'elles', 'nous', 'vous'],
    correctAnswer: 'elles',
    explanation: '"elles" wird für rein weibliche Gruppen benutzt. "ils" wäre bei gemischten oder männlichen Gruppen.',
    hints: [
      'Beide sind weibliche Namen.',
      'Bei nur Frauen benutzt man "elles".'
    ],
    tags: ['pronouns', 'gender']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ français. (Wir sind Franzosen.)',
    correctAnswer: 'sommes',
    explanation: 'Die Form von être für "nous" ist "sommes".',
    hints: [
      'Es beginnt mit s und hat zwei m.',
      'Es ist "sommes".'
    ],
    tags: ['être', 'conjugation']
  },
  {
    id: 'independent-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ professeur? (Sind Sie Lehrer?)',
    correctAnswer: ['êtes', 'etes'],
    explanation: 'Die Form von être für "vous" ist "êtes" (mit accent circonflexe).',
    hints: [
      'Es hat ein accent circonflexe (^).',
      'Es ist "êtes".'
    ],
    tags: ['être', 'conjugation']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ils ___ étudiants. (Sie sind Studenten.)',
    correctAnswer: 'sont',
    explanation: 'Die Form von être für "ils/elles" ist "sont".',
    hints: [
      'Es ist ein Nasalvokal!',
      'Es ist "sont" [sɔ̃].'
    ],
    tags: ['être', 'conjugation']
  },
  {
    id: 'independent-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich bin Student.',
    correctAnswer: ['Je suis étudiant.', 'Je suis étudiant', 'je suis étudiant'],
    explanation: 'WICHTIG: Kein Artikel vor Beruf! "Je suis étudiant" (nicht "un étudiant").',
    hints: [
      'Benutze "je suis".',
      'KEIN Artikel vor dem Beruf!',
      'Es ist "Je suis étudiant."'
    ],
    tags: ['être', 'professions', 'translation']
  },
  {
    id: 'independent-6',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Wie heißt du?',
    correctAnswer: ['Comment tu t\'appelles?', 'Comment tu t\'appelles', 'comment tu t\'appelles?'],
    explanation: 'Die Phrase ist "Comment tu t\'appelles?" (wörtlich: "Wie rufst du dich?").',
    hints: [
      'Es beginnt mit "Comment".',
      'Es ist "Comment tu t\'appelles?"'
    ],
    tags: ['introductions', 'phrases']
  },
  {
    id: 'independent-7',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Elle est professeur.',
    correctAnswer: ['Sie ist Lehrerin.', 'Sie ist Lehrerin', 'sie ist Lehrerin'],
    explanation: '"Elle" = sie, "est" = ist, "professeur" = Lehrer(in).',
    hints: [
      '"Elle" bedeutet "sie".',
      'Es ist "Sie ist Lehrerin."'
    ],
    tags: ['être', 'professions', 'translation']
  },
  {
    id: 'independent-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze: Nous sommes français.',
    correctAnswer: ['Wir sind Franzosen.', 'Wir sind Franzosen', 'wir sind Franzosen', 'Wir sind französisch'],
    explanation: '"Nous" = wir, "sommes" = sind, "français" = Franzosen/französisch.',
    hints: [
      '"Nous" bedeutet "wir".',
      'Es ist "Wir sind Franzosen."'
    ],
    tags: ['être', 'nationality', 'translation']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Du triffst morgens um 10 Uhr einen Fremden. Was sagst du?',
    options: ['Salut', 'Bonjour', 'Bonsoir', 'Bonne nuit'],
    correctAnswer: 'Bonjour',
    explanation: '"Bonjour" wird tagsüber benutzt und ist formell genug für Fremde. "Salut" wäre zu informell.',
    hints: [
      'Es muss formell sein.',
      'Es ist tagsüber.',
      'Es ist "Bonjour".'
    ],
    tags: ['greetings', 'context']
  },
  {
    id: 'independent-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Es ist 19 Uhr abends. Welche Begrüßung passt?',
    options: ['Bonjour', 'Bonsoir', 'Salut', 'Bonne nuit'],
    correctAnswer: 'Bonsoir',
    explanation: '"Bonsoir" wird ab ca. 18 Uhr abends benutzt. "Bonne nuit" nur beim Schlafengehen!',
    hints: [
      'Es ist abends, aber noch nicht Schlafenszeit.',
      'Es ist "Bonsoir".'
    ],
    tags: ['greetings', 'context']
  }
];

// Assessment: Hard exercises (4 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Pierre und Marie (Mann und Frau) gehen zusammen. Welches Pronomen?',
    options: ['ils', 'elles', 'nous', 'vous'],
    correctAnswer: 'ils',
    explanation: 'Bei gemischten Gruppen (Mann + Frau) wird "ils" benutzt, nicht "elles". "elles" nur für rein weibliche Gruppen!',
    tags: ['pronouns', 'gender', 'context']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— Bonjour! Comment vous vous ___?\n— Je ___ Paul.',
    correctAnswer: ['appelez, m\'appelle', 'appelez m\'appelle'],
    explanation: '"Comment vous vous appelez?" (Wie heißen Sie?) und "Je m\'appelle" (Ich heiße).',
    tags: ['introductions', 'dialogue', 'verbs']
  },
  {
    id: 'assess-3',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Ergänze die Zahl: J\'ai ___ chats. (Ich habe drei Katzen.)',
    correctAnswer: 'trois',
    explanation: '"trois" bedeutet "drei".',
    tags: ['numbers', 'context']
  },
  {
    id: 'assess-4',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Au revoir',
    correctAnswer: ['Auf Wiedersehen', 'auf Wiedersehen', 'Auf wiedersehen', 'Tschüss'],
    explanation: '"Au revoir" bedeutet "Auf Wiedersehen" (formeller Abschied).',
    tags: ['greetings', 'farewell']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson01: Lesson = {
  meta: {
    id: 'lesson-01',
    number: 1,
    title: 'Premiers Pas',
    titleGerman: 'Erste Schritte',
    objectives: [
      'Das französische Alphabet und grundlegende Ausspracheregeln verstehen',
      'Alle Personalpronomen kennen und korrekt anwenden',
      'Das Verb "être" in allen Formen konjugieren können',
      'Sich auf Französisch vorstellen und begrüßen können',
      'Von 1 bis 10 zählen',
      'Einfache Sätze mit être bilden können'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: [],
    tags: ['greetings', 'être', 'pronunciation', 'numbers', 'pronouns', 'introductions']
  },

  introduction: {
    objectives: [
      'Verstehen, wie sich französische Aussprache vom Deutschen unterscheidet',
      'Die wichtigsten Höflichkeitsformen lernen',
      'Sich vorstellen und andere nach dem Namen fragen können',
      'Das wichtigste Verb "être" (sein) konjugieren'
    ],
    motivation: `
Willkommen zu deiner ersten Französisch-Lektion! In dieser Lektion legst du das Fundament für deine gesamte
französische Sprachreise. Du lernst, dich vorzustellen, zu grüßen und die ersten einfachen Sätze zu bilden.

Das Verb "être" (sein) ist das wichtigste Verb im Französischen - mit ihm kannst du bereits sehr viel ausdrücken!
    `,
    culturalNote: `
**Die Wichtigkeit von "Bonjour"**

In Frankreich ist es SEHR wichtig, beim Betreten eines Geschäfts, Restaurants oder bei jeder Interaktion mit
"Bonjour" zu grüßen. Es gilt als unhöflich, direkt mit einer Frage zu beginnen!

**Tu vs. Vous**

Franzosen duzen ("tu") schneller als Deutsche. Unter Studenten und jungen Leuten ist "tu" sehr verbreitet.
Im Zweifel beginne mit "vous" - dein Gegenüber wird vorschlagen, zum "tu" zu wechseln, wenn angemessen.
    `
  },

  teaching: {
    sections: teachingSections,
    vocabulary: vocabulary
  },

  guidedPractice: guidedPractice,
  independentPractice: independentPractice,
  assessment: assessment,

  review: {
    summary: [
      'Du hast die Grundlagen der französischen Aussprache kennengelernt (besonders Nasalvokale und das französische R)',
      'Du kennst alle 8 Personalpronomen und ihre Verwendung',
      'Du kannst das Verb "être" in allen Formen konjugieren',
      'Du kannst dich vorstellen und nach dem Namen fragen',
      'Du kannst angemessen grüßen (bonjour, bonsoir, salut)',
      'Du kennst die wichtigsten Höflichkeitsformen (merci, s\'il vous plaît, pardon)',
      'Du kannst von 1 bis 10 zählen'
    ],
    nextLesson: 'lesson-02'
  }
};
