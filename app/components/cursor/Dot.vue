<script setup lang="ts">
const showCursor = useMediaQuery('(min-width: 1024px)');
const { pressed } = useMousePressed();
const { x, y } = usePointer();
</script>

<template>
  <div data-allow-mismatch="children">
    <div
      v-if="showCursor"
      class="pointer-events-none fixed -top-full -left-full z-200 size-3.5 mix-blend-difference *:origin-center *:transition-all"
      :style="{
        top: `${y}px`,
        left: `${x}px`,
        transform: 'translate(-50%, -50%)',
      }"
    >
      <span
        class="bg-primary absolute inset-0 rounded-full"
        :class="{
          'inset-0.5 animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]':
            pressed,
        }"
      />
      <span
        class="border-primary absolute top-1/2 left-1/2 size-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        :class="{
          'size-10': pressed,
        }"
      />
    </div>
  </div>
</template>
