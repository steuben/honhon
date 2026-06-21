import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 08: Les Vêtements - Kleidung
 * Clothing, colors and describing what people wear
 *
 * Level: A1 (Beginner)
 * Duration: ~90 minutes
 *
 * Topics:
 * - Clothing vocabulary (le pantalon, la chemise, la robe ...)
 * - Colors (rouge, bleu, vert ...)
 * - Demonstrative adjectives (ce, cet, cette, ces)
 * - Adjective agreement (gender + number) and placement
 * - "C'est" vs "Il est"
 * - Expressing shopping preferences
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Introduction / clothing overview
  {
    id: 'clothing-intro',
    title: 'Kleidung - Les vêtements',
    type: 'explanation',
    content: `
In dieser Lektion lernst du, Kleidung zu beschreiben und im Geschäft deine Vorlieben auszudrücken.

**Das Schlüsselwort:** "les vêtements" [le vɛtmɑ̃] = die Kleidung / die Kleidungsstücke

Im Französischen hat jedes Kleidungsstück ein Geschlecht (maskulin oder feminin) - genau wie im Deutschen,
aber oft anders! Achte deshalb immer auf den Artikel (le/la/un/une).

**Typische Stolperfallen für Deutsche:**
- "la robe" ist NICHT die Robe im deutschen Sinn, sondern das **Kleid**!
- "la veste" ist die **Jacke / das Sakko**, nicht die "Weste"!
- "le costume" ist der **Anzug**, nicht das Kostüm.

Diese falschen Freunde merken wir uns gut.
    `,
    germanExplanation: 'Achte besonders auf das Geschlecht der Kleidungsstücke - es ist oft anders als im Deutschen.',
    examples: [
      { french: 'Je porte un pantalon.', german: 'Ich trage eine Hose.', notes: 'porter = tragen (Kleidung)' },
      { french: 'Elle aime cette robe.', german: 'Sie mag dieses Kleid.', notes: 'robe = Kleid (falscher Freund!)' }
    ]
  },

  // Section 2: Clothing table (TABLE 1)
  {
    id: 'clothing-table',
    title: 'Die wichtigsten Kleidungsstücke',
    type: 'table',
    content: `
| Französisch | Aussprache | Deutsch | Geschlecht |
|-------------|------------|---------|------------|
| le pantalon | [pɑ̃talɔ̃] | die Hose | maskulin |
| la chemise | [ʃəmiz] | das Hemd | feminin |
| la robe | [ʁɔb] | das Kleid | feminin |
| la veste | [vɛst] | die Jacke / das Sakko | feminin |
| le manteau | [mɑ̃to] | der Mantel | maskulin |
| le pull | [pyl] | der Pullover | maskulin |
| le tee-shirt | [tiʃœʁt] | das T-Shirt | maskulin |
| la jupe | [ʒyp] | der Rock | feminin |
| les chaussures | [ʃosyʁ] | die Schuhe | feminin (Plural) |
| les chaussettes | [ʃosɛt] | die Socken | feminin (Plural) |
| le chapeau | [ʃapo] | der Hut | maskulin |

**Merke:** "le pantalon" ist Singular im Französischen ("eine Hose"), während "die Schuhe"
und "die Socken" wie im Deutschen Plural sind: "les chaussures", "les chaussettes".
    `,
    germanExplanation: 'Lerne jedes Kleidungsstück immer mit seinem Artikel - so prägst du dir das Geschlecht ein.'
  },

  // Section 3: Colors table (TABLE 2)
  {
    id: 'colors-table',
    title: 'Die Farben (Les couleurs)',
    type: 'table',
    content: `
| Französisch (m) | Französisch (f) | Aussprache | Deutsch |
|-----------------|-----------------|------------|---------|
| rouge | rouge | [ʁuʒ] | rot |
| bleu | bleue | [blø] | blau |
| vert | verte | [vɛʁ] / [vɛʁt] | grün |
| jaune | jaune | [ʒon] | gelb |
| noir | noire | [nwaʁ] | schwarz |
| blanc | blanche | [blɑ̃] / [blɑ̃ʃ] | weiß |
| gris | grise | [gʁi] / [gʁiz] | grau |
| marron | marron | [maʁɔ̃] | braun |
| orange | orange | [ɔʁɑ̃ʒ] | orange |
| rose | rose | [ʁoz] | rosa |

**Wichtig:**
- Farben auf **-e** (rouge, jaune, rose, orange) sind im Maskulinum und Femininum **gleich**.
- "blanc" ist sehr unregelmäßig: feminin wird es zu "blanche".
- "marron" und "orange" sind **unveränderlich** - sie bekommen NIE ein -e oder -s!
    `,
    germanExplanation: 'Farben sind Adjektive und richten sich nach dem Substantiv - das üben wir gleich.'
  },

  // Section 4: Adjective placement AFTER the noun
  {
    id: 'adjective-placement',
    title: 'Adjektive stehen meist HINTER dem Substantiv',
    type: 'explanation',
    content: `
Der große Unterschied zum Deutschen: Die meisten französischen Adjektive stehen **NACH** dem Substantiv!

**Deutsch:** ein **rotes** Kleid → Adjektiv VOR dem Substantiv
**Französisch:** une robe **rouge** → Adjektiv NACH dem Substantiv

Das gilt vor allem für:
- Farben: un pull **bleu** (ein blauer Pullover)
- Formen und Eigenschaften: une veste **élégante** (eine elegante Jacke)
- Nationalitäten: une voiture **française** (ein französisches Auto)

**Beispiele:**
- un pantalon noir = eine schwarze Hose
- une chemise blanche = ein weißes Hemd
- des chaussures rouges = rote Schuhe

So fühlt es sich am Anfang "umgekehrt" an - mit etwas Übung wird es ganz natürlich!
    `,
    examples: [
      { french: 'une robe verte', german: 'ein grünes Kleid', notes: 'Adjektiv steht hinten' },
      { french: 'un manteau gris', german: 'ein grauer Mantel', notes: 'Adjektiv steht hinten' },
      { french: 'des chaussures noires', german: 'schwarze Schuhe', notes: 'Plural: noir → noires' }
    ]
  },

  // Section 5: Adjectives BEFORE the noun (BAGS / beau, joli, petit, grand)
  {
    id: 'adjective-before',
    title: 'Ausnahmen: Adjektive VOR dem Substantiv',
    type: 'tip',
    content: `
Einige sehr häufige Adjektive stehen ausnahmsweise **VOR** dem Substantiv - wie im Deutschen.

Eine gute Merkhilfe ist das englische Wort **BAGS**:
- **B**eauty (Schönheit): beau / joli (schön / hübsch)
- **A**ge (Alter): jeune / vieux / nouveau (jung / alt / neu)
- **G**oodness (Wert): bon / mauvais (gut / schlecht)
- **S**ize (Größe): petit / grand / gros (klein / groß / dick)

**Beispiele:**
- une **petite** robe = ein kleines Kleid
- un **grand** manteau = ein großer Mantel
- une **jolie** jupe = ein hübscher Rock
- un **beau** pull = ein schöner Pullover

**Achtung - Kombination:** Wenn beide Adjektivtypen vorkommen, stehen sie auf ihrer jeweiligen Seite:
- une **petite** robe **rouge** = ein kleines rotes Kleid
  (petite VOR dem Substantiv, rouge DANACH)
    `,
    germanExplanation: 'Nur eine kleine Gruppe von Adjektiven steht vorne. Alle anderen stehen hinten!'
  },

  // Section 6: Adjective agreement (gender + number)
  {
    id: 'adjective-agreement',
    title: 'Angleichung der Adjektive (Geschlecht + Zahl)',
    type: 'table',
    content: `
Französische Adjektive passen sich dem Substantiv an - in **Geschlecht** (m/f) und **Zahl** (Singular/Plural).

## Die Grundregel

| Form | Endung | Beispiel mit "vert" (grün) |
|------|--------|----------------------------|
| maskulin Singular | (Grundform) | un pull vert |
| feminin Singular | + e | une robe verte |
| maskulin Plural | + s | des pulls verts |
| feminin Plural | + es | des robes vertes |

**Merksatz:** feminin → **-e**, Plural → **-s**, feminin + Plural → **-es**.

**Wichtige Sonderfälle:**
- Adjektive, die schon auf **-e** enden (rouge, jaune, rose): KEINE Änderung im Feminin → un pull rouge / une robe rouge
- Adjektive auf **-s** im Maskulin (gris): KEINE Änderung im maskulin Plural → un pull gris / des pulls gris
- **blanc** → feminin: blanche; **marron / orange** → immer unveränderlich!
    `,
    germanExplanation: 'Die Angleichung ist das Herzstück dieser Lektion - übe sie mit jedem Beispiel.'
  },

  // Section 7: Agreement examples
  {
    id: 'agreement-examples',
    title: 'Angleichung in der Praxis',
    type: 'example',
    content: `
Schau dir an, wie sich dasselbe Adjektiv verändert:
    `,
    examples: [
      { french: 'un pantalon noir', german: 'eine schwarze Hose', notes: 'maskulin Singular' },
      { french: 'une jupe noire', german: 'ein schwarzer Rock', notes: 'feminin: + e' },
      { french: 'des pantalons noirs', german: 'schwarze Hosen', notes: 'maskulin Plural: + s' },
      { french: 'des jupes noires', german: 'schwarze Röcke', notes: 'feminin Plural: + es' },
      { french: 'une chemise blanche', german: 'ein weißes Hemd', notes: 'blanc → blanche (Sonderform)' },
      { french: 'des chaussures marron', german: 'braune Schuhe', notes: 'marron bleibt unverändert!' }
    ]
  },

  // Section 8: Demonstrative adjectives
  {
    id: 'demonstratives-table',
    title: 'Demonstrativbegleiter: ce, cet, cette, ces',
    type: 'table',
    content: `
Mit den Demonstrativbegleitern zeigst du auf etwas: "dieser / diese / dieses".
Im Deutschen sagen wir "diese Hose", im Französischen "ce pantalon".

| Form | Verwendung | Aussprache | Beispiel |
|------|------------|------------|----------|
| ce | maskulin Singular (vor Konsonant) | [sə] | ce pantalon (diese Hose) |
| cet | maskulin Singular (vor Vokal/stummem h) | [sɛt] | cet anorak (diese Anorak) |
| cette | feminin Singular | [sɛt] | cette robe (dieses Kleid) |
| ces | Plural (m + f) | [se] | ces chaussures (diese Schuhe) |

**Die wichtigste Regel:**
- **ce** wird zu **cet**, wenn das nächste Wort mit einem Vokal (a, e, i, o, u) oder stummem "h" beginnt.
  Das macht die Aussprache flüssiger: NICHT "ce homme", sondern "cet homme".
- **cet** und **cette** klingen gleich [sɛt], werden aber unterschiedlich geschrieben!
    `,
    germanExplanation: 'ce/cet = maskulin, cette = feminin, ces = Plural. Die Wahl hängt vom Substantiv ab.'
  },

  // Section 9: Demonstrative usage examples
  {
    id: 'demonstratives-examples',
    title: 'Demonstrativbegleiter im Geschäft',
    type: 'example',
    content: `
Im Laden zeigst du auf Kleidung und sagst, was dir gefällt:
    `,
    examples: [
      { french: 'J\'aime ce pull.', german: 'Ich mag diesen Pullover.', notes: 'ce + maskulin (Konsonant)' },
      { french: 'Cet anorak est chaud.', german: 'Dieser Anorak ist warm.', notes: 'cet + Vokal' },
      { french: 'Cette veste est jolie.', german: 'Diese Jacke ist hübsch.', notes: 'cette + feminin' },
      { french: 'Ces chaussures sont chères.', german: 'Diese Schuhe sind teuer.', notes: 'ces + Plural' }
    ]
  },

  // Section 10: C'est vs Il est
  {
    id: 'cest-vs-ilest',
    title: '"C\'est" vs. "Il est" - der feine Unterschied',
    type: 'comparison',
    content: `
Beide bedeuten ungefähr "es ist / das ist", aber sie werden unterschiedlich benutzt.

**C'EST + Artikel/Name/betontes Adjektiv** (allgemeine Aussage, "das ist"):
- C'est une belle robe. = Das ist ein schönes Kleid.
- C'est un pull rouge. = Das ist ein roter Pullover.
- C'est cher! = Das ist teuer! (allgemeiner Kommentar)

**IL EST / ELLE EST + Adjektiv** (beschreibt ein bestimmtes Ding/Person):
- Il est bleu. = Er (z.B. der Pullover) ist blau.
- Elle est élégante. = Sie (z.B. die Jacke) ist elegant.

**Faustregel:**
- Steht ein **Artikel** (un, une, le, la) dahinter? → **c'est**
- Steht **nur ein Adjektiv** dahinter und du meinst ein konkretes Ding? → **il est / elle est**

**Vergleich:**
- C'est une veste. Elle est noire. = Das ist eine Jacke. Sie ist schwarz.
    `,
    germanExplanation: 'Vor einem Artikel immer "c\'est"; vor einem reinen Adjektiv für ein konkretes Ding "il/elle est".'
  },

  // Section 11: Sizes
  {
    id: 'sizes',
    title: 'Größen (Les tailles)',
    type: 'explanation',
    content: `
Beim Einkaufen brauchst du Wörter für Größen.

**la taille** [taj] = die Größe (bei Kleidung)
**la pointure** [pwɛ̃tyʁ] = die Schuhgröße (eigenes Wort für Schuhe!)

**Typische Fragen und Antworten:**
- Quelle est votre taille? = Welche Größe haben Sie?
- Je fais du 38. = Ich habe Größe 38. (wörtlich: "ich mache 38")
- Vous faites quelle pointure? = Welche Schuhgröße haben Sie?

**Allgemeine Größenangaben:**
- petit = klein (S)
- moyen = mittel (M)
- grand = groß (L)

**Merke:** Frankreich nutzt andere Größentabellen als Deutschland - aber die Zahlen verstehst du jetzt!
    `,
    examples: [
      { french: 'Je fais du 40.', german: 'Ich habe Größe 40.', notes: '"faire du" für Kleidergröße' },
      { french: 'Quelle est votre pointure?', german: 'Welche Schuhgröße haben Sie?' }
    ]
  },

  // Section 12: Shopping verbs and phrases
  {
    id: 'shopping-phrases',
    title: 'Einkaufen: nützliche Verben und Sätze',
    type: 'example',
    content: `
Die wichtigsten Wörter und Wendungen für den Kleidungskauf:
    `,
    examples: [
      { french: 'porter', german: 'tragen (Kleidung)', notes: 'Je porte une veste. = Ich trage eine Jacke.' },
      { french: 'acheter', german: 'kaufen', notes: 'Je voudrais acheter ce pull. = Ich möchte diesen Pullover kaufen.' },
      { french: 'essayer', german: 'anprobieren', notes: 'Je peux essayer cette robe? = Kann ich dieses Kleid anprobieren?' },
      { french: 'Je voudrais...', german: 'Ich möchte...', notes: 'Höfliche Form für Wünsche' },
      { french: 'Combien ça coûte?', german: 'Wie viel kostet das?', notes: 'Standardfrage nach dem Preis' },
      { french: 'C\'est trop cher.', german: 'Das ist zu teuer.', notes: 'trop = zu (sehr)' }
    ]
  },

  // Section 13: Dialogue 1 (DIALOGUE)
  {
    id: 'dialogue-shop',
    title: 'Dialog: Im Bekleidungsgeschäft',
    type: 'dialogue',
    content: `
**Situation:** Eine Kundin (Cliente) sucht ein Kleid. Eine Verkäuferin (Vendeuse) hilft ihr.

**Vendeuse:** Bonjour! Je peux vous aider?
**Cliente:** Bonjour. Je cherche une robe pour une fête.
**Vendeuse:** Cette robe rouge est très élégante. Vous faites quelle taille?
**Cliente:** Je fais du 38. Je peux l'essayer?
**Vendeuse:** Bien sûr! Les cabines sont là-bas.
**Cliente:** Merci. ... Elle est un peu petite. Vous avez la taille 40?
**Vendeuse:** Oui, voilà. Cette robe vous va très bien!
**Cliente:** Parfait, je la prends. Combien ça coûte?
**Vendeuse:** Cinquante euros, s'il vous plaît.

---

**Beachte:**
- "Je peux vous aider?" = Kann ich Ihnen helfen? (Standardfrage im Laden)
- "Vous va très bien" = steht Ihnen sehr gut
- "Je la prends" = Ich nehme es (la ersetzt "la robe")
- "Cette robe rouge" - cette (feminin) + Farbe rouge HINTER dem Substantiv
    `
  },

  // Section 14: Dialogue 2 (DIALOGUE)
  {
    id: 'dialogue-friends',
    title: 'Dialog: Freunde beschreiben Kleidung',
    type: 'dialogue',
    content: `
**Situation:** Léa und Tom unterhalten sich über ein Foto.

**Léa:** Regarde cette photo! C'est mon frère.
**Tom:** Il porte un beau manteau. Il est gris, non?
**Léa:** Oui, gris foncé. Et ce pull bleu, c'est mon cadeau!
**Tom:** Très joli. Et ces chaussures noires?
**Léa:** Elles sont nouvelles. Elles sont chères, mais elles sont confortables.
**Tom:** C'est un look élégant!

---

**Beachte:**
- "C'est mon frère" - vor einem Substantiv (mon frère): **c'est**
- "Il est gris" - reines Adjektiv für ein konkretes Ding: **il est**
- "un beau manteau" - beau steht VOR dem Substantiv (BAGS-Regel)
- "ce pull bleu", "ces chaussures noires" - Demonstrativ + Farbe hinten
- "Elles sont nouvelles / chères" - Angleichung im feminin Plural
    `
  },

  // Section 15: Common mistakes tip
  {
    id: 'common-mistakes',
    title: 'Typische Fehler vermeiden',
    type: 'tip',
    content: `
Häufige Stolperfallen für deutsche Lernende - präge dir diese gut ein!

**1. Adjektiv-Stellung:**
- ❌ une rouge robe
- ✅ une robe rouge (Farben stehen HINTER dem Substantiv!)

**2. Angleichung vergessen:**
- ❌ une jupe noir
- ✅ une jupe noire (feminin braucht das -e!)

**3. ce vor Vokal:**
- ❌ ce anorak
- ✅ cet anorak (vor Vokal wird ce zu cet!)

**4. c'est vs. il est:**
- ❌ Il est un pull. → ✅ C'est un pull. (vor Artikel: c'est)
- ❌ C'est bleu (für ein konkretes Ding) → ✅ Il est bleu.

**5. Falsche Freunde:**
- "la robe" = das Kleid (nicht "Robe")
- "la veste" = die Jacke (nicht "Weste")

**6. Unveränderliche Farben:**
- ❌ des chaussures marrons
- ✅ des chaussures marron (marron + orange ändern sich NIE!)
    `,
    germanExplanation: 'Diese sechs Punkte decken die häufigsten Fehler ab - ein letzter Check vor den Übungen.'
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Clothing
  {
    id: 'lesson8-clothing-pantalon',
    french: 'le pantalon',
    german: 'die Hose',
    english: 'trousers / pants',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Je porte un pantalon noir.',
      german: 'Ich trage eine schwarze Hose.'
    },
    notes: 'Im Französischen Singular, im Deutschen ebenfalls. Aussprache: [pɑ̃talɔ̃]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },
  {
    id: 'lesson8-clothing-chemise',
    french: 'la chemise',
    german: 'das Hemd',
    english: 'shirt',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Cette chemise blanche est jolie.',
      german: 'Dieses weiße Hemd ist hübsch.'
    },
    notes: 'Feminin! Aussprache: [ʃəmiz]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },
  {
    id: 'lesson8-clothing-robe',
    french: 'la robe',
    german: 'das Kleid',
    english: 'dress',
    partOfSpeech: 'noun',
    gender: 'f',
    isFalseFriend: true,
    exampleSentence: {
      french: 'Elle porte une robe rouge.',
      german: 'Sie trägt ein rotes Kleid.'
    },
    notes: 'FALSCHER FREUND: "robe" = Kleid, nicht "Robe"!',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing', 'false-friend']
  },
  {
    id: 'lesson8-clothing-veste',
    french: 'la veste',
    german: 'die Jacke / das Sakko',
    english: 'jacket',
    partOfSpeech: 'noun',
    gender: 'f',
    isFalseFriend: true,
    exampleSentence: {
      french: 'Cette veste est élégante.',
      german: 'Diese Jacke ist elegant.'
    },
    notes: 'FALSCHER FREUND: "veste" = Jacke, nicht "Weste"!',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing', 'false-friend']
  },
  {
    id: 'lesson8-clothing-manteau',
    french: 'le manteau',
    german: 'der Mantel',
    english: 'coat',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Il porte un beau manteau gris.',
      german: 'Er trägt einen schönen grauen Mantel.'
    },
    notes: 'Plural: les manteaux (mit -x!). Aussprache: [mɑ̃to]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },
  {
    id: 'lesson8-clothing-pull',
    french: 'le pull',
    german: 'der Pullover',
    english: 'sweater / pullover',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'J\'aime ce pull bleu.',
      german: 'Ich mag diesen blauen Pullover.'
    },
    notes: 'Kurzform von "pull-over". Aussprache: [pyl]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },
  {
    id: 'lesson8-clothing-teeshirt',
    french: 'le tee-shirt',
    german: 'das T-Shirt',
    english: 't-shirt',
    partOfSpeech: 'noun',
    gender: 'm',
    isCognate: true,
    exampleSentence: {
      french: 'Ce tee-shirt vert est confortable.',
      german: 'Dieses grüne T-Shirt ist bequem.'
    },
    notes: 'Auch geschrieben "t-shirt". Aussprache: [tiʃœʁt]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing', 'cognate']
  },
  {
    id: 'lesson8-clothing-jupe',
    french: 'la jupe',
    german: 'der Rock',
    english: 'skirt',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Cette jupe noire est courte.',
      german: 'Dieser schwarze Rock ist kurz.'
    },
    notes: 'Feminin! Aussprache: [ʒyp]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },
  {
    id: 'lesson8-clothing-chaussures',
    french: 'les chaussures',
    german: 'die Schuhe',
    english: 'shoes',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Ces chaussures sont chères.',
      german: 'Diese Schuhe sind teuer.'
    },
    notes: 'Feminin Plural. Singular: la chaussure. Aussprache: [ʃosyʁ]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing', 'plural']
  },
  {
    id: 'lesson8-clothing-chaussettes',
    french: 'les chaussettes',
    german: 'die Socken',
    english: 'socks',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'J\'achète des chaussettes blanches.',
      german: 'Ich kaufe weiße Socken.'
    },
    notes: 'Feminin Plural. Aussprache: [ʃosɛt]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing', 'plural']
  },
  {
    id: 'lesson8-clothing-chapeau',
    french: 'le chapeau',
    german: 'der Hut',
    english: 'hat',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Ce chapeau est trop grand.',
      german: 'Dieser Hut ist zu groß.'
    },
    notes: 'Plural: les chapeaux (mit -x!). Aussprache: [ʃapo]',
    level: 'A1',
    tags: ['lesson8', 'noun', 'clothing']
  },

  // Colors
  {
    id: 'lesson8-color-rouge',
    french: 'rouge',
    german: 'rot',
    english: 'red',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'une robe rouge',
      german: 'ein rotes Kleid'
    },
    notes: 'Endet auf -e: m und f gleich. Aussprache: [ʁuʒ]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-bleu',
    french: 'bleu',
    german: 'blau',
    english: 'blue',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un pull bleu',
      german: 'ein blauer Pullover'
    },
    notes: 'Feminin: bleue. Aussprache: [blø]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-vert',
    french: 'vert',
    german: 'grün',
    english: 'green',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un tee-shirt vert',
      german: 'ein grünes T-Shirt'
    },
    notes: 'Feminin: verte. Aussprache: [vɛʁ] / feminin [vɛʁt]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-jaune',
    french: 'jaune',
    german: 'gelb',
    english: 'yellow',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'une jupe jaune',
      german: 'ein gelber Rock'
    },
    notes: 'Endet auf -e: m und f gleich. Aussprache: [ʒon]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-noir',
    french: 'noir',
    german: 'schwarz',
    english: 'black',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un pantalon noir',
      german: 'eine schwarze Hose'
    },
    notes: 'Feminin: noire. Aussprache: [nwaʁ]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-blanc',
    french: 'blanc',
    german: 'weiß',
    english: 'white',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'une chemise blanche',
      german: 'ein weißes Hemd'
    },
    notes: 'UNREGELMÄSSIG! Feminin: blanche. Aussprache: [blɑ̃] / feminin [blɑ̃ʃ]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-gris',
    french: 'gris',
    german: 'grau',
    english: 'grey',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un manteau gris',
      german: 'ein grauer Mantel'
    },
    notes: 'Endet auf -s: maskulin Plural unverändert. Feminin: grise. Aussprache: [gʁi]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-marron',
    french: 'marron',
    german: 'braun',
    english: 'brown',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'des chaussures marron',
      german: 'braune Schuhe'
    },
    notes: 'UNVERÄNDERLICH! Nie -e oder -s. Aussprache: [maʁɔ̃]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },
  {
    id: 'lesson8-color-rose',
    french: 'rose',
    german: 'rosa',
    english: 'pink',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'une robe rose',
      german: 'ein rosa Kleid'
    },
    notes: 'Endet auf -e: m und f gleich. Aussprache: [ʁoz]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'color']
  },

  // Demonstratives
  {
    id: 'lesson8-demo-ce',
    french: 'ce',
    german: 'dieser (m, vor Konsonant)',
    english: 'this (m)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'ce pantalon',
      german: 'diese Hose'
    },
    notes: 'Maskulin Singular vor Konsonant. Aussprache: [sə]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'demonstrative', 'grammar']
  },
  {
    id: 'lesson8-demo-cet',
    french: 'cet',
    german: 'dieser (m, vor Vokal)',
    english: 'this (m, before vowel)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'cet anorak',
      german: 'dieser Anorak'
    },
    notes: 'Maskulin Singular vor Vokal/stummem h. Aussprache: [sɛt]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'demonstrative', 'grammar']
  },
  {
    id: 'lesson8-demo-cette',
    french: 'cette',
    german: 'diese (f)',
    english: 'this (f)',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'cette robe',
      german: 'dieses Kleid'
    },
    notes: 'Feminin Singular. Klingt wie "cet" [sɛt], aber andere Schreibweise!',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'demonstrative', 'grammar']
  },
  {
    id: 'lesson8-demo-ces',
    french: 'ces',
    german: 'diese (Plural)',
    english: 'these',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'ces chaussures',
      german: 'diese Schuhe'
    },
    notes: 'Plural für m und f. Aussprache: [se]',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'demonstrative', 'grammar']
  },

  // Descriptive adjectives
  {
    id: 'lesson8-adj-beau',
    french: 'beau',
    german: 'schön',
    english: 'beautiful',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un beau manteau',
      german: 'ein schöner Mantel'
    },
    notes: 'Steht VOR dem Substantiv (BAGS). Feminin: belle.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive']
  },
  {
    id: 'lesson8-adj-joli',
    french: 'joli',
    german: 'hübsch',
    english: 'pretty',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'une jolie jupe',
      german: 'ein hübscher Rock'
    },
    notes: 'Steht VOR dem Substantiv (BAGS). Feminin: jolie.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive']
  },
  {
    id: 'lesson8-adj-petit',
    french: 'petit',
    german: 'klein',
    english: 'small',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'une petite robe',
      german: 'ein kleines Kleid'
    },
    notes: 'Steht VOR dem Substantiv (BAGS). Feminin: petite.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive', 'size']
  },
  {
    id: 'lesson8-adj-grand',
    french: 'grand',
    german: 'groß',
    english: 'big / tall',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'un grand manteau',
      german: 'ein großer Mantel'
    },
    notes: 'Steht VOR dem Substantiv (BAGS). Feminin: grande.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive', 'size']
  },
  {
    id: 'lesson8-adj-cher',
    french: 'cher',
    german: 'teuer',
    english: 'expensive',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Cette veste est chère.',
      german: 'Diese Jacke ist teuer.'
    },
    notes: 'Steht HINTER dem Substantiv. Feminin: chère (mit accent grave!).',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive', 'shopping']
  },
  {
    id: 'lesson8-adj-elegant',
    french: 'élégant',
    german: 'elegant',
    english: 'elegant',
    partOfSpeech: 'adjective',
    gender: 'm',
    isCognate: true,
    exampleSentence: {
      french: 'un costume élégant',
      german: 'ein eleganter Anzug'
    },
    notes: 'Steht HINTER dem Substantiv. Feminin: élégante.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive', 'cognate']
  },
  {
    id: 'lesson8-adj-confortable',
    french: 'confortable',
    german: 'bequem',
    english: 'comfortable',
    partOfSpeech: 'adjective',
    isCognate: true,
    exampleSentence: {
      french: 'Ce pull est confortable.',
      german: 'Dieser Pullover ist bequem.'
    },
    notes: 'Endet auf -e: m und f gleich. Steht hinter dem Substantiv.',
    level: 'A1',
    tags: ['lesson8', 'adjective', 'descriptive', 'cognate']
  },

  // Shopping verbs / phrases
  {
    id: 'lesson8-verb-porter',
    french: 'porter',
    german: 'tragen',
    english: 'to wear',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je porte une veste.',
      german: 'Ich trage eine Jacke.'
    },
    notes: 'Regelmäßiges Verb auf -er. Wird für Kleidung benutzt.',
    level: 'A1',
    tags: ['lesson8', 'verb', 'clothing']
  },
  {
    id: 'lesson8-verb-acheter',
    french: 'acheter',
    german: 'kaufen',
    english: 'to buy',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je voudrais acheter ce pull.',
      german: 'Ich möchte diesen Pullover kaufen.'
    },
    notes: 'Verb auf -er. Aussprache: [aʃte]',
    level: 'A1',
    tags: ['lesson8', 'verb', 'shopping']
  },
  {
    id: 'lesson8-verb-essayer',
    french: 'essayer',
    german: 'anprobieren / versuchen',
    english: 'to try (on)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je peux essayer cette robe?',
      german: 'Kann ich dieses Kleid anprobieren?'
    },
    notes: 'Verb auf -er. Auch "versuchen". Aussprache: [esɛje]',
    level: 'A1',
    tags: ['lesson8', 'verb', 'shopping']
  },
  {
    id: 'lesson8-phrase-jevoudrais',
    french: 'je voudrais',
    german: 'ich möchte',
    english: 'I would like',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je voudrais une chemise blanche.',
      german: 'Ich möchte ein weißes Hemd.'
    },
    notes: 'Höfliche Form für Wünsche - sehr nützlich beim Einkaufen!',
    level: 'A1',
    tags: ['lesson8', 'phrase', 'shopping', 'essential']
  },
  {
    id: 'lesson8-phrase-taille',
    french: 'la taille',
    german: 'die Größe',
    english: 'size',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Je fais du 38.',
      german: 'Ich habe Größe 38.'
    },
    notes: 'Größe bei Kleidung. Für Schuhe: la pointure.',
    level: 'A1',
    tags: ['lesson8', 'noun', 'shopping', 'size']
  },
  {
    id: 'lesson8-phrase-combien',
    french: 'combien ça coûte?',
    german: 'wie viel kostet das?',
    english: 'how much does it cost?',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Cette robe, combien ça coûte?',
      german: 'Dieses Kleid, wie viel kostet das?'
    },
    notes: 'Standardfrage nach dem Preis. "combien" = wie viel.',
    level: 'A1',
    tags: ['lesson8', 'phrase', 'shopping', 'question']
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
    question: 'Was bedeutet "la robe"?',
    options: ['das Kleid', 'die Robe', 'der Rock', 'die Jacke'],
    correctAnswer: 'das Kleid',
    explanation: '"la robe" ist ein falscher Freund: Es bedeutet "das Kleid", nicht "die Robe"!',
    hints: [
      'Achtung, falscher Freund!',
      'Es ist ein Kleidungsstück für Frauen: das Kleid.'
    ],
    tags: ['clothing', 'vocabulary', 'false-friend']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Farbe ist "bleu"?',
    options: ['rot', 'blau', 'grün', 'gelb'],
    correctAnswer: 'blau',
    explanation: '"bleu" [blø] bedeutet "blau". Feminin: bleue.',
    hints: [
      'Es klingt fast wie das englische "blue".',
      'Es ist blau.'
    ],
    tags: ['colors', 'vocabulary']
  },
  {
    id: 'guided-3',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wähle den richtigen Demonstrativbegleiter: ___ robe (diese, feminin).',
    options: ['ce', 'cet', 'cette', 'ces'],
    correctAnswer: 'cette',
    explanation: '"robe" ist feminin Singular, daher "cette robe".',
    hints: [
      '"robe" ist feminin.',
      'Die feminine Form ist "cette".'
    ],
    tags: ['demonstratives', 'grammar']
  },
  {
    id: 'guided-4',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Ergänze: un pantalon ___ (schwarz, maskulin).',
    correctAnswer: ['noir'],
    explanation: '"pantalon" ist maskulin, daher die Grundform "noir". Das Adjektiv steht hinter dem Substantiv.',
    hints: [
      'maskulin Singular = Grundform.',
      'Es ist "noir".'
    ],
    tags: ['colors', 'agreement']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze ins Französische: rot',
    correctAnswer: ['rouge'],
    explanation: '"rouge" [ʁuʒ] bedeutet "rot" - im Maskulinum und Femininum gleich.',
    hints: [
      'Es endet auf -e.',
      'Es ist "rouge".'
    ],
    tags: ['colors', 'vocabulary']
  },
  {
    id: 'guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "porter"?',
    options: ['kaufen', 'tragen', 'anprobieren', 'sehen'],
    correctAnswer: 'tragen',
    explanation: '"porter" bedeutet "tragen" (Kleidung). Je porte = ich trage.',
    hints: [
      'Man macht es mit Kleidung am Körper.',
      'Es ist "tragen".'
    ],
    tags: ['verbs', 'clothing']
  },
  {
    id: 'guided-7',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Ergänze: ___ chaussures (diese, Plural).',
    correctAnswer: ['ces'],
    explanation: '"chaussures" ist Plural, daher "ces chaussures".',
    hints: [
      'Es ist Plural.',
      'Die Pluralform ist "ces".'
    ],
    tags: ['demonstratives', 'grammar']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man "der Pullover" auf Französisch?',
    options: ['le manteau', 'le pull', 'la veste', 'la chemise'],
    correctAnswer: 'le pull',
    explanation: '"le pull" [pyl] ist der Pullover (Kurzform von pull-over).',
    hints: [
      'Es ist ein kurzes Wort, das mit "p" beginnt.',
      'Es ist "le pull".'
    ],
    tags: ['clothing', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ergänze mit der richtigen Form: une jupe ___ (grün).',
    correctAnswer: ['verte'],
    explanation: '"jupe" ist feminin, daher bekommt "vert" ein -e: "verte".',
    hints: [
      '"jupe" ist feminin.',
      'Feminin braucht ein -e: "verte".'
    ],
    tags: ['colors', 'agreement', 'gender']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ergänze mit der richtigen Form: des chaussures ___ (schwarz).',
    correctAnswer: ['noires'],
    explanation: '"chaussures" ist feminin Plural, daher "noires" (-e für feminin, -s für Plural).',
    hints: [
      'Es ist feminin UND Plural.',
      'feminin + Plural = "noires".'
    ],
    tags: ['colors', 'agreement', 'plural']
  },
  {
    id: 'independent-3',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wähle den richtigen Demonstrativbegleiter: ___ anorak (dieser).',
    options: ['ce', 'cet', 'cette', 'ces'],
    correctAnswer: 'cet',
    explanation: '"anorak" ist maskulin und beginnt mit einem Vokal, daher "cet anorak" (nicht "ce").',
    hints: [
      '"anorak" beginnt mit einem Vokal.',
      'Vor Vokal wird "ce" zu "cet".'
    ],
    tags: ['demonstratives', 'grammar']
  },
  {
    id: 'independent-4',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz ist korrekt?',
    options: ['une rouge robe', 'une robe rouge', 'une robe rouges', 'rouge une robe'],
    correctAnswer: 'une robe rouge',
    explanation: 'Farben stehen HINTER dem Substantiv. "rouge" endet auf -e, also keine Änderung im feminin Singular.',
    hints: [
      'Wo steht die Farbe - vor oder hinter dem Substantiv?',
      'Farben stehen hinter dem Substantiv: "une robe rouge".'
    ],
    tags: ['colors', 'placement', 'agreement']
  },
  {
    id: 'independent-5',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wähle die richtige Stellung: ein kleines Kleid.',
    options: ['une robe petite', 'une petite robe', 'une petit robe', 'petite une robe'],
    correctAnswer: 'une petite robe',
    explanation: '"petit" gehört zu den BAGS-Adjektiven und steht VOR dem Substantiv. Feminin: petite.',
    hints: [
      '"petit" ist ein BAGS-Adjektiv (Size).',
      'Es steht vor dem Substantiv und wird feminin: "une petite robe".'
    ],
    tags: ['adjectives', 'placement', 'agreement']
  },
  {
    id: 'independent-6',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wähle richtig: ___ une belle veste. (Das ist eine schöne Jacke.)',
    options: ['Il est', 'Elle est', 'C\'est', 'Ils sont'],
    correctAnswer: 'C\'est',
    explanation: 'Vor einem Artikel (une) benutzt man "c\'est", nicht "il/elle est".',
    hints: [
      'Dahinter steht ein Artikel (une).',
      'Vor einem Artikel: "C\'est".'
    ],
    tags: ['cest-ilest', 'grammar']
  },
  {
    id: 'independent-7',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ergänze "il est" oder "elle est": La robe? ___ rouge.',
    correctAnswer: ['Elle est', 'elle est'],
    explanation: '"la robe" ist feminin und ein konkretes Ding + reines Adjektiv → "Elle est rouge".',
    hints: [
      '"robe" ist feminin und es folgt nur ein Adjektiv.',
      'feminin + reines Adjektiv: "Elle est".'
    ],
    tags: ['cest-ilest', 'grammar', 'gender']
  },
  {
    id: 'independent-8',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich möchte dieses blaue Hemd.',
    correctAnswer: ['Je voudrais cette chemise bleue.', 'Je voudrais cette chemise bleue', 'je voudrais cette chemise bleue'],
    explanation: '"chemise" ist feminin: "cette chemise" + "bleue" (feminin, hinter dem Substantiv).',
    hints: [
      'Benutze "Je voudrais" und "cette" (chemise ist feminin).',
      '"bleu" wird feminin zu "bleue": "Je voudrais cette chemise bleue."'
    ],
    tags: ['translation', 'demonstratives', 'agreement', 'shopping']
  },
  {
    id: 'independent-9',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: Il porte un manteau gris.',
    correctAnswer: ['Er trägt einen grauen Mantel.', 'Er trägt einen grauen Mantel', 'er trägt einen grauen Mantel'],
    explanation: '"Il porte" = er trägt, "un manteau gris" = einen grauen Mantel.',
    hints: [
      '"porter" bedeutet "tragen".',
      'Es ist "Er trägt einen grauen Mantel."'
    ],
    tags: ['translation', 'clothing', 'colors']
  },
  {
    id: 'independent-10',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ergänze mit der richtigen Form: des chaussures ___ (braun).',
    correctAnswer: ['marron'],
    explanation: '"marron" ist unveränderlich! Es bekommt nie ein -e oder -s, auch nicht im Plural.',
    hints: [
      '"marron" ist eine besondere Farbe.',
      'Es ändert sich NIE: "marron".'
    ],
    tags: ['colors', 'agreement', 'exception']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Übersetze und beachte die Stellung: ein kleines rotes Kleid → une ___ robe ___.',
    correctAnswer: ['petite, rouge', 'petite rouge'],
    explanation: '"petit" (BAGS) steht VOR dem Substantiv und wird feminin (petite); "rouge" (Farbe) steht DANACH: "une petite robe rouge".',
    tags: ['adjectives', 'placement', 'agreement']
  },
  {
    id: 'assess-2',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welcher Satz ist vollständig korrekt?',
    options: [
      'Cette chemise blanc est jolie.',
      'Cette chemise blanche est jolie.',
      'Ce chemise blanche est joli.',
      'Cet chemise blanche est jolie.'
    ],
    correctAnswer: 'Cette chemise blanche est jolie.',
    explanation: '"chemise" ist feminin: cette + blanche (Sonderform von blanc) + jolie (feminin).',
    tags: ['demonstratives', 'agreement', 'colors']
  },
  {
    id: 'assess-3',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wähle richtig: La veste? ___ noire et ___ une belle veste.',
    options: [
      'C\'est ... elle est',
      'Elle est ... c\'est',
      'Il est ... c\'est',
      'C\'est ... il est'
    ],
    correctAnswer: 'Elle est ... c\'est',
    explanation: 'Reines Adjektiv für ein konkretes feminines Ding: "Elle est noire". Vor Artikel (une): "c\'est une belle veste".',
    tags: ['cest-ilest', 'grammar', 'gender']
  },
  {
    id: 'assess-4',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Diese Schuhe sind teuer.',
    correctAnswer: ['Ces chaussures sont chères.', 'Ces chaussures sont chères', 'ces chaussures sont chères'],
    explanation: '"chaussures" ist feminin Plural: "ces chaussures" + "sont" + "chères" (feminin Plural von cher, mit accent grave).',
    tags: ['translation', 'demonstratives', 'agreement', 'plural']
  },
  {
    id: 'assess-5',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— Bonjour, je ___ une robe.\n— Cette robe vous ___ très bien!',
    correctAnswer: ['voudrais, va', 'voudrais va'],
    explanation: '"Je voudrais" (Ich möchte) und "Cette robe vous va très bien" (Dieses Kleid steht Ihnen sehr gut).',
    tags: ['shopping', 'dialogue', 'phrases']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Je voudrais essayer ce pull bleu.',
    correctAnswer: [
      'Ich möchte diesen blauen Pullover anprobieren.',
      'Ich möchte diesen blauen Pullover anprobieren',
      'ich möchte diesen blauen Pullover anprobieren'
    ],
    explanation: '"Je voudrais essayer" = ich möchte anprobieren, "ce pull bleu" = diesen blauen Pullover.',
    tags: ['translation', 'shopping', 'demonstratives']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson08: Lesson = {
  meta: {
    id: 'lesson-08',
    number: 8,
    title: 'Les Vêtements',
    titleGerman: 'Kleidung',
    objectives: [
      'Die wichtigsten Kleidungsstücke mit ihrem Geschlecht kennen',
      'Die Grundfarben benennen und richtig anpassen können',
      'Demonstrativbegleiter (ce, cet, cette, ces) korrekt verwenden',
      'Adjektive in Geschlecht und Zahl angleichen und richtig platzieren',
      '"C\'est" und "Il est" sicher unterscheiden',
      'Kleidung beschreiben und Einkaufswünsche ausdrücken'
    ],
    estimatedMinutes: 90,
    level: 'A1',
    prerequisites: ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05', 'lesson-06', 'lesson-07'],
    tags: ['clothing', 'colors', 'demonstratives', 'adjectives', 'agreement', 'shopping', 'cest-ilest']
  },

  introduction: {
    objectives: [
      'Kleidung und Farben auf Französisch benennen können',
      'Verstehen, warum die meisten Adjektive HINTER dem Substantiv stehen',
      'Mit ce/cet/cette/ces auf Kleidungsstücke zeigen können',
      'Im Geschäft Vorlieben und Wünsche ausdrücken können'
    ],
    motivation: `
In dieser Lektion lernst du, über Kleidung zu sprechen - ein Thema, das du im Alltag ständig brauchst,
egal ob beim Einkaufen, beim Beschreiben von Personen oder im Smalltalk.

Du lernst auch eine zentrale Grammatik-Regel des Französischen: die Angleichung der Adjektive und ihre
besondere Stellung. Damit kannst du bald sagen "Ich möchte dieses schöne blaue Kleid" - ein großer Schritt!
    `,
    culturalNote: `
**Mode in Frankreich**

Frankreich, besonders Paris, gilt als eine Welthauptstadt der Mode. "Le bon goût" (der gute Geschmack)
ist ein wichtiges kulturelles Ideal - viele Franzosen legen Wert auf eine schlichte, elegante Kleidung
statt auffälliger Mengen.

**Im Geschäft**

Auch in der Boutique gilt: Immer zuerst mit "Bonjour" grüßen! Verkäufer fragen oft "Je peux vous aider?"
(Kann ich Ihnen helfen?). Eine höfliche Antwort ist "Je regarde, merci" (Ich schaue nur, danke), wenn du
nur stöbern möchtest.
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
      'Du kennst die wichtigsten Kleidungsstücke mit ihrem Artikel (le pantalon, la robe, les chaussures ...)',
      'Du kannst die Grundfarben benennen (rouge, bleu, vert, noir, blanc ...)',
      'Du weißt, dass die meisten Adjektive HINTER dem Substantiv stehen - außer den BAGS-Adjektiven',
      'Du kannst Adjektive in Geschlecht (+e) und Zahl (+s) angleichen und kennst Ausnahmen wie blanc, marron',
      'Du verwendest ce, cet, cette und ces richtig je nach Geschlecht, Zahl und Anfangslaut',
      'Du unterscheidest "c\'est" (vor Artikel) und "il/elle est" (vor reinem Adjektiv)',
      'Du kannst Kleidung beschreiben und im Geschäft deine Wünsche ausdrücken'
    ],
    nextLesson: 'lesson-09'
  }
};
