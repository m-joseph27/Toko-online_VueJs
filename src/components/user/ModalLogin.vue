<template>
  <div class="modalWrapper">
    <div class="modalLogin">
      <p>you must login first <br>or <br> <router-link to="/login">
        <span>click here</span></router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalLogin',
};
</script>

<style lang="scss" scoped>

  .modalWrapper{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 23;
    p{
      font-weight: bold;
      font-size: 15px;
    }
    .modalLogin{
      background-color: white;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.479);
      border: 1px solid rgba(0, 0, 0, 0.479);
      width: 300px;
      height: 200px;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

</style>
