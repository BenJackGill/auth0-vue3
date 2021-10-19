import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Auth0 } from "@/auth";

async function init() {
  const AuthPlugin = await Auth0.init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    },
    clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    audience: process.env.VUE_APP_AUTH0_AUDIENCE,
    redirectUri: window.location.origin,
  });
  const app = createApp(App);
  app.use(AuthPlugin).use(router).use(store).mount("#app");
}

init();
