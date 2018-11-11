// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import * as fb from 'firebase'

Vue.use(Vuelidate)
Vue.config.productionTip = false
// #a6dbfb
// #deebf4
// #828886
// #364b4a
// #0e2b3c
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCMgu-NcDKQCHbK76kP80z7_yHm83HmA5Q',
      authDomain: 'apk-project-1f162.firebaseapp.com',
      databaseURL: 'https://apk-project-1f162.firebaseio.com',
      projectId: 'apk-project-1f162',
      storageBucket: 'apk-project-1f162.appspot.com',
      messagingSenderId: '342375796091'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
