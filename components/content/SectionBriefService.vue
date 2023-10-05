<script setup>
  // Section that provides a brief overview of services with a header and cards.

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
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <div class="lg:col-span-2" v-motion-fade-visible>
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
        class="lg:col-span-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-4 lg:gap-y-8 leading-7"
      >
        <ComponentCard
          v-for="card in cards"
          :key="card.id"
          :image="card.image"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </StyledContainer>
</template>
