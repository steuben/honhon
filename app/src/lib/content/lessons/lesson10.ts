import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 10: Les Transports - Transport
 * Transportation & Directions in French for German speakers
 *
 * Level: A1
 * Duration: ~90 minutes
 *
 * Topics:
 * - Means of transport (le bus, le métro, le train, etc.)
 * - The verb "prendre" with transport (prendre le bus/le métro/le train)
 * - The imperative mood (tourne/tournez, va/allez, prends/prenez)
 * - Direction prepositions (à gauche, à droite, tout droit, jusqu'à, au coin de)
 * - Asking for and giving directions
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Means of transport
  {
    id: 'transports-overview',
    title: 'Die Verkehrsmittel (Les transports)',
    type: 'table',
    content: `
In Frankreich - besonders in Paris - sind die öffentlichen Verkehrsmittel sehr wichtig.
Hier sind die wichtigsten Wörter mit ihren Artikeln (Achtung: jedes Verkehrsmittel hat ein Geschlecht!).

| Französisch | Aussprache | Deutsch | Artikel beachten |
|-------------|------------|---------|------------------|
| le bus | [bys] | der Bus | maskulin |
| le métro | [metʁo] | die U-Bahn | maskulin |
| le train | [tʁɛ̃] | der Zug | maskulin, Nasalvokal! |
| la voiture | [vwatyʁ] | das Auto | feminin |
| le vélo | [velo] | das Fahrrad | maskulin |
| l'avion (m) | [avjɔ̃] | das Flugzeug | maskulin, Nasalvokal! |
| le taxi | [taksi] | das Taxi | maskulin |
| le tramway | [tʁamwɛ] | die Straßenbahn | maskulin |
| à pied | [a pje] | zu Fuß | KEIN Verkehrsmittel - "mit den Füßen" |
    `,
    germanExplanation: 'Im Französischen ist "le métro" maskulin - anders als das deutsche "die U-Bahn"!'
  },

  // Section 2: prendre conjugation
  {
    id: 'verb-prendre',
    title: 'Das Verb "prendre" (nehmen)',
    type: 'table',
    content: `
"Prendre" bedeutet "nehmen" und ist DAS Verb, um über Verkehrsmittel zu sprechen.
Es ist UNREGELMÄSSIG - die Formen müssen auswendig gelernt werden.

## Konjugation im Präsens (Présent)

| Pronomen | prendre | Aussprache | Deutsch |
|----------|---------|------------|---------|
| je | prends | [pʁɑ̃] | ich nehme |
| tu | prends | [pʁɑ̃] | du nimmst |
| il/elle | prend | [pʁɑ̃] | er/sie nimmt |
| nous | prenons | [pʁənɔ̃] | wir nehmen |
| vous | prenez | [pʁəne] | ihr nehmt / Sie nehmen |
| ils/elles | prennent | [pʁɛn] | sie nehmen |

**Merkhilfe:** Die drei Singularformen (prends, prends, prend) klingen ALLE gleich: [pʁɑ̃]!
Erst im Plural hört man Unterschiede.
    `
  },

  // Section 3: prendre with transport
  {
    id: 'prendre-transport',
    title: 'prendre + Verkehrsmittel',
    type: 'example',
    content: `
Um zu sagen "Ich fahre mit dem Bus/Zug/...", benutzt man im Französischen NICHT "fahren mit",
sondern **prendre + bestimmter Artikel + Verkehrsmittel** ("ich nehme den Bus").

**Wichtig:** Nach "prendre" steht der bestimmte Artikel (le/la/l'), NICHT "mit"!
    `,
    examples: [
      { french: 'Je prends le bus.', german: 'Ich fahre mit dem Bus.', notes: 'Wörtlich: "Ich nehme den Bus."' },
      { french: 'Je prends le métro.', german: 'Ich fahre mit der U-Bahn.', notes: 'le métro = maskulin' },
      { french: 'Nous prenons le train.', german: 'Wir fahren mit dem Zug.', notes: 'Pluralform: prenons' },
      { french: 'Tu prends un taxi?', german: 'Nimmst du ein Taxi?', notes: 'Hier mit unbestimmtem Artikel "un"' }
    ]
  },

  // Section 4: aller à + transport / exceptions
  {
    id: 'aller-a-pied',
    title: 'Ausnahmen: à pied, à vélo, en voiture',
    type: 'tip',
    content: `
Nicht immer benutzt man "prendre". Für manche Fortbewegungsarten sagt man **aller à/en** (gehen/fahren mit):

**Mit "à" (auf/zu):**
- à pied = zu Fuß
- à vélo = mit dem Fahrrad
- à moto = mit dem Motorrad

**Mit "en" (in/mit):**
- en voiture = mit dem Auto
- en bus = mit dem Bus (Alternative zu "prendre le bus")
- en train = mit dem Zug
- en avion = mit dem Flugzeug

**Faustregel:** "en" für Fahrzeuge, in die man EINSTEIGT (Auto, Zug, Flugzeug);
"à" für Fortbewegung, auf der man SITZT oder die ohne Fahrzeug ist (Fahrrad, zu Fuß).

Beispiele:
- Je vais à l'école à pied. (Ich gehe zu Fuß zur Schule.)
- Elle va au travail en voiture. (Sie fährt mit dem Auto zur Arbeit.)
    `
  },

  // Section 5: The imperative - introduction
  {
    id: 'imperative-intro',
    title: 'Der Imperativ (L\'impératif)',
    type: 'explanation',
    content: `
Der **Imperativ** ist die Befehlsform - man benutzt ihn für Anweisungen, Aufforderungen und
besonders, um den **Weg zu beschreiben** ("Geh geradeaus!", "Biegen Sie links ab!").

**Das Wichtigste:** Im Imperativ fällt das Personalpronomen WEG!

- Statt "tu tournes" sagt man einfach "**Tourne!**" (Biege ab!)
- Statt "vous tournez" sagt man "**Tournez!**" (Biegen Sie ab!)

Es gibt nur **drei Formen** im Imperativ:
1. **tu**-Form (informell, eine Person)
2. **nous**-Form (Aufforderung "lass uns...")
3. **vous**-Form (formell oder mehrere Personen)

**Wegbeschreibung:** Im Alltag benutzt man meistens die **vous**-Form (höflich gegenüber Fremden)
oder die **tu**-Form (bei Freunden).
    `,
    germanExplanation: 'Wie im Deutschen ("Geh!", "Gehen Sie!") gibt es im Imperativ kein Pronomen.'
  },

  // Section 6: Imperative table for -er verbs
  {
    id: 'imperative-er-verbs',
    title: 'Imperativ bei -er-Verben (tourner, continuer)',
    type: 'table',
    content: `
Bei regelmäßigen **-er-Verben** (wie *tourner* = abbiegen, *continuer* = weitergehen) ist der Imperativ
einfach zu bilden. **ACHTUNG:** In der "tu"-Form fällt das -s weg!

| Verb | tu-Form | nous-Form | vous-Form | Deutsch |
|------|---------|-----------|-----------|---------|
| tourner | tourne! | tournons! | tournez! | abbiegen |
| continuer | continue! | continuons! | continuez! | weitergehen |
| traverser | traverse! | traversons! | traversez! | überqueren |
| marcher | marche! | marchons! | marchez! | gehen/laufen |

**Wichtige Regel:** Bei -er-Verben verliert die "tu"-Form ihr -s:
- Präsens: tu tournes → Imperativ: **tourne!** (ohne -s)
- Präsens: tu continues → Imperativ: **continue!** (ohne -s)
    `,
    germanExplanation: 'Der Wegfall des -s gilt NUR für -er-Verben in der tu-Form.'
  },

  // Section 7: Irregular imperatives aller / prendre
  {
    id: 'imperative-irregular',
    title: 'Imperativ von "aller" und "prendre"',
    type: 'table',
    content: `
Bei den unregelmäßigen Verben *aller* (gehen) und *prendre* (nehmen) muss man die Formen lernen.
Diese beiden sind für Wegbeschreibungen besonders wichtig!

| Verb | tu-Form | nous-Form | vous-Form | Deutsch |
|------|---------|-----------|-----------|---------|
| aller | va! | allons! | allez! | geh! / gehen Sie! |
| prendre | prends! | prenons! | prenez! | nimm! / nehmen Sie! |

**Beispiele für Wegbeschreibungen:**
- Va tout droit! (Geh geradeaus!) - informell
- Allez tout droit! (Gehen Sie geradeaus!) - formell
- Prends la première rue à droite! (Nimm die erste Straße rechts!)
- Prenez le métro ligne 1! (Nehmen Sie die Metro-Linie 1!)

**Achtung:** "aller" hat in der tu-Form **va** (ohne -s), genau wie die -er-Verben.
    `
  },

  // Section 8: Direction prepositions
  {
    id: 'directions',
    title: 'Richtungsangaben (Les directions)',
    type: 'table',
    content: `
Diese Ausdrücke brauchst du, um den Weg zu beschreiben oder zu verstehen:

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| à gauche | [a ɡoʃ] | links / nach links |
| à droite | [a dʁwat] | rechts / nach rechts |
| tout droit | [tu dʁwa] | geradeaus |
| jusqu'à | [ʒysk a] | bis (zu) |
| au coin de | [o kwɛ̃ də] | an der Ecke von |
| en face de | [ɑ̃ fas də] | gegenüber von |
| à côté de | [a kote də] | neben |
| près de | [pʁɛ də] | in der Nähe von |
| loin de | [lwɛ̃ də] | weit weg von |

**Wichtige Unterscheidung:**
- **à droite** [dʁwat] = rechts (Richtung)
- **tout droit** [tu dʁwa] = geradeaus

Diese werden oft verwechselt! "droite" hat ein -t am Ende [dʁwat], "droit" ist stumm [dʁwa].
    `,
    germanExplanation: 'Verwechsle nicht "à droite" (rechts) mit "tout droit" (geradeaus)!'
  },

  // Section 9: Places vocabulary
  {
    id: 'places',
    title: 'Orte in der Stadt (Les lieux)',
    type: 'table',
    content: `
Damit du Ziele angeben kannst, hier wichtige Orte:

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| la gare | [ɡaʁ] | der Bahnhof |
| la station de métro | [stasjɔ̃] | die Metro-Station |
| l'arrêt de bus (m) | [aʁɛ] | die Bushaltestelle |
| la rue | [ʁy] | die Straße |
| la place | [plas] | der Platz |
| le carrefour | [kaʁfuʁ] | die Kreuzung |
| le feu (rouge) | [fø] | die Ampel |
| l'aéroport (m) | [aeʁopɔʁ] | der Flughafen |

**Merke:** "jusqu'au feu" = bis zur Ampel; "au carrefour" = an der Kreuzung.
    `
  },

  // Section 10: Asking for directions
  {
    id: 'asking-directions',
    title: 'Nach dem Weg fragen',
    type: 'example',
    content: `
So fragst du höflich nach dem Weg. Vergiss nicht: IMMER mit "Pardon" oder "Excusez-moi" beginnen!
    `,
    examples: [
      { french: 'Pardon, où est la gare?', german: 'Entschuldigung, wo ist der Bahnhof?', notes: 'Einfachste Frage' },
      { french: 'Excusez-moi, pour aller à la gare?', german: 'Entschuldigung, wie komme ich zum Bahnhof?', notes: 'Wörtlich: "um zum Bahnhof zu gehen?"' },
      { french: 'C\'est loin?', german: 'Ist es weit?', notes: 'Nützliche Nachfrage' },
      { french: 'C\'est par où?', german: 'Wo geht es lang?', notes: 'Informell' },
      { french: 'Il y a une station de métro près d\'ici?', german: 'Gibt es eine Metro-Station in der Nähe?', notes: '"près d\'ici" = in der Nähe von hier' }
    ]
  },

  // Section 11: Dialogue 1 - asking a stranger (formal)
  {
    id: 'dialogue-stranger',
    title: 'Dialog: Nach dem Weg fragen (formell)',
    type: 'dialogue',
    content: `
**Situation:** Ein Tourist fragt einen Passanten nach dem Weg zur Metro.

**Touriste:** Pardon, monsieur! Pour aller à la station de métro, s'il vous plaît?
**Passant:** Bien sûr. Continuez tout droit jusqu'au feu.
**Touriste:** D'accord, tout droit jusqu'au feu...
**Passant:** Ensuite, tournez à gauche. La station est au coin de la rue.
**Touriste:** C'est loin?
**Passant:** Non, c'est à cinq minutes à pied.
**Touriste:** Merci beaucoup, monsieur!
**Passant:** De rien. Bonne journée!

---

**Beachte:**
- Der Passant benutzt die **vous**-Form des Imperativs (continuez, tournez) - höflich!
- "jusqu'au feu" = bis zur Ampel (jusqu'à + le feu = jusqu'au feu)
- "à cinq minutes à pied" = fünf Minuten zu Fuß
- "Ensuite" = danach/anschließend - sehr nützlich für Wegbeschreibungen
    `
  },

  // Section 12: Dialogue 2 - friends, informal, transport
  {
    id: 'dialogue-friends',
    title: 'Dialog: Mit dem Freund (informell)',
    type: 'dialogue',
    content: `
**Situation:** Zwei Freunde überlegen, wie sie zum Konzert kommen.

**Léa:** On prend le bus ou le métro pour aller au concert?
**Tom:** Prends le métro, c'est plus rapide!
**Léa:** D'accord. Quelle ligne?
**Tom:** Prends la ligne 4, direction Montparnasse.
**Léa:** Et après?
**Tom:** Descends à Saint-Michel. Le concert est juste à côté.
**Léa:** Super! Et toi, tu viens comment?
**Tom:** Moi, je viens à vélo!

---

**Beachte:**
- Hier wird die **tu**-Form des Imperativs benutzt (prends, descends) - unter Freunden
- "plus rapide" = schneller
- "Quelle ligne?" = Welche Linie?
- "descendre" = aussteigen (Imperativ tu: descends)
- "je viens à vélo" = ich komme mit dem Fahrrad ("à vélo", nicht "en vélo")
    `
  },

  // Section 13: jusqu'à contractions
  {
    id: 'jusqua-contractions',
    title: 'jusqu\'à + Artikel: Zusammenziehungen',
    type: 'tip',
    content: `
"jusqu'à" (bis zu) verschmilzt mit den Artikeln **le** und **les** - genau wie "à" allein:

| jusqu'à + Artikel | wird zu | Beispiel |
|-------------------|---------|----------|
| jusqu'à + le | **jusqu'au** | jusqu'au feu (bis zur Ampel) |
| jusqu'à + les | **jusqu'aux** | jusqu'aux feux (bis zu den Ampeln) |
| jusqu'à + la | jusqu'à la (keine Änderung) | jusqu'à la gare (bis zum Bahnhof) |
| jusqu'à + l' | jusqu'à l' (keine Änderung) | jusqu'à l'église (bis zur Kirche) |

**Merke:** Nur bei **le** → au und **les** → aux gibt es eine Verschmelzung.
Bei **la** und **l'** bleibt alles wie es ist.
    `
  },

  // Section 14: ordinal numbers for streets
  {
    id: 'ordinals-streets',
    title: 'Die erste/zweite Straße (Ordnungszahlen)',
    type: 'example',
    content: `
Bei Wegbeschreibungen sagt man oft "die erste Straße rechts" usw. Hier die wichtigsten Ordnungszahlen:
    `,
    examples: [
      { french: 'la première rue à droite', german: 'die erste Straße rechts', notes: 'premier (m) / première (f)' },
      { french: 'la deuxième rue à gauche', german: 'die zweite Straße links', notes: 'deuxième' },
      { french: 'la troisième rue tout droit', german: 'die dritte Straße geradeaus', notes: 'troisième' },
      { french: 'Prends la première à droite.', german: 'Nimm die erste (Straße) rechts.', notes: '"rue" kann weggelassen werden' }
    ]
  },

  // Section 15: cultural note - Paris metro
  {
    id: 'metro-culture',
    title: 'Kultur: Die Pariser Metro',
    type: 'explanation',
    content: `
Die **Metro** ist das Herz des Pariser Nahverkehrs. Ein paar nützliche Dinge:

**Linien & Richtungen:**
- Metro-Linien heißen "ligne 1", "ligne 2" usw.
- Die Richtung gibt man mit der Endstation an: "direction Château de Vincennes"
- Auf den Schildern steht "direction" + Name der letzten Station

**Wichtige Wörter:**
- une correspondance = eine Umsteigeverbindung
- un billet / un ticket = ein Fahrschein
- composter = (Ticket) entwerten
- la sortie = der Ausgang
- l'entrée = der Eingang

**Tipp:** "Prochain arrêt" hörst du in der Metro - es bedeutet "nächste Haltestelle".
    `,
    germanExplanation: 'In Paris sagt man die Richtung über den Namen der Endstation an, nicht über Himmelsrichtungen.'
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Means of transport
  {
    id: 'lesson10-transport-bus',
    french: 'le bus',
    german: 'der Bus',
    english: 'the bus',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je prends le bus tous les jours.',
      german: 'Ich fahre jeden Tag mit dem Bus.'
    },
    notes: 'Aussprache: [bys]. Mit "prendre": prendre le bus.',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun', 'essential']
  },
  {
    id: 'lesson10-transport-metro',
    french: 'le métro',
    german: 'die U-Bahn',
    english: 'the subway/metro',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le métro est très rapide à Paris.',
      german: 'Die U-Bahn ist in Paris sehr schnell.'
    },
    notes: 'ACHTUNG: maskulin im Französischen, anders als deutsches "die U-Bahn"!',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun', 'essential']
  },
  {
    id: 'lesson10-transport-train',
    french: 'le train',
    german: 'der Zug',
    english: 'the train',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Nous prenons le train pour Lyon.',
      german: 'Wir fahren mit dem Zug nach Lyon.'
    },
    notes: 'Aussprache: [tʁɛ̃] mit Nasalvokal',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun', 'essential']
  },
  {
    id: 'lesson10-transport-voiture',
    french: 'la voiture',
    german: 'das Auto',
    english: 'the car',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle va au travail en voiture.',
      german: 'Sie fährt mit dem Auto zur Arbeit.'
    },
    notes: 'feminin! Mit Auto: "en voiture" (nicht "prendre")',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun', 'essential']
  },
  {
    id: 'lesson10-transport-velo',
    french: 'le vélo',
    german: 'das Fahrrad',
    english: 'the bicycle',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je vais à l\'université à vélo.',
      german: 'Ich fahre mit dem Fahrrad zur Uni.'
    },
    notes: 'Mit Fahrrad: "à vélo" (nicht "en vélo")',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun']
  },
  {
    id: 'lesson10-transport-avion',
    french: 'l\'avion',
    german: 'das Flugzeug',
    english: 'the airplane',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Ils voyagent en avion.',
      german: 'Sie reisen mit dem Flugzeug.'
    },
    notes: 'maskulin: l\'avion. Aussprache: [avjɔ̃] mit Nasalvokal',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun']
  },
  {
    id: 'lesson10-transport-taxi',
    french: 'le taxi',
    german: 'das Taxi',
    english: 'the taxi',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Prends un taxi, c\'est plus rapide.',
      german: 'Nimm ein Taxi, das ist schneller.'
    },
    notes: 'Kognat zum deutschen "Taxi"',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun', 'cognate']
  },
  {
    id: 'lesson10-transport-tramway',
    french: 'le tramway',
    german: 'die Straßenbahn',
    english: 'the tram',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le tramway passe devant chez moi.',
      german: 'Die Straßenbahn fährt bei mir vorbei.'
    },
    notes: 'Oft kurz "le tram". Aussprache: [tʁamwɛ]',
    level: 'A1',
    tags: ['lesson10', 'transport', 'noun']
  },
  {
    id: 'lesson10-transport-apied',
    french: 'à pied',
    german: 'zu Fuß',
    english: 'on foot',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je vais à l\'école à pied.',
      german: 'Ich gehe zu Fuß zur Schule.'
    },
    notes: 'Wörtlich "mit dem Fuß". Mit "aller": aller à pied.',
    level: 'A1',
    tags: ['lesson10', 'transport', 'adverb', 'essential']
  },

  // prendre conjugations
  {
    id: 'lesson10-prendre-infinitive',
    french: 'prendre',
    german: 'nehmen',
    english: 'to take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais prendre le métro.',
      german: 'Ich werde die U-Bahn nehmen.'
    },
    notes: 'Unregelmäßiges Verb. Für Verkehrsmittel: prendre le bus/métro/train.',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'essential']
  },
  {
    id: 'lesson10-prendre-jeprends',
    french: 'je prends',
    german: 'ich nehme',
    english: 'I take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je prends le bus.',
      german: 'Ich fahre mit dem Bus.'
    },
    notes: 'prendre Konjugation: 1. Person Singular [pʁɑ̃]',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson10-prendre-tuprends',
    french: 'tu prends',
    german: 'du nimmst',
    english: 'you take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu prends le train?',
      german: 'Nimmst du den Zug?'
    },
    notes: 'prendre Konjugation: 2. Person Singular - klingt wie "je prends"!',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson10-prendre-ilprend',
    french: 'il/elle prend',
    german: 'er/sie nimmt',
    english: 'he/she takes',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle prend le métro.',
      german: 'Sie fährt mit der U-Bahn.'
    },
    notes: 'prendre Konjugation: 3. Person Singular, ohne -s/-t Endung im Klang',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson10-prendre-nousprenons',
    french: 'nous prenons',
    german: 'wir nehmen',
    english: 'we take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous prenons le train.',
      german: 'Wir fahren mit dem Zug.'
    },
    notes: 'prendre Konjugation: 1. Person Plural [pʁənɔ̃]',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson10-prendre-vousprenez',
    french: 'vous prenez',
    german: 'ihr nehmt / Sie nehmen',
    english: 'you take (plural/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous prenez le bus 38.',
      german: 'Sie nehmen den Bus 38.'
    },
    notes: 'prendre Konjugation: 2. Person Plural [pʁəne]',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson10-prendre-ilsprennent',
    french: 'ils/elles prennent',
    german: 'sie nehmen',
    english: 'they take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils prennent le taxi.',
      german: 'Sie nehmen das Taxi.'
    },
    notes: 'prendre Konjugation: 3. Person Plural [pʁɛn] - doppeltes n!',
    level: 'A1',
    tags: ['lesson10', 'verb', 'prendre', 'conjugation']
  },

  // Movement verbs
  {
    id: 'lesson10-verb-aller',
    french: 'aller',
    german: 'gehen / fahren',
    english: 'to go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais à la gare.',
      german: 'Ich gehe zum Bahnhof.'
    },
    notes: 'Unregelmäßig. Imperativ: va! / allez!',
    level: 'A1',
    tags: ['lesson10', 'verb', 'movement', 'essential']
  },
  {
    id: 'lesson10-verb-tourner',
    french: 'tourner',
    german: 'abbiegen',
    english: 'to turn',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tournez à droite!',
      german: 'Biegen Sie rechts ab!'
    },
    notes: 'Regelmäßiges -er-Verb. Imperativ tu: tourne! (ohne -s)',
    level: 'A1',
    tags: ['lesson10', 'verb', 'directions', 'essential']
  },
  {
    id: 'lesson10-verb-continuer',
    french: 'continuer',
    german: 'weitergehen / fortsetzen',
    english: 'to continue',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Continue tout droit!',
      german: 'Geh weiter geradeaus!'
    },
    notes: 'Regelmäßiges -er-Verb. Imperativ tu: continue! (ohne -s)',
    level: 'A1',
    tags: ['lesson10', 'verb', 'directions']
  },
  {
    id: 'lesson10-verb-traverser',
    french: 'traverser',
    german: 'überqueren',
    english: 'to cross',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Traversez la rue!',
      german: 'Überqueren Sie die Straße!'
    },
    notes: 'Regelmäßiges -er-Verb. traverser la rue = die Straße überqueren',
    level: 'A1',
    tags: ['lesson10', 'verb', 'directions']
  },
  {
    id: 'lesson10-verb-descendre',
    french: 'descendre',
    german: 'aussteigen / hinuntergehen',
    english: 'to get off / go down',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Descends à la prochaine station.',
      german: 'Steig an der nächsten Station aus.'
    },
    notes: 'Imperativ tu: descends! (mit -s, da kein -er-Verb)',
    level: 'A1',
    tags: ['lesson10', 'verb', 'movement']
  },

  // Directions
  {
    id: 'lesson10-direction-agauche',
    french: 'à gauche',
    german: 'links / nach links',
    english: 'left / to the left',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Tournez à gauche.',
      german: 'Biegen Sie links ab.'
    },
    notes: 'Aussprache: [a ɡoʃ]',
    level: 'A1',
    tags: ['lesson10', 'directions', 'adverb', 'essential']
  },
  {
    id: 'lesson10-direction-adroite',
    french: 'à droite',
    german: 'rechts / nach rechts',
    english: 'right / to the right',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'La banque est à droite.',
      german: 'Die Bank ist rechts.'
    },
    notes: 'Aussprache: [a dʁwat] - das -t wird gesprochen! Nicht mit "tout droit" verwechseln!',
    level: 'A1',
    tags: ['lesson10', 'directions', 'adverb', 'essential']
  },
  {
    id: 'lesson10-direction-toutdroit',
    french: 'tout droit',
    german: 'geradeaus',
    english: 'straight ahead',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Continuez tout droit.',
      german: 'Gehen Sie geradeaus weiter.'
    },
    notes: 'Aussprache: [tu dʁwa] - das -t ist STUMM! Anders als "à droite".',
    level: 'A1',
    tags: ['lesson10', 'directions', 'adverb', 'essential']
  },
  {
    id: 'lesson10-direction-jusqua',
    french: 'jusqu\'à',
    german: 'bis (zu)',
    english: 'until / up to',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Continuez jusqu\'au feu.',
      german: 'Gehen Sie bis zur Ampel weiter.'
    },
    notes: 'jusqu\'à + le = jusqu\'au; jusqu\'à + les = jusqu\'aux',
    level: 'A1',
    tags: ['lesson10', 'directions', 'preposition', 'essential']
  },
  {
    id: 'lesson10-direction-aucoin',
    french: 'au coin de',
    german: 'an der Ecke von',
    english: 'at the corner of',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'La pharmacie est au coin de la rue.',
      german: 'Die Apotheke ist an der Straßenecke.'
    },
    notes: 'Aussprache: [o kwɛ̃ də]',
    level: 'A1',
    tags: ['lesson10', 'directions', 'preposition']
  },
  {
    id: 'lesson10-direction-enface',
    french: 'en face de',
    german: 'gegenüber von',
    english: 'opposite / across from',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'L\'hôtel est en face de la gare.',
      german: 'Das Hotel ist gegenüber dem Bahnhof.'
    },
    notes: 'Aussprache: [ɑ̃ fas də]',
    level: 'A1',
    tags: ['lesson10', 'directions', 'preposition']
  },
  {
    id: 'lesson10-direction-acote',
    french: 'à côté de',
    german: 'neben',
    english: 'next to',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'La poste est à côté de la banque.',
      german: 'Die Post ist neben der Bank.'
    },
    notes: 'Aussprache: [a kote də]',
    level: 'A1',
    tags: ['lesson10', 'directions', 'preposition']
  },
  {
    id: 'lesson10-direction-presde',
    french: 'près de',
    german: 'in der Nähe von',
    english: 'near',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Il y a un métro près d\'ici?',
      german: 'Gibt es eine U-Bahn in der Nähe?'
    },
    notes: 'Gegenteil: loin de (weit weg von). "près d\'ici" = in der Nähe',
    level: 'A1',
    tags: ['lesson10', 'directions', 'preposition']
  },

  // Places
  {
    id: 'lesson10-place-gare',
    french: 'la gare',
    german: 'der Bahnhof',
    english: 'the train station',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Où est la gare, s\'il vous plaît?',
      german: 'Wo ist der Bahnhof, bitte?'
    },
    notes: 'feminin! Nicht mit "der Bahnhof" (m) verwechseln.',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun', 'essential']
  },
  {
    id: 'lesson10-place-station',
    french: 'la station de métro',
    german: 'die Metro-Station',
    english: 'the metro station',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La station de métro est tout près.',
      german: 'Die Metro-Station ist ganz in der Nähe.'
    },
    notes: 'Für die Metro sagt man "station", für den Bus "arrêt".',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun']
  },
  {
    id: 'lesson10-place-arretbus',
    french: 'l\'arrêt de bus',
    german: 'die Bushaltestelle',
    english: 'the bus stop',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'L\'arrêt de bus est devant la pharmacie.',
      german: 'Die Bushaltestelle ist vor der Apotheke.'
    },
    notes: 'maskulin: l\'arrêt. Für Bus "arrêt", für Metro "station".',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun']
  },
  {
    id: 'lesson10-place-rue',
    french: 'la rue',
    german: 'die Straße',
    english: 'the street',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Prends la première rue à droite.',
      german: 'Nimm die erste Straße rechts.'
    },
    notes: 'Aussprache: [ʁy] - französisches R und U üben!',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun', 'essential']
  },
  {
    id: 'lesson10-place-place',
    french: 'la place',
    german: 'der Platz',
    english: 'the square',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Le café est sur la place.',
      german: 'Das Café ist am Platz.'
    },
    notes: 'feminin! Falscher Freund: NICHT "Platz/Sitzplatz", sondern öffentlicher Platz.',
    level: 'A1',
    isFalseFriend: true,
    tags: ['lesson10', 'place', 'noun', 'false-friend']
  },
  {
    id: 'lesson10-place-carrefour',
    french: 'le carrefour',
    german: 'die Kreuzung',
    english: 'the crossroads',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Au carrefour, tournez à gauche.',
      german: 'An der Kreuzung biegen Sie links ab.'
    },
    notes: 'Aussprache: [kaʁfuʁ]',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun']
  },
  {
    id: 'lesson10-place-feu',
    french: 'le feu',
    german: 'die Ampel',
    english: 'the traffic light',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Tournez à droite au feu.',
      german: 'Biegen Sie an der Ampel rechts ab.'
    },
    notes: 'maskulin. "le feu" heißt auch "das Feuer". Plural: les feux.',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun']
  },
  {
    id: 'lesson10-place-aeroport',
    french: 'l\'aéroport',
    german: 'der Flughafen',
    english: 'the airport',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je prends un taxi pour l\'aéroport.',
      german: 'Ich nehme ein Taxi zum Flughafen.'
    },
    notes: 'maskulin: l\'aéroport. Aussprache: [aeʁopɔʁ]',
    level: 'A1',
    tags: ['lesson10', 'place', 'noun']
  },

  // Useful phrases & connectors
  {
    id: 'lesson10-phrase-pouraller',
    french: 'pour aller à...?',
    german: 'wie komme ich zu...?',
    english: 'how do I get to...?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Pour aller à la gare, s\'il vous plaît?',
      german: 'Wie komme ich zum Bahnhof, bitte?'
    },
    notes: 'Wörtlich: "um zu... zu gehen?" - DIE Standardfrage nach dem Weg.',
    level: 'A1',
    tags: ['lesson10', 'phrase', 'directions', 'essential']
  },
  {
    id: 'lesson10-phrase-cestloin',
    french: 'c\'est loin?',
    german: 'ist es weit?',
    english: 'is it far?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: '— C\'est loin? — Non, c\'est à cinq minutes.',
      german: '— Ist es weit? — Nein, fünf Minuten.'
    },
    notes: 'Gegenteil: "c\'est près" (es ist nah)',
    level: 'A1',
    tags: ['lesson10', 'phrase', 'directions']
  },
  {
    id: 'lesson10-phrase-ensuite',
    french: 'ensuite',
    german: 'danach / anschließend',
    english: 'then / next',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Tournez à gauche, ensuite continuez tout droit.',
      german: 'Biegen Sie links ab, danach gehen Sie geradeaus weiter.'
    },
    notes: 'Sehr nützlich, um Schritte einer Wegbeschreibung zu verbinden.',
    level: 'A1',
    tags: ['lesson10', 'connector', 'adverb', 'directions']
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
    question: 'Wie sagt man "der Bus" auf Französisch?',
    options: ['le bus', 'le train', 'le métro', 'le taxi'],
    correctAnswer: 'le bus',
    explanation: '"le bus" [bys] bedeutet "der Bus". Es ist maskulin.',
    hints: [
      'Das Wort ähnelt dem deutschen "Bus".',
      'Es ist "le bus".'
    ],
    tags: ['transport', 'vocabulary']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "à gauche"?',
    options: ['rechts', 'links', 'geradeaus', 'zurück'],
    correctAnswer: 'links',
    explanation: '"à gauche" [a ɡoʃ] bedeutet "links". "à droite" wäre "rechts".',
    hints: [
      'Es ist eine der beiden seitlichen Richtungen.',
      'Es ist "links".'
    ],
    tags: ['directions', 'vocabulary']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ le métro. (Ich fahre mit der U-Bahn.)',
    correctAnswer: ['prends'],
    explanation: 'Die Form von "prendre" für "je" ist "prends" [pʁɑ̃].',
    hints: [
      'Das Verb ist "prendre" (nehmen).',
      'Es ist "prends".'
    ],
    tags: ['prendre', 'conjugation']
  },
  {
    id: 'guided-4',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "tout droit"?',
    options: ['rechts', 'links', 'geradeaus', 'oben'],
    correctAnswer: 'geradeaus',
    explanation: '"tout droit" [tu dʁwa] bedeutet "geradeaus". Nicht mit "à droite" (rechts) verwechseln!',
    hints: [
      'Es ist keine seitliche Richtung.',
      'Es ist "geradeaus".'
    ],
    tags: ['directions', 'vocabulary']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: rechts',
    correctAnswer: ['à droite', 'a droite'],
    explanation: '"à droite" bedeutet "rechts". Das -t in "droite" wird ausgesprochen: [dʁwat].',
    hints: [
      'Es beginnt mit "à".',
      'Es ist "à droite".'
    ],
    tags: ['directions', 'translation']
  },
  {
    id: 'guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Form ist der Imperativ von "tourner" (du-Form)?',
    options: ['tourne', 'tournes', 'tourner', 'tournez'],
    correctAnswer: 'tourne',
    explanation: 'Bei -er-Verben fällt in der tu-Form des Imperativs das -s weg: "tourne!" (nicht "tournes").',
    hints: [
      'Bei -er-Verben fällt ein Buchstabe weg.',
      'Es ist "tourne" (ohne -s).'
    ],
    tags: ['imperative', 'verbs']
  },
  {
    id: 'guided-7',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Übersetze die Begrüßung im Befehl: ___ tout droit! (Geh geradeaus! - du-Form von "aller")',
    correctAnswer: ['Va', 'va'],
    explanation: 'Der Imperativ von "aller" in der tu-Form ist "Va!" (ohne -s).',
    hints: [
      'Das Verb ist "aller" (gehen).',
      'Es ist "Va".'
    ],
    tags: ['imperative', 'aller']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "la gare"?',
    options: ['die Straße', 'der Bahnhof', 'der Platz', 'die Ampel'],
    correctAnswer: 'der Bahnhof',
    explanation: '"la gare" bedeutet "der Bahnhof" - im Französischen feminin!',
    hints: [
      'Dort fahren Züge ab.',
      'Es ist "der Bahnhof".'
    ],
    tags: ['places', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ le train pour Lyon. (Wir fahren mit dem Zug nach Lyon.)',
    correctAnswer: ['prenons'],
    explanation: 'Die Form von "prendre" für "nous" ist "prenons" [pʁənɔ̃].',
    hints: [
      'Die nous-Form endet auf -ons.',
      'Es ist "prenons".'
    ],
    tags: ['prendre', 'conjugation']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ le bus 38. (Sie nehmen den Bus 38.)',
    correctAnswer: ['prenez'],
    explanation: 'Die Form von "prendre" für "vous" ist "prenez" [pʁəne].',
    hints: [
      'Die vous-Form endet oft auf -ez.',
      'Es ist "prenez".'
    ],
    tags: ['prendre', 'conjugation']
  },
  {
    id: 'independent-3',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Du sprichst höflich (vous) mit einem Fremden. Wie sagst du "Biegen Sie links ab!"?',
    options: ['Tourne à gauche!', 'Tournez à gauche!', 'Tourner à gauche!', 'Tournes à gauche!'],
    correctAnswer: 'Tournez à gauche!',
    explanation: 'In der höflichen vous-Form lautet der Imperativ "Tournez!". Die tu-Form wäre "Tourne!".',
    hints: [
      'Für die höfliche Anrede nimmt man die vous-Form.',
      'Die vous-Form endet auf -ez.'
    ],
    tags: ['imperative', 'directions']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Continuez ___ feu. (Gehen Sie bis zur Ampel weiter.) - "jusqu\'à" + "le feu"',
    correctAnswer: ['jusqu\'au', 'jusqu au'],
    explanation: '"jusqu\'à" verschmilzt mit "le" zu "jusqu\'au": jusqu\'à + le feu = jusqu\'au feu.',
    hints: [
      '"jusqu\'à" + "le" zieht sich zusammen.',
      'Es ist "jusqu\'au".'
    ],
    tags: ['contractions', 'directions']
  },
  {
    id: 'independent-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich fahre mit dem Bus.',
    correctAnswer: ['Je prends le bus.', 'Je prends le bus', 'je prends le bus'],
    explanation: 'Im Französischen sagt man "prendre le bus" (den Bus nehmen), nicht "fahren mit".',
    hints: [
      'Benutze das Verb "prendre".',
      'Nach "prendre" steht der Artikel "le".',
      'Es ist "Je prends le bus."'
    ],
    tags: ['prendre', 'transport', 'translation']
  },
  {
    id: 'independent-6',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Tournez à droite au feu.',
    correctAnswer: ['Biegen Sie an der Ampel rechts ab.', 'Biegen Sie rechts ab an der Ampel.', 'Biegen Sie an der Ampel rechts ab', 'An der Ampel rechts abbiegen.'],
    explanation: '"Tournez" = biegen Sie ab, "à droite" = rechts, "au feu" = an der Ampel.',
    hints: [
      '"Tournez" ist die höfliche Befehlsform.',
      '"au feu" bedeutet "an der Ampel".'
    ],
    tags: ['imperative', 'directions', 'translation']
  },
  {
    id: 'independent-7',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie fragt man höflich nach dem Weg zur Metro?',
    options: [
      'Pour aller à la station de métro, s\'il vous plaît?',
      'Où tu vas?',
      'Je prends le métro.',
      'C\'est à gauche.'
    ],
    correctAnswer: 'Pour aller à la station de métro, s\'il vous plaît?',
    explanation: '"Pour aller à...?" ist die Standardfrage nach dem Weg. Mit "s\'il vous plaît" wird sie höflich.',
    hints: [
      'Die Frage beginnt mit "Pour aller à...".',
      'Es ist "Pour aller à la station de métro, s\'il vous plaît?"'
    ],
    tags: ['directions', 'phrases']
  },
  {
    id: 'independent-8',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Elle va au travail ___ voiture. (Sie fährt mit dem Auto zur Arbeit.)',
    correctAnswer: ['en'],
    explanation: 'Für das Auto sagt man "en voiture" (nicht "à voiture" oder "prendre"). "en" für Fahrzeuge, in die man einsteigt.',
    hints: [
      'Es ist eine kleine Präposition mit zwei Buchstaben.',
      'Für das Auto benutzt man "en".'
    ],
    tags: ['transport', 'prepositions']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz bedeutet "Geh zu Fuß zur Schule!" (du-Form)?',
    options: [
      'Va à l\'école à pied!',
      'Prends l\'école à pied!',
      'Allez à l\'école à pied!',
      'Va à l\'école en voiture!'
    ],
    correctAnswer: 'Va à l\'école à pied!',
    explanation: '"Va!" ist der Imperativ von "aller" (tu-Form), "à pied" bedeutet "zu Fuß".',
    hints: [
      'Die tu-Form von "aller" ist "Va".',
      '"zu Fuß" heißt "à pied".'
    ],
    tags: ['imperative', 'transport']
  },
  {
    id: 'independent-10',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Geh geradeaus! (du-Form, mit "continuer")',
    correctAnswer: ['Continue tout droit!', 'Continue tout droit', 'continue tout droit!'],
    explanation: 'Imperativ von "continuer" in der tu-Form: "Continue!" (ohne -s, da -er-Verb) + "tout droit" (geradeaus).',
    hints: [
      'Bei -er-Verben fällt das -s in der tu-Form weg.',
      '"geradeaus" heißt "tout droit".',
      'Es ist "Continue tout droit!"'
    ],
    tags: ['imperative', 'directions', 'translation']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige die Wegbeschreibung (vous-Form):\nContinuez tout droit, ___ (tournez) à gauche au carrefour, et la gare est ___ (gegenüber von) la poste.',
    correctAnswer: ['tournez, en face de', 'tournez en face de'],
    explanation: '"tournez" (Imperativ vous von tourner) und "en face de" (gegenüber von). Eine vollständige Wegbeschreibung!',
    tags: ['imperative', 'directions', 'context']
  },
  {
    id: 'assess-2',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche Verschmelzung ist KORREKT?',
    options: [
      'jusqu\'à + le feu = jusqu\'au feu',
      'jusqu\'à + le feu = jusqu\'à le feu',
      'jusqu\'à + le feu = jusqu\'aux feu',
      'jusqu\'à + le feu = jusque feu'
    ],
    correctAnswer: 'jusqu\'à + le feu = jusqu\'au feu',
    explanation: '"jusqu\'à" verschmilzt mit "le" zu "jusqu\'au" (wie à + le = au). Bei "les" wäre es "jusqu\'aux".',
    tags: ['contractions', 'grammar']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze (vous-Form): Nehmen Sie die Metro, Linie 1.',
    correctAnswer: ['Prenez le métro, ligne 1.', 'Prenez le métro ligne 1.', 'Prenez le métro, ligne un.', 'prenez le métro, ligne 1'],
    explanation: 'Imperativ von "prendre" in der vous-Form: "Prenez!" + "le métro" (maskulin!) + "ligne 1".',
    tags: ['imperative', 'prendre', 'transport', 'translation']
  },
  {
    id: 'assess-4',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Setze "prendre" richtig ein: Mes amis ___ le train, mais moi, je ___ le bus.',
    correctAnswer: ['prennent, prends', 'prennent prends'],
    explanation: '"Mes amis" (sie) → "prennent" [pʁɛn]; "je" → "prends" [pʁɑ̃]. Achte auf das doppelte -nn im Plural!',
    tags: ['prendre', 'conjugation', 'context']
  },
  {
    id: 'assess-5',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Tourist fragt: "Pour aller à l\'aéroport?" Welche Antwort ist eine korrekte, höfliche Wegbeschreibung?',
    options: [
      'Prenez le bus 350, et descendez au terminal.',
      'Je prends le bus 350.',
      'Tu prends le bus 350.',
      'Prends le bus 350, et descends au terminal.'
    ],
    correctAnswer: 'Prenez le bus 350, et descendez au terminal.',
    explanation: 'Gegenüber einem Fremden benutzt man die höfliche vous-Form: "Prenez" und "descendez", nicht die tu-Formen.',
    tags: ['imperative', 'directions', 'context', 'register']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Prends la première rue à droite, c\'est au coin de la rue.',
    correctAnswer: [
      'Nimm die erste Straße rechts, es ist an der Straßenecke.',
      'Nimm die erste Straße rechts, es ist an der Ecke der Straße.',
      'Nimm die erste Straße rechts, es ist an der Ecke.'
    ],
    explanation: '"Prends" (nimm, tu-Imperativ), "la première rue à droite" (die erste Straße rechts), "au coin de la rue" (an der Straßenecke).',
    tags: ['imperative', 'directions', 'translation', 'ordinals']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson10: Lesson = {
  meta: {
    id: 'lesson-10',
    number: 10,
    title: 'Les Transports',
    titleGerman: 'Transport',
    objectives: [
      'Die wichtigsten Verkehrsmittel auf Französisch benennen können',
      'Das unregelmäßige Verb "prendre" konjugieren und mit Verkehrsmitteln verwenden',
      'Den Imperativ (tu/nous/vous-Form) regelmäßiger und unregelmäßiger Verben bilden',
      'Richtungsangaben (à gauche, à droite, tout droit, jusqu\'à, au coin de) verstehen und benutzen',
      'Höflich nach dem Weg fragen können',
      'Eine einfache Wegbeschreibung geben können'
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
      'lesson-09'
    ],
    tags: ['transport', 'directions', 'imperative', 'prendre', 'prepositions', 'city']
  },

  introduction: {
    objectives: [
      'Verkehrsmittel benennen und sagen, wie man sich fortbewegt',
      'Mit "prendre" über Bus, Metro und Zug sprechen',
      'Den Imperativ für Anweisungen und Wegbeschreibungen verwenden',
      'Nach dem Weg fragen und eine Wegbeschreibung verstehen'
    ],
    motivation: `
In dieser Lektion lernst du, dich in einer französischen Stadt zurechtzufinden! Du kannst bald sagen,
mit welchem Verkehrsmittel du fährst ("Je prends le métro"), nach dem Weg fragen ("Pour aller à la gare?")
und sogar selbst jemandem den Weg beschreiben ("Tournez à gauche!").

Der Imperativ - die Befehlsform - ist dabei der Schlüssel: Mit ihm gibst du Anweisungen wie
"Geh geradeaus!" oder "Biegen Sie links ab!". Diese Fähigkeiten sind im Alltag in Frankreich Gold wert!
    `,
    culturalNote: `
**Höflichkeit beim Fragen nach dem Weg**

In Frankreich beginnt man eine Frage an Fremde IMMER mit "Pardon" oder "Excusez-moi" - und am besten
auch mit "Bonjour"! Es gilt als sehr unhöflich, direkt mit der Frage zu starten. Vergiss am Ende auch
"Merci" und "Au revoir" nicht.

**Die Pariser Metro**

Das Pariser Metro-Netz ist eines der dichtesten der Welt. Linien werden mit Nummern angegeben (ligne 1, ligne 2...),
und die Fahrtrichtung erkennt man am Namen der Endstation ("direction Château de Vincennes"). Wer das versteht,
findet sich überall in Paris zurecht!
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
      'Du kennst die wichtigsten Verkehrsmittel (le bus, le métro, le train, la voiture, le vélo, l\'avion, le taxi)',
      'Du kannst das Verb "prendre" konjugieren und mit Verkehrsmitteln verwenden (prendre le bus)',
      'Du weißt, dass man "en voiture" und "à pied/à vélo" sagt, nicht immer "prendre"',
      'Du kannst den Imperativ in der tu-, nous- und vous-Form bilden (bei -er-Verben fällt das -s weg!)',
      'Du kennst die unregelmäßigen Imperative von "aller" (va/allez) und "prendre" (prends/prenez)',
      'Du beherrschst die Richtungsangaben (à gauche, à droite, tout droit, jusqu\'à, au coin de)',
      'Du kannst höflich nach dem Weg fragen und eine einfache Wegbeschreibung geben'
    ],
    nextLesson: 'lesson-11'
  }
};
