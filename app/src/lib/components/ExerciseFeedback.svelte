<script lang="ts">
  interface Props {
    correct: boolean;
    explanation: string;
    correctAnswer: string | string[];
    userAnswer: string;
    onContinue: () => void;
  }

  let { correct, explanation, correctAnswer, userAnswer, onContinue }: Props = $props();

  const correctAnswerText = $derived(() => {
    if (Array.isArray(correctAnswer)) {
      return correctAnswer.join(' oder ');
    }
    return correctAnswer;
  });

  const encouragementMessage = $derived(() => {
    if (correct) {
      const messages = [
        'Ausgezeichnet!',
        'Perfekt!',
        'Sehr gut!',
        'Fantastisch!',
        'Hervorragend!',
        'Toll gemacht!'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else {
      const messages = [
        'Nicht ganz richtig, aber weiter so!',
        'Fast geschafft! Versuch es weiter!',
        'Gute Anstrengung! Übe weiter!',
        'Kein Problem, aus Fehlern lernt man!',
        'Das wird noch! Weiter üben!'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  });

  function handleKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      onContinue();
    }
  }

  // Auto-focus for keyboard navigation
  let continueButton: HTMLButtonElement;
  $effect(() => {
    if (continueButton) {
      continueButton.focus();
    }
  });
</script>

<svelte:window onkeypress={handleKeypress} />

<div class="feedback-card" class:correct class:incorrect={!correct}>
  <div class="result-header">
    <div class="result-icon">
      {#if correct}
        <span class="icon-correct">✓</span>
      {:else}
        <span class="icon-incorrect">✗</span>
      {/if}
    </div>
    <h2 class="result-message">{encouragementMessage()}</h2>
  </div>

  <div class="feedback-content">
    {#if !correct}
      <div class="answer-comparison">
        <div class="user-answer-section">
          <p class="label">Deine Antwort:</p>
          <p class="answer-text user">{userAnswer}</p>
        </div>

        <div class="correct-answer-section">
          <p class="label">Richtige Antwort:</p>
          <p class="answer-text correct-text">{correctAnswerText()}</p>
        </div>
      </div>
    {:else}
      <div class="correct-answer-display">
        <p class="answer-text correct-text">{userAnswer}</p>
      </div>
    {/if}

    <div class="explanation-section">
      <p class="explanation-label">💡 Erklärung:</p>
      <div class="explanation-text">
        {@html explanation}
      </div>
    </div>
  </div>

  <button
    bind:this={continueButton}
    onclick={onContinue}
    class="continue-button"
  >
    Weiter →
  </button>
</div>

<style>
  .feedback-card {
    max-width: 700px;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .feedback-card.correct {
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
    border: 3px solid #10B981;
  }

  .feedback-card.incorrect {
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
    border: 3px solid #EF4444;
  }

  .result-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .result-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .correct .result-icon {
    background: #10B981;
    color: white;
  }

  .incorrect .result-icon {
    background: #EF4444;
    color: white;
  }

  .icon-correct,
  .icon-incorrect {
    display: block;
    line-height: 1;
  }

  .result-message {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
  }

  .correct .result-message {
    color: #065F46;
  }

  .incorrect .result-message {
    color: #991B1B;
  }

  .feedback-content {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .answer-comparison {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .user-answer-section,
  .correct-answer-section {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .user-answer-section {
    background: #FEF2F2;
    border: 2px solid #FCA5A5;
  }

  .correct-answer-section {
    background: #ECFDF5;
    border: 2px solid #6EE7B7;
  }

  .correct-answer-display {
    padding: 1.5rem;
    text-align: center;
    background: #ECFDF5;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #6B7280;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .answer-text {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  .answer-text.user {
    color: #991B1B;
  }

  .answer-text.correct-text {
    color: #065F46;
  }

  .explanation-section {
    padding-top: 1rem;
    border-top: 2px solid #E5E7EB;
  }

  .explanation-label {
    font-size: 0.875rem;
    font-weight: 700;
    color: #4B5563;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .explanation-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #1F2937;
  }

  .explanation-text :global(strong) {
    color: #065F46;
    font-weight: 700;
  }

  .continue-button {
    width: 100%;
    padding: 1.25rem 2rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .continue-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .continue-button:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    .feedback-card {
      padding: 1.5rem;
    }

    .result-header {
      flex-direction: column;
      text-align: center;
    }

    .result-message {
      font-size: 1.5rem;
    }

    .answer-text {
      font-size: 1.125rem;
    }
  }
</style>
