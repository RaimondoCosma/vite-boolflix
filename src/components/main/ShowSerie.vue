<script>
import { store } from "../../store";

export default {
  name: "ShowSerie",
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
      this.store.previewVisibleSerie = false;
    },
  },
};
</script>
<template>
  <section
    class="serie-details"
    :class="{ 'active-serie': this.store.previewVisibleSerie }"
  >
    <!-- Croce per chiudere i dettagli -->
    <div class="cross" @click="closePreview">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <!-- /Croce per chiudere i dettagli -->
    <!-- Immagine di copertina con tasto play -->
    <div class="preview">
      <img
        :src="`https://image.tmdb.org/t/p/w342${
          this.store.series[this.store.serieIndex].poster_path
        }`"
        alt="#"
      />
      <a
        :href="`https://www.youtube.com/watch?v=${this.store.serieTrailers}`"
        target="_blank"
        ><i class="fa-regular fa-circle-play"></i
      ></a>
    </div>
    <!-- /Immagine di copertina con tasto play -->
    <!-- Dettagli sulla destra dell'immagine -->
    <div class="all-detail">
      <h1>{{ this.store.series[this.store.serieIndex].name }}</h1>
      <h2>Descrizione:</h2>
      <p class="description-text">
        {{ this.store.series[this.store.serieIndex].overview }}
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
      <ul class="actor" v-if="this.store.seriesCharacters.length > 0">
        <li v-for="character in this.store.seriesCharacters">
          {{ character.name }} -
        </li>
      </ul>
      <!-- Serie simili  -->
      <h4 class="similar">Ti potrebbe interessare:</h4>
      <ul class="suggested-serie">
        <li v-for="movie in this.store.similarSeries">
          <a href="#"
            ><img
              :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
              alt=""
          /></a>
        </li>
      </ul>
      <!-- /Serie simili  -->
    </div>
    <!-- /Dettagli sulla destra dell'immagine -->
  </section>
</template>

<style lang="scss" scoped>
.serie-details {
  display: flex;
  position: fixed;
  color: white;
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
        color: red;
        font-size: 3.125rem;
      }
    }
  }
  .all-detail {
    flex-grow: 1;
    color: white;
    padding: 1.25rem 4.375rem;
    overflow-y: auto;
    h1 {
      width: 100%;
      font-size: 3.75rem;
    }
    .description-text,
    .rating {
      margin-bottom: 0.9375rem;
    }
    .actor {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .similar {
    margin: 1.25rem 0;
  }
  .suggested-serie {
    overflow-x: auto;
    display: flex;
    width: 100%;
    li {
      width: calc(100% / 5);
      height: 19.6875rem;
      border: 0.0625rem solid #1b1b1b;
      flex-shrink: 0;
    }
  }
}
.cross {
  position: absolute;
  font-size: 2.5rem;
  cursor: pointer;
  right: 1.25rem;
  top: 1.25rem;
}
.yellow {
  color: rgb(207, 207, 45);
}
.active-serie {
  bottom: 0 !important;
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
