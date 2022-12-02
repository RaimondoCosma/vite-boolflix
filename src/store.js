import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  errorOccurred: true,
  movies: [],
  series: [],
  characters: [],
  seriesCharacters: [],
  showDetails: false,
  showDetailsSeries: false,
  cardIndex: 0,
});
