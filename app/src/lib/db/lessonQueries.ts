import { db } from './schema';
import type { LessonProgress, LessonPhase } from '$lib/types';

/**
 * Lesson Progress Operations
 */

// Start a new lesson
export async function startLesson(lessonId: string): Promise<LessonProgress> {
  const progress: LessonProgress = {
    lessonId,
    phase: 'introduction',
    startedAt: new Date(),
    timeSpentSeconds: 0,
    phasesCompleted: [],
    currentPhaseProgress: 0,
    exercisesAttempted: 0,
    exercisesCorrect: 0,
    accuracy: 0,
    assessmentPassed: false,
    assessmentScore: 0,
    status: 'in-progress'
  };

  const id = await db.lessonProgress.add(progress);
  return { ...progress, id };
}

// Get lesson progress
export async function getLessonProgress(lessonId: string): Promise<LessonProgress | undefined> {
  return db.lessonProgress
    .where('lessonId')
    .equals(lessonId)
    .first();
}

// Get progress for every lesson, keyed by lessonId
export async function getAllLessonProgress(): Promise<Record<string, LessonProgress>> {
  const all = await db.lessonProgress.toArray();
  const map: Record<string, LessonProgress> = {};
  for (const progress of all) {
    map[progress.lessonId] = progress;
  }
  return map;
}

// Update lesson progress
export async function updateLessonProgress(
  id: number,
  updates: Partial<LessonProgress>
): Promise<void> {
  await db.lessonProgress.update(id, updates);
}

// Complete a phase
export async function completePhase(
  progressId: number,
  phase: LessonPhase,
  nextPhase: LessonPhase
): Promise<void> {
  const progress = await db.lessonProgress.get(progressId);
  if (!progress) return;

  const phasesCompleted = [...progress.phasesCompleted, phase];

  await db.lessonProgress.update(progressId, {
    phase: nextPhase,
    phasesCompleted,
    currentPhaseProgress: 0
  });
}

// Complete entire lesson. Keeps the best score so redoing a lesson with a
// lower result never overwrites a previously achieved higher score.
export async function completeLesson(
  progressId: number,
  assessmentScore: number
): Promise<void> {
  const existing = await db.lessonProgress.get(progressId);
  const bestScore = Math.max(assessmentScore, existing?.assessmentScore ?? 0);

  await db.lessonProgress.update(progressId, {
    completedAt: new Date(),
    assessmentPassed: bestScore >= 70,
    assessmentScore: bestScore,
    status: 'completed',
    phase: 'review'
  });
}

// Get all completed lessons
export async function getCompletedLessons(): Promise<LessonProgress[]> {
  return db.lessonProgress
    .where('status')
    .equals('completed')
    .toArray();
}

// Get current active lesson
export async function getCurrentLesson(): Promise<LessonProgress | undefined> {
  return db.lessonProgress
    .where('status')
    .equals('in-progress')
    .first();
}

// Update exercise statistics
export async function updateExerciseStats(
  progressId: number,
  correct: boolean
): Promise<void> {
  const progress = await db.lessonProgress.get(progressId);
  if (!progress) return;

  const exercisesAttempted = progress.exercisesAttempted + 1;
  const exercisesCorrect = progress.exercisesCorrect + (correct ? 1 : 0);
  const accuracy = (exercisesCorrect / exercisesAttempted) * 100;

  await db.lessonProgress.update(progressId, {
    exercisesAttempted,
    exercisesCorrect,
    accuracy
  });
}

// Add time spent
export async function addTimeSpent(progressId: number, seconds: number): Promise<void> {
  const progress = await db.lessonProgress.get(progressId);
  if (!progress) return;

  await db.lessonProgress.update(progressId, {
    timeSpentSeconds: progress.timeSpentSeconds + seconds
  });
}

// Reset lesson (start over)
export async function resetLesson(lessonId: string): Promise<void> {
  const existing = await getLessonProgress(lessonId);
  if (existing && existing.id) {
    await db.lessonProgress.delete(existing.id);
  }
}

// Get lesson statistics
export async function getLessonStats(): Promise<{
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  averageAccuracy: number;
  totalTimeMinutes: number;
}> {
  const allProgress = await db.lessonProgress.toArray();

  const totalLessons = allProgress.length;
  const completedLessons = allProgress.filter(p => p.status === 'completed').length;
  const inProgressLessons = allProgress.filter(p => p.status === 'in-progress').length;

  const totalAccuracy = allProgress.reduce((sum, p) => sum + p.accuracy, 0);
  const averageAccuracy = totalLessons > 0 ? totalAccuracy / totalLessons : 0;

  const totalTimeMinutes = allProgress.reduce((sum, p) => sum + (p.timeSpentSeconds / 60), 0);

  return {
    totalLessons,
    completedLessons,
    inProgressLessons,
    averageAccuracy,
    totalTimeMinutes
  };
}
