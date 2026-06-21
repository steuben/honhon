<script lang="ts">
  import type { TeachingSection } from '$lib/types';
  import AudioButton from './AudioButton.svelte';
  import { markdownToHtml } from '$lib/utils/markdown';

  interface Props {
    section: TeachingSection;
  }

  let { section }: Props = $props();

  const typeLabels: Record<TeachingSection['type'], string> = {
    explanation: '📚 Erklärung',
    example: '💡 Beispiel',
    table: '📋 Tabelle',
    dialogue: '💬 Dialog',
    tip: '✨ Tipp',
    comparison: '⚖️ Vergleich'
  };

  const typeLabel = $derived(typeLabels[section.type]);

  // Convert markdown to HTML for better formatting
  const formattedContent = $derived(markdownToHtml(section.content));
</script>

<article class="teaching-section" class:type-explanation={section.type === 'explanation'}
  class:type-example={section.type === 'example'}
  class:type-table={section.type === 'table'}
  class:type-dialogue={section.type === 'dialogue'}
  class:type-tip={section.type === 'tip'}
  class:type-comparison={section.type === 'comparison'}>

  <div class="section-header">
    <span class="type-badge">{typeLabel}</span>
    <h3 class="section-title">{section.title}</h3>
  </div>

  <div class="section-body">
    {#if section.type === 'explanation'}
      <div class="explanation-content">
        {@html formattedContent}
        {#if section.germanExplanation}
          <div class="german-note">
            <p class="note-label">Auf Deutsch:</p>
            <p class="note-text">{section.germanExplanation}</p>
          </div>
        {/if}
      </div>

    {:else if section.type === 'example'}
      <div class="examples-grid">
        {#if section.examples && section.examples.length > 0}
          {#each section.examples as example}
            <div class="example-card">
              <div class="example-french">
                <span class="example-text">{example.french}</span>
                <AudioButton text={example.french} />
              </div>
              <div class="example-german">
                {example.german}
              </div>
              {#if example.notes}
                <div class="example-notes">
                  💡 {example.notes}
                </div>
              {/if}
            </div>
          {/each}
        {:else}
          <div class="single-content">
            {@html formattedContent}
          </div>
        {/if}
      </div>

    {:else if section.type === 'table'}
      <div class="table-container">
        {@html formattedContent}
      </div>

    {:else if section.type === 'dialogue'}
      <div class="dialogue-container">
        {@html formattedContent}
        {#if section.examples && section.examples.length > 0}
          <div class="dialogue-lines">
            {#each section.examples as line, i}
              <div class="dialogue-line" class:speaker-a={i % 2 === 0} class:speaker-b={i % 2 === 1}>
                <div class="line-french">
                  <span class="line-text">{line.french}</span>
                  <AudioButton text={line.french} />
                </div>
                <div class="line-german">{line.german}</div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

    {:else if section.type === 'tip'}
      <div class="tip-content">
        <div class="tip-icon">💡</div>
        <div class="tip-text">
          {@html formattedContent}
        </div>
      </div>

    {:else if section.type === 'comparison'}
      <div class="comparison-container">
        {@html formattedContent}
        {#if section.examples && section.examples.length > 0}
          <div class="comparison-grid">
            <div class="comparison-column german-column">
              <h4 class="column-header">🇩🇪 Deutsch</h4>
              {#each section.examples as item}
                <div class="comparison-item">{item.german}</div>
              {/each}
            </div>
            <div class="comparison-column french-column">
              <h4 class="column-header">🇫🇷 Français</h4>
              {#each section.examples as item}
                <div class="comparison-item">
                  <span>{item.french}</span>
                  <AudioButton text={item.french} />
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</article>

<style>
  .teaching-section {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #D1D5DB;
  }

  .type-explanation {
    border-left-color: #3B82F6;
  }

  .type-example {
    border-left-color: #10B981;
  }

  .type-table {
    border-left-color: #8B5CF6;
  }

  .type-dialogue {
    border-left-color: #F59E0B;
  }

  .type-tip {
    border-left-color: #EC4899;
    background: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%);
  }

  .type-comparison {
    border-left-color: #06B6D4;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .type-badge {
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.375rem 0.875rem;
    border-radius: 0.5rem;
    background-color: #F3F4F6;
    color: #374151;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    font-variant: small-caps;
    font-family: var(--font-sans);
  }

  .section-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
    font-family: var(--font-serif);
    letter-spacing: -0.01em;
  }

  .section-body {
    color: #1f2937;
    line-height: 1.75;
    font-family: var(--font-serif);
  }

  /* Explanation styles - Beautiful typography */
  .explanation-content {
    font-family: var(--font-serif);
  }

  .explanation-content :global(p) {
    margin-bottom: 1.5rem;
    font-size: 1.0625rem;
    line-height: 1.85;
    color: #1f2937;
  }

  .explanation-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .explanation-content :global(ul) {
    margin-left: 0;
    margin-bottom: 1.5rem;
    padding-left: 0;
    list-style: none;
  }

  .explanation-content :global(li) {
    margin-bottom: 0.875rem;
    line-height: 1.85;
    font-size: 1.0625rem;
    padding-left: 1.75rem;
    position: relative;
  }

  .explanation-content :global(li::before) {
    content: '•';
    position: absolute;
    left: 0.5rem;
    color: #3B82F6;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .explanation-content :global(strong) {
    color: #111827;
    font-weight: 700;
  }

  .explanation-content :global(em) {
    font-style: italic;
  }

  .explanation-content :global(code) {
    font-family: 'Menlo', 'Monaco', monospace;
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.95em;
  }

  /* Headings within content */
  .explanation-content :global(h2),
  .explanation-content :global(h3),
  .explanation-content :global(h4) {
    font-weight: 700;
    color: #111827;
    margin-top: 1.75rem;
    margin-bottom: 0.875rem;
    font-family: var(--font-serif);
    line-height: 1.3;
  }

  .explanation-content :global(h2) {
    font-size: 1.375rem;
  }

  .explanation-content :global(h3) {
    font-size: 1.1875rem;
  }

  .explanation-content :global(h4) {
    font-size: 1.0625rem;
  }

  .explanation-content :global(h2:first-child),
  .explanation-content :global(h3:first-child),
  .explanation-content :global(h4:first-child) {
    margin-top: 0;
  }

  .german-note {
    margin-top: 1.5rem;
    padding: 1.25rem;
    background-color: #FEF3C7;
    border-radius: 0.75rem;
    border: 2px solid #FCD34D;
  }

  .note-label {
    font-size: 0.8125rem;
    font-weight: 700;
    color: #78350F;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-variant: small-caps;
    font-family: var(--font-sans);
  }

  .note-text {
    color: #92400E;
    margin: 0;
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.7;
  }

  /* Example styles */
  .examples-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .example-card {
    background-color: #F9FAFB;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid #E5E7EB;
  }

  .example-french {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.1875rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
    font-family: var(--font-serif);
  }

  .example-text {
    flex: 1;
    letter-spacing: -0.01em;
  }

  .example-german {
    font-size: 1rem;
    color: #4B5563;
    padding-left: 0.875rem;
    border-left: 3px solid #D1D5DB;
    font-family: var(--font-serif);
    line-height: 1.6;
  }

  .example-notes {
    margin-top: 0.875rem;
    font-size: 0.9375rem;
    color: #6B7280;
    font-style: italic;
    font-family: var(--font-serif);
    line-height: 1.6;
  }

  .single-content :global(p) {
    margin-bottom: 0.5rem;
  }

  /* Table styles */
  .table-container {
    overflow-x: auto;
  }

  .table-container :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5rem 0;
  }

  .table-container :global(th) {
    background-color: #F3F4F6;
    padding: 0.875rem 1rem;
    text-align: left;
    font-weight: 700;
    color: #111827;
    border-bottom: 2px solid #D1D5DB;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-variant: small-caps;
  }

  .table-container :global(td) {
    padding: 0.875rem 1rem;
    border-bottom: 1px solid #E5E7EB;
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.6;
  }

  .table-container :global(tr:hover) {
    background-color: #F9FAFB;
  }

  /* Dialogue styles */
  .dialogue-container {
    background-color: #F9FAFB;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .dialogue-lines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .dialogue-line {
    background: white;
    border-radius: 0.75rem;
    padding: 1rem;
    border-left: 4px solid #D1D5DB;
  }

  .dialogue-line.speaker-a {
    border-left-color: #3B82F6;
    margin-right: 2rem;
  }

  .dialogue-line.speaker-b {
    border-left-color: #10B981;
    margin-left: 2rem;
  }

  .line-french {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.625rem;
    font-family: var(--font-serif);
  }

  .line-text {
    flex: 1;
    letter-spacing: -0.01em;
  }

  .line-german {
    font-size: 1rem;
    color: #4B5563;
    padding-left: 0.75rem;
    font-family: var(--font-serif);
    line-height: 1.6;
  }

  /* Tip styles */
  .tip-content {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .tip-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .tip-text {
    flex: 1;
    font-family: var(--font-serif);
  }

  .tip-text :global(p) {
    margin-bottom: 0.875rem;
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #1f2937;
  }

  .tip-text :global(strong) {
    color: #BE185D;
    font-weight: 700;
  }

  /* Comparison styles */
  .comparison-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .comparison-column {
    background-color: #F9FAFB;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .german-column {
    border: 2px solid #FCD34D;
  }

  .french-column {
    border: 2px solid #93C5FD;
  }

  .column-header {
    font-size: 0.9375rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 1rem 0;
    text-align: center;
    font-family: var(--font-sans);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-variant: small-caps;
  }

  .comparison-item {
    background: white;
    padding: 0.875rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.6;
  }

  .comparison-item:last-child {
    margin-bottom: 0;
  }

  /* Responsive */
  @media (max-width: 640px) {
    .teaching-section {
      padding: 1rem;
    }

    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .section-title {
      font-size: 1.125rem;
    }

    .dialogue-line.speaker-a {
      margin-right: 0.5rem;
    }

    .dialogue-line.speaker-b {
      margin-left: 0.5rem;
    }

    .comparison-grid {
      grid-template-columns: 1fr;
    }

    .example-french,
    .line-french {
      font-size: 1rem;
    }
  }
</style>
