<template>
  <div class="admin">
    <Nav/>
    <info v-on:add="modalAdd"
          v-on:list="modalListUser"
          v-on:order="modalListOrder"/>
    <list-order/>
    <list-user/>
    <add @add-clicked="closeAdd"/>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/admin/Nav.vue';
import Footer from '../components/Footer.vue';
import Info from '../components/admin/Info.vue';
import ListOrder from '../components/admin/ListOrder.vue';
import ListUser from '../components/admin/ListUser.vue';
import Add from '../components/admin/add.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    Footer,
    Info,
    ListOrder,
    ListUser,
    Add,
  },
  methods: {
    modalAdd() {
      document.querySelector('.addWrapper').classList.add('addWrapperActive');
      document.querySelector('.listUserWrapper').classList.remove('listUserActive');
      document.querySelector('.listOrderWrapper').classList.remove('listOrderActive');
    },
    closeAdd() {
      document.querySelector('.addWrapper').classList.remove('addWrapperActive');
    },
    modalListUser() {
      document.querySelector('.listUserWrapper').classList.toggle('listUserActive');
      document.querySelector('.listOrderWrapper').classList.remove('listOrderActive');
      document.querySelector('.addWrapper').classList.remove('addWrapperActive');
    },
    modalListOrder() {
      document.querySelector('.listOrderWrapper').classList.toggle('listOrderActive');
      document.querySelector('.listUserWrapper').classList.remove('listUserActive');
      document.querySelector('.addWrapper').classList.remove('addWrapperActive');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
