<script setup>
// Card component that displays an image, title, and description.

// Define props for the component
const props = defineProps({
  image: {
    type: String,
    default: "badge.svg",
    },
  imageAlt: {
    type: String,
    default: "badge",
    },
  
  title: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "Description",
    },
});
</script>

<template>
  <div class="bg-white flex flex-col p-8 rounded-lg shadow space-y-5">
    <NuxtImg
      :src="'/images/' + image"
      :alt="title"
      class="w-8 h-8"
      v-motion-fade-visible
    />
    <div class="space-y-2">
      <div class="font-semibold text-gray-900 text-lg" v-motion-fade-visible>
        {{ title }}
      </div>
      <div class="text-gray-600 text-base" v-motion-fade-visible>
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>