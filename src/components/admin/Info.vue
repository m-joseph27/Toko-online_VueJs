<template>
  <div class="infoWrapper">
    <div class="detailInfo">
      <div @click="$emit('add')" class="addProduct">
        <p>Add Product</p>
      </div>
      <div @click="$emit('order')" class="listOrder">
        <p>List Order</p>
      </div>
      <div @click="$emit('list')" class="listUser">
        <p>List User</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

};
</script>

<style lang="scss" scoped>
  .infoWrapper{
    width: 100%;
    height: 700px;
    background-color: rgba(0, 0, 0, 0.219);
    .detailInfo{
      width: 100%;
      height: 50px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.308);
      display: flex;
      cursor: pointer;
      .addProduct{
        width: 33.34%;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.219);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .listOrder{
        width: 33.34%;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.219);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .listUser{
        width: 33.34%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
