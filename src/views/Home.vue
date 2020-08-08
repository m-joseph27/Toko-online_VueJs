<template>
  <div class="home">
    <div class="List">
      <h1>Our  product</h1>
    </div>
  <navbar @login-clicked="showLogin"
          @register-clicked="showRegister"/>
  <carousel/>
  <product/>
  <login @close-login="closeLogin"/>
  <register @close-register="closeRegister"/>
  </div>
</template>

<script>

import Navbar from '../components/user/Navbar.vue';
import Carousel from '../components/user/Carousel.vue';
import Product from '../components/user/Product.vue';
import Login from '../components/user/Login.vue';
import Register from '../components/user/Register.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Product,
    Login,
    Register,
  },
  methods: {
    showLogin() {
      document.querySelector('.loginWrapper').classList.add('loginActive');
    },
    closeLogin() {
      document.querySelector('.loginWrapper').classList.remove('loginActive');
    },
    showRegister() {
      document.querySelector('.registerWrapper').classList.add('registerActive');
    },
    closeRegister() {
      document.querySelector('.registerWrapper').classList.remove('registerActive');
    },
  },
};
</script>

<style lang="scss" scoped>
.List{
  position: absolute;
  width: 100%;
  top: 710px;
  margin-bottom: 100px;
  background-color: #af2d1a;
  color: white;
  // box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.20);
}

</style>
