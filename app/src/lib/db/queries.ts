import { db } from './schema';
import type { Card, CardInput, Review, Session, UserProgress } from '$lib/types';

/**
 * Card Operations
 */

// Add a new card to the database
export async function addCard(cardInput: CardInput): Promise<Card> {
  const now = new Date();

  const card: Card = {
    ...cardInput,
    ease: 2.5,
    interval: 1,
    repetitions: 0,
    nextReview: now,
    lastReview: undefined,
    timesReviewed: 0,
    timesCorrect: 0,
    averageQuality: 0,
    createdAt: now,
    updatedAt: now
  };

  await db.cards.add(card);
  return card;
}

// Get card by ID
export async function getCard(id: string): Promise<Card | undefined> {
  return db.cards.get(id);
}

// Get all cards
export async function getAllCards(): Promise<Card[]> {
  return db.cards.toArray();
}

// Get cards due for review
export async function getDueCards(limit: number = 20): Promise<Card[]> {
  const now = new Date();
  return db.cards
    .where('nextReview')
    .belowOrEqual(now)
    .limit(limit)
    .toArray();
}

// Get new cards (never reviewed)
export async function getNewCards(limit: number = 5): Promise<Card[]> {
  return db.cards
    .where('repetitions')
    .equals(0)
    .limit(limit)
    .toArray();
}

// Update card after review
export async function updateCard(id: string, updates: Partial<Card>): Promise<void> {
  await db.cards.update(id, {
    ...updates,
    updatedAt: new Date()
  });
}

// Delete card
export async function deleteCard(id: string): Promise<void> {
  await db.cards.delete(id);
}

// Get cards by level
export async function getCardsByLevel(level: 'A1' | 'A2' | 'B1' | 'B2'): Promise<Card[]> {
  return db.cards.where('level').equals(level).toArray();
}

// Search cards
export async function searchCards(query: string): Promise<Card[]> {
  const lowerQuery = query.toLowerCase();
  return db.cards
    .filter(card =>
      card.french.toLowerCase().includes(lowerQuery) ||
      card.german.toLowerCase().includes(lowerQuery) ||
      (card.english && card.english.toLowerCase().includes(lowerQuery))
    )
    .toArray();
}

/**
 * Review Operations
 */

// Add a review record
export async function addReview(review: Omit<Review, 'id'>): Promise<number> {
  return db.reviews.add(review);
}

// Get reviews for a card
export async function getCardReviews(cardId: string): Promise<Review[]> {
  return db.reviews.where('cardId').equals(cardId).toArray();
}

// Get recent reviews
export async function getRecentReviews(limit: number = 50): Promise<Review[]> {
  return db.reviews
    .orderBy('timestamp')
    .reverse()
    .limit(limit)
    .toArray();
}

/**
 * Session Operations
 */

// Add a session record
export async function addSession(session: Omit<Session, 'id'>): Promise<number> {
  return db.sessions.add(session);
}

// Get recent sessions
export async function getRecentSessions(limit: number = 10): Promise<Session[]> {
  return db.sessions
    .orderBy('timestamp')
    .reverse()
    .limit(limit)
    .toArray();
}

// Get sessions within date range
export async function getSessionsByDateRange(start: Date, end: Date): Promise<Session[]> {
  return db.sessions
    .where('timestamp')
    .between(start, end, true, true)
    .toArray();
}

/**
 * Settings Operations
 */

// Get a setting
export async function getSetting(key: string): Promise<any> {
  const setting = await db.settings.get(key);
  return setting?.value;
}

// Set a setting
export async function setSetting(key: string, value: any): Promise<void> {
  await db.settings.put({ key, value });
}

/**
 * Statistics & Progress
 */

// Get user progress summary
export async function getUserProgress(): Promise<UserProgress> {
  const allCards = await db.cards.toArray();
  const recentSessions = await getRecentSessions(7);

  const totalCards = allCards.length;
  const cardsLearned = allCards.filter(c => c.repetitions > 0).length;
  const cardsMastered = allCards.filter(c => c.interval > 21).length;

  // Calculate streak
  const currentStreak = await calculateCurrentStreak();
  const longestStreak = await getSetting('longestStreak') || 0;

  // Get last activity
  const lastSession = recentSessions[0];
  const lastActivity = lastSession?.timestamp || new Date(0);

  // Calculate 7-day accuracy
  const recentReviews = await db.reviews
    .where('timestamp')
    .above(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .toArray();

  const accuracyRate = recentReviews.length > 0
    ? (recentReviews.filter(r => r.quality >= 3).length / recentReviews.length) * 100
    : 0;

  // Calculate total time
  const allSessions = await db.sessions.toArray();
  const totalTimeMinutes = allSessions.reduce((sum, s) => sum + (s.duration / 60), 0);

  return {
    totalCards,
    cardsLearned,
    cardsMastered,
    currentStreak,
    longestStreak,
    lastActivity,
    accuracyRate,
    totalTimeMinutes
  };
}

// Calculate current streak
async function calculateCurrentStreak(): Promise<number> {
  const sessions = await db.sessions.orderBy('timestamp').reverse().toArray();

  if (sessions.length === 0) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streak = 0;
  let currentDate = new Date(today);

  for (const session of sessions) {
    const sessionDate = new Date(session.timestamp);
    sessionDate.setHours(0, 0, 0, 0);

    if (sessionDate.getTime() === currentDate.getTime()) {
      if (streak === 0 || sessionDate.getTime() === today.getTime()) {
        streak++;
      }
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (sessionDate.getTime() < currentDate.getTime()) {
      break;
    }
  }

  return streak;
}

/**
 * Data Export/Import
 */

// Export all data as JSON
export async function exportData(): Promise<string> {
  const cards = await db.cards.toArray();
  const reviews = await db.reviews.toArray();
  const sessions = await db.sessions.toArray();
  const settings = await db.settings.toArray();

  const data = {
    version: 1,
    exportDate: new Date().toISOString(),
    cards,
    reviews,
    sessions,
    settings
  };

  return JSON.stringify(data, null, 2);
}

// Import data from JSON
export async function importData(jsonData: string): Promise<void> {
  const data = JSON.parse(jsonData);

  // Clear existing data
  await db.cards.clear();
  await db.reviews.clear();
  await db.sessions.clear();
  await db.settings.clear();

  // Import new data
  if (data.cards) await db.cards.bulkAdd(data.cards);
  if (data.reviews) await db.reviews.bulkAdd(data.reviews);
  if (data.sessions) await db.sessions.bulkAdd(data.sessions);
  if (data.settings) await db.settings.bulkAdd(data.settings);
}

/**
 * Database Initialization
 */

// Check if database is initialized
export async function isDatabaseInitialized(): Promise<boolean> {
  const count = await db.cards.count();
  return count > 0;
}

// Clear all data
export async function clearAllData(): Promise<void> {
  await db.cards.clear();
  await db.reviews.clear();
  await db.sessions.clear();
  // Keep settings
}
