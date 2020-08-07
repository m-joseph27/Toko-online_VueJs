<template>
  <div class="home">
    <div class="List">
      <h1>Our  product</h1>
    </div>
  <navbar/>
  <carousel/>
  <product/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Carousel from '../components/Carousel.vue';
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Product,
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
