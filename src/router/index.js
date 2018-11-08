import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import newPost from '@/components/pages/Ads/NewPost'
import Post from '@/components/pages/Ads/Post'
import Login from '@/components/pages/Auth/Login'
import Registration from '@/components/pages/Auth/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      props: true,
      name: 'post',
      component: Post
    },
    {
      path: '/new',
      name: 'new',
      component: newPost
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/reg',
      name: 'reg',
      component: Registration
    }],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
