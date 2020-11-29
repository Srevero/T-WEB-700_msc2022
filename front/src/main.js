import Vue from 'vue'
import vuetify from './plugins/vuetify'
import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
