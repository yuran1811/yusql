<script setup lang="ts">
const isTooLow = useMediaQuery('(max-height: 220px)');
const { y } = useWindowScroll({ behavior: 'smooth' });
</script>

<template>
  <div
    class="totop group"
    :class="{ '!hidden': y < 400 || isTooLow }"
    @click="y = 0"
  >
    <span
      class="absolute right-0 bottom-0 left-0 text-center text-xl font-bold text-transparent transition-all duration-200 group-hover:bottom-4 group-hover:text-current max-sm:hidden"
    >
      top
    </span>
  </div>
</template>
