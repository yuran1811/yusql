<template>
  <div
    class="max-xs:max-h-[calc(100dvh-188px)] grid h-screen max-h-[calc(100dvh-100px)] place-items-center px-2 py-12 md:py-24"
  >
    <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
      <p class="font-semibold text-(--ui-success)">404</p>
      <div class="space-y-3 text-center">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl" sm="text-5xl">
          Page not found
        </h1>
        <p class="text-muted text-base leading-7">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <UButton to="/" variant="outline" size="lg" :ui="{ base: 'px-5' }">
        Go home
      </UButton>
    </div>
  </div>
</template>
