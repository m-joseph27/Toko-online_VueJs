<template>
  <div class="listUserWrapper">
    <div v-for="user in getUser" :key="user.id_user" class="listUser">
      <div class="photoUser">
        <div class="avatar">
          <img :src="user.photo" alt="user">
        </div>
      </div>
      <div class="detailUser">
        <h5>{{ user.nm_user }}</h5>
        <h6>{{ user.email }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listUser',
  mounted() {
    this.$store.dispatch('GETUSER');
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
  .listUserWrapper.listUserActive{
    display: flex !important;
    transition: .5s;
  }

  .listUserWrapper{
    width: 350px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.100);
    border-radius: 5px;
    position: absolute;
    top: 170px;
    left: 40%;
    flex-direction: column;
    overflow-y: scroll;
    display: none;
    transition: .5s;
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
          overflow: hidden;
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
        align-items: flex-start;
        padding-left: 20px;
      }
    }
  }

</style>
