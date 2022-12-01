<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/header/AppHeader.vue";
import AppError from "./components/error/AppError.vue";
import AppMain from "./components/main/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppError,
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
          if (this.errorOccurred) {
            this.errorOccurred = !this.errorOccurred;
          }
        })
        .catch((err) => {
          this.errorOccurred = true;
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
          if (this.errorOccurred) {
            this.errorOccurred = !this.errorOccurred;
          }
        })
        .catch((err) => {
          this.errorOccurred = true;
        });
    },
  },
};
</script>

<template>
  <header>
    <AppHeader @search="moviesSearch" />
    <AppError v-if="errorOccurred" />
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
