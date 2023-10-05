<script setup>
  // Section to display client or partner logos.

  // Define properties for the component
  const props = defineProps({
    description: {
      type: String,
      default: "Description",
    },
    logos: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <StyledContainer>
    <!-- Description of the logos section -->
    <h3 class="text-center text-lg font-normal leading-7 text-gray-600">
      {{ description }}
    </h3>

    <!-- Grid for displaying logos -->
    <div
      class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
    >
      <NuxtImg
        v-for="item in logos"
        :key="item.id"
        :src="'/images/logos/' + item.image"
        alt="client logo"
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        width="158"
        height="48"
      />
    </div>
  </StyledContainer>
</template>

<style scoped></style>
