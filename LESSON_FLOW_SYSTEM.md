# Lesson Flow Management System

Complete implementation of the 6-phase lesson flow system for HonHon.

## Architecture Overview

The system consists of three main layers:

1. **State Machine** (`lessonFlow.ts`) - Core business logic
2. **Container Component** (`LessonContainer.svelte`) - Orchestration & UI
3. **Phase Components** - Specialized views for each phase

## File Structure

```
src/lib/
├── lessonFlow.ts                         # State machine and flow logic
├── components/
│   └── lesson/
│       ├── LessonContainer.svelte        # Main orchestrator
│       ├── IntroductionPhase.svelte      # Phase 1: Introduction
│       ├── TeachingPhase.svelte          # Phase 2: Teaching (wrapper)
│       ├── ExercisePhase.svelte          # Phases 3-5: Practice (wrapper)
│       └── ReviewPhase.svelte            # Phase 6: Review
├── db/
│   ├── schema.ts                         # Dexie database schema
│   └── lessonQueries.ts                  # Database operations
└── types/
    └── index.ts                          # TypeScript definitions

src/routes/
└── lektion/
    └── [lessonId]/
        └── +page.svelte                  # Lesson route page
```

## Core Components

### 1. State Machine (`lessonFlow.ts`)

The `LessonFlowState` class manages lesson progression through 6 phases:

#### Phase Flow

```
introduction → teaching → guided-practice → 
independent-practice → assessment → review
```

#### Key Methods

```typescript
// Initialize
const flow = await createLessonFlow(lesson);

// Advance phases
await flow.completePhase(); // Returns next phase or null

// Track progress
await flow.updateProgress(75); // 0-100
await flow.recordExercise(true); // true/false for correct/incorrect

// Complete lesson
await flow.completeLesson(85); // Pass assessment score

// Query state
flow.getCurrentPhase(); // Get current phase
flow.canAdvance(); // Check if can proceed
flow.getOverallProgress(); // 0-100 for entire lesson
flow.getTimeSpent(); // Minutes spent
flow.getAccuracy(); // Percentage correct
```

#### Phase Configuration

Each phase has:
- `name`: Display name
- `nextPhase`: What comes next (or null for end)
- `canPause`: Whether user can pause/exit
- `canSkip`: Whether phase can be skipped
- `requiredProgress`: Percentage needed to advance (0-100)
- `timeEstimateMinutes`: Estimated duration

### 2. Lesson Container (`LessonContainer.svelte`)

Main orchestrator component that:
- Manages phase state machine
- Renders appropriate phase component
- Tracks and saves progress
- Shows progress UI (breadcrumb, percentage)
- Handles pause/resume/exit

#### Props

```typescript
interface Props {
  lesson: Lesson;          // Complete lesson content
  onExit?: () => void;     // Called when user exits
}
```

#### Features

- **Phase Progress Bar**: Visual breadcrumb showing all 6 phases
- **Overall Progress**: Percentage bar (0-100%)
- **Time Tracking**: Shows elapsed time
- **Auto-save**: Saves progress every 30 seconds
- **Exit Dialog**: Confirms exit with progress preservation
- **Pause State**: Can pause/resume (except during assessment)

### 3. Phase Components

#### IntroductionPhase.svelte

Shows:
- Lesson title and number
- Learning objectives
- Motivation (why it matters)
- Cultural note (if available)
- Estimated time, level, prerequisites
- "Start Lesson" button

#### TeachingPhase.svelte

Wrapper around existing `TeachingPhase.svelte` component.
- Displays teaching sections
- Shows vocabulary
- Progress through sections
- "Continue to Practice" button

#### ExercisePhase.svelte

Wrapper around existing `ExercisePhase.svelte` component.
Handles three modes:
- **guided**: With hints, focused on learning
- **independent**: Without hints, practice
- **assessment**: Timed, no hints, scoring

Tracks:
- Individual exercise attempts
- Accuracy percentage
- Time spent
- Progress through exercises

#### ReviewPhase.svelte

Shows:
- Pass/fail badge
- Performance stats (score, accuracy, time, exercises)
- Lesson summary
- Feedback (encouragement or retry advice)
- Weak areas (if applicable)
- Next steps (next lesson or retry)

## Phase Transition Rules

### 1. Introduction → Teaching
**Trigger**: User clicks "Start Lesson"  
**Requirements**: None

### 2. Teaching → Guided Practice
**Trigger**: User clicks "Continue to Practice"  
**Requirements**: View all teaching sections & vocabulary

### 3. Guided Practice → Independent Practice
**Trigger**: Complete all guided exercises  
**Requirements**: 100% of exercises attempted

### 4. Independent Practice → Assessment
**Trigger**: Complete all independent exercises  
**Requirements**: 100% of exercises attempted

### 5. Assessment → Review
**Trigger**: Complete assessment  
**Requirements**: 
- Score ≥ 70% → Pass (proceed to review)
- Score < 70% → Option to retry or review

### 6. Review → Exit
**Trigger**: User chooses next action  
**Options**:
- Go to next lesson (if passed)
- Retry lesson (if failed)
- Back to lesson list

## State Persistence

### Database Schema

```typescript
interface LessonProgress {
  id?: number;
  lessonId: string;
  phase: LessonPhase;
  startedAt: Date;
  completedAt?: Date;
  timeSpentSeconds: number;
  
  // Phase tracking
  phasesCompleted: LessonPhase[];
  currentPhaseProgress: number;  // 0-100
  
  // Performance
  exercisesAttempted: number;
  exercisesCorrect: number;
  accuracy: number;
  
  // Assessment
  assessmentPassed: boolean;
  assessmentScore: number;
  
  // Status
  status: 'not-started' | 'in-progress' | 'completed';
}
```

### Auto-save Strategy

1. **Every 30 seconds**: Time tracking updated
2. **After each exercise**: Stats updated
3. **Phase completion**: Progress saved to database
4. **On exit/pause**: Current state persisted
5. **On page unload**: Final save attempt

### Resume Capability

Users can:
- Close browser mid-lesson
- Switch devices (if using server sync)
- Resume from exact phase and progress

## Usage Example

### Creating a Lesson Route

```typescript
// src/routes/lektion/[lessonId]/+page.svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import LessonContainer from '$lib/components/lesson/LessonContainer.svelte';
  import type { Lesson } from '$lib/types';

  let lesson = $state<Lesson | null>(null);

  onMount(async () => {
    const lessonId = $page.params.lessonId;
    const module = await import(`$lib/content/${lessonId}`);
    lesson = module.default;
  });

  function handleExit() {
    goto('/lernen');
  }
</script>

{#if lesson}
  <LessonContainer {lesson} onExit={handleExit} />
{/if}
```

### Lesson Content Structure

Lessons must conform to the `Lesson` type:

```typescript
interface Lesson {
  meta: {
    id: string;
    number: number;
    title: string;
    titleGerman: string;
    objectives: string[];
    estimatedMinutes: number;
    level: 'A1' | 'A2' | 'B1' | 'B2';
    prerequisites: string[];
    tags: string[];
  };

  introduction: {
    objectives: string[];
    motivation: string;
    culturalNote?: string;
  };

  teaching: {
    sections: TeachingSection[];
    vocabulary: CardInput[];
  };

  guidedPractice: Exercise[];
  independentPractice: Exercise[];
  assessment: Exercise[];

  review: {
    summary: string[];
    nextLesson?: string;
  };
}
```

## API Reference

### LessonFlowState Class

```typescript
class LessonFlowState {
  // Initialize
  async startLesson(): Promise<LessonProgress>
  
  // Phase management
  getCurrentPhase(): LessonPhase
  getPhaseConfig(phase?: LessonPhase): PhaseConfig
  canAdvance(): boolean
  async completePhase(): Promise<LessonPhase | null>
  
  // Progress tracking
  async updateProgress(progress: number): Promise<void>
  async recordExercise(correct: boolean): Promise<void>
  
  // Completion
  async completeLesson(assessmentScore: number): Promise<void>
  
  // State queries
  getOverallProgress(): number
  assessmentPassed(): boolean
  getAssessmentScore(): number
  getAccuracy(): number
  getTimeSpent(): number
  getExercisesCompleted(): number
  getEstimatedTimeRemaining(): number
  isComplete(): boolean
  
  // Pause/resume
  async pauseLesson(): Promise<void>
  resumeLesson(): void
}
```

### Helper Functions

```typescript
// Create new lesson flow
createLessonFlow(lesson: Lesson): Promise<LessonFlowState>

// Load existing progress
loadLessonFlow(lesson: Lesson, lessonId: string): Promise<LessonFlowState>

// Phase utilities
getPhaseIndex(phase: LessonPhase): number
getAllPhases(): LessonPhase[]
getPhaseDisplayName(phase: LessonPhase): string
```

### Database Queries (`lessonQueries.ts`)

```typescript
// Start/load
startLesson(lessonId: string): Promise<LessonProgress>
getLessonProgress(lessonId: string): Promise<LessonProgress | undefined>

// Update
updateLessonProgress(id: number, updates: Partial<LessonProgress>): Promise<void>
completePhase(progressId: number, phase: LessonPhase, nextPhase: LessonPhase): Promise<void>
completeLesson(progressId: number, assessmentScore: number): Promise<void>

// Exercise tracking
updateExerciseStats(progressId: number, correct: boolean): Promise<void>
addTimeSpent(progressId: number, seconds: number): Promise<void>

// Queries
getCurrentLesson(): Promise<LessonProgress | undefined>
getCompletedLessons(): Promise<LessonProgress[]>
getLessonStats(): Promise<Stats>

// Management
resetLesson(lessonId: string): Promise<void>
```

## Integration Points

### Existing Components

The system integrates with:

1. **TeachingPhase.svelte** - Base teaching component
2. **ExercisePhase.svelte** - Base exercise component
3. **ExerciseCard.svelte** - Individual exercise renderer
4. **ExerciseFeedback.svelte** - Answer feedback
5. **TeachingSection.svelte** - Teaching content renderer
6. **VocabularyList.svelte** - Vocabulary display

### Database

Uses Dexie (IndexedDB) via:
- `schema.ts` - Database schema definition
- `lessonQueries.ts` - CRUD operations
- `db.lessonProgress` - Progress table

### Routing

Lesson routes follow pattern:
```
/lektion/[lessonId]
```

Where `lessonId` corresponds to lesson content files:
```
src/lib/content/lesson1.ts
src/lib/content/lesson2.ts
...
```

## Styling & CSS Variables

Components use CSS variables for theming:

```css
--color-primary          /* Primary brand color */
--color-primary-dark     /* Hover/active states */
--color-secondary        /* Secondary accents */
--color-success          /* Success states */
--color-warning          /* Warning states */
--color-error            /* Error states */
--color-background       /* Page background */
--color-surface          /* Card/panel background */
--color-border           /* Border color */
--color-hover            /* Hover background */
--color-text-primary     /* Primary text */
--color-text-secondary   /* Secondary text */
```

## Accessibility

### Keyboard Navigation
- Tab through phase steps
- Arrow keys for section navigation
- Enter/Space to activate buttons
- Escape to show exit dialog

### Screen Readers
- Semantic HTML structure
- ARIA labels on interactive elements
- Status announcements for phase changes
- Progress updates announced

### Visual
- High contrast colors
- Focus indicators
- Large touch targets (min 44x44px)
- Responsive text sizing

## Performance Considerations

### State Management
- Local state with Svelte runes ($state, $derived)
- Minimal re-renders via reactive declarations
- Debounced auto-save (30s interval)

### Database
- Indexed queries on lessonId
- Batch updates where possible
- Async operations don't block UI

### Code Splitting
- Phase components loaded on demand
- Lesson content lazy-loaded by route
- Exercise generators dynamically imported

## Testing Checklist

### State Machine
- [ ] Phase transitions work correctly
- [ ] Progress persists across refreshes
- [ ] Can't advance without meeting requirements
- [ ] Assessment pass/fail logic correct
- [ ] Time tracking accurate
- [ ] Exercise stats calculated correctly

### UI Components
- [ ] All phases render correctly
- [ ] Progress bars update in real-time
- [ ] Exit dialog shows only when allowed
- [ ] Pause works (except in assessment)
- [ ] Resume restores correct state
- [ ] Mobile responsive

### Database
- [ ] Progress saves automatically
- [ ] Can resume from saved state
- [ ] Multiple lessons don't conflict
- [ ] Stats aggregate correctly
- [ ] Reset clears properly

### Integration
- [ ] Routes load lessons correctly
- [ ] Phase components receive correct props
- [ ] Exercise results propagate properly
- [ ] Teaching phase completes correctly
- [ ] Assessment scoring works
- [ ] Review shows accurate stats

## Future Enhancements

### Phase Features
- Skip teaching if already familiar (with warning)
- Retry individual exercises in practice phases
- Adaptive difficulty based on performance
- Hints system with progressive disclosure

### Progress Tracking
- Detailed analytics dashboard
- Weak area identification
- Learning curves over time
- Spaced repetition scheduling

### Social Features
- Share progress with friends
- Leaderboards (optional)
- Study groups
- Peer review of pronunciation

### Content
- Video integration in teaching
- Interactive dialogues
- Speech recognition for pronunciation
- AI-generated personalized exercises

## Troubleshooting

### Lesson won't advance
Check:
1. `currentPhaseProgress` is 100
2. `canAdvance()` returns true
3. No errors in console
4. Database connection working

### Progress not saving
Check:
1. Database initialized (`db.open()`)
2. No IndexedDB errors in console
3. `progressId` exists in state
4. Network tab for any failed requests

### Wrong phase showing
Check:
1. `currentPhase` in state
2. Database has correct phase value
3. Phase components properly imported
4. Route params correct

### Time not tracking
Check:
1. Auto-save interval running
2. `pauseLesson()` called on exit
3. Timestamps valid
4. Database updates succeeding

## Contact

For questions or issues with the lesson flow system, contact the HonHon development team.

---

**Version**: 1.0.0  
**Last Updated**: 2024-05-23  
**Author**: Development Team
