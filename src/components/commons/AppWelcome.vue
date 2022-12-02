<script>
export default {
  name: "AppWelcome",
};
</script>

<template>
  <div class="welcome">
    <div class="boolflix">
      <div class="b-1"></div>
      <div class="b-2"></div>
      <div class="b-3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  height: 100%;
  background-color: black;
  z-index: 1000;
  // opacity: 0;
  .boolflix {
    position: absolute;
    width: 15.125rem;
    height: 25rem;
    overflow: hidden;
    background-color: green;
  }
}
</style>
