import type { Exercise, Card, CardInput, QuestionType } from '$lib/types';

/**
 * Exercise Generators
 *
 * Functions to programmatically generate exercises from vocabulary cards
 * and lesson content.
 */

// Generate translation exercise (German → French)
export function generateTranslationDEtoFR(
  card: Card | CardInput,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  return {
    id: `trans-de-fr-${card.id}`,
    type: 'translation-de-fr',
    difficulty,
    question: `Übersetze ins Französische: **${card.german}**`,
    correctAnswer: card.french,
    explanation: `Die richtige Antwort ist "**${card.french}**". ${card.notes || ''}`,
    hints: [
      `Das Wort ist ${card.partOfSpeech === 'noun' ? (card.gender === 'm' ? 'männlich' : 'weiblich') : `ein ${card.partOfSpeech}`}`,
      `Beispiel: ${card.exampleSentence.french} = ${card.exampleSentence.german}`
    ],
    tags: ['translation', card.partOfSpeech, ...(card.tags || [])]
  };
}

// Generate translation exercise (French → German)
export function generateTranslationFRtoDE(
  card: Card | CardInput,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  return {
    id: `trans-fr-de-${card.id}`,
    type: 'translation-fr-de',
    difficulty,
    question: `Was bedeutet "**${card.french}**" auf Deutsch?`,
    correctAnswer: card.german,
    explanation: `Die richtige Antwort ist "**${card.german}**". ${card.notes || ''}`,
    hints: [
      card.exampleSentence ? `Im Satz: ${card.exampleSentence.french}` : '',
      card.notes || ''
    ].filter(Boolean),
    tags: ['translation', card.partOfSpeech, ...(card.tags || [])]
  };
}

// Generate multiple choice exercise
export function generateMultipleChoice(
  card: Card | CardInput,
  distractors: (Card | CardInput)[],
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  // Create options: correct answer + 3 distractors
  const correctOption = card.german;
  const incorrectOptions = distractors
    .filter(d => d.id !== card.id)
    .slice(0, 3)
    .map(d => d.german);

  const options = shuffle([correctOption, ...incorrectOptions]);

  return {
    id: `mc-${card.id}`,
    type: 'multiple-choice',
    difficulty,
    question: `Was bedeutet "**${card.french}**"?`,
    options,
    correctAnswer: correctOption,
    explanation: `Die richtige Antwort ist "**${correctOption}**". ${card.notes || ''}`,
    hints: [
      `Es ist ${card.partOfSpeech === 'noun' ? (card.gender === 'm' ? 'maskulin' : 'feminin') : `ein ${card.partOfSpeech}`}`,
      card.exampleSentence ? `Beispiel: ${card.exampleSentence.french}` : ''
    ].filter(Boolean),
    tags: ['multiple-choice', card.partOfSpeech, ...(card.tags || [])]
  };
}

// Generate fill-in-the-blank exercise
export function generateFillBlank(
  card: Card | CardInput,
  sentenceTemplate: { french: string; german: string; blankWord: string },
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  // Replace the blank word with ___
  const questionSentence = sentenceTemplate.french.replace(
    new RegExp(`\\b${sentenceTemplate.blankWord}\\b`, 'gi'),
    '___'
  );

  return {
    id: `fill-${card.id}`,
    type: 'fill-blank',
    difficulty,
    question: `Fülle die Lücke:\n\n**${questionSentence}**\n\n_(${sentenceTemplate.german})_`,
    correctAnswer: sentenceTemplate.blankWord,
    explanation: `Die richtige Antwort ist "**${sentenceTemplate.blankWord}**". ${card.notes || ''}`,
    hints: [
      `Das Wort beginnt mit "${sentenceTemplate.blankWord.charAt(0)}"`,
      `Das Wort hat ${sentenceTemplate.blankWord.length} Buchstaben`
    ],
    tags: ['fill-blank', 'context', ...(card.tags || [])]
  };
}

// Generate gender recognition exercise
export function generateGenderRecognition(
  card: Card | CardInput,
  difficulty: 'easy' | 'medium' | 'hard' = 'easy'
): Exercise | null {
  if (!card.gender || card.partOfSpeech !== 'noun') return null;

  return {
    id: `gender-${card.id}`,
    type: 'gender-recognition',
    difficulty,
    question: `Welches Geschlecht hat "**${card.french}**"?`,
    options: ['Maskulin (le)', 'Feminin (la)'],
    correctAnswer: card.gender === 'm' ? 'Maskulin (le)' : 'Feminin (la)',
    explanation: `"${card.french}" ist ${card.gender === 'm' ? 'maskulin' : 'feminin'}: **${card.gender === 'm' ? 'le' : 'la'} ${card.french}**. ${card.notes || ''}`,
    hints: [
      `Auf Deutsch: ${card.german}`,
      card.exampleSentence ? `Im Satz: ${card.exampleSentence.french}` : ''
    ].filter(Boolean),
    tags: ['gender', 'noun', ...(card.tags || [])]
  };
}

// Generate verb conjugation exercise
export function generateVerbConjugation(
  verb: string,
  subject: string,
  correctForm: string,
  germanTranslation: string,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  return {
    id: `conj-${verb}-${subject}`,
    type: 'verb-conjugation',
    difficulty,
    question: `Konjugiere das Verb "**${verb}**" für "**${subject}**":\n\n${subject} ___ (${germanTranslation})`,
    correctAnswer: correctForm,
    explanation: `Die richtige Form ist "**${subject} ${correctForm}**".`,
    hints: [
      `Das Verb "${verb}" ist ${verb.endsWith('er') ? 'regelmäßig (-er)' : 'unregelmäßig'}`,
      `Denk an die Endung für "${subject}"`
    ],
    tags: ['verb', 'conjugation', 'grammar']
  };
}

// Generate sentence construction (word ordering)
export function generateSentenceConstruction(
  correctSentence: string,
  germanTranslation: string,
  difficulty: 'easy' | 'medium' | 'hard' = 'hard'
): Exercise {
  const words = correctSentence.split(' ');
  const shuffledWords = shuffle([...words]);

  return {
    id: `sent-const-${correctSentence.replace(/\s+/g, '-')}`,
    type: 'sentence-construction',
    difficulty,
    question: `Ordne die Wörter, um den Satz zu bilden:\n\n"**${germanTranslation}**"\n\nWörter: ${shuffledWords.join(', ')}`,
    correctAnswer: correctSentence,
    explanation: `Der richtige Satz ist: "**${correctSentence}**"`,
    hints: [
      `Beginne mit dem Subjekt`,
      `Die Wortstellung ist: Subjekt + Verb + Objekt`
    ],
    tags: ['sentence', 'word-order', 'grammar']
  };
}

// Generate listening comprehension (requires audio)
export function generateListening(
  sentence: string,
  germanTranslation: string,
  audioUrl: string,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  return {
    id: `listen-${sentence.replace(/\s+/g, '-')}`,
    type: 'listening',
    difficulty,
    question: `🔊 Höre dir den Satz an und schreibe, was du hörst:`,
    correctAnswer: sentence,
    audioUrl,
    explanation: `Der Satz ist: "**${sentence}**" (${germanTranslation})`,
    hints: [
      `Der Satz bedeutet: ${germanTranslation}`,
      `Höre auf die Aussprache der Nasal-Vokale`
    ],
    tags: ['listening', 'pronunciation']
  };
}

// Generate dialogue completion
export function generateDialogueCompletion(
  dialogue: { person: string; line: string; german: string }[],
  blankIndex: number,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Exercise {
  const context = dialogue.map((d, i) =>
    i === blankIndex
      ? `**${d.person}:** ___`
      : `**${d.person}:** ${d.line}`
  ).join('\n\n');

  const correctAnswer = dialogue[blankIndex].line;

  return {
    id: `dialogue-${blankIndex}`,
    type: 'dialogue-completion',
    difficulty,
    question: `Vervollständige den Dialog:\n\n${context}\n\n_Auf Deutsch: ${dialogue[blankIndex].german}_`,
    correctAnswer,
    explanation: `Die richtige Antwort ist: "**${correctAnswer}**"`,
    hints: [
      `Was würdest du in dieser Situation sagen?`,
      `Denk an höfliche Formulierungen`
    ],
    tags: ['dialogue', 'context', 'conversation']
  };
}

/**
 * Utility Functions
 */

// Shuffle array (Fisher-Yates)
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Normalize string for comparison (remove diacritics, lowercase, trim)
export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, ''); // Remove diacritics
}

// Check if answer is correct (with fuzzy matching for typos)
export function checkAnswer(
  userAnswer: string,
  correctAnswer: string | string[],
  tolerance: number = 0.15
): boolean {
  const normalized = normalizeAnswer(userAnswer);
  const correctAnswers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];

  for (const correct of correctAnswers) {
    const normalizedCorrect = normalizeAnswer(correct);

    // Exact match
    if (normalized === normalizedCorrect) return true;

    // Fuzzy match (allow some typos)
    const distance = levenshteinDistance(normalized, normalizedCorrect);
    const maxDistance = Math.floor(normalizedCorrect.length * tolerance);

    if (distance <= maxDistance) return true;
  }

  return false;
}

// Levenshtein distance (edit distance) for fuzzy matching
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
