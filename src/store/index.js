import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: [],
    user: [],
    order: [],
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
          console.log(res.data.data);
          context.commit('ORDER', res.data.data);
        });
    },
  },

  modules: {
  },
});
