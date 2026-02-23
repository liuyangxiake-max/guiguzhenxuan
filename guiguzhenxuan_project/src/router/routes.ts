//对外暴露配置路由(常量路由)
export const constantRoute = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'home'
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'layout'
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404'
    },
    //配置任意路由
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]