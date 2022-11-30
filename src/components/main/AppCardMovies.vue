<script>
import { store } from "../../store";

export default {
  name: "AppCardMovies",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="movie in store.movies">
        <h2>{{ movie.title }}</h2>
        <h3>{{ movie.original_title }}</h3>
        <div>{{ movie.original_language }}</div>
        <div>{{ movie.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
