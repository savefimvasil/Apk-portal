<template>
    <div class="footer">
      <div class="footer-left">
        <router-link class="a" to="/">The Apk Portal</router-link>
        <label> - лучшие приложения на андроид</label>
      </div>
      <p>Какая то статистика</p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .footer {
    background: #0e6f8c;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 20px;
    height: 56px;
    box-shadow: 0 0 10px #0e6f8c;
  }
  .footer p, .footer .footer-left{
    color: #e9f6ff;
    font-size: 16px;
    margin: 20px ;
  }
  .footer .a{
    color: #e9f6ff;
  }
  @media (max-width: 556px) {
    .footer p, .footer .footer-left{
      color: #e9f6ff;
      font-size: 16px;
      margin: 15px}
    .footer{
      height: 100px;
      flex-wrap: wrap;
    }
  }
</style>
