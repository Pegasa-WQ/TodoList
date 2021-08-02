import instance from '../api/instance'
const state = {
  TOKEN: null
}

const actions = {
  USER_LOGIN ({ commit }, payload) {
    return instance.post('user/login', payload)
  }
}

const mutations = {
  SAVE_TOKEN (state, payload) {
    state.TOKEN = payload
  }
}

const getters = {
  IS_LOGGED_IN (state) {
    return !!state.TOKEN
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
