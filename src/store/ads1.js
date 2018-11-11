import * as fb from 'firebase'
class Ad {
  constructor (
    name = '',
    category = '',
    description = '',
    miniDescription = '',
    appVersion = '',
    androidVersion = '',
    developer = '',
    marketLink = '',
    youTubeLink = '',
    logo = '',
    img = [],
    promo = false,
    author = '',
    date = Date.now(),
    viewCounter = 0,
    comments = [],
    id = ''
  ) {
    this.name = name
    this.category = category
    this.description = description
    this.miniDescription = miniDescription
    this.appVersion = appVersion
    this.androidVersion = androidVersion
    this.marketLink = marketLink
    this.youTubeLink = youTubeLink
    this.developer = developer
    this.logo = logo
    this.img = img
    this.promo = promo
    this.author = author
    this.date = date
    this.viewCounter = viewCounter
    this.comments = comments
    this.id = id
  }
}
export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      console.log(payload)
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      console.log(payload)
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      try {
        const ad = new Ad(
          payload.name,
          payload.category,
          payload.description,
          payload.miniDescription,
          payload.appVersion,
          payload.androidVersion,
          payload.developer,
          payload.marketLink,
          payload.youTubeLink,
          '',
          '',
          payload.promo,
          getters.user.id,
          Date.now(),
          0,
          []
        )
        const newAd = await fb.database().ref('ads').push(ad)
        commit('createAd', {
          ...ad,
          id: newAd.key
        })
        console.log(newAd)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      const resultAds = []
      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          console.log(key)
          resultAds.push(
            new Ad(
              ad.name,
              ad.category,
              ad.description,
              ad.miniDescription,
              ad.appVersion,
              ad.androidVersion,
              ad.developer,
              ad.marketLink,
              ad.youTubeLink,
              'https://upload.wikimedia.org/wikipedia/az/6/6a/Clash_of_Clans_logo.png',
              ['https://upload.wikimedia.org/wikipedia/az/6/6a/Clash_of_Clans_logo.png'],
              ad.promo,
              ad.author,
              Date.now(),
              0,
              [],
              key))
        })
        commit('loadAds', resultAds)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    apps (state) {
      return state.ads.filter(ad => {
        if (ad.category === 'Приложения') return ad
      })
    },
    games (state) {
      return state.ads.filter(ad => {
        if (ad.category === 'Игры') return ad
      })
    },
    promoApps (state) {
      return state.ads.filter(ad => {
        if (ad.category === 'Приложения' && ad.promo) return ad
      })
    },
    promoGames (state) {
      return state.ads.filter(ad => {
        if (ad.category === 'Игры' && ad.promo) return ad
      })
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
