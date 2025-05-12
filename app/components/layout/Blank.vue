<script setup lang="ts">
defineProps<{ fixed?: boolean }>();
</script>

<template>
  <div>
    <SiteNavbar
      class="bg-default md:bg-default/75 md:backdrop-blur"
      :class="fixed ? 'fixed w-full' : 'sticky'"
    />
    <SiteSidebar />

    <main>
      <slot />
    </main>
  </div>
</template>
