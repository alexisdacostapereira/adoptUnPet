import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state: () => ({
    selectedCity: null,
  }),
  actions: {
    setCity(city) {
      this.selectedCity = city;
    },
    clearCity() {
      this.selectedCity = null;
    },
  },
  getters: {
    getSelectedCity: (state) => state.selectedCity,
  },
});
