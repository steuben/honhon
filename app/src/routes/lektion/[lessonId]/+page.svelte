<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import LessonContainer from '$lib/components/lesson/LessonContainer.svelte';
  import { getLessonById } from '$lib/content/lessons';
  import type { Lesson } from '$lib/types';

  let lesson = $state<Lesson | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  onMount(async () => {
    try {
      const lessonId = $page.params.lessonId;
      lesson = await getLessonById(lessonId);

      if (!lesson) {
        error = `Lektion "${lessonId}" wurde nicht gefunden.`;
      }
    } catch (err) {
      console.error('Failed to load lesson:', err);
      error = 'Lektion konnte nicht geladen werden.';
    } finally {
      loading = false;
    }
  });

  function handleExit() {
    goto(`${base}/`);
  }
</script>

<svelte:head>
  <title>{lesson ? `${lesson.meta.titleGerman} - HonHon` : 'HonHon'}</title>
</svelte:head>

<div class="lesson-page">
  {#if loading}
    <div class="loading-screen">
      <div class="spinner"></div>
      <p>Lektion wird geladen...</p>
    </div>
  {:else if error}
    <div class="error-screen">
      <h1>⚠️ Fehler</h1>
      <p>{error}</p>
      <a href="{base}/" class="btn-primary">Zurück zur Übersicht</a>
    </div>
  {:else if lesson}
    <LessonContainer {lesson} onExit={handleExit} />
  {/if}
</div>

<style>
  .lesson-page {
    min-height: 100vh;
    background: #F9FAFB;
  }

  .loading-screen,
  .error-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    text-align: center;
    padding: 2rem;
  }

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #E5E7EB;
    border-top-color: #3B82F6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error-screen h1 {
    font-size: 2rem;
    color: #111827;
    margin-bottom: 1rem;
  }

  .error-screen p {
    font-size: 1.125rem;
    color: #6B7280;
    margin-bottom: 2rem;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #3B82F6;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background 0.2s;
  }

  .btn-primary:hover {
    background: #2563EB;
  }
</style>
