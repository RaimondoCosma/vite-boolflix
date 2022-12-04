<script>
import { store } from "../../store";
import AppCardMovies from "./AppCardMovies.vue";
import AppCardSeries from "./AppCardSeries.vue";
import ShowFilm from "./ShowFilm.vue";
import ShowSerie from "./ShowSerie.vue";

export default {
  name: "AppMain",
  components: {
    AppCardMovies,
    AppCardSeries,
    ShowFilm,
    ShowSerie,
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
    <div
      v-if="this.store.movies.length > 0 && this.store.isSearch === false"
      class="movies-search"
    >
      I titoli del momento
    </div>
    <div
      v-else-if="this.store.movies.length > 0 && this.store.isSearch === true"
      class="movies-search"
    >
      Film trovati per: "{{ store.inputText }}"
    </div>
    <div v-else class="movies-search">
      Non sono stati trovati film per: "{{ store.inputText }}"
    </div>
    <div class="movies">
      <AppCardMovies
        v-for="(movie, index) in store.movies"
        :movie="movie"
        :index="index"
      />
    </div>
    <div
      v-if="this.store.series.length > 0 && this.store.isSearch === false"
      class="movies-search"
    >
      Le serie tv del momento
    </div>
    <div
      v-else-if="this.store.series.length > 0 && this.store.isSearch === true"
      class="movies-search"
    >
      Serie trovate per: "{{ store.inputText }}"
    </div>
    <div v-else class="movies-search">
      Non sono state trovate serie per: "{{ store.inputText }}"
    </div>
    <div class="series">
      <AppCardSeries
        v-for="(serie, index) in store.series"
        :serie="serie"
        :index="index"
      />
    </div>
    <ShowFilm />
    <ShowSerie />
  </section>
</template>

<style lang="scss" scoped>
.movies-search,
.series-search {
  color: white;
  font-size: 1.5rem;
  margin: 0.9375rem 0 0.625rem;
}
.movies-search {
  margin-top: 0.625rem;
}
.movies,
.series {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.movies > div,
.series > div {
  flex-shrink: 0;
  width: calc(100% / 4);
  border: 2px solid black;
  @include media-breackpoint-up(lg) {
    width: calc(100% / 3);
  }
  @include media-breackpoint-up(sm) {
    width: calc(100% / 2);
  }
}
</style>
