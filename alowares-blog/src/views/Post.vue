<template>
  <h1>
    6 software tools for insurance agents that will help your business thrive
    this 2022
  </h1>
  <v-row class="ma-1 mb-3">
    <span class="material-icons text-grey"> event </span>April 15, 2022
    <span class="material-icons ml-5 text-grey"> account_circle </span>Aloware
    Editors
    <strong class="ml-5 text-green">#Sales and Marketing</strong>
    <strong class="ml-5 text-green">#tools for insurance agents</strong>
  </v-row>
  <v-row class="mt-4">
    <v-col cols="12" md="8">
      <h3>
        <strong
          >As an insurance agent, you help customers understand their coverage
          options,</strong
        >
      </h3>
      <br />
      find policies that fit their needs, navigate the claims process, and so
      much more. Even with the rise of online insurance, knowledgeable and
      experienced agents are still in high demand. The U.S. Bureau of Labor
      Statistics (BLS) projects that insurance
      <strong class="text-green">
        agent employment will grow 7% between 2020 and 2030</strong
      >. The right tools are vital for staying competitive. In an increasingly
      more digital world, insurance customers expect a lot. You need to be able
      to deliver while balancing all of the tasks necessary for running and
      growing your business. Below, you’ll learn about some of the top must-have
      tech tools for insurance agents that can help you succeed. Must-have
      technology tools for insurance agents in 2022 Below are the top tech tools
      for insurance agents. These can help you operate more efficiently and grow
      your business.
      <br />
      <h2 class="mt-3 mb-3">1. Document management software</h2>
      Formstack allows you to automate and streamline the management of
      essential insurance documents with digital workflows. The software helps
      you create detailed intake forms and digital agreements with ease. With a
      document management software like Formstack, you can generate custom
      quotes, proposals, and renewals. Aside from these, you can also accept
      digital signatures, automate the claims process, and collect customer
      information online. With automated workflows, you can meet customer needs,
      ensure their satisfaction and improve retention...

      <CommentArea class="mt-5 mb-5" />
    </v-col>
    <v-col cols="12" md="4">
      <img
        src="https://aloware.com/wp-content/uploads/2022/04/Software-Tools-for-Insurance-Agents-This-2022.png"
        alt="Blog Image"
        class="blog-image"
      />
      <v-text-field outlined label="Enter your work mail*"></v-text-field>
      <v-row class="justify-end">
        <v-col cols="auto">
          <v-btn color="green" class="text-white"> Subscribe </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { useBlogStore } from "@/store/blog";
import CommentArea from "@/components/CommentArea";
export default defineComponent({
  name: "post-page",
  components: {
    CommentArea,
  },
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

<style scoped>
.blog-image {
  width: 100%;
}
.text-white {
  color: white !important;
}
</style>
