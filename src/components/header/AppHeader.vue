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
    <form action="">
      <input type="text" name="search" v-model="store.inputText" />
      <button type="submit" @click.prevent="$emit('search')">Cerca</button>
    </form>
  </div>
</template>

<style lang="sass" scoped></style>
