<script setup>
// Secondary button component that navigates to the service page

// Import useLocalePath to get the locale path
const localPath = useLocalePath()
</script>

<template>
  <NuxtLink
     :to="localPath('/services')"
    class="rounded-lg bg-white px-5 py-3 text-sm text-center font-semibold text-gray-700 shadow-sm border-gray-300 border transform transition-transform duration-300 hover:scale-102 hover:border-gray-400 hover:bg-gray-50 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary500 w-full sm:w-auto"
    role="button"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped></style>
