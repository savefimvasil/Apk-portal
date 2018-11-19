<template>
    <div class="container">
      <router-link class="router-link mb-20" to="/new">Новая запись</router-link>
      <router-link class="router-link mb-20" to="/postList">Список записей (редактирование)</router-link>
      <router-link class="router-link" to="/sliderList">Управление содержимым слайдеров</router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 20px 0 0 0;
    padding: 0;
    height: 71.1vh;
    justify-content: center;
  }
  .router-link{
    padding: 10px 20px 10px 20px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #0e6f8c;
    color: #0e6f8c;
    font-size: 18px;
    text-decoration: none;
  }
  .router-link:hover{
    box-shadow: 0 0 10px grey;
    transition: 0.3s;
  }
  .router-link:focus{
    outline: none;
  }
</style>
