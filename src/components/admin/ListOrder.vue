<template>
  <div class="listOrderWrapper">
    <div v-for="order in getOrder" :key="order.id_order" class="listOrder">
      <div class="photoOrder">
        <div class="avatar">
          <img :src="order.photo" alt="user">
        </div>
      </div>
      <div class="detailOrder">
        <div class="productName">
          <p>Nama Produk :</p>
          <span>{{ order.nm_product }}</span>
        </div>
        <div class="priceProduct">
          <p>Harga Produk :</p>
          <span>{{ order.price }}</span>
        </div>
        <div class="orderer">
          <p>Pembeli Produk:</p>
          <span>{{ order.nm_user }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listOrder',
  mounted() {
    this.$store.dispatch('GETORDER');
  },
  computed: {
    getOrder() {
      return this.$store.state.order;
    },
  },
};
</script>

<style lang="scss" scoped>
  .listOrderWrapper.listOrderActive{
    display: flex !important;
  }

  .listOrderWrapper{
    width: 800px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.100);
    border-radius: 5px;
    position: absolute;
    top: 170px;
    left: 25%;
    overflow-y: scroll;
    display: none;
    flex-direction: column;
    .listOrder{
      width: 100%;
      height: 120px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.164);
      &:hover{
        background-color: rgba(0, 0, 0, 0.100);
      }
      .photoOrder{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar{
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.151);
          overflow: hidden;
          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
      .detailOrder{
        width: 80%;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
        span{
          padding-left: 50px;
        }
        .productName{
          width: 100%;
          display: flex;
        }
        .priceProduct{
          width: 100%;
          display: flex;
        }
        .orderer{
          width: 100%;
          display: flex;
        }
      }
    }
  }

</style>
