/**
 * Lesson Flow State Machine
 * Manages phase transitions, progress tracking, and lesson orchestration
 */

import type { LessonPhase, LessonProgress, Lesson } from '$lib/types';
import * as lessonQueries from '$lib/db/lessonQueries';

// Phase configuration
interface PhaseConfig {
  name: string;
  nextPhase: LessonPhase | null;
  canPause: boolean;
  canSkip: boolean;
  requiredProgress: number; // 0-100
  timeEstimateMinutes: number;
}

const PHASE_CONFIGS: Record<LessonPhase, PhaseConfig> = {
  introduction: {
    name: 'Einführung',
    nextPhase: 'teaching',
    canPause: true,
    canSkip: false,
    requiredProgress: 0, // Can proceed immediately from introduction
    timeEstimateMinutes: 2
  },
  teaching: {
    name: 'Lehren',
    nextPhase: 'guided-practice',
    canPause: true,
    canSkip: false,
    requiredProgress: 100,
    timeEstimateMinutes: 10
  },
  'guided-practice': {
    name: 'Geführtes Üben',
    nextPhase: 'independent-practice',
    canPause: true,
    canSkip: false,
    requiredProgress: 100,
    timeEstimateMinutes: 8
  },
  'independent-practice': {
    name: 'Selbständiges Üben',
    nextPhase: 'assessment',
    canPause: true,
    canSkip: false,
    requiredProgress: 100,
    timeEstimateMinutes: 10
  },
  assessment: {
    name: 'Bewertung',
    nextPhase: 'review',
    canPause: false, // Cannot pause during assessment
    canSkip: false,
    requiredProgress: 100,
    timeEstimateMinutes: 8
  },
  review: {
    name: 'Zusammenfassung',
    nextPhase: null, // End of lesson
    canPause: true,
    canSkip: false,
    requiredProgress: 0, // Can finish immediately
    timeEstimateMinutes: 3
  }
};

// Lesson flow state machine
export class LessonFlowState {
  private progressId: number | undefined;
  private currentProgress: LessonProgress | null = null;
  private lesson: Lesson;
  private startTime: number = Date.now();
  private phaseStartTime: number = Date.now();

  constructor(lesson: Lesson, progress?: LessonProgress) {
    this.lesson = lesson;
    if (progress) {
      this.currentProgress = progress;
      this.progressId = progress.id;
    }
  }

  // Initialize new lesson
  async startLesson(): Promise<LessonProgress> {
    // Create initial progress state immediately
    const initialProgress: LessonProgress = {
      id: Date.now(), // Temporary ID
      lessonId: this.lesson.meta.id,
      phase: 'introduction',
      currentPhaseProgress: 0,
      phasesCompleted: [],
      assessmentScore: 0,
      assessmentPassed: false,
      timeSpentSeconds: 0,
      exercisesAttempted: 0,
      exercisesCorrect: 0,
      accuracy: 0,
      startedAt: new Date(),
      status: 'in-progress'
    };

    this.currentProgress = initialProgress;
    this.startTime = Date.now();
    this.phaseStartTime = Date.now();

    // Try to save to DB (non-blocking, best-effort)
    try {
      const progress = await lessonQueries.startLesson(this.lesson.meta.id);
      this.currentProgress = progress;
      this.progressId = progress.id;
    } catch (err) {
      console.warn('Failed to save lesson start to DB:', err);
      // Continue anyway with local state
    }

    return this.currentProgress;
  }

  // Get current phase
  getCurrentPhase(): LessonPhase {
    return this.currentProgress?.phase || 'introduction';
  }

  // Get phase configuration
  getPhaseConfig(phase?: LessonPhase): PhaseConfig {
    const p = phase || this.getCurrentPhase();
    return PHASE_CONFIGS[p];
  }

  // Check if can advance to next phase
  canAdvance(): boolean {
    if (!this.currentProgress) return false;

    const config = this.getPhaseConfig();
    const currentProgress = this.currentProgress.currentPhaseProgress;

    return currentProgress >= config.requiredProgress;
  }

  // Move to next phase
  async completePhase(): Promise<LessonPhase | null> {
    if (!this.currentProgress) {
      throw new Error('Kein aktiver Lektionsfortschritt');
    }

    if (!this.canAdvance()) {
      const currentProgress = this.currentProgress.currentPhaseProgress;
      const required = this.getPhaseConfig().requiredProgress;
      console.error(`Cannot advance: progress ${currentProgress} < required ${required}`);
      throw new Error(`Kann nicht fortfahren: Phasenanforderungen nicht erfüllt (${currentProgress}% von ${required}% benötigt)`);
    }

    const currentPhase = this.getCurrentPhase();
    const config = this.getPhaseConfig(currentPhase);
    const nextPhase = config.nextPhase;

    if (!nextPhase) {
      return null; // Lesson complete
    }

    // Update local state FIRST (critical path)
    this.currentProgress = {
      ...this.currentProgress,
      phase: nextPhase,
      phasesCompleted: [...this.currentProgress.phasesCompleted, currentPhase],
      currentPhaseProgress: 0
    };

    // Try to save to DB (non-blocking, best-effort)
    if (this.progressId) {
      try {
        await lessonQueries.completePhase(this.progressId, currentPhase, nextPhase);
        await this.recordPhaseTime();
      } catch (err) {
        console.warn('Failed to save phase completion to DB:', err);
        // Continue anyway - local state is what matters
      }
    }

    this.phaseStartTime = Date.now();

    return nextPhase;
  }

  // Update phase progress (0-100)
  async updateProgress(progress: number): Promise<void> {
    if (!this.currentProgress) return;

    const clampedProgress = Math.max(0, Math.min(100, progress));

    // Update local state FIRST (critical path)
    this.currentProgress = {
      ...this.currentProgress,
      currentPhaseProgress: clampedProgress
    };

    // Try to save to DB (non-blocking, best-effort)
    if (this.progressId) {
      try {
        await lessonQueries.updateLessonProgress(this.progressId, {
          currentPhaseProgress: clampedProgress
        });
      } catch (err) {
        console.warn('Failed to save progress to DB:', err);
        // Continue anyway - local state is what matters
      }
    }
  }

  // Record exercise attempt
  async recordExercise(correct: boolean): Promise<void> {
    // Update local state immediately
    if (this.currentProgress) {
      const currentAttempts = this.currentProgress.exercisesAttempted || 0;
      const currentCorrect = this.currentProgress.exercisesCorrect || 0;

      this.currentProgress = {
        ...this.currentProgress,
        exercisesAttempted: currentAttempts + 1,
        exercisesCorrect: correct ? currentCorrect + 1 : currentCorrect,
        accuracy: ((correct ? currentCorrect + 1 : currentCorrect) / (currentAttempts + 1)) * 100
      };
    }

    // Try to save to DB (non-blocking, best-effort)
    if (this.progressId) {
      try {
        await lessonQueries.updateExerciseStats(this.progressId, correct);
      } catch (err) {
        console.warn('Failed to save exercise stats to DB:', err);
      }
    }
  }

  // Complete entire lesson
  async completeLesson(assessmentScore: number): Promise<void> {
    if (!this.progressId) return;

    await lessonQueries.completeLesson(this.progressId, assessmentScore);
    await this.recordPhaseTime();

    if (this.currentProgress) {
      this.currentProgress = {
        ...this.currentProgress,
        completedAt: new Date(),
        assessmentPassed: assessmentScore >= 70,
        assessmentScore,
        status: 'completed',
        phase: 'review'
      };
    }
  }

  // Pause lesson (save time)
  async pauseLesson(): Promise<void> {
    await this.recordPhaseTime();
  }

  // Resume lesson
  resumeLesson(): void {
    this.phaseStartTime = Date.now();
  }

  // Record time spent in current phase
  private async recordPhaseTime(): Promise<void> {
    if (!this.progressId) return;

    const elapsedSeconds = Math.floor((Date.now() - this.phaseStartTime) / 1000);
    await lessonQueries.addTimeSpent(this.progressId, elapsedSeconds);
  }

  // Get overall lesson progress percentage
  getOverallProgress(): number {
    if (!this.currentProgress) return 0;

    const totalPhases = Object.keys(PHASE_CONFIGS).length;
    const completedPhases = this.currentProgress.phasesCompleted.length;
    const currentPhaseProgress = this.currentProgress.currentPhaseProgress / 100;

    return ((completedPhases + currentPhaseProgress) / totalPhases) * 100;
  }

  // Check if assessment was passed
  assessmentPassed(): boolean {
    return this.currentProgress?.assessmentPassed || false;
  }

  // Get assessment score
  getAssessmentScore(): number {
    return this.currentProgress?.assessmentScore || 0;
  }

  // Get current accuracy
  getAccuracy(): number {
    return this.currentProgress?.accuracy || 0;
  }

  // Get time spent (minutes)
  getTimeSpent(): number {
    if (!this.currentProgress) return 0;
    return Math.floor(this.currentProgress.timeSpentSeconds / 60);
  }

  // Get exercises completed
  getExercisesCompleted(): number {
    return this.currentProgress?.exercisesAttempted || 0;
  }

  // Get current progress object
  getProgress(): LessonProgress | null {
    return this.currentProgress;
  }

  // Calculate estimated time remaining
  getEstimatedTimeRemaining(): number {
    const currentPhase = this.getCurrentPhase();
    const phaseIndex = Object.keys(PHASE_CONFIGS).indexOf(currentPhase);

    let remainingMinutes = 0;
    Object.entries(PHASE_CONFIGS).forEach(([phase, config], index) => {
      if (index > phaseIndex) {
        remainingMinutes += config.timeEstimateMinutes;
      } else if (index === phaseIndex) {
        // Add remaining portion of current phase
        const currentProgress = this.currentProgress?.currentPhaseProgress || 0;
        remainingMinutes += config.timeEstimateMinutes * (1 - currentProgress / 100);
      }
    });

    return Math.ceil(remainingMinutes);
  }

  // Check if lesson is complete
  isComplete(): boolean {
    return this.currentProgress?.status === 'completed';
  }
}

// Helper functions for creating and loading lesson state

export async function createLessonFlow(lesson: Lesson): Promise<LessonFlowState> {
  const existingProgress = await lessonQueries.getLessonProgress(lesson.meta.id);

  const flow = new LessonFlowState(lesson, existingProgress);

  if (!existingProgress) {
    await flow.startLesson();
  }

  return flow;
}

export async function loadLessonFlow(lesson: Lesson, lessonId: string): Promise<LessonFlowState> {
  const progress = await lessonQueries.getLessonProgress(lessonId);
  return new LessonFlowState(lesson, progress);
}

export function getPhaseIndex(phase: LessonPhase): number {
  return Object.keys(PHASE_CONFIGS).indexOf(phase);
}

export function getAllPhases(): LessonPhase[] {
  return Object.keys(PHASE_CONFIGS) as LessonPhase[];
}

export function getPhaseDisplayName(phase: LessonPhase): string {
  return PHASE_CONFIGS[phase].name;
}
