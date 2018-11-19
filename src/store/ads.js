import * as fb from 'firebase'
class Ad {
  constructor (
    name = '',
    category = '',
    description = '',
    appVersion = '',
    androidVersion = '',
    developer = '',
    marketLink = '',
    youTubeLink = '',
    logo = '',
    img = '',
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
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('setLoading', true)
      commit('clearError')
      const logo = payload.logo
      const img = payload.img
      try {
        const newAd = new Ad(
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
          [],
          ''
        )
        const ad = await fb.database().ref('ads').push(newAd)
        const logoImageExt = logo.name.slice(logo.name.lastIndexOf('.'))
        await fb.storage().ref(`ads/${ad.key}${logoImageExt}`).put(logo)
        const logoImageSrc = await fb.storage().ref(`ads/${ad.key}${logoImageExt}`).getDownloadURL()
        const id = ad.key
        const imgImageSrc = []
        for (let i = 0; i < img.length; i++) {
          await fb.storage().ref(`ads/img/${ad.key}${logoImageExt}${i}`).put(img[i])
          imgImageSrc[i] = await fb.storage().ref(`ads/img/${ad.key}${logoImageExt}${i}`).getDownloadURL()
        }
        fb.database().ref('ads').child(ad.key).update({
          logo: logoImageSrc,
          img: imgImageSrc
        })
        commit('createAd', {
          ...newAd,
          id: id,
          logo: logoImageSrc,
          img: imgImageSrc
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultAds = []
      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(
              ad.name,
              ad.category,
              ad.description,
              ad.appVersion,
              ad.androidVersion,
              ad.developer,
              ad.marketLink,
              ad.youTubeLink,
              ad.logo,
              ad.img,
              ad.promo,
              ad.author,
              ad.date,
              0,
              [],
              key))
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
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
    },
    promoAds (state) {
      return category => state.ads.filter(ad => {
        if (ad.category === category && ad.promo) return ad
      })
    }
  }
}
