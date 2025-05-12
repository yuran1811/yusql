<script setup lang="ts">
defineProps<{ error?: any; clearError?: any }>();
</script>

<template>
  <div
    class="flex-center-col max-xs:max-h-[calc(100dvh-136px)] container mx-auto h-full max-h-[calc(100dvh-48px)] max-w-xl"
  >
    <div class="grid place-items-center py-12 md:py-24">
      <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
        <p class="font-semibold text-(--ui-success)">Error</p>
        <div class="space-y-3 text-center">
          <h1 class="text-3xl font-bold tracking-tight" sm="text-5xl">
            Something went wrong...
          </h1>
          <p class="text-muted text-base leading-7">{{ error }}</p>
        </div>

        <div class="flex-center w-full gap-4">
          <UButton variant="outline" size="lg" to="/" :ui="{ base: 'px-5' }">
            Go home
          </UButton>

          <UButton v-if="clearError" @click="clearError">
            Clear errors
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
