<template>
  <div class="listUserWrapper">
    <div class="listUser">
      <div class="photoUser">
        <div class="avatar">
          <img src="../../assets/img/user.png" alt="user">
        </div>
      </div>
      <div class="detailUser">
        <h5>Muhammad Yusuf</h5>
        <h6>hi.yusuf27@gmail.com</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .listUserWrapper.listUserActive{
    visibility: visible;
    opacity: 1;
  }

  .listUserWrapper{
    width: 350px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.100);
    border-radius: 5px;
    position: absolute;
    top: 170px;
    left: 35%;
    display: flex;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    .listUser{
      width: 100%;
      height: 100px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.164);
      &:hover{
        background-color: rgba(0, 0, 0, 0.100);
      }
      .photoUser{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar{
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.151);
          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
      .detailUser{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

</style>
