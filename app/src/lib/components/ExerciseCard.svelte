<script lang="ts">
  import type { Exercise } from '$lib/types';
  import AudioButton from './AudioButton.svelte';

  interface Props {
    exercise: Exercise;
    onAnswer: (answer: string) => void;
    showHints?: boolean;
  }

  let { exercise, onAnswer, showHints = false }: Props = $props();

  let userInput = $state('');
  let selectedOption = $state('');
  let wordOrder = $state<string[]>([]);
  let hintsExpanded = $state(false);
  let currentHintIndex = $state(0);

  // Initialize word order for sentence construction
  $effect(() => {
    if (exercise.type === 'sentence-construction') {
      // Extract shuffled words from question (after "Wörter:")
      const match = exercise.question.match(/Wörter: (.+)$/m);
      if (match) {
        wordOrder = match[1].split(', ');
      }
    }
  });

  function handleSubmit() {
    let answer = '';

    switch (exercise.type) {
      case 'translation-de-fr':
      case 'translation-fr-de':
      case 'fill-blank':
      case 'verb-conjugation':
      case 'listening':
      case 'dialogue-completion':
        answer = userInput.trim();
        break;
      case 'multiple-choice':
      case 'gender-recognition':
        answer = selectedOption;
        break;
      case 'sentence-construction':
        answer = wordOrder.join(' ');
        break;
    }

    if (answer) {
      onAnswer(answer);
      resetInput();
    }
  }

  function resetInput() {
    userInput = '';
    selectedOption = '';
    hintsExpanded = false;
    currentHintIndex = 0;
  }

  function handleKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  function selectOption(option: string) {
    selectedOption = option;
  }

  function moveWord(index: number, direction: 'left' | 'right') {
    if (direction === 'left' && index > 0) {
      [wordOrder[index], wordOrder[index - 1]] = [wordOrder[index - 1], wordOrder[index]];
    } else if (direction === 'right' && index < wordOrder.length - 1) {
      [wordOrder[index], wordOrder[index + 1]] = [wordOrder[index + 1], wordOrder[index]];
    }
  }

  function showNextHint() {
    if (exercise.hints && currentHintIndex < exercise.hints.length - 1) {
      currentHintIndex++;
    }
  }

  // Get the main question without extra formatting instructions
  const mainQuestion = $derived(() => {
    const lines = exercise.question.split('\n');
    return lines[0];
  });

  const questionContext = $derived(() => {
    const lines = exercise.question.split('\n');
    return lines.slice(1).join('\n').trim();
  });
</script>

<div class="exercise-card">
  <div class="exercise-header">
    <span class="exercise-type">{exercise.type}</span>
    <span class="difficulty" class:easy={exercise.difficulty === 'easy'}
                            class:medium={exercise.difficulty === 'medium'}
                            class:hard={exercise.difficulty === 'hard'}>
      {exercise.difficulty === 'easy' ? '⭐' : exercise.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}
    </span>
  </div>

  <div class="question-section">
    <p class="question-text">{@html mainQuestion()}</p>
    {#if questionContext()}
      <div class="question-context">
        {@html questionContext()}
      </div>
    {/if}
  </div>

  <div class="answer-section">
    {#if exercise.type === 'translation-de-fr' || exercise.type === 'translation-fr-de'}
      <input
        type="text"
        bind:value={userInput}
        onkeypress={handleKeypress}
        placeholder="Deine Antwort..."
        class="text-input"
        autofocus
      />

    {:else if exercise.type === 'multiple-choice'}
      <div class="options-grid">
        {#each exercise.options || [] as option}
          <button
            onclick={() => selectOption(option)}
            class="option-button"
            class:selected={selectedOption === option}
          >
            {option}
          </button>
        {/each}
      </div>

    {:else if exercise.type === 'fill-blank'}
      <input
        type="text"
        bind:value={userInput}
        onkeypress={handleKeypress}
        placeholder="Fülle die Lücke aus..."
        class="text-input"
        autofocus
      />

    {:else if exercise.type === 'gender-recognition'}
      <div class="gender-buttons">
        {#each exercise.options || [] as option}
          <button
            onclick={() => selectOption(option)}
            class="gender-button"
            class:selected={selectedOption === option}
            class:masculine={option.includes('Maskulin')}
            class:feminine={option.includes('Feminin')}
          >
            <span class="gender-icon">{option.includes('Maskulin') ? '♂' : '♀'}</span>
            <span class="gender-label">{option}</span>
          </button>
        {/each}
      </div>

    {:else if exercise.type === 'sentence-construction'}
      <div class="word-chips">
        {#each wordOrder as word, index}
          <div class="word-chip">
            <button
              onclick={() => moveWord(index, 'left')}
              disabled={index === 0}
              class="word-move-btn"
              aria-label="Nach links"
            >
              ←
            </button>
            <span class="word-text">{word}</span>
            <button
              onclick={() => moveWord(index, 'right')}
              disabled={index === wordOrder.length - 1}
              class="word-move-btn"
              aria-label="Nach rechts"
            >
              →
            </button>
          </div>
        {/each}
      </div>
      <div class="sentence-preview">
        <strong>Vorschau:</strong> {wordOrder.join(' ')}
      </div>

    {:else if exercise.type === 'verb-conjugation'}
      <input
        type="text"
        bind:value={userInput}
        onkeypress={handleKeypress}
        placeholder="Konjugierte Form..."
        class="text-input"
        autofocus
      />

    {:else if exercise.type === 'listening'}
      <div class="listening-section">
        {#if exercise.audioUrl}
          <AudioButton text={exercise.audioUrl} customLabel="🔊 Abspielen" />
        {/if}
        <input
          type="text"
          bind:value={userInput}
          onkeypress={handleKeypress}
          placeholder="Was hörst du?"
          class="text-input"
          autofocus
        />
      </div>

    {:else if exercise.type === 'dialogue-completion'}
      <input
        type="text"
        bind:value={userInput}
        onkeypress={handleKeypress}
        placeholder="Vervollständige den Dialog..."
        class="text-input"
        autofocus
      />
    {/if}
  </div>

  {#if showHints && exercise.hints && exercise.hints.length > 0}
    <div class="hints-section">
      <button
        onclick={() => hintsExpanded = !hintsExpanded}
        class="hints-toggle"
      >
        💡 {hintsExpanded ? 'Hinweise verbergen' : 'Hinweise anzeigen'}
      </button>

      {#if hintsExpanded}
        <div class="hints-content">
          {#each exercise.hints.slice(0, currentHintIndex + 1) as hint}
            <p class="hint-text">{hint}</p>
          {/each}
          {#if currentHintIndex < exercise.hints.length - 1}
            <button onclick={showNextHint} class="more-hints-btn">
              Weiterer Hinweis
            </button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}

  <button
    onclick={handleSubmit}
    class="submit-button"
    disabled={!userInput && !selectedOption && (exercise.type === 'sentence-construction' ? wordOrder.length === 0 : true)}
  >
    Überprüfen
  </button>
</div>

<style>
  .exercise-card {
    max-width: 700px;
    margin: 0 auto;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #E5E7EB;
  }

  .exercise-type {
    font-size: 0.875rem;
    color: #6B7280;
    text-transform: uppercase;
    font-weight: 600;
  }

  .difficulty {
    font-size: 1.25rem;
  }

  .question-section {
    margin-bottom: 2rem;
  }

  .question-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .question-context {
    padding: 1rem;
    background: #F9FAFB;
    border-radius: 0.5rem;
    color: #4B5563;
    font-size: 1rem;
    line-height: 1.6;
    white-space: pre-line;
  }

  .answer-section {
    margin-bottom: 1.5rem;
  }

  .text-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.125rem;
    border: 2px solid #D1D5DB;
    border-radius: 0.5rem;
    transition: border-color 0.2s;
  }

  .text-input:focus {
    outline: none;
    border-color: #3B82F6;
  }

  .options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .option-button {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    border: 2px solid #D1D5DB;
    border-radius: 0.5rem;
    background: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  .option-button:hover {
    border-color: #3B82F6;
    background: #EFF6FF;
  }

  .option-button.selected {
    border-color: #3B82F6;
    background: #3B82F6;
    color: white;
  }

  .gender-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .gender-button {
    padding: 1.5rem;
    border: 3px solid #D1D5DB;
    border-radius: 0.75rem;
    background: white;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .gender-button.selected.masculine {
    border-color: #3B82F6;
    background: #EFF6FF;
  }

  .gender-button.selected.feminine {
    border-color: #EC4899;
    background: #FCE7F3;
  }

  .gender-icon {
    font-size: 3rem;
  }

  .gender-button.masculine .gender-icon {
    color: #3B82F6;
  }

  .gender-button.feminine .gender-icon {
    color: #EC4899;
  }

  .gender-label {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .word-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .word-chip {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: #F3F4F6;
    border: 2px solid #D1D5DB;
    border-radius: 0.5rem;
  }

  .word-move-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem;
    color: #6B7280;
    transition: color 0.2s;
  }

  .word-move-btn:hover:not(:disabled) {
    color: #3B82F6;
  }

  .word-move-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .word-text {
    font-size: 1rem;
    font-weight: 500;
    color: #111827;
  }

  .sentence-preview {
    padding: 1rem;
    background: #F9FAFB;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    color: #4B5563;
  }

  .listening-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .hints-section {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #FFFBEB;
    border-radius: 0.5rem;
    border: 2px solid #FCD34D;
  }

  .hints-toggle {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: #92400E;
    cursor: pointer;
    padding: 0;
  }

  .hints-content {
    margin-top: 1rem;
  }

  .hint-text {
    margin: 0.5rem 0;
    color: #78350F;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .more-hints-btn {
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    background: #FCD34D;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #78350F;
    cursor: pointer;
    transition: background 0.2s;
  }

  .more-hints-btn:hover {
    background: #FBBF24;
  }

  .submit-button {
    width: 100%;
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

  .submit-button:hover:not(:disabled) {
    background-color: #2563EB;
  }

  .submit-button:disabled {
    background-color: #9CA3AF;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    .exercise-card {
      padding: 1.5rem;
    }

    .question-text {
      font-size: 1.125rem;
    }

    .gender-buttons {
      grid-template-columns: 1fr;
    }

    .word-chips {
      flex-direction: column;
    }
  }
</style>
