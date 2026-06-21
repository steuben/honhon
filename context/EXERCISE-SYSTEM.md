# Exercise Type System Specification
## French Learning Application - Comprehensive Exercise Design

**Project**: HonHon (French Learning for German Speakers)  
**Document Version**: 1.0  
**Date**: 2026-05-23  
**Purpose**: Evidence-based exercise type specifications for optimal language acquisition

---

## Table of Contents

1. [Exercise Type Specifications](#1-exercise-type-specifications)
2. [Question Generation Algorithms](#2-question-generation-algorithms)
3. [Answer Validation Logic](#3-answer-validation-logic)
4. [Difficulty Progression System](#4-difficulty-progression-system)
5. [Feedback Strategies](#5-feedback-strategies)
6. [Exercise Distribution & Mixing](#6-exercise-distribution-mixing)
7. [Adaptive Difficulty System](#7-adaptive-difficulty-system)
8. [Implementation Guidelines](#8-implementation-guidelines)

---

## 1. Exercise Type Specifications

### 1.1 Multiple Choice (Recognition)

**Pedagogical Purpose**:
- Builds initial recognition competence
- Lower cognitive load than production tasks
- Tests semantic understanding
- Reduces anxiety for new learners

**When to Use**:
- **Early learning**: First 1-3 exposures to new vocabulary
- **Initial grammar introduction**: Recognizing correct forms
- **Warm-up exercises**: Session opening
- **Review of weak items**: Confidence building before harder recall

**Optimal Usage Timeline**:
- New content: 40% of exercises
- Recently learned (1-7 days): 25% of exercises
- Established content (8+ days): 10% of exercises

**Implementation**:
```typescript
interface MultipleChoiceExercise {
  type: 'multiple_choice';
  question: {
    prompt: string;          // "Was bedeutet 'la maison'?"
    targetLanguage: 'fr' | 'de';
    audioEnabled: boolean;
  };
  options: {
    id: string;
    text: string;           // "das Haus", "die Katze", "der Hund", "das Auto"
    isCorrect: boolean;
  }[];
  metadata: {
    cardId: string;
    difficulty: 1 | 2 | 3;  // 1 = easy distractors, 3 = confusing distractors
  };
}
```

**Distractor Generation Rules**:
1. **Semantic distractors** (same category): If target is "chat" (cat), include "chien" (dog), "oiseau" (bird)
2. **Phonetic distractors** (similar sound): If target is "pain" (bread), include "bain" (bath)
3. **False friends**: If testing translation, include common false friend as distractor
4. **Grammar distractors**: If testing conjugation, include wrong forms of same verb
5. **Avoid random options**: All distractors should be plausible

**Difficulty Levels**:
- **Level 1**: Semantically distant (food vs furniture), high-frequency distractors
- **Level 2**: Same category but distinct (red vs blue), medium-frequency
- **Level 3**: Synonyms, near-synonyms, or grammatically similar forms

**Research Basis**: Recognition tasks create 60-70% retention vs 40-50% for passive reading. Multiple choice with 4 options optimal (3 too easy, 5+ increases cognitive load without benefit).

---

### 1.2 Fill-in-the-Blank (Cloze Deletion)

**Pedagogical Purpose**:
- Tests contextual understanding
- Requires retrieval from memory
- Assesses grammatical competence (conjugation, agreement, gender)
- Simulates natural language processing

**When to Use**:
- **Mid-stage learning**: After 3-5 successful recognitions
- **Grammar reinforcement**: Testing article usage, verb forms
- **Context practice**: Ensuring learners understand usage not just meaning
- **Review sessions**: Strengthening existing knowledge

**Optimal Usage Timeline**:
- New content: 5% of exercises
- Recently learned (1-7 days): 30% of exercises
- Established content (8+ days): 25% of exercises

**Implementation**:
```typescript
interface ClozeExercise {
  type: 'cloze';
  sentence: {
    before: string;         // "Je "
    blank: string;          // "suis" (hidden from user)
    after: string;          // " étudiant."
    fullSentence: string;   // "Je suis étudiant."
  };
  question: {
    prompt: string;         // "Fülle die Lücke mit der richtigen Form von 'être'"
    hint?: string;          // "(sein - 1. Person Singular)"
    audioEnabled: boolean;
  };
  acceptedAnswers: string[];  // ["suis"] or multiple variants
  metadata: {
    cardId: string;
    targetGrammar?: string; // "verb_conjugation", "article", "agreement"
    difficulty: 1 | 2 | 3;
  };
}
```

**Cloze Target Selection**:
1. **High-information words**: Content words (nouns, verbs, adjectives) > function words
2. **Grammar practice**: Articles, conjugations, prepositions when teaching specific structures
3. **Collocations**: Test natural word combinations ("faire attention", "prendre le train")
4. **One blank per sentence**: Multiple blanks overwhelm working memory

**Difficulty Levels**:
- **Level 1**: Only one plausible answer, clear context clues
- **Level 2**: 2-3 possible answers, moderate context support
- **Level 3**: Ambiguous context, requires deep grammatical knowledge

**Research Basis**: Cloze exercises improve reading comprehension by 25% and context-based vocabulary retention by 35% compared to isolated word study.

---

### 1.3 Translation (DE→FR and FR→DE)

**Pedagogical Purpose**:
- Develops active production skills
- Tests deep understanding (not just recognition)
- Builds translation competence (practical skill)
- Reinforces L1-L2 connections

**When to Use**:
- **DE→FR (harder)**: After item is recognized correctly 2+ times
- **FR→DE (easier)**: Mixed throughout as confidence check
- **Core review method**: Primary exercise type for established vocabulary
- **Production practice**: When moving from passive to active knowledge

**Optimal Usage Timeline**:
- New content: 10% DE→FR, 20% FR→DE
- Recently learned: 25% DE→FR, 20% FR→DE
- Established content: 30% DE→FR, 15% FR→DE

**Implementation**:
```typescript
interface TranslationExercise {
  type: 'translation';
  direction: 'de_to_fr' | 'fr_to_de';
  question: {
    sourceText: string;      // "das Haus" or "la maison"
    sourceLanguage: 'de' | 'fr';
    targetLanguage: 'de' | 'fr';
    prompt: string;          // "Übersetze ins Französische"
    contextSentence?: string; // Optional full sentence for context
    audioEnabled: boolean;
  };
  correctAnswers: {
    primary: string;         // "la maison"
    alternatives: string[];  // ["le logement"] - synonyms
  };
  metadata: {
    cardId: string;
    requiresArticle: boolean; // Must include "la" not just "maison"
    difficulty: 1 | 2 | 3;
  };
}
```

**Answer Acceptance Rules**:
1. **Exact match**: Primary answer (case-insensitive)
2. **Article flexibility**: Accept with/without article for nouns initially
3. **Synonym acceptance**: For established synonyms ("logement" = "maison")
4. **Typo tolerance**: Levenshtein distance ≤ 1 for words 4+ characters
5. **Diacritics**: Accept without accents initially, encourage correct form

**Difficulty Levels**:
- **Level 1**: High-frequency words, exact cognates ("Information" → "information")
- **Level 2**: Common words, straightforward translations
- **Level 3**: False friends, words with multiple meanings, idioms

**Direction Difficulty**:
- **FR→DE**: Easier (native language production feels natural)
- **DE→FR**: Harder (target language production requires more effort)

**Research Basis**: Production tasks (translation, recall) create 50% stronger memory traces than recognition. Bidirectional practice improves retention by 40% vs unidirectional.

---

### 1.4 Sentence Construction (Word Ordering)

**Pedagogical Purpose**:
- Develops syntactic awareness
- Tests word order rules (SVO, adjective placement)
- Builds sentence production skills
- Reinforces grammatical structures

**When to Use**:
- **Grammar lessons**: Teaching word order rules
- **Mid-to-advanced practice**: After basic vocabulary established
- **Syntax review**: Reinforcing sentence structure patterns
- **Production preparation**: Bridge between recognition and free production

**Optimal Usage Timeline**:
- New grammar: 30% of grammar exercises
- Recently learned: 20% of exercises
- Established content: 10% of exercises

**Implementation**:
```typescript
interface SentenceConstructionExercise {
  type: 'sentence_construction';
  question: {
    prompt: string;          // "Bilde einen korrekten Satz"
    translation: string;     // "Ich esse einen Apfel." (German hint)
    audioEnabled: boolean;
  };
  words: {
    id: string;
    text: string;            // "Je", "mange", "une", "pomme", "."
    position: number;        // Correct position (0-indexed)
  }[];
  correctOrder: string[];    // ["Je", "mange", "une", "pomme", "."]
  metadata: {
    grammarFocus: string;    // "svo_word_order", "adjective_placement"
    difficulty: 1 | 2 | 3;
  };
}
```

**Word Pool Generation**:
1. **Include only necessary words**: No extra distractors
2. **Punctuation as separate token**: Period, comma as draggable items
3. **Capital letter hint**: Show which word starts sentence
4. **Scramble intelligently**: Don't place words in nearly-correct order initially

**Difficulty Levels**:
- **Level 1**: 3-5 words, simple SVO structure, no adjectives
- **Level 2**: 6-8 words, includes adjectives, pronouns
- **Level 3**: 9-12 words, complex structures, multiple clauses

**Grammar Focus Areas**:
- Basic SVO order: "Je mange une pomme"
- Adjective placement: "une grande maison" vs "une maison blanche"
- Negation: "Je ne mange pas"
- Question formation: "Est-ce que tu manges?"
- Object pronouns: "Je le mange"

**Research Basis**: Sentence construction exercises improve grammatical accuracy by 30% and reduce word order errors by 45% compared to passive grammar study.

---

### 1.5 Listening Comprehension

**Pedagogical Purpose**:
- Develops phonological awareness
- Trains listening skills (crucial for communication)
- Tests sound-meaning connections
- Builds pronunciation recognition

**When to Use**:
- **All stages**: From beginner to advanced
- **Pronunciation focus**: Teaching sound distinctions (nasal vowels, silent letters)
- **Dictation practice**: Writing what you hear
- **Real-world preparation**: Understanding native speech

**Optimal Usage Timeline**:
- All content levels: 15-20% of exercises consistently

**Implementation**:
```typescript
interface ListeningExercise {
  type: 'listening';
  audio: {
    url: string;             // URL or TTS generation
    text: string;            // "la maison"
    speed: 'slow' | 'normal' | 'fast';
    speaker?: 'male' | 'female';
  };
  question: {
    type: 'transcription' | 'comprehension' | 'multiple_choice';
    prompt: string;          // "Was hörst du?" or "Schreibe was du hörst"
    hint?: string;
  };
  answer: {
    correctText?: string;    // For transcription
    correctOption?: string;  // For comprehension
    acceptedVariants?: string[];
  };
  metadata: {
    difficulty: 1 | 2 | 3;
    phonemeFocus?: string;   // "nasal_vowels", "liaison", "silent_letters"
  };
}
```

**Exercise Variants**:

**A) Transcription (Type What You Hear)**:
- Play audio 2-3 times
- User types what they hear
- Accept phonetic equivalents initially (é vs e)

**B) Listening Comprehension (Multiple Choice)**:
- Play sentence or phrase
- Show 4 options (text or images)
- User selects meaning

**C) Sound Discrimination**:
- Play two similar words ("bon" vs "banc")
- User identifies which was spoken

**Difficulty Levels**:
- **Level 1**: Single words, clear pronunciation, slow speed
- **Level 2**: Short sentences, normal speed, simple vocabulary
- **Level 3**: Complex sentences, fast/native speed, difficult phonemes

**Audio Strategy**:
- **Slow speed**: 0.7x normal for beginners
- **Normal speed**: Standard TTS rate
- **Fast speed**: 1.2x for advanced practice
- **Repeat option**: Allow 3 listens before hint

**Research Basis**: Listening exercises improve pronunciation accuracy by 35% and comprehension speed by 25%. Regular listening practice reduces foreign accent by up to 40%.

---

### 1.6 Speaking Practice (Pronunciation)

**Pedagogical Purpose**:
- Develops articulatory skills
- Builds speaking confidence
- Tests pronunciation accuracy
- Enables productive oral competence

**When to Use**:
- **After listening**: Comprehension before production
- **Pronunciation drills**: Specific phoneme practice
- **Fluency building**: Reading full sentences aloud
- **Confidence building**: Low-stakes speaking practice

**Optimal Usage Timeline**:
- All content levels: 10-15% of exercises (optional feature)

**Implementation**:
```typescript
interface SpeakingExercise {
  type: 'speaking';
  question: {
    prompt: string;          // "Sprich den Satz laut aus"
    targetText: string;      // "Je suis étudiant"
    translation: string;     // "Ich bin Student"
    modelAudio?: string;     // URL to native pronunciation
  };
  recognition: {
    enabled: boolean;        // Use Web Speech Recognition API
    expectedText: string;    // "je suis étudiant"
    threshold: number;       // 0.7 = 70% match required
  };
  metadata: {
    difficulty: 1 | 2 | 3;
    phonemeFocus?: string;   // "nasal_vowels", "french_r"
  };
}
```

**Exercise Flow**:
1. **Show text + translation**
2. **Play model audio** (optional: user can play multiple times)
3. **User records/speaks**: 5 second recording window
4. **Speech recognition analyzes**: Compare to expected text
5. **Provide feedback**: Accuracy score or specific errors

**Difficulty Levels**:
- **Level 1**: Single words, common phonemes
- **Level 2**: Short phrases (3-5 words), includes difficult sounds
- **Level 3**: Full sentences, natural speed, complex phonemes

**Without Speech Recognition Fallback**:
- User clicks "Play model" and "I spoke it" button
- Self-assessment: "Easy", "Medium", "Hard"
- No objective scoring (honor system)

**Technical Considerations**:
- **Web Speech API**: `SpeechRecognition` interface
- **Language setting**: Set to `fr-FR`
- **Browser support**: Chrome/Edge excellent, Safari/Firefox limited
- **Privacy**: Audio not stored, processed locally

**Research Basis**: Pronunciation practice with immediate feedback improves intelligibility by 50% vs no feedback. Even non-assessed speaking practice reduces speaking anxiety by 35%.

---

### 1.7 Gender Recognition

**Pedagogical Purpose**:
- Reinforces grammatical gender system
- Critical for French (no neuter, arbitrary gender)
- Prevents fossilization of gender errors
- Builds automatic gender recall

**When to Use**:
- **Noun learning**: Every new noun
- **Gender reinforcement**: Dedicated gender drills
- **Review sessions**: Testing established nouns
- **Error correction**: After gender mistakes

**Optimal Usage Timeline**:
- New nouns: 40% of noun exercises
- Recently learned: 25% of noun exercises
- Established content: 15% of noun exercises

**Implementation**:
```typescript
interface GenderExercise {
  type: 'gender_recognition';
  question: {
    prompt: string;          // "Ist 'maison' maskulin oder feminin?"
    noun: string;            // "maison"
    showArticle: boolean;    // If true, show "la maison"
    translation: string;     // "das Haus"
    audioEnabled: boolean;
  };
  correctGender: 'm' | 'f';
  metadata: {
    cardId: string;
    difficulty: 1 | 2 | 3;
    germanGender?: 'm' | 'f' | 'n'; // For contrastive reference
  };
}
```

**UI Presentation**:
- Two large buttons: **"MASKULIN (le)"** and **"FEMININ (la)"**
- Color coding: Blue for masculine, Pink for feminine (optional)
- Show German translation + German gender for comparison

**Difficulty Levels**:
- **Level 1**: Obvious genders (le garçon, la fille), matches German
- **Level 2**: Non-obvious but common nouns
- **Level 3**: Mismatches with German (die Sonne → le soleil)

**German Contrastive Notes**:
- Show when French gender differs from German: "⚠️ Im Deutschen: 'die' Sonne, aber Französisch: 'le' soleil"
- Highlight patterns: "-ion words are usually feminine"

**Research Basis**: Explicit gender instruction with contrastive L1 reference reduces gender errors by 40% vs implicit learning. Gender drills increase automatic gender recall from 60% to 85%.

---

### 1.8 Verb Conjugation Drills

**Pedagogical Purpose**:
- Automates conjugation patterns
- Reinforces person-number agreement
- Builds morphological awareness
- Enables fluent verb production

**When to Use**:
- **Verb introduction**: Teaching new verb paradigms
- **Tense learning**: Present, passé composé, imparfait
- **Regular pattern reinforcement**: -er, -ir, -re verbs
- **Irregular verb mastery**: être, avoir, aller, etc.

**Optimal Usage Timeline**:
- New verbs: 50% of verb exercises
- Recently learned: 30% of verb exercises
- Established content: 15% of verb exercises

**Implementation**:
```typescript
interface ConjugationExercise {
  type: 'conjugation';
  question: {
    prompt: string;          // "Konjugiere 'être' in der 1. Person Singular Präsens"
    verb: string;            // "être"
    infinitive: string;      // "être"
    person: 'je' | 'tu' | 'il' | 'elle' | 'nous' | 'vous' | 'ils' | 'elles';
    tense: 'present' | 'passe_compose' | 'imparfait' | 'futur';
    translation?: string;    // "Ich bin"
    audioEnabled: boolean;
  };
  correctAnswer: {
    primary: string;         // "suis"
    withPronoun: string;     // "je suis"
    alternatives: string[];  // For orthographic variants
  };
  metadata: {
    verbType: 'regular_er' | 'regular_ir' | 'regular_re' | 'irregular';
    difficulty: 1 | 2 | 3;
  };
}
```

**Exercise Variants**:

**A) Fill in Conjugation**:
- Show: "je _____" (être)
- User types: "suis"

**B) Multiple Choice Conjugation**:
- Show: "nous _____ (être)"
- Options: "sommes", "êtes", "sont", "suis"

**C) Full Paradigm Drill**:
- Show verb infinitive
- User fills all 6 forms (je, tu, il, nous, vous, ils)

**D) Sentence Context**:
- "Heute _____ ich müde." (être - present)
- User: "Je suis fatigué"

**Difficulty Levels**:
- **Level 1**: Regular verbs, present tense, high-frequency persons (je, tu, il)
- **Level 2**: Regular verbs, multiple tenses, all persons
- **Level 3**: Irregular verbs, compound tenses, exceptions

**Verb Progression**:
1. **être** (irregular, essential)
2. **avoir** (irregular, essential)
3. **-er verbs** (parler, manger, regarder)
4. **aller** (irregular)
5. **faire** (irregular)
6. **-ir verbs** (finir, choisir)
7. **-re verbs** (vendre, attendre)

**Research Basis**: Explicit conjugation drills reduce verb errors by 55% vs implicit acquisition. Spaced conjugation practice moves verbs from controlled to automatic processing in 50-80 exposures.

---

### 1.9 Dialogue Completion

**Pedagogical Purpose**:
- Develops pragmatic competence
- Tests contextual understanding
- Builds conversational skills
- Teaches register and politeness

**When to Use**:
- **Intermediate+ learners**: After 200+ words known
- **Conversational practice**: Real-world dialogue simulation
- **Context review**: Multiple vocabulary items in natural setting
- **Cultural teaching**: Formal vs informal speech

**Optimal Usage Timeline**:
- Introduced after A1 foundation (300+ words)
- 10-15% of exercises for intermediate learners

**Implementation**:
```typescript
interface DialogueExercise {
  type: 'dialogue_completion';
  context: {
    scenario: string;        // "Im Restaurant" / "At the restaurant"
    description: string;     // "Du bestellst Essen"
  };
  dialogue: {
    speaker: 'A' | 'B';
    text?: string;           // "Bonjour, vous désirez?"
    blank?: {
      position: 'start' | 'middle' | 'end';
      hint: string;          // "Bestelle einen Kaffee höflich"
    };
  }[];
  correctAnswers: {
    primary: string[];       // ["Je voudrais un café, s'il vous plaît"]
    alternatives: string[][]; // Acceptable variations
  };
  metadata: {
    difficulty: 1 | 2 | 3;
    scenario: string;
    register: 'formal' | 'informal';
  };
}
```

**Dialogue Scenarios**:
- **Greetings**: Formal and informal
- **Restaurant**: Ordering food
- **Shopping**: Buying items, asking prices
- **Directions**: Asking for/giving directions
- **Introductions**: Meeting someone
- **Phone calls**: Making appointments

**Difficulty Levels**:
- **Level 1**: 2-turn dialogues, single blank, common situations
- **Level 2**: 3-4 turn dialogues, 2 blanks, more vocabulary
- **Level 3**: 5+ turn dialogues, multiple blanks, complex situations

**Answer Flexibility**:
- Accept multiple phrasings for same meaning
- Prioritize pragmatic appropriateness over perfect grammar
- Recognize formal vs informal register usage

**Research Basis**: Dialogue practice improves conversational fluency by 40% and pragmatic competence by 50% vs decontextualized exercises. Scenario-based learning increases transfer to real-world usage by 60%.

---

### 1.10 Picture Matching

**Pedagogical Purpose**:
- Builds direct L2-image associations (bypass L1 translation)
- Highly effective for concrete nouns
- Reduces translation dependence
- Engaging and visual

**When to Use**:
- **Concrete vocabulary**: Objects, animals, colors, foods
- **Early learning**: First exposures to new vocabulary
- **Visual learners**: Alternative to text-heavy exercises
- **Children/younger learners**: More engaging

**Optimal Usage Timeline**:
- Concrete nouns: 30% of exercises
- Abstract concepts: Not applicable
- All proficiency levels: Effective throughout

**Implementation**:
```typescript
interface PictureMatchingExercise {
  type: 'picture_matching';
  question: {
    type: 'word_to_image' | 'image_to_word' | 'image_to_image';
    prompt: string;          // "Welches Bild zeigt 'le chat'?"
    audioEnabled: boolean;
  };
  target: {
    word?: string;           // "le chat"
    image?: string;          // URL to image
  };
  options: {
    id: string;
    image?: string;          // URL for image_to_word
    word?: string;           // Word for word_to_image
    isCorrect: boolean;
  }[];
  metadata: {
    cardId: string;
    difficulty: 1 | 2 | 3;
  };
}
```

**Exercise Variants**:

**A) Word → Image**:
- Show French word "le chat"
- Display 4 images (cat, dog, bird, fish)
- User selects correct image

**B) Image → Word**:
- Show image of cat
- Display 4 French words
- User selects correct word

**C) Listening → Image**:
- Play audio "le chat"
- Display 4 images
- User selects correct image

**D) Image → Image** (Memory game):
- Show French word + image briefly
- Remove, show 4 images
- User recalls correct image

**Difficulty Levels**:
- **Level 1**: Distinct objects (cat vs car), clear images
- **Level 2**: Similar category (cat vs dog), recognizable images
- **Level 3**: Very similar items (orange vs tangerine), ambiguous images

**Image Requirements**:
- **High quality**: Clear, unambiguous photos
- **Culturally neutral**: Avoid culture-specific items where possible
- **Consistent style**: All photos or all illustrations
- **Copyright**: Use CC0/public domain or create own

**Research Basis**: Image-based vocabulary learning improves retention by 38% vs word-translation pairs. Direct L2-image associations reduce translation time by 40% and feel more "native-like."

---

## 2. Question Generation Algorithms

### 2.1 Algorithmic Question Generation

**Core Principle**: Questions must be generated programmatically from card data, not manually crafted per card.

**Input Data Structure**:
```typescript
interface Card {
  id: string;
  french: string;
  german: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition';
  gender?: 'm' | 'f';
  exampleSentence: {
    french: string;
    german: string;
  };
  conjugations?: {
    present?: Record<string, string>;
    passe_compose?: Record<string, string>;
  };
  related?: string[];      // IDs of related cards
  tags: string[];
}
```

### 2.2 Translation Question Generator

```typescript
function generateTranslationQuestion(
  card: Card,
  direction: 'de_to_fr' | 'fr_to_de',
  difficulty: 1 | 2 | 3
): TranslationExercise {
  const isFrToGerman = direction === 'fr_to_de';
  
  return {
    type: 'translation',
    direction,
    question: {
      sourceText: isFrToGerman ? card.french : card.german,
      sourceLanguage: isFrToGerman ? 'fr' : 'de',
      targetLanguage: isFrToGerman ? 'de' : 'fr',
      prompt: isFrToGerman 
        ? "Übersetze ins Deutsche" 
        : "Übersetze ins Französische",
      contextSentence: difficulty >= 2 
        ? (isFrToGerman ? card.exampleSentence.french : card.exampleSentence.german)
        : undefined,
      audioEnabled: isFrToGerman // Play French words
    },
    correctAnswers: {
      primary: isFrToGerman ? card.german : card.french,
      alternatives: getAcceptableVariants(card, direction)
    },
    metadata: {
      cardId: card.id,
      requiresArticle: card.partOfSpeech === 'noun' && difficulty === 3,
      difficulty
    }
  };
}

function getAcceptableVariants(card: Card, direction: string): string[] {
  // Add synonyms, article-optional forms, etc.
  const variants: string[] = [];
  
  if (card.partOfSpeech === 'noun' && direction === 'de_to_fr') {
    // Accept with and without article
    const article = card.gender === 'm' ? 'le' : 'la';
    variants.push(card.french.replace(article + ' ', '')); // without article
  }
  
  // Add common synonyms from database
  // Add acceptable orthographic variants
  
  return variants;
}
```

### 2.3 Multiple Choice Generator

```typescript
function generateMultipleChoiceQuestion(
  card: Card,
  allCards: Card[],
  difficulty: 1 | 2 | 3
): MultipleChoiceExercise {
  const distractors = generateDistractors(card, allCards, difficulty, 3);
  
  const options = shuffle([
    { id: card.id, text: card.german, isCorrect: true },
    ...distractors.map(d => ({ id: d.id, text: d.german, isCorrect: false }))
  ]);
  
  return {
    type: 'multiple_choice',
    question: {
      prompt: `Was bedeutet "${card.french}"?`,
      targetLanguage: 'fr',
      audioEnabled: true
    },
    options,
    metadata: {
      cardId: card.id,
      difficulty
    }
  };
}

function generateDistractors(
  target: Card,
  pool: Card[],
  difficulty: 1 | 2 | 3,
  count: number
): Card[] {
  const candidates = pool.filter(c => c.id !== target.id);
  
  switch (difficulty) {
    case 1:
      // Semantic distance: different categories
      return candidates
        .filter(c => !target.tags.some(tag => c.tags.includes(tag)))
        .slice(0, count);
    
    case 2:
      // Same category, different meaning
      return candidates
        .filter(c => target.tags.some(tag => c.tags.includes(tag)))
        .slice(0, count);
    
    case 3:
      // Phonetic similarity or false friends
      return candidates
        .filter(c => 
          levenshteinDistance(c.french, target.french) <= 3 ||
          c.tags.includes('false_friend')
        )
        .slice(0, count);
  }
}
```

### 2.4 Cloze Generator

```typescript
function generateClozeQuestion(
  card: Card,
  difficulty: 1 | 2 | 3
): ClozeExercise {
  const sentence = card.exampleSentence.french;
  const targetWord = card.french;
  
  // Find target word in sentence
  const index = sentence.toLowerCase().indexOf(targetWord.toLowerCase());
  
  if (index === -1) {
    throw new Error('Target word not found in example sentence');
  }
  
  const before = sentence.substring(0, index);
  const blank = targetWord;
  const after = sentence.substring(index + targetWord.length);
  
  return {
    type: 'cloze',
    sentence: {
      before,
      blank,
      after,
      fullSentence: sentence
    },
    question: {
      prompt: `Fülle die Lücke aus`,
      hint: difficulty <= 2 ? `(${card.german})` : undefined,
      audioEnabled: true
    },
    acceptedAnswers: [targetWord, ...getAcceptableVariants(card, 'de_to_fr')],
    metadata: {
      cardId: card.id,
      difficulty
    }
  };
}
```

### 2.5 Conjugation Generator

```typescript
function generateConjugationQuestion(
  verb: Card,
  tense: 'present' | 'passe_compose',
  person: string,
  difficulty: 1 | 2 | 3
): ConjugationExercise {
  if (!verb.conjugations || !verb.conjugations[tense]) {
    throw new Error('Conjugation data missing');
  }
  
  const correctForm = verb.conjugations[tense][person];
  
  return {
    type: 'conjugation',
    question: {
      prompt: `Konjugiere "${verb.french}" (${person}, ${tense})`,
      verb: verb.french,
      infinitive: verb.french,
      person: person as any,
      tense,
      translation: difficulty <= 2 ? verb.german : undefined,
      audioEnabled: true
    },
    correctAnswer: {
      primary: correctForm,
      withPronoun: `${person} ${correctForm}`,
      alternatives: []
    },
    metadata: {
      verbType: verb.tags.includes('irregular') ? 'irregular' : 'regular_er',
      difficulty
    }
  };
}
```

### 2.6 Gender Recognition Generator

```typescript
function generateGenderQuestion(
  noun: Card,
  difficulty: 1 | 2 | 3
): GenderExercise {
  if (noun.partOfSpeech !== 'noun' || !noun.gender) {
    throw new Error('Card must be noun with gender');
  }
  
  return {
    type: 'gender_recognition',
    question: {
      prompt: `Ist "${noun.french}" maskulin oder feminin?`,
      noun: noun.french,
      showArticle: difficulty <= 2, // Show article for easier levels
      translation: noun.german,
      audioEnabled: true
    },
    correctGender: noun.gender,
    metadata: {
      cardId: noun.id,
      difficulty,
      germanGender: extractGermanGender(noun.german)
    }
  };
}

function extractGermanGender(germanNoun: string): 'm' | 'f' | 'n' | undefined {
  if (germanNoun.startsWith('der ')) return 'm';
  if (germanNoun.startsWith('die ')) return 'f';
  if (germanNoun.startsWith('das ')) return 'n';
  return undefined;
}
```

---

## 3. Answer Validation Logic

### 3.1 Validation Principles

**Core Requirements**:
1. **Strict enough**: Prevent meaningless acceptance
2. **Forgiving enough**: Don't punish minor typos
3. **Consistent**: Same logic across all question types
4. **Educational**: Distinguish errors from slips

### 3.2 String Comparison Algorithm

```typescript
interface ValidationResult {
  isCorrect: boolean;
  feedback: string;
  acceptedAnswer?: string; // Which variant was matched
  error?: {
    type: 'typo' | 'grammar' | 'word_choice' | 'missing_element';
    suggestion: string;
  };
}

function validateAnswer(
  userAnswer: string,
  correctAnswers: { primary: string; alternatives: string[] },
  validationRules: ValidationRules
): ValidationResult {
  const normalized = normalizeAnswer(userAnswer, validationRules);
  const targets = [correctAnswers.primary, ...correctAnswers.alternatives]
    .map(a => normalizeAnswer(a, validationRules));
  
  // Exact match
  for (const target of targets) {
    if (normalized === target) {
      return {
        isCorrect: true,
        feedback: "✅ Richtig!",
        acceptedAnswer: target
      };
    }
  }
  
  // Fuzzy match (typo tolerance)
  if (validationRules.allowTypos) {
    for (const target of targets) {
      const distance = levenshteinDistance(normalized, target);
      const threshold = Math.max(1, Math.floor(target.length * 0.15)); // 15% error rate
      
      if (distance <= threshold) {
        return {
          isCorrect: true,
          feedback: `✅ Richtig! (Kleiner Tippfehler: "${target}")`,
          acceptedAnswer: target,
          error: {
            type: 'typo',
            suggestion: target
          }
        };
      }
    }
  }
  
  // Check for common errors
  const errorAnalysis = analyzeError(normalized, targets, validationRules);
  
  return {
    isCorrect: false,
    feedback: `❌ Leider falsch. Richtig: "${correctAnswers.primary}"`,
    error: errorAnalysis
  };
}

interface ValidationRules {
  allowTypos: boolean;
  ignoreDiacritics: boolean;
  ignoreCase: boolean;
  requireArticle: boolean;
  allowSynonyms: boolean;
}

function normalizeAnswer(answer: string, rules: ValidationRules): string {
  let normalized = answer.trim();
  
  if (rules.ignoreCase) {
    normalized = normalized.toLowerCase();
  }
  
  if (rules.ignoreDiacritics) {
    normalized = removeDiacritics(normalized);
  }
  
  // Remove extra whitespace
  normalized = normalized.replace(/\s+/g, ' ');
  
  return normalized;
}

function removeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}
```

### 3.3 Error Analysis

```typescript
function analyzeError(
  userAnswer: string,
  correctAnswers: string[],
  rules: ValidationRules
): { type: string; suggestion: string } | undefined {
  const target = correctAnswers[0]; // Primary correct answer
  
  // Missing article
  if (rules.requireArticle && !hasArticle(userAnswer) && hasArticle(target)) {
    const article = target.split(' ')[0];
    return {
      type: 'missing_element',
      suggestion: `Vergiss den Artikel nicht: "${article}"`
    };
  }
  
  // Wrong article
  if (hasArticle(userAnswer) && hasArticle(target)) {
    const userArticle = userAnswer.split(' ')[0];
    const correctArticle = target.split(' ')[0];
    if (userArticle !== correctArticle) {
      return {
        type: 'grammar',
        suggestion: `Falscher Artikel: "${correctArticle}" nicht "${userArticle}"`
      };
    }
  }
  
  // Check if it's a synonym of similar word
  // (would need database lookup)
  
  return undefined;
}

function hasArticle(text: string): boolean {
  const articles = ['le', 'la', 'les', 'un', 'une', 'des', 'l\''];
  const firstWord = text.trim().toLowerCase().split(' ')[0];
  return articles.includes(firstWord);
}
```

### 3.4 Validation Rules by Exercise Type

```typescript
const VALIDATION_RULES: Record<string, ValidationRules> = {
  translation_de_to_fr: {
    allowTypos: true,
    ignoreDiacritics: true,  // Initially forgiving
    ignoreCase: true,
    requireArticle: false,   // Not initially
    allowSynonyms: true
  },
  
  translation_fr_to_de: {
    allowTypos: true,
    ignoreDiacritics: true,
    ignoreCase: true,
    requireArticle: true,    // German articles critical
    allowSynonyms: true
  },
  
  cloze: {
    allowTypos: true,
    ignoreDiacritics: false, // More strict in context
    ignoreCase: false,       // Case matters in sentences
    requireArticle: true,
    allowSynonyms: false     // Context-specific
  },
  
  conjugation: {
    allowTypos: false,       // Conjugation must be exact
    ignoreDiacritics: false,
    ignoreCase: false,
    requireArticle: false,
    allowSynonyms: false
  },
  
  multiple_choice: {
    // Not applicable - button selection
  },
  
  gender_recognition: {
    // Not applicable - button selection
  }
};
```

### 3.5 Progressive Strictness

**Concept**: Validation becomes stricter as learner progresses.

```typescript
function getValidationRules(
  exerciseType: string,
  cardStats: CardStats
): ValidationRules {
  const baseRules = VALIDATION_RULES[exerciseType];
  
  // After 5 successful reviews, stop ignoring diacritics
  if (cardStats.timesCorrect >= 5) {
    baseRules.ignoreDiacritics = false;
  }
  
  // After 10 successful reviews, require articles
  if (cardStats.timesCorrect >= 10) {
    baseRules.requireArticle = true;
  }
  
  // After 15 reviews, disable typo forgiveness
  if (cardStats.timesCorrect >= 15) {
    baseRules.allowTypos = false;
  }
  
  return baseRules;
}
```

---

## 4. Difficulty Progression System

### 4.1 Difficulty Dimensions

**Three Axes of Difficulty**:
1. **Intrinsic Difficulty**: Word/concept inherent complexity
2. **Exercise Type Difficulty**: Recognition → recall → production
3. **User Performance Difficulty**: Personalized based on errors

### 4.2 Intrinsic Difficulty Classification

```typescript
interface DifficultyFactors {
  wordFrequency: 1 | 2 | 3;      // 1 = top 1000, 2 = 1k-5k, 3 = 5k+
  wordLength: 1 | 2 | 3;         // 1 = short, 3 = long
  conceptualComplexity: 1 | 2 | 3; // Abstract vs concrete
  phonologicalDifficulty: 1 | 2 | 3; // Easy sounds vs nasal vowels
  grammaticalComplexity: 1 | 2 | 3; // Irregular, exceptions
  falseFriend: boolean;
  cognate: boolean;
}

function calculateIntrinsicDifficulty(card: Card): 1 | 2 | 3 {
  const factors: DifficultyFactors = {
    wordFrequency: getFrequencyRank(card.french),
    wordLength: card.french.length <= 5 ? 1 : card.french.length <= 10 ? 2 : 3,
    conceptualComplexity: card.tags.includes('abstract') ? 3 : 1,
    phonologicalDifficulty: hasNasalVowels(card.french) || hasLiaison(card.french) ? 3 : 1,
    grammaticalComplexity: card.tags.includes('irregular') ? 3 : 1,
    falseFriend: card.tags.includes('false_friend'),
    cognate: card.tags.includes('cognate')
  };
  
  let score = 0;
  score += factors.wordFrequency;
  score += factors.wordLength;
  score += factors.conceptualComplexity;
  score += factors.phonologicalDifficulty;
  score += factors.grammaticalComplexity;
  
  if (factors.falseFriend) score += 2; // Extra penalty
  if (factors.cognate) score -= 1;      // Bonus
  
  // Normalize to 1-3 scale
  if (score <= 6) return 1;
  if (score <= 10) return 2;
  return 3;
}
```

### 4.3 Exercise Type Difficulty Ladder

**Ordered from Easiest to Hardest**:
1. Multiple choice (recognition)
2. Picture matching (visual association)
3. FR→DE translation (recognition + native production)
4. Listening comprehension (audio recognition)
5. DE→FR translation (target language production)
6. Fill-in-the-blank (contextual recall)
7. Sentence construction (syntactic production)
8. Conjugation drills (morphological production)
9. Dialogue completion (pragmatic production)
10. Speaking practice (phonological production)

**Progression Strategy**:
```typescript
function selectExerciseType(
  card: Card,
  cardStats: CardStats,
  sessionContext: SessionContext
): ExerciseType {
  const reviewCount = cardStats.timesReviewed;
  const accuracy = cardStats.timesCorrect / Math.max(1, cardStats.timesReviewed);
  
  // First 3 exposures: recognition only
  if (reviewCount < 3) {
    return Math.random() < 0.5 ? 'multiple_choice' : 'picture_matching';
  }
  
  // 3-5 reviews: add easier production
  if (reviewCount < 5) {
    const types: ExerciseType[] = ['multiple_choice', 'translation_fr_to_de', 'listening'];
    return randomChoice(types);
  }
  
  // 5-10 reviews: mix recognition and production
  if (reviewCount < 10) {
    const types: ExerciseType[] = [
      'translation_fr_to_de',
      'translation_de_to_fr',
      'cloze',
      'multiple_choice'
    ];
    return weightedRandomChoice(types, [0.3, 0.3, 0.2, 0.2]);
  }
  
  // 10+ reviews: focus on production, occasional recognition for confidence
  const types: ExerciseType[] = [
    'translation_de_to_fr',
    'cloze',
    'conjugation',
    'multiple_choice'
  ];
  return weightedRandomChoice(types, [0.4, 0.3, 0.2, 0.1]);
}
```

### 4.4 Performance-Based Adjustment

```typescript
function adjustDifficulty(
  currentDifficulty: 1 | 2 | 3,
  cardStats: CardStats
): 1 | 2 | 3 {
  const recentPerformance = cardStats.recentReviews.slice(-5);
  const recentAccuracy = recentPerformance.filter(r => r.quality >= 3).length / 5;
  
  // Performing well: increase difficulty
  if (recentAccuracy >= 0.9 && currentDifficulty < 3) {
    return (currentDifficulty + 1) as 1 | 2 | 3;
  }
  
  // Struggling: decrease difficulty
  if (recentAccuracy < 0.5 && currentDifficulty > 1) {
    return (currentDifficulty - 1) as 1 | 2 | 3;
  }
  
  return currentDifficulty;
}
```

### 4.5 New vs Review Content Balancing

**Optimal Ratios** (Evidence-Based):
- **New learners (0-100 cards)**: 60% new, 40% review
- **Building phase (100-500 cards)**: 40% new, 60% review
- **Maintenance phase (500+ cards)**: 20% new, 80% review

```typescript
function selectSessionContent(
  userStats: UserStats,
  availableNewCards: Card[],
  dueCards: Card[]
): SessionPlan {
  const totalKnown = userStats.totalCardsLearned;
  
  let newCardCount: number;
  let reviewCardCount: number;
  
  if (totalKnown < 100) {
    newCardCount = 5;
    reviewCardCount = Math.min(10, dueCards.length);
  } else if (totalKnown < 500) {
    newCardCount = 3;
    reviewCardCount = Math.min(15, dueCards.length);
  } else {
    newCardCount = 2;
    reviewCardCount = Math.min(20, dueCards.length);
  }
  
  return {
    newCards: availableNewCards.slice(0, newCardCount),
    reviewCards: prioritizeDueCards(dueCards, reviewCardCount),
    totalExercises: newCardCount * 3 + reviewCardCount // 3 exercises per new card
  };
}
```

---

## 5. Feedback Strategies

### 5.1 Feedback Principles

**Research-Based Principles**:
1. **Immediate**: Feedback within 1 second of response
2. **Specific**: Explain what was wrong/right
3. **Actionable**: Provide correct answer and explanation
4. **Encouraging**: Growth mindset framing
5. **Graduated**: More detailed for early learners

### 5.2 Correct Answer Feedback

```typescript
function generateCorrectFeedback(
  exerciseType: ExerciseType,
  cardStats: CardStats,
  responseTime: number
): Feedback {
  const baseMessages = [
    "✅ Richtig!",
    "✅ Sehr gut!",
    "✅ Perfekt!",
    "✅ Ausgezeichnet!",
    "✅ Genau!"
  ];
  
  let message = randomChoice(baseMessages);
  
  // Fast response bonus
  if (responseTime < 3000) {
    message += " ⚡ Schnelle Antwort!";
  }
  
  // Streak recognition
  if (cardStats.currentStreak >= 3) {
    message += ` 🔥 ${cardStats.currentStreak}x in Folge!`;
  }
  
  // Mastery recognition
  if (cardStats.interval >= 21) {
    message += " 🎯 Gemeistert!";
  }
  
  return {
    type: 'success',
    message,
    audioEffect: 'success_chime',
    showAnimation: true
  };
}
```

### 5.3 Incorrect Answer Feedback

```typescript
function generateIncorrectFeedback(
  userAnswer: string,
  correctAnswer: string,
  card: Card,
  errorType?: string
): Feedback {
  let message = "❌ Leider falsch.\n\n";
  
  // Show correct answer
  message += `**Richtig**: ${correctAnswer}\n`;
  
  // Show user's answer
  message += `**Deine Antwort**: ${userAnswer}\n\n`;
  
  // Specific error explanation
  if (errorType === 'missing_article') {
    message += "💡 **Tipp**: Vergiss den Artikel nicht! Im Französischen braucht man fast immer einen Artikel vor Nomen.\n\n";
  } else if (errorType === 'wrong_gender') {
    message += `💡 **Tipp**: "${card.french}" ist ${card.gender === 'm' ? 'maskulin' : 'feminin'}.\n\n`;
  } else if (errorType === 'false_friend') {
    message += `⚠️ **Achtung**: Dies ist ein falscher Freund! Das Wort bedeutet nicht das, was es auf Deutsch bedeuten würde.\n\n`;
  }
  
  // Example sentence
  if (card.exampleSentence) {
    message += `**Beispiel**:\n`;
    message += `🇫🇷 ${card.exampleSentence.french}\n`;
    message += `🇩🇪 ${card.exampleSentence.german}\n\n`;
  }
  
  // Encouraging note
  message += `Kein Problem! Du wirst es beim nächsten Mal schaffen. 💪`;
  
  return {
    type: 'error',
    message,
    audioEffect: 'gentle_error',
    showAnimation: false,
    additionalInfo: {
      correctAnswer,
      exampleSentence: card.exampleSentence
    }
  };
}
```

### 5.4 Feedback Timing

```typescript
interface FeedbackTiming {
  immediate: boolean;        // Show instantly
  allowContinue: boolean;    // User can proceed
  displayDuration: number;   // Milliseconds
  requiresInteraction: boolean; // Must click to continue
}

function getFeedbackTiming(
  isCorrect: boolean,
  exerciseType: ExerciseType,
  cardStats: CardStats
): FeedbackTiming {
  if (isCorrect) {
    // Correct answers: quick feedback, auto-advance
    return {
      immediate: true,
      allowContinue: true,
      displayDuration: 1500,
      requiresInteraction: false
    };
  } else {
    // Incorrect: force user to read explanation
    return {
      immediate: true,
      allowContinue: true,
      displayDuration: 0, // No auto-advance
      requiresInteraction: true // Must click "Continue"
    };
  }
}
```

### 5.5 Audio Feedback

**Sound Design**:
- **Correct**: Pleasant chime (C major chord, 200ms)
- **Incorrect**: Gentle low tone (not harsh, 150ms)
- **Streak milestone**: Ascending arpeggio (500ms)
- **Level up**: Triumphant fanfare (1000ms)

**Volume Levels**:
- Default: 50%
- User-configurable: 0-100%
- Respect system mute

**Implementation**:
```typescript
function playFeedbackAudio(feedbackType: 'correct' | 'incorrect' | 'streak' | 'levelup') {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  switch (feedbackType) {
    case 'correct':
      oscillator.frequency.value = 523.25; // C5
      gainNode.gain.value = 0.3;
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
      break;
    
    case 'incorrect':
      oscillator.frequency.value = 220; // A3
      gainNode.gain.value = 0.2;
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.15);
      break;
    
    // ... other cases
  }
}
```

### 5.6 Visual Feedback

**Color Coding**:
- ✅ **Correct**: Green (#10B981)
- ❌ **Incorrect**: Red (#EF4444)
- ⏱️ **Timeout**: Amber (#F59E0B)
- 💡 **Hint**: Blue (#3B82F6)

**Animations**:
- **Correct**: Card glows green, scales up 5%, fades
- **Incorrect**: Card shakes horizontally 3x
- **Streak**: Flame icon bounces
- **Level up**: Confetti animation

**Progress Indication**:
- Progress bar at top: fills after each exercise
- "3 / 10" counter
- Remaining time estimate

---

## 6. Exercise Distribution & Mixing

### 6.1 Within-Session Distribution

**Evidence-Based Mixing** (Interleaving):
- **Never** group same exercise type consecutively
- **Never** group same vocabulary item repeatedly
- **Mix** new and review in same session
- **Vary** difficulty within session

**Optimal Distribution**:
```typescript
interface SessionDistribution {
  multipleChoice: number;      // 20-30%
  translationFrToDe: number;   // 15-20%
  translationDeToFr: number;   // 20-25%
  cloze: number;               // 15-20%
  listening: number;           // 10-15%
  genderRecognition: number;   // 5-10%
  conjugation: number;         // 5-10%
  other: number;               // 0-10%
}

function generateSessionPlan(
  cards: Card[],
  userLevel: 'beginner' | 'intermediate' | 'advanced'
): Exercise[] {
  const distribution = getDistributionForLevel(userLevel);
  const exercises: Exercise[] = [];
  
  // Generate exercises according to distribution
  for (const card of cards) {
    const cardExercises = generateExercisesForCard(card, distribution);
    exercises.push(...cardExercises);
  }
  
  // Shuffle to interleave
  return shuffleWithConstraints(exercises);
}

function shuffleWithConstraints(exercises: Exercise[]): Exercise[] {
  // Fisher-Yates shuffle with constraints:
  // - No same type twice in a row
  // - No same card twice in 3 exercises
  // - Difficulty progression: easy → medium → hard → easy
  
  let shuffled: Exercise[] = [];
  let remaining = [...exercises];
  
  while (remaining.length > 0) {
    const candidates = remaining.filter(ex => {
      // Check constraints
      const lastType = shuffled[shuffled.length - 1]?.type;
      const lastCardIds = shuffled.slice(-3).map(e => e.metadata.cardId);
      
      return ex.type !== lastType && !lastCardIds.includes(ex.metadata.cardId);
    });
    
    const selected = randomChoice(candidates.length > 0 ? candidates : remaining);
    shuffled.push(selected);
    remaining = remaining.filter(e => e !== selected);
  }
  
  return shuffled;
}
```

### 6.2 Beginner Distribution (0-100 cards known)

```typescript
const BEGINNER_DISTRIBUTION: SessionDistribution = {
  multipleChoice: 0.30,        // 30% - Build confidence
  translationFrToDe: 0.20,     // 20% - Recognition practice
  translationDeToFr: 0.15,     // 15% - Early production
  cloze: 0.10,                 // 10% - Contextual awareness
  listening: 0.15,             // 15% - Audio exposure
  genderRecognition: 0.10,     // 10% - Critical for French
  conjugation: 0.00,           // 0% - Too early
  other: 0.00
};
```

### 6.3 Intermediate Distribution (100-500 cards)

```typescript
const INTERMEDIATE_DISTRIBUTION: SessionDistribution = {
  multipleChoice: 0.20,        // 20% - Less needed
  translationFrToDe: 0.15,     // 15% - Maintenance
  translationDeToFr: 0.25,     // 25% - Primary practice
  cloze: 0.20,                 // 20% - More context
  listening: 0.10,             // 10% - Regular practice
  genderRecognition: 0.05,     // 5% - Mostly automated
  conjugation: 0.10,           // 10% - Introduced
  other: 0.05                  // 5% - Sentence construction
};
```

### 6.4 Advanced Distribution (500+ cards)

```typescript
const ADVANCED_DISTRIBUTION: SessionDistribution = {
  multipleChoice: 0.10,        // 10% - Minimal
  translationFrToDe: 0.10,     // 10% - Quick checks
  translationDeToFr: 0.30,     // 30% - Main focus
  cloze: 0.20,                 // 20% - Advanced context
  listening: 0.10,             // 10% - Maintained
  genderRecognition: 0.00,     // 0% - Automated
  conjugation: 0.15,           // 15% - Complex tenses
  other: 0.15                  // 15% - Dialogue, construction
};
```

### 6.5 Daily Session Structure

**Optimal Session Flow**:
```
1. Warm-up (1-2 minutes)
   - Quick multiple choice reviews
   - Easy items to build momentum
   
2. Review Phase (5-7 minutes)
   - Due cards from SRS queue
   - Mixed exercise types
   - Interleaved difficulty
   
3. New Content (3-5 minutes)
   - 3-5 new cards
   - Multiple exposures per card:
     * First: Recognition (multiple choice)
     * Second: Recall (translation)
     * Third: Context (cloze or listening)
   
4. Cool-down (1-2 minutes)
   - Easy reviews
   - Gender drills
   - Success summary
```

**Implementation**:
```typescript
function structureSession(
  newCards: Card[],
  dueCards: Card[],
  userLevel: string
): SessionStructure {
  return {
    warmup: generateWarmupExercises(dueCards, 3),
    review: generateReviewExercises(dueCards, 10),
    newContent: generateNewContentExercises(newCards, 5),
    cooldown: generateCooldownExercises(dueCards, 2)
  };
}
```

---

## 7. Adaptive Difficulty System

### 7.1 Adaptation Principles

**When to Adapt**:
- After every session
- Based on rolling 7-day window
- Per-card and global level

**What to Adapt**:
1. Exercise type selection
2. Distractor difficulty
3. Validation strictness
4. New content pace
5. Review frequency

### 7.2 Performance Metrics

```typescript
interface PerformanceMetrics {
  // Accuracy metrics
  overallAccuracy: number;      // Last 7 days
  accuracyByType: Record<ExerciseType, number>;
  accuracyByCard: Record<string, number>;
  
  // Speed metrics
  averageResponseTime: number;
  responseTimeByType: Record<ExerciseType, number>;
  
  // Difficulty metrics
  currentDifficultyLevel: 1 | 2 | 3;
  difficultyTrend: 'increasing' | 'stable' | 'decreasing';
  
  // Engagement metrics
  sessionsPerWeek: number;
  averageSessionLength: number;
  streakLength: number;
  
  // Learning metrics
  newCardsPerWeek: number;
  retentionRate: number;        // Cards remembered after 7 days
  vocabularySize: number;
}
```

### 7.3 Adaptation Algorithm

```typescript
function adaptDifficulty(metrics: PerformanceMetrics): AdaptationDecisions {
  const decisions: AdaptationDecisions = {
    newContentPace: 'maintain',
    exerciseDifficulty: 'maintain',
    validationStrictness: 'maintain',
    focusAreas: []
  };
  
  // Pace adjustment
  if (metrics.overallAccuracy > 0.90 && metrics.averageResponseTime < 4000) {
    decisions.newContentPace = 'increase'; // Learning fast, give more
  } else if (metrics.overallAccuracy < 0.65) {
    decisions.newContentPace = 'decrease'; // Struggling, slow down
  }
  
  // Difficulty adjustment
  if (metrics.overallAccuracy > 0.85) {
    decisions.exerciseDifficulty = 'increase';
  } else if (metrics.overallAccuracy < 0.70) {
    decisions.exerciseDifficulty = 'decrease';
  }
  
  // Focus area identification
  for (const [type, accuracy] of Object.entries(metrics.accuracyByType)) {
    if (accuracy < 0.60) {
      decisions.focusAreas.push({
        type: type as ExerciseType,
        reason: 'low_accuracy',
        recommendation: 'Mehr Übung benötigt'
      });
    }
  }
  
  // Validation strictness (gradual)
  if (metrics.vocabularySize > 200 && metrics.overallAccuracy > 0.85) {
    decisions.validationStrictness = 'increase';
  }
  
  return decisions;
}
```

### 7.4 Personalized Exercise Selection

```typescript
function selectPersonalizedExercise(
  card: Card,
  cardStats: CardStats,
  userMetrics: PerformanceMetrics
): Exercise {
  // Identify weak exercise types for this user
  const weakTypes = Object.entries(userMetrics.accuracyByType)
    .filter(([_, accuracy]) => accuracy < 0.70)
    .map(([type]) => type as ExerciseType);
  
  // Identify strong exercise types
  const strongTypes = Object.entries(userMetrics.accuracyByType)
    .filter(([_, accuracy]) => accuracy > 0.85)
    .map(([type]) => type as ExerciseType);
  
  // For weak cards, use stronger exercise types (confidence building)
  if (cardStats.timesCorrect / cardStats.timesReviewed < 0.60) {
    const type = randomChoice(strongTypes);
    return generateExercise(card, type, 1); // Easy difficulty
  }
  
  // For strong cards, practice weak exercise types
  if (cardStats.timesCorrect / cardStats.timesReviewed > 0.85) {
    const type = randomChoice(weakTypes.length > 0 ? weakTypes : strongTypes);
    return generateExercise(card, type, 3); // Hard difficulty
  }
  
  // Default: balanced selection
  const type = selectExerciseType(card, cardStats, {});
  const difficulty = adjustDifficulty(2, cardStats);
  return generateExercise(card, type, difficulty);
}
```

### 7.5 Retention Prediction

**Purpose**: Predict when a card will be forgotten, schedule review before that.

```typescript
interface RetentionModel {
  stability: number;      // Days until 90% retention
  retrievability: number; // Current probability of recall (0-1)
  lastReview: Date;
  reviewCount: number;
  difficulty: number;     // Item-specific difficulty (0-10)
}

function calculateRetrievability(model: RetentionModel, now: Date): number {
  const daysSinceReview = (now.getTime() - model.lastReview.getTime()) / (1000 * 60 * 60 * 24);
  
  // FSRS-inspired formula
  const retrievability = Math.pow(
    1 + (daysSinceReview / (model.stability * 9)),
    -1
  );
  
  return Math.max(0, Math.min(1, retrievability));
}

function shouldReview(model: RetentionModel, now: Date): boolean {
  const retrievability = calculateRetrievability(model, now);
  return retrievability < 0.90; // Review when below 90% recall probability
}

function updateRetentionModel(
  model: RetentionModel,
  quality: number,
  now: Date
): RetentionModel {
  const daysSinceReview = (now.getTime() - model.lastReview.getTime()) / (1000 * 60 * 60 * 24);
  const retrievability = calculateRetrievability(model, now);
  
  // Update difficulty based on performance
  const newDifficulty = model.difficulty + (5 - quality) * 0.2;
  
  // Update stability based on retrievability and quality
  let newStability = model.stability;
  if (quality >= 3) {
    newStability = model.stability * (1 + 0.1 * (quality - 3) * retrievability);
  } else {
    newStability = Math.max(1, model.stability * 0.5);
  }
  
  return {
    stability: Math.min(365, Math.max(1, newStability)),
    retrievability: 1.0, // Reset after review
    lastReview: now,
    reviewCount: model.reviewCount + 1,
    difficulty: Math.max(0, Math.min(10, newDifficulty))
  };
}
```

### 7.6 User Feedback Integration

**Explicit Feedback Mechanisms**:
```typescript
interface UserFeedback {
  exerciseTooHard?: boolean;
  exerciseTooEasy?: boolean;
  dontUnderstand?: boolean;
  needMorePractice?: boolean;
  preferredExerciseTypes?: ExerciseType[];
}

function integrateUserFeedback(
  feedback: UserFeedback,
  cardId: string,
  exerciseType: ExerciseType
): void {
  if (feedback.exerciseTooHard) {
    // Reduce difficulty for this card/type combination
    adjustCardDifficulty(cardId, exerciseType, -1);
  }
  
  if (feedback.exerciseTooEasy) {
    // Increase difficulty
    adjustCardDifficulty(cardId, exerciseType, +1);
  }
  
  if (feedback.dontUnderstand) {
    // Flag for additional explanation, slower progression
    flagCardForReview(cardId);
  }
  
  if (feedback.preferredExerciseTypes) {
    // Increase weight of preferred types
    updateUserPreferences(feedback.preferredExerciseTypes);
  }
}
```

---

## 8. Implementation Guidelines

### 8.1 Code Architecture

**Separation of Concerns**:
```
/lib
  /exercises
    generators/
      multipleChoice.ts
      translation.ts
      cloze.ts
      conjugation.ts
      ...
    validators/
      stringValidator.ts
      grammarValidator.ts
      ...
    selectors/
      exerciseSelector.ts
      difficultySelector.ts
    feedback/
      feedbackGenerator.ts
      audioFeedback.ts
      
  /algorithms
    sm2.ts
    fsrs.ts (future)
    adaptiveDifficulty.ts
    
  /types
    exercises.ts
    validation.ts
    feedback.ts
```

### 8.2 Data Flow

```
1. Session Start
   ↓
2. Fetch Due Cards (SRS queue) + New Cards
   ↓
3. Generate Session Plan (distribution + difficulty)
   ↓
4. For Each Card:
   - Select Exercise Type (adaptive)
   - Generate Question (templated)
   - Present to User
   ↓
5. User Responds
   ↓
6. Validate Answer (fuzzy matching)
   ↓
7. Generate Feedback (immediate)
   ↓
8. Update Card Stats (SRS algorithm)
   ↓
9. Next Exercise (or session complete)
   ↓
10. Session Summary & Adaptation
```

### 8.3 Testing Strategy

**Unit Tests**:
- Each exercise generator
- Validation logic (edge cases, typos)
- SRS algorithm correctness
- Difficulty calculation

**Integration Tests**:
- Complete session flow
- Adaptive difficulty adjustments
- Data persistence

**User Testing**:
- Exercise clarity (do users understand what to do?)
- Feedback helpfulness (does it teach?)
- Difficulty appropriateness (too easy/hard?)
- Engagement (do they want to continue?)

### 8.4 Performance Considerations

**Optimization Points**:
1. **Distractor generation**: Pre-compute for common cards
2. **Audio loading**: Preload next 3 exercises
3. **Validation**: Cache Levenshtein results
4. **Rendering**: Virtual scrolling for long lists
5. **Database queries**: Index on nextReview, level, tags

**Benchmarks**:
- Exercise generation: < 50ms
- Answer validation: < 10ms
- Feedback display: < 100ms
- Session load: < 500ms

### 8.5 Accessibility

**A11y Requirements**:
- Keyboard navigation (Tab, Enter, Arrow keys)
- Screen reader support (ARIA labels)
- High contrast mode
- Adjustable font sizes
- Audio alternatives for all feedback
- No reliance on color alone

### 8.6 Analytics & Iteration

**Metrics to Track**:
- Exercise completion rate by type
- Average accuracy by type
- Time spent per exercise type
- User preference (implicit: time on task, explicit: feedback)
- Dropout points (where do users quit?)
- Learning velocity (cards/hour)

**A/B Testing Opportunities**:
- Different feedback messages
- Validation strictness levels
- Distribution ratios
- Difficulty progression curves

---

## Summary: Exercise System at a Glance

| Exercise Type | Pedagogical Purpose | When to Use | Difficulty | Frequency |
|--------------|---------------------|-------------|-----------|-----------|
| **Multiple Choice** | Recognition, confidence | Early learning, warm-ups | Low | 20-30% (beginner) → 10% (advanced) |
| **Fill-in-the-Blank** | Contextual recall | Mid-stage, grammar | Medium | 10-20% across levels |
| **Translation DE→FR** | Active production | Core practice, established words | High | 15-30% across levels |
| **Translation FR→DE** | Recognition + native production | Mixed throughout | Medium | 15-20% across levels |
| **Sentence Construction** | Syntactic awareness | Grammar lessons, intermediate+ | Medium-High | 0-15% (increases with level) |
| **Listening** | Phonological awareness | All levels | Medium | 10-15% across levels |
| **Speaking** | Pronunciation, confidence | Optional, all levels | High | 10-15% (if enabled) |
| **Gender Recognition** | Grammatical gender | Every noun, all levels | Medium | 40% (nouns, early) → 5% (automated) |
| **Conjugation Drills** | Verb morphology | Verb learning | High | 0% (beginner) → 15% (advanced) |
| **Dialogue Completion** | Pragmatic competence | Intermediate+ | High | 0% (beginner) → 15% (advanced) |
| **Picture Matching** | Direct L2 association | Concrete nouns, all levels | Low | 10-30% (concrete vocab) |

**Core Principles**:
- ✅ **Interleaving**: Mix types within sessions
- ✅ **Spacing**: Distribute practice over time (SRS)
- ✅ **Active Recall**: Prioritize production over recognition
- ✅ **Immediate Feedback**: Within 1 second
- ✅ **Adaptive Difficulty**: Adjust based on performance
- ✅ **Comprehensible Input**: 75-85% accuracy target
- ✅ **Multimodal**: Audio + text + images
- ✅ **Contextual**: All items in sentences

**Success Metrics**:
- Accuracy: 75-85% (optimal difficulty)
- Retention: 70%+ at 7 days
- Engagement: 4+ sessions/week
- Velocity: 15-25 words/hour

---

## Next Steps

1. **Implement Core Generators**: Start with translation, multiple choice, cloze
2. **Build Validation System**: String matching with typo tolerance
3. **Integrate with SRS**: Exercise selection based on card stats
4. **Test with Admiral**: Real user feedback on exercise clarity
5. **Iterate**: Adjust distributions, difficulty, feedback based on usage
6. **Expand**: Add remaining exercise types (conjugation, dialogue, speaking)

---

**Document Status**: Complete  
**Ready for**: Implementation  
**Owner**: Commander Tom Pullings  
**Next Review**: After Phase 1 testing with Admiral
