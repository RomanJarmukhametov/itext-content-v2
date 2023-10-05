<script setup>
  // Get the current blog post url
  const currentUrl = useRoute().fullPath;

  // Get the blog post data from the current url
  const blogPost = await queryContent(currentUrl).findOne();
</script>

<template>
  <StyledContainer>
    <div class="mx-auto max-w-6xl text-center">
      <p
        class="py-1 text-base text-center font-semibold leading-6 text-gray-600 mb-3"
      >
        {{ $d(Date.parse(blogPost.date)) }}
      </p>

      <StyledHeading1>
        {{ blogPost.title }}
      </StyledHeading1>

      <p class="mt-6 text-lg leading-8 text-gray-600">
        {{ blogPost.description }}
      </p>

      <div class="flex justify-center">
        <NuxtImg
          class="mt-8 rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          :src="'/images/blog/' + blogPost.image"
          :alt="blogPost.title"
          width="900"
          height="400"
          format="webp"
          placeholder
        />
      </div>
    </div>

    <!-- Section with blog post content -->
    <div class="mt-8 markdown">
      <slot />
    </div>
  </StyledContainer>
</template>
