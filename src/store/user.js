import * as fb from 'firebase'

class User {
  constructor (id, admin) {
    this.id = id
    this.admin = admin
  }
}

export default {
  state: {
    user: null,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        if (email === 'savefimvasil@gmail.com') {
          commit('setUser', new User(user.uid, true))
        } else commit('setUser', new User(user.uid, false))
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    logOutUser ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    },
    autoLogin ({commit}, payload) {
      if (payload.email === 'savefimvasil@gmail.com') {
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
    isUserLoggedIn (state) {
      return state.user
    }
  }
}
