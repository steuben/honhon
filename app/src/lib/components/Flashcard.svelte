<script lang="ts">
  import type { Card } from '$lib/types';
  import AudioButton from './AudioButton.svelte';

  interface Props {
    card: Card;
    showAnswer: boolean;
    userAnswer?: string;
    isCorrect?: boolean;
    onAnswerSubmit?: (answer: string) => void;
    onRating?: (rating: 'again' | 'hard' | 'good' | 'easy') => void;
  }

  let {
    card,
    showAnswer,
    userAnswer = '',
    isCorrect = false,
    onAnswerSubmit,
    onRating
  }: Props = $props();

  let input = $state('');

  function handleSubmit() {
    if (onAnswerSubmit && input.trim()) {
      onAnswerSubmit(input.trim());
    }
  }

  function handleKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !showAnswer) {
      handleSubmit();
    }
  }

  function handleRating(rating: 'again' | 'hard' | 'good' | 'easy') {
    if (onRating) {
      onRating(rating);
      input = ''; // Reset input for next card
    }
  }
</script>

<div class="flashcard">
  <div class="card-header">
    <span class="card-type">{card.partOfSpeech}</span>
    {#if card.gender}
      <span class="card-gender" class:masculine={card.gender === 'm'} class:feminine={card.gender === 'f'}>
        {card.gender === 'm' ? '♂' : '♀'}
      </span>
    {/if}
  </div>

  <div class="card-content">
    <div class="question">
      <p class="instruction">Übersetze ins Französische:</p>
      <h2 class="german-word">{card.german}</h2>
    </div>

    {#if !showAnswer}
      <div class="answer-input">
        <input
          type="text"
          bind:value={input}
          onkeypress={handleKeypress}
          placeholder="Deine Antwort..."
          class="text-input"
          autofocus
        />
        <button onclick={handleSubmit} class="submit-button">
          Überprüfen
        </button>
      </div>
    {:else}
      <div class="answer-section">
        <div class="correct-answer">
          <p class="label">Richtige Antwort:</p>
          <h3 class="french-word">{card.french}</h3>
          <AudioButton text={card.french} />
        </div>

        {#if userAnswer}
          <div class="user-answer" class:correct={isCorrect} class:incorrect={!isCorrect}>
            <p class="label">Deine Antwort:</p>
            <p class="answer-text">{userAnswer}</p>
            <span class="result-icon">{isCorrect ? '✅' : '❌'}</span>
          </div>
        {/if}

        <div class="example-sentence">
          <p class="label">📝 Beispiel:</p>
          <p class="sentence french">{card.exampleSentence.french}</p>
          <p class="sentence german">{card.exampleSentence.german}</p>
        </div>

        {#if card.notes}
          <div class="notes">
            <p class="label">💡 Hinweis:</p>
            <p class="note-text">{card.notes}</p>
          </div>
        {/if}

        <div class="rating-buttons">
          <p class="rating-prompt">Wie schwer war das?</p>
          <div class="button-group">
            <button onclick={() => handleRating('again')} class="rating-btn again">
              ❌ Nochmal
            </button>
            <button onclick={() => handleRating('hard')} class="rating-btn hard">
              😕 Schwer
            </button>
            <button onclick={() => handleRating('good')} class="rating-btn good">
              ✅ Gut
            </button>
            <button onclick={() => handleRating('easy')} class="rating-btn easy">
              🎯 Einfach
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .flashcard {
    max-width: 600px;
    margin: 2rem auto;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .card-type {
    font-size: 0.875rem;
    color: #6B7280;
    text-transform: uppercase;
    font-weight: 600;
  }

  .card-gender {
    font-size: 1.5rem;
  }

  .card-gender.masculine {
    color: #3B82F6;
  }

  .card-gender.feminine {
    color: #EC4899;
  }

  .question {
    text-align: center;
    margin-bottom: 2rem;
  }

  .instruction {
    font-size: 1rem;
    color: #6B7280;
    margin-bottom: 0.5rem;
  }

  .german-word {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .answer-input {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .text-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;
    border: 2px solid #D1D5DB;
    border-radius: 0.5rem;
    transition: border-color 0.2s;
  }

  .text-input:focus {
    outline: none;
    border-color: #3B82F6;
  }

  .submit-button {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    background-color: #3B82F6;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-button:hover {
    background-color: #2563EB;
  }

  .answer-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .correct-answer {
    text-align: center;
  }

  .french-word {
    font-size: 2rem;
    font-weight: 700;
    color: #3B82F6;
    margin: 0.5rem 0;
  }

  .user-answer {
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-answer.correct {
    background-color: #D1FAE5;
    border: 2px solid #10B981;
  }

  .user-answer.incorrect {
    background-color: #FEE2E2;
    border: 2px solid #EF4444;
  }

  .answer-text {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  .result-icon {
    font-size: 1.5rem;
  }

  .label {
    font-size: 0.875rem;
    color: #6B7280;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .example-sentence,
  .notes {
    padding: 1rem;
    background-color: #F9FAFB;
    border-radius: 0.5rem;
  }

  .sentence {
    margin: 0.25rem 0;
  }

  .sentence.french {
    font-weight: 600;
    color: #111827;
  }

  .sentence.german {
    color: #6B7280;
  }

  .note-text {
    color: #6B7280;
    margin: 0.25rem 0 0 0;
  }

  .rating-buttons {
    margin-top: 1rem;
  }

  .rating-prompt {
    text-align: center;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .rating-btn {
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 600;
    border: 2px solid;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .rating-btn.again {
    border-color: #EF4444;
    color: #EF4444;
    background: white;
  }

  .rating-btn.again:hover {
    background-color: #EF4444;
    color: white;
  }

  .rating-btn.hard {
    border-color: #F59E0B;
    color: #F59E0B;
    background: white;
  }

  .rating-btn.hard:hover {
    background-color: #F59E0B;
    color: white;
  }

  .rating-btn.good {
    border-color: #10B981;
    color: #10B981;
    background: white;
  }

  .rating-btn.good:hover {
    background-color: #10B981;
    color: white;
  }

  .rating-btn.easy {
    border-color: #3B82F6;
    color: #3B82F6;
    background: white;
  }

  .rating-btn.easy:hover {
    background-color: #3B82F6;
    color: white;
  }

  @media (max-width: 640px) {
    .flashcard {
      padding: 1.5rem;
    }

    .german-word,
    .french-word {
      font-size: 1.5rem;
    }

    .button-group {
      grid-template-columns: 1fr;
    }
  }
</style>
