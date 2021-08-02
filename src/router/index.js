import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import VueCookies from 'vue-cookies'
// import store from '../store/index'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // meta: { requiresAuth: true }
    beforeEnter: (to, from, next) => {
      if (VueCookies.get('accessToken')) {
        next()
      } else {
        next({ name: 'About' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // этот путь требует авторизации, проверяем залогинен ли
//     // пользователь, и если нет, перенаправляем на страницу логина
//     console.log(store)
//     if (!store.getters['auth/IS_LOGGED_IN']) {
//       next()
//     } else {
//       next({ name: 'About' })
//     }
//   } else {
//     next() // всегда так или иначе нужно вызвать next()!
//   }
// })

export default router
