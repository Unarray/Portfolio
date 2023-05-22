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
  <div class="absolute top-0 left-auto right-auto mx-4 mt-8">
    <a
      href="https://dev.ethanmonjal.me/cv.pdf"
      class="underline text-center inline-block border-white hover:bg-white/10 border-2 rounded p-2 text-lg"
    >
      Télécharger mon CV
    </a>
  </div>
  <div class="absolute bottom-0 left-auto right-auto mx-4 mb-8">
    <a
      href="https://dev.ethanmonjal.me/"
      class="underline text-center inline-block border-white hover:bg-white/10 border-2 rounded p-2 text-sm"
    >
      Portfolio - Version de développement
    </a>
  </div>

  <div class="flex items-center justify-center flex-col gap-10 text-center w-3/5 lg:w-10/12">
    <p class="text-xxl md:text-3xl text-white animate-pulse">En développement</p>

    <div class="w-full bg-white rounded-full h-2.5 animate-pulse">
      <div class="bg-green h-2.5 rounded-full" style="width: {$progress * 100}%"></div>
    </div>

    {#if $progress >= 1}
      <div class="flex items-center justify-center flex-col gap-5" transition:slide={slideOption}>
        <p class="text-xl">Wow ! Vous êtes toujours là !</p>
      </div>
    {/if}
  </div>
</div>