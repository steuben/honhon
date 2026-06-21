<script lang="ts">
  import type { Exercise } from '$lib/types';
  import { checkAnswer } from '$lib/exercises/generators';
  import ExerciseCard from './ExerciseCard.svelte';
  import ExerciseFeedback from './ExerciseFeedback.svelte';

  interface Props {
    exercises: Exercise[];
    mode: 'guided' | 'independent' | 'assessment';
    onComplete: () => void;
    onProgress?: (progress: number) => void;
    onExerciseComplete?: (correct: boolean) => void;
  }

  interface ExerciseResults {
    totalExercises: number;
    correctAnswers: number;
    accuracy: number;
    timeSpentSeconds: number;
    attempts: ExerciseAttempt[];
  }

  interface ExerciseAttempt {
    exerciseId: string;
    userAnswer: string;
    correct: boolean;
    timeSpentMs: number;
  }

  let { exercises, mode, onComplete, onProgress, onExerciseComplete }: Props = $props();

  let currentIndex = $state(0);
  let showFeedback = $state(false);
  let attempts = $state<ExerciseAttempt[]>([]);
  let currentAttempt = $state<{ userAnswer: string; correct: boolean } | null>(null);
  let startTime = $state(Date.now());
  let exerciseStartTime = $state(Date.now());

  const currentExercise = $derived(exercises[currentIndex]);
  const progressPercent = $derived((currentIndex / exercises.length) * 100);
  const correctCount = $derived(attempts.filter(a => a.correct).length);
  const accuracy = $derived(attempts.length > 0 ? (correctCount / attempts.length) * 100 : 0);

  // Phase-specific settings
  const showHints = $derived(mode === 'guided');
  const phaseName = $derived(() => {
    switch (mode) {
      case 'guided': return 'Geführte Übung';
      case 'independent': return 'Selbstständige Übung';
      case 'assessment': return 'Prüfung';
    }
  });

  function handleAnswer(userAnswer: string) {
    const correct = checkAnswer(userAnswer, currentExercise.correctAnswer);
    const timeSpent = Date.now() - exerciseStartTime;

    currentAttempt = { userAnswer, correct };
    attempts.push({
      exerciseId: currentExercise.id,
      userAnswer,
      correct,
      timeSpentMs: timeSpent
    });

    // Record exercise in lesson progress
    if (onExerciseComplete) {
      onExerciseComplete(correct);
    }

    showFeedback = true;
  }

  async function handleContinue() {
    if (currentIndex < exercises.length - 1) {
      // Move to next exercise
      currentIndex++;
      showFeedback = false;
      currentAttempt = null;
      exerciseStartTime = Date.now();

      // Update progress
      if (onProgress) {
        onProgress(((currentIndex + 1) / exercises.length) * 100);
      }
    } else {
      // Complete phase - update progress to 100% FIRST
      if (onProgress) {
        await onProgress(100);
      }

      // Wait a tick to ensure state is updated
      await new Promise(resolve => setTimeout(resolve, 50));

      // Call completion handler
      onComplete();
    }
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Timer for display
  let elapsedTime = $state(0);
  $effect(() => {
    const interval = setInterval(() => {
      elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div class="exercise-phase">
  <div class="phase-header">
    <div class="phase-info">
      <h2 class="phase-title">{phaseName()}</h2>
      <p class="phase-subtitle">
        {#if mode === 'guided'}
          Hinweise verfügbar – Nimm dir Zeit zum Lernen
        {:else if mode === 'independent'}
          Übe selbstständig und festige dein Wissen
        {:else}
          Zeige, was du gelernt hast
        {/if}
      </p>
    </div>
    <div class="timer">
      ⏱️ {formatTime(elapsedTime)}
    </div>
  </div>

  <div class="progress-section">
    <div class="progress-info">
      <span class="progress-text">
        Aufgabe {currentIndex + 1} von {exercises.length}
      </span>
      {#if attempts.length > 0}
        <span class="accuracy-badge" class:high={accuracy >= 80} class:medium={accuracy >= 60 && accuracy < 80} class:low={accuracy < 60}>
          {accuracy.toFixed(0)}% richtig
        </span>
      {/if}
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: {progressPercent}%"></div>
    </div>
  </div>

  <div class="exercise-container">
    {#if !showFeedback}
      <ExerciseCard
        exercise={currentExercise}
        onAnswer={handleAnswer}
        showHints={showHints}
      />
    {:else if currentAttempt}
      <ExerciseFeedback
        correct={currentAttempt.correct}
        explanation={currentExercise.explanation}
        correctAnswer={currentExercise.correctAnswer}
        userAnswer={currentAttempt.userAnswer}
        onContinue={handleContinue}
      />
    {/if}
  </div>

  {#if mode !== 'assessment'}
    <div class="phase-stats">
      <div class="stat">
        <span class="stat-value">{correctCount}</span>
        <span class="stat-label">Richtig</span>
      </div>
      <div class="stat">
        <span class="stat-value">{attempts.length - correctCount}</span>
        <span class="stat-label">Falsch</span>
      </div>
      <div class="stat">
        <span class="stat-value">{exercises.length - attempts.length}</span>
        <span class="stat-label">Verbleibend</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .exercise-phase {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .phase-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .phase-info {
    flex: 1;
  }

  .phase-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 0.5rem 0;
  }

  .phase-subtitle {
    font-size: 1rem;
    color: #6B7280;
    margin: 0;
  }

  .timer {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4B5563;
    padding: 0.75rem 1.5rem;
    background: #F3F4F6;
    border-radius: 0.5rem;
  }

  .progress-section {
    margin-bottom: 2rem;
  }

  .progress-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .progress-text {
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
  }

  .accuracy-badge {
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    color: white;
  }

  .accuracy-badge.high {
    background: #10B981;
  }

  .accuracy-badge.medium {
    background: #F59E0B;
  }

  .accuracy-badge.low {
    background: #EF4444;
  }

  .progress-bar {
    width: 100%;
    height: 0.75rem;
    background: #E5E7EB;
    border-radius: 0.375rem;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3B82F6 0%, #2563EB 100%);
    transition: width 0.3s ease;
  }

  .exercise-container {
    margin-bottom: 2rem;
  }

  .phase-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #F9FAFB;
    border-radius: 0.75rem;
    border: 2px solid #E5E7EB;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #6B7280;
    text-transform: uppercase;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .exercise-phase {
      padding: 1rem 0.5rem;
    }

    .phase-header {
      flex-direction: column;
      gap: 1rem;
    }

    .timer {
      width: 100%;
      text-align: center;
    }

    .phase-title {
      font-size: 1.5rem;
    }

    .phase-stats {
      grid-template-columns: 1fr;
    }
  }
</style>
