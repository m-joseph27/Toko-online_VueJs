import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: [],
  },
  mutations: {
    PRODUCT(state, data) {
      state.product = data;
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
  },
  modules: {
  },
});
