<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'About page for the SQL Playground.',
});
</script>

<template>
  <LayoutDefault>
    <LazyArtPlum :hydrate-after="1500" />

    <UContainer class="flex flex-col items-center justify-start">
      <div>
        <p
          class="font-heading text-center text-2xl font-bold tracking-wide sm:text-4xl"
        >
          yusql
        </p>
        <p class="mt-2 text-center text-lg">
          A product of
          <NuxtLink
            to="https://github.com/yuran1811"
            target="_blank"
            class="aurora-text"
          >
            yuran1811
          </NuxtLink>
        </p>
      </div>

      <div class="mt-12">
        <p class="font-heading mb-4 text-center text-xl">Tech Stack</p>
        <NuxtImg
          src="https://skill-icons-livid.vercel.app/icons?i=nuxt,tailwind,ts,sqlite&gap=60"
          class="h-12"
        />
      </div>
    </UContainer>

    <Dock />
    <LazyCursorDot :hydrate-after="1500" />
  </LayoutDefault>
</template>
