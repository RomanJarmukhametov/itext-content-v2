<script setup>
  // Extracting locale from useI18n
  const { locale } = useI18n();

  // Converting the locale to its first two characters
  const currentLocale = ref(locale.value.substring(0, 2));
</script>

<template>
  <div class="bg-primary50 flex flex-col min-h-screen">
    <Html :lang="currentLocale">
      <SectionNavBar :withButton="false" />

      <div class="flex-grow">
        <slot />
      </div>

      <SectionFooter />
    </Html>
  </div>
</template>

<style scoped></style>
