<script setup lang="ts">
useSeoMeta({
  title: 'References',
  description: 'References page for SQL.',
});

const data = ref([
  {
    title: 'SQLite refs (devdocs.io)',
    link: 'https://devdocs.io/sqlite/',
  },
  {
    title: 'SQL Tutorial (W3Schools)',
    link: 'https://www.w3schools.com/sql/default.asp',
  },
  {
    title: 'SQL Cheat Sheet',
    link: 'https://www.sqltutorial.org/sql-cheat-sheet/',
  },
  {
    title: 'SQL Functions',
    link: 'https://www.sqlservertutorial.net/sql-server-functions/',
  },
  {
    title: 'SQL Indexes',
    link: 'https://www.sqlshack.com/sql-server-indexes-series-intro/',
  },
]);
</script>

<template>
  <LayoutDefault>
    <LazyArtPlum :hydrate-after="1500" />
    <UContainer>
      <div
        class="font-heading text-center text-2xl font-black tracking-wider sm:text-3xl"
      >
        SQL References
      </div>

      <div
        class="mx-auto mt-12 grid w-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <template v-for="item in data" :key="item">
          <UButton
            :to="item.link"
            target="_blank"
            icon="lucide:link"
            color="neutral"
            variant="outline"
          >
            <p class="line-clamp-1">
              {{ item.title }}
            </p>
          </UButton>
        </template>
      </div>
    </UContainer>

    <LazyCursorFluid :hydrate-after="1500" class="-z-1" />
  </LayoutDefault>
</template>
