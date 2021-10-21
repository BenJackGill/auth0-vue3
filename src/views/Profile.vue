<template>
  <div class="about">
    <h1>This is a profile page, only logged in users can see it.</h1>
  </div>
  <div class="row">
    {{ JSON.stringify(user, null, 2) }}
  </div>
</template>

<script lang="ts">
import { Auth0Client } from "@auth0/auth0-spa-js";
import { inject } from "vue";

export default {
  name: "Profile",
  setup() {
    const auth = inject<Auth0Client>("Auth")!;
    return {
      ...auth,
    };
  },
};
</script>
