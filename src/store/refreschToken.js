import axios from 'axios'

const state = {
}

const actions = {
  REFRESH_TOKEN: () => {
    return new Promise((resolve, reject) => {
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/refreshAccessToken')
    })
  }
}

const mutations = {
}

const getters = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
