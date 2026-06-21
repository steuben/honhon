<script lang="ts">
  import type { CardInput } from '$lib/types';
  import AudioButton from './AudioButton.svelte';

  interface Props {
    vocabulary: CardInput[];
  }

  let { vocabulary }: Props = $props();

  const partOfSpeechLabels: Record<CardInput['partOfSpeech'], string> = {
    noun: 'Substantiv',
    verb: 'Verb',
    adjective: 'Adjektiv',
    adverb: 'Adverb',
    pronoun: 'Pronomen',
    article: 'Artikel',
    preposition: 'Präposition',
    conjunction: 'Konjunktion'
  };
</script>

<section class="vocabulary-list">
  <div class="list-header">
    <h3 class="list-title">📖 Vokabular</h3>
    <span class="word-count">{vocabulary.length} {vocabulary.length === 1 ? 'Wort' : 'Wörter'}</span>
  </div>

  <div class="vocabulary-grid">
    {#each vocabulary as word}
      <article class="vocabulary-card">
        <div class="card-header">
          <span class="part-of-speech">{partOfSpeechLabels[word.partOfSpeech]}</span>
          {#if word.gender}
            <span class="gender-badge" class:masculine={word.gender === 'm'} class:feminine={word.gender === 'f'}>
              {word.gender === 'm' ? '♂' : '♀'}
            </span>
          {/if}
          {#if word.isFalseFriend}
            <span class="badge false-friend" title="Falscher Freund">⚠️</span>
          {/if}
          {#if word.isCognate}
            <span class="badge cognate" title="Verwandtes Wort">🔗</span>
          {/if}
        </div>

        <div class="card-main">
          <div class="word-section french-section">
            <div class="word-display">
              <span class="french-word">{word.french}</span>
              <AudioButton text={word.french} />
            </div>
          </div>

          <div class="translation-arrow">→</div>

          <div class="word-section german-section">
            <span class="german-word">{word.german}</span>
          </div>
        </div>

        <div class="example-section">
          <p class="example-label">Beispiel:</p>
          <div class="example-french">
            <span class="example-text">{word.exampleSentence.french}</span>
            <AudioButton text={word.exampleSentence.french} />
          </div>
          <p class="example-german">{word.exampleSentence.german}</p>
        </div>

        {#if word.notes}
          <div class="notes-section">
            <p class="notes-label">💡 Hinweis:</p>
            <p class="notes-text">{word.notes}</p>
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>

<style>
  .vocabulary-list {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #E5E7EB;
  }

  .list-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .word-count {
    font-size: 0.875rem;
    font-weight: 600;
    color: #6B7280;
    background-color: #F3F4F6;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
  }

  .vocabulary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .vocabulary-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 0.75rem;
    padding: 1rem;
    transition: all 0.2s;
  }

  .vocabulary-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .part-of-speech {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #6B7280;
    background-color: #E5E7EB;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  .gender-badge {
    font-size: 1.25rem;
  }

  .gender-badge.masculine {
    color: #3B82F6;
  }

  .gender-badge.feminine {
    color: #EC4899;
  }

  .badge {
    font-size: 1rem;
  }

  .badge.false-friend {
    cursor: help;
  }

  .badge.cognate {
    cursor: help;
  }

  .card-main {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .word-section {
    flex: 1;
  }

  .french-section {
    text-align: right;
  }

  .word-display {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .french-word {
    font-size: 1.25rem;
    font-weight: 700;
    color: #3B82F6;
  }

  .translation-arrow {
    font-size: 1.5rem;
    color: #9CA3AF;
    flex-shrink: 0;
  }

  .german-word {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
  }

  .example-section {
    background: white;
    border-radius: 0.5rem;
    padding: 0.75rem;
    margin-top: 0.75rem;
  }

  .example-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6B7280;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  .example-french {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
  }

  .example-text {
    flex: 1;
  }

  .example-german {
    font-size: 0.875rem;
    color: #6B7280;
    margin: 0;
    font-style: italic;
  }

  .notes-section {
    margin-top: 0.75rem;
    padding: 0.5rem;
    background: #FEF3C7;
    border-radius: 0.375rem;
    border: 1px solid #FCD34D;
  }

  .notes-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 0.25rem 0;
  }

  .notes-text {
    font-size: 0.875rem;
    color: #374151;
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .vocabulary-grid {
      grid-template-columns: 1fr;
    }

    .card-main {
      flex-direction: column;
      gap: 0.5rem;
    }

    .french-section {
      text-align: left;
    }

    .word-display {
      justify-content: space-between;
    }

    .translation-arrow {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 640px) {
    .vocabulary-list {
      padding: 1rem;
    }

    .list-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .list-title {
      font-size: 1.25rem;
    }
  }
</style>
