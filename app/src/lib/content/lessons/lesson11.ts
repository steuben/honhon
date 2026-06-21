import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 11: Les Loisirs - Hobbies
 * Talking about leisure activities and interests in French for German speakers
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - "faire + de + Artikel" (faire du sport, faire de la natation, faire de l'escalade)
 * - "jouer à" (Sport/Spiele) vs. "jouer de" (Instrumente)
 * - Häufigkeitsadverbien (souvent, toujours, jamais...)
 * - "aimer + Infinitiv" (j'aime lire, j'aime danser)
 * - Wortschatz: Freizeitaktivitäten, Sport, Instrumente, Unterhaltung
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction to leisure
  {
    id: 'loisirs-intro',
    title: 'Über Hobbies sprechen',
    type: 'explanation',
    content: `
In dieser Lektion lernst du, über deine Freizeit, Hobbies und Interessen zu sprechen.
Das ist ein sehr häufiges Gesprächsthema beim Kennenlernen!

**Das Wort "les loisirs"** [le lwaziʁ] bedeutet "die Freizeit" oder "die Hobbies".

Es gibt drei wichtige Bausteine, um über Aktivitäten zu sprechen:

1. **faire + de** → für Sport und allgemeine Aktivitäten (faire du sport)
2. **jouer à** → für Sport und Spiele (jouer au foot)
3. **jouer de** → für Musikinstrumente (jouer du piano)

Dazu kommt das Verb **aimer** (mögen, lieben), mit dem du sagst, WAS du gerne machst:
"J'aime lire." (Ich lese gern.)

Diese Strukturen wirken am Anfang verwirrend - aber mit etwas Übung wird es ganz logisch!
    `,
    germanExplanation: 'Drei Strukturen für Aktivitäten: faire de, jouer à, jouer de.',
    examples: [
      { french: 'Quels sont tes loisirs?', german: 'Was sind deine Hobbies?', notes: 'Typische Frage beim Kennenlernen' },
      { french: 'J\'aime le sport.', german: 'Ich mag Sport.' }
    ]
  },

  // Section 2: faire + de + article
  {
    id: 'faire-de',
    title: 'Das Verb "faire" + de + Artikel',
    type: 'explanation',
    content: `
Das Verb **faire** (machen, tun) ist sehr wichtig für Freizeitaktivitäten - besonders für Sport.

Nach "faire" kommt die Präposition **de**, die mit dem bestimmten Artikel verschmilzt:

- **de + le → du** (maskulin): faire **du** sport
- **de + la → de la** (feminin): faire **de la** natation
- **de + l'** (vor Vokal): faire **de l'**escalade
- **de + les → des** (Plural): faire **des** randonnées

**Wichtig:** Welcher Artikel benutzt wird, hängt vom Geschlecht des Nomens ab!
- le sport (m) → faire **du** sport
- la danse (f) → faire **de la** danse
- l'équitation (f, vor Vokal) → faire **de l'**équitation

Diese Verschmelzung (de + le = du) ist dir vielleicht schon bekannt - sie funktioniert
genau wie bei den Mengenangaben!
    `,
    germanExplanation: 'de + le = du, de + la = de la, de + l\' vor Vokal. Geschlecht entscheidet!',
    examples: [
      { french: 'Je fais du vélo.', german: 'Ich fahre Fahrrad.', notes: 'le vélo (m) → du' },
      { french: 'Elle fait de la natation.', german: 'Sie schwimmt / geht schwimmen.', notes: 'la natation (f) → de la' },
      { french: 'Nous faisons de l\'escalade.', german: 'Wir klettern.', notes: 'l\'escalade (f, Vokal) → de l\'' }
    ]
  },

  // Section 3: faire conjugation (table)
  {
    id: 'faire-conjugation',
    title: 'Konjugation von "faire" (machen)',
    type: 'table',
    content: `
"Faire" ist ein UNREGELMÄSSIGES Verb - die Formen musst du auswendig lernen.
Es ist eines der wichtigsten Verben überhaupt!

## Konjugation im Präsens (Présent)

| Pronomen | faire | Aussprache | Deutsch | Beispiel |
|----------|-------|------------|---------|----------|
| je | fais | [fɛ] | ich mache | Je fais du sport. (Ich treibe Sport.) |
| tu | fais | [fɛ] | du machst | Tu fais du vélo. (Du fährst Rad.) |
| il/elle | fait | [fɛ] | er/sie macht | Il fait de la danse. (Er tanzt.) |
| nous | faisons | [fəzɔ̃] | wir machen | Nous faisons du yoga. (Wir machen Yoga.) |
| vous | faites | [fɛt] | ihr macht / Sie machen | Vous faites du tennis? (Spielt ihr Tennis?) |
| ils/elles | font | [fɔ̃] | sie machen | Ils font de la musique. (Sie machen Musik.) |

**Achtung bei der Aussprache:**
- "nous faisons" wird [fəzɔ̃] gesprochen - das "ai" klingt hier wie [ə]!
- "vous faites" ist unregelmäßig: [fɛt] (NICHT "faisez")
    `,
    germanExplanation: 'je/tu/il = fais/fais/fait (alle [fɛ]). Merke: nous faisons, vous faites, ils font.'
  },

  // Section 4: jouer à
  {
    id: 'jouer-a',
    title: '"jouer à" - Sport und Spiele',
    type: 'explanation',
    content: `
Das Verb **jouer** [ʒwe] bedeutet "spielen". Für **Sportarten und Spiele** benutzt man
**jouer à**.

Die Präposition **à** verschmilzt mit dem bestimmten Artikel:

- **à + le → au** (maskulin): jouer **au** football
- **à + la → à la** (feminin): jouer **à la** pétanque
- **à + l'** (vor Vokal): jouer **à l'**élastique
- **à + les → aux** (Plural): jouer **aux** cartes

**jouer ist ein REGELMÄSSIGES -er Verb:**
je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent

**Beispiele:**
- le foot (m) → jouer **au** foot
- les échecs (Pl) → jouer **aux** échecs (Schach spielen)
- les cartes (Pl) → jouer **aux** cartes (Karten spielen)
    `,
    germanExplanation: 'jouer à = Sport/Spiele. à + le = au, à + les = aux.',
    examples: [
      { french: 'Je joue au tennis.', german: 'Ich spiele Tennis.', notes: 'à + le tennis → au tennis' },
      { french: 'Ils jouent aux cartes.', german: 'Sie spielen Karten.', notes: 'à + les cartes → aux cartes' },
      { french: 'Tu joues au football?', german: 'Spielst du Fußball?' }
    ]
  },

  // Section 5: jouer de
  {
    id: 'jouer-de',
    title: '"jouer de" - Musikinstrumente',
    type: 'explanation',
    content: `
Für **Musikinstrumente** benutzt man **jouer de** (NICHT "jouer à"!).

Die Präposition **de** verschmilzt wie gewohnt mit dem Artikel:

- **de + le → du** (maskulin): jouer **du** piano
- **de + la → de la** (feminin): jouer **de la** guitare
- **de + l'** (vor Vokal): jouer **de l'**accordéon

**Der entscheidende Unterschied:**
- **jouer À** → Sport und Spiele (jouer au foot)
- **jouer DE** → Musikinstrumente (jouer du piano)

**Merkhilfe:** Bei Instrumenten "DE" wie "DUdelsack" oder "Drums"!

**Beispiele:**
- le piano (m) → jouer **du** piano
- la guitare (f) → jouer **de la** guitare
- le violon (m) → jouer **du** violon
    `,
    germanExplanation: 'jouer de = Instrumente. Sport = à, Instrument = de!',
    examples: [
      { french: 'Je joue du piano.', german: 'Ich spiele Klavier.', notes: 'de + le piano → du piano' },
      { french: 'Elle joue de la guitare.', german: 'Sie spielt Gitarre.', notes: 'de + la guitare → de la guitare' },
      { french: 'Il joue du violon.', german: 'Er spielt Geige.' }
    ]
  },

  // Section 6: à vs de comparison
  {
    id: 'jouer-comparison',
    title: 'jouer à vs. jouer de - Überblick',
    type: 'comparison',
    content: `
Der Unterschied zwischen "jouer à" und "jouer de" ist eine der häufigsten Fehlerquellen.
Hier der direkte Vergleich:

**JOUER À → Sport & Spiele:**
- jouer au football (Fußball spielen)
- jouer au tennis (Tennis spielen)
- jouer au basket (Basketball spielen)
- jouer aux cartes (Karten spielen)
- jouer aux échecs (Schach spielen)

**JOUER DE → Musikinstrumente:**
- jouer du piano (Klavier spielen)
- jouer de la guitare (Gitarre spielen)
- jouer du violon (Geige spielen)
- jouer de la batterie (Schlagzeug spielen)
- jouer de la flûte (Flöte spielen)

**Eselsbrücke:**
- À spielen = ein Spiel/Sport (man spielt GEGEN jemanden)
- DE spielen = ein Instrument (man holt Töne aus dem Instrument heraus)
    `,
    germanExplanation: 'Verwechsle nie: Sport = jouer à, Instrument = jouer de!'
  },

  // Section 7: aimer + infinitive
  {
    id: 'aimer-infinitif',
    title: '"aimer + Infinitiv" - Etwas gerne machen',
    type: 'explanation',
    content: `
Mit dem Verb **aimer** (mögen, lieben) + einem Infinitiv sagst du, WAS du gerne machst.

**Struktur:** aimer (konjugiert) + Infinitiv

- J'aime **lire**. (Ich lese gern. / Ich mag es zu lesen.)
- Tu aimes **danser**? (Tanzt du gern?)
- Elle aime **voyager**. (Sie reist gern.)

**Konjugation von aimer (regelmäßiges -er Verb):**
- j'aime, tu aimes, il/elle aime, nous aimons, vous aimez, ils/elles aiment

**Steigerung des Mögens:**
- **j'aime bien** = ich mag (ganz gern)
- **j'aime** = ich mag / ich liebe
- **j'aime beaucoup** = ich mag sehr
- **j'adore** = ich liebe (es) / ich finde es toll
- **je déteste** = ich hasse / ich mag gar nicht

**Wichtig:** Der zweite Verb steht immer im Infinitiv (Grundform)!
- ✅ J'aime jouer au tennis. (Ich spiele gern Tennis.)
- ❌ J'aime je joue au tennis.
    `,
    germanExplanation: 'aimer + Infinitiv = etwas gerne tun. Das zweite Verb bleibt im Infinitiv!',
    examples: [
      { french: 'J\'aime danser.', german: 'Ich tanze gern.' },
      { french: 'Elle adore voyager.', german: 'Sie reist für ihr Leben gern.', notes: 'adorer = stärker als aimer' },
      { french: 'Je déteste cuisiner.', german: 'Ich koche überhaupt nicht gern.', notes: 'détester = nicht mögen' }
    ]
  },

  // Section 8: frequency adverbs (table)
  {
    id: 'frequency-adverbs',
    title: 'Häufigkeitsadverbien (Les adverbes de fréquence)',
    type: 'table',
    content: `
Mit Häufigkeitsadverbien sagst du, WIE OFT du etwas machst.
Sie stehen normalerweise NACH dem konjugierten Verb.

| Französisch | Aussprache | Deutsch | Beispiel |
|-------------|------------|---------|----------|
| toujours | [tuʒuʁ] | immer | Je fais toujours du sport. (Ich treibe immer Sport.) |
| souvent | [suvɑ̃] | oft | Il joue souvent au foot. (Er spielt oft Fußball.) |
| quelquefois | [kɛlkəfwa] | manchmal | Elle lit quelquefois. (Sie liest manchmal.) |
| parfois | [paʁfwa] | manchmal | Nous parfois dansons. (Wir tanzen manchmal.) |
| rarement | [ʁaʁmɑ̃] | selten | Tu vas rarement au cinéma. (Du gehst selten ins Kino.) |
| jamais | [ʒamɛ] | nie | Je ne joue jamais aux cartes. (Ich spiele nie Karten.) |

**WICHTIG bei "jamais" (nie):**
"jamais" braucht ein **ne** vor dem Verb (Verneinung)!
- Je **ne** joue **jamais** au tennis. (Ich spiele nie Tennis.)
- Stellung: ne + Verb + jamais
    `,
    germanExplanation: 'Häufigkeitsadverbien stehen nach dem Verb. "jamais" braucht "ne" vor dem Verb!'
  },

  // Section 9: sports vocabulary (table)
  {
    id: 'sports-table',
    title: 'Sportarten (Les sports)',
    type: 'table',
    content: `
Hier die wichtigsten Sportarten und welche Struktur sie brauchen:

| Französisch | Deutsch | Struktur | Beispiel |
|-------------|---------|----------|----------|
| le football | Fußball | jouer au | Je joue au football. |
| le tennis | Tennis | jouer au | Tu joues au tennis. |
| le basket | Basketball | jouer au | Il joue au basket. |
| la natation | Schwimmen | faire de la | Elle fait de la natation. |
| le vélo | Radfahren | faire du | Je fais du vélo. |
| la danse | Tanzen | faire de la | Nous faisons de la danse. |
| l'escalade (f) | Klettern | faire de l' | Vous faites de l'escalade. |
| le yoga | Yoga | faire du | Ils font du yoga. |

**Faustregel:**
- Ballsportarten/Spiele → meist **jouer à**
- Andere Aktivitäten (Schwimmen, Radfahren, Tanzen) → meist **faire de**
    `,
    germanExplanation: 'Ballsport = jouer à, andere Aktivitäten = faire de.'
  },

  // Section 10: entertainment vocabulary (example)
  {
    id: 'entertainment',
    title: 'Unterhaltung und Freizeit (Les divertissements)',
    type: 'example',
    content: `
Weitere beliebte Freizeitaktivitäten - oft mit dem Verb **aimer + Infinitiv**:
    `,
    examples: [
      { french: 'J\'aime lire.', german: 'Ich lese gern.', notes: 'lire = lesen (la lecture = das Lesen)' },
      { french: 'J\'aime écouter de la musique.', german: 'Ich höre gern Musik.', notes: 'la musique = die Musik' },
      { french: 'J\'aime aller au cinéma.', german: 'Ich gehe gern ins Kino.', notes: 'le cinéma = das Kino' },
      { french: 'J\'aime regarder la télé.', german: 'Ich sehe gern fern.', notes: 'la télé = der Fernseher (kurz für télévision)' },
      { french: 'J\'aime cuisiner.', german: 'Ich koche gern.', notes: 'cuisiner = kochen' },
      { french: 'J\'aime voyager.', german: 'Ich reise gern.', notes: 'voyager = reisen' }
    ]
  },

  // Section 11: dialogue informal
  {
    id: 'dialogue-hobbies',
    title: 'Dialog: Über Hobbies sprechen (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Léa und Tom sprechen über ihre Freizeit

**Léa:** Salut Tom! Quels sont tes loisirs?
**Tom:** J'aime beaucoup le sport. Je joue au football et je fais du vélo.
**Léa:** Moi, je préfère la musique. Je joue du piano.
**Tom:** Super! Tu joues souvent?
**Léa:** Oui, je joue tous les jours. Et toi, tu fais du sport tous les jours?
**Tom:** Non, je fais du sport trois fois par semaine. J'aime aussi lire.
**Léa:** Moi, je n'aime pas trop lire. Mais j'adore aller au cinéma!

---

**Beachte:**
- "Je joue au football" (jouer à) ABER "Je joue du piano" (jouer de)
- "trois fois par semaine" = dreimal pro Woche
- "tous les jours" = jeden Tag
- "je n'aime pas trop" = ich mag nicht so gern
    `
  },

  // Section 12: dialogue formal/interview
  {
    id: 'dialogue-interview',
    title: 'Dialog: Im Sportverein (Formell)',
    type: 'dialogue',
    content: `
**Situation:** Eine Frau erkundigt sich in einem Sportverein

**Mme Dubois:** Bonjour! Quelles activités proposez-vous?
**Le moniteur:** Bonjour! Nous faisons de la natation, du yoga et de la danse.
**Mme Dubois:** Est-ce que vous faites aussi de l'escalade?
**Le moniteur:** Oui, nous faisons de l'escalade le week-end.
**Mme Dubois:** Parfait. Je voudrais faire du yoga. C'est souvent?
**Le moniteur:** Le cours de yoga est deux fois par semaine.
**Mme Dubois:** Très bien, merci beaucoup!

---

**Beachte:**
- "faire de la natation / du yoga / de l'escalade" - immer faire + de + Artikel
- "deux fois par semaine" = zweimal pro Woche
- "le week-end" = am Wochenende
- "Je voudrais" = Ich möchte (höfliche Form)
    `
  },

  // Section 13: useful question phrases
  {
    id: 'question-phrases',
    title: 'Nützliche Fragen über Hobbies',
    type: 'example',
    content: `
Mit diesen Fragen kannst du andere nach ihren Hobbies fragen:
    `,
    examples: [
      { french: 'Quels sont tes loisirs?', german: 'Was sind deine Hobbies?', notes: 'Informell (tes)' },
      { french: 'Qu\'est-ce que tu aimes faire?', german: 'Was machst du gerne?', notes: 'Sehr häufig!' },
      { french: 'Tu fais du sport?', german: 'Treibst du Sport?' },
      { french: 'Tu joues d\'un instrument?', german: 'Spielst du ein Instrument?' },
      { french: 'Tu joues souvent?', german: 'Spielst du oft?' },
      { french: 'Quel est ton sport préféré?', german: 'Was ist dein Lieblingssport?', notes: 'préféré = bevorzugt/Lieblings-' }
    ]
  },

  // Section 14: tip on preposition choice
  {
    id: 'preposition-tip',
    title: 'Tipp: Die richtige Struktur wählen',
    type: 'tip',
    content: `
Bevor du über eine Aktivität sprichst, stelle dir drei Fragen:

**1. Ist es ein Musikinstrument?**
→ Dann **jouer de** (jouer du piano, jouer de la guitare)

**2. Ist es ein Ballsport oder ein Spiel?**
→ Dann **jouer à** (jouer au foot, jouer aux cartes)

**3. Ist es eine andere Aktivität (Schwimmen, Radfahren, Yoga)?**
→ Dann **faire de** (faire de la natation, faire du vélo)

**Und für "ich mag es zu tun":**
→ **aimer + Infinitiv** (j'aime lire, j'aime danser)

**Vergiss nicht die Artikelverschmelzung:**
- de + le = **du**, de + la = **de la**, de + l'
- à + le = **au**, à + la = **à la**, à + les = **aux**
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Verbs
  {
    id: 'lesson11-verb-faire',
    french: 'faire',
    german: 'machen / tun',
    english: 'to do / to make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je fais du sport.',
      german: 'Ich treibe Sport.'
    },
    notes: 'Unregelmäßig! je fais, tu fais, il fait, nous faisons, vous faites, ils font',
    level: 'A1',
    tags: ['lesson11', 'verb', 'essential', 'loisirs']
  },
  {
    id: 'lesson11-verb-jouer',
    french: 'jouer',
    german: 'spielen',
    english: 'to play',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je joue au tennis.',
      german: 'Ich spiele Tennis.'
    },
    notes: 'jouer à (Sport/Spiele), jouer de (Instrumente). Regelmäßiges -er Verb.',
    level: 'A1',
    tags: ['lesson11', 'verb', 'essential', 'loisirs']
  },
  {
    id: 'lesson11-verb-aimer',
    french: 'aimer',
    german: 'mögen / lieben',
    english: 'to like / to love',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime lire.',
      german: 'Ich lese gern.'
    },
    notes: 'aimer + Infinitiv = etwas gerne tun. Regelmäßiges -er Verb.',
    level: 'A1',
    tags: ['lesson11', 'verb', 'essential']
  },
  {
    id: 'lesson11-verb-adorer',
    french: 'adorer',
    german: 'sehr lieben / toll finden',
    english: 'to adore / to love',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'adore voyager.',
      german: 'Ich reise für mein Leben gern.'
    },
    notes: 'Stärker als "aimer". j\'adore, tu adores...',
    level: 'A1',
    tags: ['lesson11', 'verb', 'emotion']
  },
  {
    id: 'lesson11-verb-detester',
    french: 'détester',
    german: 'hassen / gar nicht mögen',
    english: 'to hate',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je déteste cuisiner.',
      german: 'Ich koche überhaupt nicht gern.'
    },
    notes: 'Gegenteil von aimer. Auch mit Infinitiv: détester + Infinitiv',
    level: 'A1',
    tags: ['lesson11', 'verb', 'emotion']
  },
  {
    id: 'lesson11-verb-lire',
    french: 'lire',
    german: 'lesen',
    english: 'to read',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime lire des livres.',
      german: 'Ich lese gern Bücher.'
    },
    notes: 'Unregelmäßig: je lis, tu lis, il lit, nous lisons...',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },
  {
    id: 'lesson11-verb-danser',
    french: 'danser',
    german: 'tanzen',
    english: 'to dance',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle aime danser.',
      german: 'Sie tanzt gern.'
    },
    notes: 'Regelmäßiges -er Verb',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },
  {
    id: 'lesson11-verb-voyager',
    french: 'voyager',
    german: 'reisen',
    english: 'to travel',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous aimons voyager.',
      german: 'Wir reisen gern.'
    },
    notes: 'le voyage = die Reise',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },
  {
    id: 'lesson11-verb-cuisiner',
    french: 'cuisiner',
    german: 'kochen',
    english: 'to cook',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime cuisiner.',
      german: 'Ich koche gern.'
    },
    notes: 'la cuisine = die Küche / das Kochen',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },
  {
    id: 'lesson11-verb-ecouter',
    french: 'écouter',
    german: 'hören / zuhören',
    english: 'to listen',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'aime écouter de la musique.',
      german: 'Ich höre gern Musik.'
    },
    notes: 'écouter de la musique = Musik hören',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },
  {
    id: 'lesson11-verb-regarder',
    french: 'regarder',
    german: 'ansehen / anschauen',
    english: 'to watch / to look at',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je regarde la télé.',
      german: 'Ich sehe fern.'
    },
    notes: 'regarder la télé = fernsehen',
    level: 'A1',
    tags: ['lesson11', 'verb', 'loisirs']
  },

  // Leisure noun
  {
    id: 'lesson11-noun-loisirs',
    french: 'les loisirs',
    german: 'die Freizeit / die Hobbies',
    english: 'leisure / hobbies',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Quels sont tes loisirs?',
      german: 'Was sind deine Hobbies?'
    },
    notes: 'Wird meist im Plural benutzt: les loisirs',
    level: 'A1',
    tags: ['lesson11', 'noun', 'loisirs', 'essential']
  },

  // Sports
  {
    id: 'lesson11-sport-sport',
    french: 'le sport',
    german: 'der Sport',
    english: 'sport',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je fais du sport.',
      german: 'Ich treibe Sport.'
    },
    notes: 'faire du sport = Sport treiben',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport', 'essential']
  },
  {
    id: 'lesson11-sport-football',
    french: 'le football',
    german: 'der Fußball',
    english: 'football / soccer',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il joue au football.',
      german: 'Er spielt Fußball.'
    },
    notes: 'Oft kurz "le foot". jouer au football',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-tennis',
    french: 'le tennis',
    german: 'das Tennis',
    english: 'tennis',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Tu joues au tennis?',
      german: 'Spielst du Tennis?'
    },
    notes: 'jouer au tennis',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-basket',
    french: 'le basket',
    german: 'der Basketball',
    english: 'basketball',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Nous jouons au basket.',
      german: 'Wir spielen Basketball.'
    },
    notes: 'Kurz für "le basketball". jouer au basket',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-natation',
    french: 'la natation',
    german: 'das Schwimmen',
    english: 'swimming',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle fait de la natation.',
      german: 'Sie geht schwimmen.'
    },
    notes: 'faire de la natation = schwimmen gehen',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-velo',
    french: 'le vélo',
    german: 'das Fahrrad / Radfahren',
    english: 'bike / cycling',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je fais du vélo.',
      german: 'Ich fahre Fahrrad.'
    },
    notes: 'faire du vélo = Fahrrad fahren',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-danse',
    french: 'la danse',
    german: 'der Tanz / das Tanzen',
    english: 'dance / dancing',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je fais de la danse.',
      german: 'Ich tanze (mache Tanzsport).'
    },
    notes: 'faire de la danse. Verb: danser',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport', 'loisirs']
  },
  {
    id: 'lesson11-sport-escalade',
    french: 'l\'escalade',
    german: 'das Klettern',
    english: 'climbing',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Nous faisons de l\'escalade.',
      german: 'Wir klettern.'
    },
    notes: 'Feminin, vor Vokal: faire de l\'escalade',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },
  {
    id: 'lesson11-sport-yoga',
    french: 'le yoga',
    german: 'das Yoga',
    english: 'yoga',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Ils font du yoga.',
      german: 'Sie machen Yoga.'
    },
    notes: 'faire du yoga',
    level: 'A1',
    tags: ['lesson11', 'noun', 'sport']
  },

  // Instruments
  {
    id: 'lesson11-instr-piano',
    french: 'le piano',
    german: 'das Klavier',
    english: 'piano',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je joue du piano.',
      german: 'Ich spiele Klavier.'
    },
    notes: 'jouer du piano (jouer DE bei Instrumenten!)',
    level: 'A1',
    tags: ['lesson11', 'noun', 'instrument', 'music']
  },
  {
    id: 'lesson11-instr-guitare',
    french: 'la guitare',
    german: 'die Gitarre',
    english: 'guitar',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle joue de la guitare.',
      german: 'Sie spielt Gitarre.'
    },
    notes: 'jouer de la guitare',
    level: 'A1',
    tags: ['lesson11', 'noun', 'instrument', 'music']
  },
  {
    id: 'lesson11-instr-violon',
    french: 'le violon',
    german: 'die Geige',
    english: 'violin',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il joue du violon.',
      german: 'Er spielt Geige.'
    },
    notes: 'jouer du violon',
    level: 'A1',
    tags: ['lesson11', 'noun', 'instrument', 'music']
  },
  {
    id: 'lesson11-instr-batterie',
    french: 'la batterie',
    german: 'das Schlagzeug',
    english: 'drums',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Tu joues de la batterie?',
      german: 'Spielst du Schlagzeug?'
    },
    notes: 'jouer de la batterie',
    level: 'A1',
    tags: ['lesson11', 'noun', 'instrument', 'music']
  },

  // Entertainment
  {
    id: 'lesson11-ent-musique',
    french: 'la musique',
    german: 'die Musik',
    english: 'music',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'J\'écoute de la musique.',
      german: 'Ich höre Musik.'
    },
    notes: 'écouter de la musique = Musik hören',
    level: 'A1',
    tags: ['lesson11', 'noun', 'music', 'loisirs']
  },
  {
    id: 'lesson11-ent-cinema',
    french: 'le cinéma',
    german: 'das Kino',
    english: 'cinema / movies',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'aime aller au cinéma.',
      german: 'Ich gehe gern ins Kino.'
    },
    notes: 'aller au cinéma = ins Kino gehen',
    level: 'A1',
    tags: ['lesson11', 'noun', 'loisirs']
  },
  {
    id: 'lesson11-ent-lecture',
    french: 'la lecture',
    german: 'das Lesen / die Lektüre',
    english: 'reading',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La lecture est mon loisir préféré.',
      german: 'Lesen ist mein Lieblingshobby.'
    },
    notes: 'Verb: lire (lesen)',
    level: 'A1',
    tags: ['lesson11', 'noun', 'loisirs']
  },
  {
    id: 'lesson11-ent-tele',
    french: 'la télé',
    german: 'der Fernseher / das Fernsehen',
    english: 'TV',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je regarde la télé.',
      german: 'Ich sehe fern.'
    },
    notes: 'Kurz für "la télévision". regarder la télé',
    level: 'A1',
    tags: ['lesson11', 'noun', 'loisirs']
  },

  // Frequency adverbs
  {
    id: 'lesson11-freq-toujours',
    french: 'toujours',
    german: 'immer',
    english: 'always',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je fais toujours du sport.',
      german: 'Ich treibe immer Sport.'
    },
    notes: 'Steht nach dem konjugierten Verb',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency']
  },
  {
    id: 'lesson11-freq-souvent',
    french: 'souvent',
    german: 'oft',
    english: 'often',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il joue souvent au foot.',
      german: 'Er spielt oft Fußball.'
    },
    notes: 'Steht nach dem konjugierten Verb',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency']
  },
  {
    id: 'lesson11-freq-quelquefois',
    french: 'quelquefois',
    german: 'manchmal',
    english: 'sometimes',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Elle lit quelquefois.',
      german: 'Sie liest manchmal.'
    },
    notes: 'Synonym: parfois',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency']
  },
  {
    id: 'lesson11-freq-rarement',
    french: 'rarement',
    german: 'selten',
    english: 'rarely',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Tu vas rarement au cinéma.',
      german: 'Du gehst selten ins Kino.'
    },
    notes: 'Steht nach dem Verb',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency']
  },
  {
    id: 'lesson11-freq-jamais',
    french: 'ne... jamais',
    german: 'nie / niemals',
    english: 'never',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je ne joue jamais aux cartes.',
      german: 'Ich spiele nie Karten.'
    },
    notes: 'Braucht "ne" vor dem Verb: ne + Verb + jamais',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency', 'negation']
  },

  // Time expressions / extras
  {
    id: 'lesson11-time-foispar',
    french: 'une fois par semaine',
    german: 'einmal pro Woche',
    english: 'once a week',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je fais du yoga une fois par semaine.',
      german: 'Ich mache einmal pro Woche Yoga.'
    },
    notes: 'deux fois = zweimal, trois fois = dreimal',
    level: 'A1',
    tags: ['lesson11', 'adverb', 'frequency', 'time']
  },
  {
    id: 'lesson11-adj-prefere',
    french: 'préféré',
    german: 'bevorzugt / Lieblings-',
    english: 'favourite',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Quel est ton sport préféré?',
      german: 'Was ist dein Lieblingssport?'
    },
    notes: 'Feminin: préférée. Steht nach dem Nomen.',
    level: 'A1',
    tags: ['lesson11', 'adjective', 'loisirs']
  },
  {
    id: 'lesson11-game-cartes',
    french: 'les cartes',
    german: 'die (Spiel-)Karten',
    english: 'cards',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ils jouent aux cartes.',
      german: 'Sie spielen Karten.'
    },
    notes: 'jouer aux cartes (à + les = aux)',
    level: 'A1',
    tags: ['lesson11', 'noun', 'game']
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
    question: 'Was bedeutet "faire" auf Deutsch?',
    options: ['spielen', 'machen / tun', 'mögen', 'lesen'],
    correctAnswer: 'machen / tun',
    explanation: '"faire" bedeutet "machen" oder "tun". Es wird für viele Aktivitäten benutzt: faire du sport.',
    hints: [
      'Man benutzt es für "faire du sport".',
      'Es bedeutet "machen / tun".'
    ],
    tags: ['vocabulary', 'faire']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Struktur benutzt man für Musikinstrumente?',
    options: ['jouer à', 'jouer de', 'faire à', 'aimer à'],
    correctAnswer: 'jouer de',
    explanation: 'Für Instrumente benutzt man "jouer de": jouer du piano, jouer de la guitare. Für Sport benutzt man "jouer à".',
    hints: [
      'Es ist NICHT "jouer à" (das ist für Sport).',
      'Bei Instrumenten benutzt man "jouer de".'
    ],
    tags: ['grammar', 'jouer']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je joue ___ piano. (Ich spiele Klavier.)',
    correctAnswer: ['du'],
    explanation: 'Klavier ist ein Instrument → jouer de. de + le piano = du piano.',
    hints: [
      'Instrument → jouer de. de + le = ?',
      'Es ist "du" (de + le).'
    ],
    tags: ['jouer-de', 'instruments']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je joue ___ football. (Ich spiele Fußball.)',
    correctAnswer: ['au'],
    explanation: 'Fußball ist ein Sport → jouer à. à + le football = au football.',
    hints: [
      'Sport → jouer à. à + le = ?',
      'Es ist "au" (à + le).'
    ],
    tags: ['jouer-a', 'sports']
  },
  {
    id: 'guided-5',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je fais ___ sport. (Ich treibe Sport.)',
    correctAnswer: ['du'],
    explanation: 'faire + de + Artikel. le sport ist maskulin: de + le = du.',
    hints: [
      'faire de + Artikel. de + le = ?',
      'Es ist "du".'
    ],
    tags: ['faire-de', 'sports']
  },
  {
    id: 'guided-6',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: Ich lese gern. (aimer + Infinitiv)',
    correctAnswer: ['J\'aime lire.', 'J\'aime lire', 'j\'aime lire'],
    explanation: '"aimer + Infinitiv" = etwas gerne tun. "J\'aime lire" = Ich lese gern.',
    hints: [
      'Benutze "J\'aime" + Infinitiv von "lesen".',
      'Es ist "J\'aime lire."'
    ],
    tags: ['aimer', 'infinitive', 'translation']
  },
  {
    id: 'guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "souvent"?',
    options: ['immer', 'oft', 'nie', 'selten'],
    correctAnswer: 'oft',
    explanation: '"souvent" [suvɑ̃] bedeutet "oft". Es ist ein Häufigkeitsadverb.',
    hints: [
      'Es liegt zwischen "immer" und "manchmal".',
      'Es bedeutet "oft".'
    ],
    tags: ['frequency', 'vocabulary']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welches Wort bedeutet "die Freizeit / die Hobbies"?',
    options: ['le sport', 'les loisirs', 'la musique', 'le cinéma'],
    correctAnswer: 'les loisirs',
    explanation: '"les loisirs" bedeutet "die Freizeit / die Hobbies". Quels sont tes loisirs? = Was sind deine Hobbies?',
    hints: [
      'Es wird im Plural benutzt.',
      'Es ist "les loisirs".'
    ],
    tags: ['vocabulary', 'loisirs']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Elle joue ___ guitare. (Sie spielt Gitarre.)',
    correctAnswer: ['de la'],
    explanation: 'Gitarre ist ein Instrument → jouer de. la guitare ist feminin: de + la = de la.',
    hints: [
      'Instrument → jouer de. Gitarre ist feminin.',
      'Es ist "de la".'
    ],
    tags: ['jouer-de', 'instruments']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Elle fait ___ natation. (Sie geht schwimmen.)',
    correctAnswer: ['de la'],
    explanation: 'faire + de + Artikel. la natation ist feminin: de + la = de la.',
    hints: [
      'faire de + Artikel. natation ist feminin.',
      'Es ist "de la".'
    ],
    tags: ['faire-de', 'sports']
  },
  {
    id: 'independent-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous faisons ___ escalade. (Wir klettern.)',
    correctAnswer: ['de l\'', 'de l’'],
    explanation: '"escalade" beginnt mit einem Vokal, daher de + l\' = de l\'escalade.',
    hints: [
      'Das Wort beginnt mit einem Vokal (e).',
      'Es ist "de l\'".'
    ],
    tags: ['faire-de', 'sports', 'elision']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ils jouent ___ cartes. (Sie spielen Karten.)',
    correctAnswer: ['aux'],
    explanation: 'Spiel → jouer à. "les cartes" ist Plural: à + les = aux.',
    hints: [
      'Spiel → jouer à. cartes ist Plural.',
      'à + les = "aux".'
    ],
    tags: ['jouer-a', 'games', 'plural']
  },
  {
    id: 'independent-5',
    type: 'verb-conjugation',
    difficulty: 'medium',
    question: 'Konjugiere "faire" für "nous": Nous ___ du yoga.',
    correctAnswer: ['faisons'],
    explanation: 'Die Form von faire für "nous" ist "faisons" [fəzɔ̃]. Achtung: ai wird hier wie [ə] gesprochen!',
    hints: [
      'Es ist eine unregelmäßige Form mit "s".',
      'Es ist "faisons".'
    ],
    tags: ['faire', 'conjugation']
  },
  {
    id: 'independent-6',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz ist korrekt für "Sie spielt Klavier"?',
    options: ['Elle joue au piano.', 'Elle joue du piano.', 'Elle fait du piano.', 'Elle joue à la piano.'],
    correctAnswer: 'Elle joue du piano.',
    explanation: 'Klavier ist ein Instrument → jouer de. de + le piano = du piano. "jouer au" wäre für Sport.',
    hints: [
      'Instrument = jouer de, nicht jouer à.',
      'Es ist "Elle joue du piano."'
    ],
    tags: ['jouer-de', 'instruments']
  },
  {
    id: 'independent-7',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich treibe oft Sport. (faire + souvent)',
    correctAnswer: ['Je fais souvent du sport.', 'Je fais souvent du sport', 'je fais souvent du sport'],
    explanation: 'Das Häufigkeitsadverb "souvent" steht nach dem konjugierten Verb: Je fais souvent du sport.',
    hints: [
      'Benutze "Je fais" + souvent + "du sport".',
      'Das Adverb steht nach dem Verb: "Je fais souvent du sport."'
    ],
    tags: ['faire', 'frequency', 'translation']
  },
  {
    id: 'independent-8',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verneinung: Je ___ joue ___ aux échecs. (Ich spiele nie Schach.)',
    correctAnswer: ['ne, jamais', 'ne jamais'],
    explanation: '"jamais" (nie) braucht "ne" vor dem Verb: ne + Verb + jamais. Je ne joue jamais aux échecs.',
    hints: [
      '"nie" braucht zwei Teile: ne ... jamais.',
      'Es ist "ne" (vor dem Verb) und "jamais" (danach).'
    ],
    tags: ['negation', 'frequency', 'jamais']
  },
  {
    id: 'independent-9',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: J\'adore aller au cinéma.',
    correctAnswer: ['Ich gehe für mein Leben gern ins Kino.', 'Ich gehe sehr gern ins Kino.', 'Ich liebe es, ins Kino zu gehen.', 'Ich gehe total gern ins Kino.'],
    explanation: '"adorer" ist stärker als "aimer". "aller au cinéma" = ins Kino gehen.',
    hints: [
      '"adorer" bedeutet "sehr gern mögen / lieben".',
      'Es ist z.B. "Ich gehe für mein Leben gern ins Kino."'
    ],
    tags: ['adorer', 'cinema', 'translation']
  },
  {
    id: 'independent-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Du machst etwas einmal pro Woche. Wie sagt man "einmal pro Woche"?',
    options: ['une fois par semaine', 'un jour par semaine', 'une fois par jour', 'tous les jours'],
    correctAnswer: 'une fois par semaine',
    explanation: '"une fois par semaine" = einmal pro Woche. "fois" = Mal, "semaine" = Woche.',
    hints: [
      '"fois" bedeutet "Mal", "semaine" bedeutet "Woche".',
      'Es ist "une fois par semaine".'
    ],
    tags: ['frequency', 'time']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist GRAMMATISCH KORREKT?',
    options: [
      'Je joue du tennis.',
      'Je fais de la piano.',
      'Je joue de la guitare.',
      'Je joue à piano.'
    ],
    correctAnswer: 'Je joue de la guitare.',
    explanation: 'Gitarre ist ein Instrument → jouer de la guitare (korrekt). Tennis = jouer AU tennis (Sport), Klavier = jouer DU piano.',
    tags: ['jouer-a', 'jouer-de', 'review']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige: Le week-end, nous ___ (faire) ___ escalade et nous ___ (jouer) ___ cartes.',
    correctAnswer: ['faisons, de l\', jouons, aux', 'faisons de l\' jouons aux'],
    explanation: 'faire → faisons; escalade (Vokal) → de l\'; jouer → jouons; cartes (Spiel, Plural) → aux. "Nous faisons de l\'escalade et nous jouons aux cartes."',
    tags: ['faire', 'jouer', 'conjugation', 'review']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Er spielt nie Fußball, aber er spielt oft Klavier.',
    correctAnswer: [
      'Il ne joue jamais au football, mais il joue souvent du piano.',
      'Il ne joue jamais au foot, mais il joue souvent du piano.',
      'Il ne joue jamais au football mais il joue souvent du piano.'
    ],
    explanation: 'Sport → jouer au (football) mit Verneinung ne...jamais. Instrument → jouer du (piano). "souvent" steht nach dem Verb.',
    tags: ['jouer-a', 'jouer-de', 'negation', 'frequency', 'translation']
  },
  {
    id: 'assess-4',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Frage: "Tu joues d\'un instrument?" Welche Antwort passt grammatisch?',
    options: [
      'Oui, je joue au violon.',
      'Oui, je joue du violon.',
      'Oui, je fais du violon.',
      'Oui, j\'aime au violon.'
    ],
    correctAnswer: 'Oui, je joue du violon.',
    explanation: 'Geige (le violon) ist ein Instrument → jouer du violon. "jouer au" wäre falsch (das ist für Sport).',
    tags: ['jouer-de', 'instruments', 'review']
  },
  {
    id: 'assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Ergänze die Präposition/Artikel: Elle ___ (aimer) faire ___ vélo et jouer ___ basket. (Sie fährt gern Rad und spielt Basketball.)',
    correctAnswer: ['aime, du, au', 'aime du au'],
    explanation: 'aimer → aime; faire du vélo (le vélo, m → du); jouer au basket (Sport, à + le → au). "Elle aime faire du vélo et jouer au basket."',
    tags: ['aimer', 'faire-de', 'jouer-a', 'review']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Je fais de la danse deux fois par semaine et j\'adore ça.',
    correctAnswer: [
      'Ich tanze zweimal pro Woche und ich liebe es.',
      'Ich mache zweimal pro Woche Tanzsport und ich liebe es.',
      'Ich tanze zweimal die Woche und ich finde es toll.'
    ],
    explanation: '"faire de la danse" = tanzen / Tanzsport machen; "deux fois par semaine" = zweimal pro Woche; "j\'adore ça" = ich liebe es / ich finde es toll.',
    tags: ['faire-de', 'frequency', 'adorer', 'translation']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson11: Lesson = {
  meta: {
    id: 'lesson-11',
    number: 11,
    title: 'Les Loisirs',
    titleGerman: 'Hobbies',
    objectives: [
      'Über Hobbies, Freizeitaktivitäten und Interessen sprechen können',
      'Die Struktur "faire + de + Artikel" für Sport und Aktivitäten beherrschen',
      'Den Unterschied zwischen "jouer à" (Sport/Spiele) und "jouer de" (Instrumente) verstehen',
      'Mit "aimer + Infinitiv" ausdrücken, was man gerne macht',
      'Häufigkeitsadverbien (souvent, toujours, jamais) korrekt einsetzen',
      'Das unregelmäßige Verb "faire" konjugieren'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: [
      'lesson-01',
      'lesson-02',
      'lesson-03',
      'lesson-04',
      'lesson-05',
      'lesson-06',
      'lesson-07',
      'lesson-08',
      'lesson-09',
      'lesson-10'
    ],
    tags: ['loisirs', 'sport', 'music', 'faire', 'jouer', 'aimer', 'frequency', 'hobbies']
  },

  introduction: {
    objectives: [
      'Über die eigenen Hobbies und Interessen sprechen können',
      'Die richtige Struktur wählen: faire de, jouer à oder jouer de',
      'Mit "aimer + Infinitiv" Vorlieben ausdrücken',
      'Sagen, wie oft man eine Aktivität macht (Häufigkeitsadverbien)'
    ],
    motivation: `
Hobbies sind eines der häufigsten Gesprächsthemen beim Kennenlernen! In dieser Lektion lernst du,
über deine Freizeit zu sprechen - welchen Sport du treibst, welches Instrument du spielst und was du gerne machst.

Der Schlüssel sind drei Strukturen: "faire de" für Aktivitäten, "jouer à" für Sport und Spiele,
und "jouer de" für Instrumente. Mit "aimer + Infinitiv" sagst du außerdem, was dir Spaß macht.
Damit kannst du schon ganze Gespräche über deine Interessen führen!
    `,
    culturalNote: `
**Sport und Freizeit in Frankreich**

In Frankreich sind Sportvereine (les clubs de sport) und kulturelle Aktivitäten sehr beliebt.
Besonders Fußball (le football) ist Nationalsport - der Gewinn der Weltmeisterschaft wird groß gefeiert!
Daneben sind auch Radsport (die Tour de France!), Rugby und Pétanque (das südfranzösische Boule-Spiel) sehr populär.

**Kultur als Hobby**

Frankreich legt großen Wert auf Kultur: ins Kino oder Theater gehen, lesen und Museen besuchen
gehören für viele zur Freizeit dazu. Die Frage "Quels sont tes loisirs?" (Was sind deine Hobbies?)
hört man beim Kennenlernen sehr oft.
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
      'Du kannst über Hobbies und Freizeitaktivitäten sprechen (les loisirs)',
      'Du beherrschst "faire + de + Artikel" (faire du sport, faire de la natation, faire de l\'escalade)',
      'Du kennst den Unterschied: "jouer à" für Sport/Spiele, "jouer de" für Instrumente',
      'Du kannst mit "aimer + Infinitiv" sagen, was du gerne machst (j\'aime lire, j\'aime danser)',
      'Du verwendest Häufigkeitsadverbien richtig (toujours, souvent, jamais)',
      'Du kannst das unregelmäßige Verb "faire" konjugieren (je fais, nous faisons, ils font)',
      'Du kennst Wortschatz zu Sport, Instrumenten und Unterhaltung'
    ],
    nextLesson: 'lesson-12'
  }
};
