<template>
  <div class="header">
    <span class="logo"><router-link to="/" class="brand">The apk market</router-link></span>
    <ul class="navigation">
      <li :key="linkMenu.name"
          v-for="linkMenu in topMenuLinks()"
          ref="menuPos"
          class="unvisible-menu"
      >
        <router-link :to="linkMenu.path"
                     class="navigation-item"
        >
          <i :class="linkMenu.logo" class="pr-20" aria-hidden="true"></i>
          {{linkMenu.name}}
        </router-link>
      </li>
      <li :key="menuBtn.name"
          class="unvisible-menu-btn"
          @click="openMenu()"
      >
        <a class="navigation-item">
          <i :class="menuBtn.logo" aria-hidden="true"></i>
          {{menuBtn.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import searchBox from '../mainContent/searchBox'
export default {
  components: {
    searchBox
  },
  data () {
    return {
      menuBtn: {name: 'Меню', logo: 'fa fa-list-ul  fa-1.5x'},
      menuCheck: 'none'
    }
  },
  methods: {
    topMenuLinks () {
      return [
        {name: 'Главная', logo: 'fa fa-home fa-1.5x', path: '/'},
        {name: 'Игры', logo: 'fa fa-bomb fa-1.5x', path: '/games'},
        {name: 'Приложения', logo: 'fa fa-play fa-1.5x', path: '/apps'},
        {name: 'Войти', logo: 'fa fa-male fa-1.5x', path: '/login'},
        {name: 'Добавить новость', logo: 'fa fa-plus-square fa-1.5x', path: '/new'}]
    },
    openMenu () {
      for (let i = 0; i < this.$refs.menuPos.length; i++) {
        if (this.$refs.menuPos[i].className === 'unvisible-menu') {
          this.$refs.menuPos[i].className = 'visible-menu'
        } else {
          this.$refs.menuPos[i].className = 'unvisible-menu'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .header{
    position: fixed;
    z-index: 1;
    width: 100%;
    background: #0e6f8c;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    box-shadow: 0 0 10px #0e6f8c;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .logo{
    background: #0e6f8c;
  }
  .navigation{
    list-style: none;
    display: flex;
    white-space: nowrap;
  }
  .logo .brand{
    text-decoration: none;
    display: block;
    padding: 12px 24px 10px 44px;
    font-size: 24px;
    text-underline: none;
    color: #e9f6ff;
    border-bottom: 4px solid #0e6f8c;
  }
  .logo .brand:hover{
    cursor: default;
  }
  .navigation .navigation-item{
    text-decoration: none;
    display: block;
    padding: 16px 16px 14px 16px;
    font-size: 18px;
    text-underline: none;
    color: #e9f6ff;
    border-bottom: 4px solid #0e6f8c;
  }
  .navigation .navigation-item:hover{
    border-bottom: 4px solid #e9f6ff;
    transition: 0.3s;
    cursor: default;
  }
  .unvisible-menu-btn{
    display: none;
  }
  /** MEDIA QUERIES  **/
  @media all and (max-width: 767px) {
    .header {
      -webkit-flex-flow: column wrap;
      flex-flow: column wrap;
      padding: 0;
    }
    .navigation {
      justify-content: space-around;
      -webkit-flex-flow: column wrap;
      flex-flow: column wrap;
      padding: 0;
    }
    .navigation .navigation-item {
      text-align: center;
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .logo{
      text-align: center;
    }
    .navigation li:last-of-type .navigation-item {
      border-bottom: none;
    }
    .navigation .navigation-item:hover{
      border-bottom: none;
      background: darken(#0e6f8c, 2%);
    }
    .visible-menu{
      display: block
    }
    .unvisible-menu{
      display: none
    }
    .unvisible-menu-btn{
      display: block;
    }
  }
</style>
