import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 05: La Maison - Das Haus
 * Home, rooms, furniture and places in the city
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Definite articles (le / la / les / l')
 * - Prepositions of place (dans, sur, sous, devant, derrière, à côté de, entre)
 * - Negation ne ... pas
 * - Introduction to the verb "aller" (to go)
 * - Vocabulary: rooms, furniture, places in the city
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction to the home
  {
    id: 'la-maison-intro',
    title: 'Zu Hause: la maison und l\'appartement',
    type: 'explanation',
    content: `
In dieser Lektion lernst du, dein Zuhause zu beschreiben und zu sagen, wo sich Dinge befinden.

**Zwei wichtige Wörter:**
- **la maison** [la mɛzɔ̃] = das Haus (weiblich!)
- **l'appartement** [la.paʁtəmɑ̃] = die Wohnung (männlich, beginnt mit Vokal → l')

**Achtung beim Genus:** Im Deutschen ist "das Haus" sächlich. Im Französischen gibt es KEIN Neutrum -
"maison" ist weiblich: **la** maison.

Mit den Vokabeln dieser Lektion kannst du bald sagen:
- *Voici ma maison.* (Hier ist mein Haus.)
- *Dans la cuisine, il y a une table.* (In der Küche gibt es einen Tisch.)
    `,
    germanExplanation: 'Im Französischen hat jedes Substantiv ein Geschlecht - männlich oder weiblich, nie sächlich.',
    examples: [
      { french: 'la maison', german: 'das Haus', notes: 'weiblich: la maison' },
      { french: 'l\'appartement', german: 'die Wohnung', notes: 'männlich, vor Vokal: l\'appartement' }
    ]
  },

  // Section 2: Definite articles table
  {
    id: 'definite-articles',
    title: 'Die bestimmten Artikel: le, la, les, l\'',
    type: 'table',
    content: `
Der bestimmte Artikel (wie deutsch "der/die/das") richtet sich nach Geschlecht und Zahl.

| Artikel | Verwendung | Aussprache | Beispiel | Deutsch |
|---------|-----------|------------|----------|---------|
| **le** | männlich, Singular | [lə] | le salon | das Wohnzimmer |
| **la** | weiblich, Singular | [la] | la cuisine | die Küche |
| **l'** | vor Vokal oder stummem h | [l] | l'appartement, l'école | die Wohnung, die Schule |
| **les** | Plural (m + f) | [le] | les chambres | die Zimmer |

**Merke:**
- Im Singular musst du das Geschlecht des Wortes kennen: **le** oder **la**.
- Beginnt das Wort mit einem Vokal (a, e, i, o, u) oder stummem h, wird **le/la** zu **l'**: l'armoire, l'hôtel.
- Im Plural ist es einfach: IMMER **les** - egal ob männlich oder weiblich!
    `,
    germanExplanation: 'Lerne jedes neue Substantiv immer zusammen mit seinem Artikel - so prägst du dir das Geschlecht ein.'
  },

  // Section 3: Article tip / liaison
  {
    id: 'les-liaison',
    title: 'Aussprache-Tipp: les + Vokal (Liaison)',
    type: 'tip',
    content: `
Der Plural-Artikel **les** [le] verändert sich, wenn das nächste Wort mit einem Vokal beginnt.

**Liaison:** Das stumme -s von "les" wird dann als [z] ausgesprochen und mit dem nächsten Wort verbunden.

- **les chambres** [le ʃɑ̃bʁ] - kein Vokal danach, normales [le]
- **les écoles** [lez‿ekɔl] - Vokal danach → [z] wird gesprochen!
- **les appartements** [lez‿apaʁtəmɑ̃] - ebenfalls [z]

Das nennt man **Liaison** - ein typisches Merkmal der französischen Aussprache. Es klingt flüssiger und
ist beim Plural sehr häufig.
    `
  },

  // Section 4: Rooms vocabulary table
  {
    id: 'rooms-table',
    title: 'Die Zimmer (les pièces)',
    type: 'table',
    content: `
| Französisch | Aussprache | Deutsch | Genus |
|-------------|------------|---------|-------|
| la cuisine | [la kɥizin] | die Küche | f |
| le salon | [lə salɔ̃] | das Wohnzimmer | m |
| la chambre | [la ʃɑ̃bʁ] | das Schlafzimmer | f |
| la salle de bain | [la sal də bɛ̃] | das Badezimmer | f |
| les toilettes | [le twalɛt] | die Toilette | f (Plural!) |
| la salle à manger | [la sal a mɑ̃ʒe] | das Esszimmer | f |
| le couloir | [lə kulwaʁ] | der Flur | m |
| le jardin | [lə ʒaʁdɛ̃] | der Garten | m |

**Beachte:** "les toilettes" steht im Französischen fast immer im **Plural** - also "die Toiletten".
    `,
    germanExplanation: 'Die meisten Räume sind weiblich (la), aber le salon, le couloir und le jardin sind männlich.'
  },

  // Section 5: Furniture
  {
    id: 'furniture',
    title: 'Die Möbel (les meubles)',
    type: 'example',
    content: `
Hier die wichtigsten Möbelstücke für dein Zuhause:
    `,
    examples: [
      { french: 'la table', german: 'der Tisch', notes: 'weiblich: la table' },
      { french: 'la chaise', german: 'der Stuhl', notes: 'weiblich: la chaise' },
      { french: 'le lit', german: 'das Bett', notes: 'männlich; das -t ist stumm [li]' },
      { french: 'le canapé', german: 'das Sofa', notes: 'männlich: le canapé' },
      { french: 'l\'armoire', german: 'der Schrank', notes: 'weiblich! une armoire - vor Vokal: l\'armoire' },
      { french: 'le bureau', german: 'der Schreibtisch', notes: 'männlich; Plural: les bureaux' },
      { french: 'la lampe', german: 'die Lampe', notes: 'weiblich: la lampe' },
      { french: 'le frigo', german: 'der Kühlschrank', notes: 'männlich; umgangssprachlich für réfrigérateur' }
    ]
  },

  // Section 6: il y a
  {
    id: 'il-y-a',
    title: 'Es gibt: "il y a"',
    type: 'explanation',
    content: `
Um zu sagen, dass etwas existiert oder vorhanden ist, benutzt man **il y a** [il‿i‿a] = "es gibt".

Es ist unveränderlich - egal ob Singular oder Plural!

- **Il y a une table.** = Es gibt einen Tisch. / Da ist ein Tisch.
- **Il y a deux chaises.** = Es gibt zwei Stühle.
- **Dans le salon, il y a un canapé.** = Im Wohnzimmer gibt es ein Sofa.

**Frage:** *Qu'est-ce qu'il y a dans la cuisine?* = Was gibt es in der Küche?

Mit "il y a" und den Präpositionen (nächster Abschnitt) kannst du jeden Raum beschreiben!
    `,
    germanExplanation: '"il y a" entspricht dem deutschen "es gibt" und bleibt immer gleich.'
  },

  // Section 7: Prepositions of place table
  {
    id: 'prepositions-place',
    title: 'Präpositionen des Ortes',
    type: 'table',
    content: `
Mit Ortspräpositionen sagst du, WO sich etwas befindet.

| Französisch | Aussprache | Deutsch | Beispiel |
|-------------|------------|---------|----------|
| dans | [dɑ̃] | in | Le chat est dans la maison. |
| sur | [syʁ] | auf | Le livre est sur la table. |
| sous | [su] | unter | Le chat est sous le lit. |
| devant | [dəvɑ̃] | vor | La voiture est devant la maison. |
| derrière | [dɛʁjɛʁ] | hinter | Le jardin est derrière la maison. |
| à côté de | [a kote də] | neben | La lampe est à côté du canapé. |
| entre | [ɑ̃tʁ] | zwischen | La table est entre les chaises. |

**Achtung Aussprache:** "sur" (auf) und "sous" (unter) klingen ähnlich, sind aber Gegensätze!
- **sur** [syʁ] - mit französischem "ü"-Laut und R
- **sous** [su] - wie deutsches "su"
    `,
    germanExplanation: 'Diese Präpositionen brauchst du, um Positionen im Raum zu beschreiben.'
  },

  // Section 8: à côté de + contraction
  {
    id: 'a-cote-de-contraction',
    title: '"à côté de" und die Verschmelzung mit dem Artikel',
    type: 'explanation',
    content: `
Die Präposition **à côté de** (neben) endet auf **de**. Vor einem Artikel verschmilzt "de" mit dem Artikel:

| de + Artikel | wird zu | Beispiel | Deutsch |
|--------------|---------|----------|---------|
| de + le | **du** | à côté **du** canapé | neben dem Sofa |
| de + la | de la (bleibt) | à côté **de la** table | neben dem Tisch |
| de + l' | de l' (bleibt) | à côté **de l'**armoire | neben dem Schrank |
| de + les | **des** | à côté **des** chaises | neben den Stühlen |

**Wichtige Regel:**
- **de + le → du** (NIE "de le"!)
- **de + les → des** (NIE "de les"!)
- Vor **la** und **l'** bleibt es unverändert.

Beispiel: *La lampe est à côté du lit.* = Die Lampe ist neben dem Bett.
    `,
    germanExplanation: 'Die Verschmelzung de + le = du ist Pflicht - "de le" ist immer falsch.'
  },

  // Section 9: Negation
  {
    id: 'negation',
    title: 'Die Verneinung: ne ... pas',
    type: 'explanation',
    content: `
Im Französischen wird das Verb von ZWEI Wörtern umklammert: **ne ... pas**.

**Struktur:** Subjekt + **ne** + Verb + **pas** + Rest

- *Je suis content.* → *Je **ne** suis **pas** content.* (Ich bin nicht zufrieden.)
- *Il y a une table.* → *Il **n'**y a **pas** de table.* (Es gibt keinen Tisch.)
- *Le chat est dans le salon.* → *Le chat **n'**est **pas** dans le salon.*

**Zwei wichtige Regeln:**

1. **ne → n'** vor einem Vokal oder stummem h:
   *Je **n'**aime pas* (nicht "ne aime").

2. Nach einer Verneinung wird **un/une/des** zu **de**:
   - *Il y a **un** lit.* → *Il n'y a **pas de** lit.* (Es gibt kein Bett.)
   - *Il y a **des** chaises.* → *Il n'y a **pas de** chaises.*

   ABER: Mit dem bestimmten Artikel (le/la/les) bleibt der Artikel:
   *Je n'aime pas **le** salon.*
    `,
    germanExplanation: 'Die Verneinung besteht aus zwei Teilen, die das Verb einschließen: ne ... pas.'
  },

  // Section 10: Verb aller table
  {
    id: 'verb-aller',
    title: 'Das Verb "aller" (gehen / fahren)',
    type: 'table',
    content: `
**aller** [ale] = gehen, fahren, sich begeben. Es ist UNREGELMÄSSIG und sehr wichtig!

## Konjugation im Präsens (Présent)

| Pronomen | aller | Aussprache | Deutsch | Beispiel |
|----------|-------|------------|---------|----------|
| je | vais | [vɛ] | ich gehe | Je vais à l'école. |
| tu | vas | [va] | du gehst | Tu vas au restaurant. |
| il/elle | va | [va] | er/sie geht | Elle va à la gare. |
| nous | allons | [alɔ̃] | wir gehen | Nous allons au cinéma. |
| vous | allez | [ale] | ihr geht / Sie gehen | Vous allez à la banque? |
| ils/elles | vont | [vɔ̃] | sie gehen | Ils vont à l'école. |

**Merkhilfe:** Die Formen sehen ganz anders aus als der Infinitiv "aller"! Lerne sie als Rhythmus:
"je vais, tu vas, il va, nous allons, vous allez, ils vont."

**Bonus:** "Ça va?" (Wie geht's?) kommt von genau diesem Verb!
    `,
    germanExplanation: 'aller ist unregelmäßig - die Formen müssen auswendig gelernt werden.'
  },

  // Section 11: aller + à (contraction)
  {
    id: 'aller-a-contraction',
    title: 'aller + à: zum / zur (au, à la, aux)',
    type: 'explanation',
    content: `
Mit **aller** sagt man, wohin man geht - mit der Präposition **à** (zu / nach / in).
Wie bei "de" verschmilzt auch "à" mit dem bestimmten Artikel:

| à + Artikel | wird zu | Beispiel | Deutsch |
|-------------|---------|----------|---------|
| à + le | **au** | Je vais **au** restaurant. | Ich gehe ins Restaurant. |
| à + la | à la (bleibt) | Je vais **à la** banque. | Ich gehe zur Bank. |
| à + l' | à l' (bleibt) | Je vais **à l'**école. | Ich gehe zur Schule. |
| à + les | **aux** | Je vais **aux** toilettes. | Ich gehe auf die Toilette. |

**Wichtige Regel:**
- **à + le → au** (NIE "à le"!)
- **à + les → aux** (NIE "à les"!)

Beispiel: *Nous allons au supermarché.* = Wir gehen zum Supermarkt.
    `,
    germanExplanation: 'à + le = au und à + les = aux - genau wie de + le = du.'
  },

  // Section 12: Places in the city
  {
    id: 'places-city',
    title: 'Orte in der Stadt (les lieux en ville)',
    type: 'table',
    content: `
| Französisch | Aussprache | Deutsch | Genus |
|-------------|------------|---------|-------|
| la gare | [la gaʁ] | der Bahnhof | f |
| la banque | [la bɑ̃k] | die Bank | f |
| le supermarché | [lə sypɛʁmaʁʃe] | der Supermarkt | m |
| l'école | [lekɔl] | die Schule | f |
| le restaurant | [lə ʁɛstoʁɑ̃] | das Restaurant | m |
| la poste | [la pɔst] | die Post | f |
| le cinéma | [lə sinema] | das Kino | m |
| l'hôpital | [lopital] | das Krankenhaus | m |

**Beachte:** "l'école" (f) und "l'hôpital" (m) beginnen mit Vokal bzw. stummem h → **l'**.
Das Geschlecht erkennt man dann erst an anderen Wörtern (z.B. *une* école, *un* hôpital).
    `,
    germanExplanation: 'Bei Wörtern mit l\' musst du das Geschlecht aktiv lernen - der Artikel verrät es nicht.'
  },

  // Section 13: Dialogue 1 - describing a home
  {
    id: 'dialogue-maison',
    title: 'Dialog: Eine Wohnung beschreiben',
    type: 'dialogue',
    content: `
**Situation:** Léa zeigt ihrer Freundin Camille ihre neue Wohnung.

**Léa:** Voici mon appartement!
**Camille:** C'est joli! Il y a combien de pièces?
**Léa:** Il y a trois pièces: le salon, la chambre et la cuisine.
**Camille:** Et la salle de bain?
**Léa:** La salle de bain est à côté de la chambre.
**Camille:** Où est le canapé?
**Léa:** Le canapé est dans le salon, devant la fenêtre.
**Camille:** J'adore! C'est très confortable.

---

**Beachte:**
- "Il y a combien de pièces?" = Wie viele Zimmer gibt es?
- "à côté de la chambre" = neben dem Schlafzimmer (de la bleibt unverändert)
- "devant la fenêtre" = vor dem Fenster
    `
  },

  // Section 14: Dialogue 2 - going places
  {
    id: 'dialogue-aller',
    title: 'Dialog: Wohin gehst du?',
    type: 'dialogue',
    content: `
**Situation:** Thomas und Sarah planen ihren Nachmittag.

**Thomas:** Salut Sarah! Où vas-tu?
**Sarah:** Je vais au supermarché. Et toi?
**Thomas:** Moi, je vais à la banque, puis à la poste.
**Sarah:** On va au cinéma ce soir?
**Thomas:** Oui! Mais je ne vais pas au restaurant, je n'ai pas d'argent.
**Sarah:** Pas de problème. À ce soir!
**Thomas:** À ce soir!

---

**Beachte:**
- "Où vas-tu?" = Wohin gehst du? (aller: tu vas)
- "au supermarché" = à + le supermarché → au
- "Je ne vais pas au restaurant" = Verneinung ne ... pas mit aller
- "je n'ai pas d'argent" = ich habe kein Geld (pas de → pas d' vor Vokal)
    `
  },

  // Section 15: Genus strategy tip
  {
    id: 'genus-tip',
    title: 'Tipp: Das Geschlecht lernen',
    type: 'tip',
    content: `
Das größte Problem für deutsche Lernende: das richtige Geschlecht (le/la).

**Strategien:**

1. **Lerne immer den Artikel mit!** Nicht "cuisine", sondern "**la** cuisine".

2. **Endungen können helfen** (aber Ausnahmen existieren):
   - Wörter auf **-tion**, **-té**, **-ette**, **-ie** sind oft weiblich: la nation, la table.
   - Wörter auf **-eau**, **-ment**, **-on** sind oft männlich: le bureau, l'appartement, le salon.

3. **Verlasse dich nicht auf das Deutsche!** "das Haus" → **la** maison (weiblich!),
   "der Tisch" → **la** table (weiblich!), "das Bett" → **le** lit (männlich!).

Übung macht den Meister - lerne jedes Wort als Einheit mit Artikel.
    `
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Home / general
  {
    id: 'lesson5-noun-maison',
    french: 'la maison',
    german: 'das Haus',
    english: 'the house',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Voici ma maison.',
      german: 'Hier ist mein Haus.'
    },
    notes: 'Weiblich! Anders als das deutsche "das Haus".',
    level: 'A1',
    tags: ['lesson5', 'home', 'noun', 'essential']
  },
  {
    id: 'lesson5-noun-appartement',
    french: 'l\'appartement',
    german: 'die Wohnung',
    english: 'the apartment',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'L\'appartement est grand.',
      german: 'Die Wohnung ist groß.'
    },
    notes: 'Männlich: un appartement. Beginnt mit Vokal → l\'.',
    level: 'A1',
    tags: ['lesson5', 'home', 'noun']
  },
  {
    id: 'lesson5-noun-piece',
    french: 'la pièce',
    german: 'das Zimmer / der Raum',
    english: 'the room',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Il y a quatre pièces.',
      german: 'Es gibt vier Zimmer.'
    },
    notes: 'Allgemeines Wort für "Raum/Zimmer". Weiblich.',
    level: 'A1',
    tags: ['lesson5', 'home', 'noun']
  },

  // Rooms
  {
    id: 'lesson5-room-cuisine',
    french: 'la cuisine',
    german: 'die Küche',
    english: 'the kitchen',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La table est dans la cuisine.',
      german: 'Der Tisch ist in der Küche.'
    },
    notes: 'Weiblich. Bedeutet auch "das Kochen / die Küche (Kochkunst)".',
    level: 'A1',
    tags: ['lesson5', 'home', 'room', 'essential']
  },
  {
    id: 'lesson5-room-salon',
    french: 'le salon',
    german: 'das Wohnzimmer',
    english: 'the living room',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le canapé est dans le salon.',
      german: 'Das Sofa ist im Wohnzimmer.'
    },
    notes: 'Männlich: le salon.',
    level: 'A1',
    tags: ['lesson5', 'home', 'room', 'essential']
  },
  {
    id: 'lesson5-room-chambre',
    french: 'la chambre',
    german: 'das Schlafzimmer',
    english: 'the bedroom',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Le lit est dans la chambre.',
      german: 'Das Bett ist im Schlafzimmer.'
    },
    notes: 'Weiblich. "chambre" = Schlafzimmer (nicht Zimmer allgemein).',
    level: 'A1',
    tags: ['lesson5', 'home', 'room', 'essential']
  },
  {
    id: 'lesson5-room-salledebain',
    french: 'la salle de bain',
    german: 'das Badezimmer',
    english: 'the bathroom',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La salle de bain est à côté de la chambre.',
      german: 'Das Badezimmer ist neben dem Schlafzimmer.'
    },
    notes: 'Weiblich. Wörtlich: "Saal des Bades".',
    level: 'A1',
    tags: ['lesson5', 'home', 'room']
  },
  {
    id: 'lesson5-room-toilettes',
    french: 'les toilettes',
    german: 'die Toilette',
    english: 'the toilet',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Où sont les toilettes?',
      german: 'Wo ist die Toilette?'
    },
    notes: 'Fast immer im PLURAL: les toilettes.',
    level: 'A1',
    tags: ['lesson5', 'home', 'room']
  },
  {
    id: 'lesson5-room-salleamanger',
    french: 'la salle à manger',
    german: 'das Esszimmer',
    english: 'the dining room',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Nous mangeons dans la salle à manger.',
      german: 'Wir essen im Esszimmer.'
    },
    notes: 'Weiblich. Wörtlich: "Saal zum Essen".',
    level: 'A1',
    tags: ['lesson5', 'home', 'room']
  },
  {
    id: 'lesson5-room-couloir',
    french: 'le couloir',
    german: 'der Flur',
    english: 'the hallway',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'La chambre est au bout du couloir.',
      german: 'Das Schlafzimmer ist am Ende des Flurs.'
    },
    notes: 'Männlich: le couloir.',
    level: 'A1',
    tags: ['lesson5', 'home', 'room']
  },
  {
    id: 'lesson5-room-jardin',
    french: 'le jardin',
    german: 'der Garten',
    english: 'the garden',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le jardin est derrière la maison.',
      german: 'Der Garten ist hinter dem Haus.'
    },
    notes: 'Männlich: le jardin.',
    level: 'A1',
    tags: ['lesson5', 'home', 'room']
  },

  // Furniture
  {
    id: 'lesson5-furniture-table',
    french: 'la table',
    german: 'der Tisch',
    english: 'the table',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Le livre est sur la table.',
      german: 'Das Buch ist auf dem Tisch.'
    },
    notes: 'Weiblich! Anders als das deutsche "der Tisch".',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture', 'essential']
  },
  {
    id: 'lesson5-furniture-chaise',
    french: 'la chaise',
    german: 'der Stuhl',
    english: 'the chair',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Il y a quatre chaises.',
      german: 'Es gibt vier Stühle.'
    },
    notes: 'Weiblich: la chaise.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture', 'essential']
  },
  {
    id: 'lesson5-furniture-lit',
    french: 'le lit',
    german: 'das Bett',
    english: 'the bed',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le chat est sous le lit.',
      german: 'Die Katze ist unter dem Bett.'
    },
    notes: 'Männlich. Das -t ist stumm: [li].',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture', 'essential']
  },
  {
    id: 'lesson5-furniture-canape',
    french: 'le canapé',
    german: 'das Sofa',
    english: 'the sofa / couch',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le canapé est confortable.',
      german: 'Das Sofa ist bequem.'
    },
    notes: 'Männlich: le canapé.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },
  {
    id: 'lesson5-furniture-armoire',
    french: 'l\'armoire',
    german: 'der Schrank',
    english: 'the wardrobe',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'L\'armoire est dans la chambre.',
      german: 'Der Schrank ist im Schlafzimmer.'
    },
    notes: 'WEIBLICH: une armoire. Vor Vokal: l\'armoire.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },
  {
    id: 'lesson5-furniture-bureau',
    french: 'le bureau',
    german: 'der Schreibtisch',
    english: 'the desk',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'L\'ordinateur est sur le bureau.',
      german: 'Der Computer ist auf dem Schreibtisch.'
    },
    notes: 'Männlich. Plural: les bureaux. Heißt auch "das Büro".',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },
  {
    id: 'lesson5-furniture-lampe',
    french: 'la lampe',
    german: 'die Lampe',
    english: 'the lamp',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La lampe est à côté du lit.',
      german: 'Die Lampe ist neben dem Bett.'
    },
    notes: 'Weiblich: la lampe.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },
  {
    id: 'lesson5-furniture-fenetre',
    french: 'la fenêtre',
    german: 'das Fenster',
    english: 'the window',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Le canapé est devant la fenêtre.',
      german: 'Das Sofa ist vor dem Fenster.'
    },
    notes: 'Weiblich. Accent circonflexe auf dem ê.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },
  {
    id: 'lesson5-furniture-porte',
    french: 'la porte',
    german: 'die Tür',
    english: 'the door',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La porte est ouverte.',
      german: 'Die Tür ist offen.'
    },
    notes: 'Weiblich: la porte.',
    level: 'A1',
    tags: ['lesson5', 'home', 'furniture']
  },

  // Articles
  {
    id: 'lesson5-article-le',
    french: 'le',
    german: 'der/die/das (m, Sg.)',
    english: 'the (masculine)',
    partOfSpeech: 'article',
    gender: 'm',
    exampleSentence: {
      french: 'le salon',
      german: 'das Wohnzimmer'
    },
    notes: 'Bestimmter Artikel männlich Singular.',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'article', 'essential']
  },
  {
    id: 'lesson5-article-la',
    french: 'la',
    german: 'der/die/das (f, Sg.)',
    english: 'the (feminine)',
    partOfSpeech: 'article',
    gender: 'f',
    exampleSentence: {
      french: 'la cuisine',
      german: 'die Küche'
    },
    notes: 'Bestimmter Artikel weiblich Singular.',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'article', 'essential']
  },
  {
    id: 'lesson5-article-les',
    french: 'les',
    german: 'die (Plural)',
    english: 'the (plural)',
    partOfSpeech: 'article',
    exampleSentence: {
      french: 'les chambres',
      german: 'die Schlafzimmer'
    },
    notes: 'Bestimmter Artikel Plural - für m UND f. Vor Vokal: Liaison [lez].',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'article', 'essential']
  },

  // Prepositions
  {
    id: 'lesson5-prep-dans',
    french: 'dans',
    german: 'in',
    english: 'in / inside',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Le chat est dans la maison.',
      german: 'Die Katze ist im Haus.'
    },
    notes: 'Aussprache: [dɑ̃] mit Nasalvokal.',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place', 'essential']
  },
  {
    id: 'lesson5-prep-sur',
    french: 'sur',
    german: 'auf',
    english: 'on',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Le livre est sur la table.',
      german: 'Das Buch ist auf dem Tisch.'
    },
    notes: 'Aussprache [syʁ] - nicht mit "sous" verwechseln!',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place', 'essential']
  },
  {
    id: 'lesson5-prep-sous',
    french: 'sous',
    german: 'unter',
    english: 'under',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Le chat est sous le lit.',
      german: 'Die Katze ist unter dem Bett.'
    },
    notes: 'Aussprache [su]. Gegenteil von "sur".',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place', 'essential']
  },
  {
    id: 'lesson5-prep-devant',
    french: 'devant',
    german: 'vor',
    english: 'in front of',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'La voiture est devant la maison.',
      german: 'Das Auto ist vor dem Haus.'
    },
    notes: 'Aussprache [dəvɑ̃]. Örtlich "vor" (nicht zeitlich).',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place']
  },
  {
    id: 'lesson5-prep-derriere',
    french: 'derrière',
    german: 'hinter',
    english: 'behind',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'Le jardin est derrière la maison.',
      german: 'Der Garten ist hinter dem Haus.'
    },
    notes: 'Aussprache [dɛʁjɛʁ]. Gegenteil von "devant".',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place']
  },
  {
    id: 'lesson5-prep-acotede',
    french: 'à côté de',
    german: 'neben',
    english: 'next to',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'La lampe est à côté du canapé.',
      german: 'Die Lampe ist neben dem Sofa.'
    },
    notes: 'de + le = du, de + les = des. Vor la/l\' unverändert.',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place']
  },
  {
    id: 'lesson5-prep-entre',
    french: 'entre',
    german: 'zwischen',
    english: 'between',
    partOfSpeech: 'preposition',
    exampleSentence: {
      french: 'La table est entre les chaises.',
      german: 'Der Tisch ist zwischen den Stühlen.'
    },
    notes: 'Aussprache [ɑ̃tʁ].',
    level: 'A1',
    tags: ['lesson5', 'grammar', 'preposition', 'place']
  },

  // Verb aller
  {
    id: 'lesson5-aller-jevais',
    french: 'je vais',
    german: 'ich gehe / ich fahre',
    english: 'I go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais à l\'école.',
      german: 'Ich gehe zur Schule.'
    },
    notes: 'aller Konjugation: 1. Person Singular.',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation', 'essential']
  },
  {
    id: 'lesson5-aller-tuvas',
    french: 'tu vas',
    german: 'du gehst / du fährst',
    english: 'you go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu vas au restaurant?',
      german: 'Gehst du ins Restaurant?'
    },
    notes: 'aller Konjugation: 2. Person Singular.',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation', 'essential']
  },
  {
    id: 'lesson5-aller-ilva',
    french: 'il/elle va',
    german: 'er/sie geht / fährt',
    english: 'he/she goes',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle va à la gare.',
      german: 'Sie geht zum Bahnhof.'
    },
    notes: 'aller Konjugation: 3. Person Singular.',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation', 'essential']
  },
  {
    id: 'lesson5-aller-nousallons',
    french: 'nous allons',
    german: 'wir gehen / fahren',
    english: 'we go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous allons au cinéma.',
      german: 'Wir gehen ins Kino.'
    },
    notes: 'aller Konjugation: 1. Person Plural.',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation']
  },
  {
    id: 'lesson5-aller-vousallez',
    french: 'vous allez',
    german: 'ihr geht / Sie gehen',
    english: 'you go (plural/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous allez à la banque?',
      german: 'Gehen Sie zur Bank?'
    },
    notes: 'aller Konjugation: 2. Person Plural/formell.',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation']
  },
  {
    id: 'lesson5-aller-ilsvont',
    french: 'ils/elles vont',
    german: 'sie gehen / fahren',
    english: 'they go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils vont à l\'école.',
      german: 'Sie gehen zur Schule.'
    },
    notes: 'aller Konjugation: 3. Person Plural [vɔ̃].',
    level: 'A1',
    tags: ['lesson5', 'verb', 'aller', 'conjugation']
  },

  // Places in the city
  {
    id: 'lesson5-place-gare',
    french: 'la gare',
    german: 'der Bahnhof',
    english: 'the train station',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je vais à la gare.',
      german: 'Ich gehe zum Bahnhof.'
    },
    notes: 'Weiblich! Anders als das deutsche "der Bahnhof".',
    level: 'A1',
    tags: ['lesson5', 'city', 'place', 'essential']
  },
  {
    id: 'lesson5-place-banque',
    french: 'la banque',
    german: 'die Bank',
    english: 'the bank',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La banque est fermée.',
      german: 'Die Bank ist geschlossen.'
    },
    notes: 'Weiblich. Geldinstitut (nicht die Sitzbank!).',
    level: 'A1',
    tags: ['lesson5', 'city', 'place']
  },
  {
    id: 'lesson5-place-supermarche',
    french: 'le supermarché',
    german: 'der Supermarkt',
    english: 'the supermarket',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Nous allons au supermarché.',
      german: 'Wir gehen zum Supermarkt.'
    },
    notes: 'Männlich. à + le → au supermarché.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place', 'essential']
  },
  {
    id: 'lesson5-place-ecole',
    french: 'l\'école',
    german: 'die Schule',
    english: 'the school',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Les enfants vont à l\'école.',
      german: 'Die Kinder gehen zur Schule.'
    },
    notes: 'WEIBLICH: une école. Vor Vokal: l\'école.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place', 'essential']
  },
  {
    id: 'lesson5-place-restaurant',
    french: 'le restaurant',
    german: 'das Restaurant',
    english: 'the restaurant',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je vais au restaurant ce soir.',
      german: 'Ich gehe heute Abend ins Restaurant.'
    },
    notes: 'Männlich. à + le → au restaurant.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place']
  },
  {
    id: 'lesson5-place-poste',
    french: 'la poste',
    german: 'die Post',
    english: 'the post office',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La poste est à côté de la banque.',
      german: 'Die Post ist neben der Bank.'
    },
    notes: 'Weiblich: la poste.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place']
  },
  {
    id: 'lesson5-place-cinema',
    french: 'le cinéma',
    german: 'das Kino',
    english: 'the cinema',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'On va au cinéma?',
      german: 'Gehen wir ins Kino?'
    },
    notes: 'Männlich. à + le → au cinéma.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place']
  },
  {
    id: 'lesson5-place-hopital',
    french: 'l\'hôpital',
    german: 'das Krankenhaus',
    english: 'the hospital',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'L\'hôpital est grand.',
      german: 'Das Krankenhaus ist groß.'
    },
    notes: 'Männlich: un hôpital. Stummes h → l\'hôpital.',
    level: 'A1',
    tags: ['lesson5', 'city', 'place']
  },

  // Useful expressions
  {
    id: 'lesson5-expr-ilya',
    french: 'il y a',
    german: 'es gibt',
    english: 'there is / there are',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il y a une table dans la cuisine.',
      german: 'Es gibt einen Tisch in der Küche.'
    },
    notes: 'Unveränderlich - für Singular UND Plural. Aussprache [il‿i‿a].',
    level: 'A1',
    tags: ['lesson5', 'phrase', 'essential']
  },
  {
    id: 'lesson5-expr-ou',
    french: 'où',
    german: 'wo / wohin',
    english: 'where',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Où est la salle de bain?',
      german: 'Wo ist das Badezimmer?'
    },
    notes: 'Fragewort. Mit accent grave (où), nicht "ou" (oder).',
    level: 'A1',
    tags: ['lesson5', 'phrase', 'question']
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
    question: 'Welcher Artikel passt? ___ cuisine (die Küche)',
    options: ['le', 'la', 'les', 'l\''],
    correctAnswer: 'la',
    explanation: '"cuisine" ist weiblich, daher "la cuisine".',
    hints: [
      'Das Wort ist weiblich.',
      'Der weibliche Artikel im Singular ist "la".'
    ],
    tags: ['articles', 'gender', 'rooms']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Artikel passt? ___ salon (das Wohnzimmer)',
    options: ['le', 'la', 'les', 'l\''],
    correctAnswer: 'le',
    explanation: '"salon" ist männlich, daher "le salon".',
    hints: [
      'Das Wort ist männlich.',
      'Der männliche Artikel im Singular ist "le".'
    ],
    tags: ['articles', 'gender', 'rooms']
  },
  {
    id: 'guided-3',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Artikel passt? ___ appartement (die Wohnung)',
    options: ['le', 'la', 'les', 'l\''],
    correctAnswer: 'l\'',
    explanation: '"appartement" beginnt mit einem Vokal, daher wird "le" zu "l\'": l\'appartement.',
    hints: [
      'Das Wort beginnt mit einem Vokal.',
      'Vor Vokalen wird le/la zu "l\'".'
    ],
    tags: ['articles', 'elision']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Setze die Präposition ein: Le livre est ___ la table. (Das Buch ist AUF dem Tisch.)',
    correctAnswer: ['sur'],
    explanation: '"sur" bedeutet "auf". Aussprache [syʁ].',
    hints: [
      'Es bedeutet "auf".',
      'Es ist "sur" [syʁ].'
    ],
    tags: ['prepositions', 'place']
  },
  {
    id: 'guided-5',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Setze die Präposition ein: Le chat est ___ le lit. (Die Katze ist UNTER dem Bett.)',
    correctAnswer: ['sous'],
    explanation: '"sous" bedeutet "unter". Nicht mit "sur" (auf) verwechseln!',
    hints: [
      'Es bedeutet "unter".',
      'Es ist "sous" [su].'
    ],
    tags: ['prepositions', 'place']
  },
  {
    id: 'guided-6',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Konjugiere "aller": Je ___ à l\'école. (Ich gehe zur Schule.)',
    correctAnswer: ['vais'],
    explanation: 'Die Form von "aller" für "je" ist "vais".',
    hints: [
      'Die Form beginnt mit v.',
      'Es ist "vais" [vɛ].'
    ],
    tags: ['aller', 'conjugation']
  },
  {
    id: 'guided-7',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: das Bett',
    correctAnswer: ['le lit', 'lit'],
    explanation: '"le lit" bedeutet "das Bett". Männlich, das -t ist stumm.',
    hints: [
      'Es ist männlich (le).',
      'Es ist "le lit".'
    ],
    tags: ['furniture', 'vocabulary']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "la gare"?',
    options: ['die Bank', 'der Bahnhof', 'die Schule', 'das Kino'],
    correctAnswer: 'der Bahnhof',
    explanation: '"la gare" bedeutet "der Bahnhof" - im Französischen weiblich!',
    hints: [
      'Hier kommen und fahren Züge ab.',
      'Es ist "der Bahnhof".'
    ],
    tags: ['city', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Artikel passt? ___ chambres (die Schlafzimmer, Plural)',
    options: ['le', 'la', 'les', 'l\''],
    correctAnswer: 'les',
    explanation: 'Im Plural ist der Artikel immer "les" - egal ob männlich oder weiblich.',
    hints: [
      'Das Wort steht im Plural (-s).',
      'Der Plural-Artikel ist immer "les".'
    ],
    tags: ['articles', 'plural']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Konjugiere "aller": Nous ___ au cinéma. (Wir gehen ins Kino.)',
    correctAnswer: ['allons'],
    explanation: 'Die Form von "aller" für "nous" ist "allons".',
    hints: [
      'Die Endung für "nous" ist -ons.',
      'Es ist "allons" [alɔ̃].'
    ],
    tags: ['aller', 'conjugation']
  },
  {
    id: 'independent-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Konjugiere "aller": Ils ___ à la gare. (Sie gehen zum Bahnhof.)',
    correctAnswer: ['vont'],
    explanation: 'Die Form von "aller" für "ils/elles" ist "vont" [vɔ̃].',
    hints: [
      'Es ist ein Nasalvokal am Ende.',
      'Es ist "vont".'
    ],
    tags: ['aller', 'conjugation']
  },
  {
    id: 'independent-4',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie sagt man "ins Restaurant" (à + le restaurant)?',
    options: ['à le restaurant', 'au restaurant', 'aux restaurant', 'à la restaurant'],
    correctAnswer: 'au restaurant',
    explanation: 'à + le verschmilzt zu "au". "à le" ist immer falsch!',
    hints: [
      'à + le verschmilzt zu einem Wort.',
      'à + le = au.'
    ],
    tags: ['aller', 'contraction', 'preposition']
  },
  {
    id: 'independent-5',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verschmelzung: La lampe est à côté ___ canapé. (à côté de + le)',
    correctAnswer: ['du'],
    explanation: 'de + le verschmilzt zu "du": à côté du canapé.',
    hints: [
      'de + le bildet ein neues Wort.',
      'de + le = du.'
    ],
    tags: ['preposition', 'contraction']
  },
  {
    id: 'independent-6',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verneine den Satz: Je suis content. → Je ___ suis ___ content.',
    correctAnswer: ['ne, pas', 'ne pas'],
    explanation: 'Die Verneinung umklammert das Verb: ne + Verb + pas. "Je ne suis pas content."',
    hints: [
      'Die Verneinung besteht aus zwei Teilen.',
      'Es ist "ne ... pas".'
    ],
    tags: ['negation']
  },
  {
    id: 'independent-7',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Die Katze ist in der Küche.',
    correctAnswer: [
      'Le chat est dans la cuisine.',
      'Le chat est dans la cuisine',
      'le chat est dans la cuisine'
    ],
    explanation: '"dans" = in, "la cuisine" = die Küche. "Le chat est dans la cuisine."',
    hints: [
      '"in" heißt "dans".',
      'Es ist "Le chat est dans la cuisine."'
    ],
    tags: ['prepositions', 'translation', 'rooms']
  },
  {
    id: 'independent-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Le jardin est derrière la maison.',
    correctAnswer: [
      'Der Garten ist hinter dem Haus.',
      'Der Garten ist hinter dem Haus',
      'der Garten ist hinter dem Haus'
    ],
    explanation: '"jardin" = Garten, "derrière" = hinter, "maison" = Haus.',
    hints: [
      '"derrière" bedeutet "hinter".',
      'Es ist "Der Garten ist hinter dem Haus."'
    ],
    tags: ['prepositions', 'translation']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was ist die korrekte Verneinung von "Il y a une table."?',
    options: [
      'Il y a pas une table.',
      'Il n\'y a pas de table.',
      'Il ne y a pas table.',
      'Il y ne a pas table.'
    ],
    correctAnswer: 'Il n\'y a pas de table.',
    explanation: 'ne → n\' vor Vokal, und nach der Verneinung wird "une" zu "de": "Il n\'y a pas de table."',
    hints: [
      'ne wird vor "y" zu "n\'".',
      'Nach pas wird une/un/des zu "de".'
    ],
    tags: ['negation', 'il-y-a']
  },
  {
    id: 'independent-10',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich gehe zum Supermarkt.',
    correctAnswer: [
      'Je vais au supermarché.',
      'Je vais au supermarché',
      'je vais au supermarché'
    ],
    explanation: '"je vais" (ich gehe) + "au supermarché" (à + le → au). "Je vais au supermarché."',
    hints: [
      'Benutze "je vais" und denke an à + le = au.',
      'Es ist "Je vais au supermarché."'
    ],
    tags: ['aller', 'contraction', 'translation', 'city']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige: Vous ___ à la poste? (aller) - (Gehen Sie zur Post?)',
    correctAnswer: ['allez'],
    explanation: 'Die Form von "aller" für "vous" ist "allez" [ale].',
    tags: ['aller', 'conjugation']
  },
  {
    id: 'assess-2',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist korrekt?',
    options: [
      'Je vais à les toilettes.',
      'Je vais aux toilettes.',
      'Je vais au toilettes.',
      'Je vais à toilettes.'
    ],
    correctAnswer: 'Je vais aux toilettes.',
    explanation: '"toilettes" ist Plural, also à + les → aux: "Je vais aux toilettes."',
    tags: ['aller', 'contraction', 'plural']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Es gibt kein Bett im Schlafzimmer.',
    correctAnswer: [
      'Il n\'y a pas de lit dans la chambre.',
      'Il n\'y a pas de lit dans la chambre',
      'il n\'y a pas de lit dans la chambre'
    ],
    explanation: 'Verneintes "il y a" → "il n\'y a pas de" (kein), "dans la chambre" (im Schlafzimmer).',
    tags: ['negation', 'il-y-a', 'prepositions', 'translation']
  },
  {
    id: 'assess-4',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Verschmelzung: La table est à côté ___ chaises. (à côté de + les)',
    correctAnswer: ['des'],
    explanation: 'de + les verschmilzt zu "des": à côté des chaises.',
    tags: ['preposition', 'contraction', 'plural']
  },
  {
    id: 'assess-5',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: La lampe est entre le lit et l\'armoire.',
    correctAnswer: [
      'Die Lampe ist zwischen dem Bett und dem Schrank.',
      'Die Lampe ist zwischen dem Bett und dem Schrank',
      'die Lampe ist zwischen dem Bett und dem Schrank'
    ],
    explanation: '"entre" = zwischen, "le lit" = das Bett, "l\'armoire" = der Schrank (weiblich!).',
    tags: ['prepositions', 'furniture', 'translation']
  },
  {
    id: 'assess-6',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Marie fährt zum Bahnhof. Welcher Satz ist korrekt?',
    options: [
      'Elle vais à la gare.',
      'Elle va à la gare.',
      'Elle va au gare.',
      'Elle vont à la gare.'
    ],
    correctAnswer: 'Elle va à la gare.',
    explanation: '"elle" → "va" (3. Person Singular). "gare" ist weiblich → "à la gare" (kein "au").',
    tags: ['aller', 'conjugation', 'contraction', 'gender']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson05: Lesson = {
  meta: {
    id: 'lesson-05',
    number: 5,
    title: 'La Maison',
    titleGerman: 'Das Haus',
    objectives: [
      'Die bestimmten Artikel (le, la, les, l\') sicher verwenden',
      'Räume, Möbel und Orte in der Stadt benennen',
      'Mit Ortspräpositionen (dans, sur, sous, devant, derrière, à côté de, entre) Positionen beschreiben',
      'Sätze mit "ne ... pas" verneinen',
      'Das Verb "aller" im Präsens konjugieren',
      'Mit à + Artikel (au, à la, aux) sagen, wohin man geht'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04'],
    tags: ['home', 'rooms', 'furniture', 'city', 'articles', 'prepositions', 'negation', 'aller']
  },

  introduction: {
    objectives: [
      'Die bestimmten Artikel le, la, les und l\' richtig anwenden',
      'Das eigene Zuhause und die Position von Dingen beschreiben',
      'Verneinte Sätze mit "ne ... pas" bilden',
      'Mit dem Verb "aller" ausdrücken, wohin man geht'
    ],
    motivation: `
In dieser Lektion machst du dein neues Französisch alltagstauglich: Du lernst, dein Zuhause zu beschreiben,
zu sagen wo sich Möbel befinden und wohin du gehst.

Du beherrschst danach die bestimmten Artikel (le/la/les/l'), kannst mit Präpositionen Positionen ausdrücken,
Sätze verneinen und das wichtige Verb "aller" (gehen) benutzen - alles Grundbausteine für echte Gespräche!
    `,
    culturalNote: `
**Wohnen in Frankreich**

In französischen Städten wohnen viele Menschen in einem "appartement" statt in einer "maison". Beim Beschreiben
der Größe zählt man nicht "Zimmer" wie in Deutschland, sondern spricht von "T2", "T3" usw. (T = type, also Typ):
Ein "T3" hat zum Beispiel drei Hauptzimmer plus Küche und Bad.

**Die "salle de bain" und die "toilettes"**

Ein kultureller Unterschied: In Frankreich sind das Badezimmer (la salle de bain) und die Toilette
(les toilettes) oft ZWEI getrennte Räume. Frag in einem Restaurant also nach "les toilettes", nicht nach
"la salle de bain"!
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
      'Du kennst die bestimmten Artikel le, la, les und l\' und wann du sie benutzt',
      'Du kannst Räume und Möbel benennen (la cuisine, le salon, la chambre, la table, le lit ...)',
      'Du kannst Orte in der Stadt nennen (la gare, la banque, le supermarché, l\'école ...)',
      'Du beschreibst Positionen mit Präpositionen (dans, sur, sous, devant, derrière, à côté de, entre)',
      'Du kannst Sätze mit "ne ... pas" verneinen und weißt, dass un/une/des dann zu "de" wird',
      'Du konjugierst das Verb "aller" im Präsens (je vais, tu vas, il va, nous allons, vous allez, ils vont)',
      'Du beherrschst die Verschmelzungen à + le = au, à + les = aux und de + le = du, de + les = des'
    ],
    nextLesson: 'lesson-06'
  }
};
