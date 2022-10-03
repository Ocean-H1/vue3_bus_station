import { createRouter ,createWebHistory} from "vue-router";
import routes from './routes'


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