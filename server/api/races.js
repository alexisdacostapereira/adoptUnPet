import animals from "@/data/animals.js";

export default defineEventHandler(async (event) => {
  const { type } = getQuery(event);

  let races;
  if (type) {
    races = [
      ...new Set(
        animals
          .filter((animal) => animal.type === type)
          .map((animal) => animal.race)
      ),
    ];
  } else {
    races = [...new Set(animals.map((animal) => animal.race))];
  }

  return races.sort();
});
