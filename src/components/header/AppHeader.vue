<script>
import { store } from "../../store";

export default {
  name: "AppHeader",
  props: {
    method: {
      type: Function,
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <div class="logo">
        <a href="#"><img src="../../assets/img/netflix.png" alt="logo" /></a>
      </div>
      <ul>
        <li @click="method()">
          <a href="#">Home</a>
        </li>
        <li><a href="#">Film</a></li>
        <li><a href="#">Serie TV</a></li>
      </ul>
    </div>
    <form class="nav-middle" @submit.prevent="$emit('search')">
      <input type="text" name="search" v-model="store.inputText" required />
      <button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
    <div class="user-logged nav-right">
      <h3>{{ store.userName }}</h3>
      <a class="user-image" href="#">
        <img src="../../assets/img/person.png" alt="#" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
  .nav-left,
  .nav-right {
    width: 30%;
  }
  .nav-middle {
    flex-grow: 1;
  }
  .nav-right {
    display: flex;
    justify-content: flex-end;
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
  width: 90%;
}
button {
  width: 10%;
  i {
    font-size: 1.25rem;
    padding: 0.625rem;
  }
}
.user-logged {
  color: white;
  display: flex;
  align-items: center;
  h3 {
    margin-right: 0.625rem;
  }
}
.user-image {
  width: 3.125rem;
  height: 3.125rem;
  overflow: hidden;
  border-radius: 50%;
}
</style>
