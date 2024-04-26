import { createApp } from "vue";
import router from "./routes";
import "./style.css";
import App from "./app.vue";
import PrimeVue from "primevue/config";

const app = createApp(App).use(router).use(PrimeVue, {
  unstyled: true,
});

app.config.globalProperties.$filters = {
  formatNumber(value: number) {
    return new Intl.NumberFormat().format(value);
  },
};

app.mount("#app");
