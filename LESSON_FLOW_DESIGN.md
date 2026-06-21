# Lesson Flow Design - HonHon French Learning App
**Date**: 2026-05-23  
**Status**: Design Specification  
**Based on**: Pedagogical research, SRS best practices, cognitive load theory

---

## Executive Summary

This document defines the complete user experience flow for a lesson in the HonHon French learning application. The design is grounded in evidence-based pedagogy: spaced repetition (SM-2), comprehensible input (i+1), active recall, interleaving, and cognitive load management.

**Design Philosophy**:
- **Learner-centered**: Progress at own pace, never overwhelming
- **Scientifically grounded**: Based on research in SLA, cognitive psychology, and SRS
- **Encouraging**: Mistakes are learning opportunities, not failures
- **Efficient**: Maximize retention per minute invested
- **Habit-forming**: Short sessions, immediate feedback, visible progress

---

## Lesson Structure Overview

```
┌─────────────────────────────────────────────────────────┐
│                    LESSON LIFECYCLE                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. INTRODUCTION (30-60 sec)                            │
│     ↓                                                    │
│  2. TEACHING (2-4 min)                                  │
│     ↓                                                    │
│  3. GUIDED PRACTICE (3-5 min)                           │
│     ↓                                                    │
│  4. INDEPENDENT PRACTICE (4-6 min)                      │
│     ↓                                                    │
│  5. ASSESSMENT (2-3 min)                                │
│     ↓                                                    │
│  6. REVIEW & REFLECTION (1-2 min)                       │
│                                                          │
│  Total Duration: 12-21 minutes                          │
│  Optimal Duration: 15 minutes                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Phase 1: Introduction Phase

### Purpose
- Set clear expectations
- Activate prior knowledge
- Establish context and motivation
- Reduce cognitive anxiety

### Duration
**30-60 seconds**

### Content Shown

```
┌─────────────────────────────────────────┐
│  Lektion 3: Être (sein) - Präsens      │
├─────────────────────────────────────────┤
│                                         │
│  🎯 Lernziele:                         │
│  • Être im Präsens konjugieren         │
│  • Être mit Adjektiven verwenden       │
│  • 8 neue Vokabeln lernen              │
│                                         │
│  ✅ Vorwissen:                          │
│  • Personalpronomen (je, tu, il...)    │
│  • Grundlegende Adjektive              │
│                                         │
│  💡 Warum wichtig?                      │
│  "Être" ist das wichtigste Verb im     │
│  Französischen. Du brauchst es in      │
│  fast jedem Satz.                      │
│                                         │
│  ⏱️ Dauer: ~15 Minuten                │
│                                         │
│  [Los geht's!]                         │
│                                         │
└─────────────────────────────────────────┘
```

### User Interaction
- **Read-only**: Learner absorbs information
- **Single button**: "Los geht's!" (Let's go!)
- **Optional**: [Überspringen] (Skip) link for returning users

### Navigation Rules
- **Cannot skip**: First-time lesson access (ensures awareness of objectives)
- **Can skip**: If lesson previously started (returning user)
- **Auto-advance**: No (requires conscious decision to proceed)

### Progress Indicator
```
Lektion 3/12  [====>.........................] 25%
```

### Expected Time
30-60 seconds (reading + clicking)

### Transition Trigger
User clicks "Los geht's!" → Advance to Teaching Phase

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phaseStarted: 'introduction',
  timestamp: Date,
  skipped: boolean
}
```

---

## Phase 2: Teaching Phase

### Purpose
- Present new concepts clearly and systematically
- Provide comprehensible input (i+1)
- Establish mental models before practice
- Minimize cognitive overload

### Duration
**2-4 minutes** (learner-controlled pacing)

### Content Structure

Teaching is broken into **digestible chunks** (3-4 screens), each focusing on one micro-concept:

#### Screen 1: Core Concept Introduction
```
┌─────────────────────────────────────────┐
│  📘 Être - Das Verb "sein"             │
├─────────────────────────────────────────┤
│                                         │
│  Être = sein (to be)                   │
│                                         │
│  Im Französischen ist "être" genauso   │
│  wichtig wie "sein" im Deutschen.      │
│  Es ist UNREGELMÄSSIG konjugiert.      │
│                                         │
│  🔊 Aussprache: [ɛtʁ] (äh-trr)        │
│  [Audio abspielen]                     │
│                                         │
│  [Weiter →]                            │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 2: Pattern Presentation
```
┌─────────────────────────────────────────┐
│  📘 Être - Konjugation Präsens         │
├─────────────────────────────────────────┤
│                                         │
│  je suis    = ich bin                  │
│  tu es      = du bist                  │
│  il/elle est = er/sie ist              │
│                                         │
│  nous sommes = wir sind                │
│  vous êtes   = ihr seid / Sie sind     │
│  ils/elles sont = sie sind             │
│                                         │
│  🎧 Hör dir alle Formen an:            │
│  [Alle Formen abspielen]               │
│                                         │
│  [← Zurück]  [Weiter →]                │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 3: Contextualized Examples
```
┌─────────────────────────────────────────┐
│  📘 Être - Beispiele                   │
├─────────────────────────────────────────┤
│                                         │
│  Je suis content. 😊                   │
│  → Ich bin zufrieden.                  │
│                                         │
│  Tu es fatigué. 😴                     │
│  → Du bist müde.                       │
│                                         │
│  Elle est française. 🇫🇷               │
│  → Sie ist Französin.                  │
│                                         │
│  Nous sommes étudiants. 🎓             │
│  → Wir sind Studenten.                 │
│                                         │
│  🔊 [Beispiele anhören]                │
│                                         │
│  [← Zurück]  [Weiter →]                │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 4: Key Notes & Contrasts
```
┌─────────────────────────────────────────┐
│  💡 Wichtige Hinweise                   │
├─────────────────────────────────────────┤
│                                         │
│  ✓ Être wird mit Adjektiven verwendet: │
│    "Je suis content" (NOT "J'ai content")│
│                                         │
│  ⚠️ Unterschied zu Deutsch:             │
│    Deutsch: Ich bin Student.            │
│    Französisch: Je suis étudiant.       │
│    (Kein Artikel!)                      │
│                                         │
│  🇩🇪 Wie Deutsch:                       │
│    Être + Adjektiv = sein + Adjektiv    │
│                                         │
│  [Ich hab's verstanden →]              │
│                                         │
└─────────────────────────────────────────┘
```

### User Interaction
- **Self-paced navigation**: Forward/back arrows
- **Audio playback**: Optional, repeatable
- **Read-only**: No questions yet (input comes next)
- **Can pause**: Return to lesson anytime

### Navigation Rules
- **Forward**: Must click "Weiter" (prevents accidental skipping)
- **Backward**: Always available (review if confused)
- **Cannot skip entire phase**: Must advance through all screens sequentially (first visit)
- **Can skip on revisit**: If lesson was previously completed

### Progress Indicator
```
Lektion 3/12  [========>.....................] 33%
Teaching: Screen 2/4
```

### Expected Time
2-4 minutes (varies by learner reading speed and audio playback)

### Transition Trigger
User clicks "Ich hab's verstanden" on final teaching screen → Advance to Guided Practice

### Pedagogical Features

#### Chunking
- One micro-concept per screen (conjugation, usage, contrasts)
- Max 4 screens per teaching phase
- Each chunk: 20-40 seconds to process

#### Comprehensible Input (i+1)
- Vocabulary assumes prior knowledge from prerequisites
- New forms introduced progressively (singular → plural)
- German translations provide scaffold
- Examples use previously learned words

#### Multimodal Learning
- Text: Written forms and translations
- Audio: Native pronunciation
- Visual: Color-coding (e.g., subject pronouns in blue, verb forms in green)
- Spatial: Parallel German/French alignment

#### Contrastive Analysis
- Explicitly compares German and French structures
- Highlights false friends and differences
- Leverages positive transfer from German

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phase: 'teaching',
  screenViewed: number,
  timeOnScreen: number, // seconds
  audioPlayed: boolean,
  backNavigations: number, // indicates confusion
  timestamp: Date
}
```

---

## Phase 3: Guided Practice Phase

### Purpose
- Apply new knowledge with high scaffolding
- Build initial neural pathways (encoding)
- Provide immediate corrective feedback
- Build confidence before independent practice

### Duration
**3-5 minutes** (5-8 questions)

### Question Characteristics
- **Difficulty**: Easy (recognition > recall)
- **Scaffolding**: High (hints available, multiple choice)
- **Feedback**: Immediate and explanatory
- **Pacing**: Learner-controlled

### Question Types (Distribution)

#### Type 1: Multiple Choice (40%)
```
┌─────────────────────────────────────────┐
│  Frage 1/8                              │
├─────────────────────────────────────────┤
│                                         │
│  Welche Form ist richtig?               │
│                                         │
│  "Ich bin zufrieden."                   │
│  → Je ___ content.                      │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ A) es                        │       │
│  │ B) suis                      │       │
│  │ C) est                       │       │
│  │ D) sommes                    │       │
│  └─────────────────────────────┘       │
│                                         │
│  💡 [Tipp anzeigen]                     │
│  🔊 [Aussprache]                        │
│                                         │
└─────────────────────────────────────────┘
```

**After Correct Answer:**
```
┌─────────────────────────────────────────┐
│  ✅ Richtig!                            │
├─────────────────────────────────────────┤
│                                         │
│  Je suis content.                       │
│  → Ich bin zufrieden.                   │
│                                         │
│  "suis" ist die Form für "je" (ich).   │
│                                         │
│  🔊 [Noch einmal anhören]              │
│                                         │
│  [Nächste Frage →]                     │
│                                         │
└─────────────────────────────────────────┘
```

**After Incorrect Answer:**
```
┌─────────────────────────────────────────┐
│  ❌ Nicht ganz!                         │
├─────────────────────────────────────────┤
│                                         │
│  Du hast gewählt: "es"                 │
│  → "es" ist die Form für "tu" (du)     │
│                                         │
│  ✅ Richtig wäre: "suis"                │
│  → Je suis content.                     │
│                                         │
│  💡 Merke: je → suis                   │
│                                         │
│  🔊 [Richtige Antwort anhören]         │
│                                         │
│  [Nächste Frage →]                     │
│                                         │
└─────────────────────────────────────────┘
```

#### Type 2: Translation (FR→DE) (30%)
```
┌─────────────────────────────────────────┐
│  Frage 3/8                              │
├─────────────────────────────────────────┤
│                                         │
│  Übersetze ins Deutsche:                │
│                                         │
│  "Tu es fatigué."                       │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ [Deine Antwort hier...]     │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Überprüfen]                           │
│                                         │
│  💡 [Tipp anzeigen]                     │
│  🔊 [Aussprache]                        │
│                                         │
└─────────────────────────────────────────┘
```

**Validation Logic:**
- Accepts multiple correct answers: "Du bist müde." / "Du bist müde" / "du bist müde"
- Ignores case, punctuation, extra spaces
- Fuzzy matching for minor typos (Levenshtein distance ≤ 2)

#### Type 3: Fill-in-the-Blank (30%)
```
┌─────────────────────────────────────────┐
│  Frage 5/8                              │
├─────────────────────────────────────────┤
│                                         │
│  Ergänze das fehlende Wort:             │
│                                         │
│  Nous ___ étudiants.                    │
│  (Wir sind Studenten.)                  │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ [Antwort...]                │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Überprüfen]                           │
│                                         │
│  💡 Tipp: Form für "nous"               │
│  🔊 [Satz anhören]                      │
│                                         │
└─────────────────────────────────────────┘
```

### Hints System

**Progressive Hints** (click "Tipp anzeigen" multiple times for more help):

**Hint Level 1** (General):
```
💡 Welches Pronomen steht am Anfang? "je", "tu", "il"...
```

**Hint Level 2** (Specific):
```
💡 Das Pronomen ist "je" → Die Form ist "suis"
```

**Hint Level 3** (Answer):
```
💡 Die richtige Antwort ist: "Je suis content."
```

### User Interaction
- **Type answer**: Text input or multiple-choice selection
- **Check answer**: Click "Überprüfen"
- **View hints**: Optional, penalty-free
- **Audio**: Play/replay pronunciation
- **Progress through**: Must complete all questions

### Navigation Rules
- **Cannot skip questions**: Must answer to proceed
- **Incorrect answers**: Show explanation, then advance (no repetition in this phase)
- **Can pause**: Mid-session exit saves progress
- **Auto-save**: Progress saved after each question

### Feedback Strategy

#### Immediate Feedback
- Show result instantly after submission
- Correct: Positive reinforcement + brief explanation
- Incorrect: Non-judgmental language + corrective teaching

#### Encouraging Language
- ✅ "Richtig!" / "Genau!" / "Sehr gut!"
- ❌ "Nicht ganz!" / "Fast!" (NEVER "Falsch!" or "Wrong!")
- Show the correct answer with explanation, not just "incorrect"

#### Explanatory Feedback
- WHY the answer is correct/incorrect
- HOW to avoid the mistake next time
- WHAT the pattern is (connect to teaching phase)

### Progress Indicator
```
Lektion 3/12  [============>..................] 50%
Übung: Frage 5/8  [=======>...]  ✓✓✗✓✓
```

### Expected Time
3-5 minutes (8 questions × 20-40 seconds each)

### Transition Trigger
After completing 8th question → Advance to Independent Practice

### Victory Conditions (Phase Completion)
- All 8 questions answered (accuracy irrelevant for advancement)
- Time spent: Minimum 90 seconds (prevents rushing)

### Adaptive Features (Future Enhancement)
- If accuracy < 60%: Offer to review teaching phase
- If accuracy > 90%: Skip some independent practice

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phase: 'guided-practice',
  questionId: string,
  questionType: 'multiple-choice' | 'translation' | 'fill-blank',
  userAnswer: string,
  correctAnswer: string,
  isCorrect: boolean,
  hintsUsed: number,
  responseTime: number, // milliseconds
  timestamp: Date
}
```

---

## Phase 4: Independent Practice Phase

### Purpose
- Apply knowledge with reduced scaffolding
- Develop automaticity through repetition
- Mix question types (interleaving)
- Prepare for assessment

### Duration
**4-6 minutes** (10-12 questions)

### Question Characteristics
- **Difficulty**: Medium (more recall, less recognition)
- **Scaffolding**: Moderate (fewer hints, no multiple choice)
- **Feedback**: Immediate but briefer
- **Pacing**: Learner-controlled but encouraged to move faster

### Question Types (Distribution)

#### Type 1: Translation (DE→FR) (50%)
```
┌─────────────────────────────────────────┐
│  Frage 9/20                             │
├─────────────────────────────────────────┤
│                                         │
│  Übersetze ins Französische:            │
│                                         │
│  "Wir sind zufrieden."                  │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ [Deine Antwort...]          │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Überprüfen]                           │
│                                         │
│  🔊 [Aussprache der Lösung]            │
│                                         │
└─────────────────────────────────────────┘
```

**Higher production demand** (DE→FR) vs receptive (FR→DE)

#### Type 2: Fill-in-the-Blank with Context (30%)
```
┌─────────────────────────────────────────┐
│  Frage 12/20                            │
├─────────────────────────────────────────┤
│                                         │
│  Ergänze:                               │
│                                         │
│  Marie et Sophie ___ françaises.        │
│  (Marie und Sophie sind Französinnen.)  │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ [Antwort...]                │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Überprüfen]                           │
│                                         │
└─────────────────────────────────────────┘
```

#### Type 3: Translation (FR→DE) (20%)
```
┌─────────────────────────────────────────┐
│  Frage 15/20                            │
├─────────────────────────────────────────┤
│                                         │
│  Übersetze ins Deutsche:                │
│                                         │
│  "Vous êtes intelligents."              │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ [Deine Antwort...]          │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Überprüfen]                           │
│                                         │
└─────────────────────────────────────────┘
```

### Feedback (Streamlined)

**Correct Answer:**
```
┌─────────────────────────────────────────┐
│  ✅ Richtig!                            │
├─────────────────────────────────────────┤
│                                         │
│  Nous sommes contents.                  │
│                                         │
│  [Weiter →]                            │
│                                         │
└─────────────────────────────────────────┘
```

**Incorrect Answer:**
```
┌─────────────────────────────────────────┐
│  ❌ Nicht ganz!                         │
├─────────────────────────────────────────┤
│                                         │
│  Deine Antwort: Nous sommes content     │
│  ✅ Richtig: Nous sommes contents       │
│                                         │
│  💡 "contents" (Plural!)                │
│                                         │
│  [Weiter →]                            │
│                                         │
└─────────────────────────────────────────┘
```

### Interleaving Strategy
Questions mix:
- Different verb forms (je, tu, il, nous, vous, ils)
- Different tenses (future: introduce passé composé if applicable)
- New vocabulary from this lesson + prior lessons
- Grammar structures (affirmative, negative, interrogative)

**Example Question Sequence:**
1. DE→FR translation (je suis)
2. Fill blank (tu es)
3. FR→DE translation (il est)
4. DE→FR with new vocab (nous sommes + adjective)
5. Fill blank with negation (ne...pas)
6. DE→FR (vous êtes)
7. FR→DE (ils sont)
8. Fill blank in question form (Es-tu...?)
9. DE→FR with prior lesson vocab
10. Review question from guided practice (same concept, different wording)

### User Interaction
- **Type answers**: Text input only (no multiple choice)
- **Check answer**: Click "Überprüfen"
- **View feedback**: Brief, auto-dismisses after 3 seconds OR manual advance
- **No hints**: Forces retrieval effort

### Navigation Rules
- **Cannot skip**: Must answer all questions
- **Incorrect answers**: Show correction, advance (no retry)
- **Can pause**: Exit and resume anytime
- **Progress saved**: After each question

### Progress Indicator
```
Lektion 3/12  [==================>............] 75%
Übung: Frage 15/20  ✓✓✗✓✓✓✓✗✓✓✓✓✓✓✓
```

### Expected Time
4-6 minutes (12 questions × 20-30 seconds each)

### Transition Trigger
After completing 12th question → Advance to Assessment Phase

### Victory Conditions
- All 12 questions answered
- Minimum 60% accuracy (if < 60%, offer review before assessment)

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phase: 'independent-practice',
  questionId: string,
  questionType: 'translation-de-fr' | 'translation-fr-de' | 'fill-blank',
  userAnswer: string,
  correctAnswer: string,
  isCorrect: boolean,
  responseTime: number,
  timestamp: Date
}
```

---

## Phase 5: Assessment Phase

### Purpose
- Evaluate comprehension and retention
- Provide performance feedback
- Identify weak areas for spaced repetition
- Gate progress (mastery-based learning)

### Duration
**2-3 minutes** (5-7 questions)

### Question Characteristics
- **Difficulty**: Medium-Hard (mixed formats)
- **Scaffolding**: None (no hints, no audio)
- **Feedback**: Delayed until end of assessment
- **Coverage**: All lesson objectives

### Question Types (Distribution)

#### Type 1: Translation (40%)
- DE→FR (production)
- FR→DE (comprehension)

#### Type 2: Fill-in-the-Blank (30%)
- Cloze with context

#### Type 3: Error Correction (30%) [NEW]
```
┌─────────────────────────────────────────┐
│  Prüfung: Frage 3/7                     │
├─────────────────────────────────────────┤
│                                         │
│  Korrigiere den Fehler:                 │
│                                         │
│  ❌ Je est content.                     │
│                                         │
│  ✅ Richtige Form:                      │
│  ┌─────────────────────────────┐       │
│  │ [Deine Korrektur...]        │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Antworten]                            │
│                                         │
└─────────────────────────────────────────┘
```

### Assessment Flow

#### Stage 1: All Questions Presented
- No feedback between questions
- Answer all 7 questions sequentially
- Timer displayed (optional pressure)

#### Stage 2: Results Summary
```
┌─────────────────────────────────────────┐
│  🎯 Prüfungsergebnis                    │
├─────────────────────────────────────────┤
│                                         │
│  Score: 6/7 (86%)                       │
│                                         │
│  ✅✅✅✅✅✅❌                          │
│                                         │
│  Sehr gut! Du hast die Lektion          │
│  erfolgreich abgeschlossen.             │
│                                         │
│  [Fehler ansehen]  [Weiter →]          │
│                                         │
└─────────────────────────────────────────┘
```

#### Stage 3: Detailed Review (Optional)
User can click "Fehler ansehen" to see:
```
┌─────────────────────────────────────────┐
│  Frage 5: ❌ Falsch                     │
├─────────────────────────────────────────┤
│                                         │
│  Aufgabe: Übersetze "Sie sind müde."   │
│                                         │
│  Deine Antwort: Vous êtes fatigué      │
│  ✅ Richtig: Vous êtes fatigués         │
│                                         │
│  💡 Fehler: Plural-Adjektiv braucht -s │
│                                         │
│  Diese Karte kommt ins Wiederholen.    │
│                                         │
│  [Nächster Fehler →]                   │
│                                         │
└─────────────────────────────────────────┘
```

### Mastery Threshold

**Passing Score**: 70% (5/7 correct)

#### If ≥ 70%: Lesson Complete
- Unlock next lesson
- All cards enter SRS rotation
- Celebration animation

#### If < 70%: Review Required
```
┌─────────────────────────────────────────┐
│  📚 Noch nicht ganz                     │
├─────────────────────────────────────────┤
│                                         │
│  Score: 4/7 (57%)                       │
│                                         │
│  Kein Problem! Lernen braucht Zeit.    │
│                                         │
│  Wiederhole die Lektion, um sie zu     │
│  meistern.                              │
│                                         │
│  [Lektion wiederholen]                 │
│  [Später fortsetzen]                   │
│                                         │
└─────────────────────────────────────────┘
```

**Options:**
- Retry: Return to Teaching Phase, skip directly to Independent Practice
- Pause: Exit, lesson marked "in progress"
- No penalty: Can retry unlimited times

### User Interaction
- **Answer questions**: Text input or selection
- **No navigation back**: Cannot change previous answers
- **Review errors**: Optional post-assessment review
- **Retry**: Return to lesson if score < 70%

### Navigation Rules
- **Cannot skip**: Must complete all 7 questions
- **No hints/audio**: Assessment integrity
- **One-way**: Cannot go back to previous questions
- **Can retry**: If score < 70%, can repeat lesson

### Progress Indicator
```
Lektion 3/12  [======================>........] 92%
Prüfung: Frage 5/7
```

### Expected Time
2-3 minutes (7 questions × 20-30 seconds each)

### Transition Trigger
After viewing results summary (and optionally reviewing errors) → Advance to Review Phase

### Victory Conditions
- Score ≥ 70% (5/7 correct)
- All questions answered (no skips)

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phase: 'assessment',
  questions: {
    questionId: string,
    userAnswer: string,
    correctAnswer: string,
    isCorrect: boolean,
    responseTime: number
  }[],
  score: number,
  percentage: number,
  passed: boolean,
  timestamp: Date
}
```

---

## Phase 6: Review & Reflection Phase

### Purpose
- Consolidate learning (retrieval practice)
- Identify weak areas for targeted review
- Activate spaced repetition system
- Preview next lesson (advance organizer)
- Celebrate progress (motivation)

### Duration
**1-2 minutes**

### Content Structure

#### Screen 1: Summary & Celebration
```
┌─────────────────────────────────────────┐
│  🎉 Lektion abgeschlossen!              │
├─────────────────────────────────────────┤
│                                         │
│  Être (sein) - Präsens                 │
│                                         │
│  ✅ Lernziele erreicht:                 │
│  • Être im Präsens konjugieren  ✓      │
│  • Être mit Adjektiven verwenden ✓     │
│  • 8 neue Vokabeln gelernt  ✓          │
│                                         │
│  📊 Deine Leistung:                     │
│  • Übungsgenauigkeit: 78%              │
│  • Prüfung: 6/7 (86%)                  │
│  • Zeit: 14 Minuten                    │
│                                         │
│  [Weiter →]                            │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 2: Weak Areas & SRS Setup
```
┌─────────────────────────────────────────┐
│  📝 Was du üben solltest                │
├─────────────────────────────────────────┤
│                                         │
│  Stark: ✅✅✅                          │
│  • "je suis" / "tu es" / "il est"      │
│                                         │
│  Üben: ⚠️⚠️                            │
│  • Plural-Formen: "nous/vous/ils"      │
│  • Adjektivanpassung (Plural)          │
│                                         │
│  💾 Hinzugefügt zum Wiederholen:       │
│  • 8 neue Vokabeln                     │
│  • 2 schwache Karten (frühere Wiederh.)│
│                                         │
│  Nächste Wiederholung: Morgen          │
│                                         │
│  [Weiter →]                            │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 3: Spaced Repetition Preview
```
┌─────────────────────────────────────────┐
│  🔄 Wie Wiederholen funktioniert        │
├─────────────────────────────────────────┤
│                                         │
│  Die 8 neuen Vokabeln kommen morgen    │
│  wieder. Je besser du sie weißt, desto │
│  seltener siehst du sie.               │
│                                         │
│  📅 Wiederholungs-Zeitplan:             │
│  • Morgen: 8 Karten                    │
│  • In 3 Tagen: 5 Karten                │
│  • In 1 Woche: 12 Karten               │
│                                         │
│  So merkst du dir alles langfristig!   │
│                                         │
│  [Verstanden →]                        │
│                                         │
└─────────────────────────────────────────┘
```

**Only shown once** (first lesson completion, or first 3 lessons)

#### Screen 4: Next Lesson Preview
```
┌─────────────────────────────────────────┐
│  🔜 Nächste Lektion                     │
├─────────────────────────────────────────┤
│                                         │
│  Lektion 4: Avoir (haben) - Präsens    │
│                                         │
│  Du lernst:                             │
│  • Avoir konjugieren                   │
│  • Avoir vs. Être unterscheiden        │
│  • Besitz ausdrücken                   │
│                                         │
│  Baut auf: Personalpronomen, Être      │
│                                         │
│  [Jetzt starten]  [Später]             │
│                                         │
└─────────────────────────────────────────┘
```

#### Screen 5: Progress Update
```
┌─────────────────────────────────────────┐
│  🏆 Dein Fortschritt                    │
├─────────────────────────────────────────┤
│                                         │
│  🔥 Streak: 7 Tage                     │
│  📚 Vokabeln: 54 gelernt (31 gemeistert)│
│  🎯 Genauigkeit: 79% (diese Woche)     │
│                                         │
│  [████████░░░░░░░░░░░░] A1: 40%        │
│                                         │
│  +50 XP  🌟 Level 3                    │
│                                         │
│  Abzeichen freigeschaltet:             │
│  🏅 "Dritte Lektion"                   │
│                                         │
│  [Zum Dashboard]                       │
│                                         │
└─────────────────────────────────────────┘
```

### User Interaction
- **Read-only**: Absorb summary information
- **Navigate forward**: Click through screens
- **Optional next lesson**: Can start immediately or return to dashboard
- **Celebrate**: Visual feedback (confetti animation, badge unlock)

### Navigation Rules
- **Forward only**: Cannot go back to assessment
- **Can skip**: After first 3 lessons, can skip directly to dashboard
- **Auto-saves**: All progress committed to database

### Progress Indicator
```
Lektion 3/12  [==========================] 100% ✓
```

### Expected Time
1-2 minutes (reading + decision)

### Transition Trigger
- Click "Jetzt starten" → Next lesson introduction
- Click "Später" / "Zum Dashboard" → Return to home screen

### Victory Conditions
- Lesson marked complete in database
- XP awarded
- Cards added to SRS queue
- Next lesson unlocked

### Data Tracked
```typescript
{
  lessonId: 'lesson-03-etre',
  phase: 'review',
  completed: true,
  overallAccuracy: number,
  assessmentScore: number,
  timeSpent: number, // total lesson duration in seconds
  weakAreas: string[], // identified weak concepts
  cardsAddedToSRS: string[],
  nextReviewDate: Date,
  xpEarned: number,
  badgesUnlocked: string[],
  timestamp: Date
}
```

---

## Cross-Phase Features

### Pause & Resume System

#### Save Points
- After each completed question
- After each phase
- On explicit "Pause" button click

#### Resume Behavior
```
┌─────────────────────────────────────────┐
│  👋 Willkommen zurück!                  │
├─────────────────────────────────────────┤
│                                         │
│  Du warst bei:                          │
│  Lektion 3: Être (sein) - Präsens      │
│                                         │
│  Phase: Selbstständige Übung           │
│  Fortschritt: Frage 7/12                │
│                                         │
│  [Fortsetzen]  [Von vorne starten]     │
│                                         │
└─────────────────────────────────────────┘
```

### Progress Persistence

**Local Storage (IndexedDB)**:
```typescript
{
  lessonId: string,
  currentPhase: 'introduction' | 'teaching' | 'guided' | 'independent' | 'assessment' | 'review',
  phaseProgress: {
    questionsAnswered: number,
    totalQuestions: number,
    answers: Answer[]
  },
  timestamp: Date
}
```

### Break Points

**Natural Stopping Points**:
- After teaching phase (OK to digest before practice)
- After guided practice (OK to pause)
- NEVER during assessment (must complete in one sitting)

**UI Indicators**:
```
[Pause] button visible:
- Introduction ✓
- Teaching ✓
- Guided Practice ✓
- Independent Practice ✓
- Assessment ✗ (hidden)
- Review ✓
```

---

## Error Handling Strategy

### Principle: Mistakes Are Learning Opportunities

#### Tone Guidelines
- ❌ NEVER: "Wrong!" "Incorrect!" "Failed!"
- ✅ ALWAYS: "Nicht ganz!" "Fast!" "Lass uns nochmal schauen"

#### Feedback Framework

**For Minor Errors** (typos, capitalization):
```
✅ Richtig! (kleiner Tippfehler korrigiert)
Du schriebst: "je Suis"
Gemeint war: "je suis"
```

**For Conceptual Errors** (wrong verb form):
```
❌ Nicht ganz!
Du schriebst: "je es"
→ "es" ist die Form für "tu" (du), nicht "je" (ich)

✅ Richtig wäre: "je suis"
💡 Merke: je → suis
```

**For Systematic Errors** (repeated mistakes):
```
⚠️ Achtung!
Das ist das 3. Mal, dass "nous" und "vous" 
verwechselt wurden.

💡 Tipp:
• nous = wir (wie "us" auf Englisch)
• vous = ihr/Sie

Möchtest du die Erklärung nochmal sehen?
[Ja, bitte]  [Nein, weiter]
```

### When to Show Explanations vs. Let Learner Discover

#### Show Explanations (Explicit Teaching):
- New grammatical concepts
- Irregular patterns (no way to infer)
- False friends (explicit warning needed)
- Systematic errors (3+ mistakes on same concept)

#### Let Learner Discover (Implicit Learning):
- Regular patterns (after 2-3 examples)
- Cognates (obvious similarity)
- Context-inferrable vocabulary
- Minor variations (plural -s, gender agreement)

#### Hybrid Approach (Prompting):
```
❌ Nicht ganz!
"Marie et Sophie ___ françaises."

💬 Denk nach:
• Wie viele Personen? (Hinweis: zwei)
• Welches Pronomen? (Hinweis: "elles")
• Welche Form von "être"? (Hinweis: Plural)

[Tipp zeigen]  [Nochmal versuchen]
```

---

## Gamification & Motivation

### Progress Indicators

#### Visual Progress Bar
```
Lektion 3/12  [========>....................] 33%
```

#### Phase Indicator
```
[✓] Einführung
[✓] Erklärung
[✓] Geführte Übung
[→] Selbstständige Übung  ← Du bist hier
[ ] Prüfung
[ ] Zusammenfassung
```

#### Question Progress
```
Frage 7/12  [======>......]  
✓✓✗✓✓✓✓
```

### Encouraging Feedback

#### After Correct Answers (Varied Praise):
- "Richtig!" (50%)
- "Genau!" (20%)
- "Sehr gut!" (15%)
- "Perfekt!" (10%)
- "Ausgezeichnet!" (5%)

#### After Incorrect Answers (Growth Mindset):
- "Nicht ganz, aber guter Versuch!"
- "Fast! Schau dir die Erklärung an."
- "Kein Problem! Lernen braucht Zeit."
- "Das ist knifflig. Lass uns das nochmal anschauen."

#### After Completing Phase:
```
🎉 Geführte Übung abgeschlossen!
7/8 richtig (88%)
Sehr gut! Du bist bereit für den nächsten Schritt.
```

### Streaks & Habits

#### Daily Streak Display
```
🔥 7 Tage Streak
[■■■■■■■□□□] 10 Tage Ziel
```

#### Streak Protection
- **Streak Freeze**: One free missed day per week
- **Partial Credit**: 5+ minutes = maintains streak
- **Reminder**: Notification at 8pm if no activity today

### XP & Levels

#### XP Awards
- Complete lesson: 50 XP
- Perfect assessment (100%): +10 bonus XP
- Maintain 7-day streak: +25 bonus XP
- First lesson of day: +5 XP

#### Level Progression
```
Level 3  [████████░░] 380/500 XP
```

Levels unlock:
- Level 2: Dark mode
- Level 3: Custom themes
- Level 5: Export progress
- Level 10: Advanced stats

### Badges (Achievements)

**Learning Milestones**:
- 🏅 "Erste Lektion" (Complete first lesson)
- 🏅 "Woche durch" (7-day streak)
- 🏅 "Perfektionist" (100% on assessment)
- 🏅 "Hundert Wörter" (100 vocabulary mastered)
- 🏅 "Fleißig" (30-day streak)

**Displayed on Review Phase** and Profile

---

## Assessment Criteria

### Lesson Completion Success Metrics

#### Mastery Threshold
- **Pass**: 70% on assessment (5/7 correct)
- **Excellent**: 85%+ (6/7 correct)
- **Perfect**: 100% (7/7 correct)

#### Retry Policy
- **Unlimited retries**: No penalty
- **Retry starts at**: Independent Practice (skip teaching/guided)
- **Encouragement**: "Lernen braucht Zeit. Versuch es nochmal!"

#### Mastery Tracking (Long-term)
Card is "mastered" when:
- SRS interval > 21 days
- Reviewed 5+ times
- Average quality rating ≥ 4

### Progress Tracking Metrics

#### Per-Lesson Tracking
```typescript
{
  lessonId: string,
  status: 'not-started' | 'in-progress' | 'completed',
  attempts: number,
  bestScore: number,
  averageAccuracy: number,
  timeSpent: number,
  completionDate?: Date
}
```

#### Global Progress
```typescript
{
  totalLessons: number,
  completedLessons: number,
  vocabularyLearned: number,
  vocabularyMastered: number,
  currentStreak: number,
  longestStreak: number,
  totalTimeMinutes: number,
  averageAccuracy: number,
  level: number,
  xp: number
}
```

### Weak Area Identification

**Automatic Detection**:
- Question answered incorrectly 2+ times → Flag concept as weak
- Assessment score < 60% on specific objective → Flag objective
- SRS card repeatedly rated < 3 → Flag card for extra practice

**Intervention**:
```
⚠️ Schwachstelle erkannt:
"Être" - Plural-Formen (nous, vous, ils)

💡 Empfehlung:
• Wiederhole Lektion 3 (Être)
• Fokus auf Plural-Formen

[Jetzt wiederholen]  [Später]
```

---

## Spaced Repetition Integration

### SRS Activation

**When Cards Enter SRS**:
- After lesson completion (assessment passed)
- All vocabulary from lesson added to review queue
- Initial interval: 1 day

**Card Metadata**:
```typescript
{
  cardId: string,
  lessonId: string,
  ease: 2.5, // default easiness factor
  interval: 1, // days until next review
  repetitions: 0,
  nextReview: Date, // tomorrow
  lastReview: null
}
```

### Review Session (Separate from Lessons)

**Daily Review Workflow**:
1. User clicks "Wiederholen" on dashboard
2. System fetches cards where `nextReview <= today`
3. Present cards in randomized order (interleaving)
4. User answers, rates difficulty
5. SM-2 algorithm updates intervals
6. Next review date calculated

**Review Question Format**:
- Same types as lesson practice
- Randomized question type per card
- No teaching/explanations (pure retrieval)

**Rating System**:
```
Wie schwer war das?
[❌ Nochmal]  [😕 Schwer]  [✅ Gut]  [🎯 Einfach]
```

Maps to SM-2 quality ratings:
- ❌ Nochmal = 0 (reset interval to 1 day)
- 😕 Schwer = 2 (increase interval minimally)
- ✅ Gut = 4 (normal progression)
- 🎯 Einfach = 5 (accelerated progression)

### Next Lesson Preview (Advance Organizer)

**Purpose**: Activate schemas, reduce anxiety, set expectations

**Displayed**:
- End of Review Phase (current lesson)
- Dashboard (next unlocked lesson)

**Content**:
- Lesson title and number
- Learning objectives (3-4 bullet points)
- Prerequisites (what you need to know first)
- Estimated duration
- Preview image/icon

---

## Accessibility & UX Considerations

### Keyboard Navigation
- Tab through inputs
- Enter to submit
- Arrow keys for multiple choice
- Esc to pause

### Mobile Optimization
- Touch targets: Min 44×44px
- Swipe gestures: Swipe right = Next, Swipe left = Back
- Auto-scroll to active question
- Prevent zoom on input focus

### Audio Controls
- Play/pause button
- Playback speed (0.75x, 1x, 1.25x)
- Volume control
- Visual indicator when playing

### Dark Mode
- Automatic based on system preference
- Manual toggle in settings
- WCAG AA contrast ratios

### Internationalization
- UI in German (Admiral's preference)
- Can switch to English (future)
- Date/time formatted per locale

---

## Technical Implementation Notes

### State Management

**Lesson State Machine**:
```typescript
type LessonPhase = 
  | 'introduction'
  | 'teaching'
  | 'guided-practice'
  | 'independent-practice'
  | 'assessment'
  | 'review';

type LessonState = {
  lessonId: string,
  currentPhase: LessonPhase,
  phaseData: {
    currentQuestion: number,
    totalQuestions: number,
    answers: Answer[],
    startTime: Date
  },
  canPause: boolean,
  canGoBack: boolean
};
```

### Data Persistence

**IndexedDB Schema** (via Dexie.js):
```typescript
lessons: {
  id: string,
  title: string,
  level: 'A1' | 'A2' | 'B1' | 'B2',
  status: 'locked' | 'unlocked' | 'in-progress' | 'completed',
  progress: LessonProgress
}

lessonAttempts: {
  id: string,
  lessonId: string,
  phase: LessonPhase,
  answers: Answer[],
  score: number,
  timestamp: Date
}
```

### Performance Optimization
- Lazy load lesson content (only current phase)
- Prefetch next phase while user reads
- Debounce text input validation
- Virtualize long lists (lesson selection)

---

## Summary Table: Phase Comparison

| Phase | Duration | Questions | Difficulty | Scaffolding | Feedback | Can Skip? | Can Pause? |
|-------|----------|-----------|------------|-------------|----------|-----------|------------|
| **Introduction** | 30-60s | 0 | N/A | N/A | N/A | Only if returning | Yes |
| **Teaching** | 2-4min | 0 | N/A | N/A | N/A | No | Yes |
| **Guided Practice** | 3-5min | 8 | Easy | High | Immediate+Explanatory | No | Yes |
| **Independent Practice** | 4-6min | 12 | Medium | Moderate | Immediate+Brief | No | Yes |
| **Assessment** | 2-3min | 7 | Medium-Hard | None | Delayed | No | **No** |
| **Review** | 1-2min | 0 | N/A | N/A | N/A | After 3 lessons | Yes |
| **TOTAL** | **12-21min** | **27** | Progressive | Fading | Graduated | Contextual | Mostly |

---

## Victory Conditions Summary

### Per-Phase Victory
- **Introduction**: Clicked "Los geht's!"
- **Teaching**: Viewed all screens, clicked "Verstanden"
- **Guided Practice**: Answered all 8 questions (accuracy irrelevant)
- **Independent Practice**: Answered all 12 questions (accuracy irrelevant)
- **Assessment**: Scored ≥70% (5/7 correct)
- **Review**: Viewed summary, clicked "Zum Dashboard" or "Nächste Lektion"

### Lesson Completion Victory
- All phases completed
- Assessment passed (≥70%)
- Cards added to SRS
- Next lesson unlocked
- XP awarded
- Progress saved

### Long-term Victory (App-level)
- Daily review habit established
- Vocabulary retention >80%
- 30-day streak maintained
- A1 level completed (12 lessons)
- Transition to A2 content

---

## Future Enhancements (Post-MVP)

### Adaptive Difficulty
- Skip phases if user demonstrates mastery early
- Add questions if user struggles
- Dynamic assessment length based on confidence intervals

### Social Features
- Share progress with friends
- Multiplayer challenges
- Leaderboards (opt-in)

### Advanced Content
- Listening comprehension (audio-only questions)
- Speaking practice (speech recognition)
- Reading passages (comprehension questions)
- Writing exercises (short answer, composition)

### AI Integration
- Personalized question generation
- Chatbot for grammar questions
- Pronunciation feedback (speech analysis)

### Content Expansion
- 500+ vocabulary items (A1-B1)
- 50+ grammar lessons
- Cultural notes and idioms
- Regional variations (France vs. Quebec)

---

## Conclusion

This lesson flow design balances pedagogical rigor with user experience excellence. It is:

✅ **Scientifically grounded** (SRS, active recall, interleaving, i+1)  
✅ **Learner-friendly** (self-paced, encouraging, clear progress)  
✅ **Efficient** (15-minute sessions, maximized retention)  
✅ **Habit-forming** (streaks, gamification, immediate feedback)  
✅ **Accessible** (pause/resume, mobile-optimized, multilingual)  

The Admiral will have a smooth, motivating, and highly effective learning experience.

**Ready for implementation, sir.**

---

## Appendix: Example Lesson Walkthrough

### Lesson 3: Être (sein) - Präsens

**Full User Journey** (15-minute session):

```
00:00 - Introduction Phase
        Read objectives, click "Los geht's!"

00:45 - Teaching Phase
        Screen 1: Core concept (être = sein)
        Screen 2: Conjugation table
        Screen 3: Example sentences
        Screen 4: Key notes
        Click "Verstanden"

03:30 - Guided Practice Phase
        Q1: Multiple choice (je suis)
        Q2: Fill blank (tu es)
        Q3: Translation FR→DE (il est)
        Q4: Multiple choice (nous sommes)
        Q5: Fill blank (vous êtes)
        Q6: Translation FR→DE (ils sont)
        Q7: Fill blank with adjective agreement
        Q8: Multiple choice (review)
        Accuracy: 7/8 (88%)

07:00 - Independent Practice Phase
        Q1: Translation DE→FR (Ich bin zufrieden)
        Q2: Fill blank (Tu ___ content)
        Q3: Translation FR→DE (Il est fatigué)
        Q4: Translation DE→FR (Wir sind Studenten)
        Q5: Fill blank (Vous ___ intelligents)
        Q6: Translation DE→FR (Sie sind Französinnen)
        Q7: Error correction (Je est → Je suis)
        Q8: Fill blank in question (Es-tu content?)
        Q9: Translation DE→FR (mixed vocab)
        Q10: Translation FR→DE (mixed vocab)
        Q11: Fill blank (negation: ne...pas)
        Q12: Translation DE→FR (recap)
        Accuracy: 10/12 (83%)

12:00 - Assessment Phase
        Q1: Translation DE→FR
        Q2: Fill blank
        Q3: Error correction
        Q4: Translation FR→DE
        Q5: Fill blank with agreement
        Q6: Translation DE→FR
        Q7: Error correction
        Score: 6/7 (86%) → PASSED

13:30 - Review Phase
        View summary
        View weak areas (plural forms)
        View SRS explanation (first lesson)
        Preview next lesson (Avoir)
        View progress update (+50 XP, Level 3)
        Click "Zum Dashboard"

15:00 - Return to Dashboard
        8 new cards added to SRS (due tomorrow)
        2 weak cards flagged for early review
        Streak maintained (7 days)
        Next lesson unlocked (Lektion 4: Avoir)
```

**Session complete. Admiral returns tomorrow for SRS review + next lesson.**
