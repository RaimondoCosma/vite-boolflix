<script>
export default {
  name: "AppError",
};
</script>

<template>
  <div class="error">
    <div class="warning">
      <h1>Oooops! Qualcosa è andato storto</h1>
      <p>
        Controlla lo stato della connessione e cerca di effettuare una giusta
        ricerca...
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3.75rem;
  left: 0;
  right: 0;
  bottom: 0;
  .warning {
    text-align: center;
    background-image: linear-gradient(
      to right top,
      #030b16,
      #212041,
      #5b265f,
      #9f1c63,
      #da1d4b
    );
    padding: 1.875rem;
    border-radius: 1.25rem;
    -webkit-box-shadow: 5px 5px 10px 0px #000000;
    -moz-box-shadow: 5px 5px 10px 0px #000000;
    -o-box-shadow: 5px 5px 10px 0px #000000;
    box-shadow: 5px 5px 10px 0px #000000;
    h1 {
      color: red;
      margin-bottom: 1.25rem;
    }
    p {
      font-size: 1.25rem;
      color: white;
    }
  }
}
</style>
