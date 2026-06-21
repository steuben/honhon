import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 06: Le Temps - Die Zeit
 * Telling time and describing daily routines in French for German speakers
 *
 * Level: A1
 * Duration: ~90 minutes
 *
 * Topics:
 * - Telling time ("Il est une heure", "et quart", "et demie", "moins le quart")
 * - Reflexive verbs (se lever, se coucher, se laver, s'appeler)
 * - Reflexive pronouns (me, te, se, nous, vous, se)
 * - Days of the week (lundi…dimanche)
 * - Parts of the day (le matin, l'après-midi, le soir, la nuit)
 * - Frequency adverbs (toujours, souvent, parfois, jamais)
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Asking for the time
  {
    id: 'asking-time',
    title: 'Nach der Uhrzeit fragen',
    type: 'explanation',
    content: `
Um nach der Uhrzeit zu fragen, gibt es im Französischen eine feste Frage:

**Quelle heure est-il?** [kɛl œʁ ɛ.til] = Wie spät ist es? / Wie viel Uhr ist es?

Die Antwort beginnt IMMER mit **"Il est..."** (Es ist...):

- **Il est une heure.** [il‿ɛ.tyn‿œʁ] = Es ist ein Uhr.
- **Il est deux heures.** [il‿ɛ dø.z‿œʁ] = Es ist zwei Uhr.

**WICHTIG:** Anders als im Deutschen sagt man im Französischen immer "heure(s)" (Uhr/Stunde) dazu.
Bei 1 Uhr → "une heure" (Singular), ab 2 Uhr → "heures" (Plural).
    `,
    germanExplanation: 'Die Frage "Quelle heure est-il?" und die Antwort "Il est..." sind feste Wendungen.',
    examples: [
      { french: 'Quelle heure est-il?', german: 'Wie spät ist es?', notes: 'Aussprache: [kɛl œʁ ɛ.til]' },
      { french: 'Il est une heure.', german: 'Es ist ein Uhr.', notes: 'Singular: "une heure"' },
      { french: 'Il est trois heures.', german: 'Es ist drei Uhr.', notes: 'Plural ab 2 Uhr: "heures"' }
    ]
  },

  // Section 2: Full / half / quarter hours
  {
    id: 'time-fractions',
    title: 'Volle, halbe und Viertelstunden',
    type: 'explanation',
    content: `
Im Französischen werden die Viertel- und halben Stunden mit festen Ausdrücken gebildet:

**et quart** [e kaʁ] = und Viertel (Viertel nach)
- Il est deux heures **et quart**. = Es ist Viertel nach zwei (2:15).

**et demie** [e də.mi] = und halb (halb)
- Il est deux heures **et demie**. = Es ist halb drei (2:30).
- ACHTUNG: Die Franzosen zählen anders! "deux heures et demie" = 2:30, NICHT halb zwei!

**moins le quart** [mwɛ̃ lə kaʁ] = weniger ein Viertel (Viertel vor)
- Il est trois heures **moins le quart**. = Es ist Viertel vor drei (2:45).

**moins ...** [mwɛ̃] = weniger ... (Minuten vor der vollen Stunde)
- Il est trois heures **moins dix**. = Es ist zehn vor drei (2:50).

**WICHTIGER UNTERSCHIED zum Deutschen:**
"deux heures et demie" bedeutet 2:30 (= "halb drei" im Deutschen)!
Die Franzosen beziehen "et demie" auf die VERGANGENE Stunde, nicht die kommende.
    `,
    germanExplanation: 'Die größte Fehlerquelle: "et demie" bezieht sich auf die volle Stunde davor, nicht auf die nächste.'
  },

  // Section 3: Minutes
  {
    id: 'time-minutes',
    title: 'Minuten angeben',
    type: 'example',
    content: `
Bis zur halben Stunde werden die Minuten einfach ANGEHÄNGT:

Ab der halben Stunde wird mit **moins** (weniger) zur nächsten vollen Stunde gerechnet.
    `,
    examples: [
      { french: 'Il est une heure cinq.', german: 'Es ist fünf nach eins (1:05).', notes: 'Minuten einfach anhängen' },
      { french: 'Il est une heure vingt.', german: 'Es ist zwanzig nach eins (1:20).' },
      { french: 'Il est deux heures moins vingt.', german: 'Es ist zwanzig vor zwei (1:40).', notes: 'Mit "moins" rückwärts' },
      { french: 'Il est deux heures moins cinq.', german: 'Es ist fünf vor zwei (1:55).' }
    ]
  },

  // Section 4: Time table overview
  {
    id: 'time-table',
    title: 'Übersicht: Uhrzeiten',
    type: 'table',
    content: `
Hier eine Übersicht der wichtigsten Uhrzeit-Ausdrücke:

| Uhrzeit | Französisch | Deutsch |
|---------|-------------|---------|
| 1:00 | Il est une heure. | Es ist ein Uhr. |
| 2:00 | Il est deux heures. | Es ist zwei Uhr. |
| 3:15 | Il est trois heures et quart. | Es ist Viertel nach drei. |
| 4:30 | Il est quatre heures et demie. | Es ist halb fünf. |
| 5:45 | Il est six heures moins le quart. | Es ist Viertel vor sechs. |
| 6:10 | Il est six heures dix. | Es ist zehn nach sechs. |
| 7:50 | Il est huit heures moins dix. | Es ist zehn vor acht. |
| 12:00 | Il est midi. | Es ist Mittag (12 Uhr). |
| 00:00 | Il est minuit. | Es ist Mitternacht. |

**Besonderheiten:**
- **midi** [mi.di] = Mittag (12:00) → "Il est midi et demi." (KEIN -e bei demi, da midi maskulin!)
- **minuit** [mi.nɥi] = Mitternacht (00:00) → "Il est minuit et demi."
    `,
    germanExplanation: 'Bei "midi" und "minuit" heißt es "et demi" OHNE -e, weil beide maskulin sind.'
  },

  // Section 5: Official vs everyday time
  {
    id: 'official-time',
    title: 'Offizielle Uhrzeit (24-Stunden)',
    type: 'tip',
    content: `
Im Alltag benutzt man die 12-Stunden-Uhr mit "et quart", "et demie" usw.

Für **offizielle Angaben** (Fahrpläne, Fernsehen, Öffnungszeiten) nutzt man die **24-Stunden-Uhr**:

- 14h30 → "quatorze heures trente" (vierzehn Uhr dreißig)
- 20h45 → "vingt heures quarante-cinq" (zwanzig Uhr fünfundvierzig)

Geschrieben wird die Uhrzeit mit einem **"h"** zwischen Stunden und Minuten:
- **8h00** = 8 Uhr
- **14h30** = 14:30 Uhr
- **19h15** = 19:15 Uhr

Im offiziellen Stil werden "et quart", "et demie" und "moins le quart" NICHT benutzt -
man nennt einfach die Minutenzahl.
    `
  },

  // Section 6: Reflexive verbs intro
  {
    id: 'reflexive-intro',
    title: 'Reflexive Verben - Was ist das?',
    type: 'explanation',
    content: `
**Reflexive Verben** (verbes pronominaux) beschreiben Handlungen, die man "an sich selbst" ausführt -
genau wie im Deutschen "sich waschen", "sich anziehen".

Im Französischen erkennt man sie an dem **"se"** vor dem Infinitiv:

- **se laver** = sich waschen
- **se lever** = aufstehen (wörtl. "sich erheben")
- **se coucher** = ins Bett gehen (wörtl. "sich legen")
- **s'appeler** = heißen (wörtl. "sich rufen")

Das "se" ist das **Reflexivpronomen** und verändert sich je nach Person!
Vor einem Vokal wird "se" zu "s'": *s'appeler*, *s'habiller*.

Diese Verben sind besonders wichtig, um den **Tagesablauf** zu beschreiben.
    `,
    germanExplanation: 'Reflexive Verben gibt es auch im Deutschen ("sich waschen") - das Prinzip ist also bekannt.'
  },

  // Section 7: Reflexive pronouns table
  {
    id: 'reflexive-pronouns',
    title: 'Die Reflexivpronomen',
    type: 'table',
    content: `
Das Reflexivpronomen passt sich an die Person an. Es steht VOR dem konjugierten Verb.

| Person | Pronomen | Reflexivpronomen | Vor Vokal | Beispiel |
|--------|----------|------------------|-----------|----------|
| 1. Sg. | je | me | m' | je **me** lave |
| 2. Sg. | tu | te | t' | tu **te** laves |
| 3. Sg. | il/elle | se | s' | il **se** lave |
| 1. Pl. | nous | nous | nous | nous **nous** lavons |
| 2. Pl. | vous | vous | vous | vous **vous** lavez |
| 3. Pl. | ils/elles | se | s' | ils **se** lavent |

**Merke:** Bei "nous" und "vous" ist das Reflexivpronomen identisch mit dem Pronomen!
Vor einem Vokal: me→m', te→t', se→s' (z.B. je **m'**appelle).
    `,
    germanExplanation: 'Das Reflexivpronomen steht immer direkt vor dem konjugierten Verb.'
  },

  // Section 8: Conjugation se laver
  {
    id: 'conjugation-se-laver',
    title: 'Konjugation: se laver (sich waschen)',
    type: 'table',
    content: `
"se laver" ist ein regelmäßiges Verb auf **-er**. Das Verb wird normal konjugiert,
das Reflexivpronomen steht davor.

| Pronomen | Reflexiv + Verb | Aussprache | Deutsch |
|----------|-----------------|------------|---------|
| je | me lave | [mə lav] | ich wasche mich |
| tu | te laves | [tə lav] | du wäschst dich |
| il/elle | se lave | [sə lav] | er/sie wäscht sich |
| nous | nous lavons | [nu la.vɔ̃] | wir waschen uns |
| vous | vous lavez | [vu la.ve] | ihr wascht euch / Sie waschen sich |
| ils/elles | se lavent | [sə lav] | sie waschen sich |

**Beachte:** Die Verbendungen sind dieselben wie bei normalen -er-Verben
(-e, -es, -e, -ons, -ez, -ent). Nur das Reflexivpronomen kommt dazu!
    `
  },

  // Section 9: Conjugation se lever / se coucher
  {
    id: 'conjugation-lever-coucher',
    title: 'Konjugation: se lever & se coucher',
    type: 'table',
    content: `
**se lever** (aufstehen) hat eine kleine Besonderheit: In einigen Formen wird ein **accent grave (è)** gesetzt.

| Pronomen | se lever (aufstehen) | se coucher (ins Bett gehen) |
|----------|----------------------|------------------------------|
| je | me l**è**ve | me couche |
| tu | te l**è**ves | te couches |
| il/elle | se l**è**ve | se couche |
| nous | nous levons | nous couchons |
| vous | vous levez | vous couchez |
| ils/elles | se l**è**vent | se couchent |

**Merke:** Bei "se lever" wird das e zu **è** (außer bei nous/vous)!
"se coucher" ist dagegen komplett regelmäßig.

Beispiele:
- Je me lève à sept heures. = Ich stehe um sieben Uhr auf.
- Il se couche à onze heures. = Er geht um elf Uhr ins Bett.
    `,
    germanExplanation: 'Die Akzentänderung bei "se lever" (lève) ist eine typische Rechtschreibregel bei -er-Verben mit e.'
  },

  // Section 10: Days of the week
  {
    id: 'days-of-week',
    title: 'Die Wochentage (Les jours de la semaine)',
    type: 'table',
    content: `
Die französischen Wochentage werden **klein geschrieben** (anders als im Deutschen)!

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| lundi | [lœ̃.di] | Montag |
| mardi | [maʁ.di] | Dienstag |
| mercredi | [mɛʁ.kʁə.di] | Mittwoch |
| jeudi | [ʒø.di] | Donnerstag |
| vendredi | [vɑ̃.dʁə.di] | Freitag |
| samedi | [sam.di] | Samstag |
| dimanche | [di.mɑ̃ʃ] | Sonntag |

**Wichtige Regeln:**
- Wochentage werden **klein** geschrieben.
- Mit Artikel "le" bedeutet es "jeden": **le lundi** = montags / jeden Montag.
- Ohne Artikel = ein bestimmter Tag: **lundi** = (am) Montag.
- Die Woche beginnt in Frankreich am **lundi** (Montag).
    `,
    germanExplanation: 'Wochentage immer klein schreiben! "le lundi" = montags (regelmäßig).'
  },

  // Section 11: Parts of the day
  {
    id: 'parts-of-day',
    title: 'Tageszeiten (Les moments de la journée)',
    type: 'table',
    content: `
| Französisch | Aussprache | Deutsch | Beispiel |
|-------------|------------|---------|----------|
| le matin | [lə ma.tɛ̃] | der Morgen | le matin = morgens |
| l'après-midi | [la.pʁɛ.mi.di] | der Nachmittag | l'après-midi = nachmittags |
| le soir | [lə swaʁ] | der Abend | le soir = abends |
| la nuit | [la nɥi] | die Nacht | la nuit = nachts |

**Verwendung:**
- "le matin" / "le soir" ohne Präposition bedeutet "morgens" / "abends" (regelmäßig).
- Beispiel: **Le matin, je me lève à sept heures.** = Morgens stehe ich um sieben Uhr auf.

**Tageszeit-Zusatz zur Uhrzeit:**
- du matin = morgens (vormittags), z.B. "huit heures du matin" = 8 Uhr morgens
- de l'après-midi = nachmittags, z.B. "trois heures de l'après-midi" = 15 Uhr
- du soir = abends, z.B. "neuf heures du soir" = 21 Uhr
    `,
    germanExplanation: 'Mit "du matin", "de l\'après-midi", "du soir" macht man die 12-Stunden-Uhrzeit eindeutig.'
  },

  // Section 12: Frequency adverbs
  {
    id: 'frequency-adverbs',
    title: 'Häufigkeitsadverbien',
    type: 'table',
    content: `
Mit diesen Adverbien sagst du, WIE OFT du etwas tust. Sie stehen meist NACH dem konjugierten Verb.

| Französisch | Aussprache | Deutsch | Beispiel |
|-------------|------------|---------|----------|
| toujours | [tu.ʒuʁ] | immer | Je me lève toujours tôt. (Ich stehe immer früh auf.) |
| souvent | [su.vɑ̃] | oft | Il se couche souvent tard. (Er geht oft spät ins Bett.) |
| parfois | [paʁ.fwa] | manchmal | Parfois, je me couche à minuit. (Manchmal gehe ich um Mitternacht ins Bett.) |
| jamais | [ʒa.mɛ] | nie | Je ne me lève jamais tard. (Ich stehe nie spät auf.) |

**WICHTIG bei "jamais":** Es braucht ein **"ne"** vor dem Verb (Verneinung)!
- Je **ne** mange **jamais** le matin. = Ich esse nie morgens.
- Die Struktur ist: ne + Verb + jamais.
    `,
    germanExplanation: '"jamais" (nie) funktioniert wie eine Verneinung und braucht "ne" vor dem Verb.'
  },

  // Section 13: Dialogue informal
  {
    id: 'dialogue-routine',
    title: 'Dialog: Tagesablauf (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Léa fragt Tom nach seinem Tagesablauf.

**Léa:** À quelle heure tu te lèves le matin?
**Tom:** Je me lève à sept heures. Et toi?
**Léa:** Moi, je me lève à six heures et demie. Je suis toujours fatiguée!
**Tom:** Et tu te couches à quelle heure?
**Léa:** Je me couche souvent à onze heures. Et toi?
**Tom:** Moi, je me couche tard, vers minuit.

---

**Beachte:**
- "À quelle heure...?" = Um wie viel Uhr...?
- "vers minuit" = gegen Mitternacht ("vers" = gegen, ungefähr)
- "tôt" = früh, "tard" = spät
- Die Reflexivpronomen "te" und "me" passen sich an die Person an.
    `
  },

  // Section 14: Dialogue at the station
  {
    id: 'dialogue-time',
    title: 'Dialog: Nach der Uhrzeit fragen',
    type: 'dialogue',
    content: `
**Situation:** Ein Reisender fragt am Bahnhof nach der Zeit.

**Le voyageur:** Pardon, quelle heure est-il, s'il vous plaît?
**La dame:** Il est trois heures et quart.
**Le voyageur:** Merci! Et le train pour Paris, c'est à quelle heure?
**La dame:** À seize heures trente.
**Le voyageur:** Donc, dans une heure et quart. Merci beaucoup!
**La dame:** De rien. Bonne journée!

---

**Beachte:**
- Im Alltag: "trois heures et quart" (3:15).
- Offiziell (Fahrplan): "seize heures trente" (16:30, 24-Stunden-Uhr).
- "dans une heure et quart" = in eineinviertel Stunden ("dans" = in, zeitlich)
    `
  },

  // Section 15: Building daily-routine sentences
  {
    id: 'routine-sentences',
    title: 'Sätze zum Tagesablauf bilden',
    type: 'example',
    content: `
So kombinierst du reflexive Verben, Uhrzeit, Tageszeit und Häufigkeit zu vollständigen Sätzen:

Struktur: (Tageszeit) + Pronomen + Reflexivpronomen + Verb + (Häufigkeit) + Uhrzeit
    `,
    examples: [
      { french: 'Le matin, je me lève à sept heures.', german: 'Morgens stehe ich um sieben Uhr auf.' },
      { french: 'Je me lave toujours le matin.', german: 'Ich wasche mich immer morgens.' },
      { french: 'Le soir, nous nous couchons à dix heures.', german: 'Abends gehen wir um zehn Uhr ins Bett.' },
      { french: 'Le dimanche, je me lève tard.', german: 'Sonntags stehe ich spät auf.', notes: '"le dimanche" = sonntags (regelmäßig)' },
      { french: 'Comment tu t\'appelles?', german: 'Wie heißt du?', notes: 's\'appeler ist auch reflexiv!' }
    ]
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Time expressions
  {
    id: 'lesson6-time-heure',
    french: 'heure',
    german: 'Stunde / Uhr',
    english: 'hour / o\'clock',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Il est une heure.',
      german: 'Es ist ein Uhr.'
    },
    notes: 'Aussprache: [œʁ]. Ab 2 Uhr Plural: "heures".',
    level: 'A1',
    tags: ['lesson6', 'time', 'essential']
  },
  {
    id: 'lesson6-time-quelle-heure',
    french: 'quelle heure est-il?',
    german: 'wie spät ist es?',
    english: 'what time is it?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Quelle heure est-il, s\'il vous plaît?',
      german: 'Wie spät ist es, bitte?'
    },
    notes: 'Feste Frage nach der Uhrzeit. Aussprache: [kɛl œʁ ɛ.til]',
    level: 'A1',
    tags: ['lesson6', 'time', 'question', 'essential']
  },
  {
    id: 'lesson6-time-il-est',
    french: 'il est',
    german: 'es ist (Uhrzeit)',
    english: 'it is (time)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il est deux heures.',
      german: 'Es ist zwei Uhr.'
    },
    notes: 'Antwort auf die Uhrzeit beginnt IMMER mit "Il est...".',
    level: 'A1',
    tags: ['lesson6', 'time', 'essential']
  },
  {
    id: 'lesson6-time-et-quart',
    french: 'et quart',
    german: 'Viertel nach',
    english: 'quarter past',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il est trois heures et quart.',
      german: 'Es ist Viertel nach drei.'
    },
    notes: 'Aussprache: [e kaʁ]. Bedeutet +15 Minuten.',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-time-et-demie',
    french: 'et demie',
    german: 'halb (nach)',
    english: 'half past',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il est quatre heures et demie.',
      german: 'Es ist halb fünf.'
    },
    notes: 'ACHTUNG: "quatre heures et demie" = 4:30 (= halb fünf im Deutschen)!',
    level: 'A1',
    tags: ['lesson6', 'time', 'false-friend-risk']
  },
  {
    id: 'lesson6-time-moins-le-quart',
    french: 'moins le quart',
    german: 'Viertel vor',
    english: 'quarter to',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il est six heures moins le quart.',
      german: 'Es ist Viertel vor sechs.'
    },
    notes: 'Aussprache: [mwɛ̃ lə kaʁ]. Bedeutet -15 Minuten zur vollen Stunde.',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-time-moins',
    french: 'moins',
    german: 'vor / weniger (Uhrzeit)',
    english: 'to / minus',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il est huit heures moins dix.',
      german: 'Es ist zehn vor acht.'
    },
    notes: 'Ab der halben Stunde rechnet man rückwärts mit "moins".',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-time-midi',
    french: 'midi',
    german: 'Mittag (12 Uhr)',
    english: 'noon',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est midi et demi.',
      german: 'Es ist halb eins (12:30).'
    },
    notes: 'Maskulin! Daher "midi et demi" OHNE -e.',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-time-minuit',
    french: 'minuit',
    german: 'Mitternacht',
    english: 'midnight',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il est minuit.',
      german: 'Es ist Mitternacht.'
    },
    notes: 'Maskulin! "minuit et demi" OHNE -e. Aussprache: [mi.nɥi]',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-time-tot',
    french: 'tôt',
    german: 'früh',
    english: 'early',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je me lève tôt.',
      german: 'Ich stehe früh auf.'
    },
    notes: 'Aussprache: [to]. Gegenteil: tard.',
    level: 'A1',
    tags: ['lesson6', 'time', 'adverb']
  },
  {
    id: 'lesson6-time-tard',
    french: 'tard',
    german: 'spät',
    english: 'late',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il se couche tard.',
      german: 'Er geht spät ins Bett.'
    },
    notes: 'Aussprache: [taʁ]. Das -d ist stumm. Gegenteil: tôt.',
    level: 'A1',
    tags: ['lesson6', 'time', 'adverb']
  },
  {
    id: 'lesson6-time-vers',
    french: 'vers',
    german: 'gegen / ungefähr (Zeit)',
    english: 'around / about',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Je me couche vers minuit.',
      german: 'Ich gehe gegen Mitternacht ins Bett.'
    },
    notes: 'Drückt eine ungefähre Uhrzeit aus.',
    level: 'A1',
    tags: ['lesson6', 'time', 'preposition']
  },

  // Reflexive verbs
  {
    id: 'lesson6-verb-se-lever',
    french: 'se lever',
    german: 'aufstehen',
    english: 'to get up',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je me lève à sept heures.',
      german: 'Ich stehe um sieben Uhr auf.'
    },
    notes: 'Reflexiv. ACHTUNG: e wird zu è (je me lève), außer bei nous/vous.',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'routine', 'essential']
  },
  {
    id: 'lesson6-verb-se-coucher',
    french: 'se coucher',
    german: 'ins Bett gehen / sich hinlegen',
    english: 'to go to bed',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il se couche à onze heures.',
      german: 'Er geht um elf Uhr ins Bett.'
    },
    notes: 'Reflexiv, regelmäßig (-er). Aussprache: [sə ku.ʃe]',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'routine', 'essential']
  },
  {
    id: 'lesson6-verb-se-laver',
    french: 'se laver',
    german: 'sich waschen',
    english: 'to wash oneself',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous nous lavons le matin.',
      german: 'Wir waschen uns morgens.'
    },
    notes: 'Reflexiv, regelmäßig (-er).',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'routine']
  },
  {
    id: 'lesson6-verb-sappeler',
    french: 's\'appeler',
    german: 'heißen',
    english: 'to be called',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je m\'appelle Marie.',
      german: 'Ich heiße Marie.'
    },
    notes: 'Reflexiv. Wörtlich "sich rufen". Doppel-l bei je/tu/il/ils (appelle).',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'essential']
  },
  {
    id: 'lesson6-verb-se-reveiller',
    french: 'se réveiller',
    german: 'aufwachen',
    english: 'to wake up',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je me réveille à six heures.',
      german: 'Ich wache um sechs Uhr auf.'
    },
    notes: 'Reflexiv, regelmäßig. Unterschied zu se lever: aufwachen vs. aufstehen.',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'routine']
  },
  {
    id: 'lesson6-verb-shabiller',
    french: 's\'habiller',
    german: 'sich anziehen',
    english: 'to get dressed',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle s\'habille vite.',
      german: 'Sie zieht sich schnell an.'
    },
    notes: 'Reflexiv. "h" ist stumm, daher s\'habille.',
    level: 'A1',
    tags: ['lesson6', 'verb', 'reflexive', 'routine']
  },

  // Reflexive pronouns
  {
    id: 'lesson6-reflpron-me',
    french: 'me',
    german: 'mich / mir (reflexiv)',
    english: 'myself',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Je me lave.',
      german: 'Ich wasche mich.'
    },
    notes: 'Reflexivpronomen für "je". Vor Vokal: m\' (je m\'appelle).',
    level: 'A1',
    tags: ['lesson6', 'pronoun', 'reflexive']
  },
  {
    id: 'lesson6-reflpron-te',
    french: 'te',
    german: 'dich / dir (reflexiv)',
    english: 'yourself',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Tu te lèves tôt.',
      german: 'Du stehst früh auf.'
    },
    notes: 'Reflexivpronomen für "tu". Vor Vokal: t\' (tu t\'appelles).',
    level: 'A1',
    tags: ['lesson6', 'pronoun', 'reflexive']
  },
  {
    id: 'lesson6-reflpron-se',
    french: 'se',
    german: 'sich (reflexiv)',
    english: 'himself/herself/themselves',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Il se couche tard.',
      german: 'Er geht spät ins Bett.'
    },
    notes: 'Reflexivpronomen für il/elle und ils/elles. Vor Vokal: s\'.',
    level: 'A1',
    tags: ['lesson6', 'pronoun', 'reflexive']
  },

  // Days of the week
  {
    id: 'lesson6-day-lundi',
    french: 'lundi',
    german: 'Montag',
    english: 'Monday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le lundi, je travaille.',
      german: 'Montags arbeite ich.'
    },
    notes: 'Klein schreiben! "le lundi" = montags. Aussprache: [lœ̃.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-mardi',
    french: 'mardi',
    german: 'Dienstag',
    english: 'Tuesday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mardi, j\'ai un cours.',
      german: 'Am Dienstag habe ich einen Kurs.'
    },
    notes: 'Klein schreiben! Aussprache: [maʁ.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-mercredi',
    french: 'mercredi',
    german: 'Mittwoch',
    english: 'Wednesday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mercredi, je me lève tard.',
      german: 'Am Mittwoch stehe ich spät auf.'
    },
    notes: 'Klein schreiben! Aussprache: [mɛʁ.kʁə.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-jeudi',
    french: 'jeudi',
    german: 'Donnerstag',
    english: 'Thursday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Jeudi, c\'est mon jour préféré.',
      german: 'Donnerstag ist mein Lieblingstag.'
    },
    notes: 'Klein schreiben! Aussprache: [ʒø.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-vendredi',
    french: 'vendredi',
    german: 'Freitag',
    english: 'Friday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Vendredi soir, je sors.',
      german: 'Freitagabend gehe ich aus.'
    },
    notes: 'Klein schreiben! Aussprache: [vɑ̃.dʁə.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-samedi',
    french: 'samedi',
    german: 'Samstag',
    english: 'Saturday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le samedi, je ne travaille pas.',
      german: 'Samstags arbeite ich nicht.'
    },
    notes: 'Klein schreiben! Aussprache: [sam.di]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-day-dimanche',
    french: 'dimanche',
    german: 'Sonntag',
    english: 'Sunday',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le dimanche, je me repose.',
      german: 'Sonntags ruhe ich mich aus.'
    },
    notes: 'Klein schreiben! Aussprache: [di.mɑ̃ʃ]',
    level: 'A1',
    tags: ['lesson6', 'day', 'essential']
  },
  {
    id: 'lesson6-noun-semaine',
    french: 'semaine',
    german: 'Woche',
    english: 'week',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'la semaine prochaine',
      german: 'nächste Woche'
    },
    notes: 'Aussprache: [sə.mɛn]',
    level: 'A1',
    tags: ['lesson6', 'time']
  },
  {
    id: 'lesson6-noun-jour',
    french: 'jour',
    german: 'Tag',
    english: 'day',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Quel jour sommes-nous?',
      german: 'Welcher Tag ist heute?'
    },
    notes: 'Aussprache: [ʒuʁ]',
    level: 'A1',
    tags: ['lesson6', 'time']
  },

  // Parts of the day
  {
    id: 'lesson6-daypart-matin',
    french: 'le matin',
    german: 'der Morgen / morgens',
    english: 'morning',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le matin, je bois un café.',
      german: 'Morgens trinke ich einen Kaffee.'
    },
    notes: 'Aussprache: [ma.tɛ̃]. "le matin" = morgens.',
    level: 'A1',
    tags: ['lesson6', 'time', 'daypart', 'essential']
  },
  {
    id: 'lesson6-daypart-apresmidi',
    french: 'l\'après-midi',
    german: 'der Nachmittag / nachmittags',
    english: 'afternoon',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'L\'après-midi, je travaille.',
      german: 'Nachmittags arbeite ich.'
    },
    notes: 'Aussprache: [a.pʁɛ.mi.di].',
    level: 'A1',
    tags: ['lesson6', 'time', 'daypart', 'essential']
  },
  {
    id: 'lesson6-daypart-soir',
    french: 'le soir',
    german: 'der Abend / abends',
    english: 'evening',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le soir, je regarde la télé.',
      german: 'Abends schaue ich fern.'
    },
    notes: 'Aussprache: [swaʁ]. "le soir" = abends.',
    level: 'A1',
    tags: ['lesson6', 'time', 'daypart', 'essential']
  },
  {
    id: 'lesson6-daypart-nuit',
    french: 'la nuit',
    german: 'die Nacht / nachts',
    english: 'night',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La nuit, je dors.',
      german: 'Nachts schlafe ich.'
    },
    notes: 'Aussprache: [nɥi]. Feminin!',
    level: 'A1',
    tags: ['lesson6', 'time', 'daypart', 'essential']
  },

  // Frequency adverbs
  {
    id: 'lesson6-freq-toujours',
    french: 'toujours',
    german: 'immer',
    english: 'always',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je me lève toujours tôt.',
      german: 'Ich stehe immer früh auf.'
    },
    notes: 'Aussprache: [tu.ʒuʁ]. Steht nach dem Verb.',
    level: 'A1',
    tags: ['lesson6', 'adverb', 'frequency', 'essential']
  },
  {
    id: 'lesson6-freq-souvent',
    french: 'souvent',
    german: 'oft',
    english: 'often',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il se couche souvent tard.',
      german: 'Er geht oft spät ins Bett.'
    },
    notes: 'Aussprache: [su.vɑ̃]. Nasalvokal am Ende.',
    level: 'A1',
    tags: ['lesson6', 'adverb', 'frequency', 'essential']
  },
  {
    id: 'lesson6-freq-parfois',
    french: 'parfois',
    german: 'manchmal',
    english: 'sometimes',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Parfois, je me lève à midi.',
      german: 'Manchmal stehe ich um zwölf Uhr auf.'
    },
    notes: 'Aussprache: [paʁ.fwa]. Kann auch am Satzanfang stehen.',
    level: 'A1',
    tags: ['lesson6', 'adverb', 'frequency']
  },
  {
    id: 'lesson6-freq-jamais',
    french: 'jamais',
    german: 'nie',
    english: 'never',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je ne me lève jamais tard.',
      german: 'Ich stehe nie spät auf.'
    },
    notes: 'Braucht "ne" vor dem Verb: ne ... jamais. Aussprache: [ʒa.mɛ]',
    level: 'A1',
    tags: ['lesson6', 'adverb', 'frequency', 'negation']
  },

  // Useful question / connectors
  {
    id: 'lesson6-phrase-a-quelle-heure',
    french: 'à quelle heure?',
    german: 'um wie viel Uhr?',
    english: 'at what time?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'À quelle heure tu te lèves?',
      german: 'Um wie viel Uhr stehst du auf?'
    },
    notes: 'Frage nach dem Zeitpunkt einer Handlung.',
    level: 'A1',
    tags: ['lesson6', 'time', 'question', 'essential']
  },
  {
    id: 'lesson6-prep-a',
    french: 'à',
    german: 'um (Uhrzeit)',
    english: 'at',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Je me couche à dix heures.',
      german: 'Ich gehe um zehn Uhr ins Bett.'
    },
    notes: 'Vor einer Uhrzeit: à + heure(s).',
    level: 'A1',
    tags: ['lesson6', 'time', 'preposition']
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
    question: 'Wie fragt man "Wie spät ist es?" auf Französisch?',
    options: ['Quelle heure est-il?', 'Comment ça va?', 'Où est-il?', 'Qui est-il?'],
    correctAnswer: 'Quelle heure est-il?',
    explanation: '"Quelle heure est-il?" ist die feste Frage nach der Uhrzeit.',
    hints: [
      'Es geht um die Uhrzeit ("heure").',
      'Es ist "Quelle heure est-il?"'
    ],
    tags: ['time', 'question']
  },
  {
    id: 'guided-2',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Es ist zwei Uhr: Il est deux ___.',
    correctAnswer: ['heures'],
    explanation: 'Ab 2 Uhr benutzt man den Plural "heures".',
    hints: [
      'Es bedeutet "Stunden/Uhr".',
      'Im Plural: "heures".'
    ],
    tags: ['time', 'plural']
  },
  {
    id: 'guided-3',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "se lever"?',
    options: ['aufstehen', 'ins Bett gehen', 'sich waschen', 'heißen'],
    correctAnswer: 'aufstehen',
    explanation: '"se lever" ist ein reflexives Verb und bedeutet "aufstehen".',
    hints: [
      'Man macht es morgens.',
      'Es bedeutet "aufstehen".'
    ],
    tags: ['reflexive', 'vocabulary']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Setze das Reflexivpronomen ein: Je ___ lave. (Ich wasche mich.)',
    correctAnswer: ['me'],
    explanation: 'Das Reflexivpronomen für "je" ist "me".',
    hints: [
      'Es passt zu "je".',
      'Es ist "me".'
    ],
    tags: ['reflexive', 'pronouns']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: Montag',
    correctAnswer: ['lundi'],
    explanation: '"lundi" bedeutet "Montag" - klein geschrieben!',
    hints: [
      'Es beginnt mit "l".',
      'Es ist "lundi".'
    ],
    tags: ['days', 'vocabulary']
  },
  {
    id: 'guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "le matin"?',
    options: ['der Morgen', 'der Abend', 'die Nacht', 'der Nachmittag'],
    correctAnswer: 'der Morgen',
    explanation: '"le matin" bedeutet "der Morgen" bzw. "morgens".',
    hints: [
      'Es ist die erste Tageszeit.',
      'Es ist "der Morgen".'
    ],
    tags: ['daypart', 'vocabulary']
  },
  {
    id: 'guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "toujours"?',
    options: ['immer', 'nie', 'manchmal', 'oft'],
    correctAnswer: 'immer',
    explanation: '"toujours" bedeutet "immer".',
    hints: [
      'Es ist die höchste Häufigkeit.',
      'Es ist "immer".'
    ],
    tags: ['frequency', 'vocabulary']
  },
  {
    id: 'guided-8',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Es ist Mittag: Il est ___.',
    correctAnswer: ['midi'],
    explanation: '"midi" bedeutet 12 Uhr mittags.',
    hints: [
      'Es ist 12:00 Uhr.',
      'Es ist "midi".'
    ],
    tags: ['time', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Tu ___ lèves à sept heures. (Du stehst um sieben Uhr auf.)',
    correctAnswer: ['te'],
    explanation: 'Das Reflexivpronomen für "tu" ist "te".',
    hints: [
      'Es passt zu "tu".',
      'Es ist "te".'
    ],
    tags: ['reflexive', 'pronouns', 'conjugation']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ couchons à dix heures. (Wir gehen um zehn Uhr ins Bett.)',
    correctAnswer: ['nous'],
    explanation: 'Bei "nous" ist das Reflexivpronomen identisch mit dem Pronomen: "nous nous couchons".',
    hints: [
      'Das Reflexivpronomen ist hier gleich dem Subjektpronomen.',
      'Es ist "nous".'
    ],
    tags: ['reflexive', 'pronouns', 'conjugation']
  },
  {
    id: 'independent-3',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Uhrzeit ist "Il est quatre heures et demie"?',
    options: ['4:30', '3:30', '4:15', '4:45'],
    correctAnswer: '4:30',
    explanation: 'ACHTUNG: "et demie" bezieht sich auf die volle Stunde davor. "quatre heures et demie" = 4:30 (= halb fünf im Deutschen).',
    hints: [
      '"et demie" bedeutet +30 Minuten.',
      'Es ist 4:30 (NICHT halb vier!).'
    ],
    tags: ['time', 'false-friend-risk']
  },
  {
    id: 'independent-4',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie sagt man "Es ist Viertel vor sechs"?',
    options: [
      'Il est six heures moins le quart.',
      'Il est six heures et quart.',
      'Il est cinq heures et demie.',
      'Il est six heures et demie.'
    ],
    correctAnswer: 'Il est six heures moins le quart.',
    explanation: '"Viertel vor sechs" = "six heures moins le quart" (sechs Uhr minus ein Viertel).',
    hints: [
      '"vor" wird mit "moins" ausgedrückt.',
      'Es ist "six heures moins le quart".'
    ],
    tags: ['time']
  },
  {
    id: 'independent-5',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Il ___ lève à six heures. (Er steht um sechs Uhr auf.)',
    correctAnswer: ['se'],
    explanation: 'Das Reflexivpronomen für "il/elle" ist "se". Beachte: "il se lève" mit accent grave.',
    hints: [
      'Es passt zu "il".',
      'Es ist "se".'
    ],
    tags: ['reflexive', 'pronouns', 'conjugation']
  },
  {
    id: 'independent-6',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich heiße Marie.',
    correctAnswer: ['Je m\'appelle Marie.', 'Je m\'appelle Marie', 'je m\'appelle Marie'],
    explanation: '"s\'appeler" ist reflexiv: "je m\'appelle" (me wird vor Vokal zu m\').',
    hints: [
      'Benutze das reflexive Verb "s\'appeler".',
      '"me" wird vor Vokal zu "m\'".',
      'Es ist "Je m\'appelle Marie."'
    ],
    tags: ['reflexive', 'translation']
  },
  {
    id: 'independent-7',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Le soir, je me couche à onze heures.',
    correctAnswer: [
      'Abends gehe ich um elf Uhr ins Bett.',
      'Abends gehe ich um 11 Uhr ins Bett.',
      'Am Abend gehe ich um elf Uhr ins Bett.'
    ],
    explanation: '"le soir" = abends, "je me couche" = ich gehe ins Bett, "à onze heures" = um elf Uhr.',
    hints: [
      '"le soir" bedeutet "abends".',
      '"se coucher" bedeutet "ins Bett gehen".'
    ],
    tags: ['reflexive', 'time', 'translation']
  },
  {
    id: 'independent-8',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verneine mit "nie": Je ___ me lève ___ tard. (Ich stehe nie spät auf.)',
    correctAnswer: ['ne, jamais', 'ne jamais'],
    explanation: '"jamais" (nie) braucht "ne" vor dem Verb: ne ... jamais.',
    hints: [
      '"jamais" braucht ein zweites Wort vor dem Verb.',
      'Die Struktur ist "ne ... jamais".'
    ],
    tags: ['frequency', 'negation']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was bedeutet "Le samedi, je ne travaille pas"?',
    options: [
      'Samstags arbeite ich nicht.',
      'Am Samstag arbeite ich.',
      'Sonntags arbeite ich nicht.',
      'Samstags stehe ich früh auf.'
    ],
    correctAnswer: 'Samstags arbeite ich nicht.',
    explanation: '"le samedi" mit Artikel bedeutet "samstags / jeden Samstag". "ne ... pas" verneint.',
    hints: [
      '"le samedi" mit Artikel = regelmäßig.',
      'Es bedeutet "Samstags arbeite ich nicht."'
    ],
    tags: ['days', 'translation']
  },
  {
    id: 'independent-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Reihenfolge der Wochentage ist richtig?',
    options: [
      'lundi, mardi, mercredi, jeudi',
      'lundi, mercredi, mardi, jeudi',
      'mardi, lundi, jeudi, mercredi',
      'jeudi, mardi, mercredi, lundi'
    ],
    correctAnswer: 'lundi, mardi, mercredi, jeudi',
    explanation: 'Die Woche beginnt in Frankreich mit lundi (Montag): lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.',
    hints: [
      'Die Woche beginnt mit Montag (lundi).',
      'Die richtige Reihenfolge ist "lundi, mardi, mercredi, jeudi".'
    ],
    tags: ['days']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Morgens stehe ich um sieben Uhr auf.',
    correctAnswer: [
      'Le matin, je me lève à sept heures.',
      'Le matin je me lève à sept heures.',
      'Le matin, je me lève à sept heures',
      'Je me lève à sept heures le matin.'
    ],
    explanation: '"Le matin" = morgens, "je me lève" (mit accent grave) = ich stehe auf, "à sept heures" = um sieben Uhr.',
    tags: ['reflexive', 'time', 'daypart', 'translation']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige: — À quelle heure tu ___ couches? — Je ___ couche à minuit.',
    correctAnswer: ['te, me', 'te me'],
    explanation: 'Reflexivpronomen passen sich an: "tu te couches" und "je me couche".',
    tags: ['reflexive', 'pronouns', 'dialogue']
  },
  {
    id: 'assess-3',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Es ist 14:45 (offiziell). Wie lautet die ALLTAGSANGABE?',
    options: [
      'Il est trois heures moins le quart.',
      'Il est deux heures et quart.',
      'Il est trois heures et quart.',
      'Il est quatorze heures quarante-cinq.'
    ],
    correctAnswer: 'Il est trois heures moins le quart.',
    explanation: '14:45 = Viertel vor drei (15:00 minus 15 Min). Im Alltag: "trois heures moins le quart". Die letzte Option ist die offizielle 24-Stunden-Form.',
    tags: ['time']
  },
  {
    id: 'assess-4',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Er geht oft spät ins Bett.',
    correctAnswer: [
      'Il se couche souvent tard.',
      'Il se couche souvent tard',
      'Il se couche tard souvent.'
    ],
    explanation: '"Il se couche" = er geht ins Bett, "souvent" = oft (nach dem Verb), "tard" = spät.',
    tags: ['reflexive', 'frequency', 'translation']
  },
  {
    id: 'assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Setze die richtige Verbform ein: Elle ___ (se lever) à six heures et demie. (Sie steht um halb sieben auf.)',
    correctAnswer: ['se lève', 'se leve'],
    explanation: '3. Person Singular von "se lever": "elle se lève" (e wird zu è!).',
    tags: ['reflexive', 'conjugation', 'time']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Le dimanche, je ne me lève jamais tôt.',
    correctAnswer: [
      'Sonntags stehe ich nie früh auf.',
      'Am Sonntag stehe ich nie früh auf.',
      'Sonntags stehe ich niemals früh auf.'
    ],
    explanation: '"le dimanche" = sonntags, "ne ... jamais" = nie, "je me lève" = ich stehe auf, "tôt" = früh.',
    tags: ['reflexive', 'frequency', 'days', 'negation', 'translation']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson06: Lesson = {
  meta: {
    id: 'lesson-06',
    number: 6,
    title: 'Le Temps',
    titleGerman: 'Die Zeit',
    objectives: [
      'Die Uhrzeit erfragen und angeben können ("Quelle heure est-il?", "Il est...")',
      'Viertel- und halbe Stunden korrekt ausdrücken (et quart, et demie, moins le quart)',
      'Reflexive Verben mit den richtigen Reflexivpronomen konjugieren',
      'Die sieben Wochentage und die Tageszeiten kennen',
      'Den eigenen Tagesablauf auf Französisch beschreiben',
      'Häufigkeitsadverbien (toujours, souvent, parfois, jamais) verwenden'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05'],
    tags: ['time', 'reflexive-verbs', 'days', 'daily-routine', 'frequency', 'pronouns']
  },

  introduction: {
    objectives: [
      'Verstehen, wie man im Französischen die Uhrzeit ausdrückt',
      'Reflexive Verben und ihre Pronomen kennenlernen',
      'Den Tagesablauf mit Verben, Uhrzeit und Tageszeit beschreiben',
      'Sagen können, wie oft man etwas tut'
    ],
    motivation: `
In dieser Lektion lernst du, über die Zeit und deinen Alltag zu sprechen - ein Thema, das du jeden Tag brauchst!
Du kannst dann nach der Uhrzeit fragen, einen Termin vereinbaren und beschreiben, wann du aufstehst, dich
wäschst und ins Bett gehst.

Die reflexiven Verben (wie "se lever" - aufstehen) sind dafür der Schlüssel. Sie funktionieren ähnlich wie
das deutsche "sich waschen" - das kennst du also schon!
    `,
    culturalNote: `
**Die 24-Stunden-Uhr im Alltag**

In Frankreich ist die 24-Stunden-Uhr im offiziellen Leben allgegenwärtig: Fahrpläne, Fernsehprogramme,
Öffnungszeiten und Termine werden fast immer in der 24-Stunden-Form angegeben ("le train de 19h45").
Im persönlichen Gespräch nutzt man aber die 12-Stunden-Form mit "et quart", "et demie" und "moins le quart".

**Achtung, Übersetzungsfalle!**

"Quatre heures et demie" bedeutet 4:30 - also "halb fünf" im Deutschen! Die Franzosen beziehen "et demie"
immer auf die VERGANGENE volle Stunde, nicht auf die kommende. Das ist eine der häufigsten Fehlerquellen
für deutsche Lernende.
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
      'Du kannst nach der Uhrzeit fragen ("Quelle heure est-il?") und sie angeben ("Il est...")',
      'Du beherrschst "et quart", "et demie" und "moins le quart" - und kennst die Falle mit "et demie" (= 4:30)',
      'Du kennst die Reflexivpronomen (me, te, se, nous, vous, se) und ihre Verwendung',
      'Du kannst reflexive Verben wie se lever, se coucher, se laver und s\'appeler konjugieren',
      'Du kennst die sieben Wochentage und die vier Tageszeiten',
      'Du kannst deinen Tagesablauf beschreiben und mit Uhrzeiten verbinden',
      'Du kannst mit toujours, souvent, parfois und jamais ausdrücken, wie oft du etwas tust'
    ],
    nextLesson: 'lesson-07'
  }
};
