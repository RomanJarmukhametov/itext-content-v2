<script setup>
// Section component that showcases translation processes, including a header and a list of cards.

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
    cards: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <StyledContainer>
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

    <div
      class="mx-auto max-w-2xl grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:max-w-none lg:grid-cols-3"
    >
      <div
        v-for="item in cards"
        class="flex flex-col items-center p-10 space-y-5"
      >
        <NuxtImg
          :src="'/images/' + item.image"
          :alt="item.title"
          class="w-48 h-48"
          v-motion-fade-visible
        />
        <div class="space-y-2">
          <div
            class="font-semibold text-gray-900 text-3xl leading-9 text-center"
            v-motion-fade-visible
          >
            {{ item.title }}
          </div>
          <div
            class="text-gray-600 text-base text-center"
            v-motion-fade-visible
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
