<template>
  <div>
    <h2 style="text-align: center; margin-bottom: 20px; font-size: 36px">{{title}}</h2>
    <flickity  v-if="Object.keys(ads).length > 0" ref="flickity" :options="flickityOptions">
      <div :key="ad.id" v-for="ad in ads" class="carousel-cell">
        <img :src="ad.img[0]" alt="">
        <div class="carousel-content">
          <h2>{{ad.name}}</h2>
        </div>
      </div>
    </flickity>

    <!-- if you don't want to use the buttons Flickity provides -->

  </div>
</template>

<script>
import Flickity from 'vue-flickity'
export default {
  props: ['category', 'title'],
  components: {
    Flickity
  },

  data () {
    return {
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
        // any options from Flickity can be used
      }
    }
  },

  methods: {
    next () {
      this.$refs.flickity.next()
    },

    previous () {
      this.$refs.flickity.previous()
    }
  },
  computed: {
    ads () {
      return this.$store.getters.promoAds(this.category)
    }
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
}
.carousel-cell img{
  max-width: 50%;
  min-width: 50%;
}
.carousel-content{
  width: 45%;
}
.carousel-content h2{
  text-align: center;
  margin-top: 50px;
}
</style>
