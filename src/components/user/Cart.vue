<template>
  <div class="cartWrapper">
    <div class="cartInfo">
      <div v-if="cartEmpty" class="emptyCart">
        <img src="../../assets/img/emptycart.png" alt="empty-cart">
        <header>Keranjang Belanjamu Kosong</header>
      </div>
      <div v-for="item in selectedItem" :key="item.item.id_product" class="contentCart">
        <div class="photo">
          <div class="itemPhoto">
            <img :src="item.item.photo" alt="dvd">
          </div>
        </div>
        <div class="cartItem">
          <div class="item">
            <p>{{item.item.nm_product}}</p></div>
          <div class="btnItem">
            <button @click="decrement(item)">-</button>
            <button>{{ item.count }}</button>
            <button @click="increment(item)">+</button>
            <p>min. 1 pembelian pcs</p>
          </div>
          <p>Rp : <span>{{item.item.price * item.count}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    selectedItem() {
      return this.$store.state.selectedItem;
    },
    cartEmpty() {
      return this.selectedItem.length === 0;
    },
  },
  methods: {
    increment(data) {
      this.$store.commit('INCREMENT', data);
    },
    decrement(data) {
      this.$store.commit('DECREMENT', data);
    },
  },
};
</script>

<style lang="scss" scoped>
  .cartWrapper.cartWrapperActive{
    visibility: visible !important;
    opacity: 1;
    transition: ease .5s;
  }

  .cartWrapper{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.200);
    position: fixed;
    z-index: 20;
    top: 80px;
    visibility: hidden;
    opacity: 0;
    transition: ease .5s;
    .cartInfo{
      width: 400px;
      height: 285px;
      background-color: #fff;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
      position: absolute;
      left: 1000px;
      top: -10px;
      border: 1px solid rgba(0, 0, 0, 0.200);
      border-radius: 5px;
      overflow-y: scroll;
      position: relative;
      .emptyCart{
        width: 90%;
        height: 80%;
        margin-left: 25px;
        margin-top: 35px;
        img{
          width: 40%;
          height: 40%;
          object-fit: contain;
        }
        header{
          font-weight: bold;
          line-height: 70px;
        }
      }
      .contentCart{
        width: 100%;
        height: 140px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.200);
        display: flex;
        &:hover{
          background-color: rgba(0, 0, 0, 0.200);
        }
        .photo{
          width: 30%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .itemPhoto{
            width: 80px;
            height: 80px;
            border-radius: 100%;
            overflow: hidden;
            img{
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
        }
        .cartItem{
          width: 70%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 40px;
          .item{
            overflow: hidden;
          }
          .btnItem{
            display: flex;
            height: 50px;
            padding-top: 10px;
            p{
              padding-left: 10px;
              font-weight: 700;
              font-size: 12px;
            }
            button{
              width: 40px;
              height: 40px;
              outline: none;
              border: 1px solid rgba(0, 0, 0, 0.200);
            }
            input{
              width: 50px;
              height: 40px;
              border: 1px solid #af2d1a;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }

</style>
