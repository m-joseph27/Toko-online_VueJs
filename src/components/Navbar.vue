<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <img src="../assets/img/logo.png" width="70px" height="50px" alt="logo">
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
        <a class="nav-link active" href="#">Beranda <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">Admin</a>
        <div class="btn-parent">
          <button class="btn-login" @click="$emit('login-clicked')">Login</button>
          <button class="btn-register">Register</button>
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
  height: 80px;
  padding-left: 50px;
  position: relative;
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
