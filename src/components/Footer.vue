<template>
  <div class="footerWrapper">
    <div class="resolution">
      <header>Official Store of Merry Riana Group</header>
      <footer>Menciptakan dampak positif di dalam kehidupan jutaan orang di Indonesia </footer>
    </div>
    <div class="connect">
      <header>Stay connected with merry riana daily</header>
      <div class="medsos">
        <a href="https://www.instagram.com/merryriana/?hl=id">
          <img src="../assets/img/instagram.png" width="40px" height="40px" alt="instagram">
        </a>
        <a href="https://www.youtube.com/channel/UCUKwvz6XUQmE1fh9v1AqQzA">
          <img src="../assets/img/youtube.png" width="40px" height="40px" alt="youtube">
        </a>
        <a href="https://www.facebook.com/MerryRiana/">
          <img src="../assets/img/facebook.png" width="40px" height="40px" alt="facebook">
        </a>
        <a href="https://twitter.com/MerryRiana?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <img src="../assets/img/twitter.png" width="40px" height="40px" alt="twitter">
        </a>
      </div>
      <p>© Merry Riana Group. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .footerWrapper{
    width: 100%;
    height: 150px;
    background-color: #af2d1a;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    color: white;
    line-height: 30px;
    header{
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
    }
    .connect{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .medsos{
        display: flex;
        width: 250px;
        justify-content: space-around;
        margin: 5px 0;
      }
    }
  }

</style>
