<template>
  <div id="app" class="background">
    <header-menu></header-menu>
    <div class="container">
      <search-box class="pt-20 pb-40"></search-box>
      <hr>
      <router-view></router-view>
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import headerMenu from './components/pages/headerMenu'
import footerMenu from './components/pages/footerMenu'
import searchBox from './components/mainContent/searchBox'
import home from './components/pages/Home'
import newPost from './components/pages/Ads/NewPost'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    headerMenu,
    footerMenu,
    searchBox,
    home,
    newPost
  },
  methods: {}
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
    font-kerning: normal;
  }
  h1, h2, h3, h4, p{
    color: #0e6f8c;
  }
  .background {
    background: rgba(233, 246, 255, 0.41);
  }
  .container {
    width: 100%;
    padding-top: 120px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 588px) {
    .container {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 810px) {
    .container {
      padding-top: 75px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  .underline-none{
  text-decoration: none;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .pb-20 {
    padding-bottom: 20px;
  }
  .pr-20{
    padding-right: 20px;
  }
  .pb-40{
    padding-bottom: 40px;
  }
  .pb-50{
    padding-bottom: 50px;
  }
  .pt-50{
    padding-top: 50px;
  }
  button{
    padding: 10px 20px 10px 20px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #0e6f8c;
    color: #0e6f8c;
    font-size: 18px;
  }
  button:hover{
    box-shadow: 0 0 10px grey;
  }
  button:focus{
    outline: none;
  }
</style>
