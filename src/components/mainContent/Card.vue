<template>
  <router-link class="underline-none"
               :to="'/post/' + ads.id"
  >
    <div class="card">
      <h3>{{ads.name}}</h3>
      <img :src="ads.logo" alt="" width="150px" height="150px">
      <p>{{ads.miniDescription}}</p>
      <i class="fa fa-download">Бесплатно!</i>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['ads'],
  data () {
    return {
      ad: this.ads
    }
  }
}
</script>

<style>
  h3 {
    margin: 10px 30px 0 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid #0e6f8c;
    text-align: center;
  }
  .card{
    box-sizing: border-box;
    border: 1px solid #0e6f8c;
    margin: 10px;
    border-radius: 10px;
    width: 235px;
    height: 310px;
    flex-wrap: wrap;
    wrap-option: 4;
    background: #fff;
    padding: 5px;
  }
  .card:hover{
    box-shadow: 0 0 10px grey;
    border-bottom: 2px solid #0e6f8c;
  }
  .card img{
    margin: 0 30px 5px 30px;
    padding: 5px;
    border-bottom: 1px solid #0e6f8c;
  }
  .card p{
    text-align: center;
  }
  .card i {
    display: flex;
    justify-content: space-between;
    color: #0e6f8c;
    font-size: 24px;
    text-align: center;
    margin: 10px 20px 20px 20px;
    padding: 0 15px;
  }
</style>
