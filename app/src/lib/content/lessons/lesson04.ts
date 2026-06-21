import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 04: Professions - Berufe
 * Talking about jobs, daily activities and languages in French for German speakers
 *
 * Level: A1 (Absolute Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Professions and occupations
 * - Present tense of regular -ER verbs (travailler, parler, habiter, aimer, étudier)
 * - The question word "Qu'est-ce que"
 * - Languages
 * - Stating profession and daily activities
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction to -ER verbs
  {
    id: 'er-verbs-intro',
    title: 'Die regelmäßigen Verben auf -ER',
    type: 'explanation',
    content: `
Im Französischen enden die meisten Verben auf **-er**. Sie sind regelmäßig - das bedeutet,
sie folgen alle demselben Muster! Wenn du EIN -er-Verb konjugieren kannst, kannst du Tausende.

**Wie funktioniert es?**

1. Nimm das Verb, z.B. **parler** (sprechen)
2. Entferne die Endung **-er** → das ist der "Stamm": **parl-**
3. Hänge die passende Endung an

**Die sechs Endungen:**

- je → **-e**
- tu → **-es**
- il/elle → **-e**
- nous → **-ons**
- vous → **-ez**
- ils/elles → **-ent**

**Wichtig für die Aussprache:** Die Endungen **-e, -es, -ent** sind alle STUMM!
Das heißt: "je parle", "tu parles" und "ils parlent" klingen fast gleich [paʁl]!
    `,
    germanExplanation: 'Anders als im Deutschen klingen viele Verbformen gleich - der Unterschied liegt nur im Pronomen.',
    examples: [
      { french: 'je parle', german: 'ich spreche', notes: 'Aussprache: [ʒə paʁl] - das -e ist stumm' },
      { french: 'nous parlons', german: 'wir sprechen', notes: 'Aussprache: [nu paʁlɔ̃] - hörbare Endung' }
    ]
  },

  // Section 2: Conjugation table parler
  {
    id: 'parler-table',
    title: 'Konjugation: parler (sprechen)',
    type: 'table',
    content: `
"parler" ist das Musterbeispiel für alle regelmäßigen -ER-Verben.
Lerne dieses Muster auswendig - es gilt für alle!

| Pronomen | parler | Aussprache | Deutsch |
|----------|--------|------------|---------|
| je | parle | [paʁl] | ich spreche |
| tu | parles | [paʁl] | du sprichst |
| il/elle | parle | [paʁl] | er/sie spricht |
| nous | parlons | [paʁlɔ̃] | wir sprechen |
| vous | parlez | [paʁle] | ihr sprecht / Sie sprechen |
| ils/elles | parlent | [paʁl] | sie sprechen |

**Merke:** Vier von sechs Formen (je, tu, il/elle, ils/elles) werden gleich ausgesprochen!
Nur **nous** [-ɔ̃] und **vous** [-e] klingen anders.
    `,
    germanExplanation: 'Der Stamm "parl-" bleibt immer gleich, nur die Endung wechselt.'
  },

  // Section 3: travailler
  {
    id: 'travailler-table',
    title: 'Konjugation: travailler (arbeiten)',
    type: 'table',
    content: `
"travailler" (arbeiten) folgt demselben Muster. Der Stamm ist **travaill-**.

| Pronomen | travailler | Aussprache | Deutsch |
|----------|------------|------------|---------|
| je | travaille | [tʁavaj] | ich arbeite |
| tu | travailles | [tʁavaj] | du arbeitest |
| il/elle | travaille | [tʁavaj] | er/sie arbeitet |
| nous | travaillons | [tʁavajɔ̃] | wir arbeiten |
| vous | travaillez | [tʁavaje] | ihr arbeitet / Sie arbeiten |
| ils/elles | travaillent | [tʁavaj] | sie arbeiten |

**Falscher Freund - Achtung!** "travailler" bedeutet "arbeiten", NICHT "reisen".
"Reisen" heißt "voyager".
    `,
    germanExplanation: 'Das "-ill-" wird wie ein deutsches "j" gesprochen [j].'
  },

  // Section 4: aimer (vowel start)
  {
    id: 'aimer-table',
    title: 'Konjugation: aimer (mögen/lieben)',
    type: 'table',
    content: `
"aimer" beginnt mit einem Vokal. Deshalb gibt es eine Besonderheit bei "je":
Aus "je" wird **"j'"** (Elision)!

| Pronomen | aimer | Aussprache | Deutsch |
|----------|-------|------------|---------|
| j' | aime | [ʒɛm] | ich mag/liebe |
| tu | aimes | [ɛm] | du magst |
| il/elle | aime | [ɛm] | er/sie mag |
| nous | aimons | [ɛmɔ̃] | wir mögen |
| vous | aimez | [ɛme] | ihr mögt / Sie mögen |
| ils/elles | aiment | [ɛm] | sie mögen |

**Beachte:** "je aime" gibt es NICHT - es heißt immer **"j'aime"**.

"aimer" + Verb bedeutet "gerne etwas tun":
"J'aime travailler." = "Ich arbeite gerne."
    `,
    germanExplanation: 'Vor einem Vokal verschmilzt "je" zu "j\'" - das passiert bei allen Verben, die mit Vokal beginnen.'
  },

  // Section 5: habiter and étudier
  {
    id: 'habiter-etudier',
    title: 'Weitere wichtige -ER-Verben: habiter & étudier',
    type: 'example',
    content: `
**habiter** (wohnen) - das H ist stumm, also auch hier Elision: **j'habite**!
**étudier** (studieren/lernen) - beginnt mit Vokal: **j'étudie**!
    `,
    examples: [
      { french: 'J\'habite à Paris.', german: 'Ich wohne in Paris.', notes: 'stummes H → j\'habite' },
      { french: 'Tu habites à Berlin?', german: 'Wohnst du in Berlin?', notes: 'Aussprache: [ty abit]' },
      { french: 'Nous habitons en France.', german: 'Wir wohnen in Frankreich.' },
      { french: 'J\'étudie le français.', german: 'Ich lerne Französisch.', notes: 'étudier mit Vokal → j\'étudie' },
      { french: 'Elle étudie à l\'université.', german: 'Sie studiert an der Universität.' }
    ]
  },

  // Section 6: Professions overview table
  {
    id: 'professions-table',
    title: 'Berufe (Les professions)',
    type: 'table',
    content: `
Viele Berufe haben eine maskuline und eine feminine Form. Oft hängt man im Femininen ein **-e** an.

| Maskulin | Feminin | Aussprache (m) | Deutsch |
|----------|---------|----------------|---------|
| le médecin | la médecin | [medsɛ̃] | Arzt / Ärztin |
| l'ingénieur | l'ingénieure | [ɛ̃ʒenjœʁ] | Ingenieur(in) |
| le professeur | la professeure | [pʁɔfesœʁ] | Lehrer(in) |
| l'avocat | l'avocate | [avɔka] | Anwalt / Anwältin |
| le serveur | la serveuse | [sɛʁvœʁ] | Kellner / Kellnerin |
| le vendeur | la vendeuse | [vɑ̃dœʁ] | Verkäufer(in) |
| le boulanger | la boulangère | [bulɑ̃ʒe] | Bäcker(in) |
| l'étudiant | l'étudiante | [etydjɑ̃] | Student(in) |

**Beachte:** "médecin" bleibt im Femininen oft gleich. Manche Berufe ändern stärker:
serveur → serveuse, vendeur → vendeuse (Endung -euse).
    `,
    germanExplanation: 'Der Artikel (le/la) zeigt das Geschlecht. Vor Vokal oder stummem H wird er zu "l\'".'
  },

  // Section 7: No article rule
  {
    id: 'no-article-profession',
    title: 'Kein Artikel beim Beruf!',
    type: 'tip',
    content: `
Eine sehr wichtige Regel: Nach **être** (sein) steht der Beruf OHNE Artikel!

Das ist anders als im Deutschen, wo wir auch keinen Artikel benutzen ("Ich bin Arzt"),
aber anders als im Englischen ("I am a doctor").

**Richtig:**
- Je suis médecin. (Ich bin Arzt.)
- Elle est avocate. (Sie ist Anwältin.)
- Il est professeur. (Er ist Lehrer.)

**Falsch:**
- ❌ Je suis un médecin.
- ❌ Elle est une avocate.

**Merke:** être + Beruf = KEIN Artikel!
    `,
    germanExplanation: 'Diese Regel gilt nur für Berufe, Nationalitäten und Religionen nach être.'
  },

  // Section 8: Qu'est-ce que
  {
    id: 'questce-que',
    title: 'Die Frage "Qu\'est-ce que" (Was)',
    type: 'explanation',
    content: `
"Qu'est-ce que" bedeutet **"Was"** und ist eine der häufigsten Fragestrukturen im Französischen.

Aussprache: [kɛs kə] - sehr wichtig, das wirkt geschrieben kompliziert, klingt aber einfach!

**Aufbau:** Qu'est-ce que + Subjekt + Verb?

Beispiele:
- **Qu'est-ce que** tu fais? = Was machst du?
- **Qu'est-ce que** vous étudiez? = Was studieren Sie?
- **Qu'est-ce qu'**il aime? = Was mag er? (vor Vokal → qu')

**Für Berufe besonders nützlich:**
- Qu'est-ce que tu fais dans la vie? = Was machst du beruflich? (wörtlich: "im Leben")

**Beachte:** Vor einem Vokal wird "que" zu "qu'": Qu'est-ce qu'elle fait?
    `,
    germanExplanation: '"Qu\'est-ce que" ist eine feste Wendung - lerne sie als Einheit, nicht Wort für Wort.'
  },

  // Section 9: Languages
  {
    id: 'languages-table',
    title: 'Die Sprachen (Les langues)',
    type: 'table',
    content: `
Sprachen sind im Französischen maskulin und werden klein geschrieben.
Mit dem Verb "parler" benutzt man sie meist OHNE Artikel.

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| le français | [fʁɑ̃sɛ] | Französisch |
| l'allemand | [almɑ̃] | Deutsch |
| l'anglais | [ɑ̃glɛ] | Englisch |
| l'espagnol | [ɛspaɲɔl] | Spanisch |
| l'italien | [italjɛ̃] | Italienisch |

**Mit parler meist ohne Artikel:**
- Je parle français. (Ich spreche Französisch.)
- Tu parles allemand? (Sprichst du Deutsch?)

**Mit étudier/aimer oft mit Artikel:**
- J'étudie **le** français. (Ich lerne Französisch.)
    `,
    germanExplanation: 'Sprachen schreibt man im Französischen immer klein - wie Nationalitäten!'
  },

  // Section 10: Activities
  {
    id: 'activities',
    title: 'Alltägliche Aktivitäten',
    type: 'example',
    content: `
Mit den -ER-Verben kannst du über deinen Alltag sprechen:
    `,
    examples: [
      { french: 'Je travaille dans un bureau.', german: 'Ich arbeite in einem Büro.' },
      { french: 'Elle étudie à l\'université.', german: 'Sie studiert an der Universität.' },
      { french: 'Nous habitons à Lyon.', german: 'Wir wohnen in Lyon.' },
      { french: 'Ils parlent trois langues.', german: 'Sie sprechen drei Sprachen.' },
      { french: 'J\'aime mon travail.', german: 'Ich mag meine Arbeit.' }
    ]
  },

  // Section 11: Dialogue 1 informal
  {
    id: 'dialogue-jobs',
    title: 'Dialog: Über den Beruf sprechen (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Zwei junge Leute lernen sich auf einer Party kennen.

**Léa:** Salut! Qu'est-ce que tu fais dans la vie?
**Thomas:** Je suis ingénieur. Et toi?
**Léa:** Moi, je suis étudiante. J'étudie le français.
**Thomas:** Ah, intéressant! Tu parles allemand aussi?
**Léa:** Oui, je parle allemand et anglais.
**Thomas:** Super! Et tu habites où?
**Léa:** J'habite à Paris. Et toi?
**Thomas:** Moi aussi! Je travaille dans un bureau à Paris.

---

**Beachte:**
- "Qu'est-ce que tu fais dans la vie?" ist DIE typische Frage nach dem Beruf
- "Je suis ingénieur" - kein Artikel vor dem Beruf!
- "tu habites où?" - "où" bedeutet "wo"
    `
  },

  // Section 12: Dialogue 2 formal
  {
    id: 'dialogue-formal-jobs',
    title: 'Dialog: Formelles Gespräch über die Arbeit',
    type: 'dialogue',
    content: `
**Situation:** Bei einem Geschäftsessen unterhalten sich zwei Erwachsene.

**Mme Leroy:** Bonjour! Qu'est-ce que vous faites comme travail?
**M. Bernard:** Je suis avocat. Je travaille à Lyon.
**Mme Leroy:** Très bien. Vous parlez anglais?
**M. Bernard:** Oui, je parle anglais et un peu d'allemand. Et vous?
**Mme Leroy:** Je suis médecin. Je travaille dans un hôpital.
**M. Bernard:** Vous aimez votre travail?
**Mme Leroy:** Oui, j'aime beaucoup mon travail!

---

**Beachte:**
- "Qu'est-ce que vous faites comme travail?" - formelle Variante (vous)
- "un peu de" bedeutet "ein bisschen"
- "beaucoup" bedeutet "sehr / viel"
    `
  },

  // Section 13: faire (irregular helper)
  {
    id: 'verb-faire',
    title: 'Das Verb "faire" (machen/tun)',
    type: 'explanation',
    content: `
Um nach dem Beruf zu fragen, braucht man oft das Verb **faire** (machen/tun).
"faire" ist UNREGELMÄSSIG, aber sehr nützlich. Hier die wichtigsten Formen:

- je **fais** [fɛ] - ich mache
- tu **fais** [fɛ] - du machst
- il/elle **fait** [fɛ] - er/sie macht
- nous **faisons** [fəzɔ̃] - wir machen
- vous **faites** [fɛt] - ihr macht / Sie machen
- ils/elles **font** [fɔ̃] - sie machen

**Die Schlüsselfrage:**
- Qu'est-ce que tu fais dans la vie? = Was machst du beruflich?
- Qu'est-ce que vous faites comme travail? = Was arbeiten Sie?
    `,
    germanExplanation: '"faire" ist unregelmäßig - merke dir besonders "vous faites" (NICHT "faisez"!).'
  },

  // Section 14: Comparison German-French verb endings
  {
    id: 'comparison-endings',
    title: 'Vergleich: Verbendungen Deutsch vs. Französisch',
    type: 'comparison',
    content: `
Im Deutschen UND Französischen ändert sich die Verbendung je nach Person.
Aber: Im Französischen sind viele Endungen STUMM!

**Deutsch (arbeiten):**
- ich arbeite, du arbeitest, er arbeitet, wir arbeiten...
- Jede Form klingt anders.

**Französisch (travailler):**
- je travaille, tu travailles, il travaille → klingen ALLE gleich [tʁavaj]!
- Nur nous (travaillons) und vous (travaillez) klingen anders.

**Was bedeutet das für dich?**
- Beim Sprechen ist das Pronomen entscheidend - man hört oft nur am Pronomen, wer gemeint ist.
- Beim Schreiben musst du trotzdem die richtige Endung wählen!

**Tipp:** Achte beim Schreiben besonders auf -s (tu) und -nt (ils/elles), auch wenn man sie nicht hört.
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // -ER Verbs (infinitives)
  {
    id: 'lesson4-verb-parler',
    french: 'parler',
    german: 'sprechen / reden',
    english: 'to speak',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je parle français.',
      german: 'Ich spreche Französisch.'
    },
    notes: 'Regelmäßiges -ER-Verb. Stamm: parl-',
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb', 'essential']
  },
  {
    id: 'lesson4-verb-travailler',
    french: 'travailler',
    german: 'arbeiten',
    english: 'to work',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je travaille dans un bureau.',
      german: 'Ich arbeite in einem Büro.'
    },
    notes: 'Falscher Freund! Bedeutet "arbeiten", nicht "reisen". Stamm: travaill-',
    isFalseFriend: true,
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb', 'essential']
  },
  {
    id: 'lesson4-verb-habiter',
    french: 'habiter',
    german: 'wohnen',
    english: 'to live (somewhere)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'habite à Paris.',
      german: 'Ich wohne in Paris.'
    },
    notes: 'Stummes H → j\'habite (Elision). Stamm: habit-',
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb', 'essential']
  },
  {
    id: 'lesson4-verb-aimer',
    french: 'aimer',
    german: 'mögen / lieben / gern haben',
    english: 'to like / to love',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime mon travail.',
      german: 'Ich mag meine Arbeit.'
    },
    notes: 'Beginnt mit Vokal → j\'aime. aimer + Verb = etwas gern tun.',
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb', 'essential']
  },
  {
    id: 'lesson4-verb-etudier',
    french: 'étudier',
    german: 'studieren / lernen',
    english: 'to study',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'étudie le français.',
      german: 'Ich lerne Französisch.'
    },
    notes: 'Beginnt mit Vokal → j\'étudie. Stamm: étudi-',
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb', 'essential']
  },
  {
    id: 'lesson4-verb-faire',
    french: 'faire',
    german: 'machen / tun',
    english: 'to do / to make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Qu\'est-ce que tu fais?',
      german: 'Was machst du?'
    },
    notes: 'UNREGELMÄSSIG! je fais, tu fais, il fait, nous faisons, vous faites, ils font',
    level: 'A1',
    tags: ['lesson4', 'verb', 'irregular', 'essential']
  },
  {
    id: 'lesson4-verb-voyager',
    french: 'voyager',
    german: 'reisen',
    english: 'to travel',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime voyager.',
      german: 'Ich reise gerne.'
    },
    notes: 'Nicht verwechseln mit "travailler" (arbeiten)!',
    level: 'A1',
    tags: ['lesson4', 'verb', 'er-verb']
  },

  // Conjugated forms (parler)
  {
    id: 'lesson4-conj-jeparle',
    french: 'je parle',
    german: 'ich spreche',
    english: 'I speak',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je parle allemand.',
      german: 'Ich spreche Deutsch.'
    },
    notes: 'Endung -e ist stumm: [paʁl]',
    level: 'A1',
    tags: ['lesson4', 'verb', 'conjugation', 'er-verb']
  },
  {
    id: 'lesson4-conj-nousparlons',
    french: 'nous parlons',
    german: 'wir sprechen',
    english: 'we speak',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous parlons français.',
      german: 'Wir sprechen Französisch.'
    },
    notes: 'Endung -ons ist hörbar: [paʁlɔ̃]',
    level: 'A1',
    tags: ['lesson4', 'verb', 'conjugation', 'er-verb']
  },
  {
    id: 'lesson4-conj-vousparlez',
    french: 'vous parlez',
    german: 'ihr sprecht / Sie sprechen',
    english: 'you speak (pl/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous parlez anglais?',
      german: 'Sprechen Sie Englisch?'
    },
    notes: 'Endung -ez ist hörbar: [paʁle]',
    level: 'A1',
    tags: ['lesson4', 'verb', 'conjugation', 'er-verb']
  },
  {
    id: 'lesson4-conj-jhabite',
    french: 'j\'habite',
    german: 'ich wohne',
    english: 'I live',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'habite en Allemagne.',
      german: 'Ich wohne in Deutschland.'
    },
    notes: 'Elision wegen stummem H: j\'habite, nicht "je habite"',
    level: 'A1',
    tags: ['lesson4', 'verb', 'conjugation', 'er-verb']
  },
  {
    id: 'lesson4-conj-jaime',
    french: 'j\'aime',
    german: 'ich mag / ich liebe',
    english: 'I like / I love',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime mon travail.',
      german: 'Ich mag meine Arbeit.'
    },
    notes: 'Elision wegen Vokal: j\'aime, nicht "je aime"',
    level: 'A1',
    tags: ['lesson4', 'verb', 'conjugation', 'er-verb']
  },

  // Professions
  {
    id: 'lesson4-prof-medecin',
    french: 'médecin',
    german: 'Arzt / Ärztin',
    english: 'doctor',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Elle est médecin.',
      german: 'Sie ist Ärztin.'
    },
    notes: 'Bleibt im Femininen meist gleich. Kein Artikel nach être!',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession', 'essential']
  },
  {
    id: 'lesson4-prof-ingenieur',
    french: 'ingénieur',
    german: 'Ingenieur(in)',
    english: 'engineer',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je suis ingénieur.',
      german: 'Ich bin Ingenieur.'
    },
    notes: 'Feminin: ingénieure. Aussprache: [ɛ̃ʒenjœʁ]',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-professeur',
    french: 'professeur',
    german: 'Lehrer(in)',
    english: 'teacher',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est professeur.',
      german: 'Er ist Lehrer.'
    },
    notes: 'Modern auch feminin: professeure. Umgangssprachlich: le/la prof',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-avocat',
    french: 'avocat',
    german: 'Anwalt / Anwältin',
    english: 'lawyer',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Elle est avocate.',
      german: 'Sie ist Anwältin.'
    },
    notes: 'Feminin: avocate. Achtung: "avocat" heißt auch "Avocado"!',
    isFalseFriend: true,
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-serveur',
    french: 'serveur',
    german: 'Kellner',
    english: 'waiter',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est serveur dans un café.',
      german: 'Er ist Kellner in einem Café.'
    },
    notes: 'Feminin: serveuse (Endung -euse)',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-serveuse',
    french: 'serveuse',
    german: 'Kellnerin',
    english: 'waitress',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle est serveuse.',
      german: 'Sie ist Kellnerin.'
    },
    notes: 'Maskulin: serveur. Endung -euse ist typisch feminin.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-vendeuse',
    french: 'vendeuse',
    german: 'Verkäuferin',
    english: 'saleswoman',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle est vendeuse.',
      german: 'Sie ist Verkäuferin.'
    },
    notes: 'Maskulin: vendeur. Von vendre (verkaufen).',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-boulanger',
    french: 'boulanger',
    german: 'Bäcker',
    english: 'baker',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est boulanger.',
      german: 'Er ist Bäcker.'
    },
    notes: 'Feminin: boulangère. Die boulangerie = die Bäckerei.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },
  {
    id: 'lesson4-prof-etudiant',
    french: 'étudiant',
    german: 'Student',
    english: 'student',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je suis étudiant.',
      german: 'Ich bin Student.'
    },
    notes: 'Feminin: étudiante. Kein Artikel nach être!',
    level: 'A1',
    tags: ['lesson4', 'noun', 'profession']
  },

  // Languages
  {
    id: 'lesson4-lang-francais',
    french: 'le français',
    german: 'Französisch (Sprache)',
    english: 'French (language)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je parle français.',
      german: 'Ich spreche Französisch.'
    },
    notes: 'Sprachen sind maskulin. Mit parler oft ohne Artikel.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'language', 'essential']
  },
  {
    id: 'lesson4-lang-allemand',
    french: 'l\'allemand',
    german: 'Deutsch (Sprache)',
    english: 'German (language)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Tu parles allemand?',
      german: 'Sprichst du Deutsch?'
    },
    notes: 'Maskulin. Aussprache: [almɑ̃] - das H ist stumm.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'language', 'essential']
  },
  {
    id: 'lesson4-lang-anglais',
    french: 'l\'anglais',
    german: 'Englisch (Sprache)',
    english: 'English (language)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Elle parle anglais.',
      german: 'Sie spricht Englisch.'
    },
    notes: 'Maskulin. Aussprache: [ɑ̃glɛ]',
    level: 'A1',
    tags: ['lesson4', 'noun', 'language', 'essential']
  },
  {
    id: 'lesson4-lang-espagnol',
    french: 'l\'espagnol',
    german: 'Spanisch (Sprache)',
    english: 'Spanish (language)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Nous étudions l\'espagnol.',
      german: 'Wir lernen Spanisch.'
    },
    notes: 'Maskulin. Das -gn- wird wie "nj" gesprochen [ɲ].',
    level: 'A1',
    tags: ['lesson4', 'noun', 'language']
  },

  // Question words & useful words
  {
    id: 'lesson4-q-questce',
    french: 'qu\'est-ce que',
    german: 'was',
    english: 'what',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Qu\'est-ce que tu fais?',
      german: 'Was machst du?'
    },
    notes: 'Feste Wendung. Aussprache: [kɛs kə]. Vor Vokal: qu\'est-ce qu\'',
    level: 'A1',
    tags: ['lesson4', 'question', 'essential']
  },
  {
    id: 'lesson4-q-ou',
    french: 'où',
    german: 'wo',
    english: 'where',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Tu habites où?',
      german: 'Wo wohnst du?'
    },
    notes: 'Mit Accent grave (où), um es von "ou" (oder) zu unterscheiden.',
    level: 'A1',
    tags: ['lesson4', 'question']
  },
  {
    id: 'lesson4-word-travail',
    french: 'le travail',
    german: 'die Arbeit',
    english: 'work / job',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'aime mon travail.',
      german: 'Ich mag meine Arbeit.'
    },
    notes: 'Maskulin. Plural unregelmäßig: les travaux.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'work']
  },
  {
    id: 'lesson4-word-bureau',
    french: 'le bureau',
    german: 'das Büro / der Schreibtisch',
    english: 'office / desk',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je travaille dans un bureau.',
      german: 'Ich arbeite in einem Büro.'
    },
    notes: 'Maskulin. Plural: les bureaux.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'work']
  },
  {
    id: 'lesson4-word-universite',
    french: 'l\'université',
    german: 'die Universität',
    english: 'university',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle étudie à l\'université.',
      german: 'Sie studiert an der Universität.'
    },
    notes: 'Feminin! Trotz "l\'" maskulin/feminin nicht ablesbar - hier f.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'place']
  },
  {
    id: 'lesson4-word-hopital',
    french: 'l\'hôpital',
    german: 'das Krankenhaus',
    english: 'hospital',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le médecin travaille dans un hôpital.',
      german: 'Der Arzt arbeitet in einem Krankenhaus.'
    },
    notes: 'Maskulin. Stummes H. Plural: les hôpitaux.',
    level: 'A1',
    tags: ['lesson4', 'noun', 'place']
  },
  {
    id: 'lesson4-word-beaucoup',
    french: 'beaucoup',
    german: 'viel / sehr',
    english: 'a lot / very much',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'J\'aime beaucoup mon travail.',
      german: 'Ich mag meine Arbeit sehr.'
    },
    notes: 'Aussprache: [boku] - das -p ist stumm.',
    level: 'A1',
    tags: ['lesson4', 'adverb']
  },
  {
    id: 'lesson4-word-unpeu',
    french: 'un peu',
    german: 'ein bisschen / ein wenig',
    english: 'a little',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je parle un peu d\'allemand.',
      german: 'Ich spreche ein bisschen Deutsch.'
    },
    notes: '"un peu de" + Sprache: ein bisschen einer Sprache.',
    level: 'A1',
    tags: ['lesson4', 'adverb']
  },
  {
    id: 'lesson4-word-dans',
    french: 'dans',
    german: 'in',
    english: 'in / inside',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Je travaille dans un café.',
      german: 'Ich arbeite in einem Café.'
    },
    notes: 'Aussprache: [dɑ̃] - Nasalvokal!',
    level: 'A1',
    tags: ['lesson4', 'preposition']
  },
  {
    id: 'lesson4-word-aussi',
    french: 'aussi',
    german: 'auch',
    english: 'also / too',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je parle anglais aussi.',
      german: 'Ich spreche auch Englisch.'
    },
    notes: 'Aussprache: [osi]',
    level: 'A1',
    tags: ['lesson4', 'adverb']
  },
  {
    id: 'lesson4-word-danslavie',
    french: 'dans la vie',
    german: 'beruflich / im Leben',
    english: 'in life / for a living',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Qu\'est-ce que tu fais dans la vie?',
      german: 'Was machst du beruflich?'
    },
    notes: 'Feste Wendung in der Frage nach dem Beruf.',
    level: 'A1',
    tags: ['lesson4', 'phrase', 'work']
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
    question: 'Welche Endung gehört zu "je" bei -ER-Verben? Je parl___',
    options: ['-e', '-es', '-ons', '-ent'],
    correctAnswer: '-e',
    explanation: 'Die Endung für "je" bei regelmäßigen -ER-Verben ist "-e": je parle.',
    hints: [
      'Es ist eine sehr kurze, stumme Endung.',
      'Die Endung für "je" ist -e.'
    ],
    tags: ['er-verbs', 'conjugation']
  },
  {
    id: 'guided-2',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Tu ___ français. (Du sprichst Französisch.) Verb: parler',
    correctAnswer: ['parles'],
    explanation: 'Bei "tu" hängt man "-es" an den Stamm: tu parles.',
    hints: [
      'Die Endung für "tu" ist -es.',
      'Es ist "parles".'
    ],
    tags: ['er-verbs', 'conjugation', 'parler']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Nous ___ à Paris. (Wir wohnen in Paris.) Verb: habiter',
    correctAnswer: ['habitons'],
    explanation: 'Bei "nous" ist die Endung "-ons": nous habitons.',
    hints: [
      'Die Endung für "nous" ist -ons.',
      'Es ist "habitons".'
    ],
    tags: ['er-verbs', 'conjugation', 'habiter']
  },
  {
    id: 'guided-4',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "le médecin"?',
    options: ['der Anwalt', 'der Arzt', 'der Lehrer', 'der Bäcker'],
    correctAnswer: 'der Arzt',
    explanation: '"le médecin" bedeutet "der Arzt / die Ärztin".',
    hints: [
      'Diese Person arbeitet im Krankenhaus.',
      'Es ist "der Arzt".'
    ],
    tags: ['professions', 'vocabulary']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: Ich spreche Deutsch.',
    correctAnswer: ['Je parle allemand.', 'Je parle allemand', 'je parle allemand'],
    explanation: '"Je parle allemand" - mit parler benutzt man die Sprache ohne Artikel.',
    hints: [
      'Benutze "je parle".',
      'Deutsch = allemand (ohne Artikel).',
      'Es ist "Je parle allemand."'
    ],
    tags: ['languages', 'parler', 'translation']
  },
  {
    id: 'guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie heißt "arbeiten" auf Französisch?',
    options: ['voyager', 'travailler', 'parler', 'habiter'],
    correctAnswer: 'travailler',
    explanation: '"travailler" bedeutet "arbeiten". Vorsicht: NICHT "reisen" (= voyager)!',
    hints: [
      'Es ist ein falscher Freund - nicht "reisen".',
      'Es ist "travailler".'
    ],
    tags: ['verbs', 'vocabulary', 'false-friend']
  },
  {
    id: 'guided-7',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Ergänze mit Elision: ___ aime mon travail. (Ich mag meine Arbeit.)',
    correctAnswer: ['J\'', 'J\'aime → j\'', 'j\''],
    explanation: 'Vor einem Vokal wird "je" zu "j\'": J\'aime.',
    hints: [
      '"aime" beginnt mit einem Vokal.',
      'Aus "je" wird "j\'".'
    ],
    tags: ['er-verbs', 'elision', 'aimer']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet die Frage "Qu\'est-ce que tu fais?"',
    options: ['Wer bist du?', 'Was machst du?', 'Wo wohnst du?', 'Wie heißt du?'],
    correctAnswer: 'Was machst du?',
    explanation: '"Qu\'est-ce que" bedeutet "Was". "Qu\'est-ce que tu fais?" = "Was machst du?"',
    hints: [
      '"Qu\'est-ce que" bedeutet "Was".',
      'Es ist "Was machst du?"'
    ],
    tags: ['questions', 'questce-que']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ anglais? (Sprechen Sie Englisch?) Verb: parler',
    correctAnswer: ['parlez'],
    explanation: 'Bei "vous" ist die Endung "-ez": vous parlez.',
    hints: [
      'Die Endung für "vous" ist -ez.',
      'Es ist "parlez".'
    ],
    tags: ['er-verbs', 'conjugation', 'parler']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ils ___ dans un bureau. (Sie arbeiten in einem Büro.) Verb: travailler',
    correctAnswer: ['travaillent'],
    explanation: 'Bei "ils/elles" ist die Endung "-ent" (stumm): ils travaillent.',
    hints: [
      'Die Endung für "ils/elles" ist -ent.',
      'Die Endung ist stumm, aber wird geschrieben: "travaillent".'
    ],
    tags: ['er-verbs', 'conjugation', 'travailler']
  },
  {
    id: 'independent-3',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz ist korrekt? "Sie ist Ärztin."',
    options: ['Elle est une médecin.', 'Elle est médecin.', 'Elle est le médecin.', 'Elle est de médecin.'],
    correctAnswer: 'Elle est médecin.',
    explanation: 'Nach être steht der Beruf OHNE Artikel: "Elle est médecin."',
    hints: [
      'Denk an die Regel: kein Artikel beim Beruf nach être.',
      'Es ist "Elle est médecin."'
    ],
    tags: ['professions', 'no-article', 'être']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Elle ___ à l\'université. (Sie studiert an der Universität.) Verb: étudier',
    correctAnswer: ['étudie', 'etudie'],
    explanation: 'Bei "il/elle" ist die Endung "-e": elle étudie.',
    hints: [
      'Die Endung für "elle" ist -e.',
      'Es ist "étudie".'
    ],
    tags: ['er-verbs', 'conjugation', 'étudier']
  },
  {
    id: 'independent-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich bin Ingenieur.',
    correctAnswer: ['Je suis ingénieur.', 'Je suis ingénieur', 'je suis ingénieur', 'Je suis ingénieure.'],
    explanation: 'Kein Artikel beim Beruf: "Je suis ingénieur" (nicht "un ingénieur").',
    hints: [
      'Benutze "je suis".',
      'KEIN Artikel vor dem Beruf!',
      'Es ist "Je suis ingénieur."'
    ],
    tags: ['professions', 'être', 'translation']
  },
  {
    id: 'independent-6',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Nous habitons en France.',
    correctAnswer: ['Wir wohnen in Frankreich.', 'Wir wohnen in Frankreich', 'wir wohnen in Frankreich'],
    explanation: '"Nous" = wir, "habitons" = wohnen, "en France" = in Frankreich.',
    hints: [
      '"habiter" bedeutet "wohnen".',
      'Es ist "Wir wohnen in Frankreich."'
    ],
    tags: ['er-verbs', 'habiter', 'translation']
  },
  {
    id: 'independent-7',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wähle die richtige Form: "Wo wohnst du?"',
    options: ['Tu habite où?', 'Tu habites où?', 'Tu habitons où?', 'Tu habiter où?'],
    correctAnswer: 'Tu habites où?',
    explanation: 'Bei "tu" ist die Endung "-es": tu habites. "où" bedeutet "wo".',
    hints: [
      'Die Endung für "tu" ist -es.',
      'Es ist "Tu habites où?"'
    ],
    tags: ['er-verbs', 'conjugation', 'questions']
  },
  {
    id: 'independent-8',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vervollständige die Frage: ___ tu fais dans la vie? (Was machst du beruflich?)',
    correctAnswer: ['Qu\'est-ce que', 'qu\'est-ce que', 'Qu\'est-ce que', 'Qu est-ce que'],
    explanation: 'Die Frage nach dem Beruf: "Qu\'est-ce que tu fais dans la vie?"',
    hints: [
      'Es ist die feste Wendung für "Was".',
      'Es ist "Qu\'est-ce que".'
    ],
    tags: ['questions', 'questce-que', 'professions']
  },
  {
    id: 'independent-9',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Wir sprechen drei Sprachen.',
    correctAnswer: ['Nous parlons trois langues.', 'Nous parlons trois langues', 'nous parlons trois langues'],
    explanation: '"Nous parlons" (wir sprechen) + "trois langues" (drei Sprachen).',
    hints: [
      'Benutze "nous parlons".',
      '"Sprachen" = langues.',
      'Es ist "Nous parlons trois langues."'
    ],
    tags: ['er-verbs', 'parler', 'languages', 'translation']
  },
  {
    id: 'independent-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Berufsbezeichnung ist die feminine Form von "serveur"?',
    options: ['serveure', 'serveuse', 'serveur', 'servante'],
    correctAnswer: 'serveuse',
    explanation: 'Die feminine Form von "serveur" ist "serveuse" (Endung -euse).',
    hints: [
      'Die Endung wechselt zu -euse.',
      'Es ist "serveuse".'
    ],
    tags: ['professions', 'gender']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Konjugiere "travailler" für alle Personen Singular: je ___, tu ___, il ___.',
    correctAnswer: ['travaille, travailles, travaille', 'travaille travailles travaille'],
    explanation: 'je travaille, tu travailles, il travaille - alle drei klingen gleich [tʁavaj], aber tu hat ein -s!',
    tags: ['er-verbs', 'conjugation', 'travailler']
  },
  {
    id: 'assess-2',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist grammatikalisch korrekt?',
    options: [
      'Je aime mon travail.',
      'J\'aime mon travail.',
      'Je aimes mon travail.',
      'J\'aimes mon travail.'
    ],
    correctAnswer: 'J\'aime mon travail.',
    explanation: 'Vor Vokal: Elision (je → j\'). Bei "je" Endung -e: "J\'aime mon travail."',
    tags: ['er-verbs', 'elision', 'aimer']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Sie (eine Frau) ist Anwältin und sie spricht Englisch.',
    correctAnswer: [
      'Elle est avocate et elle parle anglais.',
      'Elle est avocate et elle parle anglais',
      'elle est avocate et elle parle anglais.'
    ],
    explanation: 'Feminine Form "avocate", kein Artikel nach être, "parle anglais" ohne Artikel.',
    tags: ['professions', 'être', 'languages', 'translation']
  },
  {
    id: 'assess-4',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Qu\'est-ce que vous faites comme travail?',
    correctAnswer: [
      'Was machen Sie beruflich?',
      'Was arbeiten Sie?',
      'Was machen Sie beruflich',
      'Was sind Sie von Beruf?'
    ],
    explanation: '"Qu\'est-ce que vous faites comme travail?" ist die formelle Frage nach dem Beruf.',
    tags: ['questions', 'questce-que', 'professions']
  },
  {
    id: 'assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— ___ (Was) tu fais dans la vie?\n— Je ___ (sein) professeur et je ___ (sprechen) trois langues.',
    correctAnswer: [
      'Qu\'est-ce que, suis, parle',
      'Qu\'est-ce que suis parle'
    ],
    explanation: '"Qu\'est-ce que tu fais dans la vie? Je suis professeur et je parle trois langues."',
    tags: ['questce-que', 'être', 'er-verbs', 'dialogue']
  },
  {
    id: 'assess-6',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Pierre und Marie arbeiten zusammen. "Sie arbeiten in einem Büro." Welche Form?',
    options: [
      'Ils travaille dans un bureau.',
      'Ils travailles dans un bureau.',
      'Ils travaillent dans un bureau.',
      'Ils travaillons dans un bureau.'
    ],
    correctAnswer: 'Ils travaillent dans un bureau.',
    explanation: 'Gemischte Gruppe → "ils". Bei "ils" Endung -ent: "Ils travaillent." (stumm, aber geschrieben!)',
    tags: ['er-verbs', 'conjugation', 'pronouns']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson04: Lesson = {
  meta: {
    id: 'lesson-04',
    number: 4,
    title: 'Professions',
    titleGerman: 'Berufe',
    objectives: [
      'Die regelmäßigen -ER-Verben in allen Formen konjugieren können',
      'Über den eigenen Beruf und den anderer sprechen',
      'Die wichtigsten Berufsbezeichnungen kennen (maskulin und feminin)',
      'Mit "Qu\'est-ce que" Fragen stellen können',
      'Über tägliche Aktivitäten und gesprochene Sprachen berichten',
      'Die Regel "kein Artikel beim Beruf" korrekt anwenden'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03'],
    tags: ['professions', 'er-verbs', 'conjugation', 'languages', 'activities', 'questions']
  },

  introduction: {
    objectives: [
      'Das Konjugationsmuster der regelmäßigen -ER-Verben verstehen',
      'Berufe und Tätigkeiten auf Französisch benennen',
      'Nach dem Beruf fragen mit "Qu\'est-ce que"',
      'Sagen, welche Sprachen man spricht'
    ],
    motivation: `
In dieser Lektion machst du einen großen Sprung: Du lernst die regelmäßigen -ER-Verben - die größte
Verbgruppe im Französischen! Mit nur einem Muster kannst du Tausende von Verben konjugieren.

Außerdem lernst du, über Berufe und deinen Alltag zu sprechen. Schon bald kannst du sagen, was du arbeitest,
wo du wohnst und welche Sprachen du sprichst - die Bausteine für echte Gespräche!
    `,
    culturalNote: `
**Die Frage nach dem Beruf**

In Frankreich fragt man höflich "Qu'est-ce que tu fais dans la vie?" (Was machst du im Leben?) statt
direkt "Was ist dein Job?". Das klingt offener und weniger aufdringlich.

**Berufe und Geschlecht**

Die feminine Form von Berufen ist in Frankreich ein lebendiges Thema. Früher blieben viele Berufe
immer maskulin (le professeur, auch für Frauen). Heute setzen sich feminine Formen durch:
la professeure, l'auteure. In Québec (Kanada) ist man dabei oft moderner als in Frankreich!
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
      'Du kannst regelmäßige -ER-Verben konjugieren (-e, -es, -e, -ons, -ez, -ent)',
      'Du weißt, dass die Endungen -e, -es und -ent stumm sind',
      'Du beherrschst die Elision vor Vokalen (j\'aime, j\'habite, j\'étudie)',
      'Du kennst die wichtigsten Berufe in maskuliner und femininer Form',
      'Du weißt: nach être steht der Beruf OHNE Artikel',
      'Du kannst mit "Qu\'est-ce que" nach Tätigkeiten und Berufen fragen',
      'Du kannst sagen, welche Sprachen du sprichst (parler + Sprache)'
    ],
    nextLesson: 'lesson-05'
  }
};
