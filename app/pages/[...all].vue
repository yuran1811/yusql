<script setup lang="ts">
definePageMeta({
  layout: 'plain',
});

useSeoMeta({
  title: 'not found',
  description: `yublog page not found`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <NotFoundPage />
</template>
