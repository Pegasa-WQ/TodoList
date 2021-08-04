import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth'
import refreshToken from '../store/refreschToken'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    refreshToken
  }
})
