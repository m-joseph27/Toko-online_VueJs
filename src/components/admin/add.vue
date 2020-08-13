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
      <form @submit="addProduct">
        <div class="nameProduct">
          <input type="text" v-model="productName">
        </div>
        <div class="priceProduct">
          <input type="text" v-model="priceProduct">
        </div>
        <div class="photoProduct">
          <input type="file" ref="file">
        </div>
        <div class="descProduct">
          <textarea name="" id="" cols="70" rows="5" v-model="descProduct"></textarea>
        </div>
        <div class="btnSubmit">
          <button type="submit">Sumbit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      productName: '',
      priceProduct: '',
      productPhoto: '',
      descProduct: '',
    };
  },
  methods: {
    addProduct(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('nm_product', this.productName);
      formData.append('price', this.priceProduct);
      formData.append('photo', this.$refs.file.files[0]);
      formData.append('description', this.descProduct);
      this.$store.dispatch('ADDPRODUCT', formData)
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

  .addWrapperActive{
    display: flex !important;
    transition: ease .5s !important;
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
    transition: ease .5s !important;
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
