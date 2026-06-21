import type { Lesson } from '$lib/types';
import { lesson01 } from './lesson01';

/**
 * Lesson Registry
 *
 * Central registry for all lessons in the curriculum.
 * Each lesson module exports a complete Lesson object.
 */

const lessonRegistry: Record<string, Lesson> = {
  'lesson-01': lesson01,
  // lesson-02 through lesson-12 will be added here as they're created
};

/**
 * Get a lesson by its ID
 */
export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  return lessonRegistry[lessonId] || null;
}

/**
 * Get all available lesson IDs
 */
export function getAvailableLessonIds(): string[] {
  return Object.keys(lessonRegistry);
}

/**
 * Check if a lesson exists
 */
export function lessonExists(lessonId: string): boolean {
  return lessonId in lessonRegistry;
}
