import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  userName: "",
  errorOccurred: true,
  movies: [],
  series: [],
  characters: [],
  seriesCharacters: [],
  showHome: false,
  showDetails: false,
  showDetailsSeries: false,
  previewVisible: false,
  cardIndex: 0,
  serieIndex: 0,
});
