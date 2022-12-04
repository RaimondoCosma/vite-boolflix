<script>
import { store } from "../../store";
import axios from "axios";
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
    getCardIndex() {
      this.store.cardIndex = this.index;
    },
    showInfo() {
      this.store.cardIndex = this.index;
      this.store.showDetails = !this.store.showDetails;
      this.getActors();
    },
    getActors() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.store.movies[this.index].id
          }/credits`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            },
          }
        )
        .then((resp) => {
          this.store.characters = resp.data.cast;
        });
    },
    getTrailer() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.store.movies[this.store.cardIndex].id
          }/videos`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
              lang: "it-IT",
            },
          }
        )
        .then((resp) => {
          if (resp.data.results[0]) {
            this.store.movieTrailers = resp.data.results[0].key;
          }
        });
    },
    getSimilarMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.store.movies[this.store.cardIndex].id
          }/similar`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
              lang: "it-IT",
            },
          }
        )
        .then((resp) => {
          this.store.similarMovies = resp.data.results;
        });
    },
    showPreview() {
      this.store.cardIndex = this.index;
      this.store.previewVisible = true;
      this.getActors();
      this.getTrailer();
      this.getSimilarMovies();
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li>
        <a href="#">
          <div class="card" @click="showPreview()">
            <img
              v-if="movie.poster_path"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
              :alt="movie.title"
            />
            <img
              v-else
              src="../../assets/img/poster-placeholder.png"
              :alt="movie.title"
            />
            <div
              class="card-details"
              :class="{
                active:
                  this.store.showDetails && index === this.store.cardIndex,
              }"
              @click.stop="showInfo()"
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
              <div class="cast">
                <h4>Cast:</h4>
                <ul
                  class="actor"
                  v-if="
                    this.store.characters.length > 0 && this.store.showDetails
                  "
                  v-for="n in 5"
                >
                  <li>{{ this.store.characters[n].name }}</li>
                </ul>
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
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.616),
      rgba(0, 0, 0, 0.257)
    );
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    color: rgb(255, 255, 255);
    position: absolute;
    top: -105%;
    left: 0;
    right: 0;
    height: 100%;
    border-radius: 0 0 100px 100px;
    transition: top 0.3s linear, border-radius 0.3s linear;
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
.cast {
  text-align: center;
}
.description-text {
  max-height: 6.25rem;
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
