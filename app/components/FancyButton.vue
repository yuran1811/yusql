<script setup lang="ts">
/**
 * Credit to [@HugoRCD](https://github.com/HugoRCD)
 * @see https://github.com/HugoRCD/canvas/blob/main/app/components/SpotlightButton.vue
 *
 * Modified by [me (@yuran1811)](https://github.com/yuran1811)
 */
defineProps({
  label: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  animate: {
    type: Boolean,
    default: true,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <UButton
    :to="to"
    :class="`group relative inline-flex items-center overflow-hidden transition ${rounded ? 'rounded-full' : 'rounded-md'} ${
      transparent ? '' : 'bg-zinc-800'
    }`"
    variant="ghost"
  >
    <template #default>
      <div
        v-if="animate"
        class="[container-type:inline-size] absolute inset-0 flex items-center max-sm:hidden"
      >
        <div
          class="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,var(--ui-color-primary-300)_0deg,transparent_60deg,transparent_300deg,var(--ui-color-primary-300)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
        />
      </div>

      <div
        class="absolute inset-0.5 max-sm:hidden sm:bg-zinc-900/80 sm:backdrop-blur-md"
        :class="`${transparent ? 'bg-zinc-900' : 'bg-zinc-800'} ${rounded ? 'rounded-full' : 'rounded-md'}`"
      />

      <div
        class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/15 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 max-sm:hidden"
        :class="rounded ? 'rounded-full' : 'rounded-md'"
      />

      <div
        class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-transparent transition-all duration-200"
      >
        {{ label }}
      </div>
    </template>
  </UButton>
</template>
