<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Lesson, LessonPhase } from '$lib/types';
  import { LessonFlowState, getPhaseDisplayName, getAllPhases, getPhaseIndex } from '$lib/lessonFlow';

  import IntroductionPhase from './IntroductionPhase.svelte';
  import TeachingPhase from './TeachingPhase.svelte';
  import ExercisePhase from './ExercisePhase.svelte';
  import ReviewPhase from './ReviewPhase.svelte';

  interface Props {
    lesson: Lesson;
    onExit?: () => void;
  }

  let { lesson, onExit }: Props = $props();

  // State
  let flowState = $state<LessonFlowState | null>(null);
  let currentPhase = $state<LessonPhase>('introduction');
  let loading = $state(true);
  let error = $state<string | null>(null);
  let overallProgress = $state(0);
  let showExitDialog = $state(false);
  let isPaused = $state(false);

  // Timer for auto-saving progress
  let saveInterval: ReturnType<typeof setInterval> | null = null;

  // Initialize lesson flow
  onMount(async () => {
    try {
      // Load or create lesson flow state
      const { createLessonFlow } = await import('$lib/lessonFlow');

      // Try to load, but don't block if DB fails
      try {
        flowState = await createLessonFlow(lesson);
        const progress = flowState.getProgress();
        if (progress) {
          currentPhase = progress.phase;
        }
        overallProgress = flowState.getOverallProgress();
      } catch (dbError) {
        console.warn('DB error, continuing without saved progress:', dbError);
        // Create in-memory only state
        const { LessonFlowState } = await import('$lib/lessonFlow');
        flowState = new LessonFlowState(lesson);
        await flowState.startLesson();
      }

      // Auto-save every 30 seconds
      saveInterval = setInterval(async () => {
        if (flowState && !isPaused) {
          try {
            await flowState.pauseLesson();
          } catch (e) {
            console.warn('Auto-save failed:', e);
          }
        }
      }, 30000);

      loading = false;
    } catch (err) {
      console.error('Failed to initialize lesson:', err);
      error = err instanceof Error ? err.message : 'Lektion konnte nicht geladen werden';
      loading = false;
    }
  });

  onDestroy(() => {
    if (saveInterval) {
      clearInterval(saveInterval);
    }
    // Save progress on exit
    if (flowState && !isPaused) {
      flowState.pauseLesson();
    }
  });

  // Handle phase completion
  async function handlePhaseComplete() {
    if (!flowState) return;

    try {
      console.log('Completing phase, current progress:', flowState.getProgress()?.currentPhaseProgress);
      const nextPhase = await flowState.completePhase();

      if (nextPhase) {
        currentPhase = nextPhase;
        overallProgress = flowState.getOverallProgress();
      } else {
        // Lesson complete
        if (onExit) onExit();
      }
    } catch (err) {
      console.error('Phase completion error:', err);
      error = err instanceof Error ? err.message : 'Failed to advance phase';
    }
  }

  // Handle progress updates
  async function handleProgressUpdate(progress: number) {
    if (!flowState) return;
    await flowState.updateProgress(progress);
    overallProgress = flowState.getOverallProgress();
  }

  // Handle exercise completion
  async function handleExerciseComplete(correct: boolean) {
    if (!flowState) return;
    await flowState.recordExercise(correct);
  }

  // Handle assessment completion
  async function handleAssessmentComplete() {
    if (!flowState) return;
    try {
      // Capture the assessment score before advancing
      const progress = flowState.getProgress();
      const score = progress ? progress.accuracy : 0;

      // Advance assessment → review FIRST so the Review screen is shown.
      // (completeLesson sets the phase to 'review', which would make
      // completePhase find no next phase and exit the lesson entirely.)
      await handlePhaseComplete();

      // Persist the score and pass/fail state. The score is saved even on a
      // failing grade, so the user can continue and redo it later.
      await flowState.completeLesson(score);
      overallProgress = flowState.getOverallProgress();
    } catch (err) {
      console.error('Assessment completion error:', err);
      error = err instanceof Error ? err.message : 'Bewertung konnte nicht abgeschlossen werden';
    }
  }

  // Handle review (final phase) completion: mark the lesson fully complete,
  // then return to the lesson overview.
  async function handleReviewComplete() {
    if (!flowState) {
      if (onExit) onExit();
      return;
    }
    try {
      await flowState.completePhase();
    } catch (err) {
      console.warn('Review completion error:', err);
    }
    if (onExit) onExit();
  }

  // Handle pause
  async function handlePause() {
    if (!flowState) return;
    await flowState.pauseLesson();
    isPaused = true;
  }

  // Handle resume
  function handleResume() {
    if (!flowState) return;
    flowState.resumeLesson();
    isPaused = false;
  }

  // Handle exit request
  function handleExitRequest() {
    const config = flowState?.getPhaseConfig();
    if (config && !config.canPause) {
      error = 'Cannot exit during assessment';
      return;
    }
    showExitDialog = true;
  }

  // Confirm exit
  async function confirmExit() {
    if (flowState) {
      await flowState.pauseLesson();
    }
    if (onExit) onExit();
  }

  // Get phase info for progress bar
  const allPhases = getAllPhases();
  const phaseInfo = $derived(allPhases.map((phase, index) => ({
    phase,
    name: getPhaseDisplayName(phase),
    completed: flowState?.getProgress()?.phasesCompleted.includes(phase) || false,
    current: phase === currentPhase,
    index
  })));

  const currentPhaseIndex = $derived(getPhaseIndex(currentPhase));

  // Navigation functions
  function canGoToPhase(phase: LessonPhase): boolean {
    if (!flowState) return false;
    const progress = flowState.getProgress();
    if (!progress) return phase === 'introduction';

    // Can always go back to completed phases
    if (progress.phasesCompleted.includes(phase)) return true;

    // Can go to current phase
    if (phase === progress.phase) return true;

    return false;
  }

  function goToPhase(phase: LessonPhase) {
    if (canGoToPhase(phase)) {
      currentPhase = phase;
    }
  }

  function goToPreviousPhase() {
    const currentIndex = getPhaseIndex(currentPhase);
    if (currentIndex > 0) {
      const previousPhase = allPhases[currentIndex - 1];
      if (canGoToPhase(previousPhase)) {
        currentPhase = previousPhase;
      }
    }
  }

  function goToNextPhase() {
    handlePhaseComplete();
  }

  const canGoBack = $derived(currentPhaseIndex > 0);
  const canGoForward = $derived(flowState?.canAdvance() || false);
</script>

<div class="lesson-container">
  <!-- Header with progress -->
  <header class="lesson-header">
    <div class="header-top">
      <div class="lesson-info">
        <h1>{lesson.meta.titleGerman}</h1>
        <p class="lesson-number">Lektion {lesson.meta.number}</p>
      </div>

      <div class="header-actions">
        {#if flowState}
          <div class="time-info">
            <span class="icon">⏱️</span>
            <span>{flowState.getTimeSpent()} min</span>
          </div>
        {/if}

        <button class="btn-icon" onclick={handleExitRequest} title="Lektion verlassen">
          ✕
        </button>
      </div>
    </div>

    <!-- Phase progress bar -->
    <div class="phase-progress">
      {#each phaseInfo as phase}
        <button
          class="phase-step"
          class:completed={phase.completed}
          class:current={phase.current}
          class:clickable={canGoToPhase(phase.phase)}
          onclick={() => goToPhase(phase.phase)}
          disabled={!canGoToPhase(phase.phase)}
          title={canGoToPhase(phase.phase) ? `Gehe zu ${phase.name}` : phase.name}
        >
          <div class="phase-circle">
            {#if phase.completed}
              ✓
            {:else}
              {phase.index + 1}
            {/if}
          </div>
          <span class="phase-name">{phase.name}</span>
        </button>

        {#if phase.index < allPhases.length - 1}
          <div class="phase-connector" class:completed={phase.completed}></div>
        {/if}
      {/each}
    </div>

    <!-- Navigation buttons -->
    <div class="phase-nav-buttons">
      <button
        class="phase-nav-btn"
        onclick={goToPreviousPhase}
        disabled={!canGoBack}
      >
        ← Zurück
      </button>
      <button
        class="phase-nav-btn phase-nav-btn-forward"
        onclick={goToNextPhase}
        disabled={!canGoForward}
      >
        Weiter →
      </button>
    </div>

    <!-- Overall progress bar -->
    <div class="overall-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: {overallProgress}%"></div>
      </div>
      <span class="progress-text">{Math.round(overallProgress)}%</span>
    </div>
  </header>

  <!-- Main content area -->
  <main class="lesson-content">
    {#if loading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Lektion wird geladen...</p>
      </div>
    {:else if error}
      <div class="error">
        <p>⚠️ {error}</p>
        <button class="btn-primary" onclick={() => error = null}>Schließen</button>
      </div>
    {:else if isPaused}
      <div class="paused-state">
        <h2>Lektion pausiert</h2>
        <p>Mach eine Pause! Dein Fortschritt wurde gespeichert.</p>
        <button class="btn-primary" onclick={handleResume}>Lektion fortsetzen</button>
        <button class="btn-secondary" onclick={confirmExit}>Lektion verlassen</button>
      </div>
    {:else if flowState}
      {#if currentPhase === 'introduction'}
        <IntroductionPhase
          {lesson}
          onComplete={handlePhaseComplete}
        />
      {:else if currentPhase === 'teaching'}
        <TeachingPhase
          {lesson}
          onComplete={handlePhaseComplete}
          onProgress={handleProgressUpdate}
        />
      {:else if currentPhase === 'guided-practice'}
        <ExercisePhase
          exercises={lesson.guidedPractice}
          mode="guided"
          onComplete={handlePhaseComplete}
          onProgress={handleProgressUpdate}
          onExerciseComplete={handleExerciseComplete}
        />
      {:else if currentPhase === 'independent-practice'}
        <ExercisePhase
          exercises={lesson.independentPractice}
          mode="independent"
          onComplete={handlePhaseComplete}
          onProgress={handleProgressUpdate}
          onExerciseComplete={handleExerciseComplete}
        />
      {:else if currentPhase === 'assessment'}
        <ExercisePhase
          exercises={lesson.assessment}
          mode="assessment"
          onComplete={handleAssessmentComplete}
          onProgress={handleProgressUpdate}
          onExerciseComplete={handleExerciseComplete}
        />
      {:else if currentPhase === 'review'}
        <ReviewPhase
          {lesson}
          progress={flowState.getProgress()}
          onComplete={handleReviewComplete}
        />
      {/if}
    {/if}
  </main>

  <!-- Exit confirmation dialog -->
  {#if showExitDialog}
    <div class="dialog-overlay" onclick={() => showExitDialog = false}>
      <div class="dialog" onclick={(e) => e.stopPropagation()}>
        <h3>Lektion verlassen?</h3>
        <p>Dein Fortschritt wird gespeichert. Du kannst später weitermachen.</p>
        <div class="dialog-actions">
          <button class="btn-secondary" onclick={() => showExitDialog = false}>
            Abbrechen
          </button>
          <button class="btn-primary" onclick={confirmExit}>
            Verlassen
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .lesson-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-background);
  }

  .lesson-header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: 1.5rem;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .lesson-info h1 {
    font-size: 1.5rem;
    margin: 0 0 0.25rem 0;
    color: #111827;
  }

  .lesson-number {
    font-size: 0.875rem;
    color: #6B7280;
    margin: 0;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .time-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  .btn-icon {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0.25rem;
    border-radius: 4px;
  }

  .btn-icon:hover {
    background: var(--color-hover);
  }

  /* Phase progress */
  .phase-progress {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    overflow-x: auto;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  .phase-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: default;
    transition: all 0.2s;
  }

  .phase-step.clickable {
    cursor: pointer;
  }

  .phase-step.clickable:hover:not(.current) {
    transform: scale(1.05);
  }

  .phase-step:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .phase-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #E5E7EB;
    background: white;
    color: #9CA3AF;
    font-size: 0.875rem;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .phase-step.current .phase-circle {
    border-color: #3B82F6;
    background: #3B82F6;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    transform: scale(1.1);
  }

  .phase-step.completed .phase-circle {
    border-color: #10B981;
    background: #10B981;
    color: white;
  }

  .phase-name {
    font-size: 0.75rem;
    color: #6B7280;
    max-width: 5rem;
    text-align: center;
    font-weight: 500;
  }

  .phase-step.current .phase-name {
    color: #3B82F6;
    font-weight: 700;
  }

  .phase-step.completed .phase-name {
    color: #10B981;
    font-weight: 600;
  }

  .phase-connector {
    width: 3rem;
    height: 3px;
    background: #E5E7EB;
    margin: 0 0.5rem;
    margin-bottom: 1.5rem;
    transition: background 0.3s ease;
  }

  .phase-connector.completed {
    background: #10B981;
  }

  /* Overall progress bar */
  .overall-progress {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .progress-bar {
    flex: 1;
    height: 0.5rem;
    background: var(--color-border);
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }

  .progress-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    min-width: 3rem;
    text-align: right;
  }

  /* Phase navigation buttons */
  .phase-nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .phase-nav-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    background: #F3F4F6;
    color: #374151;
  }

  .phase-nav-btn:hover:not(:disabled) {
    background: #E5E7EB;
    transform: translateY(-1px);
  }

  .phase-nav-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .phase-nav-btn-forward {
    background: #3B82F6;
    color: white;
  }

  .phase-nav-btn-forward:hover:not(:disabled) {
    background: #2563EB;
  }

  /* Main content */
  .lesson-content {
    flex: 1;
    overflow-y: auto;
  }

  .loading, .error, .paused-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 1rem;
  }

  .spinner {
    width: 3rem;
    height: 3rem;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error p {
    color: var(--color-error);
    font-size: 1rem;
  }

  .paused-state h2 {
    margin: 0;
    color: var(--color-text-primary);
  }

  .paused-state p {
    margin: 0;
    color: var(--color-text-secondary);
  }

  /* Dialog */
  .dialog-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .dialog {
    background: var(--color-surface);
    border-radius: 8px;
    padding: 1.5rem;
    max-width: 400px;
    width: 90%;
  }

  .dialog h3 {
    margin: 0 0 1rem 0;
    color: var(--color-text-primary);
  }

  .dialog p {
    margin: 0 0 1.5rem 0;
    color: var(--color-text-secondary);
  }

  .dialog-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  /* Buttons */
  .btn-primary, .btn-secondary {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }

  .btn-primary {
    background: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--color-primary-dark);
  }

  .btn-secondary {
    background: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
  }

  .btn-secondary:hover {
    background: var(--color-hover);
  }
</style>
