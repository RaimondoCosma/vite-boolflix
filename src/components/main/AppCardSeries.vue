<script>
import { store } from "../../store";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "AppCardSeries",
  components: {
    CountryFlag,
  },
  props: {
    serie: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    ratingTransform(num) {
      return Math.ceil((Number(num) * 5) / 10);
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
              :src="`https://image.tmdb.org/t/p/original${serie.poster_path}`"
              alt="movie.title"
            />
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <country-flag :country="serie.original_language" size="small" />
            <div class="rating">
              <i
                class="fa-solid fa-star rated"
                v-for="n in ratingTransform(serie.vote_average)"
              ></i>
              <i
                class="fa-solid fa-star"
                v-for="n in 5 - ratingTransform(serie.vote_average)"
              ></i>
            </div>
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
.rating {
  display: flex;
}
.rated {
  color: rgb(192, 192, 69);
}
</style>
