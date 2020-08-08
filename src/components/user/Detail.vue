<template>
  <div class="detailWrapper">
  <navbar/>
  <div class="detailProduct">
    <div class="imageProduct">
      <img src="../../assets/img/dvd_merryriana.jpg" alt="">
    </div>
    <div class="description">
      <div class="productName">
        <h3>DVD - Mimpi 1 Juta Dolar</h3>
      </div>
      <div class="productPrice">
        <h5>Rp. 150.000</h5>
      </div>
      <div class="productDescription">
        <p>Bagaimana seorang mahasiswi berkantong pas-pasan bahkan memiliki
          hutang 40.000 dolar akhirnya bisa sukses meraih pendapatan 1 juta dolar
          pertamanya di usia 26 tahun? Semua diceritakan lengkap dan bisa kamu tonton
          di DVD Film Merry Riana.<br><br>
          Film Merry Riana ini WAJIB ditonton oleh orang yang sedang/pernah menjadi
          mahasiswa/i, perantau, atau siapapun yang ingin menjadi sukses!
          Kalau kamu sudah nonton filmnya, biar makin lengkap harus punya juga nih kaosnya.
          Desainnya simpel, casual, dan cocok untuk kamu yang berjiwa muda.<br><br>
          Bisa beli salah satunya (kaos/DVD), bisa juga beli paket bundling untuk
          mendapatkan harga spesial.<br><br>
          Tertarik?<br>
          Silakan Pesan :)
        </p>
      </div>
      <div class="btnCart">
        <img src="../../assets/img/shopping-cart.png" width="25px" height="20px" alt="cart">
        <p>Add To Cart</p>
      </div>
    </div>
  </div>
  <BtnBack/>
  <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from '../Footer.vue';
import BtnBack from '../BtnBack.vue';

export default {
  components: {
    Navbar,
    Footer,
    BtnBack,
  },

};
</script>

<style lang="scss" scoped>
  .detailWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    .detailProduct{
      width: 95%;
      height: 700px;
      display: flex;
      margin-top: 100px;
      margin-bottom: 20px;
      text-align: left;
      background-color: rgb(255, 255, 255);
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.200);
      border-radius: 5px;
      .imageProduct{
        width: 40%;
        height: 100%;
        img{
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
      .description{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 90px;
        .productName{
          width: 100%;
          height: 50px;
        }
        .productPrice{
          width: 100%;
          height: 50px;
        }
        .productDescription{
          width: 100%;
          height: 300px;
          padding-right: 30px;
        }
        .btnCart{
          width: 140px;
          height: 50px;
          background-color: #af2d1a;
          border-radius: 5px;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.200);
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
          padding: 0 5px;
          cursor: pointer;
          p{
            padding-top: 15px;
            font-weight: bold;
          }
          &:active{
            transform: translateY(2px);
          }
        }
      }
    }
  }

</style>
