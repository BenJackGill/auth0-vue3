<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/faunaapi">API</router-link> |
    <button @click.prevent="auth_login">LOGIN</button> |
    <button @click.prevent="auth_logout">LOGOUT</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Auth0Client } from "@auth0/auth0-spa-js";
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const auth = inject<Auth0Client>("Auth")!;
    const auth_login = () => {
      auth.loginWithRedirect();
    };
    const auth_logout = () => {
      auth.logout({
        returnTo: window.location.origin,
      });
    };
    return {
      auth_logout,
      auth_login,
      ...auth,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
