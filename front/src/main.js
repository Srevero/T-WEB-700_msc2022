import Vue from 'vue'
import vuetify from './plugins/vuetify'
import router from './router'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
