<template>
  <div class="flex flex-col">
    <section class="hero w-full bg-primary-light">
      <div class="hero_container flex flex-col md:flex-row h-full md:h-128">
        <div class="hero_container-left-side w-full md:w-1/3 p-4">
          <NuxtImg
            preload
            src="img/1.png"
            class="w-full h-64 md:h-full object-cover relative md:top-4"
            width="1536"
          />
        </div>
        <div
          class="hero_container-right-side w-full md:w-2/3 flex flex-col justify-center items-center text-center p-4 md:p-12"
        >
          <h1
            class="font-semibold text-primary text-3xl md:text-5xl mb-4 md:mb-8"
          >
            {{ $t("adoption_message") }}
          </h1>
          <div
            class="hero_container-right-side-btn flex flex-col md:flex-row gap-3 mt-4"
          >
            <Button
              :onClick="() => router.push('/adopt')"
              :content="$t('adopt')"
              mode="dark"
              class="w-full md:w-auto"
            />
            <Button
              :onClick="() => router.push('/donate')"
              :content="$t('donate')"
              mode="light"
              class="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="pet-filters__container flex flex-col w-full py-8 px-4 md:px-10"
    >
      <div class="pet-filter__title">
        <h1 class="text-primary font-semibold text-3xl md:text-4xl mb-4">
          {{ $t("find_and_adopt") }}
        </h1>
      </div>
      <div
        class="pet-filters__filters flex flex-col md:flex-row mt-4 gap-4 justify-center items-center"
      >
        <div class="pet-filters__filters-type flex gap-4 w-full md:w-auto">
          <button
            class="pet-filters_filters-animals flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-light w-1/2 md:w-auto"
            :class="{
              'border-2 border-primary shadow-lg':
                animalStore.selectedAnimal === 'cat',
            }"
            @click="selectAnimal('cat')"
          >
            <NuxtImg preload src="img/svg/chat.svg" height="65" width="65" />
            <p>{{ $t("cat") }}</p>
          </button>
          <button
            class="pet-filters_filters-animals flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-light w-1/2 md:w-auto"
            :class="{
              'border-2 border-primary shadow-lg':
                animalStore.selectedAnimal === 'dog',
            }"
            @click="selectAnimal('dog')"
          >
            <NuxtImg
              loading="lazy"
              preload
              src="img/svg/chien.svg"
              height="70"
              width="70"
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
          :content="$t('find_an_animal')"
          mode="light"
          :onClick="navigateToAdopt"
          class="w-full md:w-auto"
        />
      </div>
    </section>

    <section class="how-to-adopt w-full bg-primary-orange py-8 px-4 md:px-10">
      <div class="how-to-adopt__container flex flex-col md:flex-row w-full">
        <div
          class="how-to-adopt__container-left-side w-full md:w-2/3 flex flex-col gap-8"
        >
          <div class="how-to-adopt__title">
            <h1 class="text-primary font-semibold text-3xl md:text-4xl">
              {{ $t("how_adoption_works") }}
            </h1>
          </div>
          <div
            class="how-to-adopt__list flex flex-row md:ps-20 md:relative md: top-11"
          >
            <div class="how-to-adopt__img mb-4 md:mb-0">
              <NuxtImg
                loading="lazy"
                preload
                src="img/svg/list.svg"
                width="50px"
              />
            </div>
            <div class="how-to-adopt__items-list text-primary">
              <ul class="space-y-4 md:space-y-12 pt-1 font-semibold text-md">
                <li>{{ $t("find_animal_to_adopt") }}</li>
                <li>{{ $t("fill_required_documents") }}</li>
                <li>{{ $t("schedule_shelter_visit") }}</li>
                <li>
                  {{ $t("meet_animal_and_sign_documents") }}
                </li>
              </ul>
            </div>
          </div>
          <div class="md:ps-20 md:relative md: top-11">
            <Button
              :onClick="() => router.push('/contact')"
              :content="$t('go_to_qa')"
              mode="dark"
              class="w-full md:w-auto"
            />
          </div>
        </div>
        <div
          class="how-to-adopt__container-right-side w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0"
        >
          <NuxtImg
            src="img/2.png"
            class="w-full max-w-sm md:max-w-full h-auto object-cover top-7 relative md:top-8"
            width="1536"
          />
        </div>
      </div>
    </section>

    <section class="find-my-shelter">
      <div
        class="find-my-shelter__container flex bg-white flex-col w-full h-96 md:h-128"
      >
        <div class="find-my-shelter__title p-4 md:p-0">
          <h1
            class="text-primary font-semibold text-3xl md:text-4xl md:absolute md:z-5000 md:pt-5 md:ps-20"
          >
            {{ $t("find_my_shelter") }}
          </h1>
        </div>
        <div class="find-my-shelter__map w-full h-full">
          <Map :animals="animals" zoom="5" :setView="[46.603354, 1.888334]" />
        </div>
      </div>
    </section>

    <section
      class="help-animals w-full bg-primary-light py-8 px-4 md:px-10 md:h-96"
    >
      <div class="help-animals__container flex flex-col w-full">
        <div class="help-animals__title mb-8">
          <h1
            class="text-primary font-semibold text-3xl md:text-4xl text-center"
          >
            {{ $t("love_helping_animals") }}
          </h1>
        </div>
        <div
          class="help-animals__cards flex flex-col md:flex-row justify-center items-center gap-20 md:gap-6"
        >
          <HomeCard
            v-for="homecard in homeCards"
            :key="homecard.title"
            :title="homecard.title"
            :content="homecard.content"
            class="w-full md:w-1/3"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
useHead({
  title: "AdopteUnPet - Acceuil",
});

const router = useRouter();
const cityStore = useCityStore();
const ageStore = useAgeStore();
const raceStore = useRaceStore();
const animalStore = useAnimalStore();

const animals = ref([]);
const age = ["0 - 1", "2 - 5", "6 - 10", "11 - 15", "16 - 20", "21 +"];

const selectedCity = ref("");
const selectedAge = ref("");
const selectedRace = ref("");

const { t } = useI18n();

onMounted(async () => {
  resetFilters();
  try {
    const response = await fetch("/data/animals.json");
    animals.value = await response.json();
  } catch (error) {
    console.error("Error loading animals data:", error);
  }
});

const resetFilters = () => {
  const cityStore = useCityStore();
  const ageStore = useAgeStore();
  const raceStore = useRaceStore();
  const animalStore = useAnimalStore();

  cityStore.setCity(null);
  ageStore.setAge(null);
  raceStore.setRace(null);
  animalStore.setAnimal(null);
};

const filteredRaces = computed(() => {
  console.log(animalStore.selectedAnimal);

  if (!animalStore.selectedAnimal) {
    return [...new Set(animals.value.map((animal) => animal.race))];
  }
  const filteredAnimals = animals.value.filter(
    (animal) => animal.type === animalStore.selectedAnimal
  );

  return [...new Set(filteredAnimals.map((animal) => animal.race))];
});

const filteredCities = computed(() => {
  if (!animalStore.selectedAnimal) {
    return [...new Set(animals.value.map((animal) => animal.city))];
  }
  const filteredAnimals = animals.value.filter(
    (animal) => animal.type === animalStore.selectedAnimal
  );
  return [...new Set(filteredAnimals.map((animal) => animal.city))];
});

const selectAnimal = (selectedAnimal) => {
  animalStore.setAnimal(selectedAnimal);
};

const homeCards = computed(() => [
  {
    title: t("become_a_volunteer"),
    content:
      "Lorem ipsum dolor sit amet consectetur. Aliquam in morbi in arcu ultrices. Nibh mattis gravida risus in risus nunc vitae condimentum.",
  },
  {
    title: t("learn_more"),
    content:
      "Lorem ipsum dolor sit amet consectetur. Aliquam in morbi in arcu ultrices. Nibh mattis gravida risus in risus nunc vitae condimentum.",
  },
  {
    title: t("become_a_host_family"),
    content:
      "Lorem ipsum dolor sit amet consectetur. Aliquam in morbi in arcu ultrices. Nibh mattis gravida risus in risus nunc vitae condimentum.",
  },
]);

watch(selectedCity, (newCity) => {
  cityStore.setCity(newCity);
});

watch(selectedAge, (newAge) => {
  ageStore.setAge(newAge);
});

watch(selectedRace, (newRace) => {
  raceStore.setRace(newRace);
});

const navigateToAdopt = () => {
  const query = {
    animal: animalStore.selectedAnimal,
    city: selectedCity.value,
    age: selectedAge.value,
    race: selectedRace.value,
  };
  router.push({
    path: "/adopt",
    query: Object.fromEntries(
      Object.entries(query).filter(([_, v]) => v != null)
    ),
  });
};
</script>

<style></style>
