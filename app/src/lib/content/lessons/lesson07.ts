import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 07: La Nourriture - Das Essen
 * Food & shopping in French for German speakers
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Partitive articles (du, de la, de l', des) and "pas de"
 * - Verb "vouloir" (to want) conjugation
 * - Verb "prendre" (to take/have) conjugation
 * - Quantity expressions (un kilo de, un litre de, beaucoup de)
 * - Food, beverages, meals vocabulary
 * - Ordering food and shopping for groceries
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction to the topic
  {
    id: 'intro-nourriture',
    title: 'Über das Essen sprechen',
    type: 'explanation',
    content: `
Essen ist in Frankreich ein zentrales Thema - kulturell, sozial und sprachlich!
In dieser Lektion lernst du, im Supermarkt einzukaufen und im Restaurant zu bestellen.

**Was du in dieser Lektion brauchst:**

- Eine neue Art von Artikel: den **Teilungsartikel** (article partitif)
- Zwei sehr nützliche Verben: **vouloir** (wollen) und **prendre** (nehmen)
- Mengenangaben wie "ein Kilo", "ein Liter", "viel"

Mit diesen Werkzeugen kannst du fast jede Situation rund ums Essen meistern - vom Markt bis zum Café!
    `,
    germanExplanation: 'Diese Lektion verbindet Wortschatz mit praktischer Grammatik für den Alltag.'
  },

  // Section 2: Partitive article concept
  {
    id: 'partitif-concept',
    title: 'Der Teilungsartikel (article partitif)',
    type: 'explanation',
    content: `
Im Deutschen sagen wir oft einfach "Ich esse Brot" - ohne Artikel.
Im Französischen MUSS man hier einen **Teilungsartikel** benutzen!

**Was ist ein Teilungsartikel?**

Er drückt eine unbestimmte Menge aus - "etwas" oder "ein Teil von etwas".
Man benutzt ihn bei Dingen, die man nicht zählen kann (Brot, Wasser, Käse...).

**Vergleich:**
- Deutsch: "Ich esse Brot." (kein Artikel)
- Französisch: "Je mange **du** pain." (mit Teilungsartikel!)

Wörtlich heißt das fast: "Ich esse vom Brot / etwas Brot."

**Merke:** Der Teilungsartikel ist im Französischen fast immer Pflicht, wo das Deutsche ihn weglässt!
    `,
    germanExplanation: 'Der Teilungsartikel hat im Deutschen keine direkte Entsprechung - genau hinsehen!'
  },

  // Section 3: Partitive article forms table
  {
    id: 'partitif-formen',
    title: 'Die Formen des Teilungsartikels',
    type: 'table',
    content: `
Der Teilungsartikel richtet sich nach Geschlecht und Anfangsbuchstabe des Nomens.

| Form | Verwendung | Aussprache | Beispiel | Deutsch |
|------|------------|------------|----------|---------|
| du | maskulin (Konsonant) | [dy] | du pain | (etwas) Brot |
| de la | feminin (Konsonant) | [də la] | de la viande | (etwas) Fleisch |
| de l' | vor Vokal/stummem h | [də l] | de l'eau | (etwas) Wasser |
| des | Plural | [de] | des légumes | (einige) Gemüse |

**Merkhilfe:**
- maskulin → **du** (du fromage = Käse)
- feminin → **de la** (de la salade = Salat)
- vor Vokal → **de l'** (de l'huile = Öl)
- Plural → **des** (des fruits = Früchte)

**Achtung:** "du" ist hier NICHT das Pronomen "du" (= deutsch "du" heißt im Französischen "tu")!
"du" ist die Verschmelzung von "de + le".
    `,
    germanExplanation: 'Die Wahl der Form hängt von Geschlecht und Anlaut des folgenden Wortes ab.'
  },

  // Section 4: Pas de
  {
    id: 'pas-de',
    title: 'Verneinung: "pas de"',
    type: 'explanation',
    content: `
Eine wichtige Regel: In der Verneinung wird der Teilungsartikel zu **"de"** (oder **"d'"** vor Vokal)!

**Im positiven Satz:**
- Je mange **du** pain. (Ich esse Brot.)
- Je bois **de l'**eau. (Ich trinke Wasser.)
- Il y a **des** légumes. (Es gibt Gemüse.)

**In der Verneinung:**
- Je ne mange **pas de** pain. (Ich esse kein Brot.)
- Je ne bois **pas d'**eau. (Ich trinke kein Wasser.)
- Il n'y a **pas de** légumes. (Es gibt kein Gemüse.)

**Die Regel:** Nach einer Verneinung (ne... pas) wird aus *du / de la / de l' / des* einfach **de** / **d'**.

**Wichtige Ausnahme:** Nach dem Verb "être" bleibt der Artikel!
- Ce n'est pas **du** vin. (Das ist kein Wein.)
    `,
    germanExplanation: 'Im Deutschen wird hier "kein" benutzt - im Französischen immer "pas de".'
  },

  // Section 5: Partitif vs. indefinite/definite article
  {
    id: 'partitif-vergleich',
    title: 'Teilungsartikel vs. bestimmter/unbestimmter Artikel',
    type: 'comparison',
    content: `
Wann benutzt man welchen Artikel? Das hängt von der Bedeutung ab!

**Teilungsartikel (du, de la, des) - unbestimmte Menge:**
- Je mange **du** chocolat. (Ich esse [etwas] Schokolade.)

**Unbestimmter Artikel (un, une) - ein ganzes, zählbares Stück:**
- Je mange **une** pomme. (Ich esse einen Apfel.)

**Bestimmter Artikel (le, la, les) - allgemein / Vorlieben:**
- J'aime **le** chocolat. (Ich mag Schokolade [generell].)

**Faustregel:**
- "etwas/ein Teil von" → Teilungsartikel (du, de la, des)
- "ein ganzes Stück" → un, une
- "mögen/lieben/hassen" → immer le, la, les!

**Typischer Fehler:** Nach **aimer, adorer, détester** steht NIE der Teilungsartikel, sondern immer le/la/les!
- ✅ J'aime le café. (Ich mag Kaffee.)
- ❌ J'aime du café.
    `,
    germanExplanation: 'Nach Verben des Mögens steht immer der bestimmte Artikel - ein häufiger Stolperstein!'
  },

  // Section 6: Verb vouloir
  {
    id: 'verb-vouloir',
    title: 'Das Verb "vouloir" (wollen)',
    type: 'table',
    content: `
"Vouloir" bedeutet "wollen" und ist unregelmäßig - aber sehr wichtig zum Bestellen!

## Konjugation im Präsens (Présent)

| Pronomen | vouloir | Aussprache | Deutsch | Beispiel |
|----------|---------|------------|---------|----------|
| je | veux | [vø] | ich will | Je veux du pain. (Ich will Brot.) |
| tu | veux | [vø] | du willst | Tu veux du café? (Willst du Kaffee?) |
| il/elle | veut | [vø] | er/sie will | Elle veut de l'eau. (Sie will Wasser.) |
| nous | voulons | [vulɔ̃] | wir wollen | Nous voulons du vin. (Wir wollen Wein.) |
| vous | voulez | [vule] | ihr wollt / Sie wollen | Vous voulez du thé? (Wollen Sie Tee?) |
| ils/elles | veulent | [vœl] | sie wollen | Ils veulent des fruits. (Sie wollen Obst.) |

**Höflichkeit:** "Je veux" klingt direkt! Höflicher ist **"Je voudrais"** (ich möchte/hätte gerne).
Im Restaurant und Geschäft benutzt man fast immer "je voudrais"!
    `,
    germanExplanation: 'je/tu veux und il veut werden gleich ausgesprochen [vø] - nur die Schreibung unterscheidet sich.'
  },

  // Section 7: Je voudrais
  {
    id: 'je-voudrais',
    title: 'Die Höflichkeitsform "je voudrais"',
    type: 'tip',
    content: `
"Je voudrais" [ʒə vudʁɛ] ist die höfliche Form von "je veux" - vergleichbar mit dem deutschen "ich hätte gerne".

**Warum so wichtig?**
"Je veux" (ich will) wirkt in Frankreich oft unhöflich oder kindlich.
Beim Einkaufen und Bestellen sagt man fast IMMER "je voudrais".

**Beispiele:**
- Je voudrais un café, s'il vous plaît. (Ich hätte gerne einen Kaffee, bitte.)
- Je voudrais un kilo de pommes. (Ich hätte gerne ein Kilo Äpfel.)
- Je voudrais de l'eau. (Ich hätte gerne Wasser.)

**Tipp:** Kombiniere "je voudrais" immer mit "s'il vous plaît" - dann klingst du perfekt höflich!
    `
  },

  // Section 8: Verb prendre
  {
    id: 'verb-prendre',
    title: 'Das Verb "prendre" (nehmen)',
    type: 'table',
    content: `
"Prendre" bedeutet "nehmen", wird aber auch für "essen/trinken/bestellen" benutzt - sehr vielseitig!

## Konjugation im Präsens (Présent)

| Pronomen | prendre | Aussprache | Deutsch | Beispiel |
|----------|---------|------------|---------|----------|
| je | prends | [pʁɑ̃] | ich nehme | Je prends un café. (Ich nehme einen Kaffee.) |
| tu | prends | [pʁɑ̃] | du nimmst | Tu prends du thé? (Nimmst du Tee?) |
| il/elle | prend | [pʁɑ̃] | er/sie nimmt | Il prend de la soupe. (Er nimmt Suppe.) |
| nous | prenons | [pʁənɔ̃] | wir nehmen | Nous prenons le menu. (Wir nehmen das Menü.) |
| vous | prenez | [pʁəne] | ihr nehmt / Sie nehmen | Vous prenez un dessert? (Nehmen Sie ein Dessert?) |
| ils/elles | prennent | [pʁɛn] | sie nehmen | Ils prennent du vin. (Sie nehmen Wein.) |

**Achtung Aussprache:** Im Singular (je/tu/il) ist das -d stumm und das -en wird nasal [ɑ̃].
Im Plural (nous/vous/ils) wird das -en zu [ə] bzw. [ɛ] - kein Nasal mehr!
    `,
    germanExplanation: '"Prendre" benutzt man im Restaurant statt "essen/trinken": "Je prends une pizza."'
  },

  // Section 9: Quantity expressions
  {
    id: 'mengenangaben',
    title: 'Mengenangaben (les quantités)',
    type: 'table',
    content: `
Nach einer konkreten Mengenangabe steht IMMER nur **"de"** (oder "d'") - NICHT der Teilungsartikel!

| Französisch | Aussprache | Deutsch | Beispiel |
|-------------|------------|---------|----------|
| un kilo de | [œ̃ kilo də] | ein Kilo | un kilo de pommes (ein Kilo Äpfel) |
| un litre de | [œ̃ litʁ də] | ein Liter | un litre de lait (ein Liter Milch) |
| beaucoup de | [boku də] | viel(e) | beaucoup de sucre (viel Zucker) |
| un peu de | [œ̃ pø də] | ein bisschen | un peu de sel (ein bisschen Salz) |
| une bouteille de | [yn butɛj də] | eine Flasche | une bouteille de vin (eine Flasche Wein) |
| un morceau de | [œ̃ mɔʁso də] | ein Stück | un morceau de fromage (ein Stück Käse) |
| une tranche de | [yn tʁɑ̃ʃ də] | eine Scheibe | une tranche de pain (eine Scheibe Brot) |

**WICHTIGE REGEL:**
Nach Mengenangaben NIE "du/de la/des", sondern immer nur **"de"**!
- ✅ beaucoup **de** pain (viel Brot)
- ❌ beaucoup du pain
    `,
    germanExplanation: 'Mengenangabe + de ist eine zentrale Regel - kein Teilungsartikel danach!'
  },

  // Section 10: Foods overview
  {
    id: 'aliments-uebersicht',
    title: 'Lebensmittel im Überblick',
    type: 'example',
    content: `
Hier die wichtigsten Lebensmittel - achte auf das Geschlecht (der Artikel verrät es)!
    `,
    examples: [
      { french: 'le pain', german: 'das Brot', notes: 'maskulin - [lə pɛ̃]' },
      { french: 'le fromage', german: 'der Käse', notes: 'maskulin - sehr wichtig in Frankreich!' },
      { french: 'la viande', german: 'das Fleisch', notes: 'feminin - [la vjɑ̃d]' },
      { french: 'le poisson', german: 'der Fisch', notes: 'maskulin - [lə pwasɔ̃]' },
      { french: 'les légumes', german: 'das Gemüse', notes: 'maskulin Plural' },
      { french: 'les fruits', german: 'das Obst', notes: 'maskulin Plural - [le fʁɥi]' },
      { french: 'la pomme', german: 'der Apfel', notes: 'feminin! Nicht verwechseln mit "pomme de terre" = Kartoffel' }
    ]
  },

  // Section 11: Beverages
  {
    id: 'boissons-uebersicht',
    title: 'Getränke (les boissons)',
    type: 'example',
    content: `
Die wichtigsten Getränke - im Café unverzichtbar!
    `,
    examples: [
      { french: "l'eau (f)", german: 'das Wasser', notes: 'feminin! [lo] - une eau plate (still) / gazeuse (mit Kohlensäure)' },
      { french: 'le vin', german: 'der Wein', notes: 'maskulin - vin rouge (rot), vin blanc (weiß)' },
      { french: 'le café', german: 'der Kaffee', notes: 'maskulin - "un café" = ein Espresso in Frankreich!' },
      { french: 'le thé', german: 'der Tee', notes: 'maskulin - [lə te]' },
      { french: 'le lait', german: 'die Milch', notes: 'maskulin! [lə lɛ]' },
      { french: 'le jus', german: 'der Saft', notes: 'maskulin - jus d\'orange (Orangensaft)' }
    ]
  },

  // Section 12: Meals
  {
    id: 'repas-uebersicht',
    title: 'Die Mahlzeiten (les repas)',
    type: 'table',
    content: `
Die drei Hauptmahlzeiten des Tages:

| Französisch | Aussprache | Deutsch | Wann? |
|-------------|------------|---------|-------|
| le petit-déjeuner | [lə pəti deʒœne] | das Frühstück | morgens |
| le déjeuner | [lə deʒœne] | das Mittagessen | mittags (oft 12-14 Uhr) |
| le dîner | [lə dine] | das Abendessen | abends (oft ab 19-20 Uhr) |

**Kulturhinweis:** In Frankreich isst man später als in Deutschland!
Das Abendessen beginnt oft erst um 20 Uhr.

**Verben zu den Mahlzeiten:**
- prendre le petit-déjeuner = frühstücken
- déjeuner = zu Mittag essen
- dîner = zu Abend essen
    `,
    germanExplanation: 'Vorsicht: "déjeuner" ist das Mittagessen, NICHT das Frühstück (das ist "petit-déjeuner")!'
  },

  // Section 13: Dialogue at the market
  {
    id: 'dialogue-marche',
    title: 'Dialog: Auf dem Markt einkaufen',
    type: 'dialogue',
    content: `
**Situation:** Eine Kundin kauft Obst und Gemüse auf dem Markt.

**Le marchand:** Bonjour madame! Vous désirez?
**La cliente:** Bonjour! Je voudrais un kilo de pommes, s'il vous plaît.
**Le marchand:** Voilà. Et avec ça?
**La cliente:** Je voudrais aussi de la salade et des tomates.
**Le marchand:** Très bien. Vous voulez du fromage? Il est excellent aujourd'hui.
**La cliente:** Non merci, pas de fromage. C'est combien?
**Le marchand:** Ça fait huit euros, s'il vous plaît.
**La cliente:** Voilà. Merci, au revoir!

---

**Beachte:**
- "Vous désirez?" = "Was wünschen Sie?" - typische Verkäuferfrage
- "Et avec ça?" = "Und sonst noch was?"
- "pas de fromage" - Verneinung mit "pas de"!
- "Ça fait... euros" = "Das macht... Euro"
- "C'est combien?" = "Wie viel kostet das?"
    `
  },

  // Section 14: Dialogue at the restaurant
  {
    id: 'dialogue-restaurant',
    title: 'Dialog: Im Restaurant bestellen',
    type: 'dialogue',
    content: `
**Situation:** Zwei Gäste bestellen im Restaurant.

**Le serveur:** Bonsoir! Vous avez choisi?
**Client 1:** Oui. Je prends le menu du jour, s'il vous plaît.
**Le serveur:** Et comme boisson?
**Client 1:** Je voudrais de l'eau, s'il vous plaît.
**Client 2:** Pour moi, le poisson avec des légumes. Et un verre de vin rouge.
**Le serveur:** Très bien. Vous voulez un dessert?
**Client 2:** Oui, nous prenons deux cafés et une tarte.
**Le serveur:** Parfait, merci!

---

**Beachte:**
- "Vous avez choisi?" = "Haben Sie gewählt?"
- "le menu du jour" = das Tagesmenü
- "comme boisson" = "als Getränk"
- "un verre de vin" = ein Glas Wein (Mengenangabe + de!)
- "Je prends" und "je voudrais" wechseln sich natürlich ab
    `
  },

  // Section 15: Useful restaurant phrases
  {
    id: 'phrases-restaurant',
    title: 'Nützliche Phrasen im Restaurant',
    type: 'example',
    content: `
Diese Phrasen helfen dir, im Restaurant zurechtzukommen:
    `,
    examples: [
      { french: "L'addition, s'il vous plaît.", german: 'Die Rechnung, bitte.', notes: 'Standard am Ende des Essens' },
      { french: 'Je voudrais réserver une table.', german: 'Ich möchte einen Tisch reservieren.', notes: 'Für die Reservierung' },
      { french: "Qu'est-ce que vous recommandez?", german: 'Was empfehlen Sie?', notes: 'Nach Empfehlungen fragen' },
      { french: 'C\'est délicieux!', german: 'Das ist köstlich!', notes: 'Ein Kompliment ans Essen' },
      { french: 'Je suis végétarien(ne).', german: 'Ich bin Vegetarier(in).', notes: 'Feminin: végétarienne' },
      { french: 'Une table pour deux, s\'il vous plaît.', german: 'Einen Tisch für zwei, bitte.', notes: 'Beim Ankommen' }
    ]
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Foods
  {
    id: 'lesson7-food-pain',
    french: 'le pain',
    german: 'das Brot',
    english: 'bread',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je mange du pain.',
      german: 'Ich esse Brot.'
    },
    notes: 'Aussprache: [pɛ̃] (nasal!). Die Baguette ist das typische französische Brot.',
    level: 'A1',
    tags: ['lesson7', 'food', 'essential']
  },
  {
    id: 'lesson7-food-fromage',
    french: 'le fromage',
    german: 'der Käse',
    english: 'cheese',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Tu veux du fromage?',
      german: 'Willst du Käse?'
    },
    notes: 'Frankreich hat über 300 Käsesorten!',
    level: 'A1',
    tags: ['lesson7', 'food', 'essential']
  },
  {
    id: 'lesson7-food-pomme',
    french: 'la pomme',
    german: 'der Apfel',
    english: 'apple',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je voudrais un kilo de pommes.',
      german: 'Ich hätte gerne ein Kilo Äpfel.'
    },
    notes: 'Feminin! "pomme de terre" = Kartoffel (wörtlich: Erdapfel)',
    level: 'A1',
    tags: ['lesson7', 'food', 'fruit']
  },
  {
    id: 'lesson7-food-viande',
    french: 'la viande',
    german: 'das Fleisch',
    english: 'meat',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je ne mange pas de viande.',
      german: 'Ich esse kein Fleisch.'
    },
    notes: 'Aussprache: [vjɑ̃d]. Feminin: de la viande.',
    level: 'A1',
    tags: ['lesson7', 'food']
  },
  {
    id: 'lesson7-food-poisson',
    french: 'le poisson',
    german: 'der Fisch',
    english: 'fish',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il prend du poisson.',
      german: 'Er nimmt Fisch.'
    },
    notes: 'Aussprache: [pwasɔ̃]. Nicht verwechseln mit "poison" = Gift!',
    level: 'A1',
    tags: ['lesson7', 'food']
  },
  {
    id: 'lesson7-food-legumes',
    french: 'les légumes',
    german: 'das Gemüse',
    english: 'vegetables',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Mange des légumes!',
      german: 'Iss Gemüse!'
    },
    notes: 'Maskulin Plural: des légumes. Singular: un légume.',
    level: 'A1',
    tags: ['lesson7', 'food']
  },
  {
    id: 'lesson7-food-fruits',
    french: 'les fruits',
    german: 'das Obst',
    english: 'fruit',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'aime les fruits.',
      german: 'Ich mag Obst.'
    },
    notes: 'Aussprache: [fʁɥi]. Maskulin Plural.',
    level: 'A1',
    tags: ['lesson7', 'food', 'fruit']
  },
  {
    id: 'lesson7-food-tomate',
    french: 'la tomate',
    german: 'die Tomate',
    english: 'tomato',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je voudrais des tomates.',
      german: 'Ich hätte gerne Tomaten.'
    },
    notes: 'Feminin. Botanisch eine Frucht, in der Küche ein Gemüse.',
    level: 'A1',
    tags: ['lesson7', 'food', 'vegetable']
  },
  {
    id: 'lesson7-food-salade',
    french: 'la salade',
    german: 'der Salat',
    english: 'salad/lettuce',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Tu veux de la salade?',
      german: 'Willst du Salat?'
    },
    notes: 'Feminin: de la salade. Bedeutet Salatkopf und Salatgericht.',
    level: 'A1',
    tags: ['lesson7', 'food', 'vegetable']
  },
  {
    id: 'lesson7-food-oeuf',
    french: "l'œuf",
    german: 'das Ei',
    english: 'egg',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je prends des œufs.',
      german: 'Ich nehme Eier.'
    },
    notes: 'Maskulin. Singular [œf], Plural "œufs" [ø] - das f wird im Plural stumm!',
    level: 'A1',
    tags: ['lesson7', 'food']
  },
  {
    id: 'lesson7-food-sucre',
    french: 'le sucre',
    german: 'der Zucker',
    english: 'sugar',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Un peu de sucre, s\'il vous plaît.',
      german: 'Ein bisschen Zucker, bitte.'
    },
    notes: 'Maskulin: du sucre. Aussprache: [sykʁ].',
    level: 'A1',
    tags: ['lesson7', 'food']
  },
  {
    id: 'lesson7-food-sel',
    french: 'le sel',
    german: 'das Salz',
    english: 'salt',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il n\'y a pas de sel.',
      german: 'Es gibt kein Salz.'
    },
    notes: 'Maskulin: du sel. Aussprache: [sɛl].',
    level: 'A1',
    tags: ['lesson7', 'food']
  },

  // Beverages
  {
    id: 'lesson7-drink-eau',
    french: "l'eau",
    german: 'das Wasser',
    english: 'water',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je voudrais de l\'eau.',
      german: 'Ich hätte gerne Wasser.'
    },
    notes: 'FEMININ (une eau)! Aussprache: [o]. Vor Vokal: de l\'eau.',
    level: 'A1',
    tags: ['lesson7', 'beverage', 'essential']
  },
  {
    id: 'lesson7-drink-vin',
    french: 'le vin',
    german: 'der Wein',
    english: 'wine',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Un verre de vin rouge, s\'il vous plaît.',
      german: 'Ein Glas Rotwein, bitte.'
    },
    notes: 'Aussprache: [vɛ̃] (nasal!). vin rouge/blanc/rosé.',
    level: 'A1',
    tags: ['lesson7', 'beverage']
  },
  {
    id: 'lesson7-drink-cafe',
    french: 'le café',
    german: 'der Kaffee',
    english: 'coffee',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je prends un café.',
      german: 'Ich nehme einen Kaffee.'
    },
    notes: '"un café" ist in Frankreich ein Espresso! Bedeutet auch "das Café".',
    level: 'A1',
    tags: ['lesson7', 'beverage', 'essential']
  },
  {
    id: 'lesson7-drink-the',
    french: 'le thé',
    german: 'der Tee',
    english: 'tea',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Vous voulez du thé?',
      german: 'Wollen Sie Tee?'
    },
    notes: 'Aussprache: [te]. Maskulin: du thé.',
    level: 'A1',
    tags: ['lesson7', 'beverage']
  },
  {
    id: 'lesson7-drink-lait',
    french: 'le lait',
    german: 'die Milch',
    english: 'milk',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Un litre de lait, s\'il vous plaît.',
      german: 'Einen Liter Milch, bitte.'
    },
    notes: 'MASKULIN (das -t ist stumm: [lɛ])! du lait.',
    level: 'A1',
    tags: ['lesson7', 'beverage']
  },

  // Meals
  {
    id: 'lesson7-meal-petitdejeuner',
    french: 'le petit-déjeuner',
    german: 'das Frühstück',
    english: 'breakfast',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je prends le petit-déjeuner à huit heures.',
      german: 'Ich frühstücke um acht Uhr.'
    },
    notes: 'Wörtlich "kleines Mittagessen". Aussprache: [pəti deʒœne].',
    level: 'A1',
    tags: ['lesson7', 'meal']
  },
  {
    id: 'lesson7-meal-dejeuner',
    french: 'le déjeuner',
    german: 'das Mittagessen',
    english: 'lunch',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le déjeuner est à midi.',
      german: 'Das Mittagessen ist um zwölf.'
    },
    notes: 'ACHTUNG: NICHT das Frühstück! Das ist "petit-déjeuner".',
    level: 'A1',
    tags: ['lesson7', 'meal']
  },
  {
    id: 'lesson7-meal-diner',
    french: 'le dîner',
    german: 'das Abendessen',
    english: 'dinner',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le dîner est à vingt heures.',
      german: 'Das Abendessen ist um zwanzig Uhr.'
    },
    notes: 'In Frankreich oft erst ab 20 Uhr! Auch als Verb: dîner = zu Abend essen.',
    level: 'A1',
    tags: ['lesson7', 'meal']
  },

  // Verb vouloir
  {
    id: 'lesson7-vouloir-jeveux',
    french: 'je veux',
    german: 'ich will',
    english: 'I want',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je veux du pain.',
      german: 'Ich will Brot.'
    },
    notes: 'vouloir 1. Sg. Höflicher: "je voudrais" (ich hätte gerne).',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-tuveux',
    french: 'tu veux',
    german: 'du willst',
    english: 'you want',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu veux du café?',
      german: 'Willst du Kaffee?'
    },
    notes: 'vouloir 2. Sg. Gleiche Form wie "je veux": veux [vø].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-ilveut',
    french: 'il/elle veut',
    german: 'er/sie will',
    english: 'he/she wants',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle veut de l\'eau.',
      german: 'Sie will Wasser.'
    },
    notes: 'vouloir 3. Sg. Endung -t, aber Aussprache wie "veux": [vø].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-nousvoulons',
    french: 'nous voulons',
    german: 'wir wollen',
    english: 'we want',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous voulons du vin.',
      german: 'Wir wollen Wein.'
    },
    notes: 'vouloir 1. Pl. Aussprache: [vulɔ̃].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-vousvoulez',
    french: 'vous voulez',
    german: 'ihr wollt / Sie wollen',
    english: 'you want (pl/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous voulez du thé?',
      german: 'Wollen Sie Tee?'
    },
    notes: 'vouloir 2. Pl. Aussprache: [vule].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-ilsveulent',
    french: 'ils/elles veulent',
    german: 'sie wollen',
    english: 'they want',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils veulent des fruits.',
      german: 'Sie wollen Obst.'
    },
    notes: 'vouloir 3. Pl. Aussprache: [vœl] - das -ent ist stumm!',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'conjugation']
  },
  {
    id: 'lesson7-vouloir-jevoudrais',
    french: 'je voudrais',
    german: 'ich hätte gerne / ich möchte',
    english: 'I would like',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je voudrais un café, s\'il vous plaît.',
      german: 'Ich hätte gerne einen Kaffee, bitte.'
    },
    notes: 'Höfliche Form von "je veux". Zum Bestellen/Einkaufen unverzichtbar!',
    level: 'A1',
    tags: ['lesson7', 'verb', 'vouloir', 'politeness', 'essential']
  },

  // Verb prendre
  {
    id: 'lesson7-prendre-jeprends',
    french: 'je prends',
    german: 'ich nehme',
    english: 'I take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je prends un café.',
      german: 'Ich nehme einen Kaffee.'
    },
    notes: 'prendre 1. Sg. Das -ds ist stumm: [pʁɑ̃]. Im Restaurant statt "essen/trinken"!',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation', 'essential']
  },
  {
    id: 'lesson7-prendre-tuprends',
    french: 'tu prends',
    german: 'du nimmst',
    english: 'you take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu prends du thé?',
      german: 'Nimmst du Tee?'
    },
    notes: 'prendre 2. Sg. Gleiche Aussprache wie "je prends": [pʁɑ̃].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson7-prendre-ilprend',
    french: 'il/elle prend',
    german: 'er/sie nimmt',
    english: 'he/she takes',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Il prend de la soupe.',
      german: 'Er nimmt Suppe.'
    },
    notes: 'prendre 3. Sg. Kein -ds, nur -d (stumm): [pʁɑ̃].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson7-prendre-nousprenons',
    french: 'nous prenons',
    german: 'wir nehmen',
    english: 'we take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous prenons le menu.',
      german: 'Wir nehmen das Menü.'
    },
    notes: 'prendre 1. Pl. Achtung: nur EIN n, kein Nasal: [pʁənɔ̃].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson7-prendre-vousprenez',
    french: 'vous prenez',
    german: 'ihr nehmt / Sie nehmen',
    english: 'you take (pl/formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous prenez un dessert?',
      german: 'Nehmen Sie ein Dessert?'
    },
    notes: 'prendre 2. Pl. Aussprache: [pʁəne].',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation']
  },
  {
    id: 'lesson7-prendre-ilsprennent',
    french: 'ils/elles prennent',
    german: 'sie nehmen',
    english: 'they take',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils prennent du vin.',
      german: 'Sie nehmen Wein.'
    },
    notes: 'prendre 3. Pl. Doppel-n, Aussprache [pʁɛn] - das -ent ist stumm.',
    level: 'A1',
    tags: ['lesson7', 'verb', 'prendre', 'conjugation']
  },

  // Quantity & shopping phrases
  {
    id: 'lesson7-qty-kilo',
    french: 'un kilo de',
    german: 'ein Kilo',
    english: 'a kilo of',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Un kilo de pommes, s\'il vous plaît.',
      german: 'Ein Kilo Äpfel, bitte.'
    },
    notes: 'Nach Mengenangabe IMMER nur "de" - kein Teilungsartikel!',
    level: 'A1',
    tags: ['lesson7', 'quantity', 'shopping']
  },
  {
    id: 'lesson7-qty-litre',
    french: 'un litre de',
    german: 'ein Liter',
    english: 'a liter of',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Un litre de lait.',
      german: 'Ein Liter Milch.'
    },
    notes: 'Aussprache: [litʁ]. Mengenangabe + de.',
    level: 'A1',
    tags: ['lesson7', 'quantity', 'shopping']
  },
  {
    id: 'lesson7-qty-beaucoup',
    french: 'beaucoup de',
    german: 'viel(e)',
    english: 'a lot of',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Il mange beaucoup de fruits.',
      german: 'Er isst viel Obst.'
    },
    notes: 'Aussprache: [boku]. Immer mit "de", nie mit du/de la/des!',
    level: 'A1',
    tags: ['lesson7', 'quantity', 'essential']
  },
  {
    id: 'lesson7-shop-combien',
    french: "c'est combien?",
    german: 'wie viel kostet das?',
    english: 'how much is it?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'C\'est combien, le pain?',
      german: 'Wie viel kostet das Brot?'
    },
    notes: 'Wichtige Frage beim Einkaufen. Antwort: "Ça fait... euros."',
    level: 'A1',
    tags: ['lesson7', 'shopping', 'question', 'essential']
  },
  {
    id: 'lesson7-shop-addition',
    french: "l'addition",
    german: 'die Rechnung',
    english: 'the bill',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'L\'addition, s\'il vous plaît.',
      german: 'Die Rechnung, bitte.'
    },
    notes: 'Feminin. Im Restaurant: "L\'addition, s\'il vous plaît."',
    level: 'A1',
    tags: ['lesson7', 'restaurant', 'essential']
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
    question: 'Wähle den richtigen Teilungsartikel: Je mange ___ pain. (Ich esse Brot.)',
    options: ['du', 'de la', 'de l\'', 'des'],
    correctAnswer: 'du',
    explanation: '"le pain" ist maskulin, deshalb wird der Teilungsartikel "du" (de + le) benutzt.',
    hints: [
      '"le pain" ist maskulin.',
      'Bei maskulinen Wörtern: "du".'
    ],
    tags: ['partitif', 'articles']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Teilungsartikel passt: Je bois ___ eau. (Ich trinke Wasser.)',
    options: ['du', 'de la', 'de l\'', 'des'],
    correctAnswer: 'de l\'',
    explanation: '"eau" beginnt mit einem Vokal, deshalb wird "de l\'" benutzt.',
    hints: [
      '"eau" beginnt mit einem Vokal.',
      'Vor Vokal: "de l\'".'
    ],
    tags: ['partitif', 'articles']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ un café. (Ich nehme einen Kaffee.) - Verb: prendre',
    correctAnswer: ['prends'],
    explanation: 'Die Form von prendre für "je" ist "prends" (das -ds ist stumm: [pʁɑ̃]).',
    hints: [
      'Das Verb ist "prendre".',
      'Es ist "prends".'
    ],
    tags: ['prendre', 'conjugation']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ du pain. (Ich will Brot.) - Verb: vouloir',
    correctAnswer: ['veux'],
    explanation: 'Die Form von vouloir für "je" ist "veux".',
    hints: [
      'Das Verb ist "vouloir".',
      'Es ist "veux".'
    ],
    tags: ['vouloir', 'conjugation']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: das Wasser',
    correctAnswer: ['l\'eau', 'leau'],
    explanation: '"l\'eau" ist feminin (une eau) und beginnt mit einem Vokal.',
    hints: [
      'Es beginnt mit einem Vokal, also "l\'".',
      'Es ist "l\'eau".'
    ],
    tags: ['vocabulary', 'beverage']
  },
  {
    id: 'guided-6',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze: der Käse',
    correctAnswer: ['le fromage', 'fromage'],
    explanation: '"le fromage" ist maskulin.',
    hints: [
      'Es ist maskulin (le).',
      'Es ist "le fromage".'
    ],
    tags: ['vocabulary', 'food']
  },
  {
    id: 'guided-7',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man höflich "Ich hätte gerne einen Kaffee"?',
    options: ['Je veux un café.', 'Je voudrais un café.', 'Je prends café.', 'Je voulons un café.'],
    correctAnswer: 'Je voudrais un café.',
    explanation: '"Je voudrais" ist die höfliche Form - viel besser als "je veux" beim Bestellen.',
    hints: [
      'Höflich = "ich hätte gerne".',
      'Es ist "je voudrais".'
    ],
    tags: ['vouloir', 'politeness']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "le déjeuner"?',
    options: ['das Frühstück', 'das Mittagessen', 'das Abendessen', 'der Nachtisch'],
    correctAnswer: 'das Mittagessen',
    explanation: '"le déjeuner" ist das Mittagessen. Das Frühstück ist "le petit-déjeuner"!',
    hints: [
      'Es ist NICHT das Frühstück.',
      'Es ist das Mittagessen.'
    ],
    tags: ['meals', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Setze den Teilungsartikel ein: Tu veux ___ viande? (Willst du Fleisch?)',
    correctAnswer: ['de la'],
    explanation: '"la viande" ist feminin und beginnt mit Konsonant, deshalb "de la".',
    hints: [
      '"la viande" ist feminin.',
      'Feminin + Konsonant = "de la".'
    ],
    tags: ['partitif', 'articles']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verneinung: Je ne mange ___ pain. (Ich esse kein Brot.)',
    correctAnswer: ['pas de'],
    explanation: 'In der Verneinung wird der Teilungsartikel zu "pas de" (du wird zu de).',
    hints: [
      'In der Verneinung wird "du" zu "de".',
      'Es ist "pas de".'
    ],
    tags: ['partitif', 'negation']
  },
  {
    id: 'independent-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ du vin. (Wir wollen Wein.) - Verb: vouloir',
    correctAnswer: ['voulons'],
    explanation: 'Die Form von vouloir für "nous" ist "voulons" [vulɔ̃].',
    hints: [
      'Es endet auf -ons.',
      'Es ist "voulons".'
    ],
    tags: ['vouloir', 'conjugation']
  },
  {
    id: 'independent-4',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Vous ___ un dessert? (Nehmen Sie ein Dessert?) - Verb: prendre',
    correctAnswer: ['prenez'],
    explanation: 'Die Form von prendre für "vous" ist "prenez" [pʁəne] - kein Nasal!',
    hints: [
      'Es endet auf -ez.',
      'Es ist "prenez".'
    ],
    tags: ['prendre', 'conjugation']
  },
  {
    id: 'independent-5',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Form ist richtig: Ils ___ des fruits. (Sie wollen Obst.)',
    options: ['veut', 'voulez', 'veulent', 'voulons'],
    correctAnswer: 'veulent',
    explanation: 'Die Form von vouloir für "ils/elles" ist "veulent" [vœl] - das -ent ist stumm.',
    hints: [
      'Es ist die 3. Person Plural.',
      'Es ist "veulent".'
    ],
    tags: ['vouloir', 'conjugation']
  },
  {
    id: 'independent-6',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Nach Mengenangaben: Je voudrais un kilo ___ pommes.',
    options: ['de', 'du', 'des', 'de la'],
    correctAnswer: 'de',
    explanation: 'Nach einer Mengenangabe (un kilo) steht IMMER nur "de" - nie der Teilungsartikel!',
    hints: [
      'Nach "un kilo" kommt kein Teilungsartikel.',
      'Es ist nur "de".'
    ],
    tags: ['quantity', 'articles']
  },
  {
    id: 'independent-7',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich hätte gerne ein Kilo Äpfel.',
    correctAnswer: ['Je voudrais un kilo de pommes.', 'Je voudrais un kilo de pommes', 'je voudrais un kilo de pommes'],
    explanation: '"Je voudrais" (höflich) + "un kilo de pommes" (Mengenangabe + de, kein Teilungsartikel).',
    hints: [
      'Benutze die höfliche Form "je voudrais".',
      'Nach "un kilo" nur "de": un kilo de pommes.',
      'Es ist "Je voudrais un kilo de pommes."'
    ],
    tags: ['vouloir', 'quantity', 'translation']
  },
  {
    id: 'independent-8',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Je ne bois pas de café.',
    correctAnswer: ['Ich trinke keinen Kaffee.', 'Ich trinke keinen Kaffee', 'ich trinke keinen Kaffee', 'Ich trinke kein Kaffee'],
    explanation: '"ne... pas de" = "kein". "boire" = trinken, "café" = Kaffee.',
    hints: [
      '"ne... pas de" bedeutet "kein".',
      'Es ist "Ich trinke keinen Kaffee."'
    ],
    tags: ['negation', 'translation']
  },
  {
    id: 'independent-9',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was sagt man am Ende des Essens im Restaurant?',
    options: ['Vous désirez?', 'L\'addition, s\'il vous plaît.', 'Et avec ça?', 'Bonne nuit!'],
    correctAnswer: 'L\'addition, s\'il vous plaît.',
    explanation: '"L\'addition, s\'il vous plaît." = "Die Rechnung, bitte." - so bittet man um die Rechnung.',
    hints: [
      'Man bittet um die Rechnung.',
      'Es ist "L\'addition, s\'il vous plaît."'
    ],
    tags: ['restaurant', 'phrases']
  },
  {
    id: 'independent-10',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Setze den Artikel ein: J\'aime ___ chocolat. (Ich mag Schokolade - generell.)',
    correctAnswer: ['le'],
    explanation: 'Nach "aimer" steht IMMER der bestimmte Artikel (le/la/les), NIE der Teilungsartikel!',
    hints: [
      'Nach "aimer" kein Teilungsartikel.',
      'Schokolade ist maskulin: "le".'
    ],
    tags: ['articles', 'aimer']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist korrekt?',
    options: [
      'Je voudrais beaucoup du sucre.',
      'Je voudrais beaucoup de sucre.',
      'Je voudrais beaucoup des sucre.',
      'Je voudrais beaucoup de la sucre.'
    ],
    correctAnswer: 'Je voudrais beaucoup de sucre.',
    explanation: 'Nach "beaucoup" (Mengenangabe) steht immer nur "de" - nie ein Teilungsartikel!',
    tags: ['quantity', 'articles']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige (vouloir + prendre):\n— Tu ___ du thé?\n— Non, je ___ un café.',
    correctAnswer: ['veux, prends', 'veux prends'],
    explanation: '"Tu veux" (vouloir, 2. Sg.) und "je prends" (prendre, 1. Sg.).',
    tags: ['vouloir', 'prendre', 'dialogue']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Wir essen kein Fleisch.',
    correctAnswer: [
      'Nous ne mangeons pas de viande.',
      'Nous ne mangeons pas de viande',
      'nous ne mangeons pas de viande'
    ],
    explanation: 'Verneinung mit "ne... pas de": aus "de la viande" wird in der Verneinung "pas de viande".',
    tags: ['negation', 'partitif', 'translation']
  },
  {
    id: 'assess-4',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Setze den richtigen Teilungsartikel ein: Au petit-déjeuner, je prends ___ pain, ___ confiture et ___ café.\n(Brot [m], Marmelade [la confiture, f], Kaffee [m])',
    correctAnswer: ['du, de la, du', 'du de la du'],
    explanation: '"du pain" (m), "de la confiture" (f), "du café" (m) - die Form richtet sich nach dem Geschlecht.',
    tags: ['partitif', 'articles', 'meals']
  },
  {
    id: 'assess-5',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Nous prenons une bouteille de vin rouge.',
    correctAnswer: [
      'Wir nehmen eine Flasche Rotwein.',
      'Wir nehmen eine Flasche Rotwein',
      'wir nehmen eine Flasche Rotwein',
      'Wir nehmen eine Flasche roten Wein.'
    ],
    explanation: '"prenons" (nehmen), "une bouteille de" (eine Flasche), "vin rouge" (Rotwein).',
    tags: ['prendre', 'quantity', 'translation']
  },
  {
    id: 'assess-6',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Du bestellst höflich Wasser im Restaurant. Was sagst du?',
    options: [
      'Je veux eau.',
      'Je voudrais de l\'eau, s\'il vous plaît.',
      'Je voudrais du eau, s\'il vous plaît.',
      'Je prends le eau.'
    ],
    correctAnswer: 'Je voudrais de l\'eau, s\'il vous plaît.',
    explanation: '"Je voudrais" (höflich) + "de l\'eau" (eau ist feminin und beginnt mit Vokal → de l\') + "s\'il vous plaît".',
    tags: ['vouloir', 'partitif', 'restaurant']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson07: Lesson = {
  meta: {
    id: 'lesson-07',
    number: 7,
    title: 'La Nourriture',
    titleGerman: 'Das Essen',
    objectives: [
      'Den Teilungsartikel (du, de la, de l\', des) und "pas de" korrekt anwenden',
      'Das Verb "vouloir" (wollen) in allen Formen konjugieren',
      'Das Verb "prendre" (nehmen) in allen Formen konjugieren',
      'Mengenangaben wie "un kilo de", "un litre de" und "beaucoup de" benutzen',
      'Im Supermarkt und auf dem Markt einkaufen können',
      'Im Restaurant höflich Essen und Getränke bestellen'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05', 'lesson-06'],
    tags: ['food', 'shopping', 'partitif', 'vouloir', 'prendre', 'quantities', 'restaurant']
  },

  introduction: {
    objectives: [
      'Verstehen, wann und wie man den Teilungsartikel benutzt',
      'Die Verben "vouloir" und "prendre" zum Bestellen einsetzen',
      'Mengen und Preise beim Einkaufen ausdrücken',
      'Höflich im Restaurant bestellen können'
    ],
    motivation: `
Essen ist in Frankreich mehr als nur Nahrung - es ist Kultur und Lebensfreude! In dieser Lektion lernst du,
auf dem Markt einzukaufen und im Restaurant zu bestellen.

Du entdeckst eine neue Art von Artikel - den Teilungsartikel - der im Deutschen keine direkte Entsprechung hat.
Mit den Verben "vouloir" (wollen) und "prendre" (nehmen) kannst du in fast jeder Situation rund ums Essen mitreden.
    `,
    culturalNote: `
**Die Tischkultur in Frankreich**

In Frankreich nimmt man sich Zeit für das Essen. Das Mittagessen ("déjeuner") kann gut eine Stunde dauern,
und das Abendessen ("dîner") beginnt oft erst um 20 Uhr - viel später als in Deutschland!

**Brot, Käse und Wein**

Frankreich ist berühmt für seine über 300 Käsesorten und seine Weine. Frisches Baguette gehört zu fast jeder
Mahlzeit dazu.

**Höflichkeit beim Bestellen**

Sage NIE "je veux" (ich will) im Restaurant - das klingt unhöflich! Benutze immer "je voudrais"
(ich hätte gerne) zusammen mit "s'il vous plaît".
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
      'Du kennst den Teilungsartikel (du, de la, de l\', des) und benutzt ihn für unbestimmte Mengen',
      'Du weißt, dass in der Verneinung "pas de" steht (du/de la/des werden zu de)',
      'Du kannst das Verb "vouloir" (wollen) konjugieren und kennst die höfliche Form "je voudrais"',
      'Du kannst das Verb "prendre" (nehmen) konjugieren und im Restaurant einsetzen',
      'Du benutzt Mengenangaben wie "un kilo de", "un litre de" und "beaucoup de" mit "de"',
      'Du kennst die wichtigsten Lebensmittel, Getränke und Mahlzeiten',
      'Du kannst auf dem Markt einkaufen und im Restaurant höflich bestellen'
    ],
    nextLesson: 'lesson-08'
  }
};
