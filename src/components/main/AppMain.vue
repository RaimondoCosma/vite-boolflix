<script>
import { store } from "../../store";
import AppCardMovies from "./AppCardMovies.vue";
import AppCardSeries from "./AppCardSeries.vue";

export default {
  name: "AppMain",
  components: {
    AppCardMovies,
    AppCardSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <AppCardMovies />
  </section>
  <section>
    <AppCardSeries />
  </section>
</template>

<style lang="scss" scoped></style>
