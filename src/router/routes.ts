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
        ]
    },
]
export default routes