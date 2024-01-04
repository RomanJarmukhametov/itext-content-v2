<script setup>
  import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
  } from "@heroicons/vue/24/outline";

  //Use the useRouter composable to get the current route
  const router = useRouter();

  //Define props for the component
  const props = defineProps({
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    companyAddress: {
      type: String,
      default: "Address",
    },
    companyMessanger: {
      type: String,
      default: "messanger",
    },
    companyPhone: {
      type: String,
      default: "phone",
    },
    companyEmail: {
      type: String,
      default: "email",
    },
    nameLabel: {
      type: String,
      default: "Name",
    },
    namePlaceholder: {
      type: String,
      default: "Name",
    },
    emailLabel: {
      type: String,
      default: "Email",
    },
    emailPlaceholder: {
      type: String,
      default: "Email",
    },
    phoneLabel: {
      type: String,
      default: "Phone",
    },
    phonePlaceholder: {
      type: String,
      default: "Phone",
    },
    messageLabel: {
      type: String,
      default: "Message",
    },
    messagePlaceholder: {
      type: String,
      default: "Message",
    },
    buttonText: {
      type: String,
      default: "Submit",
    },
  });

  // Use the 'locale' variable from the 'useI18n' module
  const { locale } = useI18n();

  // Create a ref 'currentLocale' that holds the first two characters of the 'locale' value
  const currentLocale = ref(locale.value.substring(0, 2));

  //Import useLocalePath to get the locale path
  const localPath = useLocalePath();

  let userLang;
  if (currentLocale.value === "ru") {
    userLang = "Russian";
  } else {
    userLang = "English";
  }

  //Define the form fields
  const submitted = ref(false);
  const submittedName = ref("");
  const gotcha = ref("");

  //Define endpoint for the local API
  const endpoint = "/api/submitForm";

  //Submit the form
  const submitHandler = async (formData) => {
    try {
      // Create a JSON object with the form data
      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        language: userLang, // Add the language directly here
        subject: `New translation request from ${formData.name} who speaks ${userLang}`,
        _gotcha: gotcha.value, // Include the honeypot field value
      };

      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        submitted.value = true;
        submittedName.value = formData.name;
        // Save the submitted name to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem("submittedName", submittedName.value);
        }
        // Redirect user to the thank you page
        router.push(localPath("/success"));
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleInvalidSubmission = () => {
    console.error("Form submission is invalid.");
  };
</script>

<template>
  <section
    class="bg-gray-50 rounded-2xl border-[1px] shadow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
  >
    <div class="mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div class="pb-20">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="w-full bg-white lg:w-1/2"></div>
          <h2 class="text-3xl font-bold leading-7 text-gray-900">
            {{ title }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ description }}
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <MapPinIcon
                  class="h-7 w-6 text-primary500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <NuxtLink
                  class="hover:text-primary500"
                  to="https://maps.app.goo.gl/MgkM8Zb17Xy1qEGD6"
                  target="_blank"
                >
                  {{ companyAddress }}
                </NuxtLink>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-primary500" aria-hidden="true" />
              </dt>
              <dd>
                <NuxtLink
                  class="hover:text-primary500"
                  :to="'tel:' + companyPhone"
                >
                  {{ companyPhone }}</NuxtLink
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">WhatsApp</span>
                <PhoneIcon class="h-7 w-6 text-primary500" aria-hidden="true" />
              </dt>
              <dd>
                <NuxtLink
                  class="hover:text-primary500"
                  to="https://wa.me/77018712531"
                >
                  {{ companyMessanger }}</NuxtLink
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  class="h-7 w-6 text-primary500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <NuxtLink
                  class="hover:text-primary500"
                  :to="'mailto:' + companyEmail"
                >
                  {{ companyEmail }}</NuxtLink
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="px-8 py-12 bg-white rounded-2xl border-[1px] border-gray-400">
        <FormKit
          type="form"
          id="quote-form"
          :form-class="submitted ? 'hide' : 'show'"
          :submit-label="buttonText"
          @submit="submitHandler"
          @submit-invalid="handleInvalidSubmission"
        >
          <div class="mb-6">
            <FormKit
              type="text"
              name="name"
              :label="nameLabel"
              :placeholder="namePlaceholder"
              validation="required"
            />
          </div>

          <div class="mb-6">
            <FormKit
              type="text"
              name="email"
              :label="emailLabel"
              :placeholder="emailPlaceholder"
              validation="required|email"
            />
          </div>

          <div class="mb-6">
            <FormKit
              type="tel"
              name="phone"
              :label="phoneLabel"
              :placeholder="phonePlaceholder"
              validation="required"
            />
          </div>

          <div class="mb-10">
            <FormKit
              type="textarea"
              name="message"
              :label="messageLabel"
              rows="10"
              :placeholder="messagePlaceholder"
            />
          </div>

          <!-- Honeypot anti-spam protection -->
          <input
            type="text"
            name="_gotcha"
            autocomplete="off"
            tabindex="-1"
            aria-hidden="true"
            v-model="gotcha"
            style="display: none"
          />
        </FormKit>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
