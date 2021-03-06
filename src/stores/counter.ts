import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),

  actions: {
    increment() {
      this.counter++;
    },
  },
});
