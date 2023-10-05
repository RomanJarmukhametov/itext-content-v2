<script setup>
  import { StarIcon } from "@heroicons/vue/20/solid";

  // Define props for the component
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
    reviews: {
      type: Array,
      default: () => [],
    },
  });

  // Maximum number of stars
  const MAX_STARS = 5;
</script>

<template>
  <StyledContainer>
    <div class="mx-auto max-w-xl text-center">
      <div class="text-center mb-16">
        <StyledTagline>
          {{ tagline }}
        </StyledTagline>

        <StyledHeading2>
          {{ title }}
        </StyledHeading2>

        <StyledBodyText>
          {{ description }}
        </StyledBodyText>
      </div>
    </div>

    <div
      class="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8"
    >
      <div v-for="item in reviews" :key="item.id">
        <figure
          class="bg-white rounded-lg border-[1px] border-gray-300 shadow p-6 text-base leading-6"
        >
          <div class="flex gap-x-1 text-yellow-400 items-center mb-5">
            <StarIcon
              v-for="i in MAX_STARS"
              :key="i"
              class="h-5 w-5 flex-none"
              aria-hidden="true"
              aria-label="star"
              v-motion-fade-visible
            />
          </div>
          <blockquote class="text-gray-600" v-motion-fade-visible>
            <p>{{ item.clientReview }}</p>
          </blockquote>
          <figcaption
            class="mt-6 flex items-center gap-x-4"
            v-motion-fade-visible
          >
            <NuxtImg
              class="h-10 w-10 rounded-full bg-gray-50"
              :src="'/images/' + item.avatar"
              alt="client avatar"
              loading="lazy"
            />
            <div>
              <div class="font-semibold text-gray-900">
                {{ item.clientName }}
              </div>
              <div class="text-sm text-gray-600">
                {{ item.clientPosition }}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
