import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: "首页"
                },
                component: () => import('@/views/home/index.vue')
            },
            {
                path: 'login',
                name: 'login',
                meta: {
                    title: '登录'
                },
                component: () => import('@/views/login/index.vue')
            },
        ]
    },
]
export default routes