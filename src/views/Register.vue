<template>
  <div class="registerWrapper">
    <div class="registerForm">
      <div class="textLogin">
        <h3>Welcome :)</h3>
      </div>
      <div class="formInput">
        <h5>Register</h5><br><br>
        <form @submit="register">
          <label for="user">Nama</label><br>
          <input
            type="text"
            id="user"
            v-model="username"
          /><br><br>
          <label for="email">Input your email</label><br>
          <input
            type="email"
            id="email"
            v-model="email"
            /><br><br>
          <label for="password">Input your password</label><br>
          <input
            type="password"
            id="password"
            v-model="password"
            /><br><br><br><br>
          <button @click="register">Register</button><br><br>
          <p>Sudah punya akun ?
            <router-link to="/login">
              <span>Masuk</span>
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
import Footer from '../components/Footer.vue';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: '',
    };
  },

  components: {
    Footer,
  },

  methods: {
    register() {
      axios
        .post(`${process.env.VUE_APP_URL}user/register`, {
          nm_user: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push('/');
    },
  },

};
</script>

<style lang="scss" scoped>

  .registerWrapper{
    width: 100vw;
    height: 700px;
    background-color: rgba(128, 128, 128, 0.425);
    .registerForm{
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
        height: 600px;
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
