import store from '../store/user'

export default function (from, to, next) {
  store.mutations.loading = true
  setTimeout(() => {
    if (store.state.user) {
      if (store.state.user.admin) {
        next()
      } else {
        next('/')
      }
    } else {
      next('/login?loginError=true')
    }
  }, 1000)
}
