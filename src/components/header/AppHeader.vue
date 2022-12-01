<script>
import { store } from "../../store";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="$emit('search')">
      <input type="text" name="search" v-model="store.inputText" />
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<style lang="sass" scoped></style>
