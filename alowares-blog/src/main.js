import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import 'material-design-icons-iconfont/dist/material-design-icons.css'


loadFonts();

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");
