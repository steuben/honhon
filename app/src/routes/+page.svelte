<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { getLessonStats, getAllLessonProgress } from '$lib/db/lessonQueries';

  let stats = $state({
    totalLessons: 12,
    completedLessons: 0,
    inProgressLessons: 0,
    averageAccuracy: 0,
    totalTimeMinutes: 0
  });

  let loading = $state(true);
  let currentLesson = $state<any>(null);
  let progressMap = $state<Record<string, any>>({});

  const lessons = [
    { id: 'lesson-01', number: 1, title: 'Premiers Pas', titleGerman: 'Erste Schritte', description: 'Begrüßungen, être, Aussprache' },
    { id: 'lesson-02', number: 2, title: 'Chiffres et Informations', titleGerman: 'Zahlen & Infos', description: 'Zahlen 0-30, Alter, avoir', locked: true },
    { id: 'lesson-03', number: 3, title: 'La Famille', titleGerman: 'Die Familie', description: 'Familienmitglieder, Possessiv-Adjektive', locked: true },
    { id: 'lesson-04', number: 4, title: 'Professions', titleGerman: 'Berufe', description: 'Berufe, -ER Verben, Aktivitäten', locked: true },
    { id: 'lesson-05', number: 5, title: 'La Maison', titleGerman: 'Das Haus', description: 'Zimmer, Orte, Präpositionen', locked: true },
    { id: 'lesson-06', number: 6, title: 'Le Temps', titleGerman: 'Die Zeit', description: 'Uhrzeiten, Tagesablauf, reflexive Verben', locked: true },
    { id: 'lesson-07', number: 7, title: 'La Nourriture', titleGerman: 'Das Essen', description: 'Essen, Einkaufen, Teilungsartikel', locked: true },
    { id: 'lesson-08', number: 8, title: 'Les Vêtements', titleGerman: 'Kleidung', description: 'Kleidung, Farben, Demonstrativ-Adjektive', locked: true },
    { id: 'lesson-09', number: 9, title: 'La Météo', titleGerman: 'Das Wetter', description: 'Wetter, Jahreszeiten, Monate', locked: true },
    { id: 'lesson-10', number: 10, title: 'Les Transports', titleGerman: 'Transport', description: 'Verkehrsmittel, Wegbeschreibungen, Imperativ', locked: true },
    { id: 'lesson-11', number: 11, title: 'Les Loisirs', titleGerman: 'Hobbies', description: 'Freizeitaktivitäten, Sport, Musik', locked: true },
    { id: 'lesson-12', number: 12, title: 'Plans et Projets', titleGerman: 'Pläne', description: 'Zukunftspläne, Einladungen, pouvoir', locked: true }
  ];

  onMount(async () => {
    await loadStats();
  });

  async function loadStats() {
    loading = true;
    try {
      const dbStats = await getLessonStats();
      progressMap = await getAllLessonProgress();

      // Total is the curriculum size, not the number of DB records
      stats = { ...dbStats, totalLessons: lessons.length };

      // The current lesson is the first one still in progress
      currentLesson =
        lessons.map(l => progressMap[l.id]).find(p => p?.status === 'in-progress') || null;
    } catch (error) {
      console.error('Failed to load stats:', error);
    } finally {
      loading = false;
    }
  }

  // A lesson is unlocked if it's the first one or the previous lesson is completed
  function isLessonLocked(index: number): boolean {
    if (index === 0) return false;
    const previous = lessons[index - 1];
    return progressMap[previous.id]?.status !== 'completed';
  }
</script>

<svelte:head>
  <title>HonHon - Französisch Lernen</title>
</svelte:head>

<div class="dashboard">
  <header class="header">
    <h1 class="title">🇫🇷 HonHon</h1>
    <p class="subtitle">Strukturiertes Französisch-Lernen</p>
  </header>

  {#if loading}
    <div class="loading">
      <p>Lade Lektionen...</p>
    </div>
  {:else}
    <!-- Stats Overview -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-content">
          <p class="stat-label">Lektionen</p>
          <p class="stat-value">{stats.completedLessons}/{stats.totalLessons}</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-content">
          <p class="stat-label">Genauigkeit</p>
          <p class="stat-value">{stats.averageAccuracy.toFixed(0)}%</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">⏱️</div>
        <div class="stat-content">
          <p class="stat-label">Lernzeit</p>
          <p class="stat-value">{Math.floor(stats.totalTimeMinutes)} Min</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🚀</div>
        <div class="stat-content">
          <p class="stat-label">Level</p>
          <p class="stat-value">A1</p>
        </div>
      </div>
    </div>

    <!-- Continue Current Lesson -->
    {#if currentLesson && currentLesson.status === 'in-progress'}
      <div class="continue-section">
        <h2>Fortsetzen</h2>
        <a href="{base}/lektion/{currentLesson.lessonId}" class="continue-card">
          <div class="continue-content">
            <span class="continue-label">Lektion {lessons.find(l => l.id === currentLesson.lessonId)?.number}</span>
            <h3>{lessons.find(l => l.id === currentLesson.lessonId)?.titleGerman}</h3>
            <div class="progress-bar-mini">
              <div class="progress-fill" style="width: {currentLesson.currentPhaseProgress}%"></div>
            </div>
            <p class="continue-phase">Phase: {currentLesson.phase}</p>
          </div>
          <span class="continue-arrow">→</span>
        </a>
      </div>
    {/if}

    <!-- Lesson Grid -->
    <section class="lessons-section">
      <h2>Alle Lektionen (A1)</h2>
      <div class="lessons-grid">
        {#each lessons as lesson, index}
          {@const progress = progressMap[lesson.id] || null}
          {@const isLocked = isLessonLocked(index) && progress?.status !== 'completed'}

          <a
            href={isLocked ? '#' : `${base}/lektion/${lesson.id}`}
            class="lesson-card"
            class:locked={isLocked}
            class:completed={progress?.status === 'completed'}
            class:in-progress={progress?.status === 'in-progress'}
          >
            <div class="lesson-number">
              {#if progress?.status === 'completed'}
                ✓
              {:else if isLocked}
                🔒
              {:else}
                {lesson.number}
              {/if}
            </div>
            <div class="lesson-content">
              <h3 class="lesson-title">{lesson.titleGerman}</h3>
              <p class="lesson-subtitle">{lesson.title}</p>
              <p class="lesson-description">{lesson.description}</p>

              {#if progress?.status === 'in-progress'}
                <div class="lesson-progress">
                  <div class="progress-bar-small">
                    <div class="progress-fill" style="width: {((progress.phasesCompleted?.length || 0) / 6) * 100}%"></div>
                  </div>
                  <span class="progress-text">{progress.phasesCompleted?.length || 0}/6 Phasen</span>
                </div>
              {:else if progress?.status === 'completed'}
                <div class="lesson-complete">
                  <span class="complete-badge">Abgeschlossen ✓</span>
                  <span class="score">{progress.assessmentScore}%</span>
                </div>
              {/if}
            </div>
          </a>
        {/each}
      </div>
    </section>

    <!-- Info Section -->
    <section class="info-section">
      <h2>Über HonHon</h2>
      <div class="info-grid">
        <div class="info-card">
          <h3>📖 Strukturiertes Lernen</h3>
          <p>12 aufeinander aufbauende Lektionen führen dich von Null auf A1-Niveau</p>
        </div>
        <div class="info-card">
          <h3>🎓 6-Phasen-System</h3>
          <p>Jede Lektion: Einführung → Lehren → Üben → Testen → Zusammenfassung</p>
        </div>
        <div class="info-card">
          <h3>🇩🇪 Für Deutsche</h3>
          <p>Speziell auf deutsche Muttersprachler zugeschnitten</p>
        </div>
        <div class="info-card">
          <h3>💾 Automatisches Speichern</h3>
          <p>Dein Fortschritt wird automatisch gespeichert</p>
        </div>
      </div>
    </section>
  {/if}
</div>

<style>
  .dashboard {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 3rem;
    font-weight: 800;
    color: #111827;
    margin: 0;
    font-family: var(--font-sans);
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6B7280;
    margin: 0.5rem 0 0 0;
    font-family: var(--font-serif);
    font-style: italic;
  }

  .loading {
    text-align: center;
    padding: 3rem 0;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .stat-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #6B7280;
    margin: 0;
    font-weight: 600;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  /* Continue Section */
  .continue-section {
    margin-bottom: 3rem;
  }

  .continue-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #111827;
  }

  .continue-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    color: white;
    border-radius: 1rem;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    transition: transform 0.2s;
  }

  .continue-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4);
  }

  .continue-label {
    font-size: 0.875rem;
    opacity: 0.9;
  }

  .continue-card h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  .progress-bar-mini {
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    overflow: hidden;
    margin: 0.75rem 0;
  }

  .progress-fill {
    height: 100%;
    background: white;
    transition: width 0.3s;
  }

  .continue-phase {
    font-size: 0.875rem;
    margin: 0;
    opacity: 0.9;
  }

  .continue-arrow {
    font-size: 2rem;
  }

  /* Lessons Section */
  .lessons-section {
    margin-bottom: 3rem;
  }

  .lessons-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #111827;
  }

  .lessons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .lesson-card {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 2px solid transparent;
  }

  .lesson-card:hover:not(.locked) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-color: #3B82F6;
  }

  .lesson-card.locked {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lesson-card.in-progress {
    border-color: #F59E0B;
  }

  .lesson-card.completed {
    border-color: #10B981;
    background: linear-gradient(135deg, #F0FDF4 0%, white 100%);
  }

  .lesson-number {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .lesson-card.completed .lesson-number {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  }

  .lesson-card.locked .lesson-number {
    background: #9CA3AF;
  }

  .lesson-content {
    flex: 1;
  }

  .lesson-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 0.25rem 0;
    font-family: var(--font-serif);
    letter-spacing: -0.01em;
  }

  .lesson-subtitle {
    font-size: 0.875rem;
    color: #6B7280;
    font-style: italic;
    margin: 0 0 0.5rem 0;
    font-family: var(--font-serif);
  }

  .lesson-description {
    font-size: 0.9375rem;
    color: #4B5563;
    margin: 0;
    font-family: var(--font-serif);
    line-height: 1.5;
  }

  .lesson-progress {
    margin-top: 0.75rem;
  }

  .progress-bar-small {
    height: 4px;
    background: #E5E7EB;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 0.25rem;
  }

  .progress-text {
    font-size: 0.75rem;
    color: #6B7280;
  }

  .lesson-complete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
  }

  .complete-badge {
    font-size: 0.75rem;
    font-weight: 600;
    color: #059669;
  }

  .score {
    font-size: 0.875rem;
    font-weight: 700;
    color: #10B981;
  }

  /* Info Section */
  .info-section {
    margin-bottom: 2rem;
  }

  .info-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #111827;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .info-card {
    padding: 1.5rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .info-card h3 {
    font-size: 1.125rem;
    color: #111827;
    margin: 0 0 0.625rem 0;
    font-family: var(--font-serif);
    font-weight: 700;
  }

  .info-card p {
    font-size: 0.9375rem;
    color: #4B5563;
    margin: 0;
    line-height: 1.65;
    font-family: var(--font-serif);
  }

  @media (max-width: 640px) {
    .title {
      font-size: 2.5rem;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .lessons-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
