<template>
  <div class="admin">
    <Nav/>
  </div>
</template>

<script>

import Nav from '../components/admin/Nav.vue';

export default {
  name: 'Home',
  components: {
    Nav,
  },
  methods: {
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
