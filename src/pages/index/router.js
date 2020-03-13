import Vue from 'vue';
import VueRouter from "vue-router";
import store from "../../store/store.js";
import * as types from "../../store/types.js";

let Index = () => import('./view/Index.vue');
let Login = ()=> import('../login/Login.vue')
let IndexHome = () => import("../../components/IndexHome.vue")
let Port = () => import('../../components/subcomponents/management/Port.vue')
let User = () => import('../../components/subcomponents/management/User.vue')

Vue.use(VueRouter); //全局注册路由

let routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    meta: {
      requireAuth: true,  // 该路由项需要权限校验
    },
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: IndexHome
      },
      {
        path: '/port',
        name: '数据导入、导出',
        component: Port
      },
      {
        path: '/user',
        name: '用户管理',
        component: User
      }
    ]
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
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
      if(localStorage.token==="admin"){
        next();
      }
      if(localStorage.token==="user"){
        window.location = "/whole/message"
      }
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