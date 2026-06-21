# HonHon - Project Plan
## French Learning Tool for Admiral's Personal Use

**Last Updated**: 2026-05-23  
**Commander**: Tom Pullings  
**Status**: Planning Phase - Awaiting Go Order

---

## Mission Parameters

**Primary Objective**: Build a personal French learning tool for absolute beginner (Admiral)  
**Secondary Objective**: Portfolio-quality codebase  
**Constraints**: None (time flexible, budget N/A)  
**Philosophy**: Free, lightweight, evidence-based, tailored

---

## Strategic Direction

### Target User Profile
- **Who**: Admiral (absolute beginner in French)
- **Current Level**: A1 (complete beginner)
- **Goal**: Build foundational French from ground zero
- **Learning Style**: To be discovered through usage
- **German Speaker**: Can leverage contrastive advantages

### Core Principles
1. **Personalized**: Content created specifically for Admiral's learning journey
2. **Lean**: No feature bloat, focus on learning loop
3. **Evidence-Based**: SRS + active recall + comprehensible input
4. **Offline-First**: No dependencies, works anywhere
5. **Portfolio-Worthy**: Clean code, good architecture, demonstrable

---

## Technical Architecture

### Technology Stack

```
Framework:     SvelteKit 2.x (static adapter)
Language:      TypeScript
Database:      IndexedDB (Dexie.js)
Styling:       Tailwind CSS
Audio:         Web Speech API (free TTS) + Google Translate fallback links
PWA:           Vite PWA Plugin
Testing:       Vitest + Playwright
Deployment:    Netlify/Vercel (static, free tier)
```

### Why These Choices?

**SvelteKit**:
- Minimal bundle size (~60KB)
- Excellent DX
- Perfect for SPAs with local data
- TypeScript support out of box

**IndexedDB via Dexie.js**:
- Unlimited local storage
- Perfect for flashcard apps
- Dexie simplifies the API
- Export/import capabilities

**Web Speech API**:
- Built into browsers (Chrome, Edge, Safari)
- FREE
- Good enough for learning
- Can upgrade to native audio later

**Tailwind CSS**:
- Rapid styling
- Consistent design system
- Portfolio-worthy appearance
- Easy to customize

### Architecture Overview

```
/src
  /lib
    /db
      schema.ts          # Dexie database schema
      queries.ts         # Database operations
    /srs
      sm2.ts             # SM-2 algorithm implementation
      scheduler.ts       # Review scheduling logic
    /content
      vocabulary.ts      # Vocabulary data
      lessons.ts         # Lesson structure
      grammar.ts         # Grammar explanations
    /types
      index.ts           # TypeScript definitions
    /components
      Card.svelte        # Flashcard component
      QuestionType.svelte
      ProgressBar.svelte
      AudioButton.svelte
    /stores
      progress.ts        # Learning progress state
      session.ts         # Current session state
  /routes
    +page.svelte         # Home/Dashboard
    /learn
      +page.svelte       # Main learning interface
    /review
      +page.svelte       # Review mode
    /progress
      +page.svelte       # Progress tracking
    /reference
      +page.svelte       # Vocabulary reference
    /settings
      +page.svelte       # Settings
```

---

## Content Strategy

### Initial Vocabulary Corpus (Phase 1: 100 words)

**Selection Criteria**:
- Top 100 most frequent French words
- Essential for A1 level
- Practical daily usage
- Foundation for grammar

**Content Structure per Word**:
```typescript
{
  id: string,
  french: string,
  german: string,
  english: string,  // reference
  partOfSpeech: string,
  gender?: 'm' | 'f',
  exampleSentence: {
    french: string,
    german: string
  },
  notes?: string,  // German-specific hints
  isFalseFriend?: boolean,
  isCognate?: boolean,
  pronunciation?: string,  // IPA or simplified
  level: 'A1' | 'A2' | 'B1' | 'B2',
  tags: string[]
}
```

**Example Entry**:
```typescript
{
  id: "etre-001",
  french: "être",
  german: "sein",
  english: "to be",
  partOfSpeech: "verb",
  exampleSentence: {
    french: "Je suis content.",
    german: "Ich bin zufrieden."
  },
  notes: "Wichtigstes Verb im Französischen. Unregelmäßige Konjugation!",
  level: "A1",
  tags: ["verb", "irregular", "essential"]
}
```

### Grammar Topics (Phase 1)

1. **Pronunciation Basics**
   - French alphabet
   - Nasal vowels (basic awareness)
   - Silent letters
   - Liaison (introduction)

2. **Core Verbs**
   - Être (to be) - full conjugation
   - Avoir (to have) - full conjugation
   - Regular -er verbs (5 examples)

3. **Essential Grammar**
   - Personal pronouns (je, tu, il/elle, nous, vous, ils/elles)
   - Gender basics (le/la, un/une)
   - Plural formation
   - Basic negation (ne...pas)

4. **Practical Phrases**
   - Greetings and goodbyes
   - Basic questions (Comment? Où? Quand? Pourquoi?)
   - Numbers 1-100
   - Days and months

### Question Types

**Type 1: Translation (DE→FR)**
- Show: German word/phrase
- User types: French translation
- Validation: Exact match (with common typo forgiveness)

**Type 2: Translation (FR→DE)**
- Show: French word/phrase
- User types: German translation
- Validation: Exact match

**Type 3: Multiple Choice**
- Show: French word + 4 options in German
- User clicks: Correct German translation
- Distractor generation: Similar words or common errors

**Type 4: Fill in the Blank**
- Show: Sentence with gap: "Je ___ content." (sein)
- User types: "suis"
- Validation: Exact match

**Type 5: Gender Recognition**
- Show: French noun
- User clicks: Masculine or Feminine
- For A1 nouns only

**Distribution**:
- 40% Type 1 (DE→FR translation)
- 30% Type 2 (FR→DE translation)
- 20% Type 3 (Multiple choice)
- 10% Type 4 (Fill in blank)

---

## Learning Algorithm

### Spaced Repetition: SM-2 Implementation

**Algorithm Parameters**:
```typescript
interface CardReview {
  cardId: string,
  ease: number,        // 1.3 - 2.5 (default: 2.5)
  interval: number,    // days until next review
  repetitions: number, // successful reviews in a row
  nextReview: Date,
  lastReview: Date,
  quality: 0 | 1 | 2 | 3 | 4 | 5  // user rating
}
```

**SM-2 Formula**:
```
If quality < 3:
  repetitions = 0
  interval = 1
Else:
  repetitions += 1
  if repetitions == 1:
    interval = 1
  elif repetitions == 2:
    interval = 6
  else:
    interval = interval * ease

ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
if ease < 1.3:
  ease = 1.3
```

**User Rating Mapping**:
- 0 = Total blackout
- 1 = Incorrect, but recognized
- 2 = Correct with significant difficulty
- 3 = Correct with hesitation
- 4 = Correct easily
- 5 = Perfect recall

**Simplified UI Buttons**:
- ❌ "Again" (quality = 0)
- 😕 "Hard" (quality = 2)
- ✅ "Good" (quality = 4)
- 🎯 "Easy" (quality = 5)

### Session Structure

**New Content Session** (Learning Mode):
1. Introduce 5 new cards
2. Each card shown 3 times with increasing difficulty:
   - First: Recognition (multiple choice)
   - Second: Recall (type answer)
   - Third: Context (fill in blank)
3. Immediate feedback on errors
4. Session complete after all 5 mastered

**Review Session**:
1. Select cards due for review (max 20 per session)
2. Randomize order (interleaving)
3. Present with appropriate question type
4. User rates difficulty
5. Algorithm updates next review date

**Daily Workflow**:
- Review due cards first (if any)
- Learn new content (5-10 cards)
- Optional: Extra practice of weak cards

### Progress Tracking

**Metrics to Display**:
- Cards learned (total)
- Cards mastered (interval > 21 days)
- Current streak (days)
- Accuracy rate (rolling 7-day average)
- Time spent today
- Vocabulary size (by CEFR level)

**Dashboard View**:
```
🔥 Streak: 7 days
📚 Vocabulary: 47 words learned, 23 mastered
🎯 Accuracy: 78% (this week)
⏱️ Today: 12 minutes

[Continue Learning] button
[Review Due: 8 cards] button
[Browse Vocabulary] link
```

---

## Audio Strategy

### Approach 1: Web Speech API (Primary)

**Implementation**:
```typescript
const speak = (text: string, lang: string = 'fr-FR') => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.8;  // Slightly slower for learning
  speechSynthesis.speak(utterance);
};
```

**Pros**:
- FREE
- Built into browsers
- No dependencies
- Easy to implement

**Cons**:
- Quality varies by browser
- Not always "perfect" native pronunciation
- Requires online (some browsers)

### Approach 2: Google Translate Link (Fallback)

**Implementation**:
```typescript
const getGoogleTranslateUrl = (word: string) => {
  return `https://translate.google.com/?sl=de&tl=fr&text=${encodeURIComponent(word)}&op=translate`;
};
```

**UI**: Small 🔊 button opens Google Translate in new tab

### Approach 3: Future Enhancement

- Record native speaker audio (Forvo API integration)
- Embed MP3 files for core vocabulary
- Only if needed after testing TTS quality

**Decision**: Start with Web Speech API + Google Translate fallback link

---

## User Interface Design

### Visual Style

**Aesthetic**: Clean, minimal, focused  
**Color Scheme**:
- Primary: Blue (#3B82F6) - trust, learning
- Secondary: Green (#10B981) - success, growth
- Accent: Amber (#F59E0B) - attention, highlights
- Error: Red (#EF4444)
- Neutral: Gray scale

**Typography**:
- Sans-serif: Inter or system-ui
- Monospace: For pronunciation guides

### Key Screens

#### 1. Dashboard
```
┌─────────────────────────────────────┐
│  HonHon - Französisch Lernen        │
├─────────────────────────────────────┤
│                                     │
│  🔥 7 Tage Streak                  │
│  📚 47 Wörter gelernt              │
│  🎯 78% Genauigkeit                │
│                                     │
│  ┌───────────────────────────┐    │
│  │  Weiter lernen (5 neue)   │    │
│  └───────────────────────────┘    │
│                                     │
│  ┌───────────────────────────┐    │
│  │  Wiederholen (8 fällig)   │    │
│  └───────────────────────────┘    │
│                                     │
│  Fortschritt | Vokabeln | Einstellungen │
└─────────────────────────────────────┘
```

#### 2. Learning Screen
```
┌─────────────────────────────────────┐
│  Karte 3 / 5                        │
├─────────────────────────────────────┤
│                                     │
│        Übersetze ins Französische:  │
│                                     │
│              "das Haus"             │
│                                     │
│        ┌─────────────────┐         │
│        │                 │         │
│        └─────────────────┘         │
│                                     │
│          [Überprüfen]               │
│                                     │
│        💡 Tipp: Genus ist männlich │
│        🔊 Aussprache                │
└─────────────────────────────────────┘
```

#### 3. Review Screen (After Answer)
```
┌─────────────────────────────────────┐
│  ✅ Richtig!                        │
├─────────────────────────────────────┤
│                                     │
│  das Haus = la maison               │
│                                     │
│  🔊 Aussprache anhören              │
│                                     │
│  📝 Beispiel:                       │
│  "La maison est grande."            │
│  "Das Haus ist groß."               │
│                                     │
│  Wie schwer war das?                │
│                                     │
│  [❌ Nochmal] [😕 Schwer]          │
│  [✅ Gut] [🎯 Einfach]             │
└─────────────────────────────────────┘
```

#### 4. Progress Screen
```
┌─────────────────────────────────────┐
│  Dein Fortschritt                   │
├─────────────────────────────────────┤
│                                     │
│  📊 Statistik (Letzte 7 Tage)      │
│                                     │
│  [Balkendiagramm: Karten/Tag]      │
│                                     │
│  🎯 Genauigkeit: 78%               │
│  ⏱️ Gesamtzeit: 2h 34min          │
│  📚 Vokabeln:                      │
│     - Gelernt: 47                  │
│     - Gemeistert: 23               │
│     - In Arbeit: 24                │
│                                     │
│  🔥 Längster Streak: 12 Tage      │
│  📅 Aktueller Streak: 7 Tage      │
└─────────────────────────────────────┘
```

#### 5. Vocabulary Reference
```
┌─────────────────────────────────────┐
│  Vokabular-Übersicht               │
├─────────────────────────────────────┤
│  [Suche...........................] │
│                                     │
│  Filter: [Alle ▼] [A1 ✓] [Verb]   │
│                                     │
│  📖 être - sein (Verb)             │
│     ✅ Gemeistert                  │
│     Nächste Wiederholung: 12.06.   │
│                                     │
│  📖 maison (f) - das Haus          │
│     🔄 In Arbeit                   │
│     Nächste Wiederholung: Heute    │
│                                     │
│  📖 avoir - haben (Verb)           │
│     ✅ Gemeistert                  │
│     Nächste Wiederholung: 18.06.   │
│                                     │
│  [Export als JSON]                 │
└─────────────────────────────────────┘
```

### Responsive Design
- Mobile-first approach
- Works on phone (320px+), tablet, desktop
- Touch-friendly buttons (min 44px)
- Keyboard shortcuts for desktop

---

## Development Phases

### Phase 1: Foundation (Week 1-2)
**Goal**: Core learning loop working

**Tasks**:
- [x] Project setup (SvelteKit + TypeScript)
- [ ] IndexedDB schema with Dexie
- [ ] SM-2 algorithm implementation
- [ ] Basic flashcard UI
- [ ] Answer validation logic
- [ ] Progress tracking (basic)
- [ ] 20 vocabulary items (testing data)

**Deliverable**: Can learn and review 20 words with SRS

### Phase 2: Content & Polish (Week 3-4)
**Goal**: Usable for daily learning

**Tasks**:
- [ ] Expand to 100 vocabulary items
- [ ] Multiple question types
- [ ] Web Speech API integration
- [ ] Google Translate fallback links
- [ ] Dashboard with stats
- [ ] Vocabulary reference screen
- [ ] Export/import functionality

**Deliverable**: Complete A1 foundation, ready for daily use

### Phase 3: Enhancement (Week 5-6)
**Goal**: Portfolio quality + nice-to-haves

**Tasks**:
- [ ] PWA setup (offline, installable)
- [ ] Visual design refinement
- [ ] Animations and transitions
- [ ] Achievement system (optional)
- [ ] Settings panel
- [ ] Grammar reference section
- [ ] Testing suite

**Deliverable**: Polished, deployable application

### Phase 4: Expansion (Ongoing)
**Goal**: Grow content as Admiral progresses

**Tasks**:
- [ ] Expand to 500 words (A1-A2)
- [ ] More grammar topics
- [ ] Conjugation practice mode
- [ ] Story mode / reading comprehension
- [ ] Listening exercises
- [ ] Speaking practice (Web Speech Recognition)

**Deliverable**: Growing learning platform

---

## Content Creation Process

### Vocabulary Selection Methodology

**Sources**:
1. French frequency lists (top 1000)
2. CEFR A1 vocabulary requirements
3. Common textbook progressions
4. Admiral's personal interests (can customize)

**Curation Process**:
1. Select word from frequency list
2. Verify CEFR level (A1/A2/B1/B2)
3. Create German translation
4. Write example sentence (both languages)
5. Add German-specific notes if needed
6. Flag false friends and cognates
7. Assign tags and metadata

**Quality Criteria**:
- Natural example sentences (not artificial)
- Practical, everyday usage
- Clear, unambiguous translations
- Helpful context for German speakers

### Grammar Content Structure

**Format**:
```typescript
{
  id: string,
  title: string,
  level: 'A1' | 'A2',
  category: 'verb' | 'noun' | 'adjective' | 'pronunciation' | 'syntax',
  explanation: string,  // In German
  examples: {
    french: string,
    german: string,
    notes?: string
  }[],
  germanComparison?: string,  // Contrastive notes
  commonErrors?: string[],
  practiceCards?: string[]  // Card IDs for practice
}
```

**Example**:
```typescript
{
  id: "etre-conjugation",
  title: "Être - Präsens Konjugation",
  level: "A1",
  category: "verb",
  explanation: "Das Verb 'être' (sein) ist unregelmäßig und eines der wichtigsten Verben im Französischen.",
  examples: [
    {
      french: "Je suis étudiant.",
      german: "Ich bin Student.",
      notes: "1. Person Singular: suis"
    },
    {
      french: "Tu es fatigué.",
      german: "Du bist müde.",
      notes: "2. Person Singular: es"
    }
  ],
  germanComparison: "Ähnlich wie Deutsch wird 'être' mit Adjektiven verwendet: 'Je suis content' = 'Ich bin zufrieden'",
  commonErrors: [
    "❌ Je est (falsch) → ✅ Je suis (richtig)",
    "Nicht mit Deutsch verwechseln: 'je suis' nicht 'je sois'"
  ]
}
```

---

## Data Model

### Database Schema (Dexie.js)

```typescript
// Database definition
class HonHonDB extends Dexie {
  cards!: Table<Card>;
  reviews!: Table<Review>;
  sessions!: Table<Session>;
  settings!: Table<Setting>;

  constructor() {
    super('HonHonDB');
    this.version(1).stores({
      cards: 'id, french, level, *tags, nextReview',
      reviews: '++id, cardId, timestamp, quality',
      sessions: '++id, timestamp, type',
      settings: 'key'
    });
  }
}

// Card interface
interface Card {
  id: string;
  french: string;
  german: string;
  english?: string;
  partOfSpeech: string;
  gender?: 'm' | 'f';
  exampleSentence: {
    french: string;
    german: string;
  };
  notes?: string;
  isFalseFriend?: boolean;
  isCognate?: boolean;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  tags: string[];
  
  // SRS data
  ease: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
  lastReview?: Date;
  
  // Stats
  timesReviewed: number;
  timesCorrect: number;
  averageQuality: number;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

// Review interface
interface Review {
  id?: number;
  cardId: string;
  timestamp: Date;
  quality: 0 | 1 | 2 | 3 | 4 | 5;
  questionType: string;
  responseTime: number;  // milliseconds
}

// Session interface
interface Session {
  id?: number;
  timestamp: Date;
  type: 'learning' | 'review';
  cardsStudied: number;
  accuracy: number;
  duration: number;  // seconds
}

// Settings interface
interface Setting {
  key: string;
  value: any;
}
```

### Initial Data Seed

**20 Core Vocabulary Items** (for Phase 1 testing):

```typescript
const initialVocabulary: Card[] = [
  // Articles
  { french: "le", german: "der/das", partOfSpeech: "article", ... },
  { french: "la", german: "die", partOfSpeech: "article", ... },
  { french: "un", german: "ein", partOfSpeech: "article", gender: "m", ... },
  { french: "une", german: "eine", partOfSpeech: "article", gender: "f", ... },
  
  // Essential verbs
  { french: "être", german: "sein", partOfSpeech: "verb", ... },
  { french: "avoir", german: "haben", partOfSpeech: "verb", ... },
  { french: "faire", german: "machen/tun", partOfSpeech: "verb", ... },
  { french: "aller", german: "gehen", partOfSpeech: "verb", ... },
  
  // Common words
  { french: "je", german: "ich", partOfSpeech: "pronoun", ... },
  { french: "tu", german: "du", partOfSpeech: "pronoun", ... },
  { french: "il", german: "er", partOfSpeech: "pronoun", gender: "m", ... },
  { french: "elle", german: "sie", partOfSpeech: "pronoun", gender: "f", ... },
  { french: "nous", german: "wir", partOfSpeech: "pronoun", ... },
  { french: "vous", german: "ihr/Sie", partOfSpeech: "pronoun", ... },
  
  // Nouns
  { french: "maison", german: "Haus", partOfSpeech: "noun", gender: "f", ... },
  { french: "chat", german: "Katze", partOfSpeech: "noun", gender: "m", ... },
  { french: "chien", german: "Hund", partOfSpeech: "noun", gender: "m", ... },
  
  // Adjectives
  { french: "bon", german: "gut", partOfSpeech: "adjective", ... },
  { french: "grand", german: "groß", partOfSpeech: "adjective", ... },
  { french: "petit", german: "klein", partOfSpeech: "adjective", ... }
];
```

---

## Testing Strategy

### Unit Tests (Vitest)
- SRS algorithm correctness
- Answer validation logic
- Database operations
- State management

### Integration Tests
- Learning session flow
- Review scheduling
- Progress tracking
- Data persistence

### E2E Tests (Playwright)
- Complete user journey
- Cross-browser compatibility
- PWA functionality
- Offline mode

### User Testing
- Admiral uses daily for 2 weeks
- Collect feedback on UX
- Identify pain points
- Iterate based on usage

---

## Deployment Strategy

### Hosting
**Provider**: Netlify or Vercel  
**Tier**: Free  
**Build**: SvelteKit static adapter

**Build Command**: `npm run build`  
**Output Directory**: `build/`

### Domain
- Option 1: Netlify subdomain (honhon.netlify.app)
- Option 2: Custom domain (honhon.app) - if desired
- Option 3: Local only (no deployment)

### CI/CD
- Git push to main branch
- Automatic build and deploy
- Preview deployments for branches

### Versioning
- Semantic versioning (0.1.0 → 0.2.0 → 1.0.0)
- Changelog maintained
- Git tags for releases

---

## Success Criteria

### MVP Success (Phase 2 Complete)
- [ ] Admiral can learn 100 A1 vocabulary items
- [ ] SRS scheduling works correctly
- [ ] Progress tracked accurately
- [ ] Works offline (PWA)
- [ ] Can export/import data
- [ ] Zero bugs in core learning loop

### Long-term Success (6 months)
- [ ] Admiral at A2 level (500+ words)
- [ ] Daily usage habit established
- [ ] Portfolio-quality code
- [ ] Could be shown to potential employers/clients
- [ ] Extensible for other learners (if desired)

### Quality Metrics
- **Performance**: Time to Interactive < 2 seconds
- **Bundle Size**: Total < 200KB (compressed)
- **Test Coverage**: > 80% for critical paths
- **Accessibility**: WCAG 2.1 AA compliant
- **Code Quality**: No linting errors, TypeScript strict mode

---

## Risk Assessment

### Technical Risks
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| IndexedDB browser compatibility | High | Low | Fallback to LocalStorage |
| SRS algorithm too aggressive | Medium | Medium | Make intervals configurable |
| Content creation bottleneck | Medium | High | Start small (100 words), iterate |
| Web Speech API quality poor | Low | Medium | Google Translate fallback |

### User Risks
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Admiral loses motivation | High | Low | Make sessions short, rewarding |
| Too difficult for beginner | High | Medium | Start very easy, build gradually |
| Not enough content | Medium | Medium | Regular content additions |
| Doesn't fit learning style | Medium | Medium | Iterate based on feedback |

---

## Next Steps

### Immediate Actions (This Week)

1. **Get Approval**: Admiral reviews and approves this plan
2. **Setup Project**: Initialize SvelteKit + TypeScript repo
3. **Database Schema**: Implement Dexie.js schema
4. **SM-2 Algorithm**: Code and test SRS logic
5. **Basic UI**: Flashcard component with answer input
6. **Initial Data**: Create 20 vocabulary items

### Decision Points

**Before starting, confirm**:
- ✅ Tech stack approved (SvelteKit + IndexedDB + TTS)
- ✅ Audio strategy approved (Web Speech API + Google Translate link)
- ✅ German interface for Admiral (UI in German)
- ? Where to host the repo (GitHub? Private? Public?)
- ? Deployment preference (Netlify vs local only vs other)
- ? Any specific vocabulary priorities (topics of interest)

---

## Open Questions for Admiral

1. **Repository**: GitHub public (for portfolio) or private?
2. **UI Language**: Full German interface, or mixed DE/EN?
3. **Deployment**: Want it deployed online, or local only for now?
4. **Content Priorities**: Any specific topics/vocabulary to prioritize? (travel, tech, cooking, etc.)
5. **Learning Schedule**: Planning daily sessions? How much time per day?
6. **Existing Knowledge**: Any prior French exposure to account for?

---

## Commander's Assessment

Sir, this plan represents a focused, achievable mission. The technology choices are solid, the pedagogy is evidence-based, and the scope is appropriate for a personal learning tool that can also serve as a portfolio piece.

**Estimated Timeline**:
- Phase 1 (Core): 2-3 weeks
- Phase 2 (Usable): 1-2 weeks  
- Phase 3 (Polish): 1-2 weeks
- **Total to MVP**: 4-7 weeks of part-time work

**Key Strengths**:
- No external dependencies (offline-first)
- Scalable content model
- Proven learning algorithms
- Clean, maintainable codebase
- Portfolio-worthy architecture

**Ready to proceed on your command, Admiral.**

What are your orders? Shall I:
1. Answer remaining open questions
2. Set up the project and begin Phase 1
3. Create more detailed specifications for any section
4. Something else entirely

Your call, sir.
