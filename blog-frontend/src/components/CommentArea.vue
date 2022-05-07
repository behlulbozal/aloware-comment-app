<template>
  <v-col cols="12">
    <v-row class="shrink">
      <v-text-field
        @keyup="methods.commentKeyPressed($event.target.value)"
        label="Add a comment"
        v-model="state.inputs.comment"
        class="green"
        required
      ></v-text-field>
    </v-row>
    <v-row>
      <v-expand-transition>
        <v-text-field
          v-show="state.expand"
          v-model="state.inputs.name"
          label="Name"
          required
        ></v-text-field>
      </v-expand-transition>
    </v-row>
    <v-row>
      <v-expand-transition>
        <v-row v-show="state.expand" class="justify-end">
          <v-col cols="auto">
            <v-btn @click="methods.addComment" color="green" class="text-white">
              Send
            </v-btn>
          </v-col>
        </v-row>
      </v-expand-transition>
    </v-row>
    <div v-if="commentsCount > 0">
      <Comment
        v-for="(comment, index) in comments"
        :key="index"
        :name="comment.name"
        :comment="comment.comment"
      />
    </div>
    <v-row v-else>
      <h2 class="text-grey">No comment yet !</h2>
    </v-row>
  </v-col>

  <v-snackbar v-model="state.snackbar">
    {{ state.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from "vue";
import Comment from "@/components/Comment";
import { useBlogStore } from "@/store/blog";
export default defineComponent({
  name: "comment-area",
  components: {
    Comment,
  },
  setup() {
    const state = reactive({
      inputs: {
        name: "",
        comment: "",
      },
      expand: false,
      snackbar: false,
      text: "This is alert",
    });
    const blogStore = useBlogStore();
    onMounted(() => {
      blogStore.loadAciton();
    });
    const comments = computed(() => blogStore.commentsGetter);
    const commentsCount = computed(() => blogStore.commentsCountGetter);
    const methods = {
      addComment() {
        if (state.inputs.name != "" && state.inputs.comment != "") {
          blogStore
            .addComment(state.inputs.name, state.inputs.comment)
            .then(() => {
              blogStore.loadAciton();
              state.text = "Comment added";
              state.snackbar = true;
              state.inputs.comment = "";
              state.inputs.name = "";
            });
        } else {
          state.text = "Please fill all the fields";
          state.snackbar = true;
        }
      },
      commentKeyPressed(e) {
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
      comments,
      commentsCount,
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
