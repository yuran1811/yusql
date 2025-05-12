<script setup lang="ts">
const hideCursor = useMediaQuery('(max-width: 768px)');
const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef');

onMounted(() => {
  useFluidcursor('fluid');
});
</script>

<template>
  <div
    class="pointer-events-none fixed top-0 left-0 z-200 h-screen w-screen"
    :class="{
      hidden: hideCursor,
    }"
  >
    <canvas id="fluid" ref="canvasRef" class="h-full w-full" />
  </div>
</template>
