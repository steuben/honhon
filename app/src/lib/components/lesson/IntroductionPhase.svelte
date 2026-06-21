<script lang="ts">
  import type { Lesson } from '$lib/types';

  interface Props {
    lesson: Lesson;
    onComplete: () => void;
  }

  let { lesson, onComplete }: Props = $props();
</script>

<div class="introduction-phase">
  <div class="container">
    <header class="phase-header">
      <h2>Willkommen zu Lektion {lesson.meta.number}</h2>
      <h1>{lesson.meta.titleGerman}</h1>
      <p class="subtitle">{lesson.meta.title}</p>
    </header>

    <section class="objectives">
      <h3>Lernziele</h3>
      <ul>
        {#each lesson.introduction.objectives as objective}
          <li>{objective}</li>
        {/each}
      </ul>
    </section>

    {#if lesson.introduction.motivation}
      <section class="motivation">
        <h3>Warum das wichtig ist</h3>
        <p>{lesson.introduction.motivation}</p>
      </section>
    {/if}

    {#if lesson.introduction.culturalNote}
      <section class="cultural-note">
        <h3>🇫🇷 Kulturelle Notiz</h3>
        <p>{lesson.introduction.culturalNote}</p>
      </section>
    {/if}

    <section class="lesson-info">
      <div class="info-card">
        <span class="icon">⏱️</span>
        <div>
          <strong>{lesson.meta.estimatedMinutes} Minuten</strong>
          <p>Geschätzte Zeit</p>
        </div>
      </div>

      <div class="info-card">
        <span class="icon">📊</span>
        <div>
          <strong>{lesson.meta.level}</strong>
          <p>Schwierigkeit</p>
        </div>
      </div>

      {#if lesson.meta.prerequisites.length > 0}
        <div class="info-card">
          <span class="icon">📚</span>
          <div>
            <strong>{lesson.meta.prerequisites.length} Voraussetzung(en)</strong>
            <p>Vorwissen</p>
          </div>
        </div>
      {/if}
    </section>

    <div class="start-action">
      <button class="btn-start" onclick={onComplete}>
        Lektion starten
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</div>

<style>
  .introduction-phase {
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

  .phase-header h2 {
    font-size: 1rem;
    color: var(--color-primary);
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .phase-header h1 {
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    color: var(--color-text-primary);
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    font-style: italic;
    margin: 0;
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

  .objectives ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .objectives li {
    padding: 0.75rem;
    padding-left: 2rem;
    position: relative;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .objectives li::before {
    content: '✓';
    position: absolute;
    left: 0.5rem;
    color: var(--color-primary);
    font-weight: bold;
  }

  .motivation p {
    margin: 0;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .cultural-note {
    background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%);
    border: 1px solid var(--color-primary);
  }

  .cultural-note h3 {
    color: var(--color-primary);
  }

  .cultural-note p {
    margin: 0;
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  .lesson-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .info-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .info-card .icon {
    font-size: 2rem;
  }

  .info-card strong {
    display: block;
    color: var(--color-text-primary);
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .info-card p {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }

  .start-action {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .btn-start {
    background: #3B82F6;
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.2s;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  }

  .btn-start:hover {
    background: #2563EB;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
  }

  .arrow {
    font-size: 1.5rem;
    transition: transform 0.2s;
  }

  .btn-start:hover .arrow {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    .phase-header h1 {
      font-size: 1.75rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .lesson-info {
      grid-template-columns: 1fr;
    }
  }
</style>
