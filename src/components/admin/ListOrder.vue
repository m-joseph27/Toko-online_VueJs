<template>
  <div class="listOrderWrapper">
    <div class="listOrder">
      <div class="productPhoto">
        <div class="photo">
          <img src="../../assets/img/dvd_merryriana.jpg" alt="product">
        </div>
      </div>
      <div class="detailProduct">
        <h5>DVD - Mimpi 1 Juta Dolar</h5>
        <p>Total: <span>2</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  .listOrderWrapper{
    width: 350px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    visibility: hidden;
    top: 160px;
    left: 40%;
    overflow-y: scroll;
    .listOrder{
      width: 100%;
      height: 90px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.103);
      display: flex;
      &:hover{
        background-color: rgba(0, 0, 0, 0.100);
      }
      .productPhoto{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .photo{
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.671);
          overflow: hidden;
          img{
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
      }
      .detailProduct{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 20px;
      }
    }
  }

</style>
