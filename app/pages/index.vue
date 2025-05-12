<script setup lang="ts">
useSeoMeta({
  title: 'SQL Playground',
  description: 'A SQL playground for testing queries.',
});

const text = ref('SELECT * FROM shows;');
const queries = ref('SELECT * FROM shows;');

const { data, status, error, clear } = await useAsyncData(
  'queries',
  () =>
    $fetch('/api/sql', {
      method: 'POST',
      body: { sql: queries.value },
    }),
  {
    watch: [queries],
  },
);

watchDebounced(
  text,
  () => {
    clear();
    queries.value = text.value;
  },
  { debounce: 1500 },
);
</script>

<template>
  <div
    class="grid h-full grid-cols-1 *:max-h-[calc(100dvh-13rem)] sm:grid-cols-2"
  >
    <MonacoEditor
      v-model="text"
      lang="sql"
      :options="{
        // More config: https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
        theme: 'vs-dark',
        minimap: {
          enabled: false,
        },
      }"
    >
      <USkeleton class="size-full" />
    </MonacoEditor>

    <Icon
      v-if="status === 'pending'"
      name="lucide:loader"
      class="animate-spin"
    />
    <UAlert
      v-if="error"
      color="error"
      variant="subtle"
      title="An error has occurred"
      :description="error?.message"
      icon="lucide:bug"
    />
    <UTable
      v-if="status === 'success' && data?.result"
      sticky
      :data="data?.result"
      class="h-full"
    />
  </div>
</template>
