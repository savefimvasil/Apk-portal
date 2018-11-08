<template>
  <div class="flex">
    <div>
      <h2 style="margin-bottom: 20px">Добавить новую запись</h2>
      <form action="">
        <div class="between">
          <label for="name">Название: *</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Название"
                 v-model="name"
          >
        </div>
        <hr>
        <div class="between">
          <label for="">Категория: *</label>
          <select name=""
                  v-model="category"
                  class="search-box"
          >
            <option :key="category" v-for="category in categories">{{category}}</option>
          </select>
        </div>
        <hr>
        <div class="between">
          <label for="">Описание: *</label>
          <textarea name=""
                    rows="10"
                    cols="50"
                    class="search-box"
                    placeholder="Полное описание (1000 символов без пробелов)"
                    v-model="description"
          ></textarea>
        </div>
        <hr>
        <div class="between">
          <label for="">Краткое: *</label>
          <textarea name=""
                    rows="2"
                    cols="50"
                    class="search-box"
                    placeholder="Краткое описание (50 символов без пробелов)"
                    v-model="miniDescription"
          ></textarea>
        </div>
        <hr>
        <div class="between">
          <label for="">Версия App: *</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Версия приложения"
                 v-model="appVersion"
          >
        </div>
        <hr>
        <div class="between">
          <label for="">Версия OS:</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Версия Android"
                 v-model="androidVersion"
          >
        </div>
        <hr>
        <div class="between">
          <label for="">Разработчик:</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Разработчик"
                 v-model="developer"
          >
        </div>
        <hr>
        <div class="between">
          <label for="">Market link: *</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Ссылка на приложение Play Market"
                 v-model="marketLink"
          >
        </div>
        <hr>
        <div class="between">
          <label for="">YouTube link:</label>
          <input title=""
                 type="text"
                 class="search-box"
                 placeholder="Ссылка на приложение YouTube"
                 v-model="youTubeLink"
          >
        </div>
        <hr>
      </form>
      <div class="sub-footer">
        <button class="submit-btn"
                ref="submitBtn"
                @click="onSubmit()"
        >Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ['Игры', 'Приложения'],
      name: '',
      category: '',
      description: '',
      miniDescription: '',
      appVersion: '',
      androidVersion: '',
      developer: '',
      marketLink: '',
      youTubeLink: ''
    }
  },
  methods: {
    onSubmit () {
      const userData = {}
      if (this.valid) {
        userData.email = this.email
        userData.password = this.password
      }
      this.email = ''
      this.password = ''
    },
    counterImage (i) {
      this.countImg += i
    }
  }
}
</script>

<style scoped>
  .flex h2{
    margin-top: 20px;
  }
  hr{
    margin: 5px 0 10px 0;
  }
  .flex{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    align-items: center;
    margin: 0 auto;
  }
  label{
    margin-right: 10px;
  }
  .between{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .search-box{
    box-sizing: border-box;
    width: 600px;
    font-size: 16px;
    border-radius: 10px;
    color: #0e6f8c;
    border: 1px solid #0e6f8c;
    padding: 5px 5px 5px 5px;
    margin-bottom: 5px;
  }
  @media (max-width: 576px) {
    .flex{
    }
    .search-box{
      width: 300px;
    }
  }
  .search-box:focus{
    border-color: #0e6f8c;
    outline: 0;
    box-shadow: 0 0 10px grey;
  }
  .sub-footer{
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }
  button{
    box-sizing: border-box;
    margin: 0;
  }
  button:disabled {
    background: grey;
    color: #e9f6ff;
  }
  button:disabled:hover{
    box-shadow: none;
  }
  .error-message{
    color: red;
    margin-bottom: 30px;
    margin-left: 10px;
  }
</style>
