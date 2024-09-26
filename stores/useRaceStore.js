import { defineStore } from "pinia";

export const useRaceStore = defineStore("race", {
  state: () => ({
    selectedRace: null,
  }),
  actions: {
    setRace(race) {
      this.selectedRace = race;
    },
    clearRace() {
      this.selectedRace = null;
    },
  },
  getters: {
    getSelectedRace: (state) => state.selectedRace,
  },
});
