import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/main.css";
import i18n from "./i18n/index.js";

const app = createApp(App);

// Charts are loaded lazily inside components

app.use(createPinia());
app.use(ElementPlus);
app.use(i18n);

app.mount("#app");
