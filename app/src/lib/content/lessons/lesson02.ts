import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 02: Chiffres et Informations - Zahlen & Infos
 * Numbers and Personal Information in French for German speakers
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Numbers 0-30 (les nombres)
 * - The French alphabet for spelling
 * - The verb "avoir" (to have) conjugation
 * - Indefinite articles un/une
 * - Question formation by intonation
 * - Giving personal information (age, phone, name, address)
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Why this lesson
  {
    id: 'intro-numbers',
    title: 'Warum Zahlen und Infos?',
    type: 'explanation',
    content: `
In dieser Lektion lernst du, mit Zahlen umzugehen und persönliche Informationen auszutauschen.
Das brauchst du im Alltag ständig: beim Einkaufen, beim Telefonieren, beim Ausfüllen von Formularen
oder einfach, um dein Alter zu nennen.

**Was du am Ende kannst:**

- Von 0 bis 30 zählen
- Dein Alter angeben ("Ich bin 25 Jahre alt")
- Deine Telefonnummer nennen
- Deinen Namen buchstabieren
- Einfache Ja/Nein-Fragen stellen
- Das Verb "avoir" (haben) benutzen

**Ein wichtiger Unterschied zum Deutschen:**
Im Französischen sagt man nicht "Ich bin 25" mit dem Verb "sein", sondern "J'ai 25 ans" - wörtlich
"Ich HABE 25 Jahre". Dafür brauchst du das Verb "avoir" (haben)!
    `,
    germanExplanation: 'Diese Lektion verbindet Zahlen mit dem wichtigen Verb avoir.'
  },

  // Section 2: Numbers 0-10 review + 11-16
  {
    id: 'numbers-0-16',
    title: 'Zahlen 0 bis 16 (Les nombres)',
    type: 'table',
    content: `
Die Zahlen von 0 bis 16 sind eigene Wörter und müssen auswendig gelernt werden.
Die Zahlen 1 bis 10 kennst du schon aus Lektion 1!

| Zahl | Französisch | Aussprache | Besonderheiten |
|------|-------------|------------|----------------|
| 0 | zéro | [zeʁo] | Wie "sero" mit französischem R |
| 1 | un | [œ̃] | Maskulin. Feminin = "une" [yn] |
| 2 | deux | [dø] | Wie deutsches "dö" |
| 3 | trois | [tʁwa] | Französisches R! |
| 4 | quatre | [katʁ] | -re am Ende kaum hörbar |
| 5 | cinq | [sɛ̃k] | -q wird gesprochen |
| 6 | six | [sis] | Allein [sis], vor Konsonant [si] |
| 7 | sept | [sɛt] | -p ist stumm |
| 8 | huit | [ɥit] | Beginnt mit [ɥ] wie "üi" |
| 9 | neuf | [nœf] | F wird gesprochen |
| 10 | dix | [dis] | Allein [dis], vor Konsonant [di] |
| 11 | onze | [ɔ̃z] | Nasalvokal am Anfang! |
| 12 | douze | [duz] | Wie "dus" mit weichem s |
| 13 | treize | [tʁɛz] | Französisches R |
| 14 | quatorze | [katɔʁz] | NICHT "quatre-..."! |
| 15 | quinze | [kɛ̃z] | Nasalvokal [kɛ̃] |
| 16 | seize | [sɛz] | Wie "ßäs" |
    `,
    germanExplanation: 'Achtung: 11-16 enden alle auf -ze und sind eigenständige Wörter.'
  },

  // Section 3: Numbers 17-19 (compound)
  {
    id: 'numbers-17-19',
    title: 'Zahlen 17 bis 19 - Zusammensetzungen',
    type: 'explanation',
    content: `
Ab 17 wird es logischer! Die Zahlen 17, 18 und 19 sind Zusammensetzungen aus "dix" (10) und der
Einerzahl - genau wie im Englischen (seventeen = "seven-teen").

**Das Bildungsprinzip: dix + Einer**

- **17 = dix-sept** [di-sɛt] → wörtlich "zehn-sieben"
- **18 = dix-huit** [di-zɥit] → wörtlich "zehn-acht"
- **19 = dix-neuf** [diz-nœf] → wörtlich "zehn-neun"

Die Zahlen werden mit einem Bindestrich geschrieben.

**Vergleich mit dem Deutschen:**
Im Deutschen sagt man "sieb-zehn" (Einer zuerst), im Französischen "dix-sept" (Zehner zuerst) -
also umgekehrt! Das ist für Anfänger oft eine Stolperfalle.
    `,
    examples: [
      { french: 'dix-sept', german: 'siebzehn (17)', notes: 'Aussprache: [di-sɛt]' },
      { french: 'dix-huit', german: 'achtzehn (18)', notes: 'Aussprache: [di-zɥit] mit Liaison' },
      { french: 'dix-neuf', german: 'neunzehn (19)', notes: 'Aussprache: [diz-nœf]' }
    ]
  },

  // Section 4: Numbers 20-30
  {
    id: 'numbers-20-30',
    title: 'Zahlen 20 bis 30',
    type: 'table',
    content: `
"vingt" (20) ist ein neues Grundwort. Von 21 bis 29 setzt man "vingt" mit den Einern zusammen.

**Sonderfall 21:** Hier kommt "et" (und) dazu: "vingt-et-un" (wörtlich "zwanzig-und-eins").
Bei 22-29 gibt es KEIN "et"!

| Zahl | Französisch | Aussprache | Besonderheiten |
|------|-------------|------------|----------------|
| 20 | vingt | [vɛ̃] | Das -gt ist stumm! Nur [vɛ̃] |
| 21 | vingt-et-un | [vɛ̃t-e-œ̃] | Mit "et" (und)! |
| 22 | vingt-deux | [vɛ̃t-dø] | Ohne "et", mit Bindestrich |
| 23 | vingt-trois | [vɛ̃t-tʁwa] | |
| 24 | vingt-quatre | [vɛ̃t-katʁ] | |
| 25 | vingt-cinq | [vɛ̃t-sɛ̃k] | |
| 26 | vingt-six | [vɛ̃t-sis] | |
| 27 | vingt-sept | [vɛ̃t-sɛt] | |
| 28 | vingt-huit | [vɛ̃t-ɥit] | |
| 29 | vingt-neuf | [vɛ̃t-nœf] | |
| 30 | trente | [tʁɑ̃t] | Neues Grundwort, Nasalvokal |
    `,
    germanExplanation: 'Merke: bei 21 steht "et", bei 22-29 nicht. 30 = "trente".'
  },

  // Section 5: Pronunciation tip for vingt
  {
    id: 'vingt-pronunciation',
    title: 'Aussprache-Tipp: vingt [vɛ̃]',
    type: 'tip',
    content: `
Die Zahl **vingt** (20) ist eine echte Aussprachefalle für Deutsche!

**Wichtig:**
- Das -g und -t am Ende sind STUMM, wenn "vingt" allein steht: [vɛ̃]
- Es klingt wie "wäng" durch die Nase (Nasalvokal)

**ABER bei den Zahlen 21-29 wird das -t hörbar (Liaison):**
- vingt-et-un [vɛ̃t-e-œ̃]
- vingt-deux [vɛ̃t-dø]

**Vergleiche nicht verwechseln:**
- vingt [vɛ̃] = 20
- vin [vɛ̃] = Wein (klingt gleich!)

Der Kontext macht klar, was gemeint ist. Eine schöne Eselsbrücke: "20 Gläser Wein" klingen fast identisch!
    `
  },

  // Section 6: The verb avoir
  {
    id: 'verb-avoir',
    title: 'Das Verb "avoir" (haben)',
    type: 'table',
    content: `
"Avoir" ist nach "être" das zweitwichtigste Verb im Französischen. Es bedeutet "haben" und ist
UNREGELMÄSSIG - die Formen musst du auswendig lernen.

## Konjugation im Präsens (Présent)

| Pronomen | avoir | Aussprache | Deutsch | Beispiel |
|----------|-------|------------|---------|----------|
| j' | ai | [ʒe] | ich habe | J'ai un chat. (Ich habe eine Katze.) |
| tu | as | [ty a] | du hast | Tu as 20 ans. (Du bist 20 Jahre alt.) |
| il/elle | a | [il a] | er/sie hat | Il a un frère. (Er hat einen Bruder.) |
| nous | avons | [nuz‿avɔ̃] | wir haben | Nous avons un chien. (Wir haben einen Hund.) |
| vous | avez | [vuz‿ave] | ihr habt / Sie haben | Vous avez l'adresse? (Haben Sie die Adresse?) |
| ils/elles | ont | [ilz‿ɔ̃] | sie haben | Ils ont deux enfants. (Sie haben zwei Kinder.) |

**WICHTIG:** "je" wird vor "ai" zu "j'" - also IMMER "j'ai", niemals "je ai"!

**Merkhilfe:** Sprich den Rhythmus laut: "j'ai, tu-as, il-a, nous-avons, vous-avez, ils-ont"
    `,
    germanExplanation: 'avoir ist unregelmäßig. Besonders wichtig: "j\'ai" mit Apostroph.'
  },

  // Section 7: avoir vs être for age
  {
    id: 'avoir-age',
    title: 'avoir für das Alter - "Jahre HABEN"',
    type: 'comparison',
    content: `
Ein großer Unterschied zwischen Deutsch und Französisch:

**Deutsch:** Ich BIN 25 Jahre alt. (Verb: sein)
**Französisch:** J'AI 25 ans. (Verb: haben/avoir)

Wörtlich übersetzt sagt der Franzose: "Ich HABE 25 Jahre."

**Die Struktur:**
> [Person] + avoir + [Zahl] + **ans**

Das Wort "ans" (Jahre) darf NIE fehlen! Ein häufiger Fehler ist es, nur die Zahl zu sagen.

**Beispiele:**
- J'ai vingt ans. → Ich bin 20 Jahre alt.
- Elle a trente ans. → Sie ist 30 Jahre alt.
- Tu as quel âge? → Wie alt bist du? (wörtlich: "Du hast welches Alter?")

**Achtung Liaison:** Bei "ans" gibt es oft eine Liaison:
- deux ans [dø-z‿ɑ̃]
- trois ans [tʁwa-z‿ɑ̃]
    `
  },

  // Section 8: Indefinite articles un/une
  {
    id: 'articles-un-une',
    title: 'Die unbestimmten Artikel un / une',
    type: 'table',
    content: `
Im Französischen hat JEDES Substantiv ein Geschlecht: maskulin oder feminin. Es gibt KEIN Neutrum
(kein "das")! Der unbestimmte Artikel ("ein/eine") richtet sich nach dem Geschlecht.

| Geschlecht | Artikel | Aussprache | Deutsch | Beispiel |
|------------|---------|------------|---------|----------|
| maskulin | un | [œ̃] | ein | un chat (eine Katze, m), un nom (ein Name) |
| feminin | une | [yn] | eine | une adresse (eine Adresse), une maison (ein Haus) |

**Wichtig:**
- "un" sieht aus wie die Zahl "1" - das ist kein Zufall, es ist dasselbe Wort!
- Das Geschlecht muss man pro Wort lernen - es ist nicht immer logisch.
- "le téléphone" ist maskulin, aber "l'adresse" ist feminin - einfach mitlernen!

**Tipp:** Lerne jedes neue Substantiv IMMER mit seinem Artikel zusammen, also "un chat" statt nur "chat".
    `,
    germanExplanation: 'Es gibt kein Neutrum im Französischen - alles ist m oder f!'
  },

  // Section 9: Questions by intonation
  {
    id: 'questions-intonation',
    title: 'Fragen durch Betonung (Intonation)',
    type: 'explanation',
    content: `
Die EINFACHSTE Art, im Französischen eine Ja/Nein-Frage zu stellen, ist die Intonationsfrage.
Du nimmst einen normalen Aussagesatz und hebst am Ende die Stimme - genau wie im Deutschen umgangssprachlich!

**So funktioniert es:**

| Aussage | Frage (Intonation) |
|---------|--------------------|
| Tu as 20 ans. (Du bist 20.) | Tu as 20 ans? (Du bist 20?) |
| Vous avez l'adresse. (Sie haben die Adresse.) | Vous avez l'adresse? |
| Il a un chien. (Er hat einen Hund.) | Il a un chien? |

**Der einzige Unterschied:** Beim Sprechen hebt sich die Stimme am Satzende ↗, beim Schreiben steht
ein Fragezeichen. Die Wortstellung bleibt GLEICH!

Das ist die häufigste Fragetechnik in der gesprochenen Alltagssprache. Es gibt noch andere
(formellere) Methoden mit "est-ce que" oder Inversion - die lernst du später.

**Antworten:**
- Oui = Ja
- Non = Nein
    `,
    germanExplanation: 'Intonationsfragen: gleiche Wortstellung wie die Aussage, nur Stimme heben.'
  },

  // Section 10: The French alphabet
  {
    id: 'alphabet-spelling',
    title: 'Das Alphabet zum Buchstabieren',
    type: 'table',
    content: `
Um deinen Namen zu buchstabieren, brauchst du die Aussprache der Buchstaben. Hier die wichtigsten:

| Buchstabe | Aussprache | | Buchstabe | Aussprache |
|-----------|------------|---|-----------|------------|
| A | [a] | | N | [ɛn] |
| B | [be] | | O | [o] |
| C | [se] | | P | [pe] |
| D | [de] | | Q | [ky] |
| E | [ø] | | R | [ɛʁ] |
| F | [ɛf] | | S | [ɛs] |
| G | [ʒe] | | T | [te] |
| H | [aʃ] | | U | [y] |
| I | [i] | | V | [ve] |
| J | [ʒi] | | W | [dublə ve] |
| K | [ka] | | X | [iks] |
| L | [ɛl] | | Y | [igʁɛk] |
| M | [ɛm] | | Z | [zɛd] |

**Achtung Verwechslungsgefahr:**
- G [ʒe] und J [ʒi] klingen ähnlich!
- Das deutsche "J" klingt wie das französische "G"!
    `,
    germanExplanation: 'W heißt "double vé" und Y heißt "i grec" (griechisches i).'
  },

  // Section 11: Spelling phrases
  {
    id: 'spelling-phrases',
    title: 'Buchstabieren - nützliche Sätze',
    type: 'example',
    content: `
So fragst und antwortest du beim Buchstabieren:
    `,
    examples: [
      { french: 'Comment ça s\'écrit?', german: 'Wie schreibt man das?', notes: 'Standard-Frage zum Buchstabieren' },
      { french: 'Ça s\'écrit M-A-R-I-E.', german: 'Das schreibt man M-A-R-I-E.', notes: 'Antwort mit den Buchstaben' },
      { french: 'Vous pouvez épeler?', german: 'Können Sie buchstabieren?', notes: 'Höfliche Aufforderung' },
      { french: 'Quel est votre nom?', german: 'Wie ist Ihr Name (Nachname)?', notes: 'le nom = Nachname' },
      { french: 'Quel est votre prénom?', german: 'Wie ist Ihr Vorname?', notes: 'le prénom = Vorname' }
    ]
  },

  // Section 12: Personal information vocabulary
  {
    id: 'personal-info',
    title: 'Persönliche Informationen',
    type: 'example',
    content: `
Wichtige Begriffe rund um persönliche Daten:
    `,
    examples: [
      { french: 'l\'âge (m)', german: 'das Alter', notes: 'Tu as quel âge? = Wie alt bist du?' },
      { french: 'le numéro de téléphone', german: 'die Telefonnummer', notes: 'Oft kurz: "le numéro"' },
      { french: 'l\'adresse (f)', german: 'die Adresse', notes: 'Feminin! une adresse' },
      { french: 'le nom', german: 'der Nachname', notes: 'Auch allgemein "Name"' },
      { french: 'le prénom', german: 'der Vorname', notes: 'pré- = vor (wie "Vor-name")' }
    ]
  },

  // Section 13: Dialogue 1 - informal
  {
    id: 'dialogue-age',
    title: 'Dialog: Nach dem Alter fragen (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Zwei junge Leute lernen sich kennen.

**Léa:** Salut! Tu as quel âge?
**Tom:** J'ai vingt-deux ans. Et toi?
**Léa:** Moi, j'ai dix-neuf ans.
**Tom:** Tu as un numéro de téléphone?
**Léa:** Oui! C'est le zéro-six, douze, vingt-cinq...
**Tom:** Attends! Tu peux répéter?
**Léa:** Bien sûr: zéro-six, douze, vingt-cinq.

---

**Beachte:**
- "Tu as quel âge?" = "Wie alt bist du?" (mit avoir!)
- Französische Handynummern beginnen mit "06" oder "07"
- "Tu peux répéter?" = "Kannst du wiederholen?" - sehr nützlich!
- Telefonnummern werden in Zweier-Gruppen gesprochen
    `
  },

  // Section 14: Phone numbers note
  {
    id: 'phone-numbers',
    title: 'Telefonnummern auf Französisch',
    type: 'tip',
    content: `
Französische Telefonnummern haben 10 Ziffern und werden in **fünf Zweiergruppen** gesprochen.

**Beispiel:** 06 12 25 30 18

Man liest es als ganze Zahlen:
> zéro-six / douze / vingt-cinq / trente / dix-huit

NICHT Ziffer für Ziffer wie im Deutschen oft üblich! Das ist anfangs ungewohnt, aber typisch
französisch. Genau dafür brauchst du die Zahlen bis 30 (und später höher).

**Nützliche Sätze:**
- Quel est ton numéro? = Wie ist deine Nummer?
- Tu peux répéter? = Kannst du wiederholen?
- Plus lentement, s'il te plaît! = Langsamer, bitte!
    `
  },

  // Section 15: Dialogue 2 - formal
  {
    id: 'dialogue-form',
    title: 'Dialog: Formular ausfüllen (Formell)',
    type: 'dialogue',
    content: `
**Situation:** An der Rezeption eines Hotels.

**Réceptionniste:** Bonjour! Quel est votre nom?
**Client:** Je m'appelle Berger.
**Réceptionniste:** Comment ça s'écrit?
**Client:** B-E-R-G-E-R.
**Réceptionniste:** Et votre prénom?
**Client:** Thomas. T-H-O-M-A-S.
**Réceptionniste:** Vous avez un numéro de téléphone?
**Client:** Oui, c'est le zéro-sept, vingt-huit, onze...

---

**Beachte:**
- "votre" = Ihr (formell), passend zu "vous"
- "Comment ça s'écrit?" fragt nach der Schreibweise
- Buchstabieren ist an Rezeptionen, Telefon und Behörden sehr wichtig
- "le nom" = Nachname, "le prénom" = Vorname
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Numbers 0-30
  {
    id: 'lesson2-number-zero',
    french: 'zéro',
    german: 'null',
    english: 'zero',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Mon numéro commence par zéro-six.', german: 'Meine Nummer beginnt mit null-sechs.' },
    notes: 'Aussprache: [zeʁo] mit französischem R',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-onze',
    french: 'onze',
    german: 'elf',
    english: 'eleven',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Il a onze ans.', german: 'Er ist elf Jahre alt.' },
    notes: 'Aussprache: [ɔ̃z], beginnt mit Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-douze',
    french: 'douze',
    german: 'zwölf',
    english: 'twelve',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'J\'ai douze livres.', german: 'Ich habe zwölf Bücher.' },
    notes: 'Aussprache: [duz]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-treize',
    french: 'treize',
    german: 'dreizehn',
    english: 'thirteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Elle a treize ans.', german: 'Sie ist dreizehn Jahre alt.' },
    notes: 'Aussprache: [tʁɛz], französisches R',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-quatorze',
    french: 'quatorze',
    german: 'vierzehn',
    english: 'fourteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Il y a quatorze étudiants.', german: 'Es gibt vierzehn Studenten.' },
    notes: 'Aussprache: [katɔʁz], NICHT "quatre-..."',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-quinze',
    french: 'quinze',
    german: 'fünfzehn',
    english: 'fifteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'J\'ai quinze euros.', german: 'Ich habe fünfzehn Euro.' },
    notes: 'Aussprache: [kɛ̃z], Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-seize',
    french: 'seize',
    german: 'sechzehn',
    english: 'sixteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Elle a seize ans.', german: 'Sie ist sechzehn Jahre alt.' },
    notes: 'Aussprache: [sɛz]. Letzte Zahl auf -ze!',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-dixsept',
    french: 'dix-sept',
    german: 'siebzehn',
    english: 'seventeen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'J\'ai dix-sept ans.', german: 'Ich bin siebzehn Jahre alt.' },
    notes: 'Zusammensetzung: dix (10) + sept (7). Aussprache: [di-sɛt]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-dixhuit',
    french: 'dix-huit',
    german: 'achtzehn',
    english: 'eighteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Tu as dix-huit ans?', german: 'Bist du achtzehn?' },
    notes: 'dix + huit. Aussprache: [di-zɥit] mit Liaison',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-dixneuf',
    french: 'dix-neuf',
    german: 'neunzehn',
    english: 'nineteen',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Elle a dix-neuf ans.', german: 'Sie ist neunzehn Jahre alt.' },
    notes: 'dix + neuf. Aussprache: [diz-nœf]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-vingt',
    french: 'vingt',
    german: 'zwanzig',
    english: 'twenty',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'J\'ai vingt ans.', german: 'Ich bin zwanzig Jahre alt.' },
    notes: 'Das -gt ist stumm! Aussprache: [vɛ̃], klingt wie "vin" (Wein)',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-vingtetun',
    french: 'vingt-et-un',
    german: 'einundzwanzig',
    english: 'twenty-one',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Il a vingt-et-un ans.', german: 'Er ist einundzwanzig Jahre alt.' },
    notes: 'Mit "et" (und)! Aussprache: [vɛ̃t-e-œ̃]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-vingtdeux',
    french: 'vingt-deux',
    german: 'zweiundzwanzig',
    english: 'twenty-two',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'J\'ai vingt-deux ans.', german: 'Ich bin zweiundzwanzig Jahre alt.' },
    notes: 'Ab 22 OHNE "et", nur Bindestrich. Aussprache: [vɛ̃t-dø]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-vingtcinq',
    french: 'vingt-cinq',
    german: 'fünfundzwanzig',
    english: 'twenty-five',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Elle a vingt-cinq ans.', german: 'Sie ist fünfundzwanzig Jahre alt.' },
    notes: 'vingt + cinq. Aussprache: [vɛ̃t-sɛ̃k]',
    level: 'A1',
    tags: ['lesson2', 'number']
  },
  {
    id: 'lesson2-number-trente',
    french: 'trente',
    german: 'dreißig',
    english: 'thirty',
    partOfSpeech: 'noun',
    exampleSentence: { french: 'Mon père a trente ans.', german: 'Mein Vater ist dreißig Jahre alt.' },
    notes: 'Neues Grundwort. Aussprache: [tʁɑ̃t], Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'number']
  },

  // avoir conjugations
  {
    id: 'lesson2-avoir-jai',
    french: 'j\'ai',
    german: 'ich habe',
    english: 'I have',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'J\'ai un chat.', german: 'Ich habe eine Katze.' },
    notes: 'avoir Konjugation: 1. Person Singular. IMMER mit Apostroph: j\'ai!',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },
  {
    id: 'lesson2-avoir-tuas',
    french: 'tu as',
    german: 'du hast',
    english: 'you have',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Tu as vingt ans.', german: 'Du bist zwanzig Jahre alt.' },
    notes: 'avoir Konjugation: 2. Person Singular',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },
  {
    id: 'lesson2-avoir-ila',
    french: 'il/elle a',
    german: 'er/sie hat',
    english: 'he/she has',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Elle a un frère.', german: 'Sie hat einen Bruder.' },
    notes: 'avoir Konjugation: 3. Person Singular',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },
  {
    id: 'lesson2-avoir-nousavons',
    french: 'nous avons',
    german: 'wir haben',
    english: 'we have',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Nous avons un chien.', german: 'Wir haben einen Hund.' },
    notes: 'avoir Konjugation: 1. Person Plural. Liaison: [nuz‿avɔ̃]',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },
  {
    id: 'lesson2-avoir-vousavez',
    french: 'vous avez',
    german: 'ihr habt / Sie haben',
    english: 'you have (plural/formal)',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Vous avez l\'adresse?', german: 'Haben Sie die Adresse?' },
    notes: 'avoir Konjugation: 2. Person Plural/formell. Liaison: [vuz‿ave]',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },
  {
    id: 'lesson2-avoir-ilsont',
    french: 'ils/elles ont',
    german: 'sie haben',
    english: 'they have',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Ils ont deux enfants.', german: 'Sie haben zwei Kinder.' },
    notes: 'avoir Konjugation: 3. Person Plural. Liaison: [ilz‿ɔ̃]. Nicht mit "sont" (être) verwechseln!',
    level: 'A1',
    tags: ['lesson2', 'verb', 'avoir', 'conjugation']
  },

  // Articles un/une
  {
    id: 'lesson2-article-un',
    french: 'un',
    german: 'ein (maskulin)',
    english: 'a/an (masculine)',
    partOfSpeech: 'article',
    gender: 'm',
    exampleSentence: { french: 'un chat', german: 'eine Katze (m)' },
    notes: 'Unbestimmter Artikel maskulin. Identisch mit der Zahl "1". Aussprache: [œ̃]',
    level: 'A1',
    tags: ['lesson2', 'article', 'essential']
  },
  {
    id: 'lesson2-article-une',
    french: 'une',
    german: 'eine (feminin)',
    english: 'a/an (feminine)',
    partOfSpeech: 'article',
    gender: 'f',
    exampleSentence: { french: 'une adresse', german: 'eine Adresse' },
    notes: 'Unbestimmter Artikel feminin. Aussprache: [yn]',
    level: 'A1',
    tags: ['lesson2', 'article', 'essential']
  },

  // Personal information words
  {
    id: 'lesson2-info-age',
    french: 'l\'âge',
    german: 'das Alter',
    english: 'age',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Tu as quel âge?', german: 'Wie alt bist du?' },
    notes: 'Maskulin: un âge. Mit avoir: "avoir ... ans"',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info']
  },
  {
    id: 'lesson2-info-an',
    french: 'an / ans',
    german: 'Jahr / Jahre',
    english: 'year(s)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'J\'ai vingt-cinq ans.', german: 'Ich bin 25 Jahre alt.' },
    notes: 'Darf bei Altersangaben NIE fehlen! Liaison: deux ans [dø-z‿ɑ̃]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info', 'essential']
  },
  {
    id: 'lesson2-info-numero',
    french: 'le numéro de téléphone',
    german: 'die Telefonnummer',
    english: 'phone number',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Quel est ton numéro de téléphone?', german: 'Wie ist deine Telefonnummer?' },
    notes: 'Maskulin. Oft kurz nur "le numéro"',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info']
  },
  {
    id: 'lesson2-info-adresse',
    french: 'l\'adresse',
    german: 'die Adresse',
    english: 'address',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: { french: 'Vous avez l\'adresse?', german: 'Haben Sie die Adresse?' },
    notes: 'FEMININ: une adresse. Achtung, mit nur einem -d-!',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info']
  },
  {
    id: 'lesson2-info-nom',
    french: 'le nom',
    german: 'der Nachname',
    english: 'last name / name',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Quel est votre nom?', german: 'Wie ist Ihr Nachname?' },
    notes: 'Maskulin. Aussprache: [nɔ̃], Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info']
  },
  {
    id: 'lesson2-info-prenom',
    french: 'le prénom',
    german: 'der Vorname',
    english: 'first name',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Mon prénom est Marie.', german: 'Mein Vorname ist Marie.' },
    notes: 'pré- (vor) + nom (Name) = "Vor-name". Maskulin',
    level: 'A1',
    tags: ['lesson2', 'noun', 'personal-info']
  },

  // Useful phrases & answers
  {
    id: 'lesson2-phrase-quelage',
    french: 'tu as quel âge?',
    german: 'Wie alt bist du?',
    english: 'how old are you?',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Salut! Tu as quel âge?', german: 'Hi! Wie alt bist du?' },
    notes: 'Informell. Wörtlich: "Du hast welches Alter?" - mit avoir!',
    level: 'A1',
    tags: ['lesson2', 'phrase', 'question', 'personal-info']
  },
  {
    id: 'lesson2-phrase-secrit',
    french: 'comment ça s\'écrit?',
    german: 'Wie schreibt man das?',
    english: 'how is it spelled?',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Berger? Comment ça s\'écrit?', german: 'Berger? Wie schreibt man das?' },
    notes: 'Standard-Frage beim Buchstabieren',
    level: 'A1',
    tags: ['lesson2', 'phrase', 'question', 'spelling']
  },
  {
    id: 'lesson2-phrase-repeter',
    french: 'tu peux répéter?',
    german: 'Kannst du wiederholen?',
    english: 'can you repeat?',
    partOfSpeech: 'verb',
    exampleSentence: { french: 'Plus lentement! Tu peux répéter?', german: 'Langsamer! Kannst du wiederholen?' },
    notes: 'Sehr nützlich, wenn man etwas nicht verstanden hat. Formell: "Vous pouvez répéter?"',
    level: 'A1',
    tags: ['lesson2', 'phrase', 'communication']
  },
  {
    id: 'lesson2-phrase-oui',
    french: 'oui',
    german: 'ja',
    english: 'yes',
    partOfSpeech: 'adverb',
    exampleSentence: { french: 'Tu as 20 ans? — Oui!', german: 'Bist du 20? — Ja!' },
    notes: 'Aussprache: [wi]. Antwort auf Ja/Nein-Fragen',
    level: 'A1',
    tags: ['lesson2', 'answer', 'essential']
  },
  {
    id: 'lesson2-phrase-non',
    french: 'non',
    german: 'nein',
    english: 'no',
    partOfSpeech: 'adverb',
    exampleSentence: { french: 'Tu as un chien? — Non.', german: 'Hast du einen Hund? — Nein.' },
    notes: 'Aussprache: [nɔ̃], Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'answer', 'essential']
  },

  // Common nouns for un/une practice
  {
    id: 'lesson2-noun-chat',
    french: 'le chat',
    german: 'die Katze',
    english: 'cat',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'J\'ai un chat.', german: 'Ich habe eine Katze.' },
    notes: 'Maskulin: un chat. Das -t ist stumm: [ʃa]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'animal']
  },
  {
    id: 'lesson2-noun-chien',
    french: 'le chien',
    german: 'der Hund',
    english: 'dog',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Tu as un chien?', german: 'Hast du einen Hund?' },
    notes: 'Maskulin: un chien. Aussprache: [ʃjɛ̃], Nasalvokal',
    level: 'A1',
    tags: ['lesson2', 'noun', 'animal']
  },
  {
    id: 'lesson2-noun-maison',
    french: 'la maison',
    german: 'das Haus',
    english: 'house',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: { french: 'Nous avons une maison.', german: 'Wir haben ein Haus.' },
    notes: 'FEMININ: une maison. Aussprache: [mɛzɔ̃]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'home']
  },
  {
    id: 'lesson2-noun-enfant',
    french: 'l\'enfant',
    german: 'das Kind',
    english: 'child',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'Ils ont deux enfants.', german: 'Sie haben zwei Kinder.' },
    notes: 'un enfant (m) / une enfant (f). Plural: enfants',
    level: 'A1',
    tags: ['lesson2', 'noun', 'family']
  },
  {
    id: 'lesson2-noun-frere',
    french: 'le frère',
    german: 'der Bruder',
    english: 'brother',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'J\'ai un frère.', german: 'Ich habe einen Bruder.' },
    notes: 'Maskulin: un frère. Aussprache: [fʁɛʁ]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'family']
  },
  {
    id: 'lesson2-noun-soeur',
    french: 'la sœur',
    german: 'die Schwester',
    english: 'sister',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: { french: 'Elle a une sœur.', german: 'Sie hat eine Schwester.' },
    notes: 'FEMININ: une sœur. Aussprache: [sœʁ]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'family']
  },
  {
    id: 'lesson2-noun-euro',
    french: 'l\'euro',
    german: 'der Euro',
    english: 'euro',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: { french: 'J\'ai vingt euros.', german: 'Ich habe zwanzig Euro.' },
    notes: 'Maskulin: un euro. Liaison: deux euros [dø-z‿øʁo]',
    level: 'A1',
    tags: ['lesson2', 'noun', 'money']
  }
];

// ============================================================================
// EXERCISES
// ============================================================================

// Guided Practice: Easy exercises (8 exercises)
const guidedPractice: Exercise[] = [
  {
    id: 'l2-guided-1',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man "zwanzig" auf Französisch?',
    options: ['trente', 'vingt', 'douze', 'dix'],
    correctAnswer: 'vingt',
    explanation: '"vingt" [vɛ̃] bedeutet "zwanzig". Das -gt am Ende ist stumm!',
    hints: ['Das -gt am Ende wird nicht gesprochen.', 'Es klingt wie das Wort für "Wein" (vin).'],
    tags: ['numbers']
  },
  {
    id: 'l2-guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "treize"?',
    options: ['dreizehn', 'dreißig', 'drei', 'dreiundzwanzig'],
    correctAnswer: 'dreizehn',
    explanation: '"treize" [tʁɛz] bedeutet "dreizehn" (13).',
    hints: ['Es endet auf -ze wie die Zahlen 11-16.', 'Es ist eine Zahl zwischen 12 und 14.'],
    tags: ['numbers']
  },
  {
    id: 'l2-guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'J\'___ un chat. (Ich habe eine Katze.)',
    correctAnswer: ['ai'],
    explanation: 'Die Form von avoir für "je" ist "ai" - zusammen mit Apostroph: "j\'ai".',
    hints: ['Es sind nur zwei Buchstaben.', 'Es ist "ai" (j\'ai).'],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l2-guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Tu ___ vingt ans. (Du bist zwanzig Jahre alt.)',
    correctAnswer: ['as'],
    explanation: 'Die Form von avoir für "tu" ist "as".',
    hints: ['Es beginnt mit a.', 'Es ist "as".'],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l2-guided-5',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Artikel passt: ___ adresse (eine Adresse)?',
    options: ['un', 'une', 'le', 'la'],
    correctAnswer: 'une',
    explanation: '"adresse" ist feminin, daher "une adresse".',
    hints: ['Adresse ist feminin.', 'Der feminine unbestimmte Artikel ist "une".'],
    tags: ['articles', 'gender']
  },
  {
    id: 'l2-guided-6',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: ja',
    correctAnswer: ['oui', 'Oui'],
    explanation: '"oui" [wi] bedeutet "ja".',
    hints: ['Es hat drei Buchstaben.', 'Es ist "oui".'],
    tags: ['answers', 'vocabulary']
  },
  {
    id: 'l2-guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "le prénom"?',
    options: ['der Nachname', 'der Vorname', 'das Alter', 'die Adresse'],
    correctAnswer: 'der Vorname',
    explanation: '"prénom" = Vorname (pré- = vor). "nom" allein wäre der Nachname.',
    hints: ['"pré-" bedeutet "vor".', 'Es ist der Vorname.'],
    tags: ['personal-info', 'vocabulary']
  },
  {
    id: 'l2-guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man "dreißig"?',
    options: ['treize', 'trente', 'trois', 'vingt'],
    correctAnswer: 'trente',
    explanation: '"trente" [tʁɑ̃t] bedeutet "dreißig" (30). "treize" wäre 13!',
    hints: ['Nicht mit "treize" (13) verwechseln!', 'Es ist "trente".'],
    tags: ['numbers']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'l2-indep-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ un chien. (Wir haben einen Hund.)',
    correctAnswer: ['avons'],
    explanation: 'Die Form von avoir für "nous" ist "avons".',
    hints: ['Es beginnt mit a und endet auf -ons.', 'Es ist "avons".'],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l2-indep-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ l\'adresse? (Haben Sie die Adresse?)',
    correctAnswer: ['avez'],
    explanation: 'Die Form von avoir für "vous" ist "avez".',
    hints: ['Es beginnt mit a und endet auf -ez.', 'Es ist "avez".'],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l2-indep-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ils ___ deux enfants. (Sie haben zwei Kinder.)',
    correctAnswer: ['ont'],
    explanation: 'Die Form von avoir für "ils/elles" ist "ont" [ɔ̃]. Nicht mit "sont" (être) verwechseln!',
    hints: ['Es ist ein kurzes Wort mit Nasalvokal.', 'Es ist "ont" (nicht "sont"!).'],
    tags: ['avoir', 'conjugation']
  },
  {
    id: 'l2-indep-4',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich bin 25 Jahre alt.',
    correctAnswer: ['J\'ai vingt-cinq ans.', 'J\'ai vingt-cinq ans', 'j\'ai vingt-cinq ans', 'J\'ai 25 ans.', 'J\'ai 25 ans'],
    explanation: 'WICHTIG: Mit avoir, nicht être! "J\'ai 25 ans" (wörtlich: "Ich habe 25 Jahre"). "ans" darf nicht fehlen!',
    hints: ['Benutze "avoir", nicht "être".', 'Vergiss "ans" am Ende nicht!', 'Es ist "J\'ai vingt-cinq ans."'],
    tags: ['avoir', 'age', 'translation']
  },
  {
    id: 'l2-indep-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Wie alt bist du? (informell)',
    correctAnswer: ['Tu as quel âge?', 'Tu as quel âge', 'tu as quel âge?'],
    explanation: 'Wörtlich "Du hast welches Alter?" - mit avoir. Die Phrase ist "Tu as quel âge?".',
    hints: ['Es beginnt mit "Tu as".', 'Es ist "Tu as quel âge?"'],
    tags: ['age', 'questions', 'translation']
  },
  {
    id: 'l2-indep-6',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Du willst aus "Il a un chien." eine Frage machen (Intonation). Wie schreibst du es?',
    options: ['Il a un chien?', 'A il un chien?', 'Un chien il a?', 'Chien a il un?'],
    correctAnswer: 'Il a un chien?',
    explanation: 'Bei der Intonationsfrage bleibt die Wortstellung gleich - nur ein Fragezeichen kommt dazu.',
    hints: ['Die Wortstellung ändert sich NICHT.', 'Nur ein Fragezeichen kommt dazu.'],
    tags: ['questions', 'intonation']
  },
  {
    id: 'l2-indep-7',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Artikel passt: ___ maison (ein Haus)?',
    options: ['un', 'une', 'le', 'les'],
    correctAnswer: 'une',
    explanation: '"maison" ist feminin, daher "une maison".',
    hints: ['Maison ist feminin.', 'Es ist "une".'],
    tags: ['articles', 'gender']
  },
  {
    id: 'l2-indep-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Elle a dix-huit ans.',
    correctAnswer: ['Sie ist achtzehn Jahre alt.', 'Sie ist achtzehn Jahre alt', 'Sie ist 18 Jahre alt.', 'Sie ist achtzehn.', 'sie ist achtzehn jahre alt'],
    explanation: '"Elle a ... ans" wird mit "sein" übersetzt: "Sie ist 18 Jahre alt." (avoir → sein bei Alter).',
    hints: ['"a ... ans" bedeutet auf Deutsch "ist ... Jahre alt".', 'Es ist "Sie ist achtzehn Jahre alt."'],
    tags: ['avoir', 'age', 'translation']
  },
  {
    id: 'l2-indep-9',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vervollständige die Zahl: 17 = dix-___',
    correctAnswer: ['sept'],
    explanation: '17 = dix-sept (zehn-sieben). Französisch bildet 17-19 als dix + Einer.',
    hints: ['10 + 7 = 17.', 'Die Einerzahl ist "sept".'],
    tags: ['numbers']
  },
  {
    id: 'l2-indep-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was ist die richtige Schreibweise für 21?',
    options: ['vingt-et-un', 'vingt-un', 'vingt-deux', 'vingt et un'],
    correctAnswer: 'vingt-et-un',
    explanation: 'Bei 21 kommt "et" (und) dazu, mit Bindestrichen: "vingt-et-un". Bei 22-29 gibt es kein "et".',
    hints: ['Bei 21 steht ein "et" (und).', 'Es ist "vingt-et-un".'],
    tags: ['numbers']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'l2-assess-1',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— Tu ___ quel âge?\n— J\'___ vingt-trois ans.',
    correctAnswer: ['as, ai', 'as ai'],
    explanation: '"Tu as quel âge?" (avoir für tu = "as") und "J\'ai vingt-trois ans" (avoir für je = "ai").',
    tags: ['avoir', 'age', 'dialogue']
  },
  {
    id: 'l2-assess-2',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Sie (Plural) haben zwei Kinder.',
    correctAnswer: ['Ils ont deux enfants.', 'Ils ont deux enfants', 'Elles ont deux enfants.', 'ils ont deux enfants'],
    explanation: '"Ils/Elles ont" ist die avoir-Form für "sie" (Plural). Nicht "sont" (être) benutzen!',
    tags: ['avoir', 'translation']
  },
  {
    id: 'l2-assess-3',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist KORREKT für "Ich bin 30 Jahre alt"?',
    options: ['J\'ai trente ans.', 'Je suis trente ans.', 'J\'ai trente.', 'Je suis trente.'],
    correctAnswer: 'J\'ai trente ans.',
    explanation: 'Alter wird mit avoir gebildet und "ans" darf nicht fehlen: "J\'ai trente ans." Nicht être, nicht ohne "ans"!',
    tags: ['avoir', 'age', 'common-mistakes']
  },
  {
    id: 'l2-assess-4',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Schreibe die Telefonnummer in Worten: 06 ... wobei "06" = zéro-___',
    correctAnswer: ['six'],
    explanation: 'Französische Nummern werden in Zweiergruppen gelesen: "zéro-six" für 06.',
    tags: ['numbers', 'phone']
  },
  {
    id: 'l2-assess-5',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Comment ça s\'écrit?',
    correctAnswer: ['Wie schreibt man das?', 'Wie schreibt man das', 'Wie wird das geschrieben?', 'wie schreibt man das?'],
    explanation: '"Comment ça s\'écrit?" fragt nach der Schreibweise - "Wie schreibt man das?".',
    tags: ['spelling', 'phrases']
  },
  {
    id: 'l2-assess-6',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Ergänze den richtigen Artikel: J\'ai ___ sœur. (Ich habe eine Schwester.)',
    correctAnswer: ['une'],
    explanation: '"sœur" ist feminin, daher "une sœur".',
    tags: ['articles', 'gender']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson02: Lesson = {
  meta: {
    id: 'lesson-02',
    number: 2,
    title: 'Chiffres et Informations',
    titleGerman: 'Zahlen & Infos',
    objectives: [
      'Von 0 bis 30 auf Französisch zählen',
      'Das Verb "avoir" (haben) in allen Formen konjugieren',
      'Das eigene Alter und die Telefonnummer angeben',
      'Den eigenen Namen buchstabieren können',
      'Einfache Ja/Nein-Fragen durch Intonation bilden',
      'Die unbestimmten Artikel un/une korrekt verwenden'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01'],
    tags: ['numbers', 'avoir', 'articles', 'personal-info', 'questions', 'alphabet']
  },

  introduction: {
    objectives: [
      'Alle Zahlen von 0 bis 30 verstehen und aussprechen',
      'Das Verb "avoir" konjugieren und für Altersangaben nutzen',
      'Persönliche Informationen (Alter, Nummer, Name) austauschen',
      'Einfache Fragen stellen und buchstabieren'
    ],
    motivation: `
In dieser Lektion erweiterst du dein Fundament um Zahlen und persönliche Informationen. Mit dem
Verb "avoir" (haben) und den Zahlen bis 30 kannst du schon erstaunlich viel: dein Alter nennen,
Telefonnummern austauschen und einfache Fragen stellen.

Besonders spannend: Im Französischen "hat" man sein Alter ("J'ai 20 ans"), statt es zu "sein".
Dieser kleine Unterschied öffnet dir die Tür zu unzähligen Alltagssituationen!
    `,
    culturalNote: `
**Telefonnummern in Frankreich**

Französische Handynummern beginnen mit "06" oder "07" und haben 10 Ziffern. Sie werden in fünf
Zweiergruppen gesprochen (z.B. "zéro-six, douze, vingt-cinq...") - nicht Ziffer für Ziffer wie
im Deutschen oft üblich. Deshalb sind die Zahlen bis 99 so wichtig!

**Buchstabieren**

Da viele französische Namen für deutsche Ohren ungewohnt klingen, ist das Buchstabieren ("épeler")
an Rezeptionen, am Telefon und bei Behörden sehr verbreitet. "Comment ça s'écrit?" (Wie schreibt
man das?) ist eine Frage, die du oft hören wirst.
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
      'Du kannst jetzt von 0 bis 30 auf Französisch zählen',
      'Du kennst die Bildung der Zahlen 17-19 (dix + Einer) und 21-29 (vingt + Einer)',
      'Du kannst das Verb "avoir" in allen Formen konjugieren (j\'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont)',
      'Du weißt, dass man das Alter mit avoir bildet: "J\'ai 25 ans"',
      'Du kannst die unbestimmten Artikel un (m) und une (f) richtig verwenden',
      'Du kannst einfache Ja/Nein-Fragen durch Intonation stellen',
      'Du kennst das Alphabet zum Buchstabieren und die Wörter für persönliche Infos (nom, prénom, âge, adresse)'
    ],
    nextLesson: 'lesson-03'
  }
};
