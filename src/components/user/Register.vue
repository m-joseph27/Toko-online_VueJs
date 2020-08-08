<template>
  <div class="registerWrapper">
    <div class="bodyLogin">
      <div class="textLogin">
        <h4>Register</h4>
        <div class="closeBtn">
          <i class="fas fa-times" @click="$emit('close-register')"></i>
        </div>
      </div>
      <div class="formLogin">
        <form action="/">
          <label for="fname">Username:</label><br>
          <input type="text" id="fname" placeholder="yusuf"><br><br>
          <label for="fname">Email:</label><br>
          <input type="email" id="fname" placeholder="example@gmail.com"><br><br>
          <label for="lname">Password:</label><br>
          <input type="password" id="lname"><br><br><br>
          <input class="submit" type="submit" value="Submit">
        </form>
      </div>
      <div class="btnRegister">
        <p>Sudah punya akun? <span @click="$('login-clicked')">Login</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .registerWrapper.registerActive{
    visibility: visible;
    opacity: 1;
    transition: ease .5s;
  }

  .registerWrapper{
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
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      position: absolute;
      top: 80px;
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
        margin-bottom: 90px;
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
      .btnRegister{
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
