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
        <div class="between">
          <label for="">Лого:</label>
          <input title=""
                 type="file"
                 class="search-box"
                 @change="onLogoChange"
          >
        </div>
        <img v-if="logoImageSrc" :src="logoImageSrc" alt="" width="50px" height="50px">
        <hr>
        <div class="between">
          <label for="">Скриншоты:</label>
          <input title=""
                 type="file"
                 class="search-box"
                 @change="onScreenshotChange"
          >
        </div>
        <img :key="i" v-for="i in screenshotImageSrc" v-if="screenshotImageSrc" :src="i" alt="" width="100px" style="padding-right: 10px">
        <hr>
        <div class="between">
          <label for="">Слайдер:</label>
          <input title=""
                 type="checkbox"
                 class="search-box"
                 v-model="promo"
          >
        </div>
        <hr>
      </form>
      <div class="sub-footer">
        <button class="submit-btn"
                ref="submitBtn"
                @click="createAd()"
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
      youTubeLink: '',
      promo: false,
      logoImage: null,
      logoImageSrc: '',
      screenshotImage: [],
      screenshotImageSrc: []
    }
  },
  methods: {
    createAd () {
      const newPost = {}
      newPost.name = this.name
      newPost.category = this.category
      newPost.description = this.description
      newPost.miniDescription = this.miniDescription
      newPost.appVersion = this.appVersion
      newPost.androidVersion = this.androidVersion
      newPost.developer = this.developer
      newPost.marketLink = this.marketLink
      newPost.youTubeLink = this.youTubeLink
      newPost.promo = this.promo
      newPost.logo = this.logoImage
      newPost.img = this.screenshotImage
      this.$store.dispatch('createAd', newPost)
        .then(() => {
          this.$router.push('/')
        }).catch(e => {})
    },
    onLogoChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.logoImageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.logoImage = file
    },
    onScreenshotChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.screenshotImageSrc.push(reader.result)
      }
      reader.readAsDataURL(file)
      this.screenshotImage.push(file)
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
    min-height: 20px;
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
