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
          <input type="text" placeholder="search">
          <div class="searchBox">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="navigate">
          <router-link class="nav-link active" to="/">Beranda
          <span class="sr-only">(current)</span>
        </router-link>
        <span class="nav-link" @click="$emit('admin-clicked')"
          >Admin
          </span>
        <div v-if="!logged"  class="btn-parent">
          <router-link to="/login">
            <button class="btn-login">Login</button>
          </router-link>
          <router-link to="/login">
            <button class="btn-register">Register</button>
          </router-link>
        </div>
        <div v-if="logged" @click="$emit('cart-clicked')" class="cart">
          <img src="../../assets/img/shopping-cart-maroon.png" width="30px" height="25px"
          alt="chart-maroon">
          <div class="selectedItem">
            <p>{{ countCart }}</p>
          </div>
        </div>
        <div v-if="logged" class="user" @click="$emit('modal-clicked')">
          <img src="../../assets/img/user.png" alt="user">
        </div>
      </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'navbar',

  computed: {
    selectedItem() {
      return this.$store.state.selectedItem;
    },
    ...mapGetters([
      'logged',
      'countCart',
    ]),
  },

};

</script>

<style lang="scss" scoped>
  .navigate{
    display: flex;
    margin-left: -120px;
  }

  .navbar{
  background-color: white;
  width: 100%;
  height: 80px;
  padding-left: 50px;
  position: fixed;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.200);
  // margin-right: 100px;
  span{
    cursor: pointer;
  }
}
.navbar-collapse{
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  font-weight: bold;
  box-sizing: border-box;
  .search{
    margin: 6px 260px;
    position: relative;
    input{
      width: 450px;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
      border: 1px solid rgba(0, 0, 0, 0.20);
      position: relative;
      padding-left: 60px;
      &:focus{
        border:1px solid #af2d1a;
      }
    }
    .searchBox{
      width: 50px;
      height: 100%;
      position: absolute;
      top: 0;
      padding-top: 10px;
      border-right: 1px solid rgba(0, 0, 0, 0.20);
      i{
      opacity: .8;
      font-size: 20px;
    }
    }
  }
  .btn-parent{
    display: flex;
    flex-direction: row;
    // display: none;
    button{
      width: 100px;
      height: 40px;
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
    cursor: pointer;
    .selectedItem{
      background-color: #af2d1a;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      position: absolute;
      top: 0;
      right: 5px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      p{
        font-size: 17px;
        font-weight: bolder;
      }
    }
  }
  .user{
    width: 50px;
    height: 50px;
    background-color: #af2d1a;
    border-radius: 100%;
    margin-left: 10px;
    // display: none;
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
