import type { Card } from '$lib/types';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Based on the SuperMemo-2 algorithm for optimal spacing of reviews.
 *
 * Quality ratings:
 * 0 - Total blackout, complete failure
 * 1 - Incorrect response, but recognized upon seeing correct answer
 * 2 - Correct response, but with significant difficulty
 * 3 - Correct response, but with some hesitation
 * 4 - Correct response with ease
 * 5 - Perfect response, immediate recall
 */

export interface SM2Result {
  ease: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
}

/**
 * Calculate next review schedule based on SM-2 algorithm
 *
 * @param card - The card being reviewed
 * @param quality - User's quality rating (0-5)
 * @returns Updated SRS parameters
 */
export function calculateSM2(card: Card, quality: 0 | 1 | 2 | 3 | 4 | 5): SM2Result {
  let { ease, interval, repetitions } = card;

  // If quality < 3, reset the card
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // Increment successful repetitions
    repetitions += 1;

    // Calculate interval based on repetition count
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
  }

  // Update ease factor
  ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Minimum ease factor is 1.3
  if (ease < 1.3) {
    ease = 1.3;
  }

  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ease: Math.round(ease * 100) / 100, // Round to 2 decimal places
    interval,
    repetitions,
    nextReview
  };
}

/**
 * Map simplified user response to quality rating
 *
 * @param response - 'again' | 'hard' | 'good' | 'easy'
 * @returns Quality rating (0-5)
 */
export function mapResponseToQuality(response: 'again' | 'hard' | 'good' | 'easy'): 0 | 1 | 2 | 3 | 4 | 5 {
  const mapping = {
    again: 0,
    hard: 2,
    good: 4,
    easy: 5
  };

  return mapping[response] as 0 | 1 | 2 | 3 | 4 | 5;
}

/**
 * Get the next review interval description in German
 *
 * @param days - Number of days until next review
 * @returns Human-readable description
 */
export function getIntervalDescription(days: number): string {
  if (days < 1) {
    return 'Weniger als 1 Tag';
  } else if (days === 1) {
    return '1 Tag';
  } else if (days < 7) {
    return `${days} Tage`;
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? '1 Woche' : `${weeks} Wochen`;
  } else if (days < 365) {
    const months = Math.floor(days / 30);
    return months === 1 ? '1 Monat' : `${months} Monate`;
  } else {
    const years = Math.floor(days / 365);
    return years === 1 ? '1 Jahr' : `${years} Jahre`;
  }
}

/**
 * Calculate days until next review
 *
 * @param nextReview - The next review date
 * @returns Number of days (can be negative if overdue)
 */
export function getDaysUntilReview(nextReview: Date): number {
  const now = new Date();
  const diffTime = nextReview.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Check if a card is due for review
 *
 * @param card - The card to check
 * @returns True if the card should be reviewed now
 */
export function isCardDue(card: Card): boolean {
  return card.nextReview <= new Date();
}

/**
 * Get card difficulty category based on ease factor
 *
 * @param ease - The card's ease factor
 * @returns Difficulty category
 */
export function getCardDifficulty(ease: number): 'easy' | 'medium' | 'hard' {
  if (ease >= 2.3) return 'easy';
  if (ease >= 1.8) return 'medium';
  return 'hard';
}

/**
 * Get card mastery level based on interval
 *
 * @param interval - Days until next review
 * @returns Mastery level
 */
export function getCardMastery(interval: number): 'learning' | 'young' | 'mature' | 'mastered' {
  if (interval < 7) return 'learning';
  if (interval < 21) return 'young';
  if (interval < 90) return 'mature';
  return 'mastered';
}
