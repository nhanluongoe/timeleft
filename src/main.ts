import { createApp } from "vue";
import router from "./routes";
import "./style.css";
import App from "./app.vue";
import PrimeVue from "primevue/config";

createApp(App)
  .use(router)
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount("#app");
