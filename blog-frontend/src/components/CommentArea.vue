<template>
  <v-col cols="12">
    <v-row class="shrink">
      <v-text-field
        @keyup="methods.commentKeyPressed($event.target.value)"
        label="Add a comment"
        class="green"
        required
      ></v-text-field>
    </v-row>
    <v-row>
      <v-expand-transition>
        <v-text-field
          v-show="state.expand"
          label="Name"
          required
        ></v-text-field>
      </v-expand-transition>
    </v-row>
    <v-row>
      <v-expand-transition>
        <v-row v-show="state.expand" class="justify-end">
          <v-col cols="auto">
            <v-btn color="green" class="text-white"> Send </v-btn>
          </v-col>
        </v-row>
      </v-expand-transition>
    </v-row>
    <Comment />
    <v-row>
      <h2 class="text-grey">No comment yet !</h2>
    </v-row>
  </v-col>
</template>

<script>
import { defineComponent, reactive } from "vue";
import Comment from "@/components/Comment";
export default defineComponent({
  name: "comment-area",
  components: {
    Comment,
  },
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

<style>
.green-border {
  border: 1px solid rgba(0, 255, 0, 0.479);
}
.text-white {
  color: white !important;
}

.v-text-field .v-field {
  background-color: rgba(2, 252, 86, 0.097) !important;
  border-radius: 10px;
}

.v-text-field .v-field:before {
  border-style: none;
}
.v-field__outline {
  display: none;
}
</style>
