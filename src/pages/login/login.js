import Vue from 'vue'
import Login from './Login.vue'
import store from '../../store'
import axios from '../../control/filter/http.js'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')