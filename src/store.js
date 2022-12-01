import { reactive } from "vue";

export const store = reactive({
  inputText: "",
  errorOccurred: false,
  movies: [],
  series: [],
});
