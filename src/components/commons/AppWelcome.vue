<script>
export default {
  name: "AppWelcome",
  data() {
    return {
      isWelcome: true,
    };
  },
  methods: {
    removeWelcome() {
      setTimeout(() => {
        this.isWelcome = false;
      }, 3500);
    },
  },
  created() {
    this.removeWelcome();
  },
};
</script>

<template>
  <div class="welcome" :class="{ 'show-welcome': this.isWelcome === true }">
    <div class="boolflix">
      <div class="b-1"></div>
      <div class="b-2">
        <div class="b-2a"></div>
        <div class="b-2b"></div>
      </div>
      <div class="b-3">
        <div class="b-3a"></div>
        <div class="b-3b"></div>
      </div>
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
    animation: zoom-boolflix 3.5s ease-in-out;
    .b-1 {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4.375rem;
      background-color: #b10510;
    }
    .b-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      .b-2a {
        position: absolute;
        top: 9px;
        left: -7px;
        right: -24px;
        height: 70px;
        transform: rotateZ(25deg);
        background-color: #e50815;
      }
      .b-2b {
        position: absolute;
        bottom: 18px;
        left: 0;
        right: -31px;
        height: 70px;
        transform: rotateZ(-25deg);
        background-color: #b10510;
      }
    }
    .b-3 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      .b-3a {
        position: absolute;
        top: 9px;
        left: -30px;
        right: -24px;
        height: 70px;
        transform: rotateZ(25deg);
        background-color: #e50815;
      }
      .b-3b {
        position: absolute;
        bottom: 18px;
        left: 0;
        right: -31px;
        height: 70px;
        transform: rotateZ(-25deg);
        background-color: #b10510;
      }
    }
  }
  @keyframes zoom-boolflix {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1.8);
    }
  }
}
.show-welcome {
  top: 0;
}
</style>
