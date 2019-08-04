import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({

    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    console.log(to);

    if (to.path == '/log/123') {
        next()
    } else {
        if (store.state.isLogin) {
            next()
        } else {

            alert('请先登录')
            next('/log/123')
        }
    }
})
router.afterEach((to, from) => {
    alert('Welcome')
})