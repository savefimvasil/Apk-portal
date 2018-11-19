<template>
  <div id="app" class="background">
    <div id="cube-loader" v-if="loading">
      <div class="caption">
        <div class="cube-loader">
          <div class="cube loader-1"></div>
          <div class="cube loader-2"></div>
          <div class="cube loader-4"></div>
          <div class="cube loader-3"></div>
        </div>
      </div>
    </div>
    <div class="main-content" v-if="!loading">
      <header-menu></header-menu>
      <div class="container">
        <search-box class="pt-20 pb-40"></search-box>
        <hr>
        <router-view></router-view>
      </div>
      <footer-menu></footer-menu>
    </div>
  </div>
</template>

<script>
import headerMenu from './components/pages/headerMenu'
import footerMenu from './components/pages/footerMenu'
import searchBox from './components/mainContent/searchBox'
import home from './components/pages/Home'
import newPost from './components/Admin/NewPost'

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
  methods: {},
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
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
  .mb-20{
    margin-bottom: 20px;
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
    transition: 0.3s;
    box-shadow: 0 0 10px grey;
  }
  button:focus{
    outline: none;
  }

  //PRELOADER
  #cube-loader {
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    position: fixed;
    & .caption {
      margin: 0 auto;
    }
    .cube-loader {
      width: 73px;
      height: 73px;
      margin: 0 auto;
      margin-top: 49px;
      position: relative;
      transform: rotateZ(45deg);

      & .cube {
        position: relative;
        transform: rotateZ(45deg);
        width: 50%;
        height: 50%;
        float: left;
        transform: scale(1.1);
      }
      & .cube:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0e6f8c;
        animation: cube-loader 2.76s infinite linear both;
        transform-origin: 100% 100%;
      }
      & .loader-2 {
        transform: scale(1.1) rotateZ(90deg);
      }
      & .loader-3 {
        transform: scale(1.1) rotateZ(180deg);
      }
      & .loader-4 {
        transform: scale(1.1) rotateZ(270deg);
      }
      & .loader-2:before {
        animation-delay: 0.35s;
      }
      & .loader-3:before {
        animation-delay: 0.69s;
      }
      & .loader-4:before {
        animation-delay: 1.04s;
      }
    }
  }
  @keyframes cube-loader {
    0%, 10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }}
</style>
