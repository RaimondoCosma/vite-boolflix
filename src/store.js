import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  isSearch: false,
  userName: "",
  errorOccurred: true,

  // Variabili utili per i film
  cardIndex: 0,
  movies: [],
  similarMovies: [],
  characters: [],
  movieTrailers: [],
  showDetails: false,
  previewVisible: false,

  // Variabili utili per le serie tv
  serieIndex: 0,
  series: [],
  similarSeries: [],
  seriesCharacters: [],
  serieTrailers: [],
  showDetailsSeries: false,
  previewVisibleSerie: false,

  // Varibili in comune
  showHome: false,
});
