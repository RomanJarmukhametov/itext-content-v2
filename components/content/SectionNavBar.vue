<script setup>
  import { Dialog, DialogPanel } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

  //Import useLocalePath to get the locale path
  const localPath = useLocalePath();

  // Use the 'locale' variable from the 'useI18n' module
  const { locale } = useI18n();

  // Create a ref 'currentLocale' that holds the first two characters of the 'locale' value
  const currentLocale = ref(locale.value.substring(0, 2));

  // Watch for changes on 'locale', if it changes then update 'currentLocale'
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale.substring(0, 2);
  });

  // Define the navigation variable that will hold the navigation data
  const navigation = await queryContent(`/${currentLocale.value}`)
    .where({ menu: { $eq: true } })
    .find();

  // Define variable to use per-component localization
  const { t } = useI18n({
    useScope: "local",
  });

  //Define props for the component
  const props = defineProps({
    withButton: {
      type: Boolean,
      default: true,
    },
  });

  const mobileMenuOpen = ref(false);
</script>

<i18n lang="json">
{
  "en": {
    "button": "Get a Quote"
  },
  "ru": {
    "button": "Заказать перевод"
  }
}
</i18n>

<template>
  <header class="bg-white border-b border-gray-200">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Main Navigation"
    >
      <div class="flex items-center gap-x-12">
        <NuxtLink :to="localPath('/')" class="-m-1.5 p-1.5">
          <span class="sr-only">iText Translation Agency</span>
          <NuxtImg
            class="h-8 w-auto"
            width="112"
            height="38"
            src="/images/itext_logo.svg"
            alt="iText logo"
          />
        </NuxtLink>

        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink
            v-for="item in navigation"
            :key="item._path"
            :to="item._path"
            class="nav-link font-semibold leading-6 text-gray-900 hover:text-primary500 transition-colors duration-200"
          >
            {{ item.title }}
            <span
              v-if="item.newMenuItem"
              class="px-2.5 py-0.5 rounded-full bg-primary100 text-primary800 text-xs font-medium leading-4 ml-1"
            >
              New
            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex">
        <ButtonPrimary v-if="withButton" :withArrow="false">
         {{ t("button") }}
        </ButtonPrimary>
      </div>
    </nav>
    <div class="lg:hidden">
      <ClientOnly>
        <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-10" />

          <DialogPanel
            v-motion-fade
            class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <NuxtLink :to="localPath('/')" class="-m-1.5 p-1.5">
                <span class="sr-only">iText Translation Agency</span>
                <NuxtImg
                  class="h-8 w-auto"
                  src="/images/itext_logo.svg"
                  alt="iText logo"
                />
              </NuxtLink>

              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item._path"
                    :to="item._path"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.title }}
                    <span
                      v-if="item.newMenuItem"
                      class="px-2.5 py-0.5 rounded-full bg-primary100 text-primary800 text-xs font-medium leading-4 ml-1"
                    >
                      New
                    </span>
                  </NuxtLink>
                </div>
                <div class="py-6">
                  <ButtonPrimary v-if="withButton" :withArrow="false">
                    {{ t("button") }}
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </ClientOnly>
    </div>
  </header>
</template>

<style scoped>
  .nav-link.router-link-active {
    color: #4136c8;
  }
</style>
