<template>
  <div class="loginAdminWrapper">
    <div class="bodyLogin">
      <div class="textLogin">
        <h4>Login</h4>
        <div class="closeBtn">
          <i class="fas fa-times" @click="$emit('close-admin')"></i>
        </div>
      </div>
      <div class="formLogin">
        <form @submit="loginAdmin">
          <label for="fname">Email:</label><br>
          <input type="email" id="fname" v-model="emailAdmin"><br><br>
          <label for="lname">Password:</label><br>
          <input type="password" id="lname" v-model="passwordAdmin"><br><br><br>
          <input class="submit" type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'loginUser',
  data() {
    return {
      emailAdmin: '',
      passwordAdmin: '',
      error: '',
    };
  },

  methods: {
    loginAdmin(e) {
      e.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URL}user/login`, {
          email: this.emailAdmin,
          password: this.passwordAdmin,
        })
        .then((req) => {
          this.loginSucces(req);
        });
      this.$router.push('/admin');
    },
  },
};
</script>

<style lang="scss" scoped>
  .loginAdminWrapper.loginAdminActive{
    visibility: visible;
    opacity: 1;
    transition: ease .5s;
  }

  .loginAdminWrapper{
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
      height: 400px;
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
