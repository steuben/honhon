<script lang="ts">
  import type { TeachingSection as TeachingSectionType, CardInput } from '$lib/types';
  import TeachingSection from './TeachingSection.svelte';
  import VocabularyList from './VocabularyList.svelte';

  interface Props {
    sections: TeachingSectionType[];
    vocabulary: CardInput[];
    onContinue?: () => void;
  }

  let { sections, vocabulary, onContinue }: Props = $props();

  let currentSectionIndex = $state(0);
  let showVocabulary = $state(false);

  const currentSection = $derived(sections[currentSectionIndex]);
  const isFirstSection = $derived(currentSectionIndex === 0);
  const isLastSection = $derived(currentSectionIndex === sections.length - 1);
  const progress = $derived(Math.round(((currentSectionIndex + 1) / sections.length) * 100));

  function goToNext() {
    if (!isLastSection) {
      currentSectionIndex++;
      scrollToTop();
    } else {
      showVocabulary = true;
      scrollToTop();
    }
  }

  function goToPrevious() {
    if (showVocabulary) {
      showVocabulary = false;
    } else if (!isFirstSection) {
      currentSectionIndex--;
    }
    scrollToTop();
  }

  function goToSection(index: number) {
    currentSectionIndex = index;
    showVocabulary = false;
    scrollToTop();
  }

  function handleContinue() {
    if (onContinue) {
      onContinue();
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="teaching-phase">
  <header class="phase-header">
    <div class="header-content">
      <h2 class="phase-title">📚 Lernphase</h2>
      <div class="progress-info">
        <span class="progress-text">
          {#if showVocabulary}
            Vokabular
          {:else}
            Abschnitt {currentSectionIndex + 1} von {sections.length}
          {/if}
        </span>
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: {progress}%"></div>
    </div>
  </header>

  <div class="phase-content">
    {#if showVocabulary}
      <VocabularyList {vocabulary} />
    {:else}
      <TeachingSection section={currentSection} />
    {/if}
  </div>

  <nav class="phase-navigation">
    <button
      onclick={goToPrevious}
      class="nav-button prev-button"
      disabled={isFirstSection && !showVocabulary}
    >
      ← Zurück
    </button>

    <div class="section-indicators">
      {#each sections as section, index}
        <button
          onclick={() => goToSection(index)}
          class="section-dot"
          class:active={index === currentSectionIndex && !showVocabulary}
          class:completed={index < currentSectionIndex || showVocabulary}
          title={section.title}
          aria-label={`Gehe zu Abschnitt ${index + 1}: ${section.title}`}
        >
        </button>
      {/each}
      <button
        onclick={() => { showVocabulary = true; scrollToTop(); }}
        class="section-dot vocabulary-dot"
        class:active={showVocabulary}
        title="Vokabular"
        aria-label="Zeige Vokabular"
      >
      </button>
    </div>

    {#if showVocabulary}
      <button
        onclick={handleContinue}
        class="nav-button continue-button"
      >
        Weiter zur Übung →
      </button>
    {:else if isLastSection}
      <button
        onclick={goToNext}
        class="nav-button next-button"
      >
        Vokabular ansehen →
      </button>
    {:else}
      <button
        onclick={goToNext}
        class="nav-button next-button"
      >
        Weiter →
      </button>
    {/if}
  </nav>

  <!-- Optional: Section Menu -->
  <details class="section-menu">
    <summary class="menu-toggle">
      📋 Inhaltsverzeichnis
    </summary>
    <ul class="section-list">
      {#each sections as section, index}
        <li>
          <button
            onclick={() => goToSection(index)}
            class="section-link"
            class:current={index === currentSectionIndex && !showVocabulary}
          >
            <span class="section-number">{index + 1}.</span>
            <span class="section-title-text">{section.title}</span>
            {#if index < currentSectionIndex}
              <span class="check-mark">✓</span>
            {/if}
          </button>
        </li>
      {/each}
      <li>
        <button
          onclick={() => { showVocabulary = true; scrollToTop(); }}
          class="section-link"
          class:current={showVocabulary}
        >
          <span class="section-number">📖</span>
          <span class="section-title-text">Vokabular ({vocabulary.length} Wörter)</span>
        </button>
      </li>
    </ul>
  </details>
</div>

<style>
  .teaching-phase {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  .phase-header {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .phase-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .progress-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .progress-text {
    font-size: 0.95rem;
    font-weight: 600;
    color: #6B7280;
    background-color: #F3F4F6;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .progress-bar-container {
    width: 100%;
    height: 0.5rem;
    background-color: #E5E7EB;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #3B82F6 0%, #10B981 100%);
    transition: width 0.3s ease;
    border-radius: 0.25rem;
  }

  .phase-content {
    min-height: 400px;
  }

  .phase-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .prev-button {
    background-color: #F3F4F6;
    color: #374151;
  }

  .prev-button:hover:not(:disabled) {
    background-color: #E5E7EB;
  }

  .prev-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .next-button {
    background-color: #3B82F6;
    color: white;
  }

  .next-button:hover {
    background-color: #2563EB;
  }

  .continue-button {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  .continue-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
  }

  .section-indicators {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .section-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #D1D5DB;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    padding: 0;
  }

  .section-dot:hover {
    transform: scale(1.3);
    background-color: #9CA3AF;
  }

  .section-dot.active {
    background-color: #3B82F6;
    width: 1rem;
    height: 1rem;
  }

  .section-dot.completed {
    background-color: #10B981;
  }

  .vocabulary-dot {
    background-color: #EC4899;
    width: 0.75rem;
    height: 0.75rem;
  }

  .vocabulary-dot:hover {
    background-color: #DB2777;
  }

  .vocabulary-dot.active {
    background-color: #EC4899;
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
  }

  /* Section Menu */
  .section-menu {
    margin-top: 1.5rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu-toggle {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
    cursor: pointer;
    list-style: none;
    user-select: none;
  }

  .menu-toggle:hover {
    color: #111827;
  }

  .menu-toggle::marker {
    display: none;
  }

  .section-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #E5E7EB;
  }

  .section-list li {
    border-bottom: 1px solid #F3F4F6;
  }

  .section-list li:last-child {
    border-bottom: none;
  }

  .section-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background-color 0.2s;
  }

  .section-link:hover {
    background-color: #F9FAFB;
  }

  .section-link.current {
    background-color: #EFF6FF;
    border-left: 3px solid #3B82F6;
  }

  .section-number {
    font-weight: 600;
    color: #6B7280;
    min-width: 2rem;
  }

  .section-title-text {
    flex: 1;
    color: #374151;
  }

  .check-mark {
    color: #10B981;
    font-weight: 700;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .phase-header {
      padding: 1rem;
    }

    .phase-title {
      font-size: 1.5rem;
    }

    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .phase-navigation {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-button {
      width: 100%;
    }

    .section-indicators {
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .teaching-phase {
      padding: 0.5rem;
    }

    .phase-header {
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }

    .progress-text {
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
    }

    .nav-button {
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
    }

    .section-link {
      padding: 0.75rem 1rem;
    }
  }
</style>
