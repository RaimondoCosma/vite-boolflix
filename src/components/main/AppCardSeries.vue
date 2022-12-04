<script>
import { store } from "../../store";
import axios from "axios";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "AppCardSeries",
  components: {
    CountryFlag,
  },
  props: {
    serie: Object,
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
    getSerieIndex() {
      this.store.serieIndex = this.index;
    },
    showInfo() {
      this.getSerieIndex();
      this.store.showDetailsSeries = !this.store.showDetailsSeries;
      this.getActors();
    },
    getActors() {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${
            this.store.series[this.store.serieIndex].id
          }/credits`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
            },
          }
        )
        .then((resp) => {
          this.store.seriesCharacters = resp.data.cast;
        });
    },
    getTrailer() {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${
            this.store.series[this.store.serieIndex].id
          }/videos`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
              lang: "it-IT",
            },
          }
        )
        .then((resp) => {
          this.store.serieTrailers = resp.data.results[0].key;
        });
    },
    getSimilarSeries() {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${
            this.store.series[this.store.serieIndex].id
          }/similar`,
          {
            params: {
              api_key: "00594a750bfd21ce80a5ab4ada689cf7",
              lang: "it-IT",
            },
          }
        )
        .then((resp) => {
          this.store.similarSeries = resp.data.results;
        });
    },
    showPreview() {
      this.getSerieIndex();
      this.store.previewVisibleSerie = true;
      this.getActors();
      this.getTrailer();
      this.getSimilarSeries();
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li>
        <a href="#">
          <div class="card" @click.prevent="showPreview()">
            <img
              v-if="serie.poster_path"
              :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`"
              alt="serie.title"
            />
            <img
              v-else
              src="../../assets/img/poster-placeholder.png"
              alt="serie.title"
            />
            <div
              class="card-details"
              :class="{
                active:
                  this.store.showDetailsSeries &&
                  index === this.store.serieIndex,
              }"
              @click.stop.prevent="showInfo()"
            >
              <h2>{{ serie.name }}</h2>
              <h3>Titolo originale: {{ serie.original_name }}</h3>
              <h3>
                Lingua:
                <country-flag
                  class="ms-flag"
                  :country="changeLanguage(serie.original_language)"
                  size="normal"
                />
              </h3>
              <div class="rating">
                <h3>Rating:</h3>
                <i
                  class="fa-solid fa-star rated"
                  v-for="n in ratingTransform(serie.vote_average)"
                ></i>
                <i
                  class="fa-solid fa-star"
                  v-for="n in 5 - ratingTransform(serie.vote_average)"
                ></i>
                <i
                  class="fa-solid fa-circle-chevron-down"
                  :class="{
                    rotate:
                      this.store.showDetailsSeries &&
                      index === this.store.cardIndex,
                  }"
                ></i>
              </div>
              <div class="description">
                <h4>Descrizione:</h4>
                <p class="description-text">{{ serie.overview }}</p>
              </div>
              <div class="cast">
                <h4>Cast:</h4>
                <ul>
                  <li
                    v-if="
                      this.store.seriesCharacters.length > 0 &&
                      this.store.showDetailsSeries
                    "
                    v-for="n in 5"
                  >
                    {{ this.store.seriesCharacters[n].name }}
                  </li>
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
  h2 {
    text-align: center;
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
      transition: transform 0.3s linear;
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
}
.rated {
  color: rgb(192, 192, 69);
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
