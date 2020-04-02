<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca" placeholder="Digite uma cidade..." />
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarCidade" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarCidade() {
      const key = "b27197c0e6c9be935202d3385763bae0";
      if (
        this.$router.currentRoute.fullPath !==
        `/weather?q=${this.busca}&appid=${key}`
      ) {
        this.$router.push({
          path: "weather",
          query: { q: this.busca, appid: key }
        });
        this.busca = null;
      }
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  padding: 0 10px;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
