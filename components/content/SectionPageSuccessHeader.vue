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

  const clientName = ref("");

  //Checking if client name is strored in local storage
  onMounted(() => {
    clientName.value = window.localStorage.getItem("submittedName") || ""; // added fallback to an empty string
  });
</script>

<template>
  <StyledContainer :limitedWidth="true">
    <div class="text-center">
      <StyledTagline>
        {{ tagline }}
      </StyledTagline>

      <StyledHeading1> {{ clientName }}{{ title }} </StyledHeading1>

      <StyledBodyText>
        {{ description }}
      </StyledBodyText>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
