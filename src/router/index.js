import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/AdminPage.vue';
import Detail from '../components/user/Detail.vue';
import User from '../views/User.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      title: 'Toko Online',
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      title: 'Admin Page',
    },
  },
  {
    path: '/detail-product/:id_product',
    name: 'Detail',
    component: Detail,
    meta: {
      requiresAuth: true,
      title: 'Detail Product',
    },
  },
  {
    path: '/user-detail',
    name: 'User',
    component: User,
    meta: {
      requiresAuth: true,
      title: 'Detail User | Toko Online',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: true,
      title: 'Login | Toko Online',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: true,
      title: 'Register | Toko Online',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
