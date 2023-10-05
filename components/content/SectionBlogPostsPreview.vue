<script setup>
  // Use the 'locale' variable from the 'useI18n' module
  const { locale } = useI18n();

  // Create a ref 'currentLocale' that holds the first two characters of the 'locale' value
  const currentLocale = ref(locale.value.substring(0, 2));

  // Watch for changes on 'locale', if it changes then update 'currentLocale'
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale.substring(0, 2);
  });

  //Define the varible that will hold the blog posts data
  const blogPosts = await queryContent(`/${currentLocale.value}/blog/`).sort({ date: -1 }).find();

  //   Format the date for each blog post
</script>

<template>
  <StyledContainer>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <!-- Display posts in reverse order to show the most recent ones -->
      <NuxtLink
        v-for="item in blogPosts"
        :key="item._path"
        :to="item._path"
        class="p-4 group relative"
      >
        <article class="flex flex-col items-start justify-between">
          <div class="relative w-full group-hover:opacity-75">
            <NuxtImg
              :src="'/images/blog/' + item.image"
              :alt="item.title"
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              format="webp"
              width="440"
              height="256"
              placeholder
            />
            <div
              class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
            />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time class="text-gray-500">
                {{ $d(Date.parse(item.date)) }}</time
              >
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                {{ item.title }}
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </StyledContainer>
</template>
