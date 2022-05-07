import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:6162/";
const apiUrl = baseUrl + "api";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    comments: [],
  }),
  getters: {
    commentsGetter: (state) => state.comments,
    commentsCountGetter: (state) => state.comments.length,
  },
  actions: {
    loadAciton() {
      axios.get(apiUrl + "/comments").then((response) => {
        this.comments = response.data;
      });
    },
    addComment(name, comment) {
      return new Promise((resolve, reject) => {
        try {
          axios
            .post(apiUrl + "/comments/add", {
              name: name,
              comment: comment,
            })
            .then(function (response) {
              resolve();
            })
            .catch(function (error) {
              reject();
            });
        } catch (err) {
          reject(err.message);
        }
      });
    },
  },
});
