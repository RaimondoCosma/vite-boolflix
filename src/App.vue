<script>
import { store } from "./store";
import axios from "axios";
import AppWelcome from "./components/commons/AppWelcome.vue";
import AppUser from "./components/commons/AppUser.vue";
import AppHeader from "./components/header/AppHeader.vue";
import AppError from "./components/commons/AppError.vue";
import AppMain from "./components/main/AppMain.vue";

export default {
  components: {
    AppWelcome,
    AppUser,
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
          if (this.store.errorOccurred) {
            this.store.errorOccurred = !this.store.errorOccurred;
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
          if (this.store.errorOccurred) {
            this.store.errorOccurred = !this.store.errorOccurred;
          }
        })
        .catch((err) => {
          this.store.errorOccurred = true;
        });
    },
    topRatedShows() {
      axios
        .get("https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          if (this.store.errorOccurred) {
            this.store.errorOccurred = !this.store.errorOccurred;
          }
        });
      axios
        .get("https://api.themoviedb.org/3/tv/top_rated", {
          params: {
            api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.store.series = resp.data.results;
          if (this.store.errorOccurred) {
            this.store.errorOccurred = !this.store.errorOccurred;
          }
        });
    },
  },
  created() {
    this.topRatedShows();
  },
};
</script>

<template>
  <AppWelcome />
  <AppUser />
  <header>
    <AppHeader @search="moviesSearch" :method="topRatedShows" />
  </header>
  <main>
    <AppError v-if="this.store.errorOccurred" />
    <AppMain v-else />
  </main>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
