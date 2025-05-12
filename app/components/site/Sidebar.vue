<script setup lang="ts">
const { app } = useAppConfig();
const { pages } = usePages();
const { showSidebar } = useSidebar();
</script>

<template>
  <USlideover :open="showSidebar" @update:open="showSidebar = false">
    <template #title>
      <div class="flex items-center gap-x-3">
        <SvgoLogo :filled="true" :font-controlled="false" class="size-8" />
        <span class="font-sans font-bold tracking-wide">{{ app.name }}</span>
      </div>
    </template>
    <template #description>
      <VisuallyHidden>Description</VisuallyHidden>
    </template>

    <template #body>
      <UNavigationMenu orientation="vertical" :items="pages" />
    </template>
  </USlideover>
</template>
