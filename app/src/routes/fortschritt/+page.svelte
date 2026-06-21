<svelte:head>
  <title>Fortschritt - HonHon</title>
</svelte:head>

<div class="page-container">
  <h1>📊 Dein Fortschritt</h1>
  <p class="coming-soon">Detaillierte Statistiken kommen bald!</p>
  <a href="/" class="back-link">← Zurück zum Dashboard</a>
</div>

<style>
  .page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #111827;
    margin-bottom: 1rem;
  }

  .coming-soon {
    font-size: 1.125rem;
    color: #6B7280;
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #3B82F6;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .back-link:hover {
    background-color: #2563EB;
  }
</style>
