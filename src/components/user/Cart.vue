<template>
  <div class="cartWrapper">
    <div class="cartInfo">
      <div class="contentCart">
        <div class="photo">
          <div class="itemPhoto">
            <img src="../../assets/img/dvd_merryriana.jpg" alt="dvd">
          </div>
        </div>
        <div class="cartItem">
          <p>Dvd Merry</p>
          <div class="btnItem">
            <button>-</button>
            <div class="box">0</div>
            <button>+</button>
          </div>
          <p>Rp : <span>1500</span></p>
        </div>
      </div>
      <div class="contentCart">
        <div class="photo">
          <div class="itemPhoto">
            <img src="../../assets/img/dvd_merryriana.jpg" alt="dvd">
          </div>
        </div>
        <div class="cartItem">
          <p>Dvd Merry</p>
          <div class="btnItem">
            <button>-</button>
            <div class="box">0</div>
            <button>+</button>
          </div>
          <p>Rp : <span>1500</span></p>
        </div>
      </div>
      <div class="contentCart">
        <div class="photo">
          <div class="itemPhoto">
            <img src="../../assets/img/dvd_merryriana.jpg" alt="dvd">
          </div>
        </div>
        <div class="cartItem">
          <p>Dvd Merry</p>
          <div class="btnItem">
            <button>-</button>
            <button>+</button>
          </div>
          <p>Rp : <span>1500</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .cartWrapper.cartWrapperActive{
    visibility: visible !important;
    opacity: 1;
    transition: ease .5s;
  }

  .cartWrapper{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.200);
    position: fixed;
    z-index: 20;
    top: 80px;
    visibility: hidden;
    opacity: 0;
    transition: ease .5s;
    .cartInfo{
      width: 400px;
      height: 280px;
      background-color: #fff;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
      position: absolute;
      right: 100px;
      top: -10px;
      border: 1px solid rgba(0, 0, 0, 0.200);
      border-radius: 5px;
      overflow-y: scroll;
      .contentCart{
        width: 100%;
        height: 140px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.200);
        display: flex;
        &:hover{
          background-color: rgba(0, 0, 0, 0.200);
        }
        .photo{
          width: 30%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .itemPhoto{
            width: 80px;
            height: 80px;
            border-radius: 100%;
            overflow: hidden;
            img{
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
        }
        .cartItem{
          width: 70%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 40px;
          .btnItem{
            display: flex;
            button{
              width: 40px;
              height: 40px;
              outline: none;
              border: 1px solid rgba(0, 0, 0, 0.200);
            }
            .box{
              width: 40px;
              height: 40px;
              border: 1px solid #af2d1a;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }

</style>
