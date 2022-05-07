<template>
  <v-app>
    <v-main>
      <AppLayout>
        <router-view />
      </AppLayout>
    </v-main>
  </v-app>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-page",
  components: {
    AppLayout,
  },
});
</script>
