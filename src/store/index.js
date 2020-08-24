import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import { resolve } from 'core-js/fn/promise';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: [],
    user: [],
    order: [],
    message: '',
    loginUser: [],
    selectedItem: [],
    userId: localStorage.getItem('id') || null,
  },
  mutations: {
    setUser(state) {
      state.userId = localStorage.getItem('id');
    },
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
          state.selectedItem = state.selectedItem.filter((item) => item !== items);
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
    GETPRODUCTID(context, id) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}product/${id}`)
          .then((res) => {
            resolve(res);
          });
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
            localStorage.setItem('id', res.data.result.id_user);
            localStorage.setItem('status', res.data.result.status);
            localStorage.setItem('nama', res.data.result.nm_user);
            localStorage.setItem('photo', res.data.result.photo);
            localStorage.setItem('email', res.data.result.email);
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

  getters: {
    logged: (state) => (!!state.userId),
    countCart: (state) => state.selectedItem.length,
  },
});
