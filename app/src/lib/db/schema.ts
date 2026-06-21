import Dexie, { type EntityTable } from 'dexie';
import type { Card, Review, Session, Setting, LessonProgress } from '$lib/types';

// Database class
export class HonHonDB extends Dexie {
  cards!: EntityTable<Card, 'id'>;
  reviews!: EntityTable<Review, 'id'>;
  sessions!: EntityTable<Session, 'id'>;
  settings!: EntityTable<Setting, 'key'>;
  lessonProgress!: EntityTable<LessonProgress, 'id'>;

  constructor() {
    super('HonHonDB');

    this.version(1).stores({
      cards: 'id, french, level, *tags, nextReview, createdAt',
      reviews: '++id, cardId, timestamp, quality',
      sessions: '++id, timestamp, type',
      settings: 'key'
    });

    // Version 2: Add lesson progress tracking
    this.version(2).stores({
      cards: 'id, french, level, *tags, nextReview, createdAt',
      reviews: '++id, cardId, timestamp, quality',
      sessions: '++id, timestamp, type',
      settings: 'key',
      lessonProgress: '++id, lessonId, status, startedAt, completedAt'
    });
  }
}

// Export singleton instance
export const db = new HonHonDB();
