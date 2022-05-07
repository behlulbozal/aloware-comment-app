import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogName: "Behlul Bozal",
  }),
  getters: {
    blogNameGetter: (state) => state.blogName,
  },
  actions: {
    blogNameSetter(newValue) {
      this.blogName = newValue;
    },
  },
});
