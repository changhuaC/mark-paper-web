import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Regist from '../pages/account/regist.vue'
import FindPassword from '../pages/account/find-password.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/',
            name: 'regist',
            component: Regist
        },
        {
            path: '/',
            name: 'findPassword',
            component: FindPassword
        }
    ]
})
