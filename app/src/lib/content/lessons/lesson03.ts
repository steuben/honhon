import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 03: La Famille - Die Familie
 * Family & Relationships in French for German speakers
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Family members vocabulary
 * - Possessive adjectives (mon/ma/mes, ton/ta/tes, son/sa/ses, notre/votre/leur)
 * - Plural formation of nouns (-s, -x)
 * - The expression "il y a" (there is/there are)
 * - Describing family structure
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Family members overview
  {
    id: 'family-overview',
    title: 'Die Familienmitglieder (Les membres de la famille)',
    type: 'table',
    content: `
Die Familie - "la famille" [la famij] - ist ein zentrales Thema. Hier lernst du die wichtigsten Personen kennen.

| Französisch | Aussprache | Deutsch | Geschlecht |
|-------------|------------|---------|------------|
| le père | [lə pɛʁ] | der Vater | maskulin |
| la mère | [la mɛʁ] | die Mutter | feminin |
| le frère | [lə fʁɛʁ] | der Bruder | maskulin |
| la sœur | [la sœʁ] | die Schwester | feminin |
| le fils | [lə fis] | der Sohn | maskulin |
| la fille | [la fij] | die Tochter | feminin |
| le mari | [lə maʁi] | der Ehemann | maskulin |
| la femme | [la fam] | die Ehefrau / die Frau | feminin |
| l'enfant | [lɑ̃fɑ̃] | das Kind | maskulin (oder feminin) |

**ACHTUNG:** "le fils" [fis] - das -l ist stumm und das -s wird ausgesprochen! Nicht verwechseln mit "la fille" [fij] (Tochter).
    `,
    germanExplanation: 'Beachte: Im Französischen gibt es kein neutrales Geschlecht - jedes Familienmitglied ist maskulin oder feminin.'
  },

  // Section 2: Extended family
  {
    id: 'extended-family',
    title: 'Die erweiterte Familie',
    type: 'table',
    content: `
Über die Kernfamilie hinaus gibt es weitere wichtige Verwandte:

| Französisch | Aussprache | Deutsch | Besonderheiten |
|-------------|------------|---------|----------------|
| les parents | [le paʁɑ̃] | die Eltern | ACHTUNG: "parents" = Eltern, NICHT Verwandte! |
| les grands-parents | [le ɡʁɑ̃ paʁɑ̃] | die Großeltern | Plural mit Bindestrich |
| le grand-père | [lə ɡʁɑ̃ pɛʁ] | der Großvater | wörtlich: "großer Vater" |
| la grand-mère | [la ɡʁɑ̃ mɛʁ] | die Großmutter | wörtlich: "große Mutter" |
| l'oncle | [lɔ̃kl] | der Onkel | maskulin |
| la tante | [la tɑ̃t] | die Tante | feminin |
| le cousin | [lə kuzɛ̃] | der Cousin (männlich) | Nasalvokal am Ende |
| la cousine | [la kuzin] | die Cousine (weiblich) | mit -e, KEIN Nasalvokal mehr |

**FALSE FRIEND:** "les parents" bedeutet "die Eltern", nicht "die Verwandten"! Verwandte sind "la famille" oder "les proches".
    `,
    germanExplanation: 'Der Unterschied cousin/cousine zeigt schön: Das angehängte -e macht das Wort feminin und beendet den Nasalvokal.'
  },

  // Section 3: Possessive adjectives intro
  {
    id: 'possessive-intro',
    title: 'Possessivbegleiter - Eine Einführung',
    type: 'explanation',
    content: `
Possessivbegleiter zeigen an, WEM etwas gehört: "mein Vater", "deine Mutter", "seine Schwester".

**DER GROSSE UNTERSCHIED ZUM DEUTSCHEN:**

Im Französischen richtet sich der Possessivbegleiter nach dem **Geschlecht und der Zahl des besessenen Dings** - NICHT nach dem Besitzer!

Das ist das genaue Gegenteil der deutschen Logik. Vergleiche:
- Deutsch: "sein Vater" / "seine Mutter" → richtet sich nach Vater/Mutter
- Französisch: "son père" / "sa mère" → "son" weil "père" maskulin ist, "sa" weil "mère" feminin ist

**Drei Fragen musst du dir stellen:**
1. Wer besitzt? (ich, du, er/sie, wir, ihr, sie)
2. Ist das besessene Wort maskulin oder feminin?
3. Ist es Singular oder Plural?

Keine Sorge - mit Übung wird das schnell automatisch!
    `,
    germanExplanation: 'Merke dir: Im Französischen passt sich der Possessivbegleiter an das Ding an, das besessen wird, nicht an die Person, die besitzt.'
  },

  // Section 4: mon/ma/mes table
  {
    id: 'possessive-mon',
    title: 'mon / ma / mes (mein/meine)',
    type: 'table',
    content: `
Die Possessivbegleiter für "ich" (mein/meine):

| Form | Verwendung | Beispiel | Deutsch |
|------|------------|----------|---------|
| mon | vor maskulinem Substantiv | mon père | mein Vater |
| ma | vor femininem Substantiv | ma mère | meine Mutter |
| mes | vor Plural (m + f) | mes parents | meine Eltern |

**WICHTIGE AUSNAHME:** Vor einem femininen Wort, das mit einem Vokal beginnt, benutzt man "mon" statt "ma" (wegen des besseren Klangs)!
- "ma amie" ❌ → "mon amie" ✅ (meine Freundin)

Die gleiche Regel gilt für alle Possessivbegleiter im Singular.
    `,
    germanExplanation: 'mon/ma/mes entsprechen alle dem deutschen "mein/meine" - das Französische unterscheidet nur nach dem besessenen Wort.'
  },

  // Section 5: ton/ta/tes and son/sa/ses table
  {
    id: 'possessive-ton-son',
    title: 'ton/ta/tes und son/sa/ses',
    type: 'table',
    content: `
Die Possessivbegleiter für "du" (dein) und "er/sie" (sein/ihr):

| Besitzer | maskulin Sg. | feminin Sg. | Plural | Deutsch |
|----------|--------------|-------------|--------|---------|
| tu (du) | ton père | ta mère | tes parents | dein/deine |
| il/elle (er/sie) | son père | sa mère | ses parents | sein/seine, ihr/ihre |

**BESONDERS WICHTIG für Deutsche:**

"son" und "sa" bedeuten SOWOHL "sein" ALS AUCH "ihr"!
- "son père" = "sein Vater" ODER "ihr Vater"
- "sa mère" = "seine Mutter" ODER "ihre Mutter"

Das Französische unterscheidet hier NICHT, ob der Besitzer männlich oder weiblich ist. Nur der Kontext zeigt es!
    `,
    germanExplanation: 'son/sa/ses sind besonders tückisch: Sie bedeuten "sein" UND "ihr" - der Kontext entscheidet.'
  },

  // Section 6: notre/votre/leur table
  {
    id: 'possessive-plural-owners',
    title: 'notre / votre / leur (unser/euer/ihr)',
    type: 'table',
    content: `
Bei mehreren Besitzern (wir, ihr/Sie, sie) wird es einfacher - es gibt keinen Unterschied zwischen maskulin und feminin!

| Besitzer | Singular (m + f) | Plural | Deutsch |
|----------|------------------|--------|---------|
| nous (wir) | notre | nos | unser/unsere |
| vous (ihr/Sie) | votre | vos | euer/eure, Ihr/Ihre |
| ils/elles (sie) | leur | leurs | ihr/ihre (Plural) |

Beispiele:
- notre maison (unser Haus), notre fils (unser Sohn) - immer "notre"!
- nos enfants (unsere Kinder) - Plural: "nos"
- leur mère (ihre Mutter), leurs cousins (ihre Cousins)

**Merke:** Bei "notre/votre/leur" gibt es NUR Singular vs. Plural - kein Geschlecht!
    `,
    germanExplanation: 'Gute Nachricht: notre, votre und leur unterscheiden nicht nach Geschlecht, nur nach Singular (notre) und Plural (nos).'
  },

  // Section 7: comparison
  {
    id: 'possessive-comparison',
    title: 'Vergleich Deutsch - Französisch',
    type: 'comparison',
    content: `
Der wichtigste Unterschied noch einmal deutlich:

**DEUTSCH:** Possessivpronomen richtet sich nach dem BESITZER
- der Mann und SEIN Auto / die Frau und IHR Auto
- "sein" vs. "ihr" zeigt, ob ein Mann oder eine Frau besitzt

**FRANZÖSISCH:** Possessivbegleiter richtet sich nach dem BESESSENEN DING
- l'homme et SA voiture / la femme et SA voiture
- Beide benutzen "sa", weil "voiture" (Auto) feminin ist!

**Beispiel-Falle:**
"Pierre liebt seine Mutter" → "Pierre aime SA mère" ("sa", weil mère feminin ist - obwohl Pierre ein Mann ist!)
"Marie liebt ihren Vater" → "Marie aime SON père" ("son", weil père maskulin ist - obwohl Marie eine Frau ist!)

Das ist für deutsche Lernende der häufigste Fehler. Übe es bewusst!
    `,
    germanExplanation: 'Stelle dir immer die Frage: Welches Geschlecht hat das BESESSENE Wort? Danach wählst du die Form.'
  },

  // Section 8: Plural formation
  {
    id: 'plural-nouns',
    title: 'Pluralbildung der Substantive',
    type: 'explanation',
    content: `
Die Pluralbildung im Französischen ist meist einfach - aber es gibt eine Besonderheit bei der Aussprache.

**Grundregel: Plural mit -s**
Die meisten Substantive bilden den Plural durch Anhängen von -s:
- le frère → les frères (die Brüder)
- la sœur → les sœurs (die Schwestern)
- le parent → les parents (die Eltern)

**ACHTUNG bei der Aussprache:**
Das Plural-s wird NICHT ausgesprochen! Man hört den Plural nur am Artikel:
- "le frère" [lə fʁɛʁ] vs. "les frères" [le fʁɛʁ]
- Der Unterschied liegt nur im Artikel: le → les!

**Ausnahme: Plural mit -x**
Wörter, die auf -eau, -au oder -eu enden, bilden den Plural mit -x:
- le neveu → les neveux (die Neffen)
- le bateau → les bateaux (die Schiffe)

**Keine Veränderung:**
Wörter, die schon auf -s, -x oder -z enden, bleiben gleich:
- le fils → les fils (der Sohn → die Söhne) - keine Änderung!
    `,
    germanExplanation: 'Das Plural-s ist stumm! Der Artikel (le/la → les) ist das Hauptsignal für den Plural beim Hören.'
  },

  // Section 9: plural table
  {
    id: 'plural-table',
    title: 'Pluralbildung im Überblick',
    type: 'table',
    content: `
| Singular | Plural | Regel | Deutsch |
|----------|--------|-------|---------|
| le père | les pères | + s | die Väter |
| la mère | les mères | + s | die Mütter |
| la cousine | les cousines | + s | die Cousinen |
| le fils | les fils | keine Änderung (-s) | die Söhne |
| la voix | les voix | keine Änderung (-x) | die Stimmen |
| le neveu | les neveux | -eu → -eux | die Neffen |
| le tableau | les tableaux | -eau → -eaux | die Bilder/Tafeln |

**Merksatz:** "-s, -x, -z bleiben wie sie sind. Wörter auf -eau/-eu nehmen -x. Der Rest nimmt -s."
    `,
    germanExplanation: 'Die drei Endungen -s, -x und -z verändern sich im Plural nicht - sehr praktisch!'
  },

  // Section 10: il y a
  {
    id: 'il-y-a',
    title: 'Die Wendung "il y a" (es gibt)',
    type: 'explanation',
    content: `
"il y a" [il i a] ist eine der nützlichsten Wendungen im Französischen. Sie bedeutet "es gibt" oder "es ist/sind vorhanden".

**Wichtig:** "il y a" bleibt IMMER gleich - egal ob Singular oder Plural!
- il y a un frère (es gibt einen Bruder)
- il y a trois enfants (es gibt drei Kinder)

Das ist anders als im Deutschen ("es gibt" vs. "es sind") - im Französischen immer "il y a"!

**Verwendung, um die Familie zu beschreiben:**
- "Dans ma famille, il y a quatre personnes." (In meiner Familie gibt es vier Personen.)
- "Il y a deux enfants dans la famille." (Es gibt zwei Kinder in der Familie.)

**Verneinung:** "il n'y a pas de..."
- "Il n'y a pas de frère." (Es gibt keinen Bruder.)

**Frage:** "Est-ce qu'il y a...?" oder "Il y a...?"
- "Combien de personnes y a-t-il?" (Wie viele Personen gibt es?)
    `,
    germanExplanation: '"il y a" ist unveränderlich - es funktioniert für Singular und Plural gleichermaßen. Sehr praktisch zum Beschreiben!'
  },

  // Section 11: describing family example
  {
    id: 'describing-family',
    title: 'Die eigene Familie beschreiben',
    type: 'example',
    content: `
So kannst du deine Familie beschreiben - kombiniere "il y a" mit Possessivbegleitern:
    `,
    examples: [
      { french: 'Dans ma famille, il y a cinq personnes.', german: 'In meiner Familie gibt es fünf Personen.', notes: 'Klassischer Einstiegssatz' },
      { french: 'J\'ai un frère et deux sœurs.', german: 'Ich habe einen Bruder und zwei Schwestern.', notes: '"avoir" = haben' },
      { french: 'Mon père s\'appelle Thomas.', german: 'Mein Vater heißt Thomas.', notes: 'mon = mein (maskulin)' },
      { french: 'Ma mère est professeure.', german: 'Meine Mutter ist Lehrerin.', notes: 'ma = meine (feminin)' },
      { french: 'Mes grands-parents habitent à Lyon.', german: 'Meine Großeltern wohnen in Lyon.', notes: 'mes = meine (Plural)' }
    ]
  },

  // Section 12: tip on liaison
  {
    id: 'liaison-tip',
    title: 'Liaison bei Possessivbegleitern',
    type: 'tip',
    content: `
Bei "mes", "tes", "ses", "nos", "vos", "leurs" entsteht eine Liaison, wenn das nächste Wort mit einem Vokal beginnt.

Das stumme -s wird dann zu einem [z]-Laut und mit dem nächsten Wort verbunden:
- mes enfants → [me‿z‿ɑ̃fɑ̃] (das -s wird zu [z])
- ses amis → [se‿z‿ami] (seine/ihre Freunde)
- nos oncles → [no‿z‿ɔ̃kl] (unsere Onkel)

Dies macht die Aussprache flüssiger und ist typisch französisch!

**Auch bei "mon/ton/son":** Das -n wird vor Vokal deutlich verbunden:
- mon ami → [mɔ̃‿n‿ami] (mein Freund)
    `
  },

  // Section 13: Dialogue 1
  {
    id: 'dialogue-family',
    title: 'Dialog: Über die Familie sprechen',
    type: 'dialogue',
    content: `
**Situation:** Léa und Hugo lernen sich kennen und sprechen über ihre Familien.

**Léa:** Tu as des frères et sœurs?
**Hugo:** Oui, j'ai un frère et une sœur. Et toi?
**Léa:** Moi, je suis fille unique. Mais j'ai beaucoup de cousins!
**Hugo:** Ah bon? Combien?
**Léa:** Il y a six cousins dans ma famille. Mon oncle a quatre enfants!
**Hugo:** C'est une grande famille! Et tes grands-parents?
**Léa:** Mes grands-parents habitent à Marseille.

---

**Beachte:**
- "fille unique" = Einzelkind (weiblich); "fils unique" für einen Jungen
- "Tu as...?" = Hast du...? (von "avoir" = haben)
- "Combien?" = Wie viele?
- "beaucoup de cousins" = viele Cousins
    `
  },

  // Section 14: Dialogue 2
  {
    id: 'dialogue-photo',
    title: 'Dialog: Ein Familienfoto',
    type: 'dialogue',
    content: `
**Situation:** Camille zeigt Noah ein Foto ihrer Familie.

**Camille:** Regarde, c'est une photo de ma famille!
**Noah:** Qui est-ce? C'est ton père?
**Camille:** Oui, c'est mon père. Et à côté, c'est ma mère.
**Noah:** Et la petite fille, c'est ta sœur?
**Camille:** Non, c'est ma cousine. Elle s'appelle Inès.
**Noah:** Et ce monsieur?
**Camille:** C'est mon grand-père. Il a soixante-dix ans!

---

**Beachte:**
- "Qui est-ce?" = Wer ist das?
- "C'est..." = Das ist... (sehr häufig zum Zeigen/Vorstellen)
- "à côté" = daneben
- Beachte den Wechsel: mon père (m), ma mère (f), ma cousine (f), mon grand-père (m)
    `
  },

  // Section 15: avoir mini-intro
  {
    id: 'avoir-family',
    title: 'Das Verb "avoir" (haben) für die Familie',
    type: 'table',
    content: `
Um zu sagen, wen man hat, brauchst du das Verb "avoir" (haben). Hier die wichtigsten Formen:

| Pronomen | avoir | Aussprache | Beispiel |
|----------|-------|------------|----------|
| j' | ai | [ʒe] | J'ai un frère. (Ich habe einen Bruder.) |
| tu | as | [a] | Tu as une sœur? (Hast du eine Schwester?) |
| il/elle | a | [a] | Elle a deux enfants. (Sie hat zwei Kinder.) |
| nous | avons | [avɔ̃] | Nous avons une grande famille. |
| vous | avez | [ave] | Vous avez des cousins? |
| ils/elles | ont | [ɔ̃] | Ils ont trois enfants. |

**ACHTUNG:** "je" wird vor "ai" zu "j'" → "j'ai" [ʒe]. Verwechsle "ils ont" [ilz‿ɔ̃] (sie haben) nicht mit "ils sont" [il sɔ̃] (sie sind)!
    `,
    germanExplanation: 'Mit "avoir" + Familienmitglied kannst du ausdrücken, wen du in deiner Familie hast.'
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Core family members
  {
    id: 'lesson3-family-pere',
    french: 'le père',
    german: 'der Vater',
    english: 'the father',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon père est médecin.',
      german: 'Mein Vater ist Arzt.'
    },
    notes: 'Aussprache: [lə pɛʁ]. Mit französischem R.',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-mere',
    french: 'la mère',
    german: 'die Mutter',
    english: 'the mother',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ma mère travaille à Paris.',
      german: 'Meine Mutter arbeitet in Paris.'
    },
    notes: 'Aussprache: [la mɛʁ]. Der accent grave auf dem è.',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-frere',
    french: 'le frère',
    german: 'der Bruder',
    english: 'the brother',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'ai un frère.',
      german: 'Ich habe einen Bruder.'
    },
    notes: 'Aussprache: [lə fʁɛʁ]. Zwei französische R!',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-soeur',
    french: 'la sœur',
    german: 'die Schwester',
    english: 'the sister',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ma sœur s\'appelle Julie.',
      german: 'Meine Schwester heißt Julie.'
    },
    notes: 'Aussprache: [la sœʁ]. Mit der Ligatur œ.',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-fils',
    french: 'le fils',
    german: 'der Sohn',
    english: 'the son',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Leur fils a dix ans.',
      german: 'Ihr Sohn ist zehn Jahre alt.'
    },
    notes: 'Aussprache: [lə fis]. Das -l ist stumm, das -s wird gesprochen! Plural unverändert: les fils.',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-fille',
    french: 'la fille',
    german: 'die Tochter',
    english: 'the daughter',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Sa fille est étudiante.',
      german: 'Seine/Ihre Tochter ist Studentin.'
    },
    notes: 'Aussprache: [la fij]. Bedeutet auch "Mädchen". Nicht mit "le fils" verwechseln!',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-mari',
    french: 'le mari',
    german: 'der Ehemann',
    english: 'the husband',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon mari s\'appelle Marc.',
      german: 'Mein Ehemann heißt Marc.'
    },
    notes: 'Aussprache: [lə maʁi].',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-femme',
    french: 'la femme',
    german: 'die Ehefrau / die Frau',
    english: 'the wife / the woman',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Sa femme est française.',
      german: 'Seine Ehefrau ist Französin.'
    },
    notes: 'Aussprache: [la fam]. Achtung: "femme" wird [fam] gesprochen, nicht [fœm]!',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-family-enfant',
    french: 'l\'enfant',
    german: 'das Kind',
    english: 'the child',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Ils ont trois enfants.',
      german: 'Sie haben drei Kinder.'
    },
    notes: 'Aussprache: [lɑ̃fɑ̃]. Kann maskulin oder feminin sein. Plural: les enfants.',
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },

  // Extended family
  {
    id: 'lesson3-family-parents',
    french: 'les parents',
    german: 'die Eltern',
    english: 'the parents',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Mes parents habitent à Nice.',
      german: 'Meine Eltern wohnen in Nizza.'
    },
    notes: 'FALSE FRIEND! Bedeutet "Eltern", NICHT "Verwandte". Aussprache: [le paʁɑ̃].',
    isFalseFriend: true,
    level: 'A1',
    tags: ['lesson3', 'family', 'essential', 'false-friend']
  },
  {
    id: 'lesson3-family-grandsparents',
    french: 'les grands-parents',
    german: 'die Großeltern',
    english: 'the grandparents',
    partOfSpeech: 'noun',
    exampleSentence: {
      french: 'Nos grands-parents sont gentils.',
      german: 'Unsere Großeltern sind nett.'
    },
    notes: 'Aussprache: [le ɡʁɑ̃ paʁɑ̃]. Mit Bindestrich geschrieben.',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-grandpere',
    french: 'le grand-père',
    german: 'der Großvater',
    english: 'the grandfather',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon grand-père a soixante-dix ans.',
      german: 'Mein Großvater ist siebzig Jahre alt.'
    },
    notes: 'Wörtlich: "großer Vater". Aussprache: [lə ɡʁɑ̃ pɛʁ].',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-grandmere',
    french: 'la grand-mère',
    german: 'die Großmutter',
    english: 'the grandmother',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ma grand-mère fait de bons gâteaux.',
      german: 'Meine Großmutter macht gute Kuchen.'
    },
    notes: 'Wörtlich: "große Mutter". Aussprache: [la ɡʁɑ̃ mɛʁ].',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-oncle',
    french: 'l\'oncle',
    german: 'der Onkel',
    english: 'the uncle',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon oncle habite au Canada.',
      german: 'Mein Onkel wohnt in Kanada.'
    },
    notes: 'Aussprache: [lɔ̃kl]. Maskulin: le → l\' vor Vokal.',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-tante',
    french: 'la tante',
    german: 'die Tante',
    english: 'the aunt',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ma tante est très sympa.',
      german: 'Meine Tante ist sehr sympathisch.'
    },
    notes: 'Aussprache: [la tɑ̃t]. Mit Nasalvokal.',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-cousin',
    french: 'le cousin',
    german: 'der Cousin (männlich)',
    english: 'the cousin (male)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon cousin joue au foot.',
      german: 'Mein Cousin spielt Fußball.'
    },
    notes: 'Aussprache: [lə kuzɛ̃]. Endet auf Nasalvokal.',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-family-cousine',
    french: 'la cousine',
    german: 'die Cousine (weiblich)',
    english: 'the cousin (female)',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ma cousine habite à Lyon.',
      german: 'Meine Cousine wohnt in Lyon.'
    },
    notes: 'Aussprache: [la kuzin]. Das -e beendet den Nasalvokal: [kuzin] statt [kuzɛ̃].',
    level: 'A1',
    tags: ['lesson3', 'family']
  },

  // Possessive adjectives
  {
    id: 'lesson3-poss-mon',
    french: 'mon',
    german: 'mein (maskulin)',
    english: 'my (masculine)',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'mon père',
      german: 'mein Vater'
    },
    notes: 'Vor maskulinem Substantiv. Auch vor femininen Wörtern mit Vokal: mon amie.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'essential', 'grammar']
  },
  {
    id: 'lesson3-poss-ma',
    french: 'ma',
    german: 'meine (feminin)',
    english: 'my (feminine)',
    partOfSpeech: 'adjective',
    gender: 'f',
    exampleSentence: {
      french: 'ma mère',
      german: 'meine Mutter'
    },
    notes: 'Vor femininem Substantiv (das mit Konsonant beginnt).',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'essential', 'grammar']
  },
  {
    id: 'lesson3-poss-mes',
    french: 'mes',
    german: 'meine (Plural)',
    english: 'my (plural)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'mes parents',
      german: 'meine Eltern'
    },
    notes: 'Vor Plural - egal ob maskulin oder feminin. Liaison: mes enfants [me‿z‿ɑ̃fɑ̃].',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'essential', 'grammar']
  },
  {
    id: 'lesson3-poss-ton',
    french: 'ton',
    german: 'dein (maskulin)',
    english: 'your (masculine)',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'ton frère',
      german: 'dein Bruder'
    },
    notes: 'Vor maskulinem Substantiv. Informelle Anrede (tu).',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-ta',
    french: 'ta',
    german: 'deine (feminin)',
    english: 'your (feminine)',
    partOfSpeech: 'adjective',
    gender: 'f',
    exampleSentence: {
      french: 'ta sœur',
      german: 'deine Schwester'
    },
    notes: 'Vor femininem Substantiv. Informelle Anrede (tu).',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-tes',
    french: 'tes',
    german: 'deine (Plural)',
    english: 'your (plural)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'tes grands-parents',
      german: 'deine Großeltern'
    },
    notes: 'Vor Plural. Informelle Anrede (tu).',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-son',
    french: 'son',
    german: 'sein/ihr (maskulin)',
    english: 'his/her (masculine)',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'son père',
      german: 'sein Vater / ihr Vater'
    },
    notes: 'WICHTIG: "son" bedeutet SOWOHL "sein" als auch "ihr"! Hängt vom maskulinen Wort ab, nicht vom Besitzer.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'essential', 'grammar']
  },
  {
    id: 'lesson3-poss-sa',
    french: 'sa',
    german: 'seine/ihre (feminin)',
    english: 'his/her (feminine)',
    partOfSpeech: 'adjective',
    gender: 'f',
    exampleSentence: {
      french: 'sa mère',
      german: 'seine Mutter / ihre Mutter'
    },
    notes: 'WICHTIG: "sa" bedeutet "seine" UND "ihre"! Hängt vom femininen Wort ab, nicht vom Besitzer.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'essential', 'grammar']
  },
  {
    id: 'lesson3-poss-ses',
    french: 'ses',
    german: 'seine/ihre (Plural)',
    english: 'his/her (plural)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'ses enfants',
      german: 'seine Kinder / ihre Kinder'
    },
    notes: 'Vor Plural. Bedeutet "seine" UND "ihre". Liaison: ses amis [se‿z‿ami].',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-notre',
    french: 'notre',
    german: 'unser/unsere',
    english: 'our',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'notre maison',
      german: 'unser Haus'
    },
    notes: 'Singular - kein Geschlechtsunterschied! Für maskulin und feminin gleich.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-votre',
    french: 'votre',
    german: 'euer/eure, Ihr/Ihre',
    english: 'your (plural/formal)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'votre famille',
      german: 'eure/Ihre Familie'
    },
    notes: 'Singular - kein Geschlechtsunterschied. Formell oder Plural.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },
  {
    id: 'lesson3-poss-leur',
    french: 'leur',
    german: 'ihr/ihre (Plural-Besitzer)',
    english: 'their',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'leur fils',
      german: 'ihr Sohn'
    },
    notes: 'Wenn mehrere Personen besitzen. Singular: leur, Plural: leurs.',
    level: 'A1',
    tags: ['lesson3', 'possessive', 'grammar']
  },

  // Relationship & quantity words
  {
    id: 'lesson3-word-famille',
    french: 'la famille',
    german: 'die Familie',
    english: 'the family',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'J\'aime ma famille.',
      german: 'Ich liebe meine Familie.'
    },
    notes: 'Aussprache: [la famij]. Kognat zum deutschen "Familie".',
    isCognate: true,
    level: 'A1',
    tags: ['lesson3', 'family', 'essential']
  },
  {
    id: 'lesson3-word-ilya',
    french: 'il y a',
    german: 'es gibt',
    english: 'there is / there are',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il y a quatre personnes dans ma famille.',
      german: 'Es gibt vier Personen in meiner Familie.'
    },
    notes: 'Unveränderlich! Für Singular und Plural gleich. Aussprache: [il i a].',
    level: 'A1',
    tags: ['lesson3', 'expression', 'essential', 'grammar']
  },
  {
    id: 'lesson3-word-avoir',
    french: 'avoir',
    german: 'haben',
    english: 'to have',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'ai deux frères.',
      german: 'Ich habe zwei Brüder.'
    },
    notes: 'Sehr wichtiges Verb. j\'ai, tu as, il a, nous avons, vous avez, ils ont.',
    level: 'A1',
    tags: ['lesson3', 'verb', 'essential']
  },
  {
    id: 'lesson3-word-combien',
    french: 'combien',
    german: 'wie viel / wie viele',
    english: 'how many / how much',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Combien de frères as-tu?',
      german: 'Wie viele Brüder hast du?'
    },
    notes: 'Aussprache: [kɔ̃bjɛ̃]. Oft mit "de": combien de...',
    level: 'A1',
    tags: ['lesson3', 'question', 'quantity']
  },
  {
    id: 'lesson3-word-beaucoup',
    french: 'beaucoup',
    german: 'viel / viele',
    english: 'a lot / many',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'J\'ai beaucoup de cousins.',
      german: 'Ich habe viele Cousins.'
    },
    notes: 'Aussprache: [boku]. Mit "de": beaucoup de...',
    level: 'A1',
    tags: ['lesson3', 'quantity']
  },
  {
    id: 'lesson3-word-jeune',
    french: 'jeune',
    german: 'jung',
    english: 'young',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'Mon frère est jeune.',
      german: 'Mein Bruder ist jung.'
    },
    notes: 'Aussprache: [ʒœn]. Gleiche Form für maskulin und feminin.',
    level: 'A1',
    tags: ['lesson3', 'adjective', 'description']
  },
  {
    id: 'lesson3-word-vieux',
    french: 'vieux',
    german: 'alt',
    english: 'old',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Mon grand-père est vieux.',
      german: 'Mein Großvater ist alt.'
    },
    notes: 'Aussprache: [vjø]. Feminin: vieille [vjɛj].',
    level: 'A1',
    tags: ['lesson3', 'adjective', 'description']
  },
  {
    id: 'lesson3-word-marie',
    french: 'marié',
    german: 'verheiratet',
    english: 'married',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Ma sœur est mariée.',
      german: 'Meine Schwester ist verheiratet.'
    },
    notes: 'Feminin: mariée (mit -e). Nicht verwechseln mit "le mari" (Ehemann)!',
    level: 'A1',
    tags: ['lesson3', 'adjective', 'relationship']
  },
  {
    id: 'lesson3-word-bebe',
    french: 'le bébé',
    german: 'das Baby',
    english: 'the baby',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le bébé dort.',
      german: 'Das Baby schläft.'
    },
    notes: 'Aussprache: [lə bebe]. Immer maskulin, auch für ein Mädchen.',
    level: 'A1',
    tags: ['lesson3', 'family']
  },
  {
    id: 'lesson3-word-neveu',
    french: 'le neveu',
    german: 'der Neffe',
    english: 'the nephew',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon neveu a cinq ans.',
      german: 'Mein Neffe ist fünf Jahre alt.'
    },
    notes: 'Plural mit -x: les neveux! Aussprache: [lə nəvø].',
    level: 'A1',
    tags: ['lesson3', 'family', 'plural']
  }
];

// ============================================================================
// EXERCISES
// ============================================================================

// Guided Practice: Easy exercises (8 exercises)
const guidedPractice: Exercise[] = [
  {
    id: 'l3-guided-1',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: der Vater',
    correctAnswer: ['le père', 'le pere'],
    explanation: '"le père" bedeutet "der Vater". Maskulin mit Artikel "le".',
    hints: [
      'Es ist maskulin, also "le".',
      'Es ist "le père".'
    ],
    tags: ['family', 'vocabulary']
  },
  {
    id: 'l3-guided-2',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze: die Mutter',
    correctAnswer: ['la mère', 'la mere'],
    explanation: '"la mère" bedeutet "die Mutter". Feminin mit Artikel "la".',
    hints: [
      'Es ist feminin, also "la".',
      'Es ist "la mère".'
    ],
    tags: ['family', 'vocabulary']
  },
  {
    id: 'l3-guided-3',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Possessivbegleiter passt: ___ père (mein Vater)?',
    options: ['ma', 'mon', 'mes', 'ta'],
    correctAnswer: 'mon',
    explanation: '"père" ist maskulin, deshalb "mon" (mein). "ma" wäre nur für feminine Wörter.',
    hints: [
      '"père" ist maskulin.',
      'Für maskuline Wörter benutzt man "mon".'
    ],
    tags: ['possessive', 'grammar']
  },
  {
    id: 'l3-guided-4',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Possessivbegleiter passt: ___ mère (meine Mutter)?',
    options: ['mon', 'ma', 'mes', 'ton'],
    correctAnswer: 'ma',
    explanation: '"mère" ist feminin und beginnt mit einem Konsonanten, deshalb "ma".',
    hints: [
      '"mère" ist feminin.',
      'Für feminine Wörter (mit Konsonant) benutzt man "ma".'
    ],
    tags: ['possessive', 'grammar']
  },
  {
    id: 'l3-guided-5',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Il y ___ trois enfants. (Es gibt drei Kinder.)',
    correctAnswer: ['a'],
    explanation: 'Die Wendung lautet "il y a" (es gibt) - hier fehlt das "a".',
    hints: [
      'Die Wendung ist "il y a".',
      'Es fehlt nur ein Buchstabe: "a".'
    ],
    tags: ['il-y-a', 'expression']
  },
  {
    id: 'l3-guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie heißt der Plural von "le frère"?',
    options: ['les frère', 'les frères', 'les frèrex', 'le frères'],
    correctAnswer: 'les frères',
    explanation: 'Der Plural bildet sich mit -s: "les frères". Der Artikel wird zu "les".',
    hints: [
      'Der Artikel wird im Plural zu "les".',
      'Man hängt ein -s an: "les frères".'
    ],
    tags: ['plural', 'grammar']
  },
  {
    id: 'l3-guided-7',
    type: 'translation-fr-de',
    difficulty: 'easy',
    question: 'Übersetze ins Deutsche: la sœur',
    correctAnswer: ['die Schwester', 'Schwester', 'die schwester'],
    explanation: '"la sœur" bedeutet "die Schwester".',
    hints: [
      'Es ist ein weibliches Familienmitglied.',
      'Es ist "die Schwester".'
    ],
    tags: ['family', 'vocabulary']
  },
  {
    id: 'l3-guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "les parents"?',
    options: ['die Verwandten', 'die Eltern', 'die Großeltern', 'die Geschwister'],
    correctAnswer: 'die Eltern',
    explanation: 'ACHTUNG False Friend! "les parents" bedeutet "die Eltern", NICHT "die Verwandten".',
    hints: [
      'Vorsicht, das ist ein False Friend!',
      'Es bedeutet "die Eltern".'
    ],
    tags: ['family', 'false-friend', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'l3-indep-1',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Pierre liebt seine Mutter. Welcher Possessivbegleiter? Pierre aime ___ mère.',
    options: ['son', 'sa', 'ses', 'ma'],
    correctAnswer: 'sa',
    explanation: 'Obwohl Pierre ein Mann ist, benutzt man "sa", weil "mère" feminin ist! Im Französischen richtet sich der Begleiter nach dem besessenen Wort.',
    hints: [
      'Achte nicht auf Pierre, sondern auf das Wort "mère".',
      '"mère" ist feminin, also "sa".'
    ],
    tags: ['possessive', 'grammar', 'context']
  },
  {
    id: 'l3-indep-2',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Marie liebt ihren Vater. Welcher Possessivbegleiter? Marie aime ___ père.',
    options: ['sa', 'ses', 'son', 'ma'],
    correctAnswer: 'son',
    explanation: 'Obwohl Marie eine Frau ist, benutzt man "son", weil "père" maskulin ist! Der Begleiter richtet sich nach dem besessenen Wort.',
    hints: [
      'Achte auf das Wort "père", nicht auf Marie.',
      '"père" ist maskulin, also "son".'
    ],
    tags: ['possessive', 'grammar', 'context']
  },
  {
    id: 'l3-indep-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Dans ma famille, il ___ ___ cinq personnes. (In meiner Familie gibt es fünf Personen.)',
    correctAnswer: ['y a'],
    explanation: 'Die vollständige Wendung ist "il y a" (es gibt). Sie ist unveränderlich.',
    hints: [
      'Die Wendung für "es gibt".',
      'Es ist "y a" → il y a.'
    ],
    tags: ['il-y-a', 'expression']
  },
  {
    id: 'l3-indep-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Setze den Possessivbegleiter ein: ___ parents habitent à Paris. (Meine Eltern wohnen in Paris.)',
    correctAnswer: ['mes', 'Mes'],
    explanation: '"parents" ist Plural, deshalb "mes" (meine).',
    hints: [
      '"parents" ist Plural.',
      'Für Plural benutzt man "mes".'
    ],
    tags: ['possessive', 'plural', 'grammar']
  },
  {
    id: 'l3-indep-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich habe einen Bruder und eine Schwester.',
    correctAnswer: ['J\'ai un frère et une sœur.', 'J\'ai un frère et une sœur', 'j\'ai un frère et une soeur'],
    explanation: '"J\'ai" (ich habe) von avoir, "un frère" (einen Bruder, maskulin), "une sœur" (eine Schwester, feminin).',
    hints: [
      'Beginne mit "J\'ai" (ich habe).',
      'Bruder = un frère (m), Schwester = une sœur (f).',
      'Es ist "J\'ai un frère et une sœur."'
    ],
    tags: ['avoir', 'family', 'translation']
  },
  {
    id: 'l3-indep-6',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Possessivbegleiter passt: ___ enfants (unsere Kinder)?',
    options: ['notre', 'nos', 'votre', 'leur'],
    correctAnswer: 'nos',
    explanation: '"enfants" ist Plural, deshalb "nos" (unsere). Im Singular wäre es "notre".',
    hints: [
      '"enfants" ist Plural.',
      'Der Plural von "notre" ist "nos".'
    ],
    tags: ['possessive', 'plural', 'grammar']
  },
  {
    id: 'l3-indep-7',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Bilde den Plural: le neveu → les ___',
    correctAnswer: ['neveux'],
    explanation: 'Wörter auf -eu bilden den Plural mit -x: "les neveux".',
    hints: [
      'Wörter auf -eu nehmen kein -s.',
      'Es ist "neveux" (mit -x).'
    ],
    tags: ['plural', 'grammar']
  },
  {
    id: 'l3-indep-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Mes grands-parents habitent à Lyon.',
    correctAnswer: ['Meine Großeltern wohnen in Lyon.', 'Meine Großeltern wohnen in Lyon', 'meine Großeltern wohnen in Lyon'],
    explanation: '"Mes" = meine, "grands-parents" = Großeltern, "habitent" = wohnen, "à Lyon" = in Lyon.',
    hints: [
      '"grands-parents" sind die Großeltern.',
      'Es ist "Meine Großeltern wohnen in Lyon."'
    ],
    tags: ['possessive', 'family', 'translation']
  },
  {
    id: 'l3-indep-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Form von "avoir" passt: Ils ___ trois enfants. (Sie haben drei Kinder.)',
    options: ['a', 'avons', 'ont', 'avez'],
    correctAnswer: 'ont',
    explanation: 'Die Form von avoir für "ils/elles" ist "ont". Nicht verwechseln mit "sont" (sind)!',
    hints: [
      'Es ist die 3. Person Plural von avoir.',
      'Es ist "ont" [ɔ̃].'
    ],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l3-indep-10',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Setze ein (sein/ihr Plural): ___ enfants sont gentils. (Seine Kinder sind nett.)',
    correctAnswer: ['Ses', 'ses'],
    explanation: '"enfants" ist Plural, deshalb "ses" (seine/ihre). Bedeutet sowohl "seine" als auch "ihre".',
    hints: [
      '"enfants" ist Plural.',
      'Der Plural von son/sa ist "ses".'
    ],
    tags: ['possessive', 'plural', 'grammar']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'l3-assess-1',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Sophie spricht über ihren Bruder und dessen Auto: "Voici ___ voiture." (Hier ist sein Auto.) "voiture" ist feminin.',
    options: ['son', 'sa', 'ses', 'leur'],
    correctAnswer: 'sa',
    explanation: 'Obwohl der Besitzer (der Bruder) männlich ist, benutzt man "sa", weil "voiture" feminin ist. Das besessene Wort entscheidet!',
    tags: ['possessive', 'grammar', 'context']
  },
  {
    id: 'l3-assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige: Dans ___ famille, ___ ___ ___ six personnes. (In unserer Familie gibt es sechs Personen.) Reihenfolge: Possessivbegleiter, dann "es gibt".',
    correctAnswer: ['notre, il y a', 'notre il y a'],
    explanation: '"notre famille" (unsere Familie - notre ist unveränderlich) und "il y a" (es gibt).',
    tags: ['possessive', 'il-y-a', 'expression']
  },
  {
    id: 'l3-assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Meine Großeltern haben vier Kinder.',
    correctAnswer: ['Mes grands-parents ont quatre enfants.', 'Mes grands-parents ont quatre enfants', 'mes grands-parents ont quatre enfants'],
    explanation: '"Mes" (meine, Plural) + "grands-parents" + "ont" (haben, 3. Pers. Pl.) + "quatre enfants" (vier Kinder).',
    tags: ['possessive', 'avoir', 'family', 'translation']
  },
  {
    id: 'l3-assess-4',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist korrekt für "ihr Sohn" (mehrere Besitzer, z.B. ein Ehepaar)?',
    options: ['son fils', 'sa fils', 'leur fils', 'leurs fils'],
    correctAnswer: 'leur fils',
    explanation: 'Bei mehreren Besitzern (das Ehepaar) und einem besessenen Ding (ein Sohn) benutzt man "leur". "leurs" wäre für mehrere Söhne.',
    tags: ['possessive', 'grammar', 'context']
  },
  {
    id: 'l3-assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Bilde den Plural der ganzen Phrase: le vieux tableau → les ___ ___',
    correctAnswer: ['vieux tableaux'],
    explanation: '"vieux" bleibt unverändert (endet schon auf -x), "tableau" → "tableaux" (-eau → -eaux).',
    tags: ['plural', 'grammar']
  },
  {
    id: 'l3-assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Mon oncle et ma tante ont beaucoup d\'enfants.',
    correctAnswer: ['Mein Onkel und meine Tante haben viele Kinder.', 'Mein Onkel und meine Tante haben viele Kinder', 'mein Onkel und meine Tante haben viele Kinder'],
    explanation: '"Mon oncle" (mein Onkel) + "ma tante" (meine Tante) + "ont" (haben) + "beaucoup d\'enfants" (viele Kinder).',
    tags: ['possessive', 'family', 'quantity', 'translation']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson03: Lesson = {
  meta: {
    id: 'lesson-03',
    number: 3,
    title: 'La Famille',
    titleGerman: 'Die Familie',
    objectives: [
      'Die wichtigsten Familienmitglieder auf Französisch benennen können',
      'Possessivbegleiter (mon/ma/mes usw.) korrekt anwenden',
      'Verstehen, dass sich der Possessivbegleiter nach dem besessenen Wort richtet',
      'Den Plural von Substantiven mit -s und -x bilden',
      'Die Wendung "il y a" zum Beschreiben verwenden',
      'Die eigene Familienstruktur beschreiben können'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02'],
    tags: ['family', 'possessive', 'plural', 'il-y-a', 'avoir', 'relationships']
  },

  introduction: {
    objectives: [
      'Alle wichtigen Familienmitglieder benennen können',
      'Possessivbegleiter sicher verwenden (mein, dein, sein/ihr usw.)',
      'Den Plural von Substantiven korrekt bilden',
      'Mit "il y a" und "avoir" die Familie beschreiben'
    ],
    motivation: `
In dieser Lektion lernst du, über deine Familie zu sprechen - eines der häufigsten Gesprächsthemen überhaupt!
Du lernst, wie man Familienmitglieder benennt und mit Possessivbegleitern ("mein Vater", "ihre Schwester")
genau ausdrückt, wer zu wem gehört.

Der wichtigste neue Baustein sind die Possessivbegleiter. Sie funktionieren im Französischen anders als im
Deutschen - aber keine Sorge, mit dem Trick "Achte auf das besessene Wort" wird es schnell logisch!
    `,
    culturalNote: `
**Die Familie in Frankreich**

Die Familie ("la famille") hat in Frankreich einen hohen Stellenwert. Das Sonntagsessen ("le déjeuner du
dimanche") mit der ganzen Familie ist eine beliebte Tradition.

**Achtung, False Friend!**

Das französische "les parents" bedeutet "die Eltern", NICHT "die Verwandten" wie das ähnlich klingende
deutsche Wort vermuten lässt. Möchtest du von Verwandten sprechen, sagst du "la famille" oder "les proches".

**Großeltern liebevoll**

Französische Kinder nennen ihre Großeltern oft liebevoll "papi" (Opa) und "mamie" (Oma) - vergleichbar mit
dem deutschen Opa und Oma.
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
      'Du kennst die wichtigsten Familienmitglieder (le père, la mère, le frère, la sœur und viele mehr)',
      'Du kannst Possessivbegleiter korrekt verwenden (mon/ma/mes, ton/ta/tes, son/sa/ses)',
      'Du weißt, dass sich der Possessivbegleiter nach dem besessenen Wort richtet, nicht nach dem Besitzer',
      'Du kannst notre/votre/leur für mehrere Besitzer einsetzen',
      'Du bildest den Plural von Substantiven mit -s und -x',
      'Du beschreibst deine Familie mit "il y a" und dem Verb "avoir"',
      'Du kennst den False Friend "les parents" (= die Eltern, nicht Verwandte)'
    ],
    nextLesson: 'lesson-04'
  }
};
