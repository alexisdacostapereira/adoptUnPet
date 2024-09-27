import animals from "@/data/animals.js";

export default defineEventHandler(async (event) => {
  const { type, city, age, race } = getQuery(event);

  let filteredAnimals = animals;

  if (type) {
    filteredAnimals = filteredAnimals.filter((animal) => animal.type === type);
  }

  if (city) {
    filteredAnimals = filteredAnimals.filter((animal) => animal.city === city);
  }

  if (age) {
    const [minAge, maxAge] = age.split("-").map(Number);
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.age >= minAge && animal.age <= maxAge
    );
  }

  if (race) {
    filteredAnimals = filteredAnimals.filter((animal) => animal.race === race);
  }

  return filteredAnimals;
});
