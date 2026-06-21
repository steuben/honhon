<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Flashcard from '$lib/components/Flashcard.svelte';
  import { getNewCards, updateCard, addReview, addSession } from '$lib/db/queries';
  import { calculateSM2, mapResponseToQuality } from '$lib/srs/sm2';
  import type { Card } from '$lib/types';

  let cards = $state<Card[]>([]);
  let currentIndex = $state(0);
  let showAnswer = $state(false);
  let userAnswer = $state('');
  let isCorrect = $state(false);
  let loading = $state(true);
  let sessionStart = $state(Date.now());
  let correctCount = $state(0);

  const currentCard = $derived(cards[currentIndex]);
  const hasMore = $derived(currentIndex < cards.length - 1);
  const progress = $derived(cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0);

  onMount(async () => {
    await loadCards();
  });

  async function loadCards() {
    loading = true;
    try {
      const newCards = await getNewCards(5);
      cards = newCards;
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      loading = false;
    }
  }

  function handleAnswerSubmit(answer: string) {
    userAnswer = answer;
    showAnswer = true;
    isCorrect = normalizeString(answer) === normalizeString(currentCard.french);
    if (isCorrect) {
      correctCount++;
    }
  }

  async function handleRating(rating: 'again' | 'hard' | 'good' | 'easy') {
    const quality = mapResponseToQuality(rating);
    const reviewStartTime = sessionStart;
    const responseTime = Date.now() - reviewStartTime;

    // Calculate new SRS parameters
    const srsUpdate = calculateSM2(currentCard, quality);

    // Update card in database
    await updateCard(currentCard.id, {
      ...srsUpdate,
      lastReview: new Date(),
      timesReviewed: currentCard.timesReviewed + 1,
      timesCorrect: currentCard.timesCorrect + (isCorrect ? 1 : 0),
      averageQuality: (currentCard.averageQuality * currentCard.timesReviewed + quality) / (currentCard.timesReviewed + 1)
    });

    // Add review record
    await addReview({
      cardId: currentCard.id,
      timestamp: new Date(),
      quality,
      questionType: 'translation-de-fr',
      responseTime
    });

    // Move to next card or finish
    if (hasMore) {
      currentIndex++;
      showAnswer = false;
      userAnswer = '';
      isCorrect = false;
      sessionStart = Date.now();
    } else {
      await finishSession();
    }
  }

  async function finishSession() {
    const duration = (Date.now() - sessionStart) / 1000;
    const accuracy = cards.length > 0 ? (correctCount / cards.length) * 100 : 0;

    await addSession({
      timestamp: new Date(),
      type: 'learning',
      cardsStudied: cards.length,
      accuracy,
      duration
    });

    // Redirect to dashboard
    window.location.href = '/';
  }

  function normalizeString(str: string): string {
    return str
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, ''); // Remove diacritics for comparison
  }
</script>

<svelte:head>
  <title>Lernen - HonHon</title>
</svelte:head>

<div class="learning-page">
  {#if loading}
    <div class="loading">
      <p>Lade Lernkarten...</p>
    </div>
  {:else if cards.length === 0}
    <div class="no-cards">
      <h2>Keine neuen Karten verfügbar</h2>
      <p>Du hast alle verfügbaren Karten gelernt!</p>
      <a href="{base}/" class="back-button">Zurück zum Dashboard</a>
    </div>
  {:else}
    <div class="progress-bar-container">
      <div class="progress-bar" style="width: {progress}%"></div>
    </div>

    <div class="card-counter">
      Karte {currentIndex + 1} von {cards.length}
    </div>

    {#if currentCard}
      <Flashcard
        card={currentCard}
        {showAnswer}
        {userAnswer}
        {isCorrect}
        onAnswerSubmit={handleAnswerSubmit}
        onRating={handleRating}
      />
    {/if}
  {/if}
</div>

<style>
  .learning-page {
    min-height: 100vh;
    padding: 1rem;
    background-color: #F9FAFB;
  }

  .loading,
  .no-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
  }

  .loading p {
    font-size: 1.25rem;
    color: #6B7280;
  }

  .no-cards h2 {
    font-size: 1.875rem;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .no-cards p {
    font-size: 1.125rem;
    color: #6B7280;
    margin-bottom: 1.5rem;
  }

  .back-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #3B82F6;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .back-button:hover {
    background-color: #2563EB;
  }

  .progress-bar-container {
    width: 100%;
    height: 8px;
    background-color: #E5E7EB;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .progress-bar {
    height: 100%;
    background-color: #10B981;
    transition: width 0.3s ease;
  }

  .card-counter {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: #6B7280;
    margin-bottom: 1rem;
  }
</style>
