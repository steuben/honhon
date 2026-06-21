import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 09: La Météo - Das Wetter
 * Weather and seasons in French for German speakers
 *
 * Level: A1
 * Duration: ~90 minutes
 *
 * Topics:
 * - Impersonal "il" for weather (Il fait beau, Il pleut, Il neige...)
 * - The verb "faire" (to do/make) conjugation
 * - Seasons and months
 * - Preposition "en" with seasons and months
 * - Temperature and sensations (avoir froid, avoir chaud)
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction to weather
  {
    id: 'meteo-intro',
    title: 'Über das Wetter sprechen',
    type: 'explanation',
    content: `
Das Wetter (la météo) ist ein beliebtes Gesprächsthema - in Frankreich genauso wie in Deutschland!

**Die wichtigste Frage:**
- **Quel temps fait-il?** [kɛl tɑ̃ fɛ.til] - Wie ist das Wetter? (wörtlich: "Welches Wetter macht es?")

Beachte: Im Französischen "macht" man das Wetter mit dem Verb **faire** (machen).
Man sagt also nicht "es ist schön", sondern wörtlich "es macht schön":
- **Il fait beau.** - Das Wetter ist schön.

**Das Wort "temps" hat zwei Bedeutungen:**
- das Wetter (le temps)
- die Zeit (le temps)

Aus dem Zusammenhang erkennst du, was gemeint ist!
    `,
    germanExplanation: 'Im Französischen "macht" man das Wetter mit dem Verb faire - eine wichtige Besonderheit!',
    examples: [
      { french: 'Quel temps fait-il?', german: 'Wie ist das Wetter?', notes: 'Aussprache: [kɛl tɑ̃ fɛ.til]' },
      { french: 'Il fait beau.', german: 'Das Wetter ist schön.', notes: 'Wörtlich: "Es macht schön."' }
    ]
  },

  // Section 2: Verb faire
  {
    id: 'verb-faire',
    title: 'Das Verb "faire" (machen/tun)',
    type: 'table',
    content: `
"Faire" bedeutet "machen" oder "tun" und ist eines der wichtigsten Verben im Französischen.
Es ist UNREGELMÄSSIG - die Formen musst du auswendig lernen.

## Konjugation im Präsens (Présent)

| Pronomen | faire | Aussprache | Deutsch | Beispiel |
|----------|-------|------------|---------|----------|
| je | fais | [fɛ] | ich mache | Je fais du sport. (Ich mache Sport.) |
| tu | fais | [fɛ] | du machst | Tu fais la cuisine. (Du kochst.) |
| il/elle | fait | [fɛ] | er/sie macht | Il fait beau. (Das Wetter ist schön.) |
| nous | faisons | [fə.zɔ̃] | wir machen | Nous faisons un gâteau. (Wir backen einen Kuchen.) |
| vous | faites | [fɛt] | ihr macht / Sie machen | Vous faites du vélo. (Ihr fahrt Rad.) |
| ils/elles | font | [fɔ̃] | sie machen | Ils font leurs devoirs. (Sie machen ihre Hausaufgaben.) |

**ACHTUNG - zwei Stolperfallen:**
- **nous faisons** wird [fə.zɔ̃] ausgesprochen (NICHT [fɛ.zɔ̃])! Das "ai" klingt hier wie ein stummes "e".
- **vous faites** ist [fɛt] - eine der wenigen "vous"-Formen ohne "-ez"!
    `,
    germanExplanation: 'faire ist ein Schlüsselverb für das Wetter UND für viele Aktivitäten.'
  },

  // Section 3: Impersonal il
  {
    id: 'impersonal-il',
    title: 'Das unpersönliche "il"',
    type: 'explanation',
    content: `
Beim Wetter benutzt man im Französischen immer das unpersönliche **"il"** - genau wie das deutsche "es".

Dieses "il" bezeichnet KEINE Person und KEIN Ding. Es ist nur ein grammatisches Subjekt,
das man braucht, weil französische Sätze immer ein Subjekt haben müssen.

**Vergleich Deutsch - Französisch:**
- Es regnet. → **Il pleut.**
- Es schneit. → **Il neige.**
- Es ist kalt. → **Il fait froid.**

Du übersetzt das deutsche "es" beim Wetter also immer mit **"il"** (nicht mit "elle"!).

**Drei Konstruktionen mit unpersönlichem "il":**
1. **Il fait + Adjektiv:** Il fait beau, Il fait froid, Il fait chaud
2. **Il + Verb:** Il pleut (es regnet), Il neige (es schneit)
3. **Il y a + Nomen:** Il y a du vent (es ist windig), Il y a du soleil (es ist sonnig)
    `,
    germanExplanation: 'Das unpersönliche "il" entspricht dem deutschen "es" beim Wetter - immer "il", nie "elle"!'
  },

  // Section 4: Il fait expressions
  {
    id: 'il-fait',
    title: '"Il fait..." - Wetter mit faire beschreiben',
    type: 'table',
    content: `
Die häufigsten Wetterbeschreibungen werden mit **"Il fait + Adjektiv"** gebildet.

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| Il fait beau. | [il fɛ bo] | Das Wetter ist schön. |
| Il fait mauvais. | [il fɛ mo.vɛ] | Das Wetter ist schlecht. |
| Il fait chaud. | [il fɛ ʃo] | Es ist warm/heiß. |
| Il fait froid. | [il fɛ fʁwa] | Es ist kalt. |
| Il fait frais. | [il fɛ fʁɛ] | Es ist frisch/kühl. |
| Il fait doux. | [il fɛ du] | Es ist mild. |
| Il fait gris. | [il fɛ ɡʁi] | Es ist grau/trüb. |
| Il fait soleil. | [il fɛ sɔ.lɛj] | Es ist sonnig. |

**Merke:** Nach "Il fait" steht ein Adjektiv (beau, froid, chaud...) ohne Artikel.
    `
  },

  // Section 5: Il + verb / il y a
  {
    id: 'il-pleut-neige',
    title: '"Il pleut", "Il neige" und "Il y a du..."',
    type: 'table',
    content: `
Manche Wettererscheinungen haben ein eigenes Verb, andere bildet man mit "Il y a du/de la".

## Eigene Wetterverben

| Französisch | Aussprache | Deutsch | Infinitiv |
|-------------|------------|---------|-----------|
| Il pleut. | [il plø] | Es regnet. | pleuvoir (regnen) |
| Il neige. | [il nɛʒ] | Es schneit. | neiger (schneien) |
| Il gèle. | [il ʒɛl] | Es friert. | geler (frieren) |

## Mit "Il y a + Teilungsartikel"

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| Il y a du vent. | [il.j‿a dy vɑ̃] | Es ist windig. (Es gibt Wind.) |
| Il y a du soleil. | [il.j‿a dy sɔ.lɛj] | Es ist sonnig. (Es gibt Sonne.) |
| Il y a du brouillard. | [il.j‿a dy bʁu.jaʁ] | Es ist neblig. (Es gibt Nebel.) |
| Il y a des nuages. | [il.j‿a de nɥaʒ] | Es ist bewölkt. (Es gibt Wolken.) |
| Il y a un orage. | [il.j‿a œ̃.n‿ɔ.ʁaʒ] | Es gibt ein Gewitter. |

**"Il y a"** bedeutet "es gibt" und ist eine der nützlichsten Wendungen im Französischen!
    `,
    germanExplanation: '"Il pleut" und "Il neige" haben eigene Verben; für Wind, Sonne und Nebel benutzt man "Il y a du...".'
  },

  // Section 6: Comparison es vs il
  {
    id: 'comparison-es-il',
    title: 'Deutsches "es" vs. französisches "il"',
    type: 'comparison',
    content: `
Im Deutschen sagst du beim Wetter immer "es". Im Französischen ist es genau gleich -
nur das Wort ist anders: **"il"**.

**Deutsch → Französisch:**

| Deutsch | Französisch |
|---------|-------------|
| Es ist schön. | Il fait beau. |
| Es ist kalt. | Il fait froid. |
| Es regnet. | Il pleut. |
| Es schneit. | Il neige. |
| Es ist windig. | Il y a du vent. |

**WICHTIG:** Verwechsle das unpersönliche "il" (es) NICHT mit dem persönlichen "il" (er)!
- **Il fait froid.** = Es ist kalt. (unpersönlich - Wetter)
- **Il est grand.** = Er ist groß. (persönlich - eine Person)

Der Zusammenhang macht klar, welches "il" gemeint ist.
    `
  },

  // Section 7: Seasons
  {
    id: 'seasons',
    title: 'Die Jahreszeiten (Les saisons)',
    type: 'table',
    content: `
Das Jahr hat vier Jahreszeiten (quatre saisons). Achte auf das grammatische Geschlecht!

| Französisch | Aussprache | Deutsch | Geschlecht |
|-------------|------------|---------|------------|
| le printemps | [lə pʁɛ̃.tɑ̃] | der Frühling | maskulin |
| l'été | [le.te] | der Sommer | maskulin (l'été = le été) |
| l'automne | [lo.tɔn] | der Herbst | maskulin (l'automne = le automne) |
| l'hiver | [li.vɛʁ] | der Winter | maskulin (l'hiver = le hiver) |

**Gut zu wissen:** Alle vier Jahreszeiten sind im Französischen MASKULIN!
Im Deutschen sind sie auch alle maskulin (der Frühling, der Sommer...) - praktisch zu merken.

Das "h" in "hiver" ist stumm, deshalb wird "le" zu "l'".
    `,
    germanExplanation: 'Alle vier Jahreszeiten sind im Französischen maskulin - genau wie im Deutschen.'
  },

  // Section 8: Preposition en with seasons
  {
    id: 'en-saisons',
    title: 'Die Präposition "en" mit Jahreszeiten',
    type: 'explanation',
    content: `
Um zu sagen "im Frühling", "im Sommer" usw., benutzt man die Präposition **"en"**:

- **en été** - im Sommer
- **en automne** - im Herbst
- **en hiver** - im Winter

**ACHTUNG - die wichtigste Ausnahme:**
Beim Frühling sagt man NICHT "en printemps", sondern **"au printemps"**!

- **au printemps** - im Frühling ✅ (NICHT "en printemps" ❌)
- **en été** - im Sommer ✅
- **en automne** - im Herbst ✅
- **en hiver** - im Winter ✅

**Merkhilfe:** Drei mal "en" und EINMAL "au" (beim Frühling). Diese kleine Ausnahme musst du dir merken!
    `,
    germanExplanation: 'Drei Jahreszeiten mit "en", aber der Frühling mit "au printemps" - die wichtigste Ausnahme!',
    examples: [
      { french: 'En été, il fait chaud.', german: 'Im Sommer ist es warm.' },
      { french: 'Au printemps, il pleut souvent.', german: 'Im Frühling regnet es oft.' },
      { french: 'En hiver, il neige.', german: 'Im Winter schneit es.' }
    ]
  },

  // Section 9: Months
  {
    id: 'months',
    title: 'Die Monate (Les mois)',
    type: 'table',
    content: `
Die Monatsnamen ähneln dem Deutschen sehr! Sie werden KLEIN geschrieben.

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| janvier | [ʒɑ̃.vje] | Januar |
| février | [fev.ʁi.je] | Februar |
| mars | [maʁs] | März |
| avril | [a.vʁil] | April |
| mai | [mɛ] | Mai |
| juin | [ʒɥɛ̃] | Juni |
| juillet | [ʒɥi.jɛ] | Juli |
| août | [u(t)] | August |
| septembre | [sɛp.tɑ̃bʁ] | September |
| octobre | [ɔk.tɔbʁ] | Oktober |
| novembre | [nɔ.vɑ̃bʁ] | November |
| décembre | [de.sɑ̃bʁ] | Dezember |

**WICHTIG:** Monatsnamen schreibt man im Französischen IMMER klein (janvier, nicht Janvier)!
    `,
    germanExplanation: 'Die Monatsnamen ähneln dem Deutschen, werden aber immer kleingeschrieben.'
  },

  // Section 10: en with months
  {
    id: 'en-mois',
    title: 'Die Präposition "en" mit Monaten',
    type: 'explanation',
    content: `
Um zu sagen "im Januar", "im Juli" usw., benutzt man **"en"** (oder "au mois de"):

- **en janvier** - im Januar
- **en juillet** - im Juli
- **en décembre** - im Dezember

Eine etwas formellere Alternative ist **"au mois de..."**:
- **au mois de janvier** - im Monat Januar

**Merke:** Bei Monaten gibt es KEINE Ausnahme - immer "en" + Monat. Einfach!
    `,
    germanExplanation: 'Bei allen Monaten benutzt man "en" + Monatsname - ohne Ausnahme.',
    examples: [
      { french: 'En janvier, il fait froid.', german: 'Im Januar ist es kalt.' },
      { french: 'En août, il fait très chaud.', german: 'Im August ist es sehr warm.' },
      { french: 'Mon anniversaire est en mai.', german: 'Mein Geburtstag ist im Mai.' }
    ]
  },

  // Section 11: Temperature
  {
    id: 'temperature',
    title: 'Die Temperatur (La température)',
    type: 'example',
    content: `
Um über die Temperatur zu sprechen, benutzt man **"Il fait + Zahl + degrés"**:

Beachte: In Frankreich misst man in Grad Celsius (degrés Celsius), genau wie in Deutschland.
"plus" bedeutet "plus" (über null), "moins" bedeutet "minus" (unter null).
    `,
    examples: [
      { french: 'Il fait 20 degrés.', german: 'Es sind 20 Grad.', notes: 'degrés = Grad' },
      { french: 'Il fait 30 degrés.', german: 'Es sind 30 Grad.', notes: 'Sehr warm!' },
      { french: 'Il fait moins 5 degrés.', german: 'Es sind minus 5 Grad.', notes: 'moins = minus' },
      { french: 'Quelle température fait-il?', german: 'Wie viel Grad sind es?', notes: 'Frage nach der Temperatur' }
    ]
  },

  // Section 12: avoir froid / avoir chaud
  {
    id: 'avoir-froid-chaud',
    title: 'Sensationen: "avoir froid" und "avoir chaud"',
    type: 'comparison',
    content: `
Hier passiert etwas Wichtiges: Beim WETTER benutzt man **faire**, aber bei PERSÖNLICHEN Empfindungen
benutzt man **avoir** (haben)!

**Wetter (unpersönlich) → faire:**
- Il fait froid. - Es ist kalt. (das Wetter)
- Il fait chaud. - Es ist warm. (das Wetter)

**Person (Empfindung) → avoir:**
- J'ai froid. - Mir ist kalt. (wörtlich: "Ich habe Kälte")
- J'ai chaud. - Mir ist warm. (wörtlich: "Ich habe Wärme")

**Vergleich Deutsch - Französisch:**

| Deutsch | Französisch | Verb |
|---------|-------------|------|
| Es ist kalt. (Wetter) | Il fait froid. | faire |
| Mir ist kalt. (ich) | J'ai froid. | avoir |
| Es ist warm. (Wetter) | Il fait chaud. | faire |
| Ihm ist warm. (er) | Il a chaud. | avoir |

**ACHTUNG:** Im Deutschen sagt man "mir IST kalt" (mit "sein"), im Französischen "ich HABE Kälte" (mit "avoir")!
    `,
    germanExplanation: 'Wetter = faire (Il fait froid), persönliches Empfinden = avoir (J\'ai froid). Nicht verwechseln!'
  },

  // Section 13: avoir for sensations examples
  {
    id: 'avoir-sensations',
    title: 'Weitere Empfindungen mit "avoir"',
    type: 'example',
    content: `
Das Verb "avoir" wird im Französischen für viele körperliche Empfindungen benutzt -
wo das Deutsche oft "sein" benutzt:
    `,
    examples: [
      { french: 'J\'ai froid.', german: 'Mir ist kalt.', notes: 'Wörtlich: "Ich habe Kälte"' },
      { french: 'J\'ai chaud.', german: 'Mir ist warm.', notes: 'Wörtlich: "Ich habe Wärme"' },
      { french: 'Tu as froid?', german: 'Ist dir kalt?', notes: 'Frage mit "tu as"' },
      { french: 'Elle a chaud.', german: 'Ihr ist warm.', notes: '3. Person: "elle a"' },
      { french: 'Nous avons froid.', german: 'Uns ist kalt.', notes: 'Plural: "nous avons"' }
    ]
  },

  // Section 14: Dialogue 1
  {
    id: 'dialogue-weather-talk',
    title: 'Dialog: Über das Wetter plaudern',
    type: 'dialogue',
    content: `
**Situation:** Zwei Freunde treffen sich an einem Wintertag

**Léa:** Salut Tom! Quel temps fait-il aujourd'hui?
**Tom:** Salut! Il fait très froid. Il y a du vent aussi.
**Léa:** Oui, j'ai froid! Et il neige un peu.
**Tom:** En hiver, c'est normal. Il fait moins 3 degrés!
**Léa:** Brrr! Je préfère l'été. En été, il fait beau et chaud.
**Tom:** Moi aussi! Au revoir, Léa!
**Léa:** À bientôt, Tom!

---

**Beachte:**
- "Quel temps fait-il?" = Wie ist das Wetter?
- "j'ai froid" (avoir) für die Person, "il fait froid" (faire) für das Wetter
- "aujourd'hui" [o.ʒuʁ.dɥi] = heute
- "un peu" = ein bisschen, "aussi" = auch
    `
  },

  // Section 15: Dialogue 2
  {
    id: 'dialogue-vacation-weather',
    title: 'Dialog: Wetter im Urlaub',
    type: 'dialogue',
    content: `
**Situation:** Sophie ruft ihre Freundin Marie an, die im Urlaub ist

**Sophie:** Allô Marie! Quel temps fait-il à Nice?
**Marie:** Bonjour Sophie! Ici, il fait beau! Il y a du soleil.
**Sophie:** Super! Il fait combien de degrés?
**Marie:** Il fait 28 degrés. J'ai un peu chaud!
**Sophie:** Quelle chance! À Paris, il pleut et il fait gris.
**Marie:** Oh non! En automne, il pleut souvent à Paris.
**Sophie:** C'est vrai. Profite du soleil!
**Marie:** Merci! Au revoir!

---

**Beachte:**
- "Il fait combien de degrés?" = Wie viel Grad sind es?
- "Quelle chance!" = Was für ein Glück!
- "souvent" = oft, "ici" = hier
- "Profite du soleil!" = Genieß die Sonne!
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Weather question & general
  {
    id: 'lesson9-meteo-lameteo',
    french: 'la météo',
    german: 'das Wetter / der Wetterbericht',
    english: 'the weather (forecast)',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je regarde la météo.',
      german: 'Ich schaue den Wetterbericht.'
    },
    notes: 'Kurzform von "la météorologie"',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-meteo-letemps',
    french: 'le temps',
    german: 'das Wetter / die Zeit',
    english: 'the weather / time',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Quel temps fait-il?',
      german: 'Wie ist das Wetter?'
    },
    notes: 'Hat zwei Bedeutungen: Wetter UND Zeit',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-meteo-queltempsfaitil',
    french: 'Quel temps fait-il?',
    german: 'Wie ist das Wetter?',
    english: 'what is the weather like?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Bonjour! Quel temps fait-il?',
      german: 'Guten Tag! Wie ist das Wetter?'
    },
    notes: 'Standard-Frage. Wörtlich: "Welches Wetter macht es?"',
    level: 'A1',
    tags: ['lesson9', 'weather', 'question', 'essential']
  },

  // faire conjugation
  {
    id: 'lesson9-faire-jefais',
    french: 'je fais',
    german: 'ich mache',
    english: 'I do/make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je fais du sport.',
      german: 'Ich mache Sport.'
    },
    notes: 'faire Konjugation: 1. Person Singular [fɛ]',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation']
  },
  {
    id: 'lesson9-faire-tufais',
    french: 'tu fais',
    german: 'du machst',
    english: 'you do/make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu fais la cuisine.',
      german: 'Du kochst.'
    },
    notes: 'faire Konjugation: 2. Person Singular [fɛ]',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation']
  },
  {
    id: 'lesson9-faire-ilfait',
    french: 'il/elle fait',
    german: 'er/sie macht',
    english: 'he/she does/makes',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il fait beau.',
      german: 'Das Wetter ist schön.'
    },
    notes: 'faire Konjugation: 3. Person Singular [fɛ]. Wichtig fürs Wetter!',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation', 'weather']
  },
  {
    id: 'lesson9-faire-nousfaisons',
    french: 'nous faisons',
    german: 'wir machen',
    english: 'we do/make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous faisons un gâteau.',
      german: 'Wir backen einen Kuchen.'
    },
    notes: 'faire Konjugation: 1. Person Plural. ACHTUNG Aussprache: [fə.zɔ̃]!',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation']
  },
  {
    id: 'lesson9-faire-vousfaites',
    french: 'vous faites',
    german: 'ihr macht / Sie machen',
    english: 'you do/make (plural/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous faites du vélo?',
      german: 'Fahrt ihr Rad?'
    },
    notes: 'faire Konjugation: 2. Person Plural. Unregelmäßig: [fɛt], NICHT "faitez"!',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation']
  },
  {
    id: 'lesson9-faire-ilsfont',
    french: 'ils/elles font',
    german: 'sie machen',
    english: 'they do/make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils font leurs devoirs.',
      german: 'Sie machen ihre Hausaufgaben.'
    },
    notes: 'faire Konjugation: 3. Person Plural [fɔ̃]',
    level: 'A1',
    tags: ['lesson9', 'verb', 'faire', 'conjugation']
  },

  // Weather expressions with il fait
  {
    id: 'lesson9-weather-ilfaitbeau',
    french: 'il fait beau',
    german: 'das Wetter ist schön',
    english: "it's nice (weather)",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Aujourd\'hui, il fait beau.',
      german: 'Heute ist das Wetter schön.'
    },
    notes: 'Wörtlich: "es macht schön". Sehr häufig!',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilfaitmauvais',
    french: 'il fait mauvais',
    german: 'das Wetter ist schlecht',
    english: "it's bad (weather)",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'En hiver, il fait souvent mauvais.',
      german: 'Im Winter ist das Wetter oft schlecht.'
    },
    notes: '"mauvais" [mo.vɛ] = schlecht',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-ilfaitchaud',
    french: 'il fait chaud',
    german: 'es ist warm/heiß',
    english: "it's hot",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'En été, il fait chaud.',
      german: 'Im Sommer ist es warm.'
    },
    notes: '"chaud" [ʃo] = warm/heiß',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilfaitfroid',
    french: 'il fait froid',
    german: 'es ist kalt',
    english: "it's cold",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'En hiver, il fait froid.',
      german: 'Im Winter ist es kalt.'
    },
    notes: '"froid" [fʁwa] = kalt',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilfaitfrais',
    french: 'il fait frais',
    german: 'es ist frisch/kühl',
    english: "it's cool/chilly",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'En automne, il fait frais.',
      german: 'Im Herbst ist es kühl.'
    },
    notes: '"frais" [fʁɛ] = frisch/kühl',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-ilfaitgris',
    french: 'il fait gris',
    german: 'es ist grau/trüb',
    english: "it's grey/overcast",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'À Paris, il fait gris aujourd\'hui.',
      german: 'In Paris ist es heute grau.'
    },
    notes: '"gris" [ɡʁi] = grau',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },

  // Weather with il + verb
  {
    id: 'lesson9-weather-ilpleut',
    french: 'il pleut',
    german: 'es regnet',
    english: "it's raining",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Prends un parapluie, il pleut!',
      german: 'Nimm einen Regenschirm, es regnet!'
    },
    notes: 'Von "pleuvoir" (regnen). Aussprache: [il plø]',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilneige',
    french: 'il neige',
    german: 'es schneit',
    english: "it's snowing",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'En décembre, il neige souvent.',
      german: 'Im Dezember schneit es oft.'
    },
    notes: 'Von "neiger" (schneien). Aussprache: [il nɛʒ]',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilgele',
    french: 'il gèle',
    german: 'es friert',
    english: "it's freezing",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'La nuit, il gèle.',
      german: 'Nachts friert es.'
    },
    notes: 'Von "geler" (frieren). Aussprache: [il ʒɛl]',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },

  // Weather with il y a
  {
    id: 'lesson9-weather-ilyaduvent',
    french: 'il y a du vent',
    german: 'es ist windig',
    english: "it's windy",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'À la mer, il y a du vent.',
      german: 'Am Meer ist es windig.'
    },
    notes: 'Wörtlich: "es gibt Wind". "le vent" [vɑ̃] = der Wind',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilyadusoleil',
    french: 'il y a du soleil',
    german: 'es ist sonnig',
    english: "it's sunny",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Aujourd\'hui, il y a du soleil.',
      german: 'Heute ist es sonnig.'
    },
    notes: 'Wörtlich: "es gibt Sonne". "le soleil" [sɔ.lɛj] = die Sonne',
    level: 'A1',
    tags: ['lesson9', 'weather', 'essential']
  },
  {
    id: 'lesson9-weather-ilyadubrouillard',
    french: 'il y a du brouillard',
    german: 'es ist neblig',
    english: "it's foggy",
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Le matin, il y a du brouillard.',
      german: 'Morgens ist es neblig.'
    },
    notes: '"le brouillard" [bʁu.jaʁ] = der Nebel',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-nuage',
    french: 'le nuage',
    german: 'die Wolke',
    english: 'the cloud',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il y a des nuages dans le ciel.',
      german: 'Es sind Wolken am Himmel.'
    },
    notes: 'Plural: des nuages = es ist bewölkt',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-orage',
    french: 'l\'orage',
    german: 'das Gewitter',
    english: 'the thunderstorm',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il y a un orage.',
      german: 'Es gibt ein Gewitter.'
    },
    notes: 'l\'orage = le orage (maskulin)',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-pluie',
    french: 'la pluie',
    german: 'der Regen',
    english: 'the rain',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je n\'aime pas la pluie.',
      german: 'Ich mag den Regen nicht.'
    },
    notes: 'Verwandt mit "il pleut" (es regnet)',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },
  {
    id: 'lesson9-weather-neige',
    french: 'la neige',
    german: 'der Schnee',
    english: 'the snow',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Les enfants aiment la neige.',
      german: 'Die Kinder mögen den Schnee.'
    },
    notes: 'Verwandt mit "il neige" (es schneit)',
    level: 'A1',
    tags: ['lesson9', 'weather']
  },

  // Seasons
  {
    id: 'lesson9-season-printemps',
    french: 'le printemps',
    german: 'der Frühling',
    english: 'spring',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Au printemps, il pleut souvent.',
      german: 'Im Frühling regnet es oft.'
    },
    notes: 'ACHTUNG: "au printemps" (nicht "en printemps")!',
    level: 'A1',
    tags: ['lesson9', 'season', 'essential']
  },
  {
    id: 'lesson9-season-ete',
    french: 'l\'été',
    german: 'der Sommer',
    english: 'summer',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En été, il fait chaud.',
      german: 'Im Sommer ist es warm.'
    },
    notes: 'l\'été = le été (maskulin). "en été" = im Sommer',
    level: 'A1',
    tags: ['lesson9', 'season', 'essential']
  },
  {
    id: 'lesson9-season-automne',
    french: 'l\'automne',
    german: 'der Herbst',
    english: 'autumn/fall',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En automne, les feuilles tombent.',
      german: 'Im Herbst fallen die Blätter.'
    },
    notes: 'l\'automne = le automne (maskulin). "en automne" = im Herbst',
    level: 'A1',
    tags: ['lesson9', 'season', 'essential']
  },
  {
    id: 'lesson9-season-hiver',
    french: 'l\'hiver',
    german: 'der Winter',
    english: 'winter',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En hiver, il neige.',
      german: 'Im Winter schneit es.'
    },
    notes: 'l\'hiver = le hiver (stummes h). "en hiver" = im Winter',
    level: 'A1',
    tags: ['lesson9', 'season', 'essential']
  },
  {
    id: 'lesson9-season-saison',
    french: 'la saison',
    german: 'die Jahreszeit',
    english: 'the season',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Il y a quatre saisons.',
      german: 'Es gibt vier Jahreszeiten.'
    },
    notes: 'Aussprache: [sɛ.zɔ̃]',
    level: 'A1',
    tags: ['lesson9', 'season']
  },

  // Months (selection)
  {
    id: 'lesson9-month-janvier',
    french: 'janvier',
    german: 'Januar',
    english: 'January',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En janvier, il fait froid.',
      german: 'Im Januar ist es kalt.'
    },
    notes: 'Monate immer klein schreiben! [ʒɑ̃.vje]',
    level: 'A1',
    tags: ['lesson9', 'month', 'essential']
  },
  {
    id: 'lesson9-month-fevrier',
    french: 'février',
    german: 'Februar',
    english: 'February',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Février est un mois court.',
      german: 'Februar ist ein kurzer Monat.'
    },
    notes: 'Aussprache: [fev.ʁi.je]',
    level: 'A1',
    tags: ['lesson9', 'month']
  },
  {
    id: 'lesson9-month-mai',
    french: 'mai',
    german: 'Mai',
    english: 'May',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mon anniversaire est en mai.',
      german: 'Mein Geburtstag ist im Mai.'
    },
    notes: 'Aussprache: [mɛ]',
    level: 'A1',
    tags: ['lesson9', 'month']
  },
  {
    id: 'lesson9-month-juillet',
    french: 'juillet',
    german: 'Juli',
    english: 'July',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En juillet, il fait très chaud.',
      german: 'Im Juli ist es sehr warm.'
    },
    notes: 'Aussprache: [ʒɥi.jɛ]. Nicht mit "juin" (Juni) verwechseln!',
    level: 'A1',
    tags: ['lesson9', 'month']
  },
  {
    id: 'lesson9-month-aout',
    french: 'août',
    german: 'August',
    english: 'August',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En août, beaucoup de Français sont en vacances.',
      german: 'Im August sind viele Franzosen im Urlaub.'
    },
    notes: 'Aussprache: [u] oder [ut]. Sehr kurz!',
    level: 'A1',
    tags: ['lesson9', 'month']
  },
  {
    id: 'lesson9-month-decembre',
    french: 'décembre',
    german: 'Dezember',
    english: 'December',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'En décembre, c\'est Noël.',
      german: 'Im Dezember ist Weihnachten.'
    },
    notes: 'Aussprache: [de.sɑ̃bʁ]',
    level: 'A1',
    tags: ['lesson9', 'month']
  },
  {
    id: 'lesson9-month-mois',
    french: 'le mois',
    german: 'der Monat',
    english: 'the month',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il y a douze mois dans une année.',
      german: 'Es gibt zwölf Monate in einem Jahr.'
    },
    notes: 'Singular und Plural gleich: le mois / les mois',
    level: 'A1',
    tags: ['lesson9', 'month']
  },

  // Sensations with avoir
  {
    id: 'lesson9-sensation-avoirfroid',
    french: 'avoir froid',
    german: 'frieren / kalt sein (Person)',
    english: 'to be cold (person)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'ai froid!',
      german: 'Mir ist kalt!'
    },
    notes: 'Mit avoir, nicht être! Wörtlich: "Kälte haben"',
    level: 'A1',
    tags: ['lesson9', 'sensation', 'avoir', 'essential']
  },
  {
    id: 'lesson9-sensation-avoirchaud',
    french: 'avoir chaud',
    german: 'warm sein (Person)',
    english: 'to be hot (person)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu as chaud?',
      german: 'Ist dir warm?'
    },
    notes: 'Mit avoir, nicht être! Wörtlich: "Wärme haben"',
    level: 'A1',
    tags: ['lesson9', 'sensation', 'avoir', 'essential']
  },

  // Temperature
  {
    id: 'lesson9-temp-degre',
    french: 'le degré',
    german: 'das Grad',
    english: 'the degree',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il fait 20 degrés.',
      german: 'Es sind 20 Grad.'
    },
    notes: 'Plural: degrés. "Il fait ... degrés" = Es sind ... Grad',
    level: 'A1',
    tags: ['lesson9', 'temperature']
  },
  {
    id: 'lesson9-temp-temperature',
    french: 'la température',
    german: 'die Temperatur',
    english: 'the temperature',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Quelle température fait-il?',
      german: 'Wie viel Grad sind es?'
    },
    notes: 'Cognate - dem deutschen Wort sehr ähnlich',
    isCognate: true,
    level: 'A1',
    tags: ['lesson9', 'temperature']
  },

  // Useful time/extra words
  {
    id: 'lesson9-extra-aujourdhui',
    french: 'aujourd\'hui',
    german: 'heute',
    english: 'today',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Aujourd\'hui, il fait beau.',
      german: 'Heute ist das Wetter schön.'
    },
    notes: 'Aussprache: [o.ʒuʁ.dɥi]',
    level: 'A1',
    tags: ['lesson9', 'time', 'essential']
  },
  {
    id: 'lesson9-extra-souvent',
    french: 'souvent',
    german: 'oft',
    english: 'often',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'En automne, il pleut souvent.',
      german: 'Im Herbst regnet es oft.'
    },
    notes: 'Aussprache: [su.vɑ̃]',
    level: 'A1',
    tags: ['lesson9', 'adverb']
  },
  {
    id: 'lesson9-extra-ciel',
    french: 'le ciel',
    german: 'der Himmel',
    english: 'the sky',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le ciel est bleu.',
      german: 'Der Himmel ist blau.'
    },
    notes: 'Aussprache: [sjɛl]',
    level: 'A1',
    tags: ['lesson9', 'weather', 'nature']
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
    question: 'Wie fragt man "Wie ist das Wetter?" auf Französisch?',
    options: ['Quel temps fait-il?', 'Comment ça va?', 'Quelle heure est-il?', 'Où es-tu?'],
    correctAnswer: 'Quel temps fait-il?',
    explanation: '"Quel temps fait-il?" bedeutet "Wie ist das Wetter?" - wörtlich "Welches Wetter macht es?".',
    hints: [
      'Das Verb für Wetter ist "faire".',
      'Es enthält das Wort "temps" (Wetter).'
    ],
    tags: ['weather', 'question']
  },
  {
    id: 'guided-2',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Il ___ beau. (Das Wetter ist schön.)',
    correctAnswer: ['fait'],
    explanation: 'Beim Wetter benutzt man "faire". Die Form für "il" ist "fait": "Il fait beau."',
    hints: [
      'Das Verb ist eine Form von "faire".',
      'Die 3. Person von faire ist "fait".'
    ],
    tags: ['weather', 'faire', 'il-fait']
  },
  {
    id: 'guided-3',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "Il pleut"?',
    options: ['Es schneit.', 'Es regnet.', 'Es ist windig.', 'Es ist kalt.'],
    correctAnswer: 'Es regnet.',
    explanation: '"Il pleut" [il plø] bedeutet "Es regnet" (vom Verb "pleuvoir").',
    hints: [
      'Es kommt von "pleuvoir".',
      'Verwandt mit "la pluie" (der Regen).'
    ],
    tags: ['weather', 'il-pleut']
  },
  {
    id: 'guided-4',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man "Es schneit" auf Französisch?',
    options: ['Il pleut.', 'Il neige.', 'Il gèle.', 'Il fait gris.'],
    correctAnswer: 'Il neige.',
    explanation: '"Il neige" [il nɛʒ] bedeutet "Es schneit" (vom Verb "neiger").',
    hints: [
      'Verwandt mit "la neige" (der Schnee).',
      'Es beginnt mit "Il n...".'
    ],
    tags: ['weather', 'il-neige']
  },
  {
    id: 'guided-5',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ du sport. (Ich mache Sport.)',
    correctAnswer: ['fais'],
    explanation: 'Die Form von "faire" für "je" ist "fais": "Je fais du sport."',
    hints: [
      'Es ist die Ich-Form von "faire".',
      'Sie endet auf "-ais": "fais".'
    ],
    tags: ['faire', 'conjugation']
  },
  {
    id: 'guided-6',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: der Sommer',
    correctAnswer: ['l\'été', 'lété', 'été', 'l\'ete'],
    explanation: '"l\'été" bedeutet "der Sommer" (maskulin, l\'été = le été).',
    hints: [
      'Es ist maskulin: le → l\'.',
      'Es ist "l\'été".'
    ],
    tags: ['seasons', 'vocabulary']
  },
  {
    id: 'guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Monat ist "janvier"?',
    options: ['Juni', 'Januar', 'Juli', 'Jänner-Ende'],
    correctAnswer: 'Januar',
    explanation: '"janvier" [ʒɑ̃.vje] ist der erste Monat: Januar. Monate schreibt man klein!',
    hints: [
      'Es ist der erste Monat des Jahres.',
      'Es klingt ähnlich wie das deutsche Wort.'
    ],
    tags: ['months']
  },
  {
    id: 'guided-8',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'J\'ai ___. (Mir ist kalt.)',
    correctAnswer: ['froid'],
    explanation: 'Bei Personen benutzt man "avoir": "J\'ai froid" = "Mir ist kalt" (wörtlich: ich habe Kälte).',
    hints: [
      'Das Wort für "kalt" ist "froid".',
      'Mit avoir: "J\'ai froid".'
    ],
    tags: ['sensation', 'avoir', 'avoir-froid']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ un gâteau. (Wir backen einen Kuchen.)',
    correctAnswer: ['faisons'],
    explanation: 'Die Form von "faire" für "nous" ist "faisons" - Aussprache [fə.zɔ̃] mit stummem "ai"!',
    hints: [
      'Es ist die wir-Form von "faire".',
      'Sie endet auf "-ons": "faisons".'
    ],
    tags: ['faire', 'conjugation']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ du vélo? (Fahrt ihr Rad?)',
    correctAnswer: ['faites'],
    explanation: 'Die Form von "faire" für "vous" ist "faites" [fɛt] - unregelmäßig, NICHT "faitez"!',
    hints: [
      'Es ist eine unregelmäßige vous-Form (nicht auf "-ez").',
      'Es ist "faites".'
    ],
    tags: ['faire', 'conjugation']
  },
  {
    id: 'independent-3',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie sagt man "im Frühling"?',
    options: ['en printemps', 'au printemps', 'à printemps', 'dans printemps'],
    correctAnswer: 'au printemps',
    explanation: 'Der Frühling ist die Ausnahme: "au printemps" (nicht "en printemps"). Die anderen Jahreszeiten nehmen "en".',
    hints: [
      'Frühling ist die Ausnahme unter den Jahreszeiten.',
      'Es heißt "au printemps", nicht "en printemps".'
    ],
    tags: ['seasons', 'preposition', 'en']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: '___ été, il fait chaud. (Im Sommer ist es warm.)',
    correctAnswer: ['En', 'en'],
    explanation: 'Bei Sommer, Herbst und Winter benutzt man "en": "en été".',
    hints: [
      'Es ist eine zwei-Buchstaben-Präposition.',
      'Für Sommer/Herbst/Winter benutzt man "en".'
    ],
    tags: ['seasons', 'preposition', 'en']
  },
  {
    id: 'independent-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Es ist windig.',
    correctAnswer: ['Il y a du vent.', 'Il y a du vent', 'il y a du vent.', 'il y a du vent'],
    explanation: '"Es ist windig" wird mit "Il y a du vent" ausgedrückt (wörtlich: "Es gibt Wind").',
    hints: [
      'Benutze "Il y a du..." (es gibt).',
      'Das Wort für Wind ist "vent".'
    ],
    tags: ['weather', 'il-y-a', 'translation']
  },
  {
    id: 'independent-6',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Im Winter schneit es.',
    correctAnswer: ['En hiver, il neige.', 'En hiver il neige.', 'en hiver, il neige', 'En hiver, il neige'],
    explanation: '"En hiver" (im Winter) + "il neige" (es schneit). Winter nimmt "en".',
    hints: [
      'Winter = "hiver", mit "en".',
      'Es schneit = "il neige".'
    ],
    tags: ['seasons', 'weather', 'translation']
  },
  {
    id: 'independent-7',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz ist richtig für "Mir ist warm"?',
    options: ['Il fait chaud.', 'Je suis chaud.', 'J\'ai chaud.', 'Je fais chaud.'],
    correctAnswer: 'J\'ai chaud.',
    explanation: 'Bei persönlichem Empfinden benutzt man "avoir": "J\'ai chaud". "Il fait chaud" wäre das Wetter!',
    hints: [
      'Für die Person benutzt man "avoir", nicht "faire".',
      'Es ist "J\'ai chaud".'
    ],
    tags: ['sensation', 'avoir', 'avoir-chaud']
  },
  {
    id: 'independent-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Il fait froid.',
    correctAnswer: ['Es ist kalt.', 'Es ist kalt', 'es ist kalt', 'Es ist kalt (das Wetter).'],
    explanation: '"Il fait froid" beschreibt das Wetter: "Es ist kalt." (mit faire, unpersönliches il).',
    hints: [
      '"Il fait..." beschreibt das Wetter.',
      '"froid" bedeutet "kalt".'
    ],
    tags: ['weather', 'il-fait', 'translation']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Es ist Juli und 30 Grad. Welcher Satz passt?',
    options: ['En juillet, il fait froid.', 'En juillet, il neige.', 'En juillet, il fait chaud.', 'En juillet, il gèle.'],
    correctAnswer: 'En juillet, il fait chaud.',
    explanation: 'Im Juli (en juillet) und bei 30 Grad ist es warm: "il fait chaud".',
    hints: [
      'Juli ist ein Sommermonat.',
      '30 Grad bedeutet warm = "chaud".'
    ],
    tags: ['months', 'weather', 'context']
  },
  {
    id: 'independent-10',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Il ___ 25 degrés. (Es sind 25 Grad.)',
    correctAnswer: ['fait'],
    explanation: 'Für die Temperatur benutzt man "Il fait + Zahl + degrés": "Il fait 25 degrés."',
    hints: [
      'Auch die Temperatur "macht" man mit faire.',
      'Die Form für "il" ist "fait".'
    ],
    tags: ['temperature', 'faire', 'il-fait']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist KORREKT?',
    options: ['En printemps, il fait doux.', 'Au printemps, il fait doux.', 'À printemps, il fait doux.', 'En le printemps, il fait doux.'],
    correctAnswer: 'Au printemps, il fait doux.',
    explanation: 'Der Frühling ist die Ausnahme: "au printemps". Alle anderen Jahreszeiten nehmen "en" (en été, en automne, en hiver).',
    tags: ['seasons', 'preposition', 'en']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— Quel temps ___-il à Nice?\n— Il y ___ du soleil!',
    correctAnswer: ['fait, a', 'fait a'],
    explanation: '"Quel temps fait-il?" (mit faire) und "Il y a du soleil" (mit "il y a" = es gibt).',
    tags: ['weather', 'dialogue', 'faire', 'il-y-a']
  },
  {
    id: 'assess-3',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Du zitterst im Winter. Welcher Satz beschreibt DICH (nicht das Wetter)?',
    options: ['Il fait froid.', 'J\'ai froid.', 'Il y a du froid.', 'Je fais froid.'],
    correctAnswer: 'J\'ai froid.',
    explanation: 'Für die eigene Empfindung benutzt man "avoir": "J\'ai froid" (mir ist kalt). "Il fait froid" beschreibt nur das Wetter.',
    tags: ['sensation', 'avoir', 'comparison']
  },
  {
    id: 'assess-4',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Im Januar ist es kalt und es schneit.',
    correctAnswer: ['En janvier, il fait froid et il neige.', 'En janvier il fait froid et il neige.', 'en janvier, il fait froid et il neige'],
    explanation: '"En janvier" (im Januar) + "il fait froid" (es ist kalt) + "et il neige" (und es schneit).',
    tags: ['months', 'weather', 'translation']
  },
  {
    id: 'assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Konjugiere "faire": Nous ___ un gâteau et vous ___ du café.',
    correctAnswer: ['faisons, faites', 'faisons faites'],
    explanation: '"nous faisons" [fə.zɔ̃] und "vous faites" [fɛt] - beide unregelmäßig in der Aussprache bzw. Endung!',
    tags: ['faire', 'conjugation']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: En automne, il fait frais et il y a du vent.',
    correctAnswer: ['Im Herbst ist es kühl und es ist windig.', 'Im Herbst ist es frisch und es ist windig.', 'Im Herbst ist es kühl und windig.', 'im herbst ist es kühl und es ist windig'],
    explanation: '"En automne" (im Herbst), "il fait frais" (es ist kühl), "il y a du vent" (es ist windig).',
    tags: ['seasons', 'weather', 'translation']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson09: Lesson = {
  meta: {
    id: 'lesson-09',
    number: 9,
    title: 'La Météo',
    titleGerman: 'Das Wetter',
    objectives: [
      'Das Wetter mit dem unpersönlichen "il" beschreiben können (Il fait beau, Il pleut, Il neige)',
      'Das Verb "faire" in allen Formen konjugieren',
      'Die vier Jahreszeiten und die zwölf Monate kennen',
      'Die Präposition "en" (und "au printemps") richtig verwenden',
      'Über die Temperatur sprechen können (Il fait 20 degrés)',
      'Den Unterschied zwischen "il fait froid" (Wetter) und "j\'ai froid" (Empfindung) verstehen'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05', 'lesson-06', 'lesson-07', 'lesson-08'],
    tags: ['weather', 'seasons', 'months', 'faire', 'impersonal-il', 'temperature', 'avoir']
  },

  introduction: {
    objectives: [
      'Das Wetter auf Französisch beschreiben und danach fragen',
      'Das wichtige Verb "faire" (machen) konjugieren',
      'Jahreszeiten und Monate benennen und mit "en"/"au" verwenden',
      'Persönliche Empfindungen mit "avoir" ausdrücken (J\'ai froid)'
    ],
    motivation: `
Über das Wetter zu sprechen, ist eine der häufigsten Alltagskonversationen - in Frankreich genauso wie in Deutschland!
In dieser Lektion lernst du, das Wetter zu beschreiben, nach den Jahreszeiten und Monaten zu fragen und deine eigenen
Empfindungen auszudrücken.

Das Verb "faire" (machen), das du hier lernst, ist eines der wichtigsten französischen Verben - du wirst es
nicht nur fürs Wetter, sondern für unzählige Aktivitäten brauchen!
    `,
    culturalNote: `
**Smalltalk über das Wetter**

In Frankreich ist das Wetter ein klassisches Thema für höflichen Smalltalk - besonders bei kurzen Begegnungen,
etwa beim Bäcker oder mit Nachbarn. Ein freundliches "Il fait beau aujourd'hui!" ist immer ein guter Gesprächseinstieg.

**Der Monat August**

Im August (en août) machen sehr viele Franzosen Urlaub - viele Geschäfte und kleine Restaurants in den Städten
schließen sogar für mehrere Wochen! Paris wirkt im August oft fast leer, weil die Einwohner ans Meer oder aufs Land fahren.
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
      'Du kannst das Wetter mit dem unpersönlichen "il" beschreiben (Il fait beau, Il pleut, Il neige, Il y a du vent)',
      'Du kannst das Verb "faire" in allen Formen konjugieren (je fais, tu fais, il fait, nous faisons, vous faites, ils font)',
      'Du kennst die vier Jahreszeiten (le printemps, l\'été, l\'automne, l\'hiver) - alle maskulin',
      'Du kennst die zwölf Monate und schreibst sie klein',
      'Du verwendest "en" mit Jahreszeiten und Monaten - mit der Ausnahme "au printemps"',
      'Du kannst über die Temperatur sprechen (Il fait 20 degrés)',
      'Du unterscheidest "il fait froid" (Wetter, faire) von "j\'ai froid" (Empfindung, avoir)'
    ],
    nextLesson: 'lesson-10'
  }
};
