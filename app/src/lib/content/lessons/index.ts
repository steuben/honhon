import type { Lesson } from '$lib/types';
import { lesson01 } from './lesson01';
import { lesson02 } from './lesson02';
import { lesson03 } from './lesson03';
import { lesson04 } from './lesson04';
import { lesson05 } from './lesson05';
import { lesson06 } from './lesson06';
import { lesson07 } from './lesson07';
import { lesson08 } from './lesson08';
import { lesson09 } from './lesson09';
import { lesson10 } from './lesson10';
import { lesson11 } from './lesson11';
import { lesson12 } from './lesson12';

/**
 * Lesson Registry
 *
 * Central registry for all lessons in the curriculum.
 * Each lesson module exports a complete Lesson object.
 */

const lessonRegistry: Record<string, Lesson> = {
  'lesson-01': lesson01,
  'lesson-02': lesson02,
  'lesson-03': lesson03,
  'lesson-04': lesson04,
  'lesson-05': lesson05,
  'lesson-06': lesson06,
  'lesson-07': lesson07,
  'lesson-08': lesson08,
  'lesson-09': lesson09,
  'lesson-10': lesson10,
  'lesson-11': lesson11,
  'lesson-12': lesson12,
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
