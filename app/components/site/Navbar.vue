<script setup lang="ts">
const { y } = useWindowScroll();
const scrollDir = useScrollDir();
const { pages } = usePages();
const { showSidebar } = useSidebar();

const mobileItems = ref([
  [
    {
      avatar: {
        size: '2xl',
        icon: 'local:logo',
        ui: {
          root: 'group bg-transparent',
          icon: 'size-8 min-h-8 min-w-8',
        },
      },
      title: 'home',
      to: '/',
    },
  ],
  [
    {
      icon: 'lucide:menu',
      title: 'menu',
      onSelect: () => (showSidebar.value = true),
    },
  ],
]);

const desktopItems = ref([
  [
    {
      avatar: {
        size: '2xl',
        icon: 'local:logo',
        ui: {
          root: 'group bg-transparent',
          icon: 'size-8 min-h-8 min-w-8 opacity-70 group-hover:opacity-100 transition-colors',
        },
      },
      title: 'home',
      to: '/',
    },
  ],
  ...pages,
]);
</script>

<template>
  <header
    class="top-0 z-10 origin-top transition-all"
    :class="{ 'scale-y-0': y > 100 && scrollDir }"
  >
    <UContainer class="md:py-2">
      <UNavigationMenu
        variant="link"
        :items="mobileItems"
        :ui="{ root: 'md:hidden' }"
      />

      <UNavigationMenu
        variant="link"
        :items="desktopItems"
        :ui="{
          root: 'hidden md:flex',
          viewportWrapper: 'max-w-2xl absolute-center-h',
          list: 'md:gap-x-2',
        }"
      >
        <template #main-leading="{ item }">
          <Icon :name="item.icon" class="max-4xl:hidden size-5" />
        </template>
      </UNavigationMenu>
    </UContainer>
  </header>
</template>
