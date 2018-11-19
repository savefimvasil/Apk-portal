import * as fb from 'firebase'

class User {
  constructor (id, admin = false) {
    this.id = id
    this.admin = admin
  }
}

export default {
  state: {
    user: null,
    admin: false,
    error: null,
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAdmin (state, payload) {
      state.admin = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        if (email === 'savefimvasil@gmail.com' || email === 'admin@gmail.com') {
          commit('setUser', new User(user.uid, true))
          commit('setAdmin', true)
        } else {
          commit('setUser', new User(user.uid, false))
          commit('setAdmin', false)
        }
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    logOutUser ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    },
    autoLogin ({commit}, payload) {
      if (payload.email === 'savefimvasil@gmail.com' || payload.email === 'admin@gmail.com') {
        commit('setUser', new User(payload.uid, true))
      } else commit('setUser', new User(payload.uid, false))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    },
    isUserLoggedIn (state) {
      return state.user
    }
  }
}
