<template>
  <div>
    <h1>Initial commit by {{ blogName }}</h1>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { useBlogStore } from "@/store//blog";
export default defineComponent({
  name: "post-page",

  setup() {
    const state = reactive({});

    const blogStore = useBlogStore();
    const blogName = computed(() => blogStore.blogNameGetter);
    return {
      state,
      blogName,
    };
  },
});
</script>

<style scoped></style>
