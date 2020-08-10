import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: [],
    user: [],
    order: [],
    message: '',
  },
  mutations: {
    PRODUCT(state, data) {
      state.product = data;
    },
    USER(state, data) {
      state.user = data;
    },
    ORDER(state, data) {
      state.order = data;
    },
    MSG(state, data) {
      state.message = data;
    },
  },
  actions: {
    GETPRODUCT(context) {
      axios
        .get(`${process.env.VUE_APP_URL}product`)
        .then((res) => {
          context.commit('PRODUCT', res.data.data);
        });
    },
    GETUSER(context) {
      axios
        .get(`${process.env.VUE_APP_URL}user`)
        .then((res) => {
          context.commit('USER', res.data.data);
        });
    },
    GETORDER(context) {
      axios
        .get(`${process.env.VUE_APP_URL}order`)
        .then((res) => {
          context.commit('ORDER', res.data.data);
        });
    },
    ADDPRODUCT(context, data) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}product/insert`, data)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            console.log(error);
            context.commit('MSG', error.response.data.err);
          });
      });
    },
  },

  modules: {
  },
});
