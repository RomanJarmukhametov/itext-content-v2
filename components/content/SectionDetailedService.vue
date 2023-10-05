<script setup>
  // Section component that showcases detailed description of the services

  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/vue";
  import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/outline";

  // Define props for the component
  const props = defineProps({
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    services: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <StyledContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
        <StyledHeading2 v-motion-fade-visible>
          {{ title }}
        </StyledHeading2>

        <StyledBodyText v-motion-fade-visible>
          {{ description }}
        </StyledBodyText>

        <dl
          class="mt-10 space-y-6 divide-y divide-gray-900/10"
          v-motion-fade-visible
        >
          <Disclosure
            as="div"
            v-for="item in services"
            :key="item.id"
            class="pt-6"
            v-slot="{ open }"
            v-auto-animate
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span class="text-base font-semibold leading-7">{{
                  item.title
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    v-if="!open"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                  <ChevronUpIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <StyledBodyText>
                {{ item.description }}
              </StyledBodyText>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>

      <div
        class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-start"
      >
        <div class="relative mx-auto w-full lg:max-w-md">
          <NuxtImg
            class="h-full w-full object-cover"
            src="/images/service.svg"
            :alt="title"
            v-motion-fade-visible
          />
        </div>
      </div>
    </div>
  </StyledContainer>
</template>

<style scoped></style>
