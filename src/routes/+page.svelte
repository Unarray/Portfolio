<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import type { SlideParams } from "svelte/transition";

  const slideOption: SlideParams = {
    duration: 1000
  };

  const progress = tweened(0.04, {
    duration: 1000,
    easing: cubicOut
  });

  const id = setInterval(
    () => {
      void progress.update(current => {
        const newValue = current + Math.random() / 10;

        if (newValue >= 1) {
          clearInterval(id);
          return 1;
        }

        return newValue;
      });
    },
    1000 * 5
  );
</script>


<div class="absolute w-full h-full flex items-center justify-center">
  <div class="flex items-center justify-center flex-col gap-10 text-center w-3/5 lg:w-10/12">
    <p class="text-xxl text-white animate-pulse">Coming soon</p>

    <div class="w-full bg-white rounded-full h-2.5 animate-pulse">
      <div class="bg-green h-2.5 rounded-full" style="width: {$progress * 100}%"></div>
    </div>

    {#if $progress >= 1}
      <div class="flex items-center justify-center flex-col gap-5" transition:slide={slideOption}>
        <p class="text-xl">Wow! You're still here!</p>
        <a href="https://dev.ethanmonjal.me/" class="underline">For the trouble I give you access to the preview of my portfolio!</a>
      </div>
    {/if}
  </div>
</div>