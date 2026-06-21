<script lang="ts">
  import type { Lesson, LessonProgress } from '$lib/types';

  interface Props {
    lesson: Lesson;
    progress: LessonProgress | null;
    onComplete: () => void;
  }

  let { lesson, progress, onComplete }: Props = $props();

  const passed = $derived(progress?.assessmentPassed || false);
  const score = $derived(progress?.assessmentScore || 0);
  const accuracy = $derived(progress?.accuracy || 0);
  const timeSpent = $derived(progress ? Math.floor(progress.timeSpentSeconds / 60) : 0);
  const exercisesCompleted = $derived(progress?.exercisesAttempted || 0);
</script>

<div class="review-phase">
  <div class="container">
    <header class="phase-header">
      {#if passed}
        <div class="success-badge">✓</div>
        <h1>Ausgezeichnete Arbeit!</h1>
        <p class="subtitle">Du hast diese Lektion abgeschlossen</p>
      {:else}
        <div class="retry-badge">↻</div>
        <h1>Weiter üben!</h1>
        <p class="subtitle">Du machst Fortschritte!</p>
      {/if}
    </header>

    <!-- Performance stats -->
    <section class="stats">
      <div class="stat-card" class:passed>
        <span class="stat-label">Bewertungspunktzahl</span>
        <span class="stat-value">{Math.round(score)}%</span>
        <span class="stat-indicator">{passed ? 'Bestanden' : 'Muss überprüft werden'}</span>
      </div>

      <div class="stat-card">
        <span class="stat-label">Gesamtgenauigkeit</span>
        <span class="stat-value">{Math.round(accuracy)}%</span>
      </div>

      <div class="stat-card">
        <span class="stat-label">Verbrachte Zeit</span>
        <span class="stat-value">{timeSpent}<span class="unit">min</span></span>
      </div>

      <div class="stat-card">
        <span class="stat-label">Übungen</span>
        <span class="stat-value">{exercisesCompleted}</span>
      </div>
    </section>

    <!-- Lesson summary -->
    <section class="summary">
      <h3>Was du gelernt hast</h3>
      <ul>
        {#each lesson.review.summary as point}
          <li>{point}</li>
        {/each}
      </ul>
    </section>

    <!-- Performance feedback -->
    {#if passed}
      <section class="feedback success">
        <h3>🎉 Großartige Fortschritte!</h3>
        <p>
          Du hast ein starkes Verständnis des Materials gezeigt. Der Wortschatz
          und die Konzepte aus dieser Lektion werden in deine Wiederholungssitzungen
          aufgenommen, um dein Lernen zu festigen.
        </p>
      </section>
    {:else}
      <section class="feedback retry">
        <h3>💪 Weiter so!</h3>
        <p>
          Eine Sprache zu lernen braucht Übung. Überprüfe das Material noch einmal und
          probiere die Übungen in deinem eigenen Tempo. Du kannst die Bewertung wiederholen,
          wenn du bereit bist.
        </p>
      </section>
    {/if}

    <!-- Weak areas (if applicable) -->
    {#if !passed && accuracy < 70}
      <section class="weak-areas">
        <h3>Zu überprüfende Bereiche</h3>
        <ul>
          <li>Überprüfe den Lernabschnitt für Schlüsselkonzepte</li>
          <li>Übe die geführten Übungen noch einmal</li>
          <li>Konzentriere dich auf den Wortschatz aus dieser Lektion</li>
        </ul>
      </section>
    {/if}

    <!-- Next steps -->
    <section class="next-steps">
      <h3>Was kommt als nächstes?</h3>
      {#if passed && lesson.review.nextLesson}
        <p>
          Bereit weiterzumachen? Gehe zur nächsten Lektion, um auf dem Gelernten aufzubauen.
        </p>
        <div class="actions">
          <a href="/lektion/{lesson.review.nextLesson}" class="btn-primary">
            Nächste Lektion →
          </a>
          <button class="btn-secondary" onclick={onComplete}>
            Zurück zu Lektionen
          </button>
        </div>
      {:else if !passed}
        <p>
          Nimm dir Zeit, das Material zu überprüfen, und versuche dann die Lektion erneut, wenn du bereit bist.
        </p>
        <div class="actions">
          <button class="btn-primary" onclick={() => window.location.reload()}>
            Lektion wiederholen
          </button>
          <button class="btn-secondary" onclick={onComplete}>
            Zurück zu Lektionen
          </button>
        </div>
      {:else}
        <p>
          Großartige Arbeit beim Abschließen dieser Lektion! Kehre zur Lektionsliste zurück, um deine Lernreise fortzusetzen.
        </p>
        <div class="actions">
          <button class="btn-primary" onclick={onComplete}>
            Zurück zu Lektionen
          </button>
        </div>
      {/if}
    </section>
  </div>
</div>

<style>
  .review-phase {
    min-height: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
  }

  .container {
    max-width: 800px;
    width: 100%;
  }

  .phase-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .success-badge, .retry-badge {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    margin: 0 auto 1rem;
  }

  .success-badge {
    background: var(--color-success);
    color: white;
  }

  .retry-badge {
    background: var(--color-warning);
    color: white;
  }

  .phase-header h1 {
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    color: var(--color-text-primary);
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .stat-card.passed {
    border-color: var(--color-success);
    background: linear-gradient(135deg, #f0fff4 0%, #e6f9e9 100%);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-text-primary);
  }

  .stat-value .unit {
    font-size: 1rem;
    font-weight: normal;
    color: var(--color-text-secondary);
  }

  .stat-indicator {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    background: var(--color-success);
    color: white;
  }

  section {
    background: var(--color-surface);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem 0;
    color: var(--color-text-primary);
  }

  .summary ul, .weak-areas ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .summary li, .weak-areas li {
    padding: 0.75rem;
    padding-left: 2rem;
    position: relative;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .summary li::before {
    content: '✓';
    position: absolute;
    left: 0.5rem;
    color: var(--color-success);
    font-weight: bold;
  }

  .weak-areas li::before {
    content: '!';
    position: absolute;
    left: 0.5rem;
    color: var(--color-warning);
    font-weight: bold;
  }

  .feedback {
    border: 2px solid;
  }

  .feedback.success {
    border-color: var(--color-success);
    background: linear-gradient(135deg, #f0fff4 0%, #e6f9e9 100%);
  }

  .feedback.retry {
    border-color: var(--color-warning);
    background: linear-gradient(135deg, #fffbf0 0%, #fff4e6 100%);
  }

  .feedback p {
    margin: 0;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .next-steps p {
    margin: 0 0 1.5rem 0;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
  }

  .btn-primary {
    background: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
  }

  .btn-secondary:hover {
    background: var(--color-hover);
  }

  @media (max-width: 640px) {
    .phase-header h1 {
      font-size: 1.75rem;
    }

    .stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .actions {
      flex-direction: column;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      text-align: center;
    }
  }
</style>
