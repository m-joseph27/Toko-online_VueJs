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
    loginUser: [],
    selectedItem: [],
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
    MSG(state, error) {
      state.message = error;
    },
    LOGIN(state, data) {
      state.loginUser = data;
    },
    selectedItem(state, { item, count }) {
      const items = state.selectedItem
        .find((cliked) => cliked.item.id_product === item.id_product);
      if (!items) {
        state.selectedItem.push({ item, count });
      }
    },
    INCREMENT(state, data) {
      const items = state.selectedItem
        .find((item) => item.item.id_product === data.item.id_product);
      if (items) {
        items.count += 1;
      }
    },
    DECREMENT(state, data) {
      const items = state.selectedItem
        .find((item) => item.item.id_product === data.item.id_product);
      if (items) {
        if (items.count <= 1) {
          state.selectedmenu = state.selectedmenu.filter((item) => item !== items);
        } else {
          items.count -= 1;
        }
      }
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
    isLogin(context, data) {
      return new Promise((resolve) => {
        axios
          .post(`${process.env.VUE_APP_URL}login`, data)
          .then((res) => {
            localStorage.setItem('id_user', res.data.result.id_user);
            localStorage.setItem('password', res.data.result.password);
            localStorage.setItem('status', res.data.result.status);
            resolve(res);
          })
          .catch((error) => {
            context.commit('MSG', error.response.data.err);
          });
      });
    },
  },

  modules: {
  },
});
