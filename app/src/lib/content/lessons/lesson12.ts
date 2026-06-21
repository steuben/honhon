import type { Lesson, CardInput, Exercise, TeachingSection } from '$lib/types';

/**
 * LESSON 12: Plans et Projets - Pläne
 * Making plans, invitations and talking about the future
 *
 * Level: A1 (Absolute Beginner) - FINAL LESSON OF THE A1 COURSE
 * Duration: ~90 minutes
 *
 * Topics:
 * - Futur proche (aller + Infinitiv): je vais manger, nous allons partir
 * - Verb "pouvoir" (können): je peux, tu peux, il peut...
 * - Höfliche Form mit "je voudrais" und "est-ce que tu pourrais"
 * - Zeitangaben für die Zukunft (demain, ce week-end, la semaine prochaine)
 * - Einladungen machen, annehmen und ablehnen
 */

// ============================================================================
// TEACHING SECTIONS
// ============================================================================

const teachingSections: TeachingSection[] = [
  // Section 1: Intro to talking about the future
  {
    id: 'futur-intro',
    title: 'Über die Zukunft sprechen',
    type: 'explanation',
    content: `
In dieser letzten A1-Lektion lernst du, über die Zukunft zu sprechen: Pläne machen, jemanden einladen
und Einladungen annehmen oder ablehnen.

Im Französischen gibt es - wie im Deutschen - eine sehr einfache Möglichkeit, über die Zukunft zu sprechen,
ohne eine neue Zeitform auswendig zu lernen: das **futur proche** (die "nahe Zukunft").

**Vergleich mit dem Deutschen:**
- Deutsch: "Ich werde essen" ODER ganz oft einfach "Ich esse gleich"
- Französisch: "Je vais manger" (wörtlich: "Ich gehe essen")

Das funktioniert fast genauso wie im Englischen ("I am going to eat") und ist im Alltag DIE häufigste
Art, über zukünftige Pläne zu sprechen. Du kennst das Verb "aller" (gehen) schon - jetzt setzt du es ein,
um die Zukunft auszudrücken!
    `,
    germanExplanation: 'Das futur proche ist die einfachste und im Alltag häufigste Zukunftsform.'
  },

  // Section 2: Verb aller (review/table)
  {
    id: 'verb-aller',
    title: 'Das Verb "aller" (gehen) - Wiederholung',
    type: 'table',
    content: `
Für das futur proche brauchst du das Verb "aller". Es ist UNREGELMÄSSIG - hier zur Wiederholung:

| Pronomen | aller | Aussprache | Deutsch |
|----------|-------|------------|---------|
| je | vais | [vɛ] | ich gehe |
| tu | vas | [va] | du gehst |
| il/elle | va | [va] | er/sie geht |
| nous | allons | [alɔ̃] | wir gehen |
| vous | allez | [ale] | ihr geht / Sie gehen |
| ils/elles | vont | [vɔ̃] | sie gehen |

**Merkhilfe:** je-vais, tu-vas, il-va klingen sehr ähnlich. Die "Ausreißer" sind nous-allons und vous-allez
(die beginnen mit "all-") sowie ils-vont [vɔ̃] mit Nasalvokal.
    `
  },

  // Section 3: Futur proche formation
  {
    id: 'futur-proche-bildung',
    title: 'Bildung des Futur proche',
    type: 'explanation',
    content: `
Das futur proche ist herrlich einfach:

**aller (konjugiert) + Infinitiv**

Das zweite Verb bleibt im **Infinitiv** (Grundform) - genau wie "essen", "gehen", "machen" im Deutschen!

**Formel:** [Pronomen] + [Form von aller] + [Infinitiv]

- Je **vais** manger. = Ich werde essen. / Ich esse gleich.
- Tu **vas** partir. = Du wirst gehen.
- Il **va** travailler. = Er wird arbeiten.
- Nous **allons** voyager. = Wir werden reisen.
- Vous **allez** danser. = Ihr werdet tanzen.
- Ils **vont** dormir. = Sie werden schlafen.

**WICHTIG:** Nur "aller" wird konjugiert! Das zweite Verb bleibt IMMER in der Grundform (Infinitiv).
    `,
    examples: [
      { french: 'Je vais regarder un film.', german: 'Ich werde einen Film schauen.', notes: 'aller (vais) + Infinitiv (regarder)' },
      { french: 'Nous allons visiter Paris.', german: 'Wir werden Paris besuchen.', notes: 'aller (allons) + Infinitiv (visiter)' },
      { french: 'Elles vont arriver demain.', german: 'Sie werden morgen ankommen.', notes: 'aller (vont) + Infinitiv (arriver)' }
    ]
  },

  // Section 4: Negation of futur proche
  {
    id: 'futur-proche-negation',
    title: 'Verneinung im Futur proche',
    type: 'tip',
    content: `
Die Verneinung "ne ... pas" umklammert das konjugierte Verb "aller" - NICHT den Infinitiv!

**Formel:** ne + [aller] + pas + [Infinitiv]

- Je **ne** vais **pas** sortir. = Ich werde nicht ausgehen.
- Il **ne** va **pas** venir. = Er wird nicht kommen.
- Nous **n'**allons **pas** travailler. = Wir werden nicht arbeiten.

**Beachte:** Vor einem Vokal wird "ne" zu "n'": "n'allons pas".

So merkst du es dir: Das "ne ... pas" packt immer das KONJUGIERTE Verb ein - das ist hier "aller".
Der Infinitiv steht außerhalb der Klammer.
    `
  },

  // Section 5: Future time expressions table
  {
    id: 'zeitangaben-zukunft',
    title: 'Zeitangaben für die Zukunft',
    type: 'table',
    content: `
Um Pläne zu machen, brauchst du Zeitangaben. Hier die wichtigsten für die Zukunft:

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| demain | [dəmɛ̃] | morgen |
| après-demain | [apʁɛ dəmɛ̃] | übermorgen |
| ce soir | [sə swaʁ] | heute Abend |
| ce week-end | [sə wikɛnd] | dieses Wochenende |
| cette semaine | [sɛt səmɛn] | diese Woche |
| la semaine prochaine | [la səmɛn pʁɔʃɛn] | nächste Woche |
| le mois prochain | [lə mwa pʁɔʃɛ̃] | nächsten Monat |
| l'année prochaine | [lane pʁɔʃɛn] | nächstes Jahr |
| bientôt | [bjɛ̃to] | bald |
| plus tard | [ply taʁ] | später |

**Merkhilfe:** "prochain/prochaine" bedeutet "nächste(r)" - es passt sich dem Geschlecht an:
le mois proch**ain** (m), la semaine proch**aine** (f).
    `,
    germanExplanation: 'Zeitangaben stehen oft am Satzanfang oder am Satzende.'
  },

  // Section 6: Verb pouvoir table
  {
    id: 'verb-pouvoir',
    title: 'Das Verb "pouvoir" (können)',
    type: 'table',
    content: `
"Pouvoir" bedeutet "können" und ist sehr wichtig für Einladungen und Pläne
("Kannst du am Samstag?"). Es ist UNREGELMÄSSIG.

## Konjugation im Präsens (Présent)

| Pronomen | pouvoir | Aussprache | Deutsch | Beispiel |
|----------|---------|------------|---------|----------|
| je | peux | [pø] | ich kann | Je peux venir. (Ich kann kommen.) |
| tu | peux | [pø] | du kannst | Tu peux danser? (Kannst du tanzen?) |
| il/elle | peut | [pø] | er/sie kann | Elle peut partir. (Sie kann gehen.) |
| nous | pouvons | [puvɔ̃] | wir können | Nous pouvons manger. (Wir können essen.) |
| vous | pouvez | [puve] | ihr könnt / Sie können | Vous pouvez attendre? (Können Sie warten?) |
| ils/elles | peuvent | [pœv] | sie können | Ils peuvent rester. (Sie können bleiben.) |

**Achtung:** je peux, tu peux und il/elle peut klingen alle gleich [pø]! Nur die Schreibung
unterscheidet sich (peux / peux / peut).
    `
  },

  // Section 7: pouvoir usage
  {
    id: 'pouvoir-verwendung',
    title: 'Verwendung von "pouvoir"',
    type: 'example',
    content: `
"Pouvoir" wird - genau wie das deutsche "können" - mit einem Infinitiv kombiniert:

**Formel:** [pouvoir konjugiert] + [Infinitiv]

Es drückt aus, dass etwas möglich ist oder dass man etwas kann/darf.
    `,
    examples: [
      { french: 'Je peux venir ce soir.', german: 'Ich kann heute Abend kommen.', notes: 'Möglichkeit / Verfügbarkeit' },
      { french: 'Tu peux répéter, s\'il te plaît?', german: 'Kannst du das bitte wiederholen?', notes: 'höfliche Bitte' },
      { french: 'On peut aller au cinéma.', german: 'Wir können ins Kino gehen.', notes: '"on" = man/wir, sehr häufig!' }
    ]
  },

  // Section 8: Polite conditional je voudrais / tu pourrais
  {
    id: 'hoeflichkeit-conditionnel',
    title: 'Höfliche Formen: "je voudrais" und "tu pourrais"',
    type: 'explanation',
    content: `
Um höflich zu sein, benutzen Franzosen nicht "je veux" (ich will) - das klingt direkt und unhöflich.
Stattdessen sagt man:

**je voudrais** = ich möchte (höflich) [ʒə vudʁɛ]
- Je voudrais un café. = Ich möchte einen Kaffee.
- Je voudrais aller au restaurant. = Ich möchte ins Restaurant gehen.

Genauso wird aus "tu peux?" (kannst du?) die höfliche Bitte:

**est-ce que tu pourrais ...?** = könntest du ...? [puʁɛ]
**est-ce que vous pourriez ...?** = könnten Sie ...? [puʁje]
- Est-ce que tu pourrais m'aider? = Könntest du mir helfen?
- Est-ce que vous pourriez répéter? = Könnten Sie wiederholen?

**Merke:** Das ist der **Conditionnel** (Konditional) - die Höflichkeitsform.
Vergleiche im Deutschen: "ich will" → "ich möchte", "kannst du" → "könntest du".
Genau dieselbe Logik!
    `,
    germanExplanation: '"je voudrais" und "tu pourrais" sind die höflichen Formen von "je veux" und "tu peux".'
  },

  // Section 9: Making invitations
  {
    id: 'einladungen-machen',
    title: 'Einladungen machen',
    type: 'example',
    content: `
So lädst du jemanden ein. Die häufigsten Phrasen:
    `,
    examples: [
      { french: 'Tu veux venir?', german: 'Möchtest du mitkommen?', notes: 'Sehr häufig, informell' },
      { french: 'Tu veux aller au cinéma?', german: 'Möchtest du ins Kino gehen?', notes: 'veux + Infinitiv' },
      { french: 'On va au restaurant?', german: 'Gehen wir ins Restaurant?', notes: '"On va ...?" = lockere Einladung' },
      { french: 'Ça te dit d\'aller à la plage?', german: 'Hast du Lust, an den Strand zu gehen?', notes: 'Wörtlich: "Sagt es dir, zu...?"' },
      { french: 'Tu es libre samedi?', german: 'Hast du am Samstag Zeit?', notes: 'libre = frei / verfügbar' }
    ]
  },

  // Section 10: Accepting and refusing table
  {
    id: 'annehmen-ablehnen',
    title: 'Einladungen annehmen und ablehnen',
    type: 'table',
    content: `
Wenn dich jemand einlädt, kannst du zusagen oder absagen.

## Zusagen (annehmen)

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| Oui, avec plaisir! | [avɛk pleziʁ] | Ja, mit Vergnügen / sehr gerne! |
| Oui, volontiers! | [vɔlɔ̃tje] | Ja, gerne! |
| D'accord! | [dakɔʁ] | Einverstanden / Okay! |
| Bonne idée! | [bɔn ide] | Gute Idee! |
| C'est parfait! | [sɛ paʁfɛ] | Das ist perfekt! |

## Absagen (ablehnen)

| Französisch | Aussprache | Deutsch |
|-------------|------------|---------|
| Désolé(e), je ne peux pas. | [dezɔle] | Tut mir leid, ich kann nicht. |
| Non merci. | [nɔ̃ mɛʁsi] | Nein danke. |
| Je suis occupé(e). | [ɔkype] | Ich bin beschäftigt. |
| Une autre fois, peut-être? | [yn otʁ fwa] | Ein andermal vielleicht? |

**Höflichkeitstipp:** Beim Absagen IMMER mit "désolé(e)" (tut mir leid) beginnen und einen Grund nennen -
das ist viel höflicher als ein einfaches "non".
    `
  },

  // Section 11: Dialogue 1 - informal invitation accepted
  {
    id: 'dialog-einladung-ja',
    title: 'Dialog: Eine Einladung annehmen (Informell)',
    type: 'dialogue',
    content: `
**Situation:** Léa lädt ihren Freund Thomas ein.

**Léa:** Salut Thomas! Tu es libre ce week-end?
**Thomas:** Oui, je suis libre samedi. Pourquoi?
**Léa:** On va aller au cinéma. Tu veux venir?
**Thomas:** Avec plaisir! Qu'est-ce qu'on va voir?
**Léa:** Je ne sais pas encore. Je vais regarder le programme.
**Thomas:** D'accord! On peut manger une pizza après?
**Léa:** Bonne idée! À samedi!
**Thomas:** À samedi!

---

**Beachte:**
- "Tu es libre?" = Hast du Zeit? (libre = frei)
- "On va aller" und "On peut manger" - hier siehst du futur proche UND pouvoir im Einsatz
- "Avec plaisir!" ist eine sehr freundliche, begeisterte Zusage
- "À samedi!" = Bis Samstag! (zum Abschied bei einer Verabredung)
    `
  },

  // Section 12: Dialogue 2 - invitation refused (more formal)
  {
    id: 'dialog-einladung-nein',
    title: 'Dialog: Eine Einladung höflich ablehnen',
    type: 'dialogue',
    content: `
**Situation:** Frau Bernard lädt einen Kollegen zum Essen ein.

**Mme Bernard:** Bonjour Monsieur Petit. Est-ce que vous êtes libre demain soir?
**M. Petit:** Bonjour. Demain soir? Pourquoi?
**Mme Bernard:** Nous allons dîner au restaurant. Vous voulez venir?
**M. Petit:** Oh, c'est gentil! Mais désolé, je ne peux pas. Je suis occupé demain.
**Mme Bernard:** Pas de problème. Une autre fois, peut-être?
**M. Petit:** Oui, avec plaisir! La semaine prochaine?
**Mme Bernard:** Parfait. À la semaine prochaine!

---

**Beachte:**
- Hier wird gesiezt: "vous êtes", "vous voulez", "vous pouvez"
- "C'est gentil!" = Das ist nett! (eine höfliche Reaktion auf eine Einladung)
- Beim Absagen: "désolé, je ne peux pas" + Grund ("je suis occupé") = höflich
- "Une autre fois, peut-être?" lässt die Tür für die Zukunft offen - sehr höflich
    `
  },

  // Section 13: Activities vocabulary
  {
    id: 'aktivitaeten',
    title: 'Aktivitäten und Freizeit',
    type: 'example',
    content: `
Was kann man zusammen unternehmen? Hier nützliche Aktivitäten (als Infinitiv für das futur proche):
    `,
    examples: [
      { french: 'aller au cinéma', german: 'ins Kino gehen', notes: 'Je vais aller au cinéma.' },
      { french: 'manger au restaurant', german: 'im Restaurant essen', notes: 'On va manger au restaurant.' },
      { french: 'faire une promenade', german: 'einen Spaziergang machen', notes: 'Nous allons faire une promenade.' },
      { french: 'voyager', german: 'reisen', notes: 'Je vais voyager en Italie.' },
      { french: 'visiter un musée', german: 'ein Museum besuchen', notes: 'On va visiter un musée.' }
    ]
  },

  // Section 14: Common mistakes tip
  {
    id: 'haeufige-fehler',
    title: 'Häufige Fehler vermeiden',
    type: 'tip',
    content: `
Ein paar typische Stolperfallen beim futur proche und bei Einladungen:

**1. Das zweite Verb bleibt Infinitiv!**
- ❌ Je vais je mange. (FALSCH - zweites Verb darf nicht konjugiert sein)
- ✅ Je vais manger. (RICHTIG)

**2. Nur "aller" wird konjugiert, nicht beide Verben.**
- ❌ Nous allons mangeons. (FALSCH)
- ✅ Nous allons manger. (RICHTIG)

**3. "je veux" vs. "je voudrais"**
- "Je veux" (ich will) klingt fordernd. In höflichen Situationen IMMER "je voudrais" (ich möchte).

**4. Bei der Verneinung umklammert "ne ... pas" nur "aller":**
- ✅ Je ne vais pas sortir. (RICHTIG)
- ❌ Je ne vais sortir pas. (FALSCH)

**5. "peux" / "peux" / "peut" klingen gleich [pø]** - achte auf die richtige Schreibung
je nach Pronomen!
    `
  },

  // Section 15: Combining it all
  {
    id: 'alles-kombinieren',
    title: 'Alles zusammen: einen Plan formulieren',
    type: 'example',
    content: `
Jetzt kombinierst du alles: Zeitangabe + futur proche + Aktivität. So sprichst du über deine Pläne:
    `,
    examples: [
      { french: 'Demain, je vais travailler.', german: 'Morgen werde ich arbeiten.', notes: 'Zeitangabe am Anfang' },
      { french: 'Ce week-end, nous allons visiter Paris.', german: 'Dieses Wochenende besuchen wir Paris.' },
      { french: 'La semaine prochaine, je voudrais aller à la plage.', german: 'Nächste Woche möchte ich an den Strand gehen.' },
      { french: 'Tu peux venir ce soir? On va manger ensemble.', german: 'Kannst du heute Abend kommen? Wir essen zusammen.', notes: 'ensemble = zusammen' }
    ]
  }
];

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabulary: CardInput[] = [
  // Verb aller (futur proche helper)
  {
    id: 'lesson12-aller-vais',
    french: 'je vais',
    german: 'ich gehe / ich werde (gleich)',
    english: 'I go / I am going to',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais manger.',
      german: 'Ich werde (gleich) essen.'
    },
    notes: 'aller-Form für "je". Mit Infinitiv = futur proche.',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche', 'essential']
  },
  {
    id: 'lesson12-aller-vas',
    french: 'tu vas',
    german: 'du gehst / du wirst',
    english: 'you go / you are going to',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu vas partir?',
      german: 'Wirst du gehen?'
    },
    notes: 'aller-Form für "tu".',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche']
  },
  {
    id: 'lesson12-aller-va',
    french: 'il/elle va',
    german: 'er/sie geht / wird',
    english: 'he/she goes / is going to',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Elle va voyager.',
      german: 'Sie wird reisen.'
    },
    notes: 'aller-Form für "il/elle". Auch "on va" (man/wir).',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche']
  },
  {
    id: 'lesson12-aller-allons',
    french: 'nous allons',
    german: 'wir gehen / werden',
    english: 'we go / are going to',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous allons danser.',
      german: 'Wir werden tanzen.'
    },
    notes: 'aller-Form für "nous". Beginnt mit "all-".',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche']
  },
  {
    id: 'lesson12-aller-allez',
    french: 'vous allez',
    german: 'ihr geht / Sie gehen (werden)',
    english: 'you go / are going to (pl./formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous allez attendre.',
      german: 'Sie werden warten.'
    },
    notes: 'aller-Form für "vous".',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche']
  },
  {
    id: 'lesson12-aller-vont',
    french: 'ils/elles vont',
    german: 'sie gehen / werden',
    english: 'they go / are going to',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils vont arriver demain.',
      german: 'Sie werden morgen ankommen.'
    },
    notes: 'aller-Form für "ils/elles". Aussprache: [vɔ̃] mit Nasalvokal.',
    level: 'A1',
    tags: ['lesson12', 'verb', 'aller', 'futur-proche']
  },

  // Verb pouvoir
  {
    id: 'lesson12-pouvoir-peux',
    french: 'je peux',
    german: 'ich kann',
    english: 'I can',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je peux venir ce soir.',
      german: 'Ich kann heute Abend kommen.'
    },
    notes: 'pouvoir-Form für "je". Aussprache: [pø].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation', 'essential']
  },
  {
    id: 'lesson12-pouvoir-tupeux',
    french: 'tu peux',
    german: 'du kannst',
    english: 'you can',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu peux répéter?',
      german: 'Kannst du wiederholen?'
    },
    notes: 'pouvoir-Form für "tu". Klingt wie "je peux": [pø].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation']
  },
  {
    id: 'lesson12-pouvoir-peut',
    french: 'il/elle peut',
    german: 'er/sie kann',
    english: 'he/she can',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'On peut aller au cinéma.',
      german: 'Wir können ins Kino gehen.'
    },
    notes: 'pouvoir-Form für "il/elle/on". Aussprache: [pø].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation']
  },
  {
    id: 'lesson12-pouvoir-pouvons',
    french: 'nous pouvons',
    german: 'wir können',
    english: 'we can',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous pouvons manger ensemble.',
      german: 'Wir können zusammen essen.'
    },
    notes: 'pouvoir-Form für "nous". Aussprache: [puvɔ̃].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation']
  },
  {
    id: 'lesson12-pouvoir-pouvez',
    french: 'vous pouvez',
    german: 'ihr könnt / Sie können',
    english: 'you can (pl./formal)',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Vous pouvez attendre?',
      german: 'Können Sie warten?'
    },
    notes: 'pouvoir-Form für "vous". Aussprache: [puve].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation']
  },
  {
    id: 'lesson12-pouvoir-peuvent',
    french: 'ils/elles peuvent',
    german: 'sie können',
    english: 'they can',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Ils peuvent rester.',
      german: 'Sie können bleiben.'
    },
    notes: 'pouvoir-Form für "ils/elles". Aussprache: [pœv].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'pouvoir', 'conjugation']
  },

  // Polite forms
  {
    id: 'lesson12-voudrais',
    french: 'je voudrais',
    german: 'ich möchte (höflich)',
    english: 'I would like',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je voudrais aller au restaurant.',
      german: 'Ich möchte ins Restaurant gehen.'
    },
    notes: 'Höfliche Form von "je veux". Conditionnel. Sehr wichtig!',
    level: 'A1',
    tags: ['lesson12', 'verb', 'politeness', 'essential']
  },
  {
    id: 'lesson12-pourrais',
    french: 'tu pourrais',
    german: 'könntest du',
    english: 'could you',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Est-ce que tu pourrais m\'aider?',
      german: 'Könntest du mir helfen?'
    },
    notes: 'Höfliche Form von "tu peux". Formell: "vous pourriez".',
    level: 'A1',
    tags: ['lesson12', 'verb', 'politeness']
  },
  {
    id: 'lesson12-veux-venir',
    french: 'tu veux venir?',
    german: 'möchtest du mitkommen?',
    english: 'do you want to come?',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'On va au cinéma. Tu veux venir?',
      german: 'Wir gehen ins Kino. Möchtest du mitkommen?'
    },
    notes: 'Häufigste informelle Einladungsphrase.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'invitation', 'essential']
  },

  // Future time expressions
  {
    id: 'lesson12-demain',
    french: 'demain',
    german: 'morgen',
    english: 'tomorrow',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Demain, je vais travailler.',
      german: 'Morgen werde ich arbeiten.'
    },
    notes: 'Aussprache: [dəmɛ̃] mit Nasalvokal am Ende.',
    level: 'A1',
    tags: ['lesson12', 'time', 'future', 'essential']
  },
  {
    id: 'lesson12-cesoir',
    french: 'ce soir',
    german: 'heute Abend',
    english: 'this evening / tonight',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Tu es libre ce soir?',
      german: 'Hast du heute Abend Zeit?'
    },
    notes: 'Wörtlich: "diesen Abend".',
    level: 'A1',
    tags: ['lesson12', 'time', 'future']
  },
  {
    id: 'lesson12-weekend',
    french: 'ce week-end',
    german: 'dieses Wochenende',
    english: 'this weekend',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Ce week-end, on va voyager.',
      german: 'Dieses Wochenende werden wir reisen.'
    },
    notes: '"week-end" ist aus dem Englischen entlehnt.',
    level: 'A1',
    isCognate: true,
    tags: ['lesson12', 'time', 'future']
  },
  {
    id: 'lesson12-semaine-prochaine',
    french: 'la semaine prochaine',
    german: 'nächste Woche',
    english: 'next week',
    partOfSpeech: 'adverb',
    gender: 'f',
    exampleSentence: {
      french: 'La semaine prochaine, je vais visiter Lyon.',
      german: 'Nächste Woche werde ich Lyon besuchen.'
    },
    notes: '"prochaine" (f) = nächste. Maskulin: "prochain".',
    level: 'A1',
    tags: ['lesson12', 'time', 'future']
  },
  {
    id: 'lesson12-mois-prochain',
    french: 'le mois prochain',
    german: 'nächsten Monat',
    english: 'next month',
    partOfSpeech: 'adverb',
    gender: 'm',
    exampleSentence: {
      french: 'Le mois prochain, nous allons déménager.',
      german: 'Nächsten Monat werden wir umziehen.'
    },
    notes: '"prochain" (m). Das -s in "mois" ist stumm: [mwa].',
    level: 'A1',
    tags: ['lesson12', 'time', 'future']
  },
  {
    id: 'lesson12-bientot',
    french: 'bientôt',
    german: 'bald',
    english: 'soon',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'On va se voir bientôt.',
      german: 'Wir werden uns bald sehen.'
    },
    notes: 'Auch in "à bientôt!" (bis bald!).',
    level: 'A1',
    tags: ['lesson12', 'time', 'future']
  },
  {
    id: 'lesson12-plus-tard',
    french: 'plus tard',
    german: 'später',
    english: 'later',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Je vais téléphoner plus tard.',
      german: 'Ich werde später anrufen.'
    },
    notes: 'Das -s in "plus" ist hier stumm.',
    level: 'A1',
    tags: ['lesson12', 'time', 'future']
  },

  // Acceptance phrases
  {
    id: 'lesson12-avec-plaisir',
    french: 'avec plaisir',
    german: 'mit Vergnügen / sehr gerne',
    english: 'with pleasure / gladly',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: '— Tu veux venir? — Avec plaisir!',
      german: '— Möchtest du mitkommen? — Sehr gerne!'
    },
    notes: 'Begeisterte, höfliche Zusage.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'acceptance', 'essential']
  },
  {
    id: 'lesson12-volontiers',
    french: 'volontiers',
    german: 'gerne',
    english: 'gladly / willingly',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Oui, volontiers!',
      german: 'Ja, gerne!'
    },
    notes: 'Aussprache: [vɔlɔ̃tje]. Das End-s ist stumm.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'acceptance']
  },
  {
    id: 'lesson12-daccord',
    french: 'd\'accord',
    german: 'einverstanden / okay',
    english: 'okay / agreed',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: '— On va au cinéma? — D\'accord!',
      german: '— Gehen wir ins Kino? — Einverstanden!'
    },
    notes: 'Sehr häufig! Aussprache: [dakɔʁ].',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'acceptance', 'essential']
  },
  {
    id: 'lesson12-bonne-idee',
    french: 'bonne idée',
    german: 'gute Idee',
    english: 'good idea',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: '— On peut manger une pizza? — Bonne idée!',
      german: '— Können wir Pizza essen? — Gute Idee!'
    },
    notes: '"idée" ist feminin: une bonne idée.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'acceptance']
  },

  // Refusal phrases
  {
    id: 'lesson12-desole',
    french: 'désolé(e)',
    german: 'tut mir leid',
    english: 'sorry',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'Désolé, je ne peux pas.',
      german: 'Tut mir leid, ich kann nicht.'
    },
    notes: 'Männer: désolé, Frauen: désolée. Wichtig beim Absagen!',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'refusal', 'essential']
  },
  {
    id: 'lesson12-jenepeuxpas',
    french: 'je ne peux pas',
    german: 'ich kann nicht',
    english: 'I can\'t',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Désolé, je ne peux pas venir.',
      german: 'Tut mir leid, ich kann nicht kommen.'
    },
    notes: 'Verneinung von "je peux". Standard-Absage.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'refusal', 'pouvoir', 'essential']
  },
  {
    id: 'lesson12-occupe',
    french: 'occupé(e)',
    german: 'beschäftigt',
    english: 'busy',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'Je suis occupé demain.',
      german: 'Ich bin morgen beschäftigt.'
    },
    notes: 'Männer: occupé, Frauen: occupée. Häufiger Absage-Grund.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'refusal', 'adjective']
  },
  {
    id: 'lesson12-autre-fois',
    french: 'une autre fois',
    german: 'ein andermal',
    english: 'another time',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'Une autre fois, peut-être?',
      german: 'Ein andermal vielleicht?'
    },
    notes: 'Höfliche Art, eine Absage abzumildern.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'refusal']
  },

  // Invitation / question phrases
  {
    id: 'lesson12-libre',
    french: 'libre',
    german: 'frei / verfügbar',
    english: 'free / available',
    partOfSpeech: 'adjective',
    exampleSentence: {
      french: 'Tu es libre samedi?',
      german: 'Hast du am Samstag Zeit?'
    },
    notes: 'Identisch für m/f: il est libre, elle est libre.',
    level: 'A1',
    tags: ['lesson12', 'adjective', 'invitation']
  },
  {
    id: 'lesson12-onva',
    french: 'on va...?',
    german: 'gehen wir...? / sollen wir...?',
    english: 'shall we...?',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'On va au restaurant?',
      german: 'Gehen wir ins Restaurant?'
    },
    notes: '"on" = man/wir. Sehr lockere Einladung.',
    level: 'A1',
    tags: ['lesson12', 'phrase', 'invitation']
  },
  {
    id: 'lesson12-peut-etre',
    french: 'peut-être',
    german: 'vielleicht',
    english: 'maybe / perhaps',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'Peut-être demain.',
      german: 'Vielleicht morgen.'
    },
    notes: 'Wörtlich aus "peut" + "être". Aussprache: [pøtɛtʁ].',
    level: 'A1',
    tags: ['lesson12', 'adverb']
  },

  // Activity verbs (infinitives)
  {
    id: 'lesson12-venir',
    french: 'venir',
    german: 'kommen',
    english: 'to come',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Tu vas venir ce soir?',
      german: 'Wirst du heute Abend kommen?'
    },
    notes: 'Infinitiv. Aussprache: [vəniʁ].',
    level: 'A1',
    tags: ['lesson12', 'verb', 'activity', 'essential']
  },
  {
    id: 'lesson12-partir',
    french: 'partir',
    german: 'abfahren / gehen',
    english: 'to leave',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous allons partir demain.',
      german: 'Wir werden morgen abfahren.'
    },
    notes: 'Infinitiv. Im Sinne von weggehen/abreisen.',
    level: 'A1',
    tags: ['lesson12', 'verb', 'activity']
  },
  {
    id: 'lesson12-voyager',
    french: 'voyager',
    german: 'reisen',
    english: 'to travel',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais voyager en Italie.',
      german: 'Ich werde nach Italien reisen.'
    },
    notes: 'Infinitiv. Regelmäßiges -er-Verb.',
    level: 'A1',
    tags: ['lesson12', 'verb', 'activity']
  },
  {
    id: 'lesson12-visiter',
    french: 'visiter',
    german: 'besuchen / besichtigen',
    english: 'to visit',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'On va visiter un musée.',
      german: 'Wir werden ein Museum besichtigen.'
    },
    notes: 'Für Orte (Städte, Museen). Für Personen: "rendre visite à".',
    level: 'A1',
    tags: ['lesson12', 'verb', 'activity']
  },
  {
    id: 'lesson12-faire-promenade',
    french: 'faire une promenade',
    german: 'einen Spaziergang machen',
    english: 'to take a walk',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Nous allons faire une promenade.',
      german: 'Wir werden einen Spaziergang machen.'
    },
    notes: '"faire" = machen/tun. "une promenade" = ein Spaziergang.',
    level: 'A1',
    tags: ['lesson12', 'verb', 'activity']
  },
  {
    id: 'lesson12-ensemble',
    french: 'ensemble',
    german: 'zusammen',
    english: 'together',
    partOfSpeech: 'adverb',
    exampleSentence: {
      french: 'On va manger ensemble.',
      german: 'Wir werden zusammen essen.'
    },
    notes: 'Aussprache: [ɑ̃sɑ̃bl] mit zwei Nasalvokalen.',
    level: 'A1',
    tags: ['lesson12', 'adverb', 'activity']
  }
];

// ============================================================================
// EXERCISES
// ============================================================================

// Guided Practice: Easy exercises (8 exercises)
const guidedPractice: Exercise[] = [
  {
    id: 'guided-1',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ manger. (Ich werde essen.) - Ergänze die Form von "aller".',
    correctAnswer: ['vais'],
    explanation: 'Im futur proche steht "aller" konjugiert vor dem Infinitiv. Für "je" ist das "vais".',
    hints: [
      'Welche aller-Form passt zu "je"?',
      'Es ist "vais": Je vais manger.'
    ],
    tags: ['futur-proche', 'aller']
  },
  {
    id: 'guided-2',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Form von "aller" passt zu "nous"?',
    options: ['vais', 'vas', 'allons', 'vont'],
    correctAnswer: 'allons',
    explanation: 'Für "nous" ist die aller-Form "allons": Nous allons partir.',
    hints: [
      'Sie beginnt mit "all-".',
      'Es ist "allons".'
    ],
    tags: ['futur-proche', 'aller']
  },
  {
    id: 'guided-3',
    type: 'fill-blank',
    difficulty: 'easy',
    question: 'Je ___ venir ce soir. (Ich kann heute Abend kommen.) - Form von "pouvoir".',
    correctAnswer: ['peux'],
    explanation: 'Die Form von "pouvoir" für "je" ist "peux" [pø].',
    hints: [
      'Sie wird [pø] ausgesprochen.',
      'Es ist "peux".'
    ],
    tags: ['pouvoir', 'conjugation']
  },
  {
    id: 'guided-4',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was bedeutet "demain"?',
    options: ['heute', 'morgen', 'gestern', 'bald'],
    correctAnswer: 'morgen',
    explanation: '"demain" [dəmɛ̃] bedeutet "morgen".',
    hints: [
      'Es ist eine Zeitangabe für die Zukunft.',
      'Es bedeutet "morgen".'
    ],
    tags: ['time', 'vocabulary']
  },
  {
    id: 'guided-5',
    type: 'translation-de-fr',
    difficulty: 'easy',
    question: 'Übersetze: Einverstanden! (als Zusage)',
    correctAnswer: ['d\'accord', 'D\'accord', 'd\'accord!', 'D\'accord!'],
    explanation: '"D\'accord!" bedeutet "Einverstanden! / Okay!".',
    hints: [
      'Es beginnt mit "d\'".',
      'Es ist "d\'accord".'
    ],
    tags: ['acceptance', 'vocabulary']
  },
  {
    id: 'guided-6',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Satz steht korrekt im futur proche?',
    options: ['Je vais manger.', 'Je vais mange.', 'Je manger vais.', 'Je vais je mange.'],
    correctAnswer: 'Je vais manger.',
    explanation: 'Futur proche = aller (konjugiert) + Infinitiv. Nur "vais" wird konjugiert, "manger" bleibt Infinitiv.',
    hints: [
      'Das zweite Verb bleibt in der Grundform.',
      'Es ist "Je vais manger."'
    ],
    tags: ['futur-proche', 'word-order']
  },
  {
    id: 'guided-7',
    type: 'translation-fr-de',
    difficulty: 'easy',
    question: 'Übersetze ins Deutsche: avec plaisir',
    correctAnswer: ['mit Vergnügen', 'sehr gerne', 'gerne', 'mit Vergnügen!', 'sehr gerne!'],
    explanation: '"avec plaisir" ist eine begeisterte Zusage: "mit Vergnügen / sehr gerne".',
    hints: [
      'Es ist eine positive Antwort auf eine Einladung.',
      'Es bedeutet "mit Vergnügen / sehr gerne".'
    ],
    tags: ['acceptance', 'vocabulary']
  },
  {
    id: 'guided-8',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie sagt man höflich "ich möchte"?',
    options: ['je veux', 'je voudrais', 'je peux', 'je vais'],
    correctAnswer: 'je voudrais',
    explanation: '"je voudrais" ist die höfliche Form. "je veux" (ich will) klingt zu fordernd.',
    hints: [
      'Es ist die höfliche Form, nicht "je veux".',
      'Es ist "je voudrais".'
    ],
    tags: ['politeness', 'vocabulary']
  }
];

// Independent Practice: Medium exercises (10 exercises)
const independentPractice: Exercise[] = [
  {
    id: 'independent-1',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Nous ___ visiter Paris. (Wir werden Paris besuchen.) - futur proche',
    correctAnswer: ['allons'],
    explanation: 'aller-Form für "nous" ist "allons", gefolgt vom Infinitiv "visiter".',
    hints: [
      'Welche aller-Form passt zu "nous"?',
      'Es ist "allons": Nous allons visiter Paris.'
    ],
    tags: ['futur-proche', 'aller']
  },
  {
    id: 'independent-2',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Ils ___ arriver demain. (Sie werden morgen ankommen.) - futur proche',
    correctAnswer: ['vont'],
    explanation: 'aller-Form für "ils/elles" ist "vont" [vɔ̃], gefolgt vom Infinitiv "arriver".',
    hints: [
      'Es ist ein Nasalvokal: [vɔ̃].',
      'Es ist "vont".'
    ],
    tags: ['futur-proche', 'aller']
  },
  {
    id: 'independent-3',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Verneine: Je ___ vais ___ sortir. (Ich werde nicht ausgehen.) Ergänze ne ... pas.',
    correctAnswer: ['ne, pas', 'ne pas'],
    explanation: '"ne ... pas" umklammert das konjugierte Verb "aller": Je ne vais pas sortir.',
    hints: [
      'Die Verneinung packt nur "aller" ein, nicht den Infinitiv.',
      'Es ist "ne" und "pas": Je ne vais pas sortir.'
    ],
    tags: ['futur-proche', 'negation']
  },
  {
    id: 'independent-4',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Form von "pouvoir" passt zu "vous"?',
    options: ['peux', 'peut', 'pouvons', 'pouvez'],
    correctAnswer: 'pouvez',
    explanation: 'Für "vous" ist die pouvoir-Form "pouvez" [puve]: Vous pouvez attendre?',
    hints: [
      'Sie endet auf "-ez" wie viele vous-Formen.',
      'Es ist "pouvez".'
    ],
    tags: ['pouvoir', 'conjugation']
  },
  {
    id: 'independent-5',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Ich werde reisen.',
    correctAnswer: ['Je vais voyager.', 'Je vais voyager', 'je vais voyager'],
    explanation: 'futur proche: "je vais" (aller) + "voyager" (Infinitiv).',
    hints: [
      'Benutze "je vais" + Infinitiv.',
      'Es ist "Je vais voyager."'
    ],
    tags: ['futur-proche', 'translation']
  },
  {
    id: 'independent-6',
    type: 'translation-de-fr',
    difficulty: 'medium',
    question: 'Übersetze: Tut mir leid, ich kann nicht.',
    correctAnswer: ['Désolé, je ne peux pas.', 'Désolée, je ne peux pas.', 'Désolé je ne peux pas', 'désolé, je ne peux pas'],
    explanation: 'Höfliche Absage: "Désolé(e)" + "je ne peux pas" (Verneinung von "je peux").',
    hints: [
      'Beginne mit "Désolé(e)".',
      'Es ist "Désolé, je ne peux pas."'
    ],
    tags: ['refusal', 'pouvoir', 'translation']
  },
  {
    id: 'independent-7',
    type: 'translation-fr-de',
    difficulty: 'medium',
    question: 'Übersetze ins Deutsche: La semaine prochaine, on va voyager.',
    correctAnswer: ['Nächste Woche werden wir reisen.', 'Nächste Woche reisen wir.', 'Nächste Woche werden wir reisen', 'nächste Woche werden wir reisen.'],
    explanation: '"la semaine prochaine" = nächste Woche, "on va voyager" = wir werden reisen.',
    hints: [
      '"la semaine prochaine" = nächste Woche.',
      'Es ist "Nächste Woche werden wir reisen."'
    ],
    tags: ['time', 'futur-proche', 'translation']
  },
  {
    id: 'independent-8',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Ein Freund fragt "Tu veux venir au cinéma?". Wie sagst du höflich ZU?',
    options: ['Avec plaisir!', 'Désolé, je ne peux pas.', 'Je suis occupé.', 'Non merci.'],
    correctAnswer: 'Avec plaisir!',
    explanation: '"Avec plaisir!" (sehr gerne!) ist eine begeisterte Zusage. Die anderen Optionen sind Absagen.',
    hints: [
      'Du willst zusagen, nicht absagen.',
      'Es ist "Avec plaisir!".'
    ],
    tags: ['acceptance', 'invitation', 'context']
  },
  {
    id: 'independent-9',
    type: 'fill-blank',
    difficulty: 'medium',
    question: 'Est-ce que tu ___ m\'aider? (Könntest du mir helfen?) - höfliche Form von pouvoir',
    correctAnswer: ['pourrais'],
    explanation: '"tu pourrais" ist die höfliche Form (Conditionnel) von "tu peux".',
    hints: [
      'Es ist die höfliche Form von "tu peux".',
      'Es ist "pourrais".'
    ],
    tags: ['politeness', 'pouvoir']
  },
  {
    id: 'independent-10',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Satz ist KORREKT konjugiert?',
    options: ['Nous allons manger.', 'Nous allons mangeons.', 'Nous vont manger.', 'Nous allons mangons.'],
    correctAnswer: 'Nous allons manger.',
    explanation: 'Nur "aller" wird konjugiert (allons), das zweite Verb bleibt Infinitiv (manger).',
    hints: [
      'Das zweite Verb darf nicht konjugiert sein.',
      'Es ist "Nous allons manger."'
    ],
    tags: ['futur-proche', 'conjugation']
  }
];

// Assessment: Hard exercises (6 exercises)
const assessment: Exercise[] = [
  {
    id: 'assess-1',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze: Morgen werden wir Paris besuchen.',
    correctAnswer: ['Demain, nous allons visiter Paris.', 'Demain nous allons visiter Paris.', 'Nous allons visiter Paris demain.', 'demain, nous allons visiter paris.'],
    explanation: 'Zeitangabe (demain) + futur proche (nous allons) + Infinitiv (visiter). "demain" kann am Anfang oder Ende stehen.',
    tags: ['futur-proche', 'time', 'translation']
  },
  {
    id: 'assess-2',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Vervollständige den Dialog:\n— Tu es ___ ce week-end? On ___ aller à la plage.\n— Avec ___!',
    correctAnswer: ['libre, va, plaisir', 'libre va plaisir'],
    explanation: '"Tu es libre?" (Hast du Zeit?), "On va aller" (futur proche), "Avec plaisir!" (sehr gerne!).',
    tags: ['invitation', 'futur-proche', 'dialogue']
  },
  {
    id: 'assess-3',
    type: 'translation-de-fr',
    difficulty: 'hard',
    question: 'Übersetze (höflich): Ich möchte ins Restaurant gehen.',
    correctAnswer: ['Je voudrais aller au restaurant.', 'Je voudrais aller au restaurant', 'je voudrais aller au restaurant.'],
    explanation: 'Höfliche Form "je voudrais" + Infinitiv "aller". "au restaurant" = ins Restaurant.',
    tags: ['politeness', 'translation']
  },
  {
    id: 'assess-4',
    type: 'fill-blank',
    difficulty: 'hard',
    question: 'Verneine im futur proche: Il ___ ___ ___ travailler. (Er wird nicht arbeiten.)',
    correctAnswer: ['ne va pas', 'ne, va, pas'],
    explanation: '"ne ... pas" umklammert das konjugierte "aller" (va): Il ne va pas travailler.',
    tags: ['futur-proche', 'negation']
  },
  {
    id: 'assess-5',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Eine Kollegin lädt dich formell zum Essen ein, aber du hast keine Zeit. Was antwortest du am höflichsten?',
    options: [
      'Désolé, je ne peux pas. Je suis occupé. Une autre fois, peut-être?',
      'Non.',
      'Je ne veux pas.',
      'Peut-être.'
    ],
    correctAnswer: 'Désolé, je ne peux pas. Je suis occupé. Une autre fois, peut-être?',
    explanation: 'Höfliche Absage = Entschuldigung (désolé) + Grund (je suis occupé) + Tür offen lassen (une autre fois, peut-être?).',
    tags: ['refusal', 'politeness', 'context']
  },
  {
    id: 'assess-6',
    type: 'translation-fr-de',
    difficulty: 'hard',
    question: 'Übersetze ins Deutsche: Est-ce que vous pourriez répéter, s\'il vous plaît?',
    correctAnswer: ['Könnten Sie wiederholen, bitte?', 'Könnten Sie bitte wiederholen?', 'Könnten Sie das bitte wiederholen?', 'Könnten Sie wiederholen bitte?'],
    explanation: '"vous pourriez" ist die höfliche Form (Konditional) von "vous pouvez" - "könnten Sie".',
    tags: ['politeness', 'pouvoir', 'translation']
  }
];

// ============================================================================
// COMPLETE LESSON OBJECT
// ============================================================================

export const lesson12: Lesson = {
  meta: {
    id: 'lesson-12',
    number: 12,
    title: 'Plans et Projets',
    titleGerman: 'Pläne',
    objectives: [
      'Das futur proche (aller + Infinitiv) bilden und über die Zukunft sprechen',
      'Das Verb "pouvoir" (können) in allen Formen konjugieren',
      'Höfliche Formen wie "je voudrais" und "est-ce que tu pourrais" benutzen',
      'Zeitangaben für die Zukunft verwenden (demain, ce week-end, la semaine prochaine)',
      'Einladungen machen, annehmen und höflich ablehnen',
      'Pläne und Verabredungen auf Französisch formulieren'
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
      'lesson-10',
      'lesson-11'
    ],
    tags: ['futur-proche', 'pouvoir', 'invitations', 'politeness', 'time', 'plans']
  },

  introduction: {
    objectives: [
      'Verstehen, wie man mit "aller" + Infinitiv über die Zukunft spricht',
      'Das Verb "pouvoir" (können) sicher anwenden',
      'Höflich um etwas bitten und etwas vorschlagen können',
      'Eine Einladung aussprechen, annehmen oder ablehnen'
    ],
    motivation: `
Herzlichen Glückwunsch - das ist deine letzte A1-Lektion! Hier bringst du alles zusammen, was du gelernt hast,
und lernst etwas extrem Nützliches: über die Zukunft zu sprechen und Pläne zu machen.

Mit dem futur proche ("je vais manger") kannst du ab sofort sagen, was du vorhast - ohne eine komplizierte
neue Zeitform. Zusammen mit dem Verb "pouvoir" (können) und ein paar höflichen Wendungen kannst du Freunde
einladen, Verabredungen treffen und im Alltag in Frankreich zurechtkommen. Das ist echte, lebendige Sprache!
    `,
    culturalNote: `
**Einladungen in Frankreich**

Franzosen verabreden sich gerne spontan, oft für ein "apéro" (Aperitif) oder ein gemeinsames Essen.
Wenn du eingeladen wirst und absagen musst, ist es wichtig, höflich zu sein: Sage nie nur "non", sondern
beginne mit "désolé(e)" (tut mir leid), nenne einen kurzen Grund und schlage eventuell einen anderen
Termin vor ("une autre fois, peut-être?").

**"On" statt "nous"**

Im gesprochenen Französisch hörst du fast immer "on" statt "nous": "On va au cinéma?" statt
"Nous allons au cinéma?". "On" wird wie die 3. Person Singular konjugiert (on va, on peut) und bedeutet
hier "wir". Das klingt natürlicher und lockerer - merk es dir gut für den Alltag!
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
      'Du kannst das futur proche bilden (aller + Infinitiv) und über deine Pläne sprechen',
      'Du kannst das Verb "pouvoir" (können) in allen Formen konjugieren',
      'Du beherrschst höfliche Wendungen wie "je voudrais" und "est-ce que tu pourrais"',
      'Du kennst Zeitangaben für die Zukunft (demain, ce week-end, la semaine prochaine)',
      'Du kannst jemanden einladen und eine Einladung annehmen (avec plaisir, d\'accord, volontiers)',
      'Du kannst höflich ablehnen (désolé, je ne peux pas, une autre fois) und einen Grund nennen',
      'Glückwunsch - du hast den gesamten A1-Kurs abgeschlossen! Du hast jetzt das Fundament, um dich auf Französisch vorzustellen, im Alltag zurechtzukommen und über Gegenwart und Zukunft zu sprechen. Félicitations et bonne continuation!'
    ]
  }
};
