<template>
  <div>
    <h1>Post List</h1>
    <hr>
      <router-link :key="ad.id" v-for="ad in ads" class="flex-item" :to="'/change/' + ad.id">
        <p>{{ad.name}}</p>
        <p>{{ad.category}}</p>
        <p>{{ad.viewCounter}}</p>
        <p>Перейти к редактированию</p>
      </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  hr{
    margin: 5px 0 10px 0;
  }
  p{
    width: 25%;
    text-decoration: none;
  }
  .flex-item{
    display: flex;
    justify-content: space-between;
    border: 1px solid #0e6f8c;
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    text-decoration: none;
  }
</style>
