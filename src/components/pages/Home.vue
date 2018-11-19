<template>
<div>
  <!--<content-slider class=""
                  :ads="promoGames"
                  title="Популярные игры"
  >
  </content-slider> -->
  <flixity-slider category="Игры" title="Популярные игры" class="pb-20 pt-20"></flixity-slider>
  <card-list title="Новые игры">
    <card-item :key="i"
               v-for="i in (games.length)"
               :ads="games[i-1]"
    ></card-item>
  </card-list>
  <!--<content-slider class=""
                  :ads="promoApps"
                  title="Лучшие приложения"
  ></content-slider>-->
  <flixity-slider category="Приложения" title="Популярные Приложения" class="pb-20 pt-20"></flixity-slider>
  <card-list title="Новые приложения">
    <card-item :key="i"
               v-for="i in (apps.length)"
               :ads="apps[i-1]"
    ></card-item>
  </card-list>
</div>
</template>

<script>
import searchBox from '../mainContent/searchBox'
import contentSlider from '../mainContent/contentSlider'
import cardList from '../mainContent/CardList'
import cardItem from '../mainContent/Card'
import flixitySlider from '../mainContent/FlickitySlider'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    searchBox,
    contentSlider,
    cardList,
    cardItem,
    flixitySlider
  },
  computed: {
    ads () {
      return this.$store.getters.ads
    },
    apps () {
      return this.$store.getters.apps
    },
    games () {
      return this.$store.getters.games
    },
    promoApps () {
      return this.$store.getters.promoApps
    },
    promoGames () {
      return this.$store.getters.promoGames
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
