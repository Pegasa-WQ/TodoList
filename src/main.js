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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    const originalRequest = error.config
    console.log(error.response.data.error)
    if (error.response.status === 401 && error.response.data.error === 'Token expired') {
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/refreshAccessToken', { refresh_token: VueCookie.get('refreshToken') }, { headers: { Authorization: 'Bearer ' + VueCookie.get('refreshToken') } })
        .then(response => {
          VueCookie.set('accessToken', response.data.data.access_token)
          VueCookie.set('refreshToken', response.data.data.refresh_token)
        }).catch(error => {
          console.log(error)
        })
      return axios(originalRequest)
    }
    return Promise.reject(error)
  }
)
