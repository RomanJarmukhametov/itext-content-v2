<script setup>
  //Import useLocalePath to get the locale path
  const localPath = useLocalePath();

  // Use the 'locale' variable from the 'useI18n' module
  const { locale } = useI18n();

  // Create a ref 'currentLocale' that holds the first two characters of the 'locale' value
  const currentLocale = ref(locale.value.substring(0, 2));

  // Watch for changes on 'locale', if it changes then update 'currentLocale'
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale.substring(0, 2);
  });

  // Define the navigation variable that will hold the navigation data
  const navigation = await queryContent(`/${currentLocale.value}`).where({ menuFooter: { $eq: true } }).find();

  // Function to get the current year
  const currentYear = () => {
    return new Date().getFullYear();
  };
</script>

<template>
  <footer
    class="bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    aria-labelledby="footer-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Logo and Navigation -->
      <div
        class="flex flex-col lg:flex-row justify-between items-center mb-12 text-gray-400"
      >
        <!-- Logo -->
        <NuxtLink :to="localPath('/')" class="mb-6 lg:mb-0 -m-1.5 p-1.5">
          <span class="sr-only">iText Translation Agency</span>
          <NuxtImg
            class="h-8 w-auto"
            width="112"
            height="38"
            src="/images/logo_white.svg"
            alt="iText logo"
          />
        </NuxtLink>

        <!-- Navigation Links -->
        <nav class="mb-6 lg:mb-0" aria-label="Footer">
          <div
           v-for="{ _path: slug, title } in navigation"
            :key="slug"
            
            class="pb-6 lg:pb-0 lg:pr-6 text-center lg:inline"
          >
            <NuxtLink
             :to="slug"
              class="text-base leading-6 text-gray-400 hover:text-white"
            >
              {{ title }}
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- Copyright & Developer Credits -->
      <div
        class="mt-8 mx-auto max-w-7xl px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center lg:justify-between text-center"
      >
        <p class="text-xs leading-5 text-gray-400 mb-4 lg:mb-0">
          ©{{ currentYear() }} iText Translation Agency. All rights reserved
        </p>
        <NuxtLink
          to="https://ideaflow.studio"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs leading-5 text-gray-400 hover:text-white"
        >
          Developed by ideaflow.studio
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
