import Vue from 'vue';
import VueRouter from "vue-router";
import store from "../../store/store.js";
import * as types from "../../store/types.js";
let Message = ()=> import("./view/Message") ;
// let ManageCenter = ()=> import("./view/ManagementCenter") ;

Vue.use(VueRouter); //全局注册路由

let routes = [
  {
    path: '/management',
    name:'management',
    component:Message

  },
  {
    path: '/management/message',
    name:'message',
    component:Message

  }
];
// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

let router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to,from, next) => {
  if (to.matched.some((r) => r.meta.requireAuth)) {
    // eslint-disable-next-line no-undef
    if (localStorage.token) {   //判断是否已经登录
      next();
    } else {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
export default router;