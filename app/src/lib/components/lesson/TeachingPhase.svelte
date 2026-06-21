<script lang="ts">
  import type { Lesson } from '$lib/types';
  import BaseTeachingPhase from '../TeachingPhase.svelte';

  interface Props {
    lesson: Lesson;
    onComplete: () => void;
    onProgress: (progress: number) => void;
  }

  let { lesson, onComplete, onProgress }: Props = $props();

  // Update progress based on teaching phase navigation
  function handleContinue() {
    onProgress(100); // Mark teaching phase as complete
    onComplete();
  }
</script>

<BaseTeachingPhase
  sections={lesson.teaching.sections}
  vocabulary={lesson.teaching.vocabulary}
  onContinue={handleContinue}
/>
