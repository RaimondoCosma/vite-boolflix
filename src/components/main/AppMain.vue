<script>
import { store } from "../../store";
import AppCardMovies from "./AppCardMovies.vue";
import AppCardSeries from "./AppCardSeries.vue";

export default {
  name: "AppMain",
  components: {
    AppCardMovies,
    AppCardSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="container">
    <AppCardMovies class="card" v-for="movie in store.movies" :movie="movie" />
    <AppCardSeries class="card" v-for="serie in store.series" :serie="serie" />
  </section>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: calc(100% / 4 - 1.25rem);
  margin: 0 0.625rem;
  @include media-breackpoint-up(md) {
    width: calc(100% / 3 - 1.25rem);
  }
  @include media-breackpoint-up(sm) {
    width: calc(100% / 2 - 1.25rem);
  }
}
</style>
