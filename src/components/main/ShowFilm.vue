<script>
import { store } from "../../store";
export default {
  name: "ShowFilm",
  data() {
    return {
      store,
    };
  },
  methods: {
    ratingTransform(num) {
      return Math.ceil((Number(num) * 5) / 10);
    },
    closePreview() {
      this.store.previewVisible = false;
    },
    getActors() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.store.movies[this.cardIndex].id
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
  },
};
</script>

<template>
  <section class="film-details" :class="{ active: this.store.previewVisible }">
    <div class="preview">
      <img
        :src="`https://image.tmdb.org/t/p/w342${
          this.store.movies[this.store.cardIndex].poster_path
        }`"
        alt="#"
      />
      <a href="https://www.youtube.com/watch?v=bUcG7vd_7aQ"
        ><i class="fa-regular fa-circle-play"></i
      ></a>
    </div>
    <div class="all-detail">
      <h1>{{ this.store.movies[this.store.cardIndex].title }}</h1>
      <h2>Descrizione:</h2>
      <p class="description-text">
        {{ this.store.movies[this.store.cardIndex].overview }}
      </p>
      <div class="rating">
        <h2>Voto:</h2>
        <i
          class="fa-solid fa-star rated yellow"
          v-for="n in ratingTransform(
            this.store.movies[this.store.cardIndex].vote_average
          )"
        ></i>
        <i
          class="fa-solid fa-star"
          v-for="n in 5 -
          ratingTransform(this.store.movies[this.store.cardIndex].vote_average)"
        ></i>
      </div>
      <h4>Cast:</h4>
      <ul class="actor" v-if="this.store.characters.length > 0">
        <li v-for="character in this.store.characters">
          {{ character.name }} -
        </li>
      </ul>
      <div class="cross" @click="closePreview">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.film-details {
  display: flex;
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  height: calc(100% - 3.75rem);
  background-color: #1b1b1b;
  z-index: 300;
  transition: bottom 0.5s ease-out;
  .preview {
    position: relative;
    width: 30%;
    height: 50rem;
    flex-shrink: 0;
    img {
      height: 100%;
      object-fit: cover;
    }
    a {
      position: absolute;
      left: 50%;
      bottom: 1.875rem;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.634);
      padding: 1.25rem;
      cursor: pointer;
      border-radius: 50%;
      animation: pulse 2s infinite;
      i {
        color: white;
        font-size: 3.125rem;
      }
    }
  }
  .all-detail {
    flex-grow: 1;
    color: white;
    padding: 1.25rem 4.375rem;
    h1 {
      width: 100%;
      font-size: 3.75rem;
    }
    .description-text,
    .rating {
      margin-bottom: 0.9375rem;
    }
  }
  .cross {
    position: absolute;
    font-size: 2.5rem;
    cursor: pointer;
    right: 1.25rem;
    top: 1.25rem;
  }
}
.yellow {
  color: rgb(207, 207, 45);
}
.active {
  bottom: 0 !important;
}
.actor {
  display: flex;
  flex-wrap: wrap;
}

@keyframes pulse {
  0% {
    transform: scale(0.9) translateX(-50%);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    transform: scale(1) translateX(-50%);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }

  100% {
    transform: scale(0.9) translateX(-50%);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>
