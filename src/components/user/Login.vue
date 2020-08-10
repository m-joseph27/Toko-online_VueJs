/* eslint-disable no-useless-return */
/* eslint-disable no-useless-return */
<template>
  <div class="loginWrapper">
    <div class="bodyLogin">
      <div class="textLogin">
        <h4>Login</h4>
        <div class="closeBtn">
          <i class="fas fa-times" @click="$emit('close-login')"></i>
        </div>
      </div>
      <div class="formLogin">
        <label for="login">Email:</label><br>
        <input type="email" id="login"><br><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password"><br><br><br>
        <button @click="login">login</button>
        <div v-if="error !== false" class="login-message">{{error}}</div>
      </div>
      <div class="btnLogin">
        <p>Belum punya akun? <span>Daftar </span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: false,
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URL}user/login`, {
          email: this.email,
          password: this.password,
        })
        .then((req) => {
          this.loginSucces(req);
        });
      this.$router.push('/');
    },
    loginSucces(request) {
      if (request.status === 404) {
        this.failEmail();
        // eslint-disable-next-line no-useless-return
        return;
      }
      if (request.status === 401) {
        this.failPassword();
        // eslint-disable-next-line no-useless-return
        return;
      }
    },
    failEmail() {
      this.error = 'Incorrect Email';
    },
    failPassword() {
      this.error = 'Incorrect Password';
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-message{
    // margin-top: 80px;
    // padding-left: 137px;
    // padding-top: 3px;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    background-color: rgb(236, 10, 10);
    // font-family: airbnbmedium;
    color: white;
  }
  .loginWrapper.loginActive{
    visibility: visible;
    opacity: 1;
    transition: ease .5s;
  }

  .loginWrapper{
    background-color: #5a5d612c;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
    visibility: hidden;
    transition: ease .5s;
    opacity: 0;
    .bodyLogin{
      width: 350px;
      height: 450px;
      background-color: #fff;
      position: absolute;
      top: 100px;
      left: 550px;
      border-radius: 5px;
      box-shadow: 1px 5px 5px 5px rgba(128, 128, 128, 0.342);
      .textLogin{
        width: 100%;
        height: 100px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4{
          font-weight: 600;
        }
        .closeBtn{
          display: flex;
          justify-content: flex-end;
          padding-top: 20px;
          width: 40px;
          height: 100%;
          i{
            color: #af2d1a;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
      .formLogin{
        width: 100%;
        height: 300px;
        button{
          width: 80%;
          height: 40px;
          outline: none;
          border: none;
          background-color: #af2d1a;
          border-radius: 5px;
          color: white;
          font-weight: bold;
        }
        label{
          font-size: 15px;
          font-weight: 700;
        }
        input{
          width: 80%;
          height: 40px;
          border-radius: 5px;
          outline: none;
          border: 1px solid rgba(128, 128, 128, 0.342);
          padding-left: 10px;
        }
        .submit{
          background-color: #af2d1a;
          color: white;
          font-weight: 700;
        }
      }
      .btnLogin{
        p{
          font-size: 12px;
          font-weight: 600;
        }
        span{
          color: #af2d1a;
          cursor: pointer;
        }
      }
    }
  }
</style>
