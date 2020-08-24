<template>
  <div class="detailWrapper">
  <navbar @cart-clicked="showCart"
          @modal-clicked="showModal"/>
  <div class="detailProduct">
    <div class="imageProduct">
      <img :src="details.photo" alt="product">
    </div>
    <div class="description">
      <div class="productName">
        <h3>{{details.nm_product}}</h3>
      </div>
      <div class="productPrice">
        <h5>Rp: <span>{{details.price}}</span></h5>
      </div>
      <div class="productDescription">
        <p>{{details.description}}
        </p>
      </div>
      <div @click="selectedItem(product)" class="btnCart">
        <img src="../../assets/img/shopping-cart.png" width="25px" height="20px" alt="cart">
        <p>Add To Cart</p>
      </div>
    </div>
  </div>
  <cart/>
  <Footer/>
  <modal-user/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from '../Footer.vue';
import Cart from './Cart.vue';
import ModalUser from './ModalUser.vue';

export default {
  name: 'detail',
  data() {
    return {
      details: [],
    };
  },
  components: {
    Navbar,
    Footer,
    Cart,
    ModalUser,
  },
  methods: {
    showCart() {
      document.querySelector('.cartWrapper').classList.toggle('cartWrapperActive');
    },
    showModal() {
      document.querySelector('.modalWrapper').classList.toggle('modalWrapperActive');
    },
    selectedItem(item) {
      this.$store.commit('selectedItem', { item, count: 1 });
    },
  },

  mounted() {
    this.$store.dispatch('GETPRODUCTID', this.$route.params.id_product)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.details = res.data.data[0];
      });
  },

  computed: {
    getProduct() {
      return this.$store.state.product;
    },
  },

};
</script>

<style lang="scss" scoped>
  .detailWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    .detailProduct{
      width: 95%;
      height: 700px;
      display: flex;
      margin-top: 90px;
      margin-bottom: 20px;
      text-align: left;
      background-color: rgb(255, 255, 255);
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
      border-radius: 5px;
      .imageProduct{
        width: 40%;
        height: 100%;
        img{
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
      .description{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 70px;
        .productName{
          width: 100%;
          height: 50px;
        }
        .productPrice{
          width: 100%;
          height: 50px;
        }
        .productDescription{
          width: 100%;
          height: 300px;
          padding-right: 30px;
          overflow: hidden;
        }
        .btnCart{
          width: 140px;
          height: 50px;
          background-color: #af2d1a;
          border-radius: 5px;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.200);
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
          padding: 0 5px;
          cursor: pointer;
          p{
            padding-top: 15px;
            font-weight: bold;
          }
          &:active{
            transform: translateY(2px);
          }
        }
      }
    }
  }

</style>
