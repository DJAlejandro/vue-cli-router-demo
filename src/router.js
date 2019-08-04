import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // linkActiveClass :'router-actived',
    routes: [
        { path: '/a', redirect: '/about' }, //重定向
        { path: '/b', redirect: { name: 'about' } },
        {
            path: '/',
            name: 'home',
            components: { //命名视图
                default: Home,
                suba: () => import(/* webpackChunkName: "SubA" */ './views/SubA.vue'),
                subb: () => import(/* webpackChunkName: "SubB" */ './views/SubB.vue')


            },
            beforeEnter: (to, from, next) => {
                alert('路由独享的守卫')
                next()
            }
        },
        {
            path: '/about',
            alias: '/sub', //别名
            name: 'about-pro',
            component: () => import(/* webpackChunkName: "About" */ './views/About.vue')
        },
        {
            path: '/about/:username',
            name: 'about',
            redirect: { name: 'first' },
            component: () => import(/* webpackChunkName: "About" */ './views/About.vue'),
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "About" */ './components/First.vue')
                },
                {
                    path: 'first',
                    name: 'first',
                    component: () => import(/* webpackChunkName: "About" */ './components/First.vue')
                },
                {
                    path: 'second',
                    name: 'second',
                    component: () => import(/* webpackChunkName: "About" */ './components/Second.vue')
                }
            ]
        },
        {
            path: '/log/:username',
            name: 'log',
            component: () => import(/* webpackChunkName: "Log" */ './views/Log.vue'),
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "SubA" */ './views/SubA.vue')
                },
                {
                    path: 'suba',
                    name: 'suba',
                    component: () => import(/* webpackChunkName: "SubA" */ './views/SubA.vue')
                },
                {
                    path: 'subb',
                    name: 'second',
                    component: () => import(/* webpackChunkName: "SubB" */ './views/SubB.vue')
                }
            ]

        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "About" */ './views/Register.vue')
        },
        {
            // 会匹配所有路径 通常用于客户端 404 错误
            path: '*',
            component: Home
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 100 }
        // }
        return { x: 0, y: 1000 }
    }
})
