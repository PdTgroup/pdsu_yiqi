import Vue from 'vue';
import VueRouter from "vue-router";

import store from "../../store/store.js";
import * as types from "../../store/types.js";

let Show = () => import("./view/Show.vue");
let OuterInfo = () => import ('../../components/echarts/info/OuterInfo.vue');
let UninputStuTable = () => import ('../../components/echarts/table/UninputStuTable');
let OutStudentTable = () => import ('../../components/echarts/table/OutStudentTable.vue');
let OutTeacherTable = () => import ('../../components/echarts/table/OutTeacherTable.vue');
let TeacherInfo = () => import ('../../components/echarts/info/TeacherInfo.vue');
let TempStudentTable = () => import ('../../components/echarts/table/TempStudentTable.vue');
let UninputStudentPie = () => import ('../../components/echarts/pie/UninputStudentPie.vue');
let DormitoryInfo = () => import ('../../components/echarts/info/DormitoryInfo.vue');
let StudentTempLine = () => import ('../../components/echarts/line/StudentTempLine.vue');
let TempTeacherTable = () => import ('../../components/echarts/table/TempTeacherTable.vue');
let ClassStuInfo = () => import ('../../components/echarts/info/ClassStuInfo.vue');
let Message = ()=> import("./view/Message") ;
Vue.use(VueRouter);//全局注册路由

let routes = [
    {
        path: "/whole",
        name: 'whole',
        component: Show
    },
    {
        path: "/whole/message",
        name: 'message',
        component:Message
    },
    {
        path: '/whole/tempStudentTable/:time/:role',
        name: 'tempStudentTable',
        component: TempStudentTable
    },
    {
        path: '/whole/outerInfo/:personId',
        name: 'outerInfo',
        component: OuterInfo
    },
    {
        path: '/whole/uninputStuTable/:department/:grade',
        name: 'uninputStuTable',
        component: UninputStuTable
    },
    {
        path: '/whole/outStudentTable/:time/:role',
        name: 'outStudentTable',
        component: OutStudentTable
    },
    {
        path: '/whole/outTeacherTable/:time/:role',
        name: 'outTeacherTable',
        component: OutTeacherTable
    },
    {
        path: '/whole/teacherInfo/:department/:flag',
        name: 'teacherInfo',
        component: TeacherInfo
    },
    {
        path: '/whole/uninputStudentPie/:department',
        name: 'uninputStudentPie',
        component: UninputStudentPie
    },
    {
        path: '/whole/dormitoryInfo/:dormitoryNum',
        name: 'dormitoryInfo',
        component: DormitoryInfo
    },
    {
        path: '/whole/studentTempLine/:name/:role',
        name: 'studentTempLine',
        component: StudentTempLine
    },
    {
        path: '/whole/tempTeacherTable/:time/:role',
        name: 'tempTeacherTable',
        component: TempTeacherTable
    },
    {
        path: '/whole/classStuInfo/:classNo',
        name: 'classStuInfo',
        component: ClassStuInfo
    }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}


let router = new VueRouter({
    mode: 'history',
    routes: routes
});


router.beforeEach((to, from, next) => {
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