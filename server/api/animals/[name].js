import animals from "@/data/animals.js";

export default defineEventHandler(async (event) => {
  const name = event.context.params.name;

  console.log(name);
  console.log(animals);

  const animal = animals.find((animal) => animal.name === name);

  if (!animal) {
    throw createError("Animals not found");
  }

  return animal;
});
