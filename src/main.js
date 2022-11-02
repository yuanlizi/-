import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

//可改写成这种样式
const app = createApp(App);
app.use(router);
app.mount("#app");
