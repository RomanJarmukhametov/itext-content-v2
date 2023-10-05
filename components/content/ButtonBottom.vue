<script setup>
  // Button component that navigates to the quote page and located at the bottom of the page as a sticky element
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

  //Use the useRouter composable to get the current route
  const router = useRouter();

  // Function to navigate to the quote page
  function navigateToQuote() {
    window.scrollTo(0, 0);
    router.push(localPath("/quote"));
  }
</script>

<template>
  <button
    @click="navigateToQuote"
    class="rounded-lg bg-primary500 px-5 py-3 text-sm text-center font-semibold text-white shadow-sm transform transition-transform duration-300 hover:scale-105 hover:brightness-110 hover:bg-primary600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary500 w-full sm:w-auto fixed mx-auto bottom-4 left-0 right-0 md:hidden"
    role="button"
  >
    <slot />
    <span aria-hidden="true" v-if="withArrow">→</span>
  </button>
</template>

<style scoped></style>
