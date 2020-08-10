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
        <button class="btn-buy">
          <img src="../../assets/img/shopping-cart-maroon.png" width="20px" height="20px" alt="">
          Add To Cart</button>
        <button class="btn-price">{{product.price}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'productComponent',
  mounted() {
    this.$store.dispatch('GETPRODUCT');
    axios.get(`http://localhost:1111/api/product?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.product = res.data.result[2];
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0];
      });
  },
  computed: {
    getProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    pages(id) {
      this.currentPage = 0 + id;
      axios.get(`http://localhost:1111/api/product?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.product = res.data.result[2];
        });
    },
    nextPages() {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage;
      } else {
        this.currentPage += 1;
      }
      axios.get(`http://localhost:1111/api/product?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.product = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        });
    },
    prevPages() {
      if (this.currentPage === 1) {
        this.currentPage = 1;
      } else {
        this.currentPage -= 1;
      }
      axios.get(`http://localhost:1111/api/product?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.product = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        });
    },
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
    cursor: pointer;
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
        &:active{
          transform: translateY(2px);
        }
      }
    }
  }
}

</style>
