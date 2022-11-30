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
  methods: {
    ratingTransform(num) {
      return Math.ceil((num * 5) / 10);
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li>
        <a href="#">
          <div>
            <img
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
              alt="movie.title"
            />
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            <div>{{ movie.original_language }}</div>
            <div>{{ ratingTransform(movie.vote_average) }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 23.75rem;
}
</style>
