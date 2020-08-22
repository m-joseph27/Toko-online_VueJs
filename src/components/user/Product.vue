<template>
  <div class="productWrapper">
    <div v-for="product in getProduct" :key="product.id_product" class="cardWrapper">
      <router-link :to="/detail-product/+product.id_product">
        <div class="img-product">
          <img :src="product.photo" alt="dvd">
        </div>
      </router-link>
      <div class="product">
        <p>{{ product.nm_product }}</p>
      </div>
      <div class="price">
        <button v-if="logged" @click="selectedItem(product)" class="btn-buy">
          <img src="../../assets/img/shopping-cart-maroon.png" width="20px" height="20px" alt="">
          Add To Cart</button>
        <div class="btn-price">Rp. {{product.price}}</div>
      </div>
    </div>
    <modal-login/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalLogin from './ModalLogin.vue';

export default {
  name: 'productComponent',
  components: {
    ModalLogin,
  },
  data() {
    return {
      selectedProduct: [],
    };
  },

  methods: {
    selectedItem(item) {
      this.$store.commit('selectedItem', { item, count: 1 });
    },
  },

  mounted() {
    this.$store.dispatch('GETPRODUCT');
  },
  computed: {
    getProduct() {
      return this.$store.state.product;
    },
    ...mapGetters([
      'logged',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.productWrapper{
  width: 80%;
  height: 700px;
  margin: 200px auto;
  display: flex;
  flex-wrap: wrap;
  .cardWrapper{
    width: 350px;
    height: 350px;
    background-color: #fff;
    box-shadow: 1px 5px 5px 5px rgba(128, 128, 128, 0.342);
    margin: 20px auto;
    border-radius: 5px;
    overflow: hidden;
    .img-product{
      width: 100%;
      height: 65%;
      border-bottom: 1px solid rgba(128, 128, 128, 0.342);
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .product{
      width: 100%;
      height: 15%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      font-weight: bold;
    }
    .price{
      width: 100%;
      height: 20%;
      background-color: #af2d1a;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button{
        width: 140px;
        height: 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        outline: none;
        border: none;
        font-weight: bold;
        cursor: pointer;
        &:active{
          transform: translateY(2px);
        }
      }
      .btn-price{
        width: 140px;
        height: 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

</style>
