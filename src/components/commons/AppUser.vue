<script>
import { store } from "../../store";

export default {
  name: "AppUser",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="user" :class="{ 'show-home': store.showHome === true }">
    <div class="card-user">
      <div class="img">
        <img src="../../assets/img/person.png" alt="user" />
      </div>
      <div class="name">
        <h3>Accedi:</h3>
        <form>
          <input
            type="text"
            placeholder="Nome Utente"
            v-model="store.userName"
            required
          />
          <button type="submit" @click.prevent="store.showHome = true">
            Login
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/64d886ab-fff2-4014-9057-0eed1ac64c63/IT-it-20221128-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  z-index: 500;
  transition: left 0.5s ease-out;
}
.card-user {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  height: 37vw;
  width: 27vw;
  padding: 20px 0 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .img {
    height: 50%;
    width: 66%;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    width: 70%;
    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.75rem;
    }
    input {
      border: none;
      border-radius: 0.25rem;
      color: #fff;
      height: 3.125rem;
      width: 100%;
      padding: 1rem 1.25rem;
      background: #333;
      margin-bottom: 1.75rem;
    }
    button {
      border: none;
      border-radius: 0.25rem;
      color: #fff;
      height: 3.125rem;
      width: 100%;
      padding: 1rem 1.25rem;
      background: #e50914;
    }
  }
}
.show-home {
  left: -100%;
}
</style>
