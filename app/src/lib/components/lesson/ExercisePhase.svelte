<script lang="ts">
  import type { Exercise } from '$lib/types';
  import BaseExercisePhase from '../ExercisePhase.svelte';

  interface Props {
    exercises: Exercise[];
    mode: 'guided' | 'independent' | 'assessment';
    onComplete: (score?: number) => void;
    onProgress: (progress: number) => void;
    onExerciseComplete: (correct: boolean) => void;
  }

  let { exercises, mode, onComplete, onProgress, onExerciseComplete }: Props = $props();

  // Handle exercise results from base component
  function handleExerciseComplete(results: {
    totalExercises: number;
    correctAnswers: number;
    accuracy: number;
    timeSpentSeconds: number;
    attempts: Array<{ exerciseId: string; userAnswer: string; correct: boolean; timeSpentMs: number }>;
  }) {
    // Update progress
    onProgress(100);

    // Report each exercise completion for tracking
    results.attempts.forEach(attempt => {
      onExerciseComplete(attempt.correct);
    });

    // For assessment mode, pass score; otherwise just complete
    if (mode === 'assessment') {
      onComplete(results.accuracy);
    } else {
      onComplete();
    }
  }
</script>

<BaseExercisePhase
  {exercises}
  phaseType={mode}
  onComplete={handleExerciseComplete}
/>
