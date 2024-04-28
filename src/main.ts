import { createApp } from "vue";
import router from "./routes";
import "./style.css";
import App from "./app.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { LaGithubAlt } from "oh-vue-icons/icons";

addIcons(LaGithubAlt)

const app = createApp(App).use(router).component("v-icon", OhVueIcon);

app.config.globalProperties.$filters = {
  formatNumber(value: number) {
    return new Intl.NumberFormat().format(value);
  },
};

app.mount("#app");
