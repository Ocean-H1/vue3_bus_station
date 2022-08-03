import { createRouter ,createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('../layout/index.vue'),
        redirect: '/layout/home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: "首页"
                },
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=> {

    // 动态修改标题
    if(to.meta.title){
        document.title = to.meta.title as string
    }
    next()
})
export default router