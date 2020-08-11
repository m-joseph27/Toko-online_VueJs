<template>
  <div class="home">
    <div class="List">
      <h1>Our  product</h1>
    </div>
  <navbar @modal-clicked="showModal"
          @admin-clicked="showLoginAdmin"
          @cart-clicked="showCart"/>
  <carousel/>
  <product/>
  <ModalUser/>
  <login-admin @close-admin="closeLoginAdmin"/>
  <cart/>
  </div>
</template>

<script>

import Navbar from '../components/user/Navbar.vue';
import Carousel from '../components/user/Carousel.vue';
import Product from '../components/user/Product.vue';
import ModalUser from '../components/user/ModalUser.vue';
import LoginAdmin from '../components/admin/Login.vue';
import Cart from '../components/user/Cart.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Product,
    ModalUser,
    LoginAdmin,
    Cart,
  },
  methods: {
    showCart() {
      document.querySelector('.cartWrapper').classList.toggle('cartWrapperActive');
    },
    showModal() {
      document.querySelector('.modalWrapper').classList.toggle('modalWrapperActive');
    },
    showLoginAdmin() {
      document.querySelector('.loginAdminWrapper').classList.add('loginAdminActive');
    },
    closeLoginAdmin() {
      document.querySelector('.loginAdminWrapper').classList.remove('loginAdminActive');
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
}

</style>
