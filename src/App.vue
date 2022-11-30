<script>
import AppHeader from "./components/header/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  methods: {
    moviesSearch() {
      console.log("prova");
    },
  },
};
</script>

<template>
  <header>
    <AppHeader @search="moviesSearch" />
  </header>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
