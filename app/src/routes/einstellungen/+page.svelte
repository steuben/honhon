<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Einstellungen - HonHon</title>
</svelte:head>

<div class="settings-page">
  <header class="header">
    <h1>⚙️ Einstellungen</h1>
    <a href="{base}/" class="back-link">← Zurück</a>
  </header>

  <div class="settings-content">
    <p class="coming-soon">Einstellungen kommen bald!</p>
    <p class="description">
      Hier kannst du bald tägliche Ziele setzen, Benachrichtigungen konfigurieren,
      und deine Daten exportieren.
    </p>
  </div>
</div>

<style>
  .settings-page {
    max-width: 800px;
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

  .settings-content {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .coming-soon {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }

  .description {
    color: #6B7280;
    line-height: 1.6;
  }
</style>
