import { defineStore } from "pinia";

export const useAgeStore = defineStore("age", {
  state: () => ({
    selectedAge: null,
  }),
  actions: {
    setAge(age) {
      this.selectedAge = age;
    },
    clearAge() {
      this.selectedAge = null;
    },
  },
  getters: {
    getSelectedAge: (state) => state.selectedAge,
  },
});
