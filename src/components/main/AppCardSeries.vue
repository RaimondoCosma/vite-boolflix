<script>
import { store } from "../../store";

export default {
  name: "AppCardSeries",
  props: {
    serie: Object,
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
        <a href="#">
          <div>
            <img
              :src="`https://image.tmdb.org/t/p/original${serie.poster_path}`"
              alt="movie.title"
            />
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <div>{{ serie.original_language }}</div>
            <div>{{ serie.vote_average }}</div>
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
