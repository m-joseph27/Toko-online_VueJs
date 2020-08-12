<template>
  <div class="userWrapper">
    <navbar/>
    <div v-for="user in getUser" :key="user.iduser" class="userDetail">
      <div class="photoUser">
        <div class="photo">
          <img :src="user.photo" alt="user">
        </div>
      </div>
      <div class="detailUser">
        <h3>User Name</h3>
        <h5>Muhammad Yusuf</h5>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/user/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
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

.userWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  .userDetail{
    display: flex;
    flex-direction: row;
    margin-top: 90px;
    margin-bottom: 15px;
    border-radius: 5px;
    width: 95%;
    height: 500px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.37);
    border: 1px solid rgba(0, 0, 0, 0.116);
    overflow: hidden;
    .photoUser{
      width: 45%;
      height: 100%;
      border-right: 1px solid rgba(0, 0, 0, 0.144);
      display: flex;
      justify-content: center;
      align-items: center;
      .photo{
        width: 350px;
        height: 350px;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0.199);
        img{
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
    .detailUser{
      width: 55%;
      height: 100%;
    }
  }
}

</style>
