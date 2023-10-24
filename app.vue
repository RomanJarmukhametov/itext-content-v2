<script setup>
  // Use the 'locale' variable from the 'useI18n' module
  const { locale } = useI18n();

  // Create a ref 'currentLocale' that holds the first two characters of the 'locale' value
  const currentLocale = ref(locale.value.substring(0, 2));

  // Watch for changes on 'locale', if it changes then update 'currentLocale'
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale.substring(0, 2);
  });

  // Common data
  const businessData = {
    name: "itext.agency",
    telephone: "+7-7182-76-40-60",
    logo: "https://itext.agency/images/itext_logo.svg",
  };

  // Address data
  let addressData;

  if (currentLocale.value === "ru") {
    addressData = {
      streetAddress: "Пл. Победы 3, офис 9, Павлодар, Казахстан",
      addressLocality: "Павлодар",
      addressRegion: "Павлодарская область",
      postalCode: "140000",
      addressCountry: "KZ",
    };
  } else {
    addressData = {
      streetAddress: "Pl. Pobedy 3, office 9, Pavlodar, Kazakhstan",
      addressLocality: "Pavlodar",
      addressRegion: "Pavlodar region",
      postalCode: "140000",
      addressCountry: "KZ",
    };
  }

  // Merging common business data with specific address data
  const finalBusinessData = {
    ...businessData,
    address: addressData,
  };

  // Website data
  let websiteSchema;

  if (currentLocale.value === "ru") {
    websiteSchema = {
      url: "https://itext.agency",
      name: "itext.agency",
      author: "itext.agency",
      description: "Профессиональное бюро переводов",
      inLanguage: currentLocale.value,
      publisher: "itext.agency",
    };
  } else {
    websiteSchema = {
      url: "https:/itext.agency/en",
      name: "itext.agency",
      author: "itext.agency",
      description: "Professional Translation Agency",
      inLanguage: currentLocale.value,
      publisher: "itext.agency",
    };
  }

  useSchemaOrg([
    defineLocalBusiness(finalBusinessData),
    defineWebSite(websiteSchema),
    defineWebPage(),
  ]);
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
