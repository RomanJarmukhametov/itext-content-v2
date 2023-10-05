<script setup>
  // Section component that showcases advantages, including a header and a list of cards.

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
      <ComponentCard
        v-for="card in cards"
        :key="card.id"
        :image="card.image"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </StyledContainer>
</template>

<style scoped>

</style>
