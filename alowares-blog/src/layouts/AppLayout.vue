<template>
  <v-col>
    <v-container>
      <v-row>
        <v-col cols="auto">
          <img
            src="https://aloware.com/wp-content/uploads/2020/07/Aloware-Logo-Dark.png"
            alt="Aloware"
            width="200"
            class="img-fluid"
          />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-row align="center" justify="center">
            <v-icon large color="green darken-2"> mdi-phone </v-icon>
            (855) 256-2001
            <v-btn class="ml-5 ma-2 text-green green-border" outlined>
              Login
            </v-btn>
            <v-btn class="text-white" color="green"> Get Demo </v-btn>
            <v-icon large color="ma-5 black darken-2"> mdi-menu </v-icon>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <slot />
  </v-col>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "app-layout",
});
</script>

<style scoped>
.green-border {
  border: 1px solid rgb(9, 172, 9);
}
.text-white {
  color: white !important;
}
</style>
