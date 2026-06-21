<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { getAllCards } from '$lib/db/queries';
  import AudioButton from '$lib/components/AudioButton.svelte';
  import type { Card } from '$lib/types';

  let cards = $state<Card[]>([]);
  let loading = $state(true);
  let searchQuery = $state('');

  const filteredCards = $derived(
    searchQuery.trim()
      ? cards.filter(card =>
          card.french.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.german.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : cards
  );

  onMount(async () => {
    loading = true;
    cards = await getAllCards();
    loading = false;
  });
</script>

<svelte:head>
  <title>Vokabular - HonHon</title>
</svelte:head>

<div class="vocabulary-page">
  <header class="header">
    <h1>📚 Vokabular-Übersicht</h1>
    <a href="{base}/" class="back-link">← Zurück</a>
  </header>

  <div class="search-box">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Suche nach Wörtern..."
      class="search-input"
    />
  </div>

  {#if loading}
    <p class="loading-text">Lade Vokabeln...</p>
  {:else if filteredCards.length === 0}
    <p class="no-results">Keine Vokabeln gefunden.</p>
  {:else}
    <div class="cards-list">
      {#each filteredCards as card}
        <div class="vocab-card">
          <div class="card-header">
            <span class="french">{card.french}</span>
            {#if card.gender}
              <span class="gender" class:masculine={card.gender === 'm'} class:feminine={card.gender === 'f'}>
                {card.gender === 'm' ? '♂' : '♀'}
              </span>
            {/if}
          </div>
          <p class="german">{card.german}</p>
          <p class="example">{card.exampleSentence.french}</p>
          <div class="actions">
            <AudioButton text={card.french} />
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .vocabulary-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: #111827;
    margin: 0;
  }

  .back-link {
    padding: 0.5rem 1rem;
    background-color: #3B82F6;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
  }

  .search-box {
    margin-bottom: 2rem;
  }

  .search-input {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid #D1D5DB;
    border-radius: 0.5rem;
  }

  .search-input:focus {
    outline: none;
    border-color: #3B82F6;
  }

  .loading-text,
  .no-results {
    text-align: center;
    color: #6B7280;
    padding: 2rem;
  }

  .cards-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .vocab-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .french {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3B82F6;
  }

  .gender {
    font-size: 1.25rem;
  }

  .gender.masculine {
    color: #3B82F6;
  }

  .gender.feminine {
    color: #EC4899;
  }

  .german {
    font-size: 1.125rem;
    color: #6B7280;
    margin: 0.5rem 0;
  }

  .example {
    font-size: 0.875rem;
    color: #9CA3AF;
    margin: 0.5rem 0;
    font-style: italic;
  }

  .actions {
    margin-top: 1rem;
  }
</style>
