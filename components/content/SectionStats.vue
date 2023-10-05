<script setup>
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
    stats: {
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
      class="bg-white p-6 rounded-2xl border-[1px] border-gray-300 shadow grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-16 text-center lg:grid-cols-3"
    >
      <div
        v-for="item in stats"
        :key="item.id"
        class="mx-auto flex flex-col gap-y-4 p-6 lg:max-w-md"
        v-motion-fade-visible
      >
        <div class="text-base leading-7 text-gray-600" v-motion-fade-visible>
          {{ item.text }}
        </div>
        <div
          class="order-first text-3xl font-semibold tracking-tight text-primary600 sm:text-5xl"
          v-motion-fade-visible
        >
          {{ item.number }}
        </div>
      </div>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
