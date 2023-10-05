<script setup>
//Define component props
const props = defineProps({
  limitedWidth: {
    type: Boolean,
    default: false,
  },
})

</script>

<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" v-bind="$attrs">
    <div 
    class="mx-auto px-4 sm:px-6 lg:px-8"
    :class="limitedWidth ? 'max-w-4xl' : 'max-w-7xl'">
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
