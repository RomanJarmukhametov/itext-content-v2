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
  });
</script>

<template>
  <StyledContainer :limitedWidth="true">
   <div class="text-center">
        <StyledTagline>
          {{ tagline }}
        </StyledTagline>

        <StyledHeading1>
          {{ title }}
        </StyledHeading1>

        <StyledBodyText>
          {{ description }}
        </StyledBodyText>
      </div>
  </StyledContainer>
</template>

<style scoped></style>