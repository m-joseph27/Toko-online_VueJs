<template>
  <div class="modalWrapper">
      <div class="userInfo">
        <router-link to="/user-detail">
          <p>Profile Saya</p>
        </router-link>
      </div>
    <div class="btnLogout">
      <p>Log Out</p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .modalWrapper.modalWrapperActive{
    visibility: visible;
    opacity: 1;
    transition: ease .5s;
  }
  .modalWrapper{
    width: 150px;
    height: 100px;
    position: fixed;
    top: 80px;
    right: 50px;
    z-index: 20;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: ease-out .3s;
    cursor: pointer;
    .userInfo{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      padding-top: 10px;
      &:hover{
        background-color: rgba(0, 0, 0, 0.123);
      }
      p{
        color: #2c3e50;
      }
    }
    .btnLogout{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      padding-top: 10px;
      &:hover{
        background-color: rgba(0, 0, 0, 0.123);
      }
    }
  }
</style>
