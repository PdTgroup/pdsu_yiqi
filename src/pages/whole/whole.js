import Vue from 'vue'
import Whole from './Whole.vue'
import store from '../../store'
import axios from '../../control/filter/http.js'
import router from "./router";
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import {
  Menu,
  Icon,
  Alert,
  Table,
  Button,
  Submenu,
  Message,
  MenuItem,
  Dropdown,
  Cascader,
  MessageBox,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  MenuItemGroup,
  Notification,
} from 'element-ui';

Vue.use(Menu);
Vue.use(Icon);
Vue.use(Alert);
Vue.use(Table);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(Cascader);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(TableColumn);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(MenuItemGroup);
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  store,
  router,
  render: h => h(Whole)
}).$mount('#whole')
