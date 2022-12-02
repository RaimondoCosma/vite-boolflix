import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  errorOccurred: false,
  movies: [],
  series: [],
  actors: [],
  showDetails: false,
  showDetailsSeries: false,
  cardIndex: 0,
});
