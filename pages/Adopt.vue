<template>
  <div class="adopt-page bg-primary-light">
    <section class="pet-filters__container p-4 md:p-8">
      <div
        class="pet-filters__filters flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center"
      >
        <div class="pet-filters__filters-type flex gap-4 w-full md:w-auto">
          <button
            class="pet-filters_filters-animals flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white w-1/2 md:w-auto"
            :class="{
              'border-2 border-primary shadow-lg':
                animalStore.selectedAnimal === 'cat',
            }"
            @click="selectAnimal('cat')"
          >
            <NuxtImg
              src="img/svg/chat.svg"
              height="65"
              width="65"
              loading="lazy"
              preload
            />
            <p>{{ $t("cat") }}</p>
          </button>
          <button
            class="pet-filters_filters-animals flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white w-1/2 md:w-auto"
            :class="{
              'border-2 border-primary shadow-lg':
                animalStore.selectedAnimal === 'dog',
            }"
            @click="selectAnimal('dog')"
          >
            <NuxtImg
              src="img/svg/chien.svg"
              height="70"
              width="70"
              loading="lazy"
              preload
            />
            <p>{{ $t("dog") }}</p>
          </button>
        </div>
        <div
          class="pet-filters__filters-dropdowns flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <Dropdown
            :placeholder="$t('city')"
            :data="filteredCities"
            v-model="selectedCity"
            class="w-full md:w-40"
          />
          <Dropdown
            :placeholder="$t('age')"
            :data="age"
            v-model="selectedAge"
            class="w-full md:w-40"
          />
          <Dropdown
            :placeholder="$t('race')"
            :data="filteredRaces"
            v-model="selectedRace"
            class="w-full md:w-40"
          />
        </div>
        <Button
          :onClick="() => resetAllFilters()"
          content="Réinitialiser les filtres"
          mode="dark"
          class="w-full md:w-auto"
        />
      </div>
    </section>

    <section class="animals__list p-4 md:p-8">
      <div
        v-if="loading"
        class="loading text-center py-8 text-lg text-gray-600"
      >
        {{ $t("loading_animals") }}
      </div>
      <div
        v-else-if="filteredAnimals.length === 0"
        class="no-results text-center py-8 text-lg text-gray-600"
      >
        {{ $t("no_animals") }}
      </div>
      <div
        v-else
        ref="animalsList"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimalCard
          v-for="animal in displayedAnimals"
          :key="animal.id"
          :type="animal.type"
          :race="animal.race"
          :name="animal.name"
          :age="animal.age"
          :city="animal.city"
          :description="animal.description"
          :avatar="animal.avatar"
          @click="goToAnimalPage(animal.name)"
          class="w-full"
        />
        <!-- utilisation d'une virtualize list pour les perfs -->
      </div>
      <div
        v-if="loadingMore"
        class="loading-more text-center py-4 text-lg text-gray-600"
      >
        {{ $t("loading_more_animals") }}
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "AdopteUnPet - Adopter",
});

const router = useRouter();
const cityStore = useCityStore();
const ageStore = useAgeStore();
const raceStore = useRaceStore();
const animalStore = useAnimalStore();

const animals = ref([]);
const displayedAnimals = ref([]);
const loading = ref(true);
const loadingMore = ref(false);
const page = ref(1);
const perPage = 12;

const selectedCity = ref("");
const selectedAge = ref("");
const selectedRace = ref("");

const animalsList = ref(null);

const filteredAnimals = computed(() => animals.value);

const filteredCities = ref([]);
const filteredRaces = ref([]);
const age = ["0 - 1", "2 - 5", "6 - 10", "11 - 15", "16 - 20", "21 +"];

onMounted(async () => {
  await initFiltersFromURL();
  if (!animals.value.length) {
    await loadInitialData();
  }
  setupInfiniteScroll();
});

watch(
  [selectedCity, selectedAge, selectedRace, () => animalStore.selectedAnimal],
  () => {
    updateURL();
    loadAnimals();
  },
  { deep: true }
);

async function loadInitialData() {
  await loadAnimals();
  await loadFilterOptions();
}

async function loadAnimals() {
  loading.value = true;
  try {
    const { data } = await useFetch("/api/animals", {
      method: "GET",
      query: {
        type: animalStore.selectedAnimal,
        city: selectedCity.value,
        age: selectedAge.value,
        race: selectedRace.value,
      },
    });
    animals.value = data.value;
    resetPagination();
    await loadMoreAnimals();
  } catch (error) {
    console.error("Error loading animals:", error);
  } finally {
    loading.value = false;
  }
}

async function loadFilterOptions() {
  try {
    const { data: cityData } = await useFetch("/api/cities", {
      query: {
        type: animalStore.selectedAnimal,
      },
    });
    filteredCities.value = cityData.value;

    const { data: raceData } = await useFetch("/api/races", {
      query: {
        type: animalStore.selectedAnimal,
      },
    });
    filteredRaces.value = raceData.value;
  } catch (error) {
    console.error("Error loading filter options:", error);
  }
}

async function loadMoreAnimals() {
  if (
    loadingMore.value ||
    displayedAnimals.value.length >= animals.value.length
  )
    return;

  loadingMore.value = true;
  try {
    const start = displayedAnimals.value.length;
    const end = start + perPage;
    const newAnimals = animals.value.slice(start, end);
    displayedAnimals.value = [...displayedAnimals.value, ...newAnimals];
    page.value++;
  } catch (error) {
    console.error("Error loading more animals:", error);
  } finally {
    loadingMore.value = false;
  }
}

function setupInfiniteScroll() {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !loadingMore.value) {
        loadMoreAnimals();
      }
    },
    { rootMargin: "100px" }
  );

  if (animalsList.value) {
    observer.observe(animalsList.value);
  }
}

function resetPagination() {
  page.value = 1;
  displayedAnimals.value = [];
}

async function initFiltersFromURL() {
  const { animal, city, age, race } = router.currentRoute.value.query;
  let filtersChanged = false;

  const setFilter = (key, value) => {
    switch (key) {
      case "animal":
        animalStore.setAnimal(value);
        break;
      case "city":
        cityStore.setCity(value);
        selectedCity.value = value;
        break;
      case "age":
        ageStore.setAge(value);
        selectedAge.value = value;
        break;
      case "race":
        raceStore.setRace(value);
        selectedRace.value = value;
        break;
    }
    filtersChanged = true;
  };

  Object.entries({ animal, city, age, race }).forEach(([key, value]) => {
    if (value) {
      setFilter(key, value);
    }
  });

  if (filtersChanged) {
    await loadFilterOptions();
    await loadAnimals();
  }
}

function selectAnimal(animal) {
  animalStore.setAnimal(animal);
  selectedRace.value = "";
  updateURL();
  loadFilterOptions();
  loadAnimals();
}

function updateURL() {
  const query = {
    animal: animalStore.selectedAnimal,
    city: selectedCity.value,
    age: selectedAge.value,
    race: selectedRace.value,
  };
  router.push({
    query: Object.fromEntries(Object.entries(query).filter(([_, v]) => v)),
  });
}

function resetAllFilters() {
  animalStore.setAnimal(null);
  cityStore.setCity(null);
  ageStore.setAge(null);
  raceStore.setRace(null);
  selectedCity.value = "";
  selectedAge.value = "";
  selectedRace.value = "";
  updateURL();
  loadFilterOptions();
  loadAnimals();
}

function goToAnimalPage(name) {
  router.push(`/animals/${name}`);
}
</script>

<style scoped>
.animals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.loading,
.loading-more,
.no-results {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}
</style>
