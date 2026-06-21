import type { CardInput } from '$lib/types';

/**
 * Initial vocabulary set - 20 essential French words for absolute beginners
 * Focused on daily life basics: pronouns, articles, common verbs, and basic nouns
 */

export const initialVocabulary: CardInput[] = [
  // Personal pronouns
  {
    id: 'pronoun-je',
    french: 'je',
    german: 'ich',
    english: 'I',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Je suis content.',
      german: 'Ich bin zufrieden.'
    },
    notes: 'Wird vor Vokalen zu "j\'" (z.B. j\'aime)',
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },
  {
    id: 'pronoun-tu',
    french: 'tu',
    german: 'du',
    english: 'you (informal singular)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Tu es mon ami.',
      german: 'Du bist mein Freund.'
    },
    notes: 'Informelle Anrede wie das deutsche "du"',
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },
  {
    id: 'pronoun-il',
    french: 'il',
    german: 'er',
    english: 'he',
    partOfSpeech: 'pronoun',
    gender: 'm',
    exampleSentence: {
      french: 'Il parle français.',
      german: 'Er spricht Französisch.'
    },
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },
  {
    id: 'pronoun-elle',
    french: 'elle',
    german: 'sie',
    english: 'she',
    partOfSpeech: 'pronoun',
    gender: 'f',
    exampleSentence: {
      french: 'Elle est belle.',
      german: 'Sie ist schön.'
    },
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },
  {
    id: 'pronoun-nous',
    french: 'nous',
    german: 'wir',
    english: 'we',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Nous sommes amis.',
      german: 'Wir sind Freunde.'
    },
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },
  {
    id: 'pronoun-vous',
    french: 'vous',
    german: 'ihr / Sie',
    english: 'you (plural or formal)',
    partOfSpeech: 'pronoun',
    exampleSentence: {
      french: 'Vous êtes français?',
      german: 'Sind Sie Franzose? / Seid ihr Franzosen?'
    },
    notes: 'Formelle Anrede (wie "Sie") oder Plural (wie "ihr")',
    level: 'A1',
    tags: ['pronoun', 'essential', 'basic']
  },

  // Articles
  {
    id: 'article-le',
    french: 'le',
    german: 'der / das',
    english: 'the (masculine)',
    partOfSpeech: 'article',
    gender: 'm',
    exampleSentence: {
      french: 'le chat',
      german: 'die Katze (der Kater)'
    },
    notes: 'Bestimmter Artikel maskulin. Wird vor Vokalen zu "l\'"',
    level: 'A1',
    tags: ['article', 'essential', 'grammar']
  },
  {
    id: 'article-la',
    french: 'la',
    german: 'die',
    english: 'the (feminine)',
    partOfSpeech: 'article',
    gender: 'f',
    exampleSentence: {
      french: 'la maison',
      german: 'das Haus'
    },
    notes: 'Bestimmter Artikel feminin. Wird vor Vokalen zu "l\'"',
    level: 'A1',
    tags: ['article', 'essential', 'grammar']
  },
  {
    id: 'article-un',
    french: 'un',
    german: 'ein',
    english: 'a/an (masculine)',
    partOfSpeech: 'article',
    gender: 'm',
    exampleSentence: {
      french: 'un ami',
      german: 'ein Freund'
    },
    notes: 'Unbestimmter Artikel maskulin',
    level: 'A1',
    tags: ['article', 'essential', 'grammar']
  },
  {
    id: 'article-une',
    french: 'une',
    german: 'eine',
    english: 'a/an (feminine)',
    partOfSpeech: 'article',
    gender: 'f',
    exampleSentence: {
      french: 'une maison',
      german: 'ein Haus'
    },
    notes: 'Unbestimmter Artikel feminin',
    level: 'A1',
    tags: ['article', 'essential', 'grammar']
  },

  // Essential verbs (infinitive)
  {
    id: 'verb-etre',
    french: 'être',
    german: 'sein',
    english: 'to be',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je suis étudiant.',
      german: 'Ich bin Student.'
    },
    notes: 'Wichtigstes Verb! Unregelmäßige Konjugation: je suis, tu es, il est...',
    level: 'A1',
    tags: ['verb', 'essential', 'irregular', 'auxiliary']
  },
  {
    id: 'verb-avoir',
    french: 'avoir',
    german: 'haben',
    english: 'to have',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'J\'ai un chat.',
      german: 'Ich habe eine Katze.'
    },
    notes: 'Zweitwichtigstes Verb! Unregelmäßig: j\'ai, tu as, il a...',
    level: 'A1',
    tags: ['verb', 'essential', 'irregular', 'auxiliary']
  },
  {
    id: 'verb-faire',
    french: 'faire',
    german: 'machen / tun',
    english: 'to do/make',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je fais mes devoirs.',
      german: 'Ich mache meine Hausaufgaben.'
    },
    notes: 'Sehr häufiges Verb, unregelmäßig',
    level: 'A1',
    tags: ['verb', 'essential', 'irregular']
  },
  {
    id: 'verb-aller',
    french: 'aller',
    german: 'gehen',
    english: 'to go',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je vais à Paris.',
      german: 'Ich gehe nach Paris.'
    },
    notes: 'Wichtig für Futur (aller + Infinitiv)',
    level: 'A1',
    tags: ['verb', 'essential', 'irregular']
  },
  {
    id: 'verb-parler',
    french: 'parler',
    german: 'sprechen',
    english: 'to speak',
    partOfSpeech: 'verb',
    exampleSentence: {
      french: 'Je parle français.',
      german: 'Ich spreche Französisch.'
    },
    notes: 'Regelmäßiges Verb auf -er. Konjugation: je parle, tu parles, il parle...',
    level: 'A1',
    tags: ['verb', 'essential', 'regular-er']
  },

  // Common nouns
  {
    id: 'noun-maison',
    french: 'maison',
    german: 'Haus',
    english: 'house',
    partOfSpeech: 'noun',
    gender: 'f',
    exampleSentence: {
      french: 'La maison est grande.',
      german: 'Das Haus ist groß.'
    },
    notes: 'Achtung: im Französischen feminin! (la maison)',
    level: 'A1',
    tags: ['noun', 'place', 'daily-life']
  },
  {
    id: 'noun-chat',
    french: 'chat',
    german: 'Katze / Kater',
    english: 'cat',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'Le chat est mignon.',
      german: 'Die Katze ist niedlich.'
    },
    notes: 'Maskulin im Französischen (le chat), feminin = la chatte',
    level: 'A1',
    tags: ['noun', 'animal', 'daily-life']
  },
  {
    id: 'noun-ami',
    french: 'ami',
    german: 'Freund',
    english: 'friend (male)',
    partOfSpeech: 'noun',
    gender: 'm',
    exampleSentence: {
      french: 'C\'est mon ami.',
      german: 'Das ist mein Freund.'
    },
    notes: 'Feminin = amie (mit -e am Ende)',
    level: 'A1',
    tags: ['noun', 'person', 'relationship']
  },

  // Basic adjectives
  {
    id: 'adj-bon',
    french: 'bon',
    german: 'gut',
    english: 'good',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'C\'est un bon livre.',
      german: 'Das ist ein gutes Buch.'
    },
    notes: 'Steht VOR dem Nomen! Feminin = bonne',
    level: 'A1',
    tags: ['adjective', 'quality', 'common']
  },
  {
    id: 'adj-grand',
    french: 'grand',
    german: 'groß',
    english: 'big/tall',
    partOfSpeech: 'adjective',
    gender: 'm',
    exampleSentence: {
      french: 'Une grande maison.',
      german: 'Ein großes Haus.'
    },
    notes: 'Steht VOR dem Nomen! Feminin = grande',
    level: 'A1',
    tags: ['adjective', 'size', 'common']
  }
];
