<template>
  <div class="contact min-h-screen bg-primary-light py-8 md:py-16 px-4 md:px-8">
    <div class="contact__container max-w-6xl mx-auto">
      <h1
        class="contact__title text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 text-center"
      >
        {{ $t("contact_title") }}
      </h1>

      <div class="contact__grid grid md:grid-cols-2 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2
            class="contact__message-title text-xl md:text-2xl font-semibold text-primary-dark mb-4 md:mb-6"
          >
            {{ $t("message_form_title") }}
          </h2>
          <form
            @submit.prevent="submitForm"
            class="contact__message-form space-y-4"
          >
            <div>
              <label for="name" class="block text-gray-700 mb-2">{{
                $t("name_field")
              }}</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label for="email" class="block text-gray-700 mb-2">{{
                $t("email_field")
              }}</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label for="subject" class="block text-gray-700 mb-2">{{
                $t("subject_field")
              }}</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label for="message" class="block text-gray-700 mb-2">{{
                $t("message_field")
              }}</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              {{ $t("send_button") }}
            </button>
          </form>
        </div>

        <div class="contact__coordinate space-y-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h2
              class="contact__coordinate-title text-xl md:text-2xl font-semibold text-primary-dark mb-4 md:mb-6"
            >
              {{ $t("contact_info_title") }}
            </h2>
            <div class="space-y-3">
              <p>
                <strong>{{ $t("address_label") }}</strong> 123 Rue des Animaux,
                75000 Paris
              </p>
              <p>
                <strong>{{ $t("phone_label") }}</strong> +33 1 23 45 67 89
              </p>
              <p>
                <strong>{{ $t("email_label") }}</strong> contact@adopteunpet.fr
              </p>
              <p>
                <strong>{{ $t("hours_label") }}</strong>
                {{ $t("hours_details") }}
              </p>
            </div>
          </div>

          <div
            class="contact__coordinate-map bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center"
          >
            <Map :zoom="16" :set-view="[48.7643242, 2.3892738]" />
          </div>
        </div>
      </div>

      <div class="contact__faq mt-12 md:mt-16">
        <h2
          class="contact__faq-title text-xl md:text-2xl font-semibold text-primary-dark mb-6 text-center"
        >
          {{ $t("faq_title") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(question, index) in faq"
            :key="index"
            class="bg-white shadow-lg rounded-lg p-5"
          >
            <h3 class="text-lg font-semibold text-primary-dark mb-2">
              {{ question.q }}
            </h3>
            <p class="text-gray-700">{{ question.a }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 md:mt-16 text-center">
        <NuxtImg
          loading="lazy"
          preload
          src="/img/banner.jpg"
          alt="Animaux heureux"
          class="rounded-lg shadow-md mx-auto w-full max-w-2xl"
          width="700"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
useHead({
  title: "AdopteUnPet - Contact",
});

const { t } = useI18n();

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Formulaire soumis:", form.value);
  form.value = { name: "", email: "", subject: "", message: "" };
};

const faq = computed(() => [
  {
    q: t("faq_adopt_question"),
    a: t("faq_adopt_answer"),
  },
  {
    q: t("faq_fees_question"),
    a: t("faq_fees_answer"),
  },
  {
    q: t("faq_donate_question"),
    a: t("faq_donate_answer"),
  },
  {
    q: t("faq_foster_question"),
    a: t("faq_foster_answer"),
  },
]);

useHead({
  title: "AdopteUnPet - Contactez",
});
</script>
