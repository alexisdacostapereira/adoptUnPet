<template>
  <div
    class="bg-primary-light min-h-screen py-6 px-4 sm:py-12 sm:px-6 lg:px-8 relative"
  >
    <button
      @click="goBack"
      class="absolute top-4 left-4 text-primary hover:text-primary-dark transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>

    <div v-if="animal" class="max-w-3xl mx-auto">
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              :src="animal.avatar"
              :alt="animal.name"
            />
          </div>
          <div class="p-8">
            <div
              class="uppercase tracking-wide text-sm text-primary font-semibold"
            >
              {{ animal.type }} - {{ animal.race }}
            </div>
            <h1 class="mt-1 text-3xl font-bold text-primary-dark">
              {{ animal.name }}
            </h1>
            <p class="mt-2 text-gray-700">{{ animal.age }} ans</p>
            <p class="mt-2 text-gray-700">{{ animal.city }}</p>
            <p class="mt-4 text-gray-600">{{ animal.description }}</p>

            <div class="mt-6 flex items-center">
              <svg
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="ml-2 text-gray-700">{{ animal.city }}</span>
            </div>

            <div class="mt-6">
              <button
                class="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Adopter {{ animal.name }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-primary-dark mb-4">
          Plus d'informations
        </h2>
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 class="font-semibold text-primary">Type</h3>
              <p class="text-gray-700">{{ animal.type }}</p>
            </div>
            <div>
              <h3 class="font-semibold text-primary">Race</h3>
              <p class="text-gray-700">{{ animal.race }}</p>
            </div>
            <div>
              <h3 class="font-semibold text-primary">Âge</h3>
              <p class="text-gray-700">{{ animal.age }} ans</p>
            </div>
            <div>
              <h3 class="font-semibold text-primary">Ville</h3>
              <p class="text-gray-700">{{ animal.city }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center h-screen">
      <p class="text-2xl font-bold text-primary">Animal non trouvé</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { data: animals } = await useFetch("/data/animals.json");

const animal = computed(() =>
  animals.value?.find(
    (a) =>
      a.name.toLowerCase() ===
      decodeURIComponent(route.params.name).toLowerCase()
  )
);

useHead(() => ({
  title: animal.value
    ? `${animal.value.name} - AdopteUnPet`
    : "Animal - AdopteUnPet",
}));

const goBack = () => {
  router.back();
};
</script>
