import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import type { Router } from "vue-router";

import App from "./App.vue";
import router from "./router";
import Axios from "axios";

Axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

const app = createApp(App);
const pinia = createPinia();

declare const RawSymbol: unique symbol;
declare module "pinia" {
  export interface PiniaCustomProperties {
    // by using a setter we can allow both strings and refs
    router: Router & { [RawSymbol]?: true | undefined };
  }
}
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
