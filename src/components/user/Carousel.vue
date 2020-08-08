<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/img/logo.png" class="d-block w-100" alt="sd-jual">
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/dvd_merryriana.jpg" class="d-block w-100" alt="dvd">
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/mcookies-all.jpeg" class="d-block w-100" alt="cookies">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators"
        role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators"
        role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .carousel-item{
    margin-top: 10px;
    height: 500px;
    // background-color: rgba(192, 192, 192, 0.425);
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .carousel-control-prev-icon{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: black;
    background-color: #af2d1a;
    font-size: 10px;
    .sr-only{
      background-color: black;
    }
  }
  .carousel-control-next-icon{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: black;
    background-color: #af2d1a;
  }
</style>
