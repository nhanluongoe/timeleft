import { createApp } from "vue";
import router from "./routes";
import "./style.css";
import App from "./app.vue";

createApp(App).use(router).mount("#app");
