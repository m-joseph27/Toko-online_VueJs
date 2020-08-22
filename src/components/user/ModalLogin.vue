<template>
  <div v-if="!logged" class="modalWrapper">
    <div class="modalLogin">
      <p>you must login first <br>or <br> <router-link to="/login">
        <span>click here</span></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ModalLogin',
  computed: {
    ...mapGetters([
      'logged',
    ]),
  },
};
</script>

<style lang="scss" scoped>

  .modalWrapper{
    background-color: rgba(0, 0, 0, 0.178);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    .modalLogin{
      background-color: #fff;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.178);
      width: 200px;
      height: 70px;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 45%;
    }
  }

</style>
