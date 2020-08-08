<template>
  <div class="admin">
    <Nav/>
    <info @user-clicked="showListUser"/>
    <list-user/>
    <list-order/>
    <add/>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/admin/Nav.vue';
import Footer from '../components/Footer.vue';
import Info from '../components/admin/Info.vue';
import ListUser from '../components/admin/ListUser.vue';
import ListOrder from '../components/admin/ListOrder.vue';
import Add from '../components/admin/add.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    Footer,
    Info,
    ListUser,
    ListOrder,
    Add,
  },
  methods: {
    showListUser() {
      document.querySelector('.listUserWrapper').classList.toggle('listUserActive');
    },
  },
};
</script>

<style lang="scss" scoped>
// .List{
//   position: absolute;
//   width: 100%;
//   top: 710px;
//   margin-bottom: 100px;
//   background-color: #af2d1a;
//   color: rgb(148, 50, 50);
//   box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.20);
// }

</style>
