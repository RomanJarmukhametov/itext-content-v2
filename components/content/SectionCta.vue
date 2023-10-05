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
    buttonPrimaryText: {
      type: String,
      default: "Button Primary",
    },
    image: {
      type: String,
      default: "cta.svg",
    },
  });
</script>

<template>
  <StyledContainer>
    <div
      class="lg:grid lg:grid-cols-12 lg:gap-8 bg-gray-50 p-8 sm:p-12 rounded-2xl shadow border-[1px] border-gray-300"
    >
      <div class="md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
        <div class="mb-16">
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

        <div class="mt-10 flex flex-col w-full sm:flex-row gap-4 sm:gap-6">
          <ButtonPrimary :withArrow="true">
            {{ buttonPrimaryText }}
          </ButtonPrimary>
        </div>
      </div>

      <div
        class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
      >
        <div class="relative mx-auto w-full lg:max-w-md">
          <NuxtImg
            class="h-full w-full object-cover"
            :src="'/images/' + image"
            alt="CTA image"
            loading="lazy"
            v-motion-fade-visible
          />
        </div>
      </div>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
