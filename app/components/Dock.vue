<script setup lang="ts">
import { DockItems } from '@/constants';

const dockItemSize = 36;

const dockItems = ref<NodeListOf<HTMLImageElement> | null>(null);

onMounted(() => {
  dockItems.value = document.querySelectorAll(
    '.dock-item',
  ) as NodeListOf<HTMLImageElement>;
});

const mouseMoveHandler = (e: MouseEvent) => {
  if (!dockItems.value) return;

  dockItems.value.forEach((element: HTMLImageElement) => {
    const { left, width } = element.getBoundingClientRect();
    const leftAlign = left + width / 2;

    const maxDistance = 280;
    const distance = Math.abs(e.clientX - leftAlign);
    const newSize =
      distance < maxDistance
        ? dockItemSize + (maxDistance - distance) * 0.14
        : dockItemSize;

    element.style.width = element.style.height = `${newSize}px`;
  });
};

const mouseLeaveHandler = (_: MouseEvent) => {
  if (!dockItems.value) return;

  dockItems.value.forEach((element: HTMLImageElement) => {
    element.style.width = element.style.height = `${dockItemSize}px`;
  });
};

const clickHandler = (name: string) => {
  const item = DockItems.find((i) => i.name === name);

  if (item?.type === 'link') {
    window.open(item.link);
  }
};
</script>

<template>
  <div
    class="dock"
    @mousemove="mouseMoveHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div
      v-for="item in DockItems"
      :key="item.name"
      :data-tooltip="item.name"
      :class="{
        opened: false,
        'cursor-pointer': item.type === 'link',
      }"
    >
      <div class="dock-item size-9" @click="clickHandler(item.name)">
        <Icon v-if="item.icon.length" :name="item.icon" class="size-full" />
        <NuxtImg
          v-else-if="item.img.length"
          :placeholder="36"
          :src="item.img"
          :alt="item.name"
          :title="item.name"
        />
      </div>
    </div>
  </div>
</template>
