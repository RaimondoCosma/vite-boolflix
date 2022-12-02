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
      this.store.showDetails = !this.store.showDetails;
    },
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
              :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`"
              alt="movie.title"
            />
            <div
              class="card-details"
              :class="{ active: this.store.showDetails }"
            >
              <h2>{{ serie.name }}</h2>
              <h3>{{ serie.original_name }}</h3>
              <country-flag
                class="ms-flag"
                :country="changeLanguage(serie.original_language)"
                size="normal"
              />
              <div class="rating">
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
                  :class="{ rotate: this.store.showDetails }"
                  @click.prevent="showInfo()"
                ></i>
              </div>
              <div class="description">
                <h4>Descrizione:</h4>
                <p class="description-text">{{ serie.overview }}</p>
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
  &:hover .card-details {
    top: -90%;
  }
  .card-details {
    background-color: #090032b3;
    color: white;
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    height: 100%;
    border-radius: 0 0 100px 100px;
    transition: top 0.3s linear, border-radius 0.3s linear;
    &:hover {
      top: 0;
      border-radius: 0 0 0 0;
    }
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
}
.rating {
  display: flex;
}
.rated {
  color: rgb(192, 192, 69);
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
