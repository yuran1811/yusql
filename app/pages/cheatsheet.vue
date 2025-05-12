<script setup lang="ts">
useSeoMeta({
  title: 'Cheatsheet',
  description: 'Cheatsheet page for the SQL Playground.',
});
</script>

<template>
  <LayoutDefault>
    <LazyArtPlum :hydrate-after="1500" />
    <UContainer>
      <div class="text-center text-2xl font-black tracking-wider sm:text-3xl">
        SQL Cheatsheet
      </div>
    </UContainer>

    <LazyCursorFluid :hydrate-after="1500" />
  </LayoutDefault>
</template>
