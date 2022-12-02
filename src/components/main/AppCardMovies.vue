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
    index: Number,
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
      } else if (string === "zh") {
        return "cn";
      } else {
        return string;
      }
    },
    showInfo() {
      this.store.cardIndex = this.index;
      this.store.showDetails = !this.store.showDetails;
    },
    movieCredits() {},
  },
};
</script>

<template>
  <div>
    <ul>
      <li>
        <a href="#">
          <div class="card">
            <img
              :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
              :alt="movie.title"
            />
            <div
              class="card-details"
              :class="{
                active:
                  this.store.showDetails && index === this.store.cardIndex,
              }"
              @click="showInfo()"
            >
              <h2>{{ movie.title }} {{ index }}</h2>
              <h3>Titolo originale: {{ movie.original_title }}</h3>
              <h3>
                Lingua:
                <country-flag
                  class="ms-flag"
                  :country="changeLanguage(movie.original_language)"
                  size="normal"
                />
              </h3>
              <div class="rating">
                <h3>Rating:</h3>
                <i
                  class="fa-solid fa-star rated"
                  v-for="n in ratingTransform(movie.vote_average)"
                ></i>
                <i
                  class="fa-solid fa-star"
                  v-for="n in 5 - ratingTransform(movie.vote_average)"
                ></i>
                <i
                  class="fa-solid fa-circle-chevron-down"
                  :class="{
                    rotate:
                      this.store.showDetails && index === this.store.cardIndex,
                  }"
                ></i>
              </div>
              <div class="description">
                <h4>Descrizione:</h4>
                <p class="description-text">{{ movie.overview }}</p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.04);
  }
  &:hover .card-details {
    top: -90%;
  }
  .card-details {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    color: rgb(1, 0, 51);
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    height: 100%;
    border-radius: 0 0 100px 100px;
    transition: top 0.3s linear, border-radius 0.3s linear;
    // &:hover {
    //   top: 0;
    //   border-radius: 0 0 0 0;
    // }
    .fa-circle-chevron-down {
      position: absolute;
      color: white;
      bottom: -8px;
      left: 50%;
      font-size: 20px;
      transform: translateX(-50%);
    }
  }
}
img {
  height: 23.75rem;
  transition: transform 0.3s linear;
}
.rating {
  display: flex;
  align-items: center;
  h3 {
    margin-right: 0.625rem;
  }
  .rated {
    color: rgb(192, 192, 69);
  }
}
.description-text {
  max-height: 9.375rem;
  overflow-y: auto;
  padding: 0.3125rem;
}
.ms-flag {
  box-shadow: 3px 3px 5px 0px #000000;
}
.active {
  top: 0 !important;
  border-radius: 0 0 0 0 !important;
}
.rotate {
  transform: translateX(-50%) rotateZ(180deg) !important;
}
</style>
