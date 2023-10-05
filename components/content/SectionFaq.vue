<script setup>
  // Section component that showcases faqs, including a header and a list of cards.

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
    faqs: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <StyledContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <StyledHeading2>
          {{ title }}
        </StyledHeading2>
        <StyledBodyText class="mt-4">
          {{ description }}
        </StyledBodyText>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-6 divide-y divide-gray-900/10" v-motion-fade-visible>
          <Disclosure
            as="div"
            v-for="item in faqs"
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
                  item.question
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
                {{ item.answer }}
              </StyledBodyText>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </StyledContainer>
</template>
