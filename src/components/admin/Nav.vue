<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/">
      <img src="../../assets/img/logo-mr.png" width="90px" height="70px" alt="logo">
    </router-link>
    <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" to="/admin">Admin
        </router-link>
        <router-link class="nav-link" to="/">Beranda</router-link>
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
  background-color: #af2d1a;
  height: 80px;
  padding-left: 50px;
  img{
    cursor: pointer;
  }
}
.navbar-collapse{
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  font-weight: bold;
  box-sizing: border-box;
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
