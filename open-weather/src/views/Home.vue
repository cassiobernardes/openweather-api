<template>
  <section>
    <div>
      <router-link :to="{ name: 'Home' }">
        <h1>
          <img src="../assets/sol.svg" />
          Buscar Clima
          <img src="../assets/sol.svg" />
        </h1>
      </router-link>
    </div>
    <CidadeBuscar />
    <ClimaExibir />
  </section>
</template>

<script>
// @ is an alias to /src
import CidadeBuscar from "@/components/CidadeBuscar.vue";
import ClimaExibir from "@/components/ClimaExibir.vue";

export default {
  name: "Home",
  components: { CidadeBuscar, ClimaExibir },
  created() {
    document.title = "Buscar Clima";
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
img {
  width: 2.7%;
}
</style>
