<template>
  <v-row class="mt-5 mb-5">
    <v-card class="card-bg pa-3" theme="dark" width="100%">
      <v-card-title>
        <v-avatar
          color="grey-darken-3"
          image="https://www.w3schools.com/w3images/avatar6.png"
        ></v-avatar>
        <span class="text-h6 font-weight text-white ml-3">{{ name }}</span>
      </v-card-title>

      <v-card-text class="text-p text-black">
        {{ comment }}
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "comment-component",
  props: ["name", "comment"],
  setup() {
    const state = reactive({
      expand: false,
    });
    const methods = {
      commentKeyPressed(e) {
        console.log(e);
        if (e != "") {
          state.expand = true;
        } else {
          state.expand = false;
        }
      },
    };
    return {
      state,
      methods,
    };
  },
});
</script>

<style scoped>
.avatar-image {
  object-fit: cover;
  width: 100%;
}
.card-bg {
  background-color: rgba(100, 128, 106, 0.332);
}
</style>
