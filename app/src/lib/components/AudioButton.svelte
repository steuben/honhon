<script lang="ts">
  interface Props {
    text: string;
    lang?: string;
    label?: string;
  }

  let { text, lang = 'fr-FR', label = 'Aussprache anhören' }: Props = $props();

  function speak() {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8; // Slightly slower for learning

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: open Google Translate
      openGoogleTranslate();
    }
  }

  function openGoogleTranslate() {
    const url = `https://translate.google.com/?sl=de&tl=fr&text=${encodeURIComponent(text)}&op=translate`;
    window.open(url, '_blank');
  }
</script>

<div class="audio-button-container">
  <button
    onclick={speak}
    class="audio-button"
    title={label}
    aria-label={label}
  >
    🔊
  </button>
  <button
    onclick={openGoogleTranslate}
    class="translate-link"
    title="In Google Translate öffnen"
    aria-label="In Google Translate öffnen"
  >
    🌐
  </button>
</div>

<style>
  .audio-button-container {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }

  .audio-button,
  .translate-link {
    background: none;
    border: 2px solid #3B82F6;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .audio-button:hover {
    background-color: #3B82F6;
    transform: scale(1.05);
  }

  .translate-link {
    border-color: #6B7280;
    font-size: 1rem;
  }

  .translate-link:hover {
    background-color: #6B7280;
    transform: scale(1.05);
  }

  .audio-button:active,
  .translate-link:active {
    transform: scale(0.95);
  }
</style>
