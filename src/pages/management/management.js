import Vue from 'vue'
import Management from './management.vue'
import store from '../../store'
import axios from '../../control/filter/http.js'
import VueAxios from 'vue-axios'
import elementui from "element-ui";
import router from './router'

Vue.use(elementui);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Management)
}).$mount('#management');