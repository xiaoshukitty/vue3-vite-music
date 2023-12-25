import { defineStore } from "pinia";
import { SearchSuggest } from "@/api/types/tabbar";
import { useSearchSuggest } from "@/api/tabbar/index";
export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      showSearchView: false,
      searchIpt: "",
      suggestData: {} as SearchSuggest,
    };
  },
  getters: {
    showHot: (state) => {
      return state.searchIpt == "";
    },
  },
  actions: {
    async suggest() {
      this.suggestData = await useSearchSuggest(this.searchIpt);
    },
  },
});
