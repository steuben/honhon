import { addCard, isDatabaseInitialized } from './queries';
import { initialVocabulary } from '$lib/content/vocabulary';

/**
 * Seed the database with initial vocabulary
 */
export async function seedDatabase(): Promise<void> {
  const isInitialized = await isDatabaseInitialized();

  if (isInitialized) {
    console.log('Database already initialized, skipping seed');
    return;
  }

  console.log('Seeding database with initial vocabulary...');

  for (const cardInput of initialVocabulary) {
    await addCard(cardInput);
  }

  console.log(`Successfully seeded ${initialVocabulary.length} vocabulary cards`);
}
