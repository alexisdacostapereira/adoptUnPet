<template>
  <div class="about min-h-screen bg-primary-light">
    <div class="about__container mx-auto px-4 py-8 md:py-16 md:px-20">
      <h1
        class="about__title text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 text-center"
      >
        {{ $t("about_title") }}
      </h1>

      <div class="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="about__left-content w-full md:w-1/2">
          <h2
            class="about__title-left-content text-xl md:text-2xl font-semibold text-primary-dark mb-4"
          >
            {{ $t("mission_title") }}
          </h2>
          <p class="about__text-left-content text-gray-700 mb-4 md:mb-6">
            {{ $t("mission_text") }}
          </p>
          <p class="about__text-left-content text-gray-700 mb-4 md:mb-6">
            {{ $t("platform_text") }}
          </p>
          <NuxtImg
            loading="lazy"
            preload
            src="../public/img/familly.jpg"
            alt="Une famille heureuse avec leur animal adopté"
            class="rounded-lg shadow-md w-full md:w-[90%] h-auto"
          />
        </div>

        <div class="about__right-content w-full md:w-1/2">
          <h2
            class="about__title-right-content text-xl md:text-2xl font-semibold text-primary-dark mb-4"
          >
            {{ $t("history_title") }}
          </h2>
          <p class="about__text-right-content text-gray-700 mb-4 md:mb-6">
            {{ $t("foundation_text") }}
          </p>
          <p class="about__text-right-content text-gray-700 mb-4 md:mb-6">
            {{ $t("history_text") }}
          </p>
          <NuxtImg
            loading="lazy"
            preload
            src="../public/img/fonder.jpg"
            alt="Notre fondatrice avec des animaux de refuge"
            class="rounded-lg shadow-md w-full md:w-[90%] h-auto"
          />
        </div>
      </div>

      <div
        class="value__container bg-white rounded-lg p-6 md:p-8 mb-12 md:mb-16"
      >
        <h2
          class="value__container-title text-xl md:text-2xl font-semibold text-primary-dark mb-4"
        >
          {{ $t("values_title") }}
        </h2>
        <ul
          class="value__list list-disc list-inside text-gray-700 space-y-3 md:space-y-4"
        >
          <li>
            <strong>{{ $t("value_compassion_title") }}</strong>
            {{ $t("value_compassion_text") }}
          </li>
          <li>
            <strong>{{ $t("value_transparency_title") }}</strong>
            {{ $t("value_transparency_text") }}
          </li>
          <li>
            <strong>{{ $t("value_education_title") }}</strong>
            {{ $t("value_education_text") }}
          </li>
          <li>
            <strong>{{ t("value_collaboration_title") }}</strong>
            {{ $t("value_collaboration_text") }}
          </li>
        </ul>
      </div>

      <div class="impact__container mb-12 md:mb-16" ref="impactSection">
        <h2
          class="impact__title text-xl md:text-2xl font-semibold text-primary-dark mb-4 text-center"
        >
          {{ $t("impact_title") }}
        </h2>
        <div
          class="impact__grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center"
        >
          <div class="impact__adopted-animals bg-white p-4 md:p-6 rounded-lg">
            <p class="text-3xl md:text-4xl font-bold text-primary mb-2">
              {{ animatedCounts.animals }}+
            </p>
            <p class="text-gray-700">{{ $t("impact_adopted") }}</p>
          </div>
          <div class="impact__shelter-partners bg-white p-4 md:p-6 rounded-lg">
            <p class="text-3xl md:text-4xl font-bold text-primary mb-2">
              {{ animatedCounts.shelters }}+
            </p>
            <p class="text-gray-700">{{ $t("impact_partners") }}</p>
          </div>
          <div class="impact__rating bg-white p-4 md:p-6 rounded-lg">
            <p class="text-3xl md:text-4xl font-bold text-primary mb-2">
              {{ animatedCounts.satisfaction }}%
            </p>
            <p class="text-gray-700">{{ $t("impact_satisfaction") }}</p>
          </div>
        </div>
      </div>

      <div class="team__container text-center mb-12 md:mb-16">
        <h2
          class="team__title text-xl md:text-2xl font-semibold text-primary-dark mb-4"
        >
          {{ $t("team_title") }}
        </h2>
        <div class="team__infos grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center"
          >
            <NuxtImg
              loading="lazy"
              preload
              :src="member.photo"
              :alt="member.name"
              class="team__avatar w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 md:mb-4 object-cover"
            />
            <p
              class="team__name font-semibold text-primary text-sm md:text-base"
            >
              {{ member.name }}
            </p>
            <p class="team__role text-xs md:text-sm text-gray-600">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>

      <div class="impact__adopt-button text-center">
        <NuxtLink
          to="/adopt"
          class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300"
        >
          {{ t("cta_adopt") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useHead({
  title: "AdopteUnPet - À propos",
});
const teamMembers = computed(() => [
  {
    name: "Marie Dupont",
    role: t("team_founder"),
    photo: "/img/team/marie.jpg",
  },
  {
    name: "Pierre Martin",
    role: t("team_partnerships"),
    photo: "/img/team/pierre.jpg",
  },
  {
    name: "Sophie Leroy",
    role: t("team_coordinator"),
    photo: "/img/team/sophie.jpg",
  },
  {
    name: "Lucas Dubois",
    role: t("team_vet"),
    photo: "/img/team/lucas.jpg",
  },
]);

const impactSection = ref(null);
const animatedCounts = ref({
  animals: 0,
  shelters: 0,
  satisfaction: 0,
});
const animationTriggered = ref(false);

const animateValue = (key, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    animatedCounts.value[key] = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const startAnimation = () => {
  if (animationTriggered.value) return;
  animationTriggered.value = true;
  animateValue("animals", 0, 5000, 1000);
  animateValue("shelters", 0, 200, 1000);
  animateValue("satisfaction", 0, 98, 1000);
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (impactSection.value) {
    observer.observe(impactSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
