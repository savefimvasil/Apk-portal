<template>
  <div>
    <form action="" class="search-form">
      <input title="" type="text" class="search-box" placeholder="Название приложения">
      <button class="search-button">
        <i class="fa fa-search fa-1.5x" aria-hidden="true"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .search-form{
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 40px;
  }
  .search-box{
    width: 50%;
    margin-right: 15px;
    font-size: 18px;
    border-radius: 10px;
    color: #0e6f8c;
    border: 1px solid #0e6f8c;
    padding: 10px 10px 10px 10px;
  }
  .search-box:focus{
    border-color: #0e6f8c;
    outline: 0;
    box-shadow: 0 0 10px grey;
  }
  .search-button{
    width: 40px;
    height: auto;
    border-radius: 25px;
    color: #0e6f8c;
    background: #fff;
    font-size: 18px;
    border: 1px solid #0e6f8c;
    padding: 0;
    text-align: center;
  }
  .search-button:hover{
    box-shadow: 0 0 10px grey;
  }
  .search-button:focus{
    outline: 0;
  }

</style>
