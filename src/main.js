import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie'
import ApiPlugin from './plugins/api'
import axios from 'axios'

Vue.use(ApiPlugin)
Vue.use(VueCookie)

Vue.config.productionTip = false

axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  }, error => {
    const config = error.config
    if (error.response.status === 401 && error.response.data.message === 'Token Invalid' && !error.config._retry) {
      error.config._retry = true
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/refreshAccessToken', { refresh_token: VueCookie.get('refreshToken') }, { headers: { Authorization: 'Bearer ' + VueCookie.get('refreshToken') } })
        .then(response => {
          VueCookie.set('refreshToken', response.data.data.refresh_token)
          VueCookie.set('accessToken', response.data.data.access_token)
          config.headers.Authorization = 'Bearer ' + VueCookie.get('accessToken')
          axios(config)
        }).catch(error => {
          console.log(error)
        })
    }
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
