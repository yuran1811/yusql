<template>
  <Html class="dark overflow-x-hidden">
    <Body class="font-sans antialiased">
      <UApp>
        <UToaster>
          <NuxtLoadingIndicator />
          <NuxtLayout>
            <NuxtErrorBoundary>
              <NuxtPage />
              <Footer />

              <template #error="{ error }">
                <Error :error="error" />
              </template>
            </NuxtErrorBoundary>
          </NuxtLayout>
        </UToaster>
      </UApp>
    </Body>
  </Html>
</template>
