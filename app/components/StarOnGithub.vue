<script setup lang="ts">
defineProps<{
  repo?: string;
}>();

const { app } = useAppConfig();
</script>

<template>
  <div class="flex justify-center">
    <UButton :to="repo || app.repo" target="_blank"> Star on GitHub </UButton>
  </div>
</template>
