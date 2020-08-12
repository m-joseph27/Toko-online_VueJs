<template>
  <div class="loginWrapper">
    <div class="loginForm">
      <div class="textLogin">
        <h3>Welcome To Merry Riana Offical Store :)</h3>
      </div>
      <div class="formInput">
        <h5>Login</h5><br><br><br>
        <form @submit="login">
          <label for="email">Input your email</label><br>
          <input
            type="email"
            id="email"
            v-model="email"
          />
          <label for="password">Input your password</label><br>
          <input
            type="password"
            id="password"
            v-model="password"
          /><br><br>
          <button>Login</button><br><br>
          <p>Belum punya akun ?
            <router-link to="/register">
              <span>Daftar</span>
            </router-link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
// import { mapGetters } from 'vuex';
import Footer from '../components/Footer.vue';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
    };
  },

  components: {
    Footer,
  },

  // computed: {
  //   ...mapGetters([
  //     'logged',
  //   ]),
  // },

  methods: {
    login() {
      axios
        .post(`${process.env.VUE_APP_URL}user/login`, {
          email: this.email, password: this.password,
        })
        .then((res) => {
          localStorage.setItem('id', res.data.data[0].id_user);
          localStorage.setItem('status', res.data.data[0].status);
          localStorage.setItem('nama', res.data.data[0].nm_user);
          localStorage.setItem('photo', res.data.data[0].photo);
          localStorage.setItem('email', res.data.data[0].email);
        });
      this.$router.push('/');
    },
  },

};
</script>

<style lang="scss" scoped>

  .loginWrapper{
    width: 100vw;
    height: 700px;
    background-color: rgba(128, 128, 128, 0.425);
    .loginForm{
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .textLogin{
        width: 1000px;
        height: 60px;
        margin-top: -60px;
        margin-bottom: 50px;
        h3{
          font-weight: bold;
        }
      }
      .formInput{
        width: 300px;
        height: 500px;
        background-color: white;
        box-shadow: 10px 10px 10px 10px rgba(128, 128, 128, 0.425);
        border-radius: 5px;
        display: block;
        padding-top: 30px;
        text-align: left;
        padding-left: 30px;
        h5{
          font-weight: bold;
        }
        label{
          font-weight: bold;
          font-size: 15px;
        }
        input{
          padding-left: 10px;
          width: 90%;
          height: 40px;
        }
        button{
          width: 90%;
          height: 40px;
          background-color: #af2d1a;
          outline: none;
          border: none;
          color: white;
          border-radius: 5px;
          font-weight: 600;
        }
        p{
          font-weight: bold;
          font-size: 12px;
        }
        span{
          color: #af2d1a;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }

</style>
