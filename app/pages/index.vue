<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'A SQL playground for testing queries.',
});

const { data, error, status } = useAsyncData('home', async () => {
  const res = await useFetch('/api/sql/list');
  if (res.error.value) throw new Error(res.error.value.message);
  if (!res?.data || !res.data.value) throw new Error('No data found');

  return res.data.value.items;
});
</script>

<template>
  <LayoutDefault>
    <div class="font-heading mb-8 space-y-4 py-8 *:text-center sm:mb-16">
      <p class="text-2xl font-bold tracking-wide sm:text-5xl">yusql</p>
      <p class="text-lg font-light sm:text-2xl">
        An ultimate
        <span class="aurora-text">SQL</span> playground running in browser.
      </p>
    </div>

    <UContainer>
      <p class="text-muted mb-3 animate-pulse text-center text-lg">
        Choose any of below sample databases to start
      </p>

      <USkeleton v-if="status === 'pending'" class="mx-auto size-100" />
      <div v-else-if="status === 'error'">
        <div class="text-red-500">
          <p>Error: {{ error?.message }}</p>
        </div>
      </div>
      <div
        v-else-if="status === 'success'"
        class="mx-auto grid w-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <template v-for="item in data" :key="item">
          <UButton
            :to="`/sql/${item}`"
            icon="lucide:rocket"
            color="neutral"
            variant="outline"
          >
            <span class="line-clamp-1">
              {{ item }}
            </span>
          </UButton>
        </template>
      </div>
    </UContainer>
  </LayoutDefault>
</template>
