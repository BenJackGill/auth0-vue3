<template>
  <div class="about">
    <h1>This is a profile page, only logged in users can see it.</h1>
  </div>
  <div class="row">
    {{ JSON.stringify(user, null, 2) }}
  </div>
</template>

<script lang="ts">
import type { ProvidedAuthPlugin } from "@/auth";
import { inject, defineComponent } from "vue";

export default defineComponent({
  name: "Profile",
  setup() {
    const auth = inject("Auth") as ProvidedAuthPlugin;
    return {
      ...auth,
    };
  },
});
</script>
