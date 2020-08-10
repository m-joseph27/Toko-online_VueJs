<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/">
      <img src="../../assets/img/logo.png" width="70px" height="50px" alt="logo">
    </router-link>
    <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="search">
          <input type="text">
        </div>
        <router-link class="nav-link active" to="/">Beranda
          <span class="sr-only">(current)</span>
        </router-link>
        <span class="nav-link" @click="$emit('admin-clicked')"
          >Admin
          </span>
        <div class="btn-parent">
          <button class="btn-login" @click="$emit('login-clicked')">Login</button>
          <button class="btn-register" @click="$emit('register-clicked')">Register</button>
        </div>
        <div class="cart">
          <img src="../../assets/img/shopping-cart-maroon.png" width="30px" height="25px"
          alt="chart-maroon">
          <div class="selectedItem">
            <p>0</p>
          </div>
        </div>
        <div class="user" @click="$emit('modal-clicked')">
          <img src="../../assets/img/user.png" alt="user">
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
  .navbar{
  background-color: white;
  width: 100%;
  height: 80px;
  padding-left: 50px;
  position: fixed;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.200);
  span{
    cursor: pointer;
  }
}
.navbar-collapse{
  // display: flex;
  // background-color: #af2d1a;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  font-weight: bold;
  box-sizing: border-box;
  .search{
    margin: 6px 260px;
    input{
      width: 450px;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
      border: 1px solid rgba(0, 0, 0, 0.20);
    }
  }
  .btn-parent{
    display: flex;
    flex-direction: row;
    // display: none;
    button{
      width: 100px;
      margin: 0 10px;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    .btn-login{
      background-color: #af2d1a;
      color: white;
      font-weight: bold;
    }
    .btn-register{
      background-color: white;
      color: #af2d1a;
      font-weight: bold;
      border: 1px solid #af2d1a;
    }
  }
  .cart{
    width: 80px;
    height: 50px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    position: relative;
    display: none;
    cursor: pointer;
    .selectedItem{
      background-color: #af2d1a;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      position: absolute;
      top: 0;
      right: 15px;
      color: white;
    }
  }
  .user{
    width: 50px;
    height: 50px;
    background-color: #af2d1a;
    border-radius: 100%;
    margin-left: 10px;
    display: none;
    cursor: pointer;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 768px) {
  .navbar{
    z-index: 10;
  }
  .btn-parent{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .search{
    margin: 0 auto;
  }
}

</style>
