// Core vocabulary card structure
export interface Card {
  id: string;
  french: string;
  german: string;
  english?: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'article' | 'preposition' | 'conjunction';
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
  ease: number;              // Easiness factor (1.3 - 2.5)
  interval: number;          // Days until next review
  repetitions: number;       // Successful reviews in a row
  nextReview: Date;          // When to show next
  lastReview?: Date;         // When last reviewed

  // Statistics
  timesReviewed: number;     // Total review count
  timesCorrect: number;      // Correct answer count
  averageQuality: number;    // Average quality rating

  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

// Review record
export interface Review {
  id?: number;
  cardId: string;
  timestamp: Date;
  quality: 0 | 1 | 2 | 3 | 4 | 5;
  questionType: QuestionType;
  responseTime: number;      // Milliseconds
}

// Learning session
export interface Session {
  id?: number;
  timestamp: Date;
  type: 'learning' | 'review';
  cardsStudied: number;
  accuracy: number;          // Percentage
  duration: number;          // Seconds
}

// User settings
export interface Setting {
  key: string;
  value: any;
}

// Question types
export type QuestionType =
  | 'translation-de-fr'      // German → French
  | 'translation-fr-de'      // French → German
  | 'multiple-choice'        // Multiple choice
  | 'fill-blank'             // Fill in the blank
  | 'gender-recognition'     // Masculine or Feminine
  | 'sentence-construction'  // Word ordering
  | 'listening'              // Listening comprehension
  | 'speaking'               // Pronunciation practice
  | 'verb-conjugation'       // Conjugation drills
  | 'dialogue-completion'    // Complete dialogue
  | 'picture-matching';      // Match picture to word

// User progress summary
export interface UserProgress {
  totalCards: number;
  cardsLearned: number;
  cardsMastered: number;
  currentStreak: number;
  longestStreak: number;
  lastActivity: Date;
  accuracyRate: number;
  totalTimeMinutes: number;
}

// Card creation input (without SRS/stats fields)
export interface CardInput {
  id: string;
  french: string;
  german: string;
  english?: string;
  partOfSpeech: Card['partOfSpeech'];
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
}

// ============================================================================
// LESSON SYSTEM TYPES
// ============================================================================

// Lesson phases
export type LessonPhase =
  | 'introduction'
  | 'teaching'
  | 'guided-practice'
  | 'independent-practice'
  | 'assessment'
  | 'review';

// Lesson metadata
export interface LessonMeta {
  id: string;
  number: number;
  title: string;
  titleGerman: string;
  objectives: string[];
  estimatedMinutes: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  prerequisites: string[];  // Lesson IDs
  tags: string[];
}

// Teaching content section
export interface TeachingSection {
  id: string;
  title: string;
  type: 'explanation' | 'example' | 'table' | 'dialogue' | 'tip' | 'comparison';
  content: string;           // Markdown or HTML
  germanExplanation?: string;
  examples?: {
    french: string;
    german: string;
    notes?: string;
  }[];
}

// Exercise definition
export interface Exercise {
  id: string;
  type: QuestionType;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;          // The prompt
  questionGerman?: string;   // German translation if needed
  options?: string[];        // For multiple choice
  correctAnswer: string | string[];  // Can have multiple correct answers
  explanation: string;       // Why this is the answer
  hints?: string[];         // Progressive hints
  audioUrl?: string;        // For listening exercises
  imageUrl?: string;        // For picture exercises
  tags: string[];           // Topics covered
}

// Complete lesson structure
export interface Lesson {
  meta: LessonMeta;

  // Introduction phase
  introduction: {
    objectives: string[];
    motivation: string;      // Why this lesson matters
    culturalNote?: string;
  };

  // Teaching phase
  teaching: {
    sections: TeachingSection[];
    vocabulary: CardInput[];
  };

  // Practice phases
  guidedPractice: Exercise[];
  independentPractice: Exercise[];
  assessment: Exercise[];

  // Review phase
  review: {
    summary: string[];
    nextLesson?: string;     // Next lesson ID
  };
}

// User's lesson progress
export interface LessonProgress {
  id?: number;
  lessonId: string;
  userId?: string;
  phase: LessonPhase;
  startedAt: Date;
  completedAt?: Date;
  timeSpentSeconds: number;

  // Phase completion
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
