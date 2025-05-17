<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';

useSeoMeta({
  title: 'SQL Playground',
  description: 'A SQL playground for testing queries.',
});

const slug = useRouteParams('slug') as Ref<string>;
const tableName = slug?.value ? slug.value.split('.')[0] : '';

const text = ref(`SELECT * FROM ${tableName};`);
const queries = ref(`SELECT * FROM ${tableName};`);

const { data, status, error, clear } = await useAsyncData(
  'queries',
  async () =>
    (await $fetch(`/api/sql/${slug.value}`, {
      method: 'POST',
      body: { sql: queries.value },
    })) as any,
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
  <div v-if="error">
    <UAlert
      v-if="error"
      color="error"
      variant="subtle"
      title="An error has occurred"
      :description="error?.message"
      icon="lucide:bug"
    />
  </div>
  <div
    v-else
    class="container mx-auto grid overflow-hidden *:h-full *:outline-none *:max-sm:h-72 sm:h-screen sm:max-h-[calc(100dvh-14rem)] sm:grid-cols-2"
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
    <UTable
      v-if="status === 'success' && data?.result"
      sticky
      :data="data?.result"
      class=""
    />
  </div>
</template>
