<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    moviesSearch() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            query: store.inputText,
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        });
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            query: store.inputText,
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        });
    },
  },
};
</script>

<template>
  <header>
    <AppHeader @search="moviesSearch" />
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
