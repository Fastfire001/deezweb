import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/Home'
import Search from '@/components/Search'
import Fav from '@/components/Fav'

const router = new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'fav', path: '/fav', component: Fav }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
