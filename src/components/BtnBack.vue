<template>
  <div>
    <router-link to="/">
      <div class="btnWrapper">
          <i class="fas fa-chevron-left"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .btnWrapper{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #af2d1a;
    position: absolute;
    top: 100px;
    left: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
      font-size: 30px;
      font-weight: bold;
      color: white;
    }
    &:active{
      transform: translateY(2px);
    }
  }

</style>
