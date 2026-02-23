//模版路由配置
import { createRouter, createWebHistory } from 'vue-router'
import { constantRoute } from './routes'
//创建路由器
const router = createRouter({
    //路由模式hash
    history: createWebHistory(),
    //路由配置
    routes: constantRoute,
    //滚动行为
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
})
export default router