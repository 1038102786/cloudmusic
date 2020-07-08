import Vue from 'vue'
import App from './App.vue'
import axios from '../http/api1.js'
import router from './plugins/router'
import ElementUI from 'element-ui'
require("../mock/mock.js")

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
//Vue.use(router)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
