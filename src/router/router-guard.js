import store from '../store/index'

export default function (from, to, next) {
  if (store.getters.isUserLoggedIn) {
    if (store.getters.user.admin === true) {
      next()
    }
  } else {
    console.log(3)
    next('/login?loginError=true')
  }
}
