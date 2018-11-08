<template>
  <div>
    <h2 class="pb-20 pt-20">{{title}}</h2>
    <div class="card-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  props: ['title'],
  components: {
    Card
  }
}
</script>

<style scoped>
  h2{
    font-size: 36px;
    text-align: center;
  }
  .card-list{
    box-sizing: border-box;
    display: flex;
    order: 4;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
