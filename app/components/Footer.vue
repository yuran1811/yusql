<script setup lang="ts">
import { DockItems } from '@/constants';

const items = [
  [
    ...DockItems.filter((_) => _.link && _.link.length > 0).map((item) => ({
      title: item.name,
      to: item.link,
      icon: item.icon,
      target: '_blank',
    })),
  ],
  [
    {
      label: 'All Rights Reserved.',
      icon: 'lucide:copyright',
      badge: new Date().getFullYear(),
      disabled: true,
    },
  ],
];
</script>

<template>
  <footer>
    <USeparator icon="local:logo" class="mt-12 h-px" />
    <div>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="max-xs:flex-col max-xs:gap-0 max-xs:pt-6 max-xs:pb-4 [&>div>ul]:flex-wrap [&>div>ul]:justify-center"
      />
    </div>
  </footer>
</template>
