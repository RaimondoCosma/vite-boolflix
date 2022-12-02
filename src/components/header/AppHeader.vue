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
  <div class="nav">
    <div>
      <div class="logo">
        <a href="#"><img src="../../assets/img/netflix.png" alt="logo" /></a>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Film</a></li>
        <li><a href="#">Serie TV</a></li>
      </ul>
    </div>
    <form @submit.prevent="$emit('search')">
      <input type="text" name="search" v-model="store.inputText" required />
      <button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
}
.logo {
  max-width: 12.5rem;
  display: block;
  margin-right: 1.25rem;
}
ul {
  display: flex;
  color: white;
  & li {
    margin-right: 0.9375rem;
    font-size: 1.25rem;
  }
}
form input {
  font-size: 1.25rem;
  padding: 0.4375rem;
}
button i {
  font-size: 1.25rem;
  padding: 0.625rem;
}
</style>
