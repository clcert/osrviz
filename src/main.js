import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false

Vue.use(Chartkick.use(Chart))
Vue.use(VueObserveVisibility)
Chartkick.configure({language: "es", mapsApiKey: "AIzaSyAROaVunwQx8b8nR3SteJ_moM7SSPrnhh4"})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
