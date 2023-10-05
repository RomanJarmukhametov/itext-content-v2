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

  // Define endpoint for the form depending on the locale

  let userLang;
  const endpoint = "https://formspree.io/f/xdojvazp";

  if (currentLocale.value === "ru") {
    userLang = "Russian";
  } else {
    userLang = "English";
  }

  //Define the form fields

  const submitted = ref(false);
  const submittedName = ref("");

  //Submit the form
  const submitHandler = async (formData) => {
    // Create a new FormData object
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("phone", formData.phone);
    data.append(
      "_subject",
      "New translation request from " +
        formData.name +
        " who speaks " +
        userLang
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data, // using `data` here
        headers: { Accept: "application/json" },
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
      console.error("Error submitting to Formspree:", error);
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

          <!-- Formspree honeypot anti-spam protection -->
          <input type="text" name="_gotcha" style="display: none" />
        </FormKit>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
