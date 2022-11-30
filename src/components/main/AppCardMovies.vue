<script>
import { store } from "../../store";

export default {
  name: "AppCardMovies",
  props: {
    movie: Object,
  },
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
      <li>
        <h2>{{ movie.title }}</h2>
        <h3>{{ movie.original_title }}</h3>
        <div>{{ movie.original_language }}</div>
        <div>{{ movie.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
