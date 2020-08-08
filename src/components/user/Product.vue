<template>
  <div class="productWrapper">
    <div class="cardWrapper">
      <div class="img-product">
        <img src="../../assets/img/dvd_merryriana.jpg" alt="dvd">
      </div>
      <div class="product">
        <p>DVD - Mimpi 1 Juta Dolar</p>
      </div>
      <div class="price">
        <button class="btn-buy">
          <img src="../../assets/img/shopping-cart.png" width="20px" height="20px" alt="">
          Add To Cart</button>
        <button class="btn-price">Rp. 150.000</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.productWrapper{
  width: 100%;
  height: 700px;
  margin-top: 180px;
  padding-top: 50px;
  .cardWrapper{
    width: 350px;
    height: 350px;
    background-color: #fff;
    box-shadow: 1px 5px 5px 5px rgba(128, 128, 128, 0.342);
    margin: 0 auto;
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
        // box-shadow: 1px 5px 5px rgb(71, 71, 71);
        outline: none;
        border: none;
      }
    }
  }
}

</style>
