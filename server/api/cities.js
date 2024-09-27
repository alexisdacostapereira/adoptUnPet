import animals from "@/data/animals.js";

export default defineEventHandler(async (event) => {
  const cities = [...new Set(animals.map((animal) => animal.city))];
  return cities.sort();
});
