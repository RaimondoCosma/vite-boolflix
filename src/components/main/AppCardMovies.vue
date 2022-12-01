<script>
import { store } from "../../store";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "AppCardMovies",
  components: {
    CountryFlag,
  },
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
      styleObject: {
        color: "red",
      },
    };
  },
  methods: {
    ratingTransform(num) {
      return Math.ceil((Number(num) * 5) / 10);
    },
    changeLanguage(string) {
      if (string === "en") {
        return "gb";
      } else if (string === "ja") {
        return "jp";
      } else if (string === "ko") {
        return "kr";
      } else if (string === "he") {
        return "il";
      } else if (string === "hi") {
        return "in";
      } else {
        return string;
      }
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
              :alt="movie.title"
            />
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            <country-flag
              class="ms-flag"
              :country="changeLanguage(movie.original_language)"
              size="normal"
            />
            <div class="rating">
              <i
                class="fa-solid fa-star rated"
                v-for="n in ratingTransform(movie.vote_average)"
              ></i>
              <i
                class="fa-solid fa-star"
                v-for="n in 5 - ratingTransform(movie.vote_average)"
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
  .rated {
    color: rgb(192, 192, 69);
  }
}
.ms-flag {
  box-shadow: 3px 3px 5px 0px #000000;
}
</style>
