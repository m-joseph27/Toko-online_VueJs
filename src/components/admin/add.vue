<template>
  <div class="addWrapper">
    <div @click="$emit('add-clicked')" class="btnClose"><i class="fas fa-times"></i></div>
    <div class="valueProduct">
      <span>Nama Produk</span>
      <span>Price</span>
      <span>Photo</span>
      <span>Description</span>
    </div>
    <div class="inputProduct">
      <div class="nameProduct"><input type="text"></div>
      <div class="priceProduct"><input type="text"></div>
      <div class="photoProduct"><input type="file"></div>
      <div class="descProduct"><textarea name="" id="" cols="70" rows="5"></textarea></div>
    </div>
    <div class="btnSubmit">
      <button>Sumbit</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  .addWrapperActive{
    display: flex !important;
  }

  .addWrapper{
    width: 700px;
    height: 550px;
    background-color: #fff;
    position: absolute;
    top: 140px;
    left: 25%;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.123);
    overflow: hidden;
    padding-top: 30px;
    display: none;
    .btnClose{
      width: 70px;
      height: 50px;
      position: absolute;
      right: 0;
      top: 10px;
      i{
        color: #af2d1a;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer;
      }
    }
    .valueProduct{
      width: 20%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      line-height: 90px;
      text-align: left;
      padding-left: 30px;
      padding-top: 10px;
      span{
        font-size: 16px;
        font-weight: 700;
      }
    }
    .inputProduct{
      width: 80%;
      display: flex;
      flex-direction: column;
      margin: 30px 0;
      input{
        width: 85%;
        height: 50px;
        padding-left: 10px;
      }
      .nameProduct{
        height: 90px;
      }
      .priceProduct{
        height: 100px;
      }
      .photoProduct{
        height: 90px;
      }
      .descProduct{
        textarea{
          padding-left: 10px;
        }
      }
    }
    .btnSubmit{
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 15px;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 30px;
      button{
        width: 100px;
        height: 40px;
        border: none;
        outline: none;
        background-color:#af2d1a;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

</style>
