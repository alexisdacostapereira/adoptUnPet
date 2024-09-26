import { defineStore } from "pinia";

export const useAnimalStore = defineStore("animal", {
  state: () => ({
    selectedAnimal: null,
  }),
  actions: {
    setAnimal(animal) {
      this.selectedAnimal = animal;
    },
    clearAnimal() {
      this.selectedAnimal = null;
    },
  },
  getters: {
    getSelectedAnimal: (state) => state.selectedAnimal,
  },
});
