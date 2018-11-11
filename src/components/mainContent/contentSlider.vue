<template>
  <div>
    <h2 class="pt-20 pb-20">{{title}}</h2>
    <div class="slider-flex"
         @mouseover="visibleBtn()"
         @mouseout="unvisibleBtn"
    >
      <button class="btn-slider" ref="btnVisiblePrev" @click="changeIndex(-1, 0)">
        <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </button>
      <img class="slider-img" :src="ads[indexAds].img" alt="">
      <div class="slider-info">
        <div class="slider-name">
          <h3>
            {{ads[indexAds].name}}
          </h3>
        </div>
        <div class="slider-description">{{ads[indexAds].miniDescription}}</div>
        <div align="center">
          <router-link :to="'/post/' + ads[indexAds].id">
            <button>
              Показать больше
            </button>
          </router-link>
        </div>
      </div>
      <button class="btn-slider" ref="btnVisibleNext" @click="changeIndex(1, 0)">
        <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </button>
    </div>
    <div class="slide-shower">
      <label v-for="i in ads"
             :key="i.id"
      >
        <input ref="'radio'+i.id"
               :id="'radio'+i.id"
               type="radio"
               disabled
        >
        <span @click="changeIndex(0, i)"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ads', 'title'],
  data () {
    return {
      indexAds: 0,
      adList: []
    }
  },
  methods: {
    visibleBtn () {
      this.$refs['btnVisiblePrev'].style.opacity = 1
      this.$refs['btnVisibleNext'].style.opacity = 1
    },
    unvisibleBtn () {
      this.$refs['btnVisiblePrev'].style.opacity = 0
      this.$refs['btnVisibleNext'].style.opacity = 0
    },
    changeIndex (i, n) {
      if (n && i === 0) {
        let ind = () => {
          for (let i = 0; i < (this.ads.length); i++) {
            if (this.ads[i].id === n.id) {
              return i
            }
          }
        }
        this.indexAds = ind()
      } else {
        this.indexAds += i
        if (this.indexAds >= this.ads.length) {
          this.indexAds = 0
        }
        if (this.indexAds < 0) {
          this.indexAds = this.ads.length - 1
        }
      }
      for (let i = 0; i < this.ads.length; i++) {
        let indexClearAd = 'radio' + this.ads[i].id
        document.getElementById(indexClearAd).checked = false
      }
      let indexAd = 'radio' + this.ads[this.indexAds].id
      document.getElementById(indexAd).checked = true
    }
  },
  mounted () {
    document.getElementById('radio' + this.ads[this.indexAds].id).checked = true
  }
}
</script>

<style scoped>
  h2{
    font-size: 36px;
    text-align: center;
  }
  h3{
    font-size: 36px;
    text-align: center;
    margin-right: 0;
    margin-left: 0;
  }
  .slider-flex{
    display: flex;
    overflow: auto;
    box-sizing: border-box;
    height: 300px;
  }
  .slider-img{
    width: 60%;
    height: 100%;
    margin-right: 25px;
  }
  .slider-info{
    height: 100%;
  }
  .slider-flex h3{
    margin-bottom: 15px;
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #0e6f8c;
    text-align: center;
  }
  .slider-flex .slider-description{
    text-align: center;
    margin-right: 0;
    font-size: 18px;
    padding-bottom: 15px;
    border-bottom: 1px solid #0e6f8c;
    margin-bottom: 15px;
  }
  .slider-description{
    flex: 10;
    margin-right: 25px;
  }
  .slider-description:hover,.slider-img:hover, .btn-slider:hover{
  }
  .btn-slider{
    height: 100%;
    border: none;
    background: none;
    box-shadow: none;
    border-bottom: none;
  }
  .btn-slider:focus {
    border: none;
    outline: 0;
  }
  .fa{
    color: #0e6f8c;
  }
  .slide-shower{
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  input[type=radio]{
    display: none;
  }
  input[type=radio] + span{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #e9f6ff;
    border: 2px solid #0e6f8c;
    margin: 5px;
  }
  input[type=radio]:checked + span{
    background-color: #0e6f8c;
  }
  @media (max-width: 576px) {
    .slider-flex{
      height: 250px;
      justify-content: center;
    }
    .slider-img{
      flex: 1;
    }
  }
  @media (max-width: 768px) {
    .slider-flex{
      justify-content: center;
    }
    .slider-info{
      display: none;
      justify-content: center;
    }
    .slider-img{
      flex: 2;
      width: 75%;
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 992px) {
    .slider-flex h3{
      border-bottom: 1px solid #0e6f8c;
      text-align: center;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .slider-flex .slider-description{
      text-align: center;
      margin-right: 0;
      font-size: 16px;
      padding-bottom: 5px;
      border-bottom: 1px solid #0e6f8c;
      margin-bottom: 5px;
    }
    .slider-description{
      flex: 10;
      margin-right: 25px;
    }
  }
  @media (max-width: 1200px) {
    .slider-img{
      width: 45%;
    }
  }
</style>
