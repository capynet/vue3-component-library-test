import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

export const useCounter2Store = defineStore({
  id: "counter2",
  state: () => ({
    counter: 0,
  }),

  actions: {
    duplicate() {
      this.counter++;
      this.counter++;
    },
  },
});
