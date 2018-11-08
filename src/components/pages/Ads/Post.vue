<template>
    <div>
      <h1>{{ad.name}}</h1>
      <hr>
      <div class="flex">
        <img :src="ad.logo" width="200px" height="200px" style="margin-right: 40px" alt="">
        <div class="flex-header">
          <p><label for="">Категория:</label>{{ad.category}}</p>
          <p><label for="">Версия приложения:</label>{{ad.appVersion}}</p>
          <p><label for="">Версия Android:</label>{{ad.androidVersion}}</p>
          <p><label for="">Разработчик:</label>{{ad.developer}}</p>
          <p><label for="">Просмотрено:</label>{{ad.viewCounter}}</p>
          <p><label for="">Автор статьи:</label>{{ad.author}}</p>
          <p><label for="">Дата побликации:</label>{{ad.date}}</p>
        </div>
      </div>
      <hr>
      <p class="description">{{ad.description}}</p>
      <hr>
      <div class="flex-img">
        <img :key="i" v-for="(image, i) in ad.img" :src="image" alt="" width="300px" height="170px">
      </div>
      <hr>
      <div class="comments">
        <div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  },
  beforeMount () {
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
    margin: 20px 0 0 0
  }
  hr{
    margin: 20px 0;
  }
  label{
    margin-right: 10px;
  }
  img{
    margin: 10px;
  }
  .flex{
    display: flex;
    justify-content: center;
  }
  .flex-header{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .flex-img{
    width: 680px;
    box-sizing: border-box;
    display: flex;
    order: 4;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  p{
    white-space: pre-line;
  }
  .description{
    width: 650px;
    margin: 0 auto;
  }
</style>
