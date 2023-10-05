<script setup>
  //Import useLocalePath to get the locale path
  const localPath = useLocalePath();

  // Define variable to use per-component localization
  const { t } = useI18n({
    useScope: "local",
  });
</script>
<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div
          class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
        >
          <div class="text-center">
            <p class="text-base font-semibold text-primary600">404</p>
            <h1
              class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl"
            >
              {{ t("title") }}
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600 max-w-2xl">
              {{ t("text") }}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <NuxtLink
                :to="localPath('/')"
                class="rounded-lg bg-primary500 px-5 py-3 text-sm text-center font-semibold text-white shadow-sm hover:bg-primary600 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary500 w-full sm:w-auto"
              >
                {{ t("button") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Page not found",
    "text": "Page you are looking for does not exist.",
    "button": "Go to home"
  },
  "ru": {
    "title": "Страница не найдена",
    "text": "Страница, которую вы ищете, не существует.",
    "button": "На главную"
  }
}
</i18n>
