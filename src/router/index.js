import Vue from 'vue'
import routerGuard from './router-guard'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Admin from '@/components/Admin/Admin'
import newPost from '@/components/Admin/NewPost'
import PostList from '@/components/Admin/PostList'
import SliderList from '@/components/Admin/SliderList'
import ChangePost from '@/components/Admin/ChangePost'
import Post from '@/components/Ads/Post'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

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
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: routerGuard
    },
    {
      path: '/new',
      name: 'new',
      component: newPost,
      beforeEnter: routerGuard
    },
    {
      path: '/postList',
      name: 'PostList',
      component: PostList,
      beforeEnter: routerGuard
    },
    {
      path: '/sliderList',
      name: 'SliderList',
      component: SliderList,
      beforeEnter: routerGuard
    },
    {
      path: '/change/:id',
      props: true,
      name: 'Change',
      component: ChangePost,
      beforeEnter: routerGuard
    },
    {
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
