import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  errorOccurred: true,
  movies: [],
  series: [],
  actors: [],
  showDetails: false,
  showDetailsSeries: false,
  cardIndex: 0,
});
