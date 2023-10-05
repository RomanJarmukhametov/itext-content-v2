<script setup>
  // Button component that navigates to the quote page
  // It can display dynamic text or a default text with an optional arrow.

  // Import useLocalePath to get the locale path
  const localPath = useLocalePath();

  // Define props for the component
  const props = defineProps({
    withArrow: {
      type: Boolean,
      default: true,
    },
  });
</script>

<template>
  <NuxtLink
    :to="localPath('/quote')"
    class="rounded-lg bg-primary500 px-5 py-3 text-sm text-center font-semibold text-white shadow-sm transform transition-transform duration-300 hover:scale-105 hover:brightness-110 hover:bg-primary600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary500 w-full sm:w-auto"
    role="button"
  >
    <slot />
    <span aria-hidden="true" v-if="withArrow">→</span>
  </NuxtLink>
</template>

<style scoped></style>
