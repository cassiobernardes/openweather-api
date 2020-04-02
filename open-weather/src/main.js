import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("round", value => {
  return (Math.round(value * 100) / 100).toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
