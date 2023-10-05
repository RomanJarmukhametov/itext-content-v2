<script setup>
  import { StarIcon } from "@heroicons/vue/20/solid";

  const props = defineProps({
    tagline: {
      type: String,
      default: "Tagline",
    },

    title: {
      type: String,
      default: "Title",
    },

    description: {
      type: String,
      default: "Description",
    },

    buttonPrimaryText: {
      type: String,
      default: "Button Primary",
    },

    buttonSecondaryText: {
      type: String,
      default: "Button Secondary",
    }
  });

  // Maximum number of stars
  const MAX_STARS = 5;
</script>

<template>
  <section
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    role="banner"
  >
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
        <div class="py-2 text-xl font-normal leading-7 text-gray-600">
          <div class="flex gap-x-1 text-yellow-500 items-center">
            <StarIcon
              v-for="i in MAX_STARS"
              :key="i"
              class="h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
          {{ tagline }}
        </div>

        <StyledHeading1>
          {{ title }}
        </StyledHeading1>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          {{ description }}
        </p>

        <div class="mt-10 flex flex-col w-full sm:flex-row gap-4">
          <ButtonPrimary :withArrow="true">
            {{ buttonPrimaryText }}
          </ButtonPrimary>

          <ButtonSecondary> {{ buttonSecondaryText }} </ButtonSecondary>
        </div>
      </div>

      <div
        class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
      >
        <div class="relative mx-auto w-full lg:max-w-md">
          <NuxtImg
            class="h-full w-full"
            src="/images/hero_image.svg"
            :alt="title"
            placeholder
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
