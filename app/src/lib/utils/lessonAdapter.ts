/**
 * Lesson Content Adapter
 *
 * Converts legacy lesson content format to new Lesson type structure.
 * This is a temporary adapter until all lesson content is migrated.
 */

import type { Lesson, TeachingSection, Exercise, CardInput } from '$lib/types';

/**
 * Adapt legacy lesson1 format to new Lesson structure
 *
 * @param legacyLesson - Old format lesson object
 * @returns Properly structured Lesson object
 */
export function adaptLesson1(legacyLesson: any): Lesson {
  // Extract metadata
  const meta = {
    id: 'lesson1',
    number: 1,
    title: legacyLesson.metadata?.title || 'First Steps in French',
    titleGerman: legacyLesson.metadata?.titleGerman || 'Erste Schritte auf Französisch',
    objectives: legacyLesson.metadata?.objectives || [],
    estimatedMinutes: parseEstimatedTime(legacyLesson.metadata?.estimatedTime),
    level: 'A1' as const,
    prerequisites: legacyLesson.metadata?.prerequisites || [],
    tags: ['beginner', 'pronunciation', 'grammar']
  };

  // Convert teaching sections
  const teachingSections: TeachingSection[] = legacyLesson.pronunciation?.sections?.map((section: any, index: number) => ({
    id: section.id || `section-${index}`,
    title: section.title || '',
    type: 'explanation' as const,
    content: section.content || '',
    examples: section.examples?.map((ex: any) => ({
      french: ex.word || '',
      german: ex.comparison || '',
      notes: ex.pronunciation || ''
    })) || []
  })) || [];

  // Add additional teaching sections if they exist
  if (legacyLesson.pronouns) {
    teachingSections.push({
      id: 'pronouns',
      title: legacyLesson.pronouns.title || 'Personal Pronouns',
      type: 'table',
      content: JSON.stringify(legacyLesson.pronouns),
      examples: []
    });
  }

  if (legacyLesson.verbEtre) {
    teachingSections.push({
      id: 'etre',
      title: legacyLesson.verbEtre.title || 'The Verb Être',
      type: 'example',
      content: JSON.stringify(legacyLesson.verbEtre),
      examples: []
    });
  }

  if (legacyLesson.greetings) {
    teachingSections.push({
      id: 'greetings',
      title: legacyLesson.greetings.title || 'Greetings',
      type: 'dialogue',
      content: JSON.stringify(legacyLesson.greetings),
      examples: []
    });
  }

  if (legacyLesson.numbers) {
    teachingSections.push({
      id: 'numbers',
      title: legacyLesson.numbers.title || 'Numbers 1-10',
      type: 'table',
      content: JSON.stringify(legacyLesson.numbers),
      examples: []
    });
  }

  // Vocabulary
  const vocabulary: CardInput[] = legacyLesson.vocabulary || [];

  // Generate exercises from legacy format
  const allExercises: Exercise[] = generateExercisesFromLegacy(legacyLesson.exercises);

  // Split exercises into phases
  const totalExercises = allExercises.length;
  const guidedCount = Math.ceil(totalExercises * 0.3);
  const independentCount = Math.ceil(totalExercises * 0.4);

  const guidedPractice = allExercises.slice(0, guidedCount);
  const independentPractice = allExercises.slice(guidedCount, guidedCount + independentCount);
  const assessment = allExercises.slice(guidedCount + independentCount);

  // Create lesson structure
  const lesson: Lesson = {
    meta,

    introduction: {
      objectives: meta.objectives,
      motivation: legacyLesson.metadata?.motivation ||
        'Start your French journey with solid foundations in pronunciation and basic grammar.',
      culturalNote: legacyLesson.culturalNotes?.[0]?.content
    },

    teaching: {
      sections: teachingSections,
      vocabulary
    },

    guidedPractice,
    independentPractice,
    assessment,

    review: {
      summary: [
        'French alphabet and pronunciation rules',
        'Personal pronouns (je, tu, il/elle, nous, vous, ils/elles)',
        'Conjugation of être (to be)',
        'Basic greetings and introductions',
        'Numbers 1-10'
      ],
      nextLesson: 'lesson2'
    }
  };

  return lesson;
}

/**
 * Parse estimated time string to minutes
 */
function parseEstimatedTime(timeString?: string): number {
  if (!timeString) return 60;

  const match = timeString.match(/(\d+)/);
  return match ? parseInt(match[1]) : 60;
}

/**
 * Generate Exercise objects from legacy exercise format
 */
function generateExercisesFromLegacy(legacyExercises: any): Exercise[] {
  if (!legacyExercises || !Array.isArray(legacyExercises)) {
    return generateDefaultExercises();
  }

  return legacyExercises.map((ex: any, index: number) => ({
    id: ex.id || `exercise-${index}`,
    type: ex.type || 'translation-de-fr',
    difficulty: ex.difficulty || 'easy',
    question: ex.question || '',
    questionGerman: ex.questionGerman,
    options: ex.options,
    correctAnswer: ex.correctAnswer || ex.answer || '',
    explanation: ex.explanation || '',
    hints: ex.hints || [],
    tags: ex.tags || []
  }));
}

/**
 * Generate default exercises if none exist
 */
function generateDefaultExercises(): Exercise[] {
  return [
    {
      id: 'ex-1',
      type: 'translation-de-fr',
      difficulty: 'easy',
      question: 'How do you say "I am" in French?',
      questionGerman: 'Wie sagt man "ich bin" auf Französisch?',
      correctAnswer: 'je suis',
      explanation: 'The first person singular of être is "je suis".',
      hints: ['Think about the pronoun "je" (I)'],
      tags: ['être', 'conjugation']
    },
    {
      id: 'ex-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      question: 'Which is the correct conjugation of être for "you" (informal)?',
      questionGerman: 'Welche ist die richtige Konjugation von être für "du"?',
      options: ['tu es', 'tu est', 'tu suis', 'tu sommes'],
      correctAnswer: 'tu es',
      explanation: 'The informal "you" (tu) takes "es" with être.',
      hints: [],
      tags: ['être', 'conjugation']
    },
    {
      id: 'ex-3',
      type: 'translation-fr-de',
      difficulty: 'medium',
      question: 'Translate: "Nous sommes"',
      correctAnswer: 'wir sind',
      explanation: '"Nous sommes" means "we are" in English, "wir sind" in German.',
      hints: ['Nous = wir', 'sommes is the plural form'],
      tags: ['être', 'translation']
    }
  ];
}

/**
 * Create a minimal example lesson for testing
 */
export function createExampleLesson(): Lesson {
  return {
    meta: {
      id: 'example',
      number: 0,
      title: 'Example Lesson',
      titleGerman: 'Beispiellektion',
      objectives: [
        'Test the lesson flow system',
        'Understand the six phases',
        'Practice with sample exercises'
      ],
      estimatedMinutes: 30,
      level: 'A1',
      prerequisites: [],
      tags: ['example', 'test']
    },

    introduction: {
      objectives: [
        'Test the lesson flow system',
        'Understand the six phases',
        'Practice with sample exercises'
      ],
      motivation: 'This is an example lesson to demonstrate the flow system.',
      culturalNote: 'This is a test lesson with minimal content.'
    },

    teaching: {
      sections: [
        {
          id: 'section-1',
          title: 'Introduction',
          type: 'explanation',
          content: 'This is the first teaching section.',
          examples: [
            { french: 'Bonjour', german: 'Hallo' }
          ]
        }
      ],
      vocabulary: [
        {
          id: 'vocab-1',
          french: 'bonjour',
          german: 'Hallo',
          english: 'hello',
          partOfSpeech: 'noun',
          exampleSentence: {
            french: 'Bonjour!',
            german: 'Hallo!'
          },
          level: 'A1',
          tags: ['greeting']
        }
      ]
    },

    guidedPractice: generateDefaultExercises().slice(0, 2),
    independentPractice: generateDefaultExercises().slice(0, 2),
    assessment: generateDefaultExercises().slice(0, 3),

    review: {
      summary: [
        'Completed example lesson',
        'Tested all six phases',
        'Ready for real content'
      ],
      nextLesson: 'lesson1'
    }
  };
}
