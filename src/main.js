
import Vue from 'vue'
// import UserDetail from './pages/user-detail.vue'
import router from './config/router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<userDetail/>',
    components: { UserDetail }
})
