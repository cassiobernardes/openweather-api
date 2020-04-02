<template>
  <section class="produtos-container">
    <div class="produto" v-if="clima">
      <div>
        <h1 class="titulo">{{ clima.name }}, {{ clima.sys.country }}</h1>
        <div v-for="(x, index) in clima.weather" :key="index">
          <p class="temperatura">{{ x.main }}</p>
        </div>
        <h1 class="temperatura">{{ (clima.main.temp - 273.15) | round }}º</h1>
      </div>
    </div>
    <PaginaCarregando v-else-if="clima === null && this.$router.currentRoute.fullPath !== '/'" />
  </section>
</template>

<script>
import { api } from "@/services.js";
import PaginaCarregando from "@/components/PaginaCarregando.vue";

export default {
  data() {
    return {
      clima: null
    };
  },
  components: {
    PaginaCarregando
  },
  computed: {
    url() {
      return this.$route.query;
    }
  },
  methods: {
    getClima() {
      api.get("/weather", this.url.q, this.url.appid).then(response => {
        this.clima = response.data;
      });
    }
  },
  watch: {
    url() {
      this.clima = null;
      if (this.url.q !== undefined && this.url.appid !== undefined)
        this.getClima();
    }
  }
};
</script>

<style scoped>
.produtos-container {
  max-width: 250px;
  margin: 0 auto;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.titulo {
  margin-bottom: 10px;
}

.temperatura {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
