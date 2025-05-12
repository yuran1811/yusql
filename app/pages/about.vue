<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'About page for the SQL Playground.',
});
</script>

<template>
  <LayoutDefault>
    <LazyArtPlum :hydrate-after="1500" />

    <Dock />
    <LazyCursorDot :hydrate-after="1500" />
  </LayoutDefault>
</template>
